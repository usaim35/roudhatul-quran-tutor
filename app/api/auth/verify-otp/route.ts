import { NextRequest, NextResponse } from "next/server";
import { checkOtp } from "@/lib/otp-store";

export async function POST(req: NextRequest) {
  const { email, code, name } = await req.json();

  if (!email || !code) {
    return NextResponse.json({ message: "Email and code are required." }, { status: 400 });
  }

  const { valid, name: storedName } = checkOtp(email, code);

  if (!valid) {
    return NextResponse.json({ message: "Invalid or expired code. Please try again." }, { status: 401 });
  }

  const user = {
    email,
    name: storedName || name || email.split("@")[0],
    joinedAt: new Date().toISOString(),
  };

  return NextResponse.json({ message: "Verified successfully.", user });
}
