'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { getStakeholderDetails } from '../lib/stakeholders'
import dynamic from 'next/dynamic'

const GraphVisualization = dynamic(() => import('./GraphVisualization'), { ssr: false })

export default function StakeholderDetails() {
  const params = useParams()
  const [stakeholder, setStakeholder] = useState(null)

  useEffect(() => {
    if (params.id) {
      const id = Array.isArray(params.id) ? params.id[0] : params.id;
      fetch(`/api/stakeholder/${id}`)
        .then((res) => res.json())
        .then(setStakeholder)
        .catch(setError)
        .finally(() => setLoading(false));
    }
  }, [params.id])

  if (!stakeholder) {
    return <div>Select a stakeholder to view details</div>
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">{stakeholder.name}</h2>
      <p className="mb-4">{stakeholder.description}</p>
      <h3 className="text-lg font-semibold mb-2">Related KPIs</h3>
      <ul className="list-disc pl-5 mb-4">
        {stakeholder.relatedKPIs.map((kpi) => (
          <li key={kpi.id}>{kpi.name}</li>
        ))}
      </ul>
      <h3 className="text-lg font-semibold mb-2">Related Tools</h3>
      <ul className="list-disc pl-5 mb-4">
        {stakeholder.relatedTools.map((tool) => (
          <li key={tool.id}>{tool.name}</li>
        ))}
      </ul>
      <h3 className="text-lg font-semibold mb-2">Relationships</h3>
      <GraphVisualization data={stakeholder.relationships} />
    </div>
  )
}
