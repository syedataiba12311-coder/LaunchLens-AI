import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Sparkles, TrendingUp, ShieldCheck, Target, LineChart } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

function ReportPage() {
  const location = useLocation()
  const startupName = location.state?.startupName || 'Your startup'
  const analysis = location.state?.analysis || null

  const reportSections = useMemo(() => {
    const sections = [
      {
        title: 'Executive Summary',
        body: analysis?.executiveSummary || `${startupName} shows strong early potential in a fast-moving market. The concept is differentiated by a clear problem-solution fit and a pragmatic go-to-market strategy.`,
        icon: Sparkles,
      },
      {
        title: 'Problem Statement',
        body: analysis?.problemStatement || 'The product addresses a recurring pain point with measurable value for time savings, revenue growth, or efficiency improvements.',
        icon: Target,
      },
      {
        title: 'SWOT Analysis',
        body: analysis?.swot
          ? `Strengths: ${analysis.swot.strengths?.join(', ')}. Weaknesses: ${analysis.swot.weaknesses?.join(', ')}.`
          : 'Strengths include clear differentiation and a strong founder-market fit. Risks center on vertical adoption timing and operating complexity.',
        icon: ShieldCheck,
      },
      {
        title: 'Revenue Model',
        body: analysis?.revenueModel || 'A premium subscription model supported by usage-based add-ons offers a compelling path to recurring revenue.',
        icon: LineChart,
      },
    ]

    return sections
  }, [analysis, startupName])

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(124,58,237,0.2),_transparent_26%),linear-gradient(135deg,_#09090b_0%,_#111114_100%)] px-4 py-8 text-zinc-100 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Link to="/analyze" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-300 transition hover:text-white">
          <ArrowLeft size={16} />
          Back to analysis
        </Link>
        <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1.5 text-sm text-violet-200">
          <TrendingUp size={14} />
          Validation report
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="mx-auto mt-8 max-w-6xl rounded-[32px] border border-zinc-800/80 bg-zinc-900/80 p-6 shadow-[0_25px_90px_rgba(0,0,0,0.28)] backdrop-blur-2xl sm:p-8 lg:p-10"
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">AI report</p>
            <h1 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{startupName} is positioned for strong initial validation.</h1>
            <p className="mt-4 text-base leading-7 text-zinc-400">
              This preview showcases the structure of the final startup report, giving founders a clear path to refine their market thesis.
            </p>
          </div>

          <div className="rounded-[24px] border border-violet-500/20 bg-gradient-to-br from-violet-500/15 to-sky-500/10 px-5 py-4 text-center">
            <p className="text-sm text-zinc-400">Startup success score</p>
            <p className="mt-2 text-4xl font-semibold text-white">{analysis?.successScore ? `${analysis.successScore}/100` : '86/100'}</p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {reportSections.map((section) => {
            const Icon = section.icon
            return (
              <div key={section.title} className="rounded-[24px] border border-zinc-800 bg-zinc-950/70 p-6">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl border border-violet-500/20 bg-violet-500/10 p-2 text-violet-300">
                    <Icon size={18} />
                  </div>
                  <h2 className="text-xl font-semibold text-white">{section.title}</h2>
                </div>
                <p className="mt-4 text-sm leading-7 text-zinc-400">{section.body}</p>
              </div>
            )
          })}
        </div>
      </motion.div>
    </div>
  )
}

export default ReportPage
