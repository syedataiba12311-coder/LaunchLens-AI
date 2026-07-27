import { motion } from 'framer-motion'
import {
  ArrowRight,
  BadgeCheck,
  BrainCircuit,
  Check,
  ChevronRight,
  CirclePlay,
  Compass,
  LayoutPanelTop,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from 'lucide-react'
import { Routes, Route, Link } from 'react-router-dom'
import AnalyzeStartupPage from './pages/AnalyzeStartupPage'
import LoadingPage from './pages/LoadingPage'
import ReportPage from './pages/ReportPage'
import DashboardPage from './pages/DashboardPage'
import HistoryPage from './pages/HistoryPage'
import ProfilePage from './pages/ProfilePage'
import SettingsPage from './pages/SettingsPage'

const features = [
  {
    icon: BrainCircuit,
    title: 'AI validation engine',
    description:
      'Generate polished startup briefs with market signals, risks, and go-to-market ideas in seconds.',
  },
  {
    icon: LayoutPanelTop,
    title: 'Executive-ready reports',
    description:
      'Turn raw ideas into investor-friendly summaries with polished sections and actionable insights.',
  },
  {
    icon: ShieldCheck,
    title: 'Trusted decision support',
    description:
      'Balance opportunity, competition, and risk with a clear startup success score and guidance.',
  },
]

const steps = [
  {
    title: 'Describe your idea',
    description: 'Share your startup concept, audience, and ambition in a few words.',
  },
  {
    title: 'Let AI analyze it',
    description: 'LaunchLens examines market fit, competitors, and risks instantly.',
  },
  {
    title: 'Launch with confidence',
    description: 'Get a strategic report and roadmap to move from concept to first milestone.',
  },
]


const faqs = [
  {
    question: 'What does LaunchLens AI generate?',
    answer:
      'It produces a professional validation report with executive summary, target audience, competitor analysis, SWOT review, revenue model, MVP features, marketing strategy, business risks, tech stack, roadmap, and a startup success score.',
  },
  {
    question: 'Is it only for founders?',
    answer:
      'No. LaunchLens helps founders, operators, product teams, and early-stage investors turn rough ideas into structured decision-making tools.',
  },
  {
    question: 'Do I need a credit card to start?',
    answer:
      'No. The free plan gives you access to core validation workflows so you can explore the experience right away.',
  },
]

function LandingPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(124,58,237,0.2),_transparent_28%),linear-gradient(135deg,_#09090b_0%,_#111114_100%)] text-zinc-100">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <a href="#" className="flex items-center gap-3 text-sm font-semibold tracking-[0.2em] text-zinc-200 uppercase">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-violet-500/30 bg-violet-500/10 text-violet-300 shadow-[0_0_35px_rgba(124,58,237,0.18)]">
            <Sparkles size={18} />
          </span>
          LaunchLens AI
        </a>

        <nav className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
          <a href="#features" className="transition hover:text-white">
            Features
          </a>
          <a href="#how-it-works" className="transition hover:text-white">
            How it works
          </a>
          <a href="#pricing" className="transition hover:text-white">
            Pricing
          </a>
          <a href="#faq" className="transition hover:text-white">
            FAQ
          </a>
        </nav>


      </header>

      <main>
        <section className="mx-auto max-w-7xl px-6 pb-20 pt-8 lg:px-8 lg:pb-28 lg:pt-10">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="max-w-2xl"
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/70 px-3 py-2 text-sm text-zinc-300 backdrop-blur-xl">
                <BadgeCheck className="text-violet-400" size={16} />
                AI-powered startup validation for modern founders
              </div>

              <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-7xl">
                Validate your startup idea{' '}
                <span className="bg-gradient-to-r from-violet-400 via-fuchsia-300 to-sky-400 bg-clip-text text-transparent">
                  in seconds
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400 sm:text-xl">
                LaunchLens AI turns rough concepts into investor-grade strategy reports with a clear
                roadmap, market positioning, and startup success score.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/analyze"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-500 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_20px_60px_rgba(124,58,237,0.28)] transition hover:scale-[1.01]"
                >
                  Start free
                  <ArrowRight size={18} />
                </Link>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/70 px-6 py-3.5 text-sm font-semibold text-zinc-200 backdrop-blur-xl transition hover:border-zinc-600"
                >
                  <CirclePlay size={18} className="text-sky-400" />
                  Watch demo
                </a>
              </div>


            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/70 p-4 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
            >
              <div className="rounded-[24px] border border-zinc-800 bg-zinc-950/80 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-zinc-400">Live report preview</p>
                    <p className="mt-1 text-xl font-semibold text-white">AI Validation Report</p>
                  </div>
                  <div className="rounded-full bg-violet-500/15 px-3 py-1 text-sm font-semibold text-violet-300">
                    86/100
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-900/80 p-4">
                  <div className="flex items-center gap-2 text-sm font-medium text-zinc-300">
                    <TrendingUp size={16} className="text-emerald-400" />
                    Executive summary
                  </div>
                  <p className="mt-3 text-sm leading-7 text-zinc-400">
                    A premium B2B SaaS for creators that helps them identify profitable content gaps and validate demand before launch.
                  </p>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-4">
                    <p className="text-sm text-zinc-400">Target audience</p>
                    <p className="mt-2 text-sm font-medium text-white">Solo founders and small teams</p>
                  </div>
                  <div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-4">
                    <p className="text-sm text-zinc-400">Competitive edge</p>
                    <p className="mt-2 text-sm font-medium text-white">Fast, AI-guided workflows</p>
                  </div>
                </div>

                <div className="mt-4 rounded-2xl border border-zinc-800 bg-gradient-to-br from-violet-500/10 to-sky-500/10 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-zinc-400">Recommended roadmap</p>
                      <p className="mt-1 text-sm font-semibold text-white">MVP in 4 weeks</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-medium text-sky-300">
                      <Compass size={15} />
                      Strategic direction
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="features" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">
                Why founders love it
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                Built for fast clarity, sharp thinking, and confident launches.
              </h2>
            </div>

          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.article
                  key={feature.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="rounded-[24px] border border-zinc-800/80 bg-zinc-900/70 p-6 backdrop-blur-xl"
                >
                  <div className="inline-flex rounded-2xl border border-violet-500/25 bg-violet-500/10 p-3 text-violet-300">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-400">{feature.description}</p>
                </motion.article>
              )
            })}
          </div>
        </section>

        <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="rounded-[32px] border border-zinc-800/80 bg-zinc-900/70 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl lg:p-10">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">How it works</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                Go from spark to strategy in three simple steps.
              </h2>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {steps.map((step, index) => (
                <div key={step.title} className="rounded-[24px] border border-zinc-800 bg-zinc-950/70 p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-500/25 to-sky-500/25 text-sm font-semibold text-white">
                    0{index + 1}
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-400">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        <section id="pricing" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="rounded-[32px] border border-zinc-800/80 bg-gradient-to-br from-violet-950/80 to-zinc-900/80 p-8 shadow-[0_20px_80px_rgba(124,58,237,0.12)] backdrop-blur-xl lg:p-10">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_0.75fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">Pricing</p>
                <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                  Launch your first validation report with the free plan.
                </h2>
                <p className="mt-4 max-w-xl text-base leading-7 text-zinc-400">
                  Start with everything you need to test an idea, refine your messaging, and create a professional report in minutes.
                </p>
              </div>

              <div className="rounded-[28px] border border-violet-500/20 bg-zinc-950/80 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-zinc-400">Free plan</p>
                    <p className="mt-2 text-4xl font-semibold text-white">$0</p>
                  </div>
                  <div className="rounded-full border border-violet-500/25 bg-violet-500/10 px-3 py-1 text-sm font-medium text-violet-300">
                    Forever free
                  </div>
                </div>

                <ul className="mt-6 space-y-3 text-sm text-zinc-300">
                  {[
                    '1 startup validation report per day',
                    'Executive summary and SWOT analysis',
                    'MVP roadmap and pricing recommendations',
                    'Email support and product updates',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 rounded-full bg-violet-500/15 p-1 text-violet-300">
                        <Check size={14} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/analyze"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-500 px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.01]"
                >
                  Get started
                  <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">FAQ</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Questions founders ask before they launch.
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-[24px] border border-zinc-800/80 bg-zinc-900/70 p-5 backdrop-blur-xl">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-medium text-white">
                  <span>{faq.question}</span>
                  <ChevronRight size={18} className="text-zinc-400 transition group-open:rotate-90" />
                </summary>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-400">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer className="mx-auto max-w-7xl border-t border-zinc-800/70 px-6 py-8 text-sm text-zinc-500 lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 LaunchLens AI. Built for ambitious founders.</p>
          <div className="flex gap-4">
            <a href="#features" className="transition hover:text-zinc-300">
              Features
            </a>
            <a href="#pricing" className="transition hover:text-zinc-300">
              Pricing
            </a>
            <a href="#faq" className="transition hover:text-zinc-300">
              FAQ
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/analyze" element={<AnalyzeStartupPage />} />
      <Route path="/loading" element={<LoadingPage />} />
      <Route path="/report" element={<ReportPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/history" element={<HistoryPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/settings" element={<SettingsPage />} />
    </Routes>
  )
}

export default App
