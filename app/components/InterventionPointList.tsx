import { use } from 'react'
import Link from 'next/link'
import { getInterventionPoints } from '../lib/interventionPoints'

export default function InterventionPointList() {
    const interventionPoints = use(getInterventionPoints())

    return (
        <ul className="space-y-2">
            {interventionPoints.map((point) => (
                <li key={point.id}>
                    <Link
                        href={`/intervention-points/${point.id}`}
                        className="block p-2 hover:bg-gray-100 rounded"
                    >
                        {point.name}
                    </Link>
                </li>
            ))}
        </ul>
    )
}
