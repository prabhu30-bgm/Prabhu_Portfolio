import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';

// 1. Define Mongoose Schema and Model safely for Next.js hot-reloading
const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const ContactModel = mongoose.models.Contact || mongoose.model('Contact', ContactSchema);

// 2. Database Connection Helper
async function connectToDatabase() {
  if (mongoose.connection.readyState >= 1) return;

  if (!process.env.MONGODB_URI) {
    throw new Error('Missing environment variable: MONGODB_URI. Add it to your .env file.');
  }

  await mongoose.connect(process.env.MONGODB_URI);
}

// 3. Main POST Handler
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    // Validate form fields presence
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    await connectToDatabase();

    // Insert document directly into your database collection
    const newSubmission = new ContactModel({ name, email, message });
    await newSubmission.save();

    // Return success to trigger client effects (Confetti)
    return NextResponse.json(
      { success: true, message: 'Message successfully saved to database.' },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('API execution routing failure:', error);
    return NextResponse.json(
      { error: error.message || 'Internal database server error.' },
      { status: 500 }
    );
  }
}