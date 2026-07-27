import dotenv from "dotenv";
dotenv.config();

import express from 'express';
import cors from 'cors';

console.log("GROQ KEY:", process.env.GROQ_API_KEY?.slice(0, 10));

import analyzeRoutes from './routes/analyzeRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'LaunchLens AI backend is running' });
});

app.use('/api/analyze', analyzeRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
