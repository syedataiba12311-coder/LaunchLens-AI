function TechStackCard({ items }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <div key={item} className="rounded-[24px] border border-zinc-800/80 bg-zinc-900/70 p-5 backdrop-blur-xl">
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-violet-400" />
            <h3 className="text-lg font-semibold text-white">{item}</h3>
          </div>
          <p className="mt-3 text-sm leading-7 text-zinc-400">A modern choice for fast, maintainable product delivery.</p>
        </div>
      ))}
    </div>
  )
}

export default TechStackCard
