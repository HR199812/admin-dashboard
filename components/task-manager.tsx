"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { PlusCircle } from "lucide-react";

const tasks = [
  {
    id: 1,
    title: "Follow up with Acme Inc.",
    description: "Send proposal and schedule meeting",
    priority: "High",
    priorityColor: "bg-red-100 text-red-700",
    due: "Due Today",
    completed: false,
  },
  {
    id: 2,
    title: "Prepare quarterly report",
    description: "Compile sales data and forecasts",
    priority: "Medium",
    priorityColor: "bg-amber-100 text-amber-700",
    due: "Due Tomorrow",
    completed: false,
  },
  {
    id: 3,
    title: "Update customer profiles",
    description: "Verify contact information and preferences",
    priority: "Low",
    priorityColor: "bg-green-100 text-green-700",
    due: "Due Oct 15",
    completed: true,
  },
];

export default function TaskManager() {
  return (
    <Card className="w-full max-w-lg">
      <CardHeader className="flex flex-row justify-between items-center px-6 py-4 border-b">
        <div>
          <CardTitle>Tasks</CardTitle>
          <p className="text-sm text-muted-foreground">Track and manage your upcoming tasks.</p>
        </div>
        <Button variant="outline" size="sm" className="gap-1">
          <PlusCircle className="w-4 h-4" /> Add Task
        </Button>
      </CardHeader>
      <CardContent className="px-6 py-4 space-y-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`flex items-start space-x-3 rounded-md border p-3 transition-colors ${
              task.completed ? "bg-muted/50" : ""
            }`}
          >
            <Checkbox defaultChecked={task.completed} />
            <div className="space-y-1">
              <p className={`text-sm font-medium ${task.completed ? "text-muted-foreground line-through" : ""}`}>
                {task.title}
              </p>
              <p className={`text-xs text-muted-foreground ${task.completed ? "line-through" : ""}`}>
                {task.description}
              </p>
              <div className="flex items-center pt-1">
                <Badge className={`mr-2 text-xs font-medium ${task.priorityColor}`}>{task.priority}</Badge>
                <span className="text-xs text-muted-foreground">{task.due}</span>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
