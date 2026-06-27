import mongoose, { Schema, Model } from 'mongoose';

export interface ISkill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'devops' | 'languages';
  level: number;
  x: number;
  y: number;
  connections: string[];
}

const skillSchema = new Schema<ISkill>({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  category: {
    type: String,
    enum: ['frontend', 'backend', 'devops', 'languages'],
    required: true,
  },
  level: { type: Number, required: true, min: 0, max: 100 },
  x: { type: Number, required: true },
  y: { type: Number, required: true },
  connections: [{ type: String }],
});

export const Skill: Model<ISkill> =
  mongoose.models.Skill || mongoose.model<ISkill>('Skill', skillSchema);
