import { motion } from 'framer-motion'
import { ArrowRight, LoaderCircle, Sparkles } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const initialForm = {
  startupName: '',
  startupIdea: '',
  industry: '',
  targetCountry: '',
  targetAudience: '',
  businessStage: '',
  budget: '',
  goals: '',
}

function IdeaForm() {
  const [form, setForm] = useState(initialForm)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate = useNavigate()

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsSubmitting(true)

    window.setTimeout(() => {
      navigate('/loading', { state: { startupName: form.startupName || 'Your startup' } })
    }, 450)
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-[32px] border border-zinc-800/80 bg-zinc-900/80 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:p-8"
      aria-label="Startup analysis form"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">Startup form</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">Tell us about your idea</h2>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1.5 text-sm text-violet-200">
          <Sparkles size={14} />
          Smart validation
        </div>
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
            placeholder="SaaS"
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
            placeholder="Describe your idea"
            className="w-full rounded-2xl border border-zinc-800 bg-zinc-950/80 px-4 py-3 text-sm text-white outline-none transition focus:border-violet-500"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium text-zinc-300">Target Country</span>
          <input
            required
            name="targetCountry"
            value={form.targetCountry}
            onChange={handleChange}
            placeholder="United States"
            className="w-full rounded-2xl border border-zinc-800 bg-zinc-950/80 px-4 py-3 text-sm text-white outline-none transition focus:border-violet-500"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium text-zinc-300">Target Audience</span>
          <input
            required
            name="targetAudience"
            value={form.targetAudience}
            onChange={handleChange}
            placeholder="Early-stage founders"
            className="w-full rounded-2xl border border-zinc-800 bg-zinc-950/80 px-4 py-3 text-sm text-white outline-none transition focus:border-violet-500"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-medium text-zinc-300">Business Stage</span>
          <select
            required
            name="businessStage"
            value={form.businessStage}
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
            placeholder="What outcomes do you want?"
            className="w-full rounded-2xl border border-zinc-800 bg-zinc-950/80 px-4 py-3 text-sm text-white outline-none transition focus:border-violet-500"
          />
        </label>

        <div className="lg:col-span-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-90"
          >
            {isSubmitting ? (
              <>
                <LoaderCircle size={18} className="animate-spin" />
                Analyzing...
              </>
            ) : (
              <>
                Analyze startup
                <ArrowRight size={16} />
              </>
            )}
          </button>
        </div>
      </form>
    </motion.section>
  )
}

export default IdeaForm
