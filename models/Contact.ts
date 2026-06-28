import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with your API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    /* 1. Field Validation */
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    /* 2. Dispatch Email via Resend */
    const emailResponse = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['basavaprabhukudenatti@gmail.com'], // 👈 FIXED: Matches your exact Resend account email
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

    /* 3. Error Tracking */
    if (emailResponse.error) {
      console.error('Resend API Error details:', emailResponse.error);
      return NextResponse.json(
        { error: `Resend Error: ${emailResponse.error.message}` },
        { status: 502 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Message successfully sent straight to mail.' },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('API execution routing failure:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}