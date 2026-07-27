function MarketingCards({ channels }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {channels.map((channel) => (
        <div key={channel} className="rounded-[24px] border border-zinc-800/80 bg-zinc-900/70 p-5 backdrop-blur-xl">
          <h3 className="text-lg font-semibold text-white">{channel}</h3>
          <p className="mt-3 text-sm leading-7 text-zinc-400">
            A dedicated channel strategy will help the startup amplify its message and reinforce product trust.
          </p>
        </div>
      ))}
    </div>
  )
}

export default MarketingCards
