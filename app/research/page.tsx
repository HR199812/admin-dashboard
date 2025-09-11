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
  Zap,
  TrendingUp,
  Users,
  Instagram,
  Youtube,
  MessageSquare
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
    name: "Beth Smith",
    followers: "2.1M",
    engagement: "4.8%",
    avgRevenue: "$25K",
    platforms: ["Instagram", "TikTok", "YouTube"],
    category: "Lifestyle",
    growth: "+15%",
  },
  {
    name: "Birdperson",
    followers: "1.8M",
    engagement: "5.2%",
    avgRevenue: "$22K",
    platforms: ["Instagram", "TikTok"],
    category: "Beauty",
    growth: "+22%",
  },
  {
    name: "Squanchy",
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
      return "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800";
    case "High":
      return "bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-400 border-violet-200 dark:border-violet-800";
    case "Medium":
      return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400 border-amber-200 dark:border-amber-800";
    case "Low":
      return "bg-slate-100 text-slate-800 dark:bg-slate-800/50 dark:text-slate-400 border-slate-200 dark:border-slate-700";
    default:
      return "bg-slate-100 text-slate-800 dark:bg-slate-800/50 dark:text-slate-400 border-slate-200 dark:border-slate-700";
  }
};

const getMatchScoreColor = (score: number) => {
  if (score >= 90) return "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800";
  if (score >= 80) return "bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-400 border-violet-200 dark:border-violet-800";
  if (score >= 70) return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400 border-amber-200 dark:border-amber-800";
  return "bg-slate-100 text-slate-800 dark:bg-slate-800/50 dark:text-slate-400 border-slate-200 dark:border-slate-700";
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Fashion":
      return "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-400 border-pink-200 dark:border-pink-800";
    case "Beauty":
      return "bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-400 border-rose-200 dark:border-rose-800";
    case "Lifestyle":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 dark:border-blue-800";
    case "Food":
      return "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400 border-orange-200 dark:border-orange-800";
    case "Fitness":
      return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 border-green-200 dark:border-green-800";
    case "Tech":
      return "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800";
    default:
      return "bg-slate-100 text-slate-800 dark:bg-slate-800/50 dark:text-slate-400 border-slate-200 dark:border-slate-700";
  }
};

const getPlatformColor = (platform: string) => {
  switch (platform) {
    case "Instagram":
      return "bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 dark:from-purple-900/30 dark:to-pink-900/30 dark:text-purple-400 border-purple-200 dark:border-purple-800";
    case "YouTube":
      return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400 border-red-200 dark:border-red-800";
    case "TikTok":
      return "bg-slate-100 text-slate-800 dark:bg-slate-800/50 dark:text-slate-400 border-slate-200 dark:border-slate-700";
    default:
      return "bg-slate-100 text-slate-800 dark:bg-slate-800/50 dark:text-slate-400 border-slate-200 dark:border-slate-700";
  }
};

