import Link from "next/link"
import { MoreHorizontal, type LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function NavDashboard({
  projects,
  className,
}: {
  projects: {
    name: string
    url: string
    icon: LucideIcon
  }[]
} & React.ComponentProps<"ul">) {
  return (
    <ul className={cn("grid gap-0.5", className)}>
      {projects.map((item) => (
        <li
          key={item.name}
          className="group relative rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <Link
            href={item.url}
            className="flex h-7 items-center gap-2.5 overflow-hidden rounded-md px-1.5 text-xs text-secondary outline-none transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary focus-visible:ring-2 focus-visible:ring-purple-500/50 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900"
          >
            <item.icon className="h-4 w-4 shrink-0 translate-x-0.5 text-purple-600" />
            <div className="line-clamp-1 grow overflow-hidden pr-6 font-medium">
              {item.name}
            </div>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="peer absolute right-1 top-0.5 h-6 w-6 shrink-0 rounded-md bg-gray-100 dark:bg-gray-800 p-0 text-secondary opacity-0 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-purple-500/50 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900 group-focus-within:opacity-100 group-hover:opacity-100 data-[state=open]:bg-gray-100 dark:data-[state=open]:bg-gray-800 data-[state=open]:opacity-100"
              >
                <MoreHorizontal className="h-4 w-4 text-secondary" />
                <span className="sr-only">Toggle</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="right" align="start" sideOffset={20} className="bg-elevated border-subtle shadow-elevated">
              <DropdownMenuItem className="hover:bg-gray-100 dark:hover:bg-gray-800 text-primary transition-all duration-200">Share</DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-100 dark:hover:bg-gray-800 text-primary transition-all duration-200">Rename</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="hover:bg-gray-100 dark:hover:bg-gray-800 text-primary transition-all duration-200">Archive</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
      ))}
    </ul>
  )
}
