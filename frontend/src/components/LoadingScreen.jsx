import { motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'

const messages = [
  'Analyzing market...',
  'Finding competitors...',
  'Evaluating business model...',
  'Generating SWOT...',
  'Preparing marketing strategy...',
  'Almost done...',
]

function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [messageIndex, setMessageIndex] = useState(0)
  const location = useLocation()
  const navigate = useNavigate()
  const startupName = location.state?.startupName || 'your startup'

  useEffect(() => {
    const progressInterval = window.setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 4))
    }, 300)

    const messageInterval = window.setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length)
    }, 2200)

    const finishTimer = window.setTimeout(() => {
      navigate('/dashboard', { state: { startupName } })
    }, 6500)

    return () => {
      window.clearInterval(progressInterval)
      window.clearInterval(messageInterval)
      window.clearTimeout(finishTimer)
    }
  }, [navigate, startupName])

  const activeMessage = useMemo(() => messages[messageIndex], [messageIndex])

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-8 text-zinc-100 sm:px-6">
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
            onClick={() => navigate('/dashboard', { state: { startupName } })}
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

export default LoadingScreen
