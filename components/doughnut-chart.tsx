"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { name: "USA", value: 30, color: "#D4D4D8" }, // Light Gray
  { name: "India", value: 25, color: "#A1A1AA" }, // Medium Gray
  { name: "Mexico", value: 20, color: "#71717A" }, // Dark Gray
  { name: "China", value: 25, color: "#3F3F46" }, // Almost Black
];

export default function DoughnutChart() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={60} // Creates the doughnut shape
          outerRadius={90}
          paddingAngle={2} // Adds spacing between sections
          cornerRadius={20} // Rounds the edges of the sections
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={entry.color}
              stroke="#fff"
              strokeWidth={3}
            />
          ))}
        </Pie>
        <Tooltip />
        <Legend
          layout="horizontal"
          align="center"
          verticalAlign="bottom"
          iconType="circle"
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
