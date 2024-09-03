import Link from 'next/link'
import { Icons } from './icons'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Stakeholders', href: '/stakeholders' },
  { name: 'KPIs', href: '/kpis' },
  { name: 'Tools', href: '/tools' },
  { name: 'Intervention Points', href: '/intervention-points' },
]

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <span className="sr-only">PED Design Tool</span>
              <Icons.home className="h-8 w-8 text-primary" />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
