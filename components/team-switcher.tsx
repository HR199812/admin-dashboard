"use client"

import * as React from "react"
import { ChevronsUpDown, Plus } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function TeamSwitcher({
  teams,
}: {
  teams: {
    name: string
    logo: React.ElementType
    plan: string
  }[]
}) {
  const [activeTeam, setActiveTeam] = React.useState(teams[0])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-full rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/50 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900 data-[state=open]:bg-gray-100 dark:data-[state=open]:bg-gray-800 transition-all duration-200">
        <div className="flex items-center gap-1.5 overflow-hidden px-2 py-1.5 text-left text-sm transition-all">
          <div className="flex h-5 w-5 items-center justify-center rounded-sm bg-primary text-primary-foreground">
            <activeTeam.logo className="h-3.5 w-3.5 shrink-0" />
          </div>
          <div className="line-clamp-1 flex-1 pr-2 font-medium text-primary">
            {activeTeam.name}
          </div>
          <ChevronsUpDown className="ml-auto h-4 w-4 text-secondary" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-64 bg-elevated border-subtle shadow-elevated"
        align="start"
        side="right"
        sideOffset={4}
      >
        <DropdownMenuLabel className="text-xs text-secondary">
          Teams
        </DropdownMenuLabel>
        {teams.map((team, index) => (
          <DropdownMenuItem
            key={team.name}
            onClick={() => setActiveTeam(team)}
            className="items-start gap-2 px-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 text-primary transition-all duration-200"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-primary text-primary-foreground">
              <team.logo className="h-5 w-5 shrink-0" />
            </div>
            <div className="grid flex-1 leading-tight">
              <div className="line-clamp-1 font-medium text-primary">{team.name}</div>
              <div className="overflow-hidden text-xs text-secondary">
                <div className="line-clamp-1">{team.plan}</div>
              </div>
            </div>
            <DropdownMenuShortcut className="self-center text-secondary">
              ⌘{index + 1}
            </DropdownMenuShortcut>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem className="gap-2 px-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 text-primary transition-all duration-200">
          <div className="flex h-8 w-8 items-center justify-center rounded-md border border-subtle bg-surface">
            <Plus className="h-5 w-5 text-secondary" />
          </div>
          <div className="font-medium text-primary">Add workspace</div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
