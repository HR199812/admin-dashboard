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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SidebarLayout, SidebarTrigger } from "@/components/ui/sidebar";
import { 
  Download, 
  Search, 
  DollarSign, 
  Calendar, 
  TrendingUp,
  FileText,
  Tag,
  CheckCircle,
  Clock,
  XCircle
} from "lucide-react";
import { useSidebarStore } from "@/lib/store";
import { useState } from "react";

// Mock data for earnings history
const earningsData = [
  {
    id: 1,
    brandName: "Nike",
    campaignName: "Summer Collection Launch",
    amount: 15000,
    platform: "Instagram",
    status: "paid",
    paymentDate: "2024-01-15",
    campaignDate: "2024-01-10",
    category: "Fashion",
    deliverables: "3 posts, 5 stories",
    invoiceNumber: "INV-2024-001",
  },
  {
    id: 2,
    brandName: "Apple",
    campaignName: "iPhone 15 Review",
    amount: 25000,
    platform: "YouTube",
    status: "paid",
    paymentDate: "2024-01-20",
    campaignDate: "2024-01-18",
    category: "Tech",
    deliverables: "1 video review",
    invoiceNumber: "INV-2024-002",
  },
  {
    id: 3,
    brandName: "Sephora",
    campaignName: "Beauty Haul",
    amount: 8000,
    platform: "TikTok",
    status: "pending",
    paymentDate: null,
    campaignDate: "2024-01-25",
    category: "Beauty",
    deliverables: "2 videos, 1 live stream",
    invoiceNumber: "INV-2024-003",
  },
  {
    id: 4,
    brandName: "Tesla",
    campaignName: "Model Y Experience",
    amount: 30000,
    platform: "All Platforms",
    status: "processing",
    paymentDate: null,
    campaignDate: "2024-02-01",
    category: "Automotive",
    deliverables: "5 posts, 2 videos, 1 event",
    invoiceNumber: "INV-2024-004",
  },
  {
    id: 5,
    brandName: "Spotify",
    campaignName: "Music Discovery",
    amount: 12000,
    platform: "Instagram",
    status: "paid",
    paymentDate: "2024-01-30",
    campaignDate: "2024-01-28",
    category: "Entertainment",
    deliverables: "4 posts, 3 stories",
    invoiceNumber: "INV-2024-005",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "paid":
      return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
    case "pending":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400";
    case "processing":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400";
    case "cancelled":
      return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case "paid":
      return <CheckCircle className="w-4 h-4" />;
    case "pending":
      return <Clock className="w-4 h-4" />;
    case "processing":
      return <Clock className="w-4 h-4" />;
    case "cancelled":
      return <XCircle className="w-4 h-4" />;
    default:
      return <Clock className="w-4 h-4" />;
  }
};

