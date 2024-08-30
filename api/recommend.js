const neo4j = require('neo4j-driver');

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    const driver = neo4j.driver(
      process.env.NEO4J_URI,
      neo4j.auth.basic(process.env.NEO4J_USERNAME, process.env.NEO4J_PASSWORD)
    );

    const session = driver.session();
    const { kpis } = req.body;
    
    try {
      const kpiIds = kpis.map(kpi => kpi.id);
      const query = `
        MATCH (k:KPI)-[:CALCULATED_BY]->(t:Tool)
        WHERE k.id IN $kpiIds
        RETURN DISTINCT t
      `;
      const result = await session.run(query, { kpiIds });
      const tools = result.records.map(record => record.get('t').properties);
      res.status(200).json(tools);
    } catch (error) {
      console.error('Error recommending tools:', error);
      res.status(500).json({ error: 'An error occurred while recommending tools' });
    } finally {
      await session.close();
      await driver.close();
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
