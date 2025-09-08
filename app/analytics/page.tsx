"use client";

import { AppSidebar } from "@/components/app-sidebar";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { SidebarLayout, SidebarTrigger } from "@/components/ui/sidebar";
import { TrendingUp, Users, Heart, DollarSign } from "lucide-react";
import { useSidebarStore } from "@/lib/store";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from "recharts";

// Mock data for charts
const followerGrowthData = [
  { month: "Jan", followers: 12000 },
  { month: "Feb", followers: 13500 },
  { month: "Mar", followers: 15200 },
  { month: "Apr", followers: 16800 },
  { month: "May", followers: 18500 },
  { month: "Jun", followers: 20300 },
];

const revenueBreakdownData = [
  { platform: "YouTube", revenue: 25000, color: "#FF0000" },
  { platform: "Instagram", revenue: 18000, color: "#E4405F" },
  { platform: "TikTok", revenue: 12000, color: "#000000" },
  { platform: "Twitter", revenue: 8000, color: "#1DA1F2" },
  { platform: "Other", revenue: 5000, color: "#6B7280" },
];

const engagementData = [
  { type: "Likes", count: 125000, color: "#EF4444" },
  { type: "Comments", count: 8500, color: "#3B82F6" },
  { type: "Shares", count: 12000, color: "#10B981" },
  { type: "Saves", count: 6800, color: "#F59E0B" },
];

const monthlyRevenueData = [
  { month: "Jan", revenue: 15000 },
  { month: "Feb", revenue: 18000 },
  { month: "Mar", revenue: 22000 },
  { month: "Apr", revenue: 19000 },
  { month: "May", revenue: 25000 },
  { month: "Jun", revenue: 28000 },
];

export default function AnalyticsPage() {
  const { isOpen } = useSidebarStore();

  return (
    <SidebarLayout defaultOpen={isOpen}>
      <AppSidebar />
      <main className="flex flex-1 flex-col p-2 transition-all duration-300 ease-in-out">
        <div className="h-full rounded-md border-2 border-dashed">
          <SidebarTrigger />
          <div className="px-8 py-6">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
              <p className="text-muted-foreground">
                Track your growth, engagement, and revenue performance
              </p>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <Card className="rounded-2xl shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        Total Followers
                      </p>
                      <p className="text-2xl font-bold">203K</p>
                      <p className="text-sm text-green-600 flex items-center">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        +12.5% vs last month
                      </p>
                    </div>
                    <Users className="h-8 w-8 text-purple-600" />
                  </div>
                </CardContent>
              </Card>
              <Card className="rounded-2xl shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        Engagement Rate
                      </p>
                      <p className="text-2xl font-bold">4.2%</p>
                      <p className="text-sm text-green-600 flex items-center">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        +0.3% vs last month
                      </p>
                    </div>
                    <Heart className="h-8 w-8 text-red-600" />
                  </div>
                </CardContent>
              </Card>
              <Card className="rounded-2xl shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        Monthly Revenue
                      </p>
                      <p className="text-2xl font-bold">$28K</p>
                      <p className="text-sm text-green-600 flex items-center">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        +15.2% vs last month
                      </p>
                    </div>
                    <DollarSign className="h-8 w-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>
              <Card className="rounded-2xl shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        Avg. CPM
                      </p>
                      <p className="text-2xl font-bold">$8.50</p>
                      <p className="text-sm text-green-600 flex items-center">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        +$0.50 vs last month
                      </p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-purple-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {/* Follower Growth Chart */}
              <Card className="rounded-2xl shadow-sm">
                <CardHeader>
                  <CardTitle>Follower Growth</CardTitle>
                  <CardDescription>Monthly follower growth over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={followerGrowthData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line 
                        type="monotone" 
                        dataKey="followers" 
                        stroke="#3B82F6" 
                        strokeWidth={3}
                        dot={{ fill: "#3B82F6", strokeWidth: 2, r: 4 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Monthly Revenue Chart */}
              <Card className="rounded-2xl shadow-sm">
                <CardHeader>
                  <CardTitle>Monthly Revenue</CardTitle>
                  <CardDescription>Revenue trends by month</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={monthlyRevenueData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="revenue" fill="#10B981" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Bottom Row Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Revenue Breakdown by Platform */}
              <Card className="rounded-2xl shadow-sm">
                <CardHeader>
                  <CardTitle>Revenue by Platform</CardTitle>
                  <CardDescription>Revenue breakdown across platforms</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={revenueBreakdownData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ platform, percent }) => `${platform} ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="revenue"
                      >
                        {revenueBreakdownData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Engagement Breakdown */}
              <Card className="rounded-2xl shadow-sm">
                <CardHeader>
                  <CardTitle>Engagement Breakdown</CardTitle>
                  <CardDescription>Engagement metrics by type</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-6">
                    {engagementData.map((item, index) => (
                      <div key={index} className="text-center">
                        <div className="text-3xl font-bold mb-2" style={{ color: item.color }}>
                          {item.count.toLocaleString()}
                        </div>
                        <div className="text-sm font-medium text-muted-foreground">
                          {item.type}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* AI Forecast Card */}
            <Card className="rounded-2xl shadow-sm mt-6 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-purple-600" />
                  AI Revenue Forecast
                </CardTitle>
                <CardDescription>
                  Projected revenue for next month based on current trends
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <p className="text-4xl font-bold text-purple-600 mb-2">$32,500</p>
                  <p className="text-muted-foreground">
                    Expected revenue for July 2024
                  </p>
                  <p className="text-sm text-green-600 mt-2">
                    +16.1% increase from current month
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </SidebarLayout>
  );
}
