"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
  { month: "Jan", insta: 400, X: 240, youtube: 100 },
  { month: "Feb", insta: 300, X: 210, youtube: 120 },
  { month: "Mar", insta: 500, X: 320, youtube: 180 },
  { month: "Apr", insta: 700, X: 400, youtube: 230 },
  { month: "May", insta: 600, X: 390, youtube: 200 },
];

export default function MultiLineChart() {
  return (
    <Card className="w-[50%] max-w-3xl mx-4">
      <CardHeader>
        <CardTitle>Total Followers</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="insta" stroke="#3b82f6" strokeWidth={3} />
            <Line type="monotone" dataKey="X" stroke="#f97316" strokeWidth={3} />
            <Line type="monotone" dataKey="youtube" stroke="#10b981" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
