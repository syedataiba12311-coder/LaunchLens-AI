import { LayoutDashboard, History, Settings, UserRound, Sparkles } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Dashboard', to: '/dashboard', icon: LayoutDashboard },
  { label: 'History', to: '/history', icon: History },
  { label: 'Profile', to: '/profile', icon: UserRound },
  { label: 'Settings', to: '/settings', icon: Settings },
]

function Sidebar() {
  return (
    <aside className="flex w-full flex-col rounded-[28px] border border-zinc-800/80 bg-zinc-900/70 p-5 backdrop-blur-xl lg:w-72 lg:min-h-[calc(100vh-2rem)]">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-violet-500/20 bg-violet-500/10 text-violet-300">
          <Sparkles size={18} />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-400">LaunchLens</p>
          <p className="text-base font-semibold text-white">AI Workspace</p>
        </div>
      </div>

      <nav className="mt-8 space-y-2" aria-label="Sidebar navigation">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium transition ${
                  isActive ? 'bg-violet-500/15 text-white' : 'text-zinc-400 hover:bg-zinc-800 hover:text-white'
                }`
              }
            >
              <Icon size={17} />
              {item.label}
            </NavLink>
          )
        })}
      </nav>

      <div className="mt-auto rounded-[24px] border border-zinc-800 bg-zinc-950/70 p-4">
        <p className="text-sm font-semibold text-white">Need more insight?</p>
        <p className="mt-2 text-sm leading-7 text-zinc-400">
          Keep iterating on the report and refine the strategy with new prompts.
        </p>
      </div>
    </aside>
  )
}

export default Sidebar
