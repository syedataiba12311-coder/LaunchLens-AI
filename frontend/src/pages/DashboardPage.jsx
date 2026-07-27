import { motion } from 'framer-motion'
import { BrainCircuit, Building2, ChartNoAxesCombined, Compass, ShieldCheck, Sparkles, TrendingUp } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import DashboardLayout from '../layouts/DashboardLayout'
import SummaryCard from '../components/SummaryCard'
import ScoreCard from '../components/ScoreCard'
import CompetitorTable from '../components/CompetitorTable'
import SWOTGrid from '../components/SWOTGrid'
import RoadmapTimeline from '../components/RoadmapTimeline'
import MarketingCards from '../components/MarketingCards'
import TechStackCard from '../components/TechStackCard'
import RecommendationCard from '../components/RecommendationCard'
import { dummyReport } from '../data/dummyReport'

function DashboardPage() {
  const location = useLocation()
  const analysis = location.state?.analysis || null
  const report = analysis || dummyReport

  return (
    <DashboardLayout title="Dashboard">
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/70 p-6 backdrop-blur-xl"
      >
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">Executive summary</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">{report.startupName || 'Your startup'}</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-400">{report.executiveSummary || report.problemStatement}</p>
          </div>
          <div className="rounded-[20px] border border-violet-500/20 bg-violet-500/10 px-4 py-3 text-sm text-violet-200">
            AI report ready for review
          </div>
        </div>
      </motion.section>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <SummaryCard title="Problem Statement" value="Strong" description={report.problemStatement || report.executiveSummary} icon={BrainCircuit} accent="violet" />
        <SummaryCard title="Solution" value="Validated" description={report.solution || 'A clear product proposition tailored to the market.'} icon={Compass} accent="blue" />
        <SummaryCard title="Audience" value="Founders" description={report.targetAudience || report.audience || 'Early adopters'} icon={Building2} accent="emerald" />
        <SummaryCard title="Revenue Model" value="Subscription" description={report.revenueModel || 'A simple monetization model tailored to the business stage.'} icon={TrendingUp} accent="violet" />
      </div>

      <section className="grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/70 p-6 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl border border-sky-500/20 bg-sky-500/10 p-2 text-sky-300">
              <ChartNoAxesCombined size={18} />
            </div>
            <h3 className="text-xl font-semibold text-white">Competitor analysis</h3>
          </div>
          <div className="mt-6">
            <CompetitorTable competitors={report.competitors || report.competitorAnalysis || []} />
          </div>
        </div>

        <div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/70 p-6 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-2 text-emerald-300">
              <ShieldCheck size={18} />
            </div>
            <h3 className="text-xl font-semibold text-white">Success score</h3>
          </div>
          <div className="mt-6 flex flex-col items-center rounded-[24px] border border-zinc-800 bg-zinc-950/70 p-6 text-center">
            <div className="flex h-32 w-32 items-center justify-center rounded-full border-[10px] border-violet-500/25 bg-gradient-to-br from-violet-500/20 to-sky-500/20 text-3xl font-semibold text-white">
              {report.successScore || 0}
            </div>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.25em] text-zinc-400">Overall score</p>
            <p className="mt-2 text-4xl font-semibold text-white">87/100</p>
            <div className="mt-6 grid w-full gap-3">
              <ScoreCard label="Market Potential" score={report.marketPotential || 88} detail="91" />
              <ScoreCard label="Innovation" score={report.innovation || 84} detail="88" />
              <ScoreCard label="Competition" score={report.competition || 76} detail="72" />
              <ScoreCard label="Scalability" score={report.scalability || 80} detail="84" />
              <ScoreCard label="Revenue Potential" score={report.revenuePotential || 86} detail="90" />
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/70 p-6 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl border border-violet-500/20 bg-violet-500/10 p-2 text-violet-300">
            <Sparkles size={18} />
          </div>
          <h3 className="text-xl font-semibold text-white">SWOT analysis</h3>
        </div>
        <div className="mt-6">
          <SWOTGrid data={report.swot || { strengths: [], weaknesses: [], opportunities: [], threats: [] }} />
        </div>
      </section>

      <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/70 p-6 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl border border-sky-500/20 bg-sky-500/10 p-2 text-sky-300">
            <Compass size={18} />
          </div>
          <h3 className="text-xl font-semibold text-white">Development roadmap</h3>
        </div>
        <div className="mt-6">
          <RoadmapTimeline items={report.roadmap || []} />
        </div>
      </section>

      <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/70 p-6 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-2 text-emerald-300">
            <TrendingUp size={18} />
          </div>
          <h3 className="text-xl font-semibold text-white">Marketing strategy</h3>
        </div>
        <div className="mt-6">
          <MarketingCards channels={report.marketingStrategy || report.marketing || []} />
        </div>
      </section>

      <section className="grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/70 p-6 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl border border-violet-500/20 bg-violet-500/10 p-2 text-violet-300">
              <Sparkles size={18} />
            </div>
            <h3 className="text-xl font-semibold text-white">Recommended tech stack</h3>
          </div>
          <div className="mt-6">
            <TechStackCard items={report.recommendedTechStack || report.techStack || []} />
          </div>
        </div>

        <div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/70 p-6 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl border border-sky-500/20 bg-sky-500/10 p-2 text-sky-300">
              <Compass size={18} />
            </div>
            <h3 className="text-xl font-semibold text-white">Recommendations</h3>
          </div>
          <div className="mt-6">
            <RecommendationCard items={report.recommendations || []} />
          </div>
        </div>
      </section>
    </DashboardLayout>
  )
}

export default DashboardPage
