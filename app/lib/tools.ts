import { getDriver } from './neo4j'

export async function getTools() {
    const driver = getDriver()
    const session = driver.session()

    try {
        const result = await session.run(
            'MATCH (t:Tools) RETURN t.Node as id, t.Node as name'
        )
        return result.records.map((record) => ({
            id: record.get('id'),
            name: record.get('name'),
        }))
    } finally {
        await session.close()
    }
}

export async function getToolDetails(id: string) {
    const driver = getDriver()
    const session = driver.session()

    try {
        const result = await session.run(
            `
      MATCH (t:Tools {Node: $id})
      OPTIONAL MATCH (k:KPI)-[:be_calculated_by]->(t)
      OPTIONAL MATCH (s:Stakeholder_roles)-[:uses]->(t)
      OPTIONAL MATCH (t)-[r]-(n)
      RETURN t.Node as id, t.Node as name, t.Label as description,
             collect(DISTINCT {id: k.Node, name: k.Node}) as relatedKPIs,
             collect(DISTINCT {id: s.Node, name: s.Node}) as relatedStakeholders,
             collect(DISTINCT {source: t.Node, target: n.Node, type: type(r)}) as relationships
      `,
            { id }
        )

        const record = result.records[0]
        return {
            id: record.get('id'),
            name: record.get('name'),
            description: record.get('description'),
            relatedKPIs: record.get('relatedKPIs'),
            relatedStakeholders: record.get('relatedStakeholders'),
            relationships: {
                nodes: [
                    { id: record.get('id'), group: 'tool' },
                    ...record.get('relatedKPIs').map((kpi) => ({ ...kpi, group: 'kpi' })),
                    ...record.get('relatedStakeholders').map((stakeholder) => ({ ...stakeholder, group: 'stakeholder' })),
                ],
                links: record.get('relationships'),
            },
        }
    } finally {
        await session.close()
    }
}
