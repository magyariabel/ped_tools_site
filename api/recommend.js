const neo4j = require('neo4j-driver');

module.exports = async (req, res) => {
  console.log('Recommend endpoint called');
  if (req.method === 'POST') {
    console.log('Request body:', req.body);
    const driver = neo4j.driver(
      process.env.NEO4J_URI,
      neo4j.auth.basic(process.env.NEO4J_USERNAME, process.env.NEO4J_PASSWORD)
    );

    const session = driver.session();
    const { kpis } = req.body;

    console.log('Received KPIs:', kpis);

    try {
      const kpiNames = kpis.map(kpi => kpi.name);
      console.log('KPI names:', kpiNames);
      const query = `
        MATCH (tool:Tools)
        WHERE ALL(kpiName IN $kpiNames WHERE (:KPI {Node: kpiName})-[:CALCULATED_BY]->(tool))
        RETURN DISTINCT tool
      `;
      console.log('Executing Neo4j query:', query);
      console.log('Query parameters:', { kpiNames });
      const result = await session.run(query, { kpiNames });
      console.log('Raw Neo4j query result:', JSON.stringify(result, null, 2));
      const tools = result.records.map(record => {
        const tool = record.get('tool').properties;
        return { id: tool.Node, name: tool.Node, label: tool.Label };
      });
      console.log('Processed tools:', tools);
      res.status(200).json(tools);
    } catch (error) {
      console.error('Error recommending tools:', error);
      res.status(500).json({ error: 'An error occurred while recommending tools', details: error.message });
    } finally {
      await session.close();
      await driver.close();
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
