"use client";

import {
  RadialBarChart,
  RadialBar,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const data = [
  { name: "Instagram", value: 80, fill: "#3b82f6" }, // Blue
  { name: "X", value: 65, fill: "#f97316" }, // Orange
  { name: "YouTube", value: 50, fill: "#ef4444" }, // Red
];

type CardProps = React.ComponentProps<typeof Card>;

export default function RadialChart({ className, ...props }: CardProps) {
  return (
    <Card className={cn("min-w-[300px] min-h-[240px]", className)} {...props}>
      <CardHeader>
        <CardTitle>Total Followers</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <RadialBarChart
            innerRadius="50%"
            outerRadius="100%"
            barSize={15}
            data={data}
            startAngle={90}
            endAngle={-270}
          >
            <Legend />
            {/* Radial Bars with Rounded Edges */}
            <RadialBar
              minAngle={15}
              background
              clockWise
              dataKey="value"
              cornerRadius={20} // Smooth edges
            />
            <Tooltip />
          </RadialBarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
