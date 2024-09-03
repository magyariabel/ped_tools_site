import { getDriver } from './neo4j'

export async function getKPIs() {
    const driver = getDriver()
    const session = driver.session()

    try {
        const result = await session.run(
            'MATCH (k:KPI) RETURN k.Node as id, k.Node as name'
        )
        return result.records.map((record) => ({
            id: record.get('id'),
            name: record.get('name'),
        }))
    } finally {
        await session.close()
    }
}

export async function getKPIDetails(id: string) {
    const driver = getDriver()
    const session = driver.session()

    try {
        const result = await session.run(
            `
      MATCH (k:KPI {Node: $id})
      OPTIONAL MATCH (k)-[:be_calculated_by]->(t:Tools)
      OPTIONAL MATCH (k)-[:connected_to]->(s:Stakeholder_roles)
      OPTIONAL MATCH (k)-[r]-(n)
      RETURN k.Node as id, k.Node as name, k.Label as description,
             k.Calculation_method as calculationMethod,
             collect(DISTINCT {id: t.Node, name: t.Node}) as relatedTools,
             collect(DISTINCT {id: s.Node, name: s.Node}) as relatedStakeholders,
             collect(DISTINCT {source: k.Node, target: n.Node, type: type(r)}) as relationships
      `,
            { id }
        )

        const record = result.records[0]
        return {
            id: record.get('id'),
            name: record.get('name'),
            description: record.get('description'),
            calculationMethod: record.get('calculationMethod'),
            relatedTools: record.get('relatedTools'),
            relatedStakeholders: record.get('relatedStakeholders'),
            relationships: {
                nodes: [
                    { id: record.get('id'), group: 'kpi' },
                    ...record.get('relatedTools').map((tool) => ({ ...tool, group: 'tool' })),
                    ...record.get('relatedStakeholders').map((stakeholder) => ({ ...stakeholder, group: 'stakeholder' })),
                ],
                links: record.get('relationships'),
            },
        }
    } finally {
        await session.close()
    }
}
