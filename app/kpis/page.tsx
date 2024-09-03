import { Suspense } from 'react'
import KPIList from '../components/KPIList'
import KPIDetails from '../components/KPIDetails'
import Loading from '../components/Loading'

export default function KPIsPage() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
                <h1 className="text-2xl font-bold mb-4">Key Performance Indicators</h1>
                <Suspense fallback={<Loading />}>
                    <KPIList />
                </Suspense>
            </div>
            <div className="md:col-span-2">
                <Suspense fallback={<Loading />}>
                    <KPIDetails />
                </Suspense>
            </div>
        </div>
    )
}
