import express from 'express';
import { analyzeStartup } from '../controllers/analyzeController.js';

const router = express.Router();

router.post('/', analyzeStartup);

export default router;
