"use client";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarLayout, SidebarTrigger } from "@/components/ui/sidebar";
import { useState, useEffect } from "react";
import PaymentsTable from "@/components/payments-table";
import PaymentForm from "@/components/payment-form";
import BarChartForCards from "@/components/bar-chart";
import LineChartForCards from "@/components/line-chart";
import { Card, CardContent } from "@/components/ui/card";
import { billingPageCardsData } from "../../server/billing-response.js";

export default function GeneralSettings() {
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

  const cardsData = billingPageCardsData;

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
              <h2>Billing</h2>
            </div>
          </div>
          <div
            id="first-row-div"
            className="grid grid-cols-4 gap-6 my-6 max-w-full px-8"
          >
            {cardsData.map((elem, ind) => {
              const ChartComponent = componentRegistry[elem.component]; // Get component dynamically
              return (
                <Card key={ind} className="min-w-[200px] min-h-[240px]">
                  <CardContent className="grid gap-2 mt-6">
                    <div className="flex justify-between items-center">
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
          <div className="grid grid-cols-[70%_30%] gap-4 p-8">
            <PaymentsTable />
            <PaymentForm />
          </div>
        </div>
      </main>
    </SidebarLayout>
  );
}
