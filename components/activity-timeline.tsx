import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BadgeCheck, BriefcaseBusiness, Clock, Download } from "lucide-react"

export default function ActivityTimeline() {
  return (
    <Card className="flex flex-col gap-6 rounded-xl py-6">
      <CardHeader className="px-6">
        <div className="flex justify-between">
          <CardTitle className="leading-none font-semibold">Latest Activity</CardTitle>
          <a className="text-muted-foreground hover:text-primary text-sm hover:underline" href="#">
            View All
          </a>
        </div>
      </CardHeader>
      <CardContent className="px-6">
        <ol className="relative border-s">
          <li className="ms-6 mb-10 space-y-2">
            <span className="bg-muted absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full border">
              <BriefcaseBusiness className="text-primary size-3" />
            </span>
            <h3 className="flex items-center font-semibold">
              Shadcn UI Kit Application UI v2.0.0
              <Badge variant="outline" className="ms-2">
                Latest
              </Badge>
            </h3>
            <time className="text-muted-foreground flex items-center gap-1.5 text-sm leading-none">
              <Clock className="size-3" /> Released on December 2nd, 2025
            </time>
            <p className="text-muted-foreground">
              Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order
              E-commerce & Marketing pages.
            </p>
            <Button variant="outline" size="sm" asChild>
              <a href="#">
                <Download className="mr-2 h-3 w-3" /> Download ZIP
              </a>
            </Button>
          </li>

          <li className="ms-6 mb-10 space-y-2">
            <span className="bg-muted absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full border">
              <BadgeCheck className="text-primary size-3" />
            </span>
            <h3 className="font-semibold">Shadcn UI Kit Figma v1.3.0</h3>
            <time className="text-muted-foreground flex items-center gap-1.5 text-sm leading-none">
              <Clock className="size-3" /> Released on December 2nd, 2025
            </time>
            <p className="text-muted-foreground">
              All of the pages and components are first designed in Figma and we keep a parity between the two versions
              even as we update the project.
            </p>
          </li>

          <li className="ms-6 space-y-2">
            <span className="bg-muted absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full border">
              <BriefcaseBusiness className="text-primary size-3" />
            </span>
            <h3 className="font-semibold">Shadcn UI Kit Library v1.2.2</h3>
            <time className="text-muted-foreground flex items-center gap-1.5 text-sm leading-none">
              <Clock className="size-3" /> Released on December 2nd, 2025
            </time>
            <p className="text-muted-foreground">
              Get started with dozens of web components and interactive elements built on top of Tailwind CSS.
            </p>
          </li>
        </ol>
      </CardContent>
    </Card>
  )
}