export default function ResearchPage() {
  const { isOpen } = useSidebarStore();

  return (
    <SidebarLayout defaultOpen={isOpen}>
      <AppSidebar />
      <main className="flex flex-1 flex-col p-2 transition-all duration-300 ease-in-out bg-surface">
        <div className="h-full rounded-md border-2 border-dashed border-subtle">
          <SidebarTrigger />
          <div className="px-8 py-6">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-primary">Research & Insights</h1>
              <p className="text-secondary">
                Discover trending topics, analyze competitors, and find brand opportunities
              </p>
            </div>

            {/* Trending Topics */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-primary">Trending Topics</h2>
                <Button variant="outline" className="flex items-center border-subtle text-primary">
                  <Search className="w-4 h-4 mr-2" />
                  Search Trends
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {trendingTopics.map((topic) => (
                  <Card key={topic.id} className="rounded-2xl shadow-elevated bg-elevated border-subtle hover-lift">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-semibold text-lg text-primary">{topic.topic}</h3>
                          <p className="text-sm text-secondary">{topic.hashtag}</p>
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
                          <span className="text-sm text-secondary">Posts</span>
                          <span className="font-medium text-primary">{topic.posts}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-secondary">Engagement</span>
                          <Badge className={`${getEngagementColor(topic.engagement)} flex items-center`}>
                            <Users className="w-3 h-3 mr-1" />
                            {topic.engagement}
                          </Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-secondary">Category</span>
                          <Badge variant="outline" className={`${getCategoryColor(topic.category)} border`}>
                            {topic.category}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Trend Analysis Chart */}
            <Card className="rounded-2xl shadow-elevated bg-elevated border-subtle hover-lift mb-8">
              <CardHeader>
                <CardTitle className="text-primary">Category Trend Analysis</CardTitle>
                <CardDescription className="text-secondary">Monthly trend performance across different content categories</CardDescription>
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
              <h2 className="text-2xl font-bold text-primary mb-6">Competitor Analysis</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {competitorData.map((competitor, index) => (
                  <Card key={index} className="rounded-2xl shadow-elevated bg-elevated border-subtle hover-lift">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-lg text-primary">{competitor.name}</CardTitle>
                          <CardDescription className="text-secondary">{competitor.category} • {competitor.followers} followers</CardDescription>
                        </div>
                        <Badge variant="outline" className="text-green-600 border-green-200 dark:border-green-800 flex items-center">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          {competitor.growth}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-secondary">Engagement</p>
                          <p className="font-semibold text-primary">{competitor.engagement}</p>
                        </div>
                        <div>
                          <p className="text-sm text-secondary">Avg Revenue</p>
                          <p className="font-semibold text-primary">{competitor.avgRevenue}</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-secondary mb-2">Platforms</p>
                        <div className="flex flex-wrap gap-1">
                          {competitor.platforms.map((platform, idx) => {
                            const getPlatformIcon = (platform: string) => {
                              switch (platform) {
                                case "Instagram": return Instagram;
                                case "YouTube": return Youtube;
                                case "TikTok": return MessageSquare;
                                default: return MessageSquare;
                              }
                            };
                            const PlatformIcon = getPlatformIcon(platform);
                            return (
                              <Badge key={idx} variant="secondary" className={`text-xs flex items-center ${getPlatformColor(platform)}`}>
                                <PlatformIcon className="w-3 h-3 mr-1" />
                                {platform}
                              </Badge>
                            );
                          })}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Brand Opportunities */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">Brand Opportunities</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {brandOpportunities.map((opportunity) => (
                  <Card key={opportunity.id} className="rounded-2xl shadow-elevated bg-elevated border-subtle hover-lift">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg text-primary">{opportunity.brandName}</CardTitle>
                          <CardDescription className="text-secondary">{opportunity.category}</CardDescription>
                        </div>
                        <div className="text-right">
                          <Badge className={`${getMatchScoreColor(opportunity.matchScore)} flex items-center`}>
                            <Target className="w-3 h-3 mr-1" />
                            {opportunity.matchScore}% Match
                          </Badge>
                          <p className="text-sm text-secondary mt-1">
                            Due: {opportunity.deadline}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <p className="text-sm text-secondary mb-1">Budget Range</p>
                        <p className="font-semibold text-green-600">{opportunity.budget}</p>
                      </div>
                      <div>
                        <p className="text-sm text-secondary mb-1">Why it&apos;s a good match</p>
                        <p className="text-sm text-primary">{opportunity.reason}</p>
                      </div>
                      <div>
                        <p className="text-sm text-secondary mb-2">Platforms</p>
                        <div className="flex flex-wrap gap-1">
                          {opportunity.platforms.map((platform, idx) => {
                            const getPlatformIcon = (platform: string) => {
                              switch (platform) {
                                case "Instagram": return Instagram;
                                case "YouTube": return Youtube;
                                case "TikTok": return MessageSquare;
                                default: return MessageSquare;
                              }
                            };
                            const PlatformIcon = getPlatformIcon(platform);
                            return (
                              <Badge key={idx} variant="outline" className={`text-xs flex items-center ${getPlatformColor(platform)} border`}>
                                <PlatformIcon className="w-3 h-3 mr-1" />
                                {platform}
                              </Badge>
                            );
                          })}
                        </div>
                      </div>
                      <div className="flex space-x-2 pt-2">
                        <Button size="sm" className="flex-1 bg-purple-600 hover:bg-purple-700">
                          <Target className="w-4 h-4 mr-1" />
                          Apply Now
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1 border-subtle">
                          <Lightbulb className="w-4 h-4 mr-1 text-yellow-600" />
                          Save
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* AI Insights Card */}
            <Card className="rounded-2xl shadow-elevated bg-elevated border-subtle hover-lift mt-8 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border-purple-200 dark:border-purple-800">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <Zap className="w-5 h-5 mr-2 text-purple-600" />
                  AI Insights & Recommendations
                </CardTitle>
                <CardDescription className="text-secondary">
                  Personalized recommendations based on your content performance and market trends
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Content Opportunities</h4>
                    <ul className="space-y-2 text-sm text-secondary">
                      <li>• Sustainable fashion content is trending +45% - perfect for your lifestyle niche</li>
                      <li>• AI beauty tools are gaining traction - consider reviewing beauty tech products</li>
                      <li>• Morning routine content performs well with your audience demographics</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Brand Partnership Tips</h4>
                    <ul className="space-y-2 text-sm text-secondary">
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
