import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, message } = await req.json().catch(() => ({}));

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "name, email, and message are all required." },
      { status: 400 }
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json(
      { error: "That doesn't look like a valid email address." },
      { status: 400 }
    );
  }

  // TODO: wire this up to a real mailer (nodemailer, Resend, SendGrid, etc.)
  console.log("New contact form submission:", { name, email, message, receivedAt: new Date().toISOString() });

  return NextResponse.json({ ok: true }, { status: 201 });
}
