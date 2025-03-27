"use client";
import { AppSidebar } from "@/components/app-sidebar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { SidebarLayout, SidebarTrigger } from "@/components/ui/sidebar";
import { BellRing, Check } from "lucide-react";
import { useEffect, useState } from "react";
import React from "react";
import BarChartForCards from "@/components/bar-chart";
import LineChartForCards from "@/components/line-chart";
import UserCard from "@/components/user-card";
import DoughnutChart from "@/components/doughnut-chart";
import { Progress } from "@/components/ui/progress";

export default function Page() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    (async function fetchCookies() {
      try {
        const res = await fetch("/api/cookies");
        const data = await res.json();
        setSidebarOpen(data.sidebarState === "true");
      } catch (error) {
        console.error("Error fetching cookies:", error);
      }
    })();
  }, []);

  // const [date, setDate] = React.useState<Date | undefined>(new Date());

  const notifications = [
    {
      title: "Your call has been confirmed.",
      description: "1 hour ago",
    },
    {
      title: "You have a new message!",
      description: "1 hour ago",
    },
    {
      title: "Your subscription is expiring soon!",
      description: "2 hours ago",
    },
  ];

  const cardsData = [
    {
      title: "Total Revenue",
      content: "$45,231.89",
      footer: "+20.1% from last month",
      component: "LineChartForCards",
      data: [
        { month: "Jan", revenue: 1200 },
        { month: "Feb", revenue: 2100 },
        { month: "Mar", revenue: 1800 },
        { month: "Apr", revenue: 1600 },
        { month: "May", revenue: 2200 },
        { month: "Jun", revenue: 1900 },
        { month: "Jul", revenue: 2400 },
        { month: "Aug", revenue: 4200 },
      ],
    },
    {
      title: "Total Followers",
      content: "45,231.89",
      footer: "+2.1% from last month",
      component: "BarChartForCards",
      data: [
        { name: "Jan", value: 400 },
        { name: "Feb", value: 600 },
        { name: "Mar", value: 800 },
      ],
    },
    {
      title: "Monthly Goal",
      content: "54%",
      footer: "+0.93% from last month",
      component: "LineChartForCards",
      data: [
        { month: "Jan", revenue: 1200 },
        { month: "Feb", revenue: 2100 },
        { month: "Mar", revenue: 1800 },
        { month: "Apr", revenue: 1600 },
        { month: "May", revenue: 2200 },
        { month: "Jun", revenue: 1900 },
        { month: "Jul", revenue: 2400 },
        { month: "Aug", revenue: 4200 },
      ],
    },
    {
      title: "Total Revenue",
      content: "$45,231.89",
      footer: "+20.1% from last month",
      component: "BarChartForCards",
      data: [
        { name: "Jan", value: 400 },
        { name: "Feb", value: 600 },
        { name: "Mar", value: 800 },
        { name: "Apr", value: 800 },
      ],
    },
  ];

  const campaginsData = [
    {
      name: "Olivia Martin",
      email: "olivia.martin@email.com",
      avatarUrl: "/avatars/01.png",
      amount: "+$1,999.00",
    },
    {
      name: "Olivia Martin",
      email: "olivia.martin@email.com",
      avatarUrl: "/avatars/01.png",
      amount: "+$1,999.00",
    },
    {
      name: "Olivia Martin",
      email: "olivia.martin@email.com",
      avatarUrl: "/avatars/01.png",
      amount: "+$1,999.00",
    },
    {
      name: "Olivia Martin",
      email: "olivia.martin@email.com",
      avatarUrl: "/avatars/01.png",
      amount: "+$1,999.00",
    },
    {
      name: "Olivia Martin",
      email: "olivia.martin@email.com",
      avatarUrl: "/avatars/01.png",
      amount: "+$1,999.00",
    },
    {
      name: "Olivia Martin",
      email: "olivia.martin@email.com",
      avatarUrl: "/avatars/01.png",
      amount: "+$1,999.00",
    },
    {
      name: "Olivia Martin",
      email: "olivia.martin@email.com",
      avatarUrl: "/avatars/01.png",
      amount: "+$1,999.00",
    },
    {
      name: "Olivia Martin",
      email: "olivia.martin@email.com",
      avatarUrl: "/avatars/01.png",
      amount: "+$1,999.00",
    },
    {
      name: "Olivia Martin",
      email: "olivia.martin@email.com",
      avatarUrl: "/avatars/01.png",
      amount: "+$1,999.00",
    },
  ];
  // Component Registry (Lookup Object)
  const componentRegistry: Record<string, React.ElementType> = {
    BarChartForCards,
    LineChartForCards,
  };

  return (
    <SidebarLayout defaultOpen={sidebarOpen}>
      <AppSidebar />
      <main className="flex flex-1 flex-col p-2 transition-all duration-300 ease-in-out">
        <div className="h-full rounded-md border-2 border-dashed">
          <SidebarTrigger />
          <div className="px-8">
            <div className="text-2xl font-bold my-4">
              <h2>Welcome back, Morty!</h2>
            </div>

            {/* First Row Cards */}
            <div
              id="first-row-div"
              className="grid grid-cols-4 gap-6 my-6 max-w-full"
            >
              {cardsData.map((elem, ind) => {
                const ChartComponent = componentRegistry[elem.component]; // Get component dynamically
                return (
                  <Card key={ind} className="min-w-[200px] min-h-[240px]">
                    <CardContent className="grid gap-2 mt-6">
                      <div className="flex justify-between items-center">
                        <p className="text-md font-semibold">{elem.title}</p>
                        <p className="text-md font-semibold">{elem.title}</p>
                      </div>
                      <p className="text-2xl font-bold">{elem.content}</p>
                      <p className="text-sm text-[#737680]">{elem.footer}</p>
                      {ChartComponent && <ChartComponent data={elem.data} />}
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div
              id="second-row-div"
              className="grid grid-cols-2 gap-6 my-6 max-w-full"
            >
              <div
                id="second-row-div-child-two"
                className="grid grid-cols-1 gap-6 my-6 max-w-full"
              >
                <Card className="min-w-[300px] min-h-[240px] max-h-[440px] flex flex-col overflow-hidden">
                  <CardHeader>
                    <CardTitle>Campaigns List</CardTitle>
                    <CardDescription>
                      All your ongoing projects, collabs and campaigns
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 overflow-y-auto p-4 space-y-6">
                    {campaginsData.map((elem, ind) => {
                      return (
                        <UserCard
                          key={ind}
                          name={elem.name}
                          email={elem.email}
                          avatarUrl={elem.avatarUrl}
                          amount={elem.amount}
                        />
                      );
                    })}
                  </CardContent>
                </Card>
              </div>
              <div
                id="second-row-div-child-one"
                className="grid grid-cols-2 gap-6 my-6 max-w-full"
              >
                {/* <RadialChart /> */}
                <Card className="min-w-[200px] min-h-[240px] max-h-[440px]">
                  <CardHeader>
                    <CardTitle>Countries</CardTitle>
                    <CardDescription>Top 4</CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <DoughnutChart />
                  </CardContent>
                  <div className="grid grid-cols-3 gap-2">
                    <CardContent className="grid gap-4">
                      <p>Male</p>
                      <Progress value={60} />
                    </CardContent>
                    <CardContent className="grid gap-4">
                      <p>Female</p>
                      <Progress value={60} />
                    </CardContent>
                    <CardContent className="grid gap-4">
                      <p>Others</p>
                      <Progress value={60} />
                    </CardContent>
                  </div>
                </Card>
                <Card className="min-w-[200px] min-h-[240px] max-h-[440px]">
                  <CardHeader>
                    <CardTitle>Notifications</CardTitle>
                    <CardDescription>
                      You have 3 unread messages.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <div className=" flex items-center space-x-4 rounded-md border p-4">
                      <BellRing />
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">
                          Push Notifications
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Send notifications to device.
                        </p>
                      </div>
                      {/* <Switch /> */}
                    </div>
                    <div>
                      {notifications.map((notification, index) => (
                        <div
                          key={index}
                          className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                        >
                          <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                          <div className="space-y-1">
                            <p className="text-sm font-medium leading-none">
                              {notification.title}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {notification.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">
                      <Check /> Mark all as read
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
    </SidebarLayout>
  );
}
