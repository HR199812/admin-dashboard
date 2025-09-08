"use client";

import Link from "next/link";
import { AppSidebar } from "@/components/app-sidebar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SidebarLayout, SidebarTrigger } from "@/components/ui/sidebar";
import { 
  User, 
  Bell, 
  Palette, 
  CreditCard, 
  Users, 
  Shield, 
  Download,
  Upload,
  Camera,
  Moon,
  Sun,
  Globe,
  Crown,
  Zap,
  Check,
  ArrowRight,
  Calendar,
  DollarSign,
  AlertCircle
} from "lucide-react";
import { useSidebarStore } from "@/lib/store";
import { useTheme } from "next-themes";
import { useState } from "react";
import { LanguageSelector } from "@/components/language-selector";

export default function SettingsPage() {
  const { isOpen } = useSidebarStore();
  const { theme, setTheme } = useTheme();
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
    marketing: false,
  });

  const handleNotificationChange = (key: string, value: boolean) => {
    setNotifications(prev => ({ ...prev, [key]: value }));
  };

  return (
    <SidebarLayout defaultOpen={isOpen}>
      <AppSidebar />
      <main className="flex flex-1 flex-col p-2 transition-all duration-300 ease-in-out">
        <div className="h-full rounded-md border-2 border-dashed">
          <SidebarTrigger />
          <div className="px-8 py-6">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
              <p className="text-muted-foreground">
                Manage your profile, preferences, and account settings
              </p>
            </div>

            <Tabs defaultValue="general" className="space-y-6">
              <TabsList className="grid w-full grid-cols-7">
                <TabsTrigger value="general" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">General</TabsTrigger>
                <TabsTrigger value="appearance" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">Appearance</TabsTrigger>
                <TabsTrigger value="notifications" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">Notifications</TabsTrigger>
                <TabsTrigger value="billing" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">Billing</TabsTrigger>
                <TabsTrigger value="subscription" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">Subscription</TabsTrigger>
                <TabsTrigger value="team" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">Team</TabsTrigger>
                <TabsTrigger value="language" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">Language</TabsTrigger>
              </TabsList>

              {/* General Settings */}
              <TabsContent value="general" className="space-y-6">
                <Card className="rounded-2xl shadow-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <User className="w-5 h-5 mr-2 text-purple-600" />
                      Profile Information
                    </CardTitle>
                    <CardDescription>
                      Update your personal information and profile details
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center space-x-6">
                      <Avatar className="w-20 h-20">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>SC</AvatarFallback>
                      </Avatar>
                      <div className="space-y-2">
                        <Button variant="outline" size="sm">
                          <Camera className="w-4 h-4 mr-2 text-gray-600" />
                          Change Photo
                        </Button>
                        <p className="text-sm text-muted-foreground">
                          JPG, GIF or PNG. 1MB max.
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" defaultValue="Rick" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" defaultValue="Sanchez" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" defaultValue="rick.sanchez@influential.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="bio">Bio</Label>
                        <Input 
                          id="bio" 
                          defaultValue="Lifestyle & beauty content creator. Sharing authentic moments and inspiring others to live their best life." 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <Input id="location" defaultValue="Los Angeles, CA" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="website">Website</Label>
                        <Input id="website" defaultValue="https://ricksanchez.com" />
                      </div>
                    </div>

                    <div className="flex justify-end space-x-2">
                      <Button variant="outline">Cancel</Button>
                      <Button className="bg-purple-600 hover:bg-purple-700">Save Changes</Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="rounded-2xl shadow-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Shield className="w-5 h-5 mr-2 text-red-600" />
                      Security
                    </CardTitle>
                    <CardDescription>
                      Manage your password and security settings
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="currentPassword">Current Password</Label>
                      <Input id="currentPassword" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="newPassword">New Password</Label>
                      <Input id="newPassword" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm New Password</Label>
                      <Input id="confirmPassword" type="password" />
                    </div>
                    <Button className="bg-purple-600 hover:bg-purple-700">Update Password</Button>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Appearance Settings */}
              <TabsContent value="appearance" className="space-y-6">
                <Card className="rounded-2xl shadow-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Palette className="w-5 h-5 mr-2 text-purple-600" />
                      Theme & Appearance
                    </CardTitle>
                    <CardDescription>
                      Customize the look and feel of your dashboard
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label>Theme</Label>
                        <p className="text-sm text-muted-foreground">
                          Choose your preferred theme
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant={theme === "light" ? "default" : "outline"}
                          size="sm"
                          onClick={() => setTheme("light")}
                        >
                          <Sun className="w-4 h-4 mr-1 text-yellow-500" />
                          Light
                        </Button>
                        <Button
                          variant={theme === "dark" ? "default" : "outline"}
                          size="sm"
                          onClick={() => setTheme("dark")}
                        >
                          <Moon className="w-4 h-4 mr-1 text-purple-400" />
                          Dark
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label>Language</Label>
                        <p className="text-sm text-muted-foreground">
                          Select your preferred language
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Globe className="w-4 h-4" />
                        <span className="text-sm">English (US)</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label>Sidebar</Label>
                        <p className="text-sm text-muted-foreground">
                          Keep sidebar expanded by default
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Notifications Settings */}
              <TabsContent value="notifications" className="space-y-6">
                <Card className="rounded-2xl shadow-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Bell className="w-5 h-5 mr-2 text-orange-600" />
                      Notification Preferences
                    </CardTitle>
                    <CardDescription>
                      Choose how you want to be notified about updates
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <Label>Email Notifications</Label>
                          <p className="text-sm text-muted-foreground">
                            Receive notifications via email
                          </p>
                        </div>
                        <Switch 
                          checked={notifications.email}
                          onCheckedChange={(value) => handleNotificationChange("email", value)}
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <Label>Push Notifications</Label>
                          <p className="text-sm text-muted-foreground">
                            Receive push notifications in your browser
                          </p>
                        </div>
                        <Switch 
                          checked={notifications.push}
                          onCheckedChange={(value) => handleNotificationChange("push", value)}
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <Label>SMS Notifications</Label>
                          <p className="text-sm text-muted-foreground">
                            Receive notifications via SMS
                          </p>
                        </div>
                        <Switch 
                          checked={notifications.sms}
                          onCheckedChange={(value) => handleNotificationChange("sms", value)}
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <Label>Marketing Emails</Label>
                          <p className="text-sm text-muted-foreground">
                            Receive marketing and promotional emails
                          </p>
                        </div>
                        <Switch 
                          checked={notifications.marketing}
                          onCheckedChange={(value) => handleNotificationChange("marketing", value)}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Billing Settings */}
              <TabsContent value="billing" className="space-y-6">
                <Card className="rounded-2xl shadow-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CreditCard className="w-5 h-5 mr-2 text-green-600" />
                      Billing & Subscription
                    </CardTitle>
                    <CardDescription>
                      Manage your subscription and payment methods
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h4 className="font-semibold">Pro Plan</h4>
                        <p className="text-sm text-muted-foreground">
                          $29/month • Next billing: Feb 15, 2024
                        </p>
                      </div>
                      <Button className="bg-purple-600 hover:bg-purple-700 text-white" variant="outline">Change Plan</Button>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold">Payment Methods</h4>
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <CreditCard className="w-5 h-5" />
                          <div>
                            <p className="font-medium">•••• •••• •••• 4242</p>
                            <p className="text-sm text-muted-foreground">Expires 12/25</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">Edit</Button>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button variant="outline">
                        <Download className="w-4 h-4 mr-2" />
                        Download Invoice
                      </Button>
                      <Button variant="outline">
                        <Upload className="w-4 h-4 mr-2" />
                        Billing History
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Subscription Settings */}
              <TabsContent value="subscription" className="space-y-6">
                <Card className="rounded-2xl shadow-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Crown className="w-5 h-5 mr-2 text-yellow-600" />
                      Current Plan
                    </CardTitle>
                    <CardDescription>
                      Manage your subscription plan and features
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center justify-between p-6 border rounded-lg bg-gradient-to-r from-primary/5 to-primary/10">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                          <Zap className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg">Premium Plan</h4>
                          <p className="text-sm text-muted-foreground">
                            $29/month • Billed annually
                          </p>
                          <Badge className="mt-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0">Active</Badge>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">Next billing</p>
                        <p className="font-semibold">Feb 15, 2024</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 border rounded-lg">
                        <div className="flex items-center space-x-2 mb-2">
                          <Check className="h-4 w-4 text-green-500" />
                          <span className="font-medium">Social Accounts</span>
                        </div>
                        <p className="text-sm text-muted-foreground">10 accounts</p>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <div className="flex items-center space-x-2 mb-2">
                          <Check className="h-4 w-4 text-green-500" />
                          <span className="font-medium">AI Chat</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Unlimited queries</p>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <div className="flex items-center space-x-2 mb-2">
                          <Check className="h-4 w-4 text-green-500" />
                          <span className="font-medium">Campaigns</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Unlimited</p>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Link href="/pricing">
                        <Button variant="outline">
                          <ArrowRight className="w-4 h-4 mr-2" />
                          View All Plans
                        </Button>
                      </Link>
                      <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                        <Calendar className="w-4 h-4 mr-2" />
                        Change Plan
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="rounded-2xl shadow-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <DollarSign className="w-5 h-5 mr-2" />
                      Usage & Limits
                    </CardTitle>
                    <CardDescription>
                      Track your current usage against plan limits
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Social Media Accounts</p>
                          <p className="text-sm text-muted-foreground">7 of 10 used</p>
                        </div>
                        <div className="w-24 bg-muted rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: '70%' }}></div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">AI Chat Queries</p>
                          <p className="text-sm text-muted-foreground">1,247 this month</p>
                        </div>
                        <div className="w-24 bg-muted rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Active Campaigns</p>
                          <p className="text-sm text-muted-foreground">3 of unlimited</p>
                        </div>
                        <div className="w-24 bg-muted rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{ width: '15%' }}></div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Storage Used</p>
                          <p className="text-sm text-muted-foreground">2.3 GB of 10 GB</p>
                        </div>
                        <div className="w-24 bg-muted rounded-full h-2">
                          <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '23%' }}></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="rounded-2xl shadow-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <AlertCircle className="w-5 h-5 mr-2" />
                      Plan Recommendations
                    </CardTitle>
                    <CardDescription>
                      Based on your usage, we recommend these optimizations
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 border border-yellow-200 bg-yellow-50 rounded-lg">
                      <div className="flex items-start space-x-3">
                        <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-yellow-800">Consider Upgrading to Pro</h4>
                          <p className="text-sm text-yellow-700 mt-1">
                            You&apos;re using 70% of your social account limit. Pro plan offers unlimited accounts and advanced features.
                          </p>
                          <Button size="sm" className="mt-2">
                            Upgrade to Pro
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 border border-green-200 bg-green-50 rounded-lg">
                      <div className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-green-600 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-green-800">Great Usage Pattern</h4>
                          <p className="text-sm text-green-700 mt-1">
                            Your AI chat usage is well within limits. You&apos;re getting great value from your Premium plan.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Team Settings */}
              <TabsContent value="team" className="space-y-6">
                <Card className="rounded-2xl shadow-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="w-5 h-5 mr-2 text-cyan-600" />
                      Team Management
                    </CardTitle>
                    <CardDescription>
                      Manage team members and their permissions
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-semibold">Team Members</h4>
                        <p className="text-sm text-muted-foreground">
                          You have 2 team members
                        </p>
                      </div>
                      <Button className="bg-purple-600 hover:bg-purple-700">
                        <Users className="w-4 h-4 mr-2 text-white" />
                        Invite Member
                      </Button>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>MS</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">Morty Smith</p>
                            <p className="text-sm text-muted-foreground">morty.smith@influential.com</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0">Owner</Badge>
                          <Button className="bg-purple-600 hover:bg-purple-700 text-white" size="sm">Edit</Button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Avatar>
                            <AvatarFallback>SS</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">Summer Smith</p>
                            <p className="text-sm text-muted-foreground">summer.smith@influential.com</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0">Editor</Badge>
                          <Button className="bg-purple-600 hover:bg-purple-700 text-white" size="sm">Edit</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Language Settings */}
              <TabsContent value="language" className="space-y-6">
                <Card className="rounded-2xl shadow-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Globe className="w-5 h-5 mr-2 text-indigo-600" />
                      Language & Region
                    </CardTitle>
                    <CardDescription>
                      Choose your preferred language and region settings
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <Label className="text-sm font-medium">
                          Current Language
                        </Label>
                        <div className="mt-2">
                          <LanguageSelector />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label className="text-sm font-medium">
                            Region
                          </Label>
                          <Input 
                            placeholder="United States" 
                            className="mt-2"
                            defaultValue="United States"
                          />
                        </div>
                        
                        <div>
                          <Label className="text-sm font-medium">
                            Timezone
                          </Label>
                          <Input 
                            placeholder="UTC-8 (Pacific Time)" 
                            className="mt-2"
                            defaultValue="UTC-8 (Pacific Time)"
                          />
                        </div>
                        
                        <div>
                          <Label className="text-sm font-medium">
                            Date Format
                          </Label>
                          <Input 
                            placeholder="MM/DD/YYYY" 
                            className="mt-2"
                            defaultValue="MM/DD/YYYY"
                          />
                        </div>
                        
                        <div>
                          <Label className="text-sm font-medium">
                            Time Format
                          </Label>
                          <Input 
                            placeholder="12-hour" 
                            className="mt-2"
                            defaultValue="12-hour"
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </SidebarLayout>
  );
}