export default function HistoryPage() {
  const { isOpen } = useSidebarStore();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const filteredData = earningsData.filter((item) => {
    const matchesSearch = item.brandName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.campaignName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || item.status === statusFilter;
    const matchesCategory = categoryFilter === "all" || item.category === categoryFilter;
    
    return matchesSearch && matchesStatus && matchesCategory;
  });

  const totalEarnings = earningsData
    .filter(item => item.status === "paid")
    .reduce((sum, item) => sum + item.amount, 0);

  const pendingEarnings = earningsData
    .filter(item => item.status === "pending" || item.status === "processing")
    .reduce((sum, item) => sum + item.amount, 0);

  const handleExport = (format: "csv" | "pdf") => {
    alert(`Exporting earnings data as ${format.toUpperCase()}...`);
  };

  return (
    <SidebarLayout defaultOpen={isOpen}>
      <AppSidebar />
      <main className="flex flex-1 flex-col p-2 transition-all duration-300 ease-in-out bg-surface">
        <div className="h-full rounded-md border-2 border-dashed border-subtle bg-surface">
          <SidebarTrigger />
          <div className="px-8 py-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-3xl font-bold text-primary">Earnings History</h1>
                <p className="text-secondary">
                  Track your past revenue, deals, and payment history
                </p>
              </div>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  onClick={() => handleExport("csv")}
                  className="flex items-center border-purple-200 dark:border-purple-800 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:border-purple-300 dark:hover:border-purple-700"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Export CSV
                </Button>
                <Button
                  variant="outline"
                  onClick={() => handleExport("pdf")}
                  className="flex items-center border-purple-200 dark:border-purple-800 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:border-purple-300 dark:hover:border-purple-700"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Export PDF
                </Button>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <Card className="rounded-2xl shadow-elevated bg-elevated border-subtle hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-secondary">
                        Total Earnings
                      </p>
                      <p className="text-2xl font-bold text-primary">${totalEarnings.toLocaleString()}</p>
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
                        Pending Payments
                      </p>
                      <p className="text-2xl font-bold text-primary">${pendingEarnings.toLocaleString()}</p>
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
                        Completed Campaigns
                      </p>
                      <p className="text-2xl font-bold text-primary">
                        {earningsData.filter(item => item.status === "paid").length}
                      </p>
                    </div>
                    <CheckCircle className="h-8 w-8 text-purple-600" />
                  </div>
                </CardContent>
              </Card>
              <Card className="rounded-2xl shadow-elevated bg-elevated border-subtle hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-secondary">
                        Avg. Campaign Value
                      </p>
                      <p className="text-2xl font-bold text-primary">
                        ${Math.round(earningsData.reduce((sum, item) => sum + item.amount, 0) / earningsData.length).toLocaleString()}
                      </p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-purple-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Filters */}
            <Card className="rounded-2xl shadow-elevated bg-elevated border-subtle hover-lift mb-6">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary w-4 h-4" />
                      <Input
                        placeholder="Search brands or campaigns..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-full md:w-[180px]">
                      <SelectValue placeholder="Filter by status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="paid">Paid</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="processing">Processing</SelectItem>
                      <SelectItem value="cancelled">Cancelled</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                    <SelectTrigger className="w-full md:w-[180px]">
                      <SelectValue placeholder="Filter by category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="Fashion">Fashion</SelectItem>
                      <SelectItem value="Tech">Tech</SelectItem>
                      <SelectItem value="Beauty">Beauty</SelectItem>
                      <SelectItem value="Automotive">Automotive</SelectItem>
                      <SelectItem value="Entertainment">Entertainment</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Earnings Table */}
            <Card className="rounded-2xl shadow-elevated bg-elevated border-subtle hover-lift">
              <CardHeader>
                <CardTitle className="text-primary">Earnings History</CardTitle>
                <CardDescription className="text-secondary">
                  Complete history of all your brand collaborations and payments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Brand</TableHead>
                      <TableHead>Campaign</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Platform</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Payment Date</TableHead>
                      <TableHead>Invoice</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredData.map((earning) => (
                      <TableRow key={earning.id}>
                        <TableCell className="font-medium text-primary">
                          {earning.brandName}
                        </TableCell>
                        <TableCell>
                          <div>
                            <p className="font-medium text-primary">{earning.campaignName}</p>
                            <p className="text-sm text-secondary">
                              {earning.deliverables}
                            </p>
                          </div>
                        </TableCell>
                        <TableCell className="font-bold text-primary">
                          ${earning.amount.toLocaleString()}
                        </TableCell>
                        <TableCell className="text-primary">{earning.platform}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="flex items-center w-fit">
                            <Tag className="w-3 h-3 mr-1" />
                            {earning.category}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge className={`${getStatusColor(earning.status)} flex items-center w-fit`}>
                            {getStatusIcon(earning.status)}
                            <span className="ml-1 capitalize">{earning.status}</span>
                          </Badge>
                        </TableCell>
                        <TableCell>
                          {earning.paymentDate ? (
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1 text-green-600" />
                              {earning.paymentDate}
                            </div>
                          ) : (
                            <span className="text-secondary">-</span>
                          )}
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm" className="text-purple-600">
                            {earning.invoiceNumber}
                          </Button>
                        </TableCell>
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
