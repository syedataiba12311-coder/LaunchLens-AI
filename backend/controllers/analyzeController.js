import { analyzeIdea } from '../services/geminiService.js';

export const analyzeStartup = async (req, res) => {
  try {
    const result = await analyzeIdea(req.body);

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: 'Failed to analyze startup idea',
    });
  }
};
