import { use } from 'react'
import Link from 'next/link'
import { getTools } from '../lib/tools'

export default function ToolList() {
    const tools = use(getTools())

    return (
        <ul className="space-y-2">
            {tools.map((tool) => (
                <li key={tool.id}>
                    <Link
                        href={`/tools/${tool.id}`}
                        className="block p-2 hover:bg-gray-100 rounded"
                    >
                        {tool.name}
                    </Link>
                </li>
            ))}
        </ul>
    )
}
