"use client";
import { AppSidebar } from "@/components/app-sidebar";
import { Button } from "@/components/ui/button";
import { SidebarLayout, SidebarTrigger } from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

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
  
  const heading = "Ask your queries!";
  const speed = 60;

  const [displayText, setDisplayText] = useState("");
  useEffect(() => {
    let i = 0;

    const typeCharacter = () => {
      if (i < heading.length) {
        setDisplayText((prevText) => prevText + heading.charAt(i));
        setTimeout(typeCharacter, speed);
      }
      i++;
    };

    typeCharacter();
  }, []);

  return (
    <SidebarLayout defaultOpen={sidebarOpen}>
      <AppSidebar />
      <main className="flex flex-1 flex-col p-2 transition-all duration-300 ease-in-out">
        <div className="h-full rounded-md border-2 border-dashed p-2">
          <SidebarTrigger />
          {/* List and Alerts */}
          <div className="items-center justify-center w-full mt-4">
            <div className="flex items-center justify-center w-full mt-4">
              <p className="text-2xl font-bold">{displayText}</p>
            </div>
            <div className="flex items-center justify-center w-full mt-4">
              <div className="relative flex h-10 w-full min-w-[90%] max-w-[90%]">
                <Button type="submit" className="!absolute right-1 top-1 z-10">
                  Subscribe
                </Button>
                <Button type="submit" className="!absolute left-1 top-1 z-10">
                  attach
                </Button>
                <Input
                  type="email"
                  placeholder="Email"
                  className="peer h-full w-full"
                />
              </div>
            </div>
            <div className="flex items-center justify-center w-full mt-4">
              <div className="flex flex-wrap gap-2 items-center justify-around h-10 w-full min-w-[50%] max-w-[50%]">
                <Button>Create image</Button>
                <Button>Summarize text</Button>
                <Button>Analyze data</Button>
                <Button>Help me write</Button>
                <Button>Analyze images</Button>
                <Button>Get advice</Button>
                <Button>Brainstorm</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </SidebarLayout>
  );
}
