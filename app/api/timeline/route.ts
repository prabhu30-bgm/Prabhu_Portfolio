import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import { Timeline } from '@/models/Timeline';

export async function GET() {
  try {
    await connectDB();
    const data = await Timeline.find();
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
