import DashboardLayout from '../layouts/DashboardLayout'
import SummaryCard from '../components/SummaryCard'
import { Settings, Sparkles } from 'lucide-react'

function SettingsPage() {
  return (
    <DashboardLayout title="Settings">
      <div className="grid gap-4 md:grid-cols-2">
        <SummaryCard title="Preferences" value="Dark mode" description="The workspace stays in the premium dark experience by default." icon={Settings} accent="violet" />
        <SummaryCard title="Automation" value="Enabled" description="AI-generated reports and recommendations will appear here as the experience evolves." icon={Sparkles} accent="blue" />
      </div>
    </DashboardLayout>
  )
}

export default SettingsPage
