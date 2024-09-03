import { use } from 'react'
import Link from 'next/link'
import { getKPIs } from '../lib/kpis'

export default function KPIList() {
    const kpis = use(getKPIs())

    return (
        <ul className="space-y-2">
            {kpis.map((kpi) => (
                <li key={kpi.id}>
                    <Link
                        href={`/kpis/${kpi.id}`}
                        className="block p-2 hover:bg-gray-100 rounded"
                    >
                        {kpi.name}
                    </Link>
                </li>
            ))}
        </ul>
    )
}
