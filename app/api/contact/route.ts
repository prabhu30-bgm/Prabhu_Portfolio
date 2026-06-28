import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';

// 1. Setup the schema safely
const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Explicitly ensure bufferCommands is enabled so queries wait for the connection
ContactSchema.set('bufferCommands', true);

const ContactModel = mongoose.models.Contact || mongoose.model('Contact', ContactSchema);

// 2. Strong Database Connection Strategy for Serverless environments
let cachedConnection: typeof mongoose | null = null;

async function connectToDatabase() {
  if (cachedConnection) {
    return cachedConnection;
  }

  if (!process.env.MONGODB_URI) {
    throw new Error('Missing environment variable: MONGODB_URI.');
  }

  // Enforce explicit await on the core connection promise
  cachedConnection = await mongoose.connect(process.env.MONGODB_URI, {
    bufferCommands: true, // Tells mongoose to safely queue queries until connection is active
  });

  return cachedConnection;
}

// 3. Main POST Handler
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Explicitly wait until the connection is fully finalized
    await connectToDatabase();

    // Insert document safely
    const newSubmission = new ContactModel({ name, email, message });
    await newSubmission.save();

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