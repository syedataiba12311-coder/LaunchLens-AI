import { useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'
import { analyzeStartup } from '../services/api'

const messages = [
  'Analyzing market...',
  'Finding competitors...',
  'Evaluating business model...',
  'Generating SWOT...',
  'Preparing marketing strategy...',
  'Almost done...',
]

function LoadingPage() {
  const [progress, setProgress] = useState(0)
  const [messageIndex, setMessageIndex] = useState(0)
  const [errorMessage, setErrorMessage] = useState('')
  const location = useLocation()
  const navigate = useNavigate()
  const startupName = location.state?.startupName || 'your startup'
  const payload = location.state?.payload || null
  const [analysisResult, setAnalysisResult] = useState(location.state?.analysis || null)
  const analysisRef = useRef(analysisResult)

  useEffect(() => {
    analysisRef.current = analysisResult
  }, [analysisResult])

  useEffect(() => {
    let isMounted = true

    if (payload && !analysisResult) {
      analyzeStartup(payload)
        .then((res) => {
          const data = res?.data || res?.report || res

          if (isMounted) {
            setAnalysisResult(data)
            analysisRef.current = data
          }
        })
        .catch((err) => {
          console.error('Analysis request error:', err)

          if (isMounted) {
            setErrorMessage(
              'We could not generate a full report from the AI service. A fallback draft is being prepared so you can still review the idea.'
            )

            const fallback = {
              startupName,
              executiveSummary:
                `${startupName} has a promising idea, but it needs stronger market validation and a clearer customer problem before launch.`,
              problemStatement:
                'The initial AI analysis could not complete, so this draft focuses on the next critical validation steps instead of a final verdict.',
              solution:
                'Refine the customer pain, positioning, and first use case before building anything large.',
              swot: {
                strengths: ['Clear initial concept'],
                weaknesses: ['Needs stronger validation'],
                opportunities: ['Targeted early traction'],
                threats: ['Unclear differentiation'],
              },
              revenueModel: 'Start with a single, focused monetization option tied to a narrow user group.',
              recommendations: [
                'Validate the problem with at least 10 target users.',
                'Build a landing page and measure sign-ups before full product development.',
                'Narrow the offer to one high-value use case.',
              ],
              successScore: 45,
              aiDisclaimer:
                'This report is a fallback draft from a failed AI response. Treat it as a starting point only and validate it with customer research.',
            }

            setAnalysisResult(fallback)
            analysisRef.current = fallback
          }
        })
    }

    const progressInterval = window.setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 4))
    }, 300)

    const messageInterval = window.setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length)
    }, 2200)

    const finishTimer = window.setTimeout(() => {
      navigate('/report', { state: { startupName, analysis: analysisRef.current } })
    }, 6500)

    return () => {
      isMounted = false
      window.clearInterval(progressInterval)
      window.clearInterval(messageInterval)
      window.clearTimeout(finishTimer)
    }
  }, [navigate, payload, startupName, analysisResult])

  const activeMessage = useMemo(() => messages[messageIndex], [messageIndex])

  return (
    <div className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.2),_transparent_25%),linear-gradient(135deg,_#09090b_0%,_#111114_100%)] px-4 py-8 text-zinc-100 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-2xl rounded-[32px] border border-zinc-800/80 bg-zinc-900/80 p-8 shadow-[0_25px_90px_rgba(0,0,0,0.3)] backdrop-blur-2xl sm:p-10"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">Launching analysis</p>
            <h1 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Preparing your validation report for {startupName}
            </h1>
          </div>
          <div className="hidden rounded-full border border-violet-500/20 bg-violet-500/10 p-3 text-violet-300 sm:block">
            <Sparkles size={20} />
          </div>
        </div>

        {errorMessage && (
          <div className="mt-6 rounded-2xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-200">
            {errorMessage}
          </div>
        )}

        <div className="mt-10">
          <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="h-full rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-400 to-sky-400"
            />
          </div>

          <div className="mt-6 flex items-center justify-between text-sm text-zinc-400">
            <span className="font-medium text-zinc-300">{activeMessage}</span>
            <span>{progress}%</span>
          </div>
        </div>

        <div className="mt-8 rounded-[24px] border border-zinc-800 bg-zinc-950/70 p-5">
          <div className="flex items-center gap-3 text-sm text-zinc-300">
            <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-violet-400" />
            Synthesizing your startup signal into a premium report
          </div>
          <div className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-500">
            {['SWOT', 'Go-to-market', 'Roadmap', 'Model'].map((item) => (
              <span key={item} className="rounded-full border border-zinc-800 px-3 py-1">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-end">
          <button
            type="button"
            onClick={() => navigate('/report', { state: { startupName, analysis: analysisResult } })}
            className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/70 px-4 py-2 text-sm font-medium text-zinc-200 transition hover:border-zinc-500"
          >
            Skip ahead
            <ArrowRight size={16} />
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default LoadingPage
