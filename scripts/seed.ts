import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

import { connectDB } from '../lib/db';
import { Timeline } from '../models/Timeline';
import { Skill } from '../models/Skill';
import { Project } from '../models/Project';

import {
  projectsData,
  skillsData,
  timelineData,
} from '../constants/portfolioData';

dotenv.config();

async function seedDatabase() {
  try {
    await connectDB();

    console.log('Clearing existing collection data...');
    await Timeline.deleteMany({});
    await Skill.deleteMany({});
    await Project.deleteMany({});

    console.log('Seeding Timeline data...');
    await Timeline.insertMany(timelineData);

    console.log('Seeding Skill data...');
    await Skill.insertMany(skillsData);

    console.log('Seeding Project data...');
    await Project.insertMany(projectsData);

    console.log('Database seeded successfully!');

    mongoose.connection.close();
    process.exit(0);
  } catch (error: any) {
    console.error(`Seeding failed: ${error.message}`);
    mongoose.connection.close();
    process.exit(1);
  }
}

seedDatabase();
