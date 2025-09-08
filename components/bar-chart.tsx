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
            fill="#A8E6CF"
            radius={[6, 6, 0, 0]}
            stroke="#81C784"
            strokeWidth={1}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
