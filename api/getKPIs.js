const neo4j = require('neo4j-driver');

module.exports = async (req, res) => {
  if (req.method === 'GET') {
    const driver = neo4j.driver(
      process.env.NEO4J_URI,
      neo4j.auth.basic(process.env.NEO4J_USERNAME, process.env.NEO4J_PASSWORD)
    );

    const session = driver.session();

    try {
      console.log('Attempting to connect to Neo4j...');
      const countResult = await session.run('MATCH (k:KPI) RETURN count(k) as count');
      console.log('KPI count:', countResult.records[0].get('count').toNumber());

      const result = await session.run('MATCH (k:KPI) RETURN k');
      console.log('Neo4j query result:', JSON.stringify(result, null, 2));
      const kpis = result.records.map(record => {
        const kpi = record.get('k').properties;
        console.log('Raw KPI from Neo4j:', record.get('k'));
        console.log('KPI properties:', kpi);
        return { id: kpi.Node, name: kpi.Node, label: kpi.Label };
      });
      console.log('Processed KPIs:', JSON.stringify(kpis, null, 2));
      res.status(200).json(kpis);
    } catch (error) {
      console.error('Error fetching KPIs:', error);
      console.error('Error details:', error.message);
      if (error.stack) console.error('Stack trace:', error.stack);
      res.status(500).json({ error: 'An error occurred while fetching KPIs', details: error.message });
    } finally {
      await session.close();
      await driver.close();
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
