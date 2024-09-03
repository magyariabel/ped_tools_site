import { getDriver } from './neo4j'

export async function getInterventionPoints() {
    const driver = getDriver()
    const session = driver.session()

    try {
        const result = await session.run(
            'MATCH (i:`Intervention points`) RETURN i.Node as id, i.Node as name'
        )
        return result.records.map((record) => ({
            id: record.get('id'),
            name: record.get('name'),
        }))
    } finally {
        await session.close()
    }
}

export async function getInterventionPointDetails(id: string) {
    const driver = getDriver()
    const session = driver.session()

    try {
        const result = await session.run(
            `
      MATCH (i:\`Intervention points\` {Node: $id})
      OPTIONAL MATCH (s:Stakeholder_roles)-[:involved_in]->(i)
      OPTIONAL MATCH (k:KPI)-[:belongs_to]->(i)
      OPTIONAL MATCH (t:Tools)<-[:uses_tool]-(i)
      OPTIONAL MATCH (i)-[r]-(n)
      RETURN i.Node as id, i.Node as name, i.Label as description,
             collect(DISTINCT {id: s.Node, name: s.Node}) as relatedStakeholders,
             collect(DISTINCT {id: k.Node, name: k.Node}) as relatedKPIs,
             collect(DISTINCT {id: t.Node, name: t.Node}) as relatedTools,
             collect(DISTINCT {source: i.Node, target: n.Node, type: type(r)}) as relationships
      `,
            { id }
        )

        const record = result.records[0]
        return {
            id: record.get('id'),
            name: record.get('name'),
            description: record.get('description'),
            relatedStakeholders: record.get('relatedStakeholders'),
            relatedKPIs: record.get('relatedKPIs'),
            relatedTools: record.get('relatedTools'),
            relationships: {
                nodes: [
                    { id: record.get('id'), group: 'interventionPoint' },
                    ...record.get('relatedStakeholders').map((stakeholder) => ({ ...stakeholder, group: 'stakeholder' })),
                    ...record.get('relatedKPIs').map((kpi) => ({ ...kpi, group: 'kpi' })),
                    ...record.get('relatedTools').map((tool) => ({ ...tool, group: 'tool' })),
                ],
                links: record.get('relationships'),
            },
        }
    } finally {
        await session.close()
    }
}
