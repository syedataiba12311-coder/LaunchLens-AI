function Footer() {
  return (
    <footer className="mt-8 border-t border-zinc-800/70 px-4 py-6 text-sm text-zinc-500 sm:px-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 LaunchLens AI. Built for ambitious founders.</p>
        <div className="flex gap-4">
          <a href="#" className="transition hover:text-zinc-300">
            Privacy
          </a>
          <a href="#" className="transition hover:text-zinc-300">
            Terms
          </a>
          <a href="#" className="transition hover:text-zinc-300">
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
