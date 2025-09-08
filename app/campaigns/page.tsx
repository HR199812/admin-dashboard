"use client";

import { AppSidebar } from "@/components/app-sidebar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SidebarLayout, SidebarTrigger } from "@/components/ui/sidebar";
import { Plus, Calendar, DollarSign, Users, Clock } from "lucide-react";
import { useSidebarStore } from "@/lib/store";
import { useState } from "react";

// Mock data for campaigns
const campaignsData = [
  {
    id: 1,
    brandName: "Nike",
    logo: "https://logos-world.net/wp-content/uploads/2020/04/Nike-Logo.png",
    dealAmount: 15000,
    startDate: "2024-01-15",
    endDate: "2024-02-15",
    status: "active",
    platform: "Instagram",
    deliverables: "3 posts, 5 stories",
  },
  {
    id: 2,
    brandName: "Apple",
    logo: "https://logos-world.net/wp-content/uploads/2020/04/Apple-Logo.png",
    dealAmount: 25000,
    startDate: "2024-01-20",
    endDate: "2024-03-20",
    status: "pending",
    platform: "YouTube",
    deliverables: "1 video review",
  },
  {
    id: 3,
    brandName: "Sephora",
    logo: "https://logos-world.net/wp-content/uploads/2020/09/Sephora-Logo.png",
    dealAmount: 8000,
    startDate: "2024-01-10",
    endDate: "2024-01-25",
    status: "completed",
    platform: "TikTok",
    deliverables: "2 videos, 1 live stream",
  },
  {
    id: 4,
    brandName: "Tesla",
    logo: "https://logos-world.net/wp-content/uploads/2020/04/Tesla-Logo.png",
    dealAmount: 30000,
    startDate: "2024-02-01",
    endDate: "2024-04-01",
    status: "active",
    platform: "All Platforms",
    deliverables: "5 posts, 2 videos, 1 event",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "active":
      return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
    case "pending":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400";
    case "completed":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
  }
};

export default function CampaignsPage() {
  const { isOpen } = useSidebarStore();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <SidebarLayout defaultOpen={isOpen}>
      <AppSidebar />
      <main className="flex flex-1 flex-col p-2 transition-all duration-300 ease-in-out bg-surface">
        <div className="h-full rounded-md border-2 border-dashed border-subtle bg-surface">
          <SidebarTrigger />
          <div className="px-8 py-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-3xl font-bold text-primary">Campaigns</h1>
                <p className="text-secondary">
                  Manage your brand collaborations and deals
                </p>
              </div>
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    <Plus className="w-4 h-4 mr-2" />
                    New Campaign
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] bg-elevated border-subtle">
                  <DialogHeader>
                    <DialogTitle className="text-primary">Add New Campaign</DialogTitle>
                    <DialogDescription className="text-secondary">
                      Create a new brand collaboration campaign.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="brand" className="text-right text-primary">
                        Brand
                      </Label>
                      <Input
                        id="brand"
                        placeholder="Brand name"
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="amount" className="text-right text-primary">
                        Amount
                      </Label>
                      <Input
                        id="amount"
                        type="number"
                        placeholder="Deal amount"
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="platform" className="text-right text-primary">
                        Platform
                      </Label>
                      <Input
                        id="platform"
                        placeholder="Platform"
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="deliverables" className="text-right text-primary">
                        Deliverables
                      </Label>
                      <Input
                        id="deliverables"
                        placeholder="Campaign deliverables"
                        className="col-span-3"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button
                      type="submit"
                      onClick={() => setIsDialogOpen(false)}
                      className="bg-purple-600 hover:bg-purple-700"
                    >
                      Create Campaign
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>

            {/* Campaign Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <Card className="rounded-2xl shadow-elevated bg-elevated border-subtle hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-secondary">
                        Total Revenue
                      </p>
                      <p className="text-2xl font-bold text-primary">$78,000</p>
                    </div>
                    <DollarSign className="h-8 w-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>
              <Card className="rounded-2xl shadow-elevated bg-elevated border-subtle hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-secondary">
                        Active Campaigns
                      </p>
                      <p className="text-2xl font-bold text-primary">2</p>
                    </div>
                    <Users className="h-8 w-8 text-purple-600" />
                  </div>
                </CardContent>
              </Card>
              <Card className="rounded-2xl shadow-elevated bg-elevated border-subtle hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-secondary">
                        Pending Deals
                      </p>
                      <p className="text-2xl font-bold text-primary">1</p>
                    </div>
                    <Clock className="h-8 w-8 text-yellow-600" />
                  </div>
                </CardContent>
              </Card>
              <Card className="rounded-2xl shadow-elevated bg-elevated border-subtle hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-secondary">
                        Completed
                      </p>
                      <p className="text-2xl font-bold text-primary">1</p>
                    </div>
                    <Calendar className="h-8 w-8 text-purple-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Campaigns Table */}
            <Card className="rounded-2xl shadow-elevated bg-elevated border-subtle hover-lift">
              <CardHeader>
                <CardTitle className="text-primary">All Campaigns</CardTitle>
                <CardDescription className="text-secondary">
                  Overview of all your brand collaborations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[200px]">Brand</TableHead>
                      <TableHead>Deal Amount</TableHead>
                      <TableHead>Platform</TableHead>
                      <TableHead>Start Date</TableHead>
                      <TableHead>End Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Deliverables</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {campaignsData.map((campaign) => (
                      <TableRow key={campaign.id}>
                        <TableCell className="font-medium w-[200px]">
                          <div className="flex items-center space-x-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={campaign.logo} alt={campaign.brandName} />
                              <AvatarFallback>{campaign.brandName.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <span className="text-primary">{campaign.brandName}</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-primary">${campaign.dealAmount.toLocaleString()}</TableCell>
                        <TableCell className="text-primary">{campaign.platform}</TableCell>
                        <TableCell className="text-primary">{campaign.startDate}</TableCell>
                        <TableCell className="text-primary">{campaign.endDate}</TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(campaign.status)}>
                            {campaign.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-primary">{campaign.deliverables}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </SidebarLayout>
  );
}
