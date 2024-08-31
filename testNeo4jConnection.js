const neo4j = require('neo4j-driver');
require('dotenv').config();

async function testNeo4jConnection() {
    const driver = neo4j.driver(
        process.env.NEO4J_URI,
        neo4j.auth.basic(process.env.NEO4J_USERNAME, process.env.NEO4J_PASSWORD)
    );

    const session = driver.session();

    try {
        console.log('Attempting to connect to Neo4j...');

        // Query KPIs
        const kpiResult = await session.run('MATCH (k:KPI) RETURN k LIMIT 5');
        const kpis = kpiResult.records.map(record => record.get('k').properties);
        console.log('KPIs:', JSON.stringify(kpis, null, 2));

        // Query Tools with the correct label
        const toolResult = await session.run('MATCH (t:Tools) RETURN t LIMIT 5');
        const tools = toolResult.records.map(record => record.get('t').properties);
        console.log('Tools:', JSON.stringify(tools, null, 2));

        // Add this after the existing queries
        const relationshipQuery = `
          MATCH (k:KPI)-[r:CALCULATED_BY]->(t:\`Tools able to compute the KPI\`)
          RETURN k.Node AS KPI, t.Node AS Tool
          LIMIT 10
        `;
        const relationshipResult = await session.run(relationshipQuery);
        const relationships = relationshipResult.records.map(record => ({
            KPI: record.get('KPI'),
            Tool: record.get('Tool')
        }));
        console.log('KPI-Tool Relationships:', JSON.stringify(relationships, null, 2));

        return { kpis, tools };
    } catch (error) {
        console.error('Error connecting to Neo4j:', error);
        throw error;
    } finally {
        await session.close();
        await driver.close();
    }
}

// Uncomment the following lines to run the function
testNeo4jConnection()
    .then(result => console.log('Connection test completed successfully'))
    .catch(error => console.error('Connection test failed:', error));

module.exports = testNeo4jConnection;
