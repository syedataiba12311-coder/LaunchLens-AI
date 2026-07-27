function RoadmapTimeline({ items }) {
  return (
    <div className="rounded-[24px] border border-zinc-800/80 bg-zinc-900/70 p-6 backdrop-blur-xl">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item, index) => (
          <div key={item} className="rounded-[20px] border border-zinc-800 bg-zinc-950/70 p-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-violet-300">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-500/10">{index + 1}</span>
              {`Month ${index + 1}`}
            </div>
            <p className="mt-4 text-sm leading-7 text-zinc-400">{item}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RoadmapTimeline
