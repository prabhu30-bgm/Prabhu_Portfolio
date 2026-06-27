import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import { Skill } from '@/models/Skill';

export async function GET() {
  try {
    await connectDB();
    const data = await Skill.find();
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
