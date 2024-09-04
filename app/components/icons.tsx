import {
  Users,
  BarChart,
  Wrench,
  Target,
  Home, // Add this line to import the Home icon
} from "lucide-react"

import type { LucideIcon } from "lucide-react"

export type Icon = LucideIcon

export const Icons = {
  home: Home,
  users: Users,
  barChart: BarChart,
  tools: Wrench, // Change this to use Wrench instead of Tools
  target: Target,
}
