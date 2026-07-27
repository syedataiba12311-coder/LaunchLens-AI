import { motion } from 'framer-motion'

const swotCards = [
  { title: 'Strengths', items: [], accent: 'violet' },
  { title: 'Weaknesses', items: [], accent: 'blue' },
  { title: 'Opportunities', items: [], accent: 'emerald' },
  { title: 'Threats', items: [], accent: 'amber' },
]

function SWOTGrid({ data }) {
  const swotData = data || {}
  const cards = [
    { title: 'Strengths', items: swotData.strengths || [], accent: 'violet' },
    { title: 'Weaknesses', items: swotData.weaknesses || [], accent: 'blue' },
    { title: 'Opportunities', items: swotData.opportunities || [], accent: 'emerald' },
    { title: 'Threats', items: swotData.threats || [], accent: 'amber' },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {cards.map((card) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className={`rounded-[24px] border border-zinc-800/80 bg-zinc-900/70 p-5 backdrop-blur-xl ${
            card.accent === 'violet' ? 'shadow-[0_0_40px_rgba(124,58,237,0.12)]' : ''
          } ${card.accent === 'blue' ? 'shadow-[0_0_40px_rgba(37,99,235,0.12)]' : ''} ${card.accent === 'emerald' ? 'shadow-[0_0_40px_rgba(16,185,129,0.12)]' : ''} ${card.accent === 'amber' ? 'shadow-[0_0_40px_rgba(245,158,11,0.12)]' : ''}`}
        >
          <h3 className="text-lg font-semibold text-white">{card.title}</h3>
          <ul className="mt-4 space-y-3 text-sm text-zinc-400">
            {card.items.length > 0 ? (
              card.items.map((item) => (
                <li key={item} className="rounded-2xl border border-zinc-800 bg-zinc-950/70 px-3 py-2">
                  {item}
                </li>
              ))
            ) : (
              <li className="rounded-2xl border border-dashed border-zinc-800 px-3 py-3 text-zinc-500">
                No entries yet.
              </li>
            )}
          </ul>
        </motion.div>
      ))}
    </div>
  )
}

export default SWOTGrid
