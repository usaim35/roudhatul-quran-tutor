import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are the friendly 24/7 assistant for Roudhatul Quran, an online Qur'an academy.
You help visitors and students with:
- General questions about the Qur'an, Hadith, Tajweed, Islamic history, and basic fiqh
- Questions about the academy's courses, pricing plans, and how classes work
Keep answers concise, warm, and respectful. For personal religious rulings (fatawa) or
sensitive fiqh questions, note that you can share general information but recommend
consulting a qualified local scholar for a binding ruling. If you don't know something,
say so rather than guessing.`;

export async function POST(req: NextRequest) {
  const apiKey = process.env.ANTHROPIC_API_KEY;

  const { messages } = await req.json();

  if (!Array.isArray(messages) || messages.length === 0) {
    return NextResponse.json({ message: "No messages provided." }, { status: 400 });
  }

  if (!apiKey) {
    return NextResponse.json({
      reply:
        "The AI assistant isn't fully set up yet — an ANTHROPIC_API_KEY needs to be added in your deployment's environment variables. (See README.md for setup steps.)",
    });
  }

  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-5",
        max_tokens: 500,
        system: SYSTEM_PROMPT,
        messages,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error(`[Roudhatul Quran] Anthropic API error (${res.status}): ${errText}`);
      return NextResponse.json({
        reply: "Sorry, I couldn't reach the assistant just now. Please try again in a moment.",
      });
    }

    const data = await res.json();
    const reply = data.content?.find((block: { type: string }) => block.type === "text")?.text
      || "I'm not sure how to answer that — could you rephrase?";

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("[Roudhatul Quran] Chat route error:", err);
    return NextResponse.json({
      reply: "Something went wrong reaching the assistant. Please try again.",
    });
  }
}
