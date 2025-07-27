// models/jobs.js
import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
  jobRole: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, required: true },
  jobType: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: String, default: () => new Date().toISOString().split('T')[0] }, // Optional: auto-fill date
}, { timestamps: true });

export default mongoose.models.Job || mongoose.model('Job', jobSchema);
