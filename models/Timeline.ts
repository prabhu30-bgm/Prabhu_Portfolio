import mongoose, { Schema, Model } from 'mongoose';

export interface ITimeline {
  id: string;
  type: 'experience' | 'education';
  title: string;
  subtitle?: string;
  organization: string;
  period: string;
  description: string[];
}

const timelineSchema = new Schema<ITimeline>({
  id: { type: String, required: true, unique: true },
  type: {
    type: String,
    enum: ['experience', 'education'],
    required: true,
  },
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  organization: { type: String, required: true },
  period: { type: String, required: true },
  description: [{ type: String }],
});

export const Timeline: Model<ITimeline> =
  mongoose.models.Timeline || mongoose.model<ITimeline>('Timeline', timelineSchema);
