import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/75 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.24)] backdrop-blur-xl"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1.5 text-sm text-violet-200">
            <Sparkles size={14} />
            AI-powered startup validation
          </div>
          <h1 className="mt-5 text-3xl font-semibold text-white sm:text-4xl">
            Build a strategic, investor-ready startup report in minutes.
          </h1>
          <p className="mt-4 text-base leading-7 text-zinc-400">
            LaunchLens AI turns early ideas into polished reports, strong positioning, and clear next steps.
          </p>
        </div>

        <Link
          to="/analyze"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-500 px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.01]"
        >
          Create new report
          <ArrowRight size={16} />
        </Link>
      </div>
    </motion.section>
  )
}

export default Hero
