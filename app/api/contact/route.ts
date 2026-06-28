import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: NextRequest) {
  console.log("=== CONTACT API ROUTE TRIGGERED ===");

  try {
    const body = await req.json();
    const { name, email, message } = body;
    console.log("Incoming Data:", { name, email, message });

    /* 1. Validation Checks */
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 });
    }

    /* 2. Target Token Verification */
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("CRITICAL ERROR: RESEND_API_KEY is completely missing from your environment variables!");
      return NextResponse.json({ error: "Server Configuration Error: API key is missing." }, { status: 500 });
    }

    console.log("API Key found status: Active token present.");

    // Initialize fresh to bypass any initialization caching loops
    const resend = new Resend(apiKey);

    /* 3. Execute Transmission Loop */
    console.log("Attempting dispatch via Resend SDK...");
    const emailResponse = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['basavaprabhukudenatti@gmail.com'],
      subject: `New Portfolio Message from ${name}`,
      replyTo: email,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      `,
    });

    console.log("Resend Raw API Response Object:", emailResponse);

    /* 4. Deep Response Evaluation */
    if (emailResponse.error) {
      console.error('Explicit Resend Rejection Payload:', emailResponse.error);
      return NextResponse.json(
        { error: `Resend Refusal: ${emailResponse.error.message} (Code: ${emailResponse.error.name})` },
        { status: 502 }
      );
    }

    console.log("Transmission completely successful!");
    return NextResponse.json(
      { success: true, message: 'Message successfully sent straight to mail.' },
      { status: 200 }
    );

  } catch (globalCatchError: any) {
    console.error('CRITICAL LOGICAL CRASH IN ROUTE OVERALL:', globalCatchError);
    return NextResponse.json(
      { error: `Server System Crash: ${globalCatchError.message || globalCatchError}` },
      { status: 500 }
    );
  }
}