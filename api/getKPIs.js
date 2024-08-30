const neo4j = require('neo4j-driver');

module.exports = async (req, res) => {
  if (req.method === 'GET') {
    const driver = neo4j.driver(
      process.env.NEO4J_URI,
      neo4j.auth.basic(process.env.NEO4J_USERNAME, process.env.NEO4J_PASSWORD)
    );

    const session = driver.session();
    
    try {
      const result = await session.run('MATCH (k:KPI) RETURN k');
      const kpis = result.records.map(record => {
        const kpi = record.get('k').properties;
        return { id: kpi.id, name: kpi.name };
      });
      res.status(200).json(kpis);
    } catch (error) {
      console.error('Error fetching KPIs:', error);
      res.status(500).json({ error: 'An error occurred while fetching KPIs' });
    } finally {
      await session.close();
      await driver.close();
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
