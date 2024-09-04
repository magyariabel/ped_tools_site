import neo4j from 'neo4j-driver'

let driver

export function getDriver() {
    if (!driver) {
        const uri = process.env.NEO4J_URI
        const user = process.env.NEO4J_USERNAME
        const password = process.env.NEO4J_PASSWORD

        if (!uri || !user || !password) {
            throw new Error('Neo4j connection details are not properly set in environment variables')
        }

        driver = neo4j.driver(uri, neo4j.auth.basic(user, password))
    }
    return driver
}
