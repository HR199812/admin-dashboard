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
          <defs>
            <linearGradient id="followersGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#14B8A6" />
              <stop offset="100%" stopColor="#0F766E" />
            </linearGradient>
          </defs>
          <Bar
            dataKey="value"
            fill="url(#followersGradient)"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
