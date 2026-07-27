function CompetitorTable({ competitors }) {
  const rows = competitors || []

  return (
    <div className="overflow-hidden rounded-[24px] border border-zinc-800/80 bg-zinc-900/70 backdrop-blur-xl">
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm text-zinc-300">
          <thead className="bg-zinc-950/70 text-zinc-400">
            <tr>
              <th className="px-4 py-4 font-medium">Company</th>
              <th className="px-4 py-4 font-medium">Strength</th>
              <th className="px-4 py-4 font-medium">Weakness</th>
              <th className="px-4 py-4 font-medium">Market Position</th>
            </tr>
          </thead>
          <tbody>
            {rows.length > 0 ? (
              rows.map((item) => (
                <tr key={item.company} className="border-t border-zinc-800/80">
                  <td className="px-4 py-4 font-semibold text-white">{item.company}</td>
                  <td className="px-4 py-4">{item.strength || item.strengths || '—'}</td>
                  <td className="px-4 py-4">{item.weakness || item.weaknesses || '—'}</td>
                  <td className="px-4 py-4">{item.marketPosition || '—'}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="px-4 py-6 text-center text-zinc-500">
                  No competitor data available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CompetitorTable
