"use client";

import { Bar, BarChart, ResponsiveContainer } from "recharts";

export default function BarChartForCards({
  data,
}: {
  data: { name: string; value: number }[];
}) {
  return (
    <div data-chart="chart-subscriptions" className="chart-container mt-2">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <Bar
            dataKey="value"
            fill="var(--color-subscription)"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
