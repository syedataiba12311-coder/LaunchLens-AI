import { motion } from 'framer-motion'

function SummaryCard({ title, value, description, icon: Icon, accent = 'violet' }) {
  const accentClasses = {
    violet: 'border-violet-500/20 bg-violet-500/10 text-violet-300',
    blue: 'border-sky-500/20 bg-sky-500/10 text-sky-300',
    emerald: 'border-emerald-500/20 bg-emerald-500/10 text-emerald-300',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      whileHover={{ y: -4, scale: 1.01 }}
      className="rounded-[24px] border border-zinc-800/80 bg-zinc-900/70 p-6 backdrop-blur-xl"
    >
      <div className={`inline-flex rounded-2xl border p-3 ${accentClasses[accent]}`}>
        <Icon size={18} />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
      <p className="mt-3 text-sm leading-7 text-zinc-400">{description}</p>
    </motion.div>
  )
}

export default SummaryCard
