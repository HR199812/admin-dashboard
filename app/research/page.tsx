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
import { Badge } from "@/components/ui/badge";
import { SidebarLayout, SidebarTrigger } from "@/components/ui/sidebar";
import { 
  Search, 
  Target, 
  Lightbulb,
  ArrowUpRight,
  Zap
} from "lucide-react";
import { useSidebarStore } from "@/lib/store";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// Mock data for trending topics
const trendingTopics = [
  {
    id: 1,
    topic: "Sustainable Fashion",
    trend: "up",
    growth: "+45%",
    hashtag: "#SustainableFashion",
    posts: "2.3M",
    engagement: "High",
    category: "Fashion",
  },
  {
    id: 2,
    topic: "AI Beauty Tools",
    trend: "up",
    growth: "+78%",
    hashtag: "#AIBeauty",
    posts: "850K",
    engagement: "Very High",
    category: "Beauty",
  },
  {
    id: 3,
    topic: "Morning Routines",
    trend: "up",
    growth: "+32%",
    hashtag: "#MorningRoutine",
    posts: "5.1M",
    engagement: "High",
    category: "Lifestyle",
  },
  {
    id: 4,
    topic: "Plant-Based Recipes",
    trend: "up",
    growth: "+28%",
    hashtag: "#PlantBased",
    posts: "1.8M",
    engagement: "Medium",
    category: "Food",
  },
  {
    id: 5,
    topic: "Home Workouts",
    trend: "down",
    growth: "-12%",
    hashtag: "#HomeWorkout",
    posts: "3.2M",
    engagement: "Medium",
    category: "Fitness",
  },
];

// Mock data for competitor analysis
const competitorData = [
  {
    name: "Sarah Johnson",
    followers: "2.1M",
    engagement: "4.8%",
    avgRevenue: "$25K",
    platforms: ["Instagram", "TikTok", "YouTube"],
    category: "Lifestyle",
    growth: "+15%",
  },
  {
    name: "Emma Chen",
    followers: "1.8M",
    engagement: "5.2%",
    avgRevenue: "$22K",
    platforms: ["Instagram", "TikTok"],
    category: "Beauty",
    growth: "+22%",
  },
  {
    name: "Alex Rodriguez",
    followers: "3.2M",
    engagement: "3.9%",
    avgRevenue: "$35K",
    platforms: ["YouTube", "Instagram"],
    category: "Tech",
    growth: "+8%",
  },
];

// Mock data for brand opportunities
const brandOpportunities = [
  {
    id: 1,
    brandName: "Patagonia",
    category: "Outdoor/Sustainable",
    budget: "$15K - $25K",
    matchScore: 92,
    reason: "High alignment with your sustainable lifestyle content",
    platforms: ["Instagram", "YouTube"],
    deadline: "2024-02-15",
  },
  {
    id: 2,
    brandName: "Glossier",
    category: "Beauty",
    budget: "$8K - $15K",
    matchScore: 88,
    reason: "Perfect fit for your beauty content and audience demographics",
    platforms: ["Instagram", "TikTok"],
    deadline: "2024-02-20",
  },
  {
    id: 3,
    brandName: "Peloton",
    category: "Fitness",
    budget: "$20K - $30K",
    matchScore: 75,
    reason: "Good match for your lifestyle content, expanding into fitness",
    platforms: ["Instagram", "YouTube"],
    deadline: "2024-02-25",
  },
];

// Mock data for trend analysis
const trendAnalysisData = [
  { month: "Jan", sustainable: 120, beauty: 180, lifestyle: 200, fitness: 150 },
  { month: "Feb", sustainable: 145, beauty: 195, lifestyle: 220, fitness: 140 },
  { month: "Mar", sustainable: 160, beauty: 210, lifestyle: 240, fitness: 130 },
  { month: "Apr", sustainable: 175, beauty: 225, lifestyle: 260, fitness: 125 },
  { month: "May", sustainable: 190, beauty: 240, lifestyle: 280, fitness: 120 },
  { month: "Jun", sustainable: 205, beauty: 255, lifestyle: 300, fitness: 115 },
];

