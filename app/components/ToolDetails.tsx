'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { getToolDetails } from '../lib/tools'
import GraphVisualization from './GraphVisualization'

export default function ToolDetails() {
    const params = useParams()
    const [tool, setTool] = useState(null)

    useEffect(() => {
        if (params.id) {
            getToolDetails(params.id).then(setTool)
        }
    }, [params.id])

    if (!tool) {
        return <div>Select a tool to view details</div>
    }

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">{tool.name}</h2>
            <p className="mb-4">{tool.description}</p>
            <h3 className="text-lg font-semibold mb-2">Related KPIs</h3>
            <ul className="list-disc pl-5 mb-4">
                {tool.relatedKPIs.map((kpi) => (
                    <li key={kpi.id}>{kpi.name}</li>
                ))}
            </ul>
            <h3 className="text-lg font-semibold mb-2">Related Stakeholders</h3>
            <ul className="list-disc pl-5 mb-4">
                {tool.relatedStakeholders.map((stakeholder) => (
                    <li key={stakeholder.id}>{stakeholder.name}</li>
                ))}
            </ul>
            <h3 className="text-lg font-semibold mb-2">Relationships</h3>
            <GraphVisualization data={tool.relationships} />
        </div>
    )
}
