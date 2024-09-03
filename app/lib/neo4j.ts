import neo4j, { Driver } from 'neo4j-driver'

let driver: Driver

export function initDriver() {
    driver = neo4j.driver(
        process.env.NEO4J_URI || 'bolt://localhost:7687',
        neo4j.auth.basic(
            process.env.NEO4J_USERNAME || 'neo4j',
            process.env.NEO4J_PASSWORD || 'password'
        )
    )

    return driver
}

export function getDriver() {
    if (!driver) {
        throw new Error('Driver not initialized. Call initDriver first.')
    }
    return driver
}

export async function closeDriver() {
    if (driver) {
        await driver.close()
    }
}
