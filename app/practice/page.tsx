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
  Lightbulb, 
  Calendar, 
  Bookmark, 
  Plus,
  Clock,
  TrendingUp,
  Sparkles
} from "lucide-react";
import { useSidebarStore } from "@/lib/store";
import { useState } from "react";

// Mock data for content ideas
const contentIdeas = [
  {
    id: 1,
    title: "Morning Routine Transformation",
    description: "Show your complete morning routine with before/after shots",
    platform: "Instagram Reels",
    estimatedEngagement: "High",
    hashtags: ["#MorningRoutine", "#SelfCare", "#Productivity", "#Lifestyle"],
    caption: "Transform your mornings with these simple steps! 🌅✨ #MorningRoutine #SelfCare #Productivity",
    thumbnail: "🌅",
    category: "Lifestyle",
    difficulty: "Easy",
    timeToCreate: "30 min",
  },
  {
    id: 2,
    title: "5-Minute Makeup Challenge",
    description: "Complete makeup look in under 5 minutes",
    platform: "TikTok",
    estimatedEngagement: "Very High",
    hashtags: ["#5MinuteMakeup", "#MakeupChallenge", "#BeautyHacks", "#QuickMakeup"],
    caption: "Can I do a full face in 5 minutes? Challenge accepted! 💄⏰ #5MinuteMakeup #BeautyHacks",
    thumbnail: "💄",
    category: "Beauty",
    difficulty: "Medium",
    timeToCreate: "45 min",
  },
  {
    id: 3,
    title: "Behind the Scenes: Photo Shoot",
    description: "Show the process of creating content",
    platform: "YouTube Shorts",
    estimatedEngagement: "Medium",
    hashtags: ["#BehindTheScenes", "#ContentCreation", "#Photography", "#BTS"],
    caption: "Ever wondered how we create content? Here's the real process! 📸 #BehindTheScenes #ContentCreation",
    thumbnail: "📸",
    category: "Behind the Scenes",
    difficulty: "Easy",
    timeToCreate: "20 min",
  },
  {
    id: 4,
    title: "Product Review: New Skincare",
    description: "Honest review of trending skincare product",
    platform: "Instagram",
    estimatedEngagement: "High",
    hashtags: ["#SkincareReview", "#BeautyReview", "#SkincareRoutine", "#ProductReview"],
    caption: "Testing this viral skincare product - here's my honest review! 🧴✨ #SkincareReview #BeautyReview",
    thumbnail: "🧴",
    category: "Beauty",
    difficulty: "Medium",
    timeToCreate: "60 min",
  },
  {
    id: 5,
    title: "Day in My Life: Content Creator",
    description: "Full day documenting your life as a creator",
    platform: "YouTube",
    estimatedEngagement: "Medium",
    hashtags: ["#DayInMyLife", "#ContentCreator", "#Lifestyle", "#Vlog"],
    caption: "A realistic day in the life of a content creator - it's not all glamorous! 📱💻 #DayInMyLife #ContentCreator",
    thumbnail: "📱",
    category: "Lifestyle",
    difficulty: "Hard",
    timeToCreate: "120 min",
  },
  {
    id: 6,
    title: "Fashion Haul: Summer Essentials",
    description: "Try-on haul of summer fashion pieces",
    platform: "TikTok",
    estimatedEngagement: "Very High",
    hashtags: ["#FashionHaul", "#SummerFashion", "#TryOnHaul", "#Fashion"],
    caption: "Summer essentials haul - which look is your favorite? ☀️👗 #FashionHaul #SummerFashion",
    thumbnail: "👗",
    category: "Fashion",
    difficulty: "Medium",
    timeToCreate: "90 min",
  },
];

const getEngagementColor = (level: string) => {
  switch (level) {
    case "Very High":
      return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
    case "High":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400";
    case "Medium":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400";
    case "Low":
      return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
  }
};

const getDifficultyColor = (level: string) => {
  switch (level) {
    case "Easy":
      return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
    case "Medium":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400";
    case "Hard":
      return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
  }
};

