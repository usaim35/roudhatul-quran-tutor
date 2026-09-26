import { NextRequest, NextResponse } from "next/server";
import { saveOtp, generateCode } from "@/lib/otp-store";

// Sends the OTP via Resend's REST API. Falls back to console-logging the
// code (demo mode) if RESEND_API_KEY isn't set, so local dev keeps working
// without any email provider configured.
async function sendOtpEmail(email: string, code: string) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.log(`[Roudhatul Quran] (demo mode, no RESEND_API_KEY) OTP for ${email}: ${code}`);
    return { sent: false };
  }

  // Until you verify your own domain in Resend, "onboarding@resend.dev" is
  // the only address Resend lets you send from, and it only delivers to the
  // email address you signed up to Resend with. Set EMAIL_FROM once you've
  // verified a domain to send to any recipient.
  const from = process.env.EMAIL_FROM || "Roudhatul Quran <onboarding@resend.dev>";

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [email],
      subject: "Your Roudhatul Quran verification code",
      html: `<p>Assalamu Alaikum,</p><p>Your verification code is:</p><p style="font-size:28px;font-weight:bold;letter-spacing:6px;">${code}</p><p>This code expires in 10 minutes.</p>`,
    }),
  });

  if (!res.ok) {
    const errBody = await res.text();
    console.error(`[Roudhatul Quran] Resend send failed (${res.status}): ${errBody}`);
    return { sent: false, error: errBody };
  }

  return { sent: true };
}

export async function POST(req: NextRequest) {
  const { email, name } = await req.json();

  if (!email || typeof email !== "string" || !email.includes("@")) {
    return NextResponse.json({ message: "A valid email is required." }, { status: 400 });
  }

  const code = generateCode();
  saveOtp(email, code, name);

  const result = await sendOtpEmail(email, code);

  if (!result.sent && process.env.RESEND_API_KEY) {
    // We had a key but the send still failed (bad from-domain, unverified
    // recipient in Resend's test mode, etc.) — surface a clear message
    // instead of silently pretending it worked.
    return NextResponse.json(
      {
        message:
          "Couldn't send the email. If you haven't verified a domain in Resend yet, it can only send to the email address you signed up to Resend with.",
      },
      { status: 502 }
    );
  }

  return NextResponse.json({
    message: result.sent
      ? `A 6-digit code was sent to ${email}. Check your inbox (and spam folder).`
      : `A 6-digit code was sent to ${email}. (Demo mode: check the server console/logs for the code.)`,
  });
}
