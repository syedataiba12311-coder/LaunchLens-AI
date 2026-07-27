function RecommendationCard({ items }) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item} className="rounded-[24px] border border-zinc-800/80 bg-zinc-900/70 p-5 backdrop-blur-xl">
          <p className="text-sm leading-7 text-zinc-400">{item}</p>
        </div>
      ))}
    </div>
  )
}

export default RecommendationCard
