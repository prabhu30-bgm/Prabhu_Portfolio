import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email and message are required.' },
        { status: 400 }
      );
    }

    // Grab environment variables safely on the server side
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    const privateKey = process.env.EMAILJS_PRIVATE_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS Environment configurations are missing.');
      return NextResponse.json(
        { error: 'Email service configuration error on server.' },
        { status: 500 }
      );
    }

    // Package the form inputs straight for the EmailJS REST API
    const emailjsPayload = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      accessToken: privateKey || undefined,
      template_params: {
        from_name: name,
        reply_to: email,
        message: message,
      },
    };

    const emailjsResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailjsPayload),
    });

    if (!emailjsResponse.ok) {
      const errorText = await emailjsResponse.text();
      console.error('EmailJS direct route dispatch failed:', errorText);
      return NextResponse.json(
        { error: 'Failed to dispatch email transmission.' },
        { status: 502 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Message successfully sent straight to mail.' },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('API execution routing failure:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}