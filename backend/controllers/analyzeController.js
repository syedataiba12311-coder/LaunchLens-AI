const REQUIRED_FIELDS = [
  'startupName',
  'startupIdea',
  'industry',
  'country',
  'audience',
  'stage',
  'budget',
  'goals',
];

export const analyzeStartup = async (req, res) => {
  try {
    const payload = req.body || {};
    const missingFields = REQUIRED_FIELDS.filter((field) => {
      const value = payload[field];
      return value === undefined || value === null || String(value).trim() === '';
    });

    if (missingFields.length > 0) {
      return res.status(400).json({
        success: false,
        message: `Missing required field(s): ${missingFields.join(', ')}`,
        missingFields,
      });
    }

    const { analyzeIdea } = await import('../services/geminiService.js');
    const result = await analyzeIdea(payload);

    if (!result || typeof result !== 'object') {
      throw new Error('AI returned an invalid response format.');
    }

    return res.status(200).json({
      success: true,
      data: {
        ...result,
        aiDisclaimer:
          'This report is AI-generated and intended for strategic guidance. Validate the output with market research, customer interviews, and product feasibility checks before making major decisions.',
      },
    });
  } catch (error) {
    console.error('Startup analysis failed:', error);

    const message =
      error?.message || 'Failed to analyze startup idea. Please try again with a clearer brief.';

    return res.status(500).json({
      success: false,
      message,
    });
  }
};
