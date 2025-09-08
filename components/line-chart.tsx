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
  stroke="#B39DDB"
  strokeWidth={3}
  dot={{
    r: 4,
    strokeWidth: 2,
    stroke: "#9575CD",
    fill: "#E1BEE7",
  }}
  activeDot={{
    r: 6,
    strokeWidth: 3,
    stroke: "#7E57C2",
    fill: "#B39DDB",
  }}
/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
