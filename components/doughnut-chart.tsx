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
  { name: "USA", value: 30, color: "#B39DDB" }, // Soft Purple
  { name: "India", value: 25, color: "#A8E6CF" }, // Soft Green
  { name: "Mexico", value: 20, color: "#FFD3A5" }, // Soft Orange
  { name: "China", value: 25, color: "#A8D8EA" }, // Soft Blue
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
              stroke="#FFFFFF"
              strokeWidth={2}
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
