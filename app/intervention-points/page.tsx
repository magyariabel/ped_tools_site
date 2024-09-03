import { Suspense } from 'react'
import InterventionPointList from '../components/InterventionPointList'
import InterventionPointDetails from '../components/InterventionPointDetails'
import Loading from '../components/Loading'

export default function InterventionPointsPage() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
                <h1 className="text-2xl font-bold mb-4">Intervention Points</h1>
                <Suspense fallback={<Loading />}>
                    <InterventionPointList />
                </Suspense>
            </div>
            <div className="md:col-span-2">
                <Suspense fallback={<Loading />}>
                    <InterventionPointDetails />
                </Suspense>
            </div>
        </div>
    )
}
