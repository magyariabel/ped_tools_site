import { getDriver } from './neo4j'

export async function getStakeholders() {
    const driver = getDriver()
    const session = driver.session()

    try {
        const result = await session.run(
            'MATCH (s:Stakeholder_roles) RETURN s.Node as id, s.Node as name'
        )
        return result.records.map((record) => ({
            id: record.get('id'),
            name: record.get('name'),
        }))
    } finally {
        await session.close()
    }
}

export async function getStakeholderDetails(id: string) {
    const driver = getDriver()
    const session = driver.session()

    try {
        const result = await session.run(
            `
      MATCH (s:Stakeholder_roles {Node: $id})
      OPTIONAL MATCH (s)-[:connected_to]->(k:KPI)
      OPTIONAL MATCH (s)-[:uses]->(t:Tools)
      OPTIONAL MATCH (s)-[r]-(n)
      RETURN s.Node as id, s.Node as name, s.Label as description,
             collect(DISTINCT {id: k.Node, name: k.Node}) as relatedKPIs,
             collect(DISTINCT {id: t.Node, name: t.Node}) as relatedTools,
             collect(DISTINCT {source: s.Node, target: n.Node, type: type(r)}) as relationships
      `,
            { id }
        )

        const record = result.records[0]
        return {
            id: record.get('id'),
            name: record.get('name'),
            description: record.get('description'),
            relatedKPIs: record.get('relatedKPIs'),
            relatedTools: record.get('relatedTools'),
            relationships: {
                nodes: [
                    { id: record.get('id'), group: 'stakeholder' },
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
