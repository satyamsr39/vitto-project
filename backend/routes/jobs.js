import { Router } from 'express';
import Job from '../models/jobs.js';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const { location, type } = req.query;

    const filter = {};
    if (location) filter.location = new RegExp(location, 'i');
    if (type) filter.jobType = new RegExp(type, 'i');

    const jobs = await Job.find(filter).sort({ createdAt: -1 });
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch jobs.' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { jobRole, company, location, jobType, description } = req.body;

    if (!jobRole || !company || !location || !jobType || !description) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const newJob = new Job({ jobRole, company, location, jobType, description });
    await newJob.save();
    res.status(201).json(newJob);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create job.' });
  }
});

export default router;
