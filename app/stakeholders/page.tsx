import { Suspense } from 'react'
import StakeholderList from '../components/StakeholderList'
import StakeholderDetails from '../components/StakeholderDetails'
import Loading from '../components/Loading'

export default function StakeholdersPage() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
                <h1 className="text-2xl font-bold mb-4">Stakeholders</h1>
                <Suspense fallback={<Loading />}>
                    <StakeholderList />
                </Suspense>
            </div>
            <div className="md:col-span-2">
                <Suspense fallback={<Loading />}>
                    <StakeholderDetails />
                </Suspense>
            </div>
        </div>
    )
}
