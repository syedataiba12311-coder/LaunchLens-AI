import DashboardLayout from '../layouts/DashboardLayout'
import SummaryCard from '../components/SummaryCard'
import { BrainCircuit, Sparkles } from 'lucide-react'

function HistoryPage() {
  return (
    <DashboardLayout title="History">
      <div className="grid gap-4 md:grid-cols-2">
        <SummaryCard title="Past report" value="2 reports" description="Recent validation reports stored for review and iteration." icon={BrainCircuit} accent="violet" />
        <SummaryCard title="Latest insight" value="Updated" description="The newest report highlights stronger differentiation and clearer messaging." icon={Sparkles} accent="blue" />
      </div>
    </DashboardLayout>
  )
}

export default HistoryPage
