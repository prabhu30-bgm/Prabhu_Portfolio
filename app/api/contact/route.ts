import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';

/* =========================
   1. Schema (safe init)
========================= */
const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  message: { type: String, required: true, trim: true },
  createdAt: { type: Date, default: Date.now },
});

/* Prevent model overwrite in dev (IMPORTANT in Next.js) */
const ContactModel =
  mongoose.models.Contact || mongoose.model('Contact', ContactSchema);

/* =========================
   2. DB Cache (Vercel-safe)
========================= */
let cached: typeof mongoose | null = null;

async function connectToDatabase() {
  if (cached) return cached;

  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error('MONGODB_URI is missing in environment variables');

  cached = await mongoose.connect(uri);
  return cached;
}

/* =========================
   3. POST Handler
========================= */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    /* Validation */
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields (name, email, message) are required.' },
        { status: 400 }
      );
    }

    /* Connect DB */
    await connectToDatabase();

    /* Save to MongoDB */
    const newMessage = await ContactModel.create({
      name,
      email,
      message,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Message stored successfully',
        data: newMessage,
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('Contact API Error:', error);

    return NextResponse.json(
      {
        error: error.message || 'Internal server error',
      },
      { status: 500 }
    );
  }
}