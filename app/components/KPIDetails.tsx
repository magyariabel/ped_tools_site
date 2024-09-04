'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { getKPIDetails } from '../lib/kpis'
import dynamic from 'next/dynamic'
const GraphVisualization = dynamic(() => import('./GraphVisualization'), { ssr: false })

export default function KPIDetails() {
    const params = useParams()
    const [kpi, setKPI] = useState(null)

    useEffect(() => {
        if (params.id) {
            const id = Array.isArray(params.id) ? params.id[0] : params.id;
            getKPIDetails(id).then(setKPI);
        }
    }, [params.id])

    if (!kpi) {
        return <div>Select a KPI to view details</div>
    }

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">{kpi.name}</h2>
            <p className="mb-4">{kpi.description}</p>
            <h3 className="text-lg font-semibold mb-2">Calculation Method</h3>
            <p className="mb-4">{kpi.calculationMethod}</p>
            <h3 className="text-lg font-semibold mb-2">Related Tools</h3>
            <ul className="list-disc pl-5 mb-4">
                {kpi.relatedTools.map((tool) => (
                    <li key={tool.id}>{tool.name}</li>
                ))}
            </ul>
            <h3 className="text-lg font-semibold mb-2">Related Stakeholders</h3>
            <ul className="list-disc pl-5 mb-4">
                {kpi.relatedStakeholders.map((stakeholder) => (
                    <li key={stakeholder.id}>{stakeholder.name}</li>
                ))}
            </ul>
            <h3 className="text-lg font-semibold mb-2">Relationships</h3>
            <GraphVisualization data={kpi.relationships} />
        </div>
    )
}
