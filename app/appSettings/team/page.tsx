"use client";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarLayout, SidebarTrigger } from "@/components/ui/sidebar";
import { useState, useEffect } from "react";

// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { PlusCircle, 
  // Columns2 
} from "lucide-react";
// import {
//   DropdownMenu,
//   DropdownMenuTrigger,
//   DropdownMenuContent,
//   DropdownMenuItem,
// } from "@/components/ui/dropdown-menu";
// import { ChevronDown } from "lucide-react";
// import { Input } from "@/components/ui/input";
import ChatComponent from "@/components/chat-component";
import UsersTable from "@/components/users-table";

export default function GeneralSettings() {
  // const teamMembers = [
  //   {
  //     name: "Sofia Davis",
  //     email: "m@example.com",
  //     avatar: "/avatars/01.png",
  //     role: "Owner",
  //   },
  //   {
  //     name: "Jackson Lee",
  //     email: "p@example.com",
  //     avatar: "/avatars/02.png",
  //     role: "Member",
  //   },
  //   {
  //     name: "Isabella Nguyen",
  //     email: "i@example.com",
  //     avatar: "/avatars/03.png",
  //     role: "Member",
  //   },
  // ];
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
            <div className="flex justify-between items-centertext-2xl font-bold my-4">
              <h2 className="font-bold text-2xl">Team</h2>
              <Button className="gap-2 px-4 py-2 has-[>svg]:px-3 shadow-xs">
                <PlusCircle className="size-4" />
                Add New User
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-[70%_30%] h-[600px] gap-4 p-8 mb-4 mb-16">
            <UsersTable />
            <ChatComponent />
          </div>
          {/* <div className="mt-16">
            <Card className="w-full max-w-md">
              <CardHeader>
                <CardTitle>Team Members</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Invite your team members to collaborate.
                </p>
              </CardHeader>
              <CardContent className="grid gap-4">
                {teamMembers.map((member) => (
                  <div
                    key={member.email}
                    className="flex items-center justify-between space-x-4"
                  >
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarImage src={member.avatar} alt={member.name} />
                        <AvatarFallback>{member.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">{member.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {member.email}
                        </p>
                      </div>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          className="ml-auto flex items-center gap-2"
                        >
                          {member.role}{" "}
                          <ChevronDown className="w-4 h-4 text-muted-foreground" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Owner</DropdownMenuItem>
                        <DropdownMenuItem>Member</DropdownMenuItem>
                        <DropdownMenuItem>Viewer</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div> */}
        </div>
      </main>
    </SidebarLayout>
  );
}
