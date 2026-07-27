import DashboardLayout from '../layouts/DashboardLayout'
import SummaryCard from '../components/SummaryCard'
import { UserRound, Sparkles } from 'lucide-react'

function ProfilePage() {
  return (
    <DashboardLayout title="Profile">
      <div className="grid gap-4 md:grid-cols-2">
        <SummaryCard title="Profile" value="Founder" description="Alicia is managing strategy and product experiments for early-stage ideas." icon={UserRound} accent="violet" />
        <SummaryCard title="Focus" value="AI validation" description="The workspace is currently centered on rapid startup testing and refinement." icon={Sparkles} accent="blue" />
      </div>
    </DashboardLayout>
  )
}

export default ProfilePage