export default function PracticePage() {
  const { isOpen } = useSidebarStore();
  const [savedIdeas, setSavedIdeas] = useState<number[]>([]);

  const handleSaveIdea = (ideaId: number) => {
    setSavedIdeas(prev => 
      prev.includes(ideaId) 
        ? prev.filter(id => id !== ideaId)
        : [...prev, ideaId]
    );
  };

  const handleScheduleIdea = (ideaId: number) => {
    // In a real app, this would open a calendar modal
    alert(`Scheduling idea ${ideaId} to your content calendar!`);
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
                <h1 className="text-3xl font-bold text-primary">Content Ideas</h1>
                <p className="text-secondary">
                  AI-powered content suggestions and calendar management
                </p>
              </div>
              <Button className="bg-purple-600 hover:bg-purple-700">
                <Plus className="w-4 h-4 mr-2" />
                Generate New Ideas
              </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <Card className="rounded-2xl shadow-elevated bg-elevated border-subtle hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-secondary">
                        Ideas Generated
                      </p>
                      <p className="text-2xl font-bold text-primary">24</p>
                    </div>
                    <Lightbulb className="h-8 w-8 text-yellow-600" />
                  </div>
                </CardContent>
              </Card>
              <Card className="rounded-2xl shadow-elevated bg-elevated border-subtle hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-secondary">
                        Saved Ideas
                      </p>
                      <p className="text-2xl font-bold text-primary">{savedIdeas.length}</p>
                    </div>
                    <Bookmark className="h-8 w-8 text-purple-600" />
                  </div>
                </CardContent>
              </Card>
              <Card className="rounded-2xl shadow-elevated bg-elevated border-subtle hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-secondary">
                        Scheduled Posts
                      </p>
                      <p className="text-2xl font-bold text-primary">12</p>
                    </div>
                    <Calendar className="h-8 w-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>
              <Card className="rounded-2xl shadow-elevated bg-elevated border-subtle hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-secondary">
                        Avg. Engagement
                      </p>
                      <p className="text-2xl font-bold text-primary">4.2%</p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-purple-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Content Ideas Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contentIdeas.map((idea) => (
                <Card key={idea.id} className="rounded-2xl shadow-elevated bg-elevated border-subtle hover-lift">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl">{idea.thumbnail}</span>
                        <div>
                          <CardTitle className="text-lg text-primary">{idea.title}</CardTitle>
                          <CardDescription className="text-sm text-secondary">
                            {idea.platform} • {idea.category}
                          </CardDescription>
                        </div>
                      </div>
                      <Badge className={getEngagementColor(idea.estimatedEngagement)}>
                        {idea.estimatedEngagement}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-secondary">
                      {idea.description}
                    </p>
                    
                    {/* Hashtags */}
                    <div>
                      <p className="text-xs font-medium text-secondary mb-2">Suggested Hashtags:</p>
                      <div className="flex flex-wrap gap-1">
                        {idea.hashtags.slice(0, 3).map((tag, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {idea.hashtags.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{idea.hashtags.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Caption Preview */}
                    <div>
                      <p className="text-xs font-medium text-secondary mb-2">Caption Preview:</p>
                      <div className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 p-3 rounded-lg">
                        <p className="text-xs text-primary leading-relaxed">
                          {idea.caption}
                        </p>
                      </div>
                    </div>

                    {/* Metadata */}
                    <div className="flex items-center justify-between text-xs text-secondary">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{idea.timeToCreate}</span>
                        </div>
                        <Badge className={getDifficultyColor(idea.difficulty)} variant="outline">
                          {idea.difficulty}
                        </Badge>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-2 pt-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        onClick={() => handleSaveIdea(idea.id)}
                      >
                        <Bookmark className={`w-4 h-4 mr-1 ${savedIdeas.includes(idea.id) ? 'fill-current' : ''}`} />
                        {savedIdeas.includes(idea.id) ? 'Saved' : 'Save'}
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1 bg-purple-600 hover:bg-purple-700"
                        onClick={() => handleScheduleIdea(idea.id)}
                      >
                        <Calendar className="w-4 h-4 mr-1" />
                        Schedule
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* AI Content Calendar Generator */}
            <Card className="rounded-2xl shadow-elevated bg-elevated border-subtle hover-lift mt-8 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-purple-200 dark:border-purple-800">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <Sparkles className="w-5 h-5 mr-2 text-purple-600" />
                  AI Content Calendar Generator
                </CardTitle>
                <CardDescription className="text-secondary">
                  Generate a complete content calendar for the next month
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm font-medium text-secondary">Platform</label>
                    <select className="w-full mt-1 p-2 border border-subtle rounded-lg bg-surface text-primary">
                      <option>All Platforms</option>
                      <option>Instagram</option>
                      <option>TikTok</option>
                      <option>YouTube</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-secondary">Content Focus</label>
                    <select className="w-full mt-1 p-2 border border-subtle rounded-lg bg-surface text-primary">
                      <option>Mixed Content</option>
                      <option>Beauty & Fashion</option>
                      <option>Lifestyle</option>
                      <option>Educational</option>
                    </select>
                  </div>
                  <div className="flex items-end">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                      <Sparkles className="w-4 h-4 mr-2" />
                      Generate Calendar
                    </Button>
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
