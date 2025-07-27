// index.js
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import jobRoutes from './routes/jobs.js'; // Make sure this is default exported

dotenv.config(); // Load environment variables from .env

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/jobs', jobRoutes); // Use /jobs as the base route

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('✅ Connected to MongoDB');
  // Start server only after DB connection
  app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
  });
}).catch((error) => {
  console.error('❌ MongoDB connection error:', error);
});
