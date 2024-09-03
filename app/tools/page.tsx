import { Suspense } from 'react'
import ToolList from '../components/ToolList'
import ToolDetails from '../components/ToolDetails'
import Loading from '../components/Loading'

export default function ToolsPage() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
                <h1 className="text-2xl font-bold mb-4">Tools</h1>
                <Suspense fallback={<Loading />}>
                    <ToolList />
                </Suspense>
            </div>
            <div className="md:col-span-2">
                <Suspense fallback={<Loading />}>
                    <ToolDetails />
                </Suspense>
            </div>
        </div>
    )
}
