import { Database } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function StorageCard() {
  return (
    <Card className="rounded-md text-xs bg-elevated border-subtle shadow-elevated">
      <CardContent className="flex items-start gap-2.5 p-2.5">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-gray-100 dark:bg-gray-800">
          <Database className="h-5 w-5 text-purple-600" />
        </div>
        <div className="grid flex-1 gap-1">
          <p className="font-medium text-primary">Running out of space?</p>
          <p className="text-secondary">79.2 GB / 100 GB used</p>
          <Progress
            value={79.2}
            className="mt-1"
            aria-label="79.2 GB / 100 GB used"
          />
        </div>
      </CardContent>
    </Card>
  )
}
