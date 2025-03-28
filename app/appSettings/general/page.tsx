"use client";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarLayout, SidebarTrigger } from "@/components/ui/sidebar";
import { useState, useEffect } from "react";
import { GeneralSettingsForm } from "@/components/general-settings-form";
import { NotificationsSettingsForm } from "@/components/notifications-settings-form";
import { Separator } from "@/components/ui/separator";
import ProfileCard from "@/components/profile-card";

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
            <div className="grid grid-cols-[70%_30%] gap-2">
              <GeneralSettingsForm />
              <div className="grid grid-row-3 gap-6 my-6 max-w-full px-8">
                <ProfileCard />
              </div>
            </div>
            <Separator className="mt-8" />
            <p className="mt-8 text-lg font-bold">Notifications</p>
            <div className="grid grid-cols-[70%_30%] gap-2">
              <NotificationsSettingsForm />
              <div className="grid grid-row-3 gap-6 my-6 max-w-full px-8"></div>
            </div>
          </div>
        </div>
      </main>
    </SidebarLayout>
  );
}