const getEngagementColor = (level: string) => {
  switch (level) {
    case "Very High":
      return "bg-green-100 text-green-800";
    case "High":
      return "bg-purple-100 text-purple-800";
    case "Medium":
      return "bg-yellow-100 text-yellow-800";
    case "Low":
      return "bg-gray-100 text-gray-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const getMatchScoreColor = (score: number) => {
  if (score >= 90) return "bg-green-100 text-green-800";
  if (score >= 80) return "bg-purple-100 text-purple-800";
  if (score >= 70) return "bg-yellow-100 text-yellow-800";
  return "bg-gray-100 text-gray-800";
};

export default function ResearchPage() {
  const { isOpen } = useSidebarStore();

  return (
    <SidebarLayout defaultOpen={isOpen}>
      <AppSidebar />
      <main className="flex flex-1 flex-col p-2 transition-all duration-300 ease-in-out">
        <div className="h-full rounded-md border-2 border-dashed">
          <SidebarTrigger />
          <div className="px-8 py-6">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900">Research & Insights</h1>
              <p className="text-muted-foreground">
                Discover trending topics, analyze competitors, and find brand opportunities
              </p>
            </div>

            {/* Trending Topics */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Trending Topics</h2>
                <Button variant="outline" className="flex items-center">
                  <Search className="w-4 h-4 mr-2" />
                  Search Trends
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {trendingTopics.map((topic) => (
                  <Card key={topic.id} className="rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-semibold text-lg">{topic.topic}</h3>
                          <p className="text-sm text-muted-foreground">{topic.hashtag}</p>
                        </div>
                        <div className="flex items-center space-x-1">
                          {topic.trend === "up" ? (
                            <ArrowUpRight className="w-4 h-4 text-green-600" />
                          ) : (
                            <ArrowUpRight className="w-4 h-4 text-red-600 rotate-180" />
                          )}
                          <span className={`text-sm font-medium ${
                            topic.trend === "up" ? "text-green-600" : "text-red-600"
                          }`}>
                            {topic.growth}
                          </span>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Posts</span>
                          <span className="font-medium">{topic.posts}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Engagement</span>
                          <Badge className={getEngagementColor(topic.engagement)}>
                            {topic.engagement}
                          </Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Category</span>
                          <Badge variant="outline">{topic.category}</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Trend Analysis Chart */}
            <Card className="rounded-2xl shadow-sm mb-8">
              <CardHeader>
                <CardTitle>Category Trend Analysis</CardTitle>
                <CardDescription>Monthly trend performance across different content categories</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={trendAnalysisData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="sustainable" stroke="#10B981" strokeWidth={2} name="Sustainable" />
                    <Line type="monotone" dataKey="beauty" stroke="#EC4899" strokeWidth={2} name="Beauty" />
                    <Line type="monotone" dataKey="lifestyle" stroke="#3B82F6" strokeWidth={2} name="Lifestyle" />
                    <Line type="monotone" dataKey="fitness" stroke="#F59E0B" strokeWidth={2} name="Fitness" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Competitor Analysis */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Competitor Analysis</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {competitorData.map((competitor, index) => (
                  <Card key={index} className="rounded-2xl shadow-sm">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-lg">{competitor.name}</CardTitle>
                          <CardDescription>{competitor.category} • {competitor.followers} followers</CardDescription>
                        </div>
                        <Badge variant="outline" className="text-green-600">
                          {competitor.growth}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Engagement</p>
                          <p className="font-semibold">{competitor.engagement}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Avg Revenue</p>
                          <p className="font-semibold">{competitor.avgRevenue}</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">Platforms</p>
                        <div className="flex flex-wrap gap-1">
                          {competitor.platforms.map((platform, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {platform}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Brand Opportunities */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Brand Opportunities</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {brandOpportunities.map((opportunity) => (
                  <Card key={opportunity.id} className="rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg">{opportunity.brandName}</CardTitle>
                          <CardDescription>{opportunity.category}</CardDescription>
                        </div>
                        <div className="text-right">
                          <Badge className={getMatchScoreColor(opportunity.matchScore)}>
                            {opportunity.matchScore}% Match
                          </Badge>
                          <p className="text-sm text-muted-foreground mt-1">
                            Due: {opportunity.deadline}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Budget Range</p>
                        <p className="font-semibold text-green-600">{opportunity.budget}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Why it&apos;s a good match</p>
                        <p className="text-sm">{opportunity.reason}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">Platforms</p>
                        <div className="flex flex-wrap gap-1">
                          {opportunity.platforms.map((platform, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {platform}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex space-x-2 pt-2">
                        <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                          <Target className="w-4 h-4 mr-1" />
                          Apply Now
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1">
                          <Lightbulb className="w-4 h-4 mr-1" />
                          Save
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* AI Insights Card */}
            <Card className="rounded-2xl shadow-sm mt-8 bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-purple-600" />
                  AI Insights & Recommendations
                </CardTitle>
                <CardDescription>
                  Personalized recommendations based on your content performance and market trends
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Content Opportunities</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Sustainable fashion content is trending +45% - perfect for your lifestyle niche</li>
                      <li>• AI beauty tools are gaining traction - consider reviewing beauty tech products</li>
                      <li>• Morning routine content performs well with your audience demographics</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Brand Partnership Tips</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Patagonia has a 92% match score - high alignment with your values</li>
                      <li>• Beauty brands are increasing budgets for Q2 campaigns</li>
                      <li>• Consider reaching out to sustainable fashion brands this month</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </SidebarLayout>
  );
}
