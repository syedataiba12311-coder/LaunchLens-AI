import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

function DashboardLayout({ children, title }) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(124,58,237,0.2),_transparent_24%),linear-gradient(135deg,_#09090b_0%,_#111114_100%)] px-4 py-4 text-zinc-100 sm:px-6 lg:px-8 lg:py-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 lg:flex-row">
        <Sidebar />

        <motion.main
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="flex-1"
        >
          <Navbar title={title} />
          <div className="mt-4 space-y-4">{children}</div>
          <Footer />
        </motion.main>
      </div>
    </div>
  )
}

export default DashboardLayout
