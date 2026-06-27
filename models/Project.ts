import mongoose, { Schema, Model } from 'mongoose';

export interface IProject {
  id: string;
  title: string;
  mkNumber?: string;
  period?: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

const projectSchema = new Schema<IProject>({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  mkNumber: { type: String, default: '' },
  period: { type: String, default: '' },
  description: { type: String, required: true },
  image: { type: String, required: true },
  tags: [{ type: String }],
  githubUrl: { type: String, default: '' },
  liveUrl: { type: String, default: '' },
  featured: { type: Boolean, default: false },
});

export const Project: Model<IProject> =
  mongoose.models.Project || mongoose.model<IProject>('Project', projectSchema);
