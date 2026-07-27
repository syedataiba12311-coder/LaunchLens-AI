import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, LoaderCircle, Sparkles } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { analyzeStartup } from '../services/api'

const initialForm = {
  startupName: '',
  startupIdea: '',
  industry: '',
  country: '',
  audience: '',
  stage: '',
  budget: '',
  goals: '',
}

function AnalyzeStartupPage() {
  const [form, setForm] = useState(initialForm)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate = useNavigate()

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)

    try {
      const payload = {
        startupName: form.startupName,
        startupIdea: form.startupIdea,
        industry: form.industry,
        country: form.country,
        audience: form.audience,
        stage: form.stage,
        budget: form.budget,
        goals: form.goals,
      }

      navigate('/loading', {
        state: {
          startupName: form.startupName || 'Your startup',
          payload,
        },
      })
    } catch (error) {
      console.error('Failed to analyze startup', error)
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(124,58,237,0.2),_transparent_26%),linear-gradient(135deg,_#09090b_0%,_#111114_100%)] px-4 py-8 text-zinc-100 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-300 transition hover:text-white">
          <ArrowLeft size={16} />
          Back home
        </Link>
        <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1.5 text-sm text-violet-200">
          <Sparkles size={14} />
          AI startup analysis
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mx-auto mt-8 max-w-4xl rounded-[32px] border border-zinc-800/80 bg-zinc-900/80 p-6 shadow-[0_25px_90px_rgba(0,0,0,0.28)] backdrop-blur-2xl sm:p-8 lg:p-10"
      >
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">Analyze startup</p>
          <h1 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Drop in your idea and let LaunchLens AI build a strategic report.
          </h1>

        </div>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-5 lg:grid-cols-2">
          <label className="space-y-2">
            <span className="text-sm font-medium text-zinc-300">Startup Name</span>
            <input
              required
              name="startupName"
              value={form.startupName}
              onChange={handleChange}
              placeholder="Northstar AI"
              className="w-full rounded-2xl border border-zinc-800 bg-zinc-950/80 px-4 py-3 text-sm text-white outline-none transition focus:border-violet-500"
            />
          </label>

          <label className="space-y-2">
            <span className="text-sm font-medium text-zinc-300">Industry</span>
            <input
              required
              name="industry"
              value={form.industry}
              onChange={handleChange}
              placeholder="SaaS, fintech, healthtech..."
              className="w-full rounded-2xl border border-zinc-800 bg-zinc-950/80 px-4 py-3 text-sm text-white outline-none transition focus:border-violet-500"
            />
          </label>

          <label className="space-y-2 lg:col-span-2">
            <span className="text-sm font-medium text-zinc-300">Startup Idea</span>
            <textarea
              required
              name="startupIdea"
              value={form.startupIdea}
              onChange={handleChange}
              rows="4"
              placeholder="Describe the problem, the product, and the value proposition..."
              className="w-full rounded-2xl border border-zinc-800 bg-zinc-950/80 px-4 py-3 text-sm text-white outline-none transition focus:border-violet-500"
            />
          </label>

          <label className="space-y-2">
            <span className="text-sm font-medium text-zinc-300">Target Country</span>
            <input
              required
              name="country"
              value={form.country}
              onChange={handleChange}
              placeholder="United States"
              className="w-full rounded-2xl border border-zinc-800 bg-zinc-950/80 px-4 py-3 text-sm text-white outline-none transition focus:border-violet-500"
            />
          </label>

          <label className="space-y-2">
            <span className="text-sm font-medium text-zinc-300">Target Audience</span>
            <input
              required
              name="audience"
              value={form.audience}
              onChange={handleChange}
              placeholder="Early-stage founders, agencies, creators..."
              className="w-full rounded-2xl border border-zinc-800 bg-zinc-950/80 px-4 py-3 text-sm text-white outline-none transition focus:border-violet-500"
            />
          </label>

          <label className="space-y-2">
            <span className="text-sm font-medium text-zinc-300">Business Stage</span>
            <select
              required
              name="stage"
              value={form.stage}
              onChange={handleChange}
              className="w-full rounded-2xl border border-zinc-800 bg-zinc-950/80 px-4 py-3 text-sm text-white outline-none transition focus:border-violet-500"
            >
              <option value="">Select stage</option>
              <option value="idea">Idea / concept</option>
              <option value="validation">Validation</option>
              <option value="early">Early traction</option>
              <option value="growth">Growth</option>
            </select>
          </label>

          <label className="space-y-2">
            <span className="text-sm font-medium text-zinc-300">Budget</span>
            <input
              required
              name="budget"
              value={form.budget}
              onChange={handleChange}
              placeholder="$5,000"
              className="w-full rounded-2xl border border-zinc-800 bg-zinc-950/80 px-4 py-3 text-sm text-white outline-none transition focus:border-violet-500"
            />
          </label>

          <label className="space-y-2 lg:col-span-2">
            <span className="text-sm font-medium text-zinc-300">Goals</span>
            <textarea
              required
              name="goals"
              value={form.goals}
              onChange={handleChange}
              rows="4"
              placeholder="What outcomes are you hoping to achieve?"
              className="w-full rounded-2xl border border-zinc-800 bg-zinc-950/80 px-4 py-3 text-sm text-white outline-none transition focus:border-violet-500"
            />
          </label>

          <div className="lg:col-span-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex min-w-[220px] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-90"
            >
              {isSubmitting ? (
                <>
                  <LoaderCircle size={18} className="animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  Analyze startup
                  <ArrowLeft size={16} className="rotate-180" />
                </>
              )}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  )
}

export default AnalyzeStartupPage
