import { Link } from 'react-router-dom'
import { Bell, ChevronDown, Search, Sparkles } from 'lucide-react'

function Navbar({ title = 'Dashboard' }) {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4 rounded-[24px] border border-zinc-800 bg-zinc-900/70 px-4 py-4 backdrop-blur-xl sm:px-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">LaunchLens AI</p>
        <h2 className="mt-1 text-xl font-semibold text-white">{title}</h2>
      </div>

      <div className="flex items-center gap-3">
        <label className="hidden items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/70 px-3 py-2 text-sm text-zinc-400 sm:flex">
          <Search size={15} />
          <input
            aria-label="Search dashboard"
            placeholder="Search"
            className="w-24 bg-transparent outline-none placeholder:text-zinc-500"
          />
        </label>

        <button
          type="button"
          aria-label="Notifications"
          className="rounded-full border border-zinc-800 bg-zinc-950/70 p-2.5 text-zinc-300 transition hover:border-zinc-700"
        >
          <Bell size={16} />
        </button>

        <button
          type="button"
          className="flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/70 px-3 py-2 text-sm font-medium text-zinc-200"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-sky-400 text-sm font-semibold text-white">
            A
          </span>
          <span className="hidden sm:inline">Alicia</span>
          <ChevronDown size={16} className="text-zinc-400" />
        </button>
      </div>
    </header>
  )
}

export default Navbar
