import Link from 'next/link'
import { Card } from './components/ui/card'
import { Icons } from './components/icons'

const sections = [
    { title: 'Stakeholders', icon: Icons.users, href: '/stakeholders', description: 'Explore the roles involved in PED design' },
    { title: 'KPIs', icon: Icons.barChart, href: '/kpis', description: 'Key Performance Indicators for PED evaluation' },
    { title: 'Tools', icon: Icons.tools, href: '/tools', description: 'Discover tools used in PED design and analysis' },
    { title: 'Intervention Points', icon: Icons.target, href: '/intervention-points', description: 'Critical decision-making junctures in PED design' },
]

export default function Home() {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">Positive Energy District Design Tool</h1>
            <p className="text-xl">Explore the components and relationships in PED design</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {sections.map((section) => (
                    <Link key={section.title} href={section.href}>
                        <Card className="p-6 hover:shadow-lg transition-shadow">
                            <section.icon className="w-12 h-12 mb-4 text-primary" />
                            <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
                            <p className="text-muted-foreground">{section.description}</p>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    )
}
