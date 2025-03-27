"use client";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarLayout, SidebarTrigger } from "@/components/ui/sidebar";
import { useState, useEffect } from "react";
import { GeneralSettingsForm } from "@/components/general-settings-form";
import { NotificationsSettingsForm } from "@/components/notifications-settings-form";
import { Separator } from "@/components/ui/separator";

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
  return (
    <SidebarLayout defaultOpen={sidebarOpen}>
      <AppSidebar />
      <main className="flex flex-1 flex-col p-2 transition-all duration-300 ease-in-out">
        <div className="h-full rounded-md border-2 border-dashed">
          <SidebarTrigger />
          <div className="px-8">
            <div>
              <div className="text-2xl font-bold my-4">
                <h2>Settings</h2>
              </div>
            </div>
            <Separator />
            <p className="mt-8 text-lg font-bold">Profile</p>
            <GeneralSettingsForm />
            <Separator className="mt-8"/>
            <p className="mt-8 text-lg font-bold">Notifications</p>
            <NotificationsSettingsForm />
          </div>
        </div>
      </main>
    </SidebarLayout>
  );
}
