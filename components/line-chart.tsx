"use client";

import { Line, LineChart, ResponsiveContainer } from "recharts";

export default function LineChartForCards({
  data,
}: {
  data: { month: string; revenue: number }[];
}) {
  return (
    <div
      data-chart="chart-revenue"
      className="flex aspect-video justify-center text-xs h-[80px] w-full 
                       [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground 
                       [&_.recharts-cartesian-grid_line]:stroke-border/50 
                       [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border 
                       [&_.recharts-layer]:outline-none 
                       [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none
                       revenue-chart"
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={300}
          height={80}
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: 10,
            bottom: 0,
          }}
        >
          <Line
  type="monotone"
  dataKey="revenue"
  stroke="#4F46E5"
  strokeWidth={2}
  dot={{
    r: 3,
    strokeWidth: 2,
    stroke: "#4F46E5",
    fill: "#fff",
  }}
  activeDot={{
    r: 4,
    strokeWidth: 2,
  }}
/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
