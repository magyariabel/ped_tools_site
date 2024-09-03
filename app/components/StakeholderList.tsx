import { use } from 'react'
import Link from 'next/link'
import { getStakeholders } from '../lib/stakeholders'

export default function StakeholderList() {
  const stakeholders = use(getStakeholders())

  return (
    <ul className="space-y-2">
      {stakeholders.map((stakeholder) => (
        <li key={stakeholder.id}>
          <Link
            href={`/stakeholders/${stakeholder.id}`}
            className="block p-2 hover:bg-gray-100 rounded"
          >
            {stakeholder.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}
