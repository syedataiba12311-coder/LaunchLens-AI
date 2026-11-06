import dotenv from "dotenv";
dotenv.config();

import express from 'express';
import cors from 'cors';

import analyzeRoutes from './routes/analyzeRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ limit: '1mb' }));

app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'LaunchLens AI backend is running',
    timestamp: new Date().toISOString(),
  });
});

app.use('/api/analyze', analyzeRoutes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found.',
  });
});

app.use((err, req, res, next) => {
  console.error('Unhandled backend error:', err);

  res.status(500).json({
    success: false,
    message: 'Something went wrong while analyzing your startup idea. Please try again.',
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
