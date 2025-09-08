"use client";

import {
  Atom,
  Eclipse,
  Frame,
  History,
  Settings2,
  BarChart3,
  MessageSquare,
  Lightbulb,
  TrendingUp,
  DollarSign,
} from "lucide-react";

import { ROUTES } from "../utils/constants";
import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { StorageCard } from "@/components/storage-card";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
} from "@/components/ui/sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
const data = {
  teams: [
    {
      name: "Influential Inc",
      logo: Atom,
      plan: "Enterprise",
    },
    {
      name: "HighAllTheTime",
      logo: Eclipse,
      plan: "Startup",
    },
  ],
  user: {
    name: "Rick Sanchez",
    email: "rick.sanchez@influential.com",
    avatar: "https://github.com/shadcn.png",
  },
  navMain: [
    {
      title: "Dashboard",
      url: ROUTES.DASHBOARD,
      icon: Frame,
      description: "Overview, KPIs, growth insights",
      color: "text-purple-600",
    },
    {
      title: "Campaigns",
      url: ROUTES.CAMPAIGNS,
      icon: DollarSign,
      description: "List, collaborations, manage deals",
      color: "text-green-600",
    },
    {
      title: "Analytics",
      url: ROUTES.ANALYTICS,
      icon: BarChart3,
      description: "Followers, engagement, revenue trends",
      color: "text-purple-600",
    },
    {
      title: "AI Chat",
      url: ROUTES.AI_CHAT,
      icon: MessageSquare,
      description: "Interactive assistant for improvements",
      color: "text-pink-600",
    },
    {
      title: "Practice",
      url: ROUTES.PRACTICE,
      icon: Lightbulb,
      description: "AI-suggested post ideas, content calendar",
      color: "text-yellow-600",
    },
    {
      title: "History",
      url: ROUTES.HISTORY,
      icon: History,
      description: "Past revenue, payout logs, sponsor reports",
      color: "text-orange-600",
    },
    {
      title: "Research",
      url: ROUTES.RESEARCH,
      icon: TrendingUp,
      description: "Trending topics, brand insights, competitor analysis",
      color: "text-cyan-600",
    },
    {
      title: "Settings",
      url: ROUTES.SETTINGS,
      icon: Settings2,
      description: "Profile, appearance, billing",
      color: "text-gray-600 dark:text-white",
    },
  ],
  searchResults: [
    {
      title: "Routing Fundamentals",
      teaser:
        "The skeleton of every application is routing. This page will introduce you to the fundamental concepts of routing for the web and how to handle routing in Next.js.",
      url: "#",
    },
    {
      title: "Layouts and Templates",
      teaser:
        "The special files layout.js and template.js allow you to create UI that is shared between routes. This page will guide you through how and when to use these special files.",
      url: "#",
    },
    {
      title: "Data Fetching, Caching, and Revalidating",
      teaser:
        "Data fetching is a core part of any application. This page goes through how you can fetch, cache, and revalidate data in React and Next.js.",
      url: "#",
    },
    {
      title: "Server and Client Composition Patterns",
      teaser:
        "When building React applications, you will need to consider what parts of your application should be rendered on the server or the client. ",
      url: "#",
    },
    {
      title: "Server Actions and Mutations",
      teaser:
        "Server Actions are asynchronous functions that are executed on the server. They can be used in Server and Client Components to handle form submissions and data mutations in Next.js applications.",
      url: "#",
    },
  ],
};

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-subtle bg-surface">
      <SidebarHeader className="border-b border-subtle bg-surface">
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent className="bg-surface">
        <SidebarItem>
          <SidebarLabel className="text-secondary font-medium">Platform</SidebarLabel>
          <NavMain items={data.navMain} searchResults={data.searchResults} />
        </SidebarItem>
      </SidebarContent>
      <div className="mt-auto space-y-2 p-2 bg-surface border-t border-subtle">
        <div className="px-2 py-1">
          <ThemeToggle />
        </div>
        <StorageCard />
        <NavUser user={data.user} />
      </div>
    </Sidebar>
  );
}
