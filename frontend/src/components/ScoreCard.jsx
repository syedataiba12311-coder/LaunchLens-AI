import { motion } from 'framer-motion'

function ScoreCard({ score, label, detail }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      whileHover={{ y: -3, scale: 1.01 }}
      className="rounded-[24px] border border-zinc-800/80 bg-zinc-900/70 p-5 backdrop-blur-xl"
    >
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-zinc-400">{label}</p>
        <span className="text-sm font-semibold text-violet-300">{detail}</span>
      </div>
      <div className="mt-4 h-2 rounded-full bg-zinc-800">
        <div className="h-full rounded-full bg-gradient-to-r from-violet-500 to-sky-400" style={{ width: `${score}%` }} />
      </div>
    </motion.div>
  )
}

export default ScoreCard
