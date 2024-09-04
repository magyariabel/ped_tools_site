'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { getInterventionPointDetails } from '../lib/interventionPoints'
import dynamic from 'next/dynamic'

const GraphVisualization = dynamic(() => import('./GraphVisualization'), { ssr: false })

export default function InterventionPointDetails() {
    const params = useParams()
    const [interventionPoint, setInterventionPoint] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (params.id) {
            setLoading(true)
            fetch(`/api/interventionPoint/${Array.isArray(params.id) ? params.id[0] : params.id}`)
                .then((res) => res.json())
                .then(setInterventionPoint)
                .catch(setError)
                .finally(() => setLoading(false))
        }
    }, [params.id])

    if (loading) return <div>Loading intervention point details...</div>
    if (error) return <div>Error loading intervention point details: {error.message}</div>
    if (!interventionPoint) return <div>No intervention point found</div>

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">{interventionPoint.name}</h2>
            <p className="mb-4">{interventionPoint.description}</p>
            <h3 className="text-lg font-semibold mb-2">Related Stakeholders</h3>
            <ul className="list-disc pl-5 mb-4">
                {interventionPoint.relatedStakeholders.map((stakeholder) => (
                    <li key={stakeholder.id}>{stakeholder.name}</li>
                ))}
            </ul>
            <h3 className="text-lg font-semibold mb-2">Related KPIs</h3>
            <ul className="list-disc pl-5 mb-4">
                {interventionPoint.relatedKPIs.map((kpi) => (
                    <li key={kpi.id}>{kpi.name}</li>
                ))}
            </ul>
            <h3 className="text-lg font-semibold mb-2">Related Tools</h3>
            <ul className="list-disc pl-5 mb-4">
                {interventionPoint.relatedTools.map((tool) => (
                    <li key={tool.id}>{tool.name}</li>
                ))}
            </ul>
            <h3 className="text-lg font-semibold mb-2">Relationships</h3>
            <GraphVisualization data={interventionPoint.relationships} />
        </div>
    )
}
