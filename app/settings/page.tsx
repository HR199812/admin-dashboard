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
import { useSidebarStore, useSettingsStore } from "@/lib/store";
import { useTheme } from "next-themes";
import { LanguageSelector } from "@/components/language-selector";

export default function SettingsPage() {
  const { isOpen } = useSidebarStore();
  const { theme, setTheme } = useTheme();
  
  // Zustand store
  const {
    profile,
    notifications,
    subscription,
    teamMembers,
    language,
    updateProfile,
    updateNotifications,
    updateSubscription,
    addTeamMember,
    updateTeamMember,
    removeTeamMember,
    setLanguage,
    resetProfile,
    resetNotifications,
  } = useSettingsStore();

  return (
    <SidebarLayout defaultOpen={isOpen}>
      <AppSidebar />
      <main className="flex flex-1 flex-col p-2 transition-all duration-300 ease-in-out bg-surface">
        <div className="h-full rounded-md border-2 border-dashed border-subtle bg-surface">
          <SidebarTrigger />
          <div className="px-8 py-6">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-primary">Settings</h1>
              <p className="text-secondary">
                Manage your profile, preferences, and account settings
              </p>
            </div>

            <Tabs defaultValue="general" className="space-y-6">
              <TabsList className="grid w-full grid-cols-7 bg-elevated border-subtle">
                <TabsTrigger value="general" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white text-secondary hover:text-primary">General</TabsTrigger>
                <TabsTrigger value="appearance" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white text-secondary hover:text-primary">Appearance</TabsTrigger>
                <TabsTrigger value="notifications" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white text-secondary hover:text-primary">Notifications</TabsTrigger>
                <TabsTrigger value="billing" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white text-secondary hover:text-primary">Billing</TabsTrigger>
                <TabsTrigger value="subscription" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white text-secondary hover:text-primary">Subscription</TabsTrigger>
                <TabsTrigger value="team" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white text-secondary hover:text-primary">Team</TabsTrigger>
                <TabsTrigger value="language" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white text-secondary hover:text-primary">Language</TabsTrigger>
              </TabsList>

              {/* General Settings */}
              <TabsContent value="general" className="space-y-6">
                <Card className="rounded-2xl shadow-elevated bg-elevated border-subtle hover-lift">
                  <CardHeader>
                    <CardTitle className="flex items-center text-primary">
                      <User className="w-5 h-5 mr-2 text-purple-600" />
                      Profile Information
                    </CardTitle>
                    <CardDescription className="text-secondary">
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
                        <Input 
                          id="firstName" 
                          value={profile.firstName}
                          onChange={(e) => updateProfile({ firstName: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input 
                          id="lastName" 
                          value={profile.lastName}
                          onChange={(e) => updateProfile({ lastName: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          value={profile.email}
                          onChange={(e) => updateProfile({ email: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input 
                          id="phone" 
                          type="tel" 
                          value={profile.phone}
                          onChange={(e) => updateProfile({ phone: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="bio">Bio</Label>
                        <Input 
                          id="bio" 
                          value={profile.bio}
                          onChange={(e) => updateProfile({ bio: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <Input 
                          id="location" 
                          value={profile.location}
                          onChange={(e) => updateProfile({ location: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="website">Website</Label>
                        <Input 
                          id="website" 
                          value={profile.website}
                          onChange={(e) => updateProfile({ website: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="flex justify-end space-x-2">
                      <Button variant="outline">Cancel</Button>
                      <Button className="bg-purple-600 hover:bg-purple-700">Save Changes</Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="rounded-2xl shadow-elevated bg-elevated border-subtle hover-lift">
                  <CardHeader>
                    <CardTitle className="flex items-center text-primary">
                      <Shield className="w-5 h-5 mr-2 text-red-600" />
                      Security
                    </CardTitle>
                    <CardDescription className="text-secondary">
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
                <Card className="rounded-2xl shadow-elevated bg-elevated border-subtle hover-lift">
                  <CardHeader>
                    <CardTitle className="flex items-center text-primary">
                      <Palette className="w-5 h-5 mr-2 text-purple-600" />
                      Theme & Appearance
                    </CardTitle>
                    <CardDescription className="text-secondary">
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
                <Card className="rounded-2xl shadow-elevated bg-elevated border-subtle hover-lift">
                  <CardHeader>
                    <CardTitle className="flex items-center text-primary">
                      <Bell className="w-5 h-5 mr-2 text-orange-600" />
                      Notification Preferences
                    </CardTitle>
                    <CardDescription className="text-secondary">
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
                          checked={notifications.emailNotifications}
                          onCheckedChange={(value) => updateNotifications({ emailNotifications: value })}
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
                          checked={notifications.pushNotifications}
                          onCheckedChange={(value) => updateNotifications({ pushNotifications: value })}
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
                          checked={notifications.smsNotifications}
                          onCheckedChange={(value) => updateNotifications({ smsNotifications: value })}
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
                          checked={notifications.marketingEmails}
                          onCheckedChange={(value) => updateNotifications({ marketingEmails: value })}
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <Label>Security Alerts</Label>
                          <p className="text-sm text-muted-foreground">
                            Get notified about security-related activities
                          </p>
                        </div>
                        <Switch 
                          checked={notifications.securityAlerts}
                          onCheckedChange={(value) => updateNotifications({ securityAlerts: value })}
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <Label>Weekly Reports</Label>
                          <p className="text-sm text-muted-foreground">
                            Receive weekly performance reports
                          </p>
                        </div>
                        <Switch 
                          checked={notifications.weeklyReports}
                          onCheckedChange={(value) => updateNotifications({ weeklyReports: value })}
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <Label>Campaign Updates</Label>
                          <p className="text-sm text-muted-foreground">
                            Get notified about campaign status changes
                          </p>
                        </div>
                        <Switch 
                          checked={notifications.campaignUpdates}
                          onCheckedChange={(value) => updateNotifications({ campaignUpdates: value })}
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <Label>Team Activity</Label>
                          <p className="text-sm text-muted-foreground">
                            Get notified about team member activities
                          </p>
                        </div>
                        <Switch 
                          checked={notifications.teamActivity}
                          onCheckedChange={(value) => updateNotifications({ teamActivity: value })}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Billing Settings */}
              <TabsContent value="billing" className="space-y-6">
                <Card className="rounded-2xl shadow-elevated bg-elevated border-subtle hover-lift">
                  <CardHeader>
                    <CardTitle className="flex items-center text-primary">
                      <CreditCard className="w-5 h-5 mr-2 text-green-600" />
                      Billing & Subscription
                    </CardTitle>
                    <CardDescription className="text-secondary">
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
                <Card className="rounded-2xl shadow-elevated bg-elevated border-subtle hover-lift">
                  <CardHeader>
                    <CardTitle className="flex items-center text-primary">
                      <Crown className="w-5 h-5 mr-2 text-yellow-600" />
                      Current Plan
                    </CardTitle>
                    <CardDescription className="text-secondary">
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
                          <h4 className="font-semibold text-lg capitalize">{subscription.plan} Plan</h4>
                          <p className="text-sm text-muted-foreground">
                            {subscription.plan === 'free' ? 'Free' : subscription.plan === 'premium' ? '$29/month • Billed annually' : '$99/month • Billed annually'}
                          </p>
                          <Badge className={`mt-1 ${
                            subscription.status === 'active' 
                              ? 'bg-gradient-to-r from-green-500 to-emerald-500' 
                              : subscription.status === 'cancelled'
                              ? 'bg-gradient-to-r from-red-500 to-rose-500'
                              : 'bg-gradient-to-r from-yellow-500 to-orange-500'
                          } text-white border-0`}>
                            {subscription.status.charAt(0).toUpperCase() + subscription.status.slice(1)}
                          </Badge>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">Next billing</p>
                        <p className="font-semibold">{subscription.nextBillingDate}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 border rounded-lg">
                        <div className="flex items-center space-x-2 mb-2">
                          <Check className="h-4 w-4 text-green-500" />
                          <span className="font-medium">Social Accounts</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{subscription.limits.socialAccounts} accounts</p>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <div className="flex items-center space-x-2 mb-2">
                          <Check className="h-4 w-4 text-green-500" />
                          <span className="font-medium">AI Chat</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {subscription.limits.aiChatQueries === 999999 ? 'Unlimited queries' : `${subscription.limits.aiChatQueries} queries`}
                        </p>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <div className="flex items-center space-x-2 mb-2">
                          <Check className="h-4 w-4 text-green-500" />
                          <span className="font-medium">Campaigns</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {subscription.limits.campaigns === 999999 ? 'Unlimited' : `${subscription.limits.campaigns} campaigns`}
                        </p>
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

                <Card className="rounded-2xl shadow-elevated bg-elevated border-subtle hover-lift">
                  <CardHeader>
                    <CardTitle className="flex items-center text-primary">
                      <DollarSign className="w-5 h-5 mr-2" />
                      Usage & Limits
                    </CardTitle>
                    <CardDescription className="text-secondary">
                      Track your current usage against plan limits
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Social Media Accounts</p>
                          <p className="text-sm text-muted-foreground">{subscription.usage.socialAccounts} of {subscription.limits.socialAccounts} used</p>
                        </div>
                        <div className="w-24 bg-muted rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: `${(subscription.usage.socialAccounts / subscription.limits.socialAccounts) * 100}%` }}></div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">AI Chat Queries</p>
                          <p className="text-sm text-muted-foreground">{subscription.usage.aiChatQueries.toLocaleString()} this month</p>
                        </div>
                        <div className="w-24 bg-muted rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: `${subscription.limits.aiChatQueries === 999999 ? 15 : (subscription.usage.aiChatQueries / subscription.limits.aiChatQueries) * 100}%` }}></div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Active Campaigns</p>
                          <p className="text-sm text-muted-foreground">{subscription.usage.campaigns} of {subscription.limits.campaigns === 999999 ? 'unlimited' : subscription.limits.campaigns}</p>
                        </div>
                        <div className="w-24 bg-muted rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${subscription.limits.campaigns === 999999 ? 15 : (subscription.usage.campaigns / subscription.limits.campaigns) * 100}%` }}></div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Storage Used</p>
                          <p className="text-sm text-muted-foreground">{subscription.usage.storage} GB of {subscription.limits.storage} GB</p>
                        </div>
                        <div className="w-24 bg-muted rounded-full h-2">
                          <div className="bg-yellow-500 h-2 rounded-full" style={{ width: `${(subscription.usage.storage / subscription.limits.storage) * 100}%` }}></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="rounded-2xl shadow-elevated bg-elevated border-subtle hover-lift">
                  <CardHeader>
                    <CardTitle className="flex items-center text-primary">
                      <AlertCircle className="w-5 h-5 mr-2" />
                      Plan Recommendations
                    </CardTitle>
                    <CardDescription className="text-secondary">
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
                <Card className="rounded-2xl shadow-elevated bg-elevated border-subtle hover-lift">
                  <CardHeader>
                    <CardTitle className="flex items-center text-primary">
                      <Users className="w-5 h-5 mr-2 text-cyan-600" />
                      Team Management
                    </CardTitle>
                    <CardDescription className="text-secondary">
                      Manage team members and their permissions
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-semibold">Team Members</h4>
                        <p className="text-sm text-muted-foreground">
                          You have {teamMembers.length} team members
                        </p>
                      </div>
                      <Button 
                        className="bg-purple-600 hover:bg-purple-700"
                        onClick={() => addTeamMember({
                          name: 'Jerry Smith',
                          email: 'jerry.smith@influential.com',
                          role: 'viewer',
                          avatar: 'JS',
                          status: 'active'
                        })}
                      >
                        <Users className="w-4 h-4 mr-2 text-white" />
                        Invite Member
                      </Button>
                    </div>

                    <div className="space-y-4">
                      {teamMembers.map((member) => (
                        <div key={member.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center space-x-3">
                            <Avatar>
                              <AvatarImage src="https://github.com/shadcn.png" />
                              <AvatarFallback>{member.avatar}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{member.name}</p>
                              <p className="text-sm text-muted-foreground">{member.email}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge className={`${
                              member.role === 'owner' 
                                ? 'bg-gradient-to-r from-amber-500 to-orange-500' 
                                : member.role === 'editor'
                                ? 'bg-gradient-to-r from-blue-500 to-cyan-500'
                                : 'bg-gradient-to-r from-gray-500 to-slate-500'
                            } text-white border-0`}>
                              {member.role.charAt(0).toUpperCase() + member.role.slice(1)}
                            </Badge>
                            <Button 
                              className="bg-purple-600 hover:bg-purple-700 text-white" 
                              size="sm"
                              onClick={() => updateTeamMember(member.id, { 
                                role: member.role === 'owner' ? 'editor' : member.role === 'editor' ? 'viewer' : 'owner' 
                              })}
                            >
                              Edit
                            </Button>
                            {member.role !== 'owner' && (
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => removeTeamMember(member.id)}
                              >
                                Remove
                              </Button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Language Settings */}
              <TabsContent value="language" className="space-y-6">
                <Card className="rounded-2xl shadow-elevated bg-elevated border-subtle hover-lift">
                  <CardHeader>
                    <CardTitle className="flex items-center text-primary">
                      <Globe className="w-5 h-5 mr-2 text-indigo-600" />
                      Language & Region
                    </CardTitle>
                    <CardDescription className="text-secondary">
                      Choose your preferred language and region settings
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <Label className="text-sm font-medium">
                          Current Language: {language.toUpperCase()}
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

            {/* Demo Section - Showcase Store Functionality */}
            <Card className="rounded-2xl shadow-sm mt-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-purple-600" />
                  Demo Controls - Showcase Store Functionality
                </CardTitle>
                <CardDescription className="text-secondary">
                  Interactive controls to demonstrate the Zustand store in action
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Change Plan</Label>
                    <div className="flex space-x-2">
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => updateSubscription({ plan: 'free' })}
                      >
                        Free
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => updateSubscription({ plan: 'premium' })}
                      >
                        Premium
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => updateSubscription({ plan: 'pro' })}
                      >
                        Pro
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Update Usage</Label>
                    <div className="flex space-x-2">
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => updateSubscription({ 
                          usage: { 
                            ...subscription.usage, 
                            socialAccounts: Math.min(subscription.usage.socialAccounts + 1, subscription.limits.socialAccounts)
                          } 
                        })}
                      >
                        +1 Account
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => updateSubscription({ 
                          usage: { 
                            ...subscription.usage, 
                            aiChatQueries: subscription.usage.aiChatQueries + 100
                          } 
                        })}
                      >
                        +100 Queries
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Reset Settings</Label>
                    <div className="flex space-x-2">
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={resetProfile}
                      >
                        Reset Profile
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={resetNotifications}
                      >
                        Reset Notifications
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Change Language</Label>
                    <div className="flex space-x-2">
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => setLanguage('en')}
                      >
                        EN
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => setLanguage('es')}
                      >
                        ES
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => setLanguage('fr')}
                      >
                        FR
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-medium mb-2">Current Store State:</h4>
                  <div className="text-sm space-y-1">
                    <p><strong>Plan:</strong> {subscription.plan} ({subscription.status})</p>
                    <p><strong>Usage:</strong> {subscription.usage.socialAccounts}/{subscription.limits.socialAccounts} accounts, {subscription.usage.aiChatQueries} queries</p>
                    <p><strong>Team:</strong> {teamMembers.length} members</p>
                    <p><strong>Language:</strong> {language}</p>
                    <p><strong>Notifications:</strong> {Object.values(notifications).filter(Boolean).length}/{Object.keys(notifications).length} enabled</p>
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
