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
  { name: "USA", value: 30, color: "#76C7C0" }, // Deeper Teal  
  { name: "India", value: 25, color: "#E76F51" }, // Rich Muted Orange  
  { name: "Mexico", value: 20, color: "#D4A373" }, // Warm Golden Brown  
  { name: "China", value: 25, color: "#6B728E" }, // Muted Blue-Gray  
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
