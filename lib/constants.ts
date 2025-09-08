// Navigation and Routes
export const ROUTES = {
  DASHBOARD: "/dashboard",
  CAMPAIGNS: "/campaigns",
  ANALYTICS: "/analytics",
  AI_CHAT: "/ai-chat",
  PRACTICE: "/practice",
  HISTORY: "/history",
  RESEARCH: "/research",
  SETTINGS: "/settings",
  EXPERT_AI: "/expert_ai",
  HOME: "/",
  ABOUT: "/about",
  PRICING: "/pricing",
  CONTACT: "/contact",
  DEMO: "/demo"
} as const;

// Company Information
export const COMPANY = {
  name: "Influencer Dashboard",
  tagline: "Empowering influencers with AI-powered tools to maximize their reach, engagement, and revenue potential.",
  email: "support@influencerdashboard.com",
  phone: "+1 (555) 123-4567",
  address: {
    street: "123 Creator Street",
    city: "San Francisco",
    state: "CA",
    zip: "94105",
    country: "United States"
  },
  businessHours: {
    weekdays: "Monday - Friday: 9:00 AM - 6:00 PM PST",
    saturday: "Saturday: 10:00 AM - 4:00 PM PST",
    sunday: "Sunday: Closed"
  }
} as const;

// Landing Page Content
export const LANDING_PAGE = {
  hero: {
    title: "Empower Your Influence. Maximize Your Revenue.",
    subtitle: "AI-powered analytics, campaign management tools, brand collaboration platform, and growth strategies designed specifically for modern influencers.",
    primaryCta: "Try Demo",
    secondaryCta: "Contact Us"
  },
  stats: [
    { number: "10K+", label: "Active Influencers" },
    { number: "$50M+", label: "Revenue Generated" },
    { number: "95%", label: "Satisfaction Rate" },
    { number: "24/7", label: "AI Support" }
  ],
  features: [
    {
      icon: "MessageSquare",
      title: "AI Chat",
      description: "Get personalized insights and recommendations to optimize your content strategy and engagement."
    },
    {
      icon: "DollarSign",
      title: "Campaign Management",
      description: "Create, track, and manage brand collaborations with comprehensive campaign tools."
    },
    {
      icon: "BarChart3",
      title: "Analytics Dashboard",
      description: "Monitor growth metrics, revenue insights, and audience behavior in real-time."
    },
    {
      icon: "TrendingUp",
      title: "Research Hub",
      description: "Discover trending content, analyze competitors, and find new brand opportunities."
    }
  ],
  revenueSection: {
    title: "Turn Your Influence Into Revenue",
    description: "Our platform helps influencers increase engagement rates by up to 300% and boost earnings through smart campaign management and AI-powered insights.",
    features: [
      "Smart campaign targeting",
      "Real-time performance analytics",
      "Secure payment processing"
    ],
    mockupStats: {
      revenue: "$45,231",
      growth: "+23%",
      campaigns: "1.2K",
      success: "98%"
    }
  },
  testimonials: [
    {
      name: "Sarah Chen",
      role: "Lifestyle Influencer",
      content: "This platform transformed my influencer business. My revenue increased by 300% in just 6 months!",
      avatar: "SC",
      rating: 5
    },
    {
      name: "Marcus Johnson",
      role: "Tech Reviewer",
      content: "The AI insights are incredible. I've never had such clear direction on what content performs best.",
      avatar: "MJ",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      role: "Fashion Blogger",
      content: "Campaign management has never been easier. I can focus on creating while the platform handles the rest.",
      avatar: "ER",
      rating: 5
    }
  ],
  cta: {
    title: "Ready to Transform Your Influence?",
    description: "Join thousands of successful influencers who are already using our platform to grow their audience and maximize their revenue.",
    buttonText: "See the Demo"
  }
} as const;

// Pricing Page Content
export const PRICING_PAGE = {
  hero: {
    title: "Simple, Transparent Pricing",
    subtitle: "Choose the perfect plan for your influencer journey. Start free, upgrade as you grow, and scale with confidence."
  },
  plans: [
    {
      name: "Freemium",
      description: "Perfect for getting started",
      price: { monthly: 0, yearly: 0 },
      icon: "Users",
      popular: false,
      features: [
        "Up to 3 social media accounts",
        "Basic analytics dashboard",
        "AI chat (5 queries per day)",
        "Basic campaign tracking",
        "Email support",
        "Community access"
      ],
      limitations: [
        "Limited to 1 campaign at a time",
        "Basic reporting only",
        "No advanced AI insights",
        "No priority support"
      ],
      cta: "Get Started Free",
      ctaVariant: "outline"
    },
    {
      name: "Premium",
      description: "For growing influencers",
      price: { monthly: 29, yearly: 290 },
      icon: "Zap",
      popular: true,
      features: [
        "Up to 10 social media accounts",
        "Advanced analytics & insights",
        "Unlimited AI chat",
        "Advanced campaign management",
        "Priority email support",
        "Content calendar",
        "Brand collaboration tools",
        "Revenue tracking",
        "Export reports (PDF/CSV)",
        "Mobile app access"
      ],
      limitations: [],
      cta: "Start Premium Trial",
      ctaVariant: "default"
    },
    {
      name: "Pro",
      description: "For established creators",
      price: { monthly: 99, yearly: 990 },
      icon: "Crown",
      popular: false,
      features: [
        "Unlimited social media accounts",
        "Enterprise-grade analytics",
        "Unlimited AI chat + custom models",
        "Advanced campaign automation",
        "24/7 priority support",
        "Advanced content calendar",
        "White-label brand tools",
        "Advanced revenue analytics",
        "Custom reporting & dashboards",
        "API access",
        "Team collaboration tools",
        "Custom integrations",
        "Dedicated account manager"
      ],
      limitations: [],
      cta: "Go Pro",
      ctaVariant: "default"
    }
  ],
  featureComparison: [
    { feature: "Social Media Accounts", freemium: "3", premium: "10", pro: "Unlimited" },
    { feature: "AI Chat Queries", freemium: "5/day", premium: "Unlimited", pro: "Unlimited + Custom" },
    { feature: "Campaign Management", freemium: "1 campaign", premium: "Unlimited", pro: "Unlimited + Automation" },
    { feature: "Analytics Dashboard", freemium: "Basic", premium: "Advanced", pro: "Enterprise" },
    { feature: "Support", freemium: "Email", premium: "Priority Email", pro: "24/7 Priority" },
    { feature: "API Access", freemium: "❌", premium: "❌", pro: "✅" },
    { feature: "Team Collaboration", freemium: "❌", premium: "❌", pro: "✅" },
    { feature: "Custom Integrations", freemium: "❌", premium: "❌", pro: "✅" }
  ],
  faqs: [
    {
      question: "Can I change plans anytime?",
      answer: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences."
    },
    {
      question: "Is there a free trial?",
      answer: "Yes! Premium and Pro plans come with a 14-day free trial. No credit card required to start."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers for annual plans."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Absolutely. You can cancel your subscription at any time from your account settings. No cancellation fees."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 30-day money-back guarantee for all paid plans. Contact our support team for assistance."
    },
    {
      question: "Is my data secure?",
      answer: "Yes! We use enterprise-grade security with end-to-end encryption. Your data is never shared with third parties."
    }
  ],
  cta: {
    title: "Ready to Start Your Journey?",
    description: "Join thousands of successful influencers who trust our platform to grow their business.",
    primaryButton: "Start Free Trial",
    secondaryButton: "Contact Sales"
  }
} as const;

// About Page Content
export const ABOUT_PAGE = {
  hero: {
    title: "Empowering Creators to Thrive",
    subtitle: "We're on a mission to democratize influence and help creators build sustainable, profitable businesses through cutting-edge technology and AI-powered insights."
  },
  mission: {
    title: "Our Mission",
    description: "To empower every creator with the tools, insights, and opportunities they need to turn their passion into a profitable business. We believe that influence should be accessible to everyone, not just a select few.",
    details: "By combining AI technology with deep creator insights, we're building the future of influencer marketing where creators have full control over their brand partnerships, audience growth, and revenue streams."
  },
  vision: {
    title: "Our Vision",
    description: "A world where every creator has the power to build a sustainable business from their content, where brands and creators collaborate seamlessly, and where influence is measured by impact, not just follower count.",
    details: "We envision a creator economy that's fair, transparent, and profitable for everyone involved, powered by technology that amplifies human creativity rather than replacing it."
  },
  values: [
    {
      icon: "Target",
      title: "Creator-First",
      description: "Every feature is designed with creators' success in mind, putting their needs at the center of everything we build."
    },
    {
      icon: "Lightbulb",
      title: "Innovation",
      description: "We continuously push the boundaries of what's possible with AI and technology to help creators thrive."
    },
    {
      icon: "Shield",
      title: "Trust & Security",
      description: "Your data and earnings are protected with enterprise-grade security and transparent practices."
    },
    {
      icon: "Users",
      title: "Community",
      description: "We believe in the power of community and foster connections between creators, brands, and audiences."
    }
  ],
  team: [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      avatar: "SJ",
      description: "Former influencer with 2M+ followers, passionate about empowering creators."
    },
    {
      name: "Michael Chen",
      role: "CTO",
      avatar: "MC",
      description: "Tech veteran with 10+ years building scalable platforms for creators."
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Product",
      avatar: "ER",
      description: "Product strategist focused on user experience and creator success."
    },
    {
      name: "David Kim",
      role: "Head of AI",
      avatar: "DK",
      description: "AI researcher specializing in content optimization and audience insights."
    }
  ],
  story: {
    title: "Our Story",
    paragraphs: [
      "Influencer Dashboard was born from a simple observation: creators were struggling to turn their passion into profit. Despite having millions of followers, many influencers lacked the tools and insights needed to build sustainable businesses.",
      "Our founder, Sarah Johnson, experienced this firsthand. As a successful lifestyle influencer with over 2 million followers, she realized that the creator economy was broken. Brands were taking advantage of creators, analytics were scattered across multiple platforms, and there was no unified way to track performance and optimize content strategy.",
      "That's when we decided to build something different. A platform that puts creators first, gives them the insights they need to succeed, and helps them build meaningful, profitable relationships with brands. Today, we're proud to serve thousands of creators worldwide, helping them turn their influence into impact."
    ]
  },
  cta: {
    title: "Ready to Join Our Mission?",
    description: "Whether you're a creator looking to grow your business or a brand wanting to connect with authentic voices, we're here to help you succeed.",
    primaryButton: "Try the Platform",
    secondaryButton: "Get in Touch"
  }
} as const;

// Contact Page Content
export const CONTACT_PAGE = {
  hero: {
    title: "Get in Touch",
    subtitle: "Have questions about our platform? Want to discuss a partnership? We'd love to hear from you. Send us a message and we'll get back to you within 24 hours."
  },
  form: {
    title: "Send us a Message",
    description: "Fill out the form below and we'll get back to you as soon as possible.",
    fields: {
      name: { label: "Name", placeholder: "Your full name" },
      email: { label: "Email", placeholder: "your.email@example.com" },
      message: { label: "Message", placeholder: "Tell us how we can help you..." }
    },
    submitButton: "Send Message",
    successMessage: {
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you within 24 hours."
    }
  },
  contactInfo: {
    title: "Contact Information",
    description: "Prefer to reach out directly? Here are all the ways you can get in touch with us.",
    methods: [
      {
        icon: "Mail",
        title: "Email",
        description: "Send us an email and we'll respond within 24 hours.",
        value: "support@influencerdashboard.com"
      },
      {
        icon: "Phone",
        title: "Phone",
        description: "Call us during business hours for immediate assistance.",
        value: "+1 (555) 123-4567"
      },
      {
        icon: "MapPin",
        title: "Office",
        description: "Visit our headquarters in San Francisco.",
        value: "123 Creator Street\nSan Francisco, CA 94105\nUnited States"
      },
      {
        icon: "Clock",
        title: "Business Hours",
        description: "We're here to help during these hours.",
        value: "Monday - Friday: 9:00 AM - 6:00 PM PST\nSaturday: 10:00 AM - 4:00 PM PST\nSunday: Closed"
      }
    ]
  },
  faqs: [
    {
      question: "How do I get started?",
      answer: "Simply sign up for a free account and connect your social media profiles. Our AI will analyze your content and provide personalized recommendations."
    },
    {
      question: "Is there a free trial?",
      answer: "Yes! We offer a 14-day free trial with full access to all features. No credit card required to get started."
    },
    {
      question: "What platforms do you support?",
      answer: "We support Instagram, TikTok, YouTube, Twitter, and LinkedIn. More platforms are being added regularly."
    },
    {
      question: "How secure is my data?",
      answer: "We use enterprise-grade security with end-to-end encryption. Your data is never shared with third parties without your consent."
    }
  ],
  cta: {
    title: "Ready to Get Started?",
    description: "Join thousands of creators who are already using our platform to grow their business.",
    buttonText: "Try the Platform"
  }
} as const;

// Demo Page Content
export const DEMO_PAGE = {
  hero: {
    title: "Loading Your Demo",
    subtitle: "We're preparing your personalized dashboard experience. You'll be redirected to the full platform in just a moment.",
    primaryButton: "Go to Dashboard Now",
    secondaryButton: "Back to Home"
  },
  features: [
    {
      icon: "BarChart3",
      title: "Analytics Dashboard",
      description: "Real-time insights into your performance, audience growth, and revenue metrics."
    },
    {
      icon: "MessageSquare",
      title: "AI Chat Assistant",
      description: "Get personalized recommendations and insights to optimize your content strategy."
    },
    {
      icon: "DollarSign",
      title: "Campaign Management",
      description: "Create, track, and manage brand collaborations with comprehensive tools."
    },
    {
      icon: "TrendingUp",
      title: "Research Hub",
      description: "Discover trending content, analyze competitors, and find new opportunities."
    }
  ],
  stats: {
    title: "See Real Results",
    description: "Our demo includes real data from successful influencers using our platform.",
    metrics: [
      { value: "+300%", label: "Average Revenue Increase" },
      { value: "2.5M+", label: "Total Followers Managed" },
      { value: "98%", label: "User Satisfaction Rate" }
    ]
  },
  cta: {
    title: "Ready to See It in Action?",
    description: "Experience the full power of our platform with real data and interactive features.",
    buttonText: "Launch Full Demo"
  }
} as const;

// Settings Page Content
export const SETTINGS_PAGE = {
  title: "Settings",
  description: "Manage your profile, preferences, and account settings",
  tabs: {
    general: "General",
    appearance: "Appearance",
    notifications: "Notifications",
    billing: "Billing",
    subscription: "Subscription",
    team: "Team"
  },
  subscription: {
    currentPlan: {
      title: "Current Plan",
      description: "Manage your subscription plan and features",
      plan: {
        name: "Premium Plan",
        price: "$29/month • Billed annually",
        status: "Active",
        nextBilling: "Feb 15, 2024"
      },
      features: [
        { name: "Social Accounts", value: "10 accounts" },
        { name: "AI Chat", value: "Unlimited queries" },
        { name: "Campaigns", value: "Unlimited" }
      ],
      buttons: {
        viewPlans: "View All Plans",
        changePlan: "Change Plan"
      }
    },
    usage: {
      title: "Usage & Limits",
      description: "Track your current usage against plan limits",
      metrics: [
        { name: "Social Media Accounts", used: "7 of 10 used", percentage: 70, color: "primary" },
        { name: "AI Chat Queries", used: "1,247 this month", percentage: 45, color: "green" },
        { name: "Active Campaigns", used: "3 of unlimited", percentage: 15, color: "blue" },
        { name: "Storage Used", used: "2.3 GB of 10 GB", percentage: 23, color: "yellow" }
      ]
    },
    recommendations: {
      title: "Plan Recommendations",
      description: "Based on your usage, we recommend these optimizations",
      alerts: [
        {
          type: "warning",
          title: "Consider Upgrading to Pro",
          description: "You're using 70% of your social account limit. Pro plan offers unlimited accounts and advanced features.",
          buttonText: "Upgrade to Pro"
        },
        {
          type: "success",
          title: "Great Usage Pattern",
          description: "Your AI chat usage is well within limits. You're getting great value from your Premium plan."
        }
      ]
    }
  }
} as const;

// Common UI Text
export const UI_TEXT = {
  buttons: {
    tryDemo: "Try Demo",
    contactUs: "Contact Us",
    getStarted: "Get Started",
    learnMore: "Learn More",
    viewAll: "View All",
    seeMore: "See More",
    backToHome: "Back to Home",
    returnToDashboard: "Return to Dashboard"
  },
  navigation: {
    home: "Home",
    about: "About",
    pricing: "Pricing",
    contact: "Contact",
    demo: "Demo"
  },
  footer: {
    company: "Company",
    legal: "Legal",
    copyright: "© 2024 Influencer Dashboard. All rights reserved.",
    links: {
      about: "About Us",
      pricing: "Pricing",
      contact: "Contact Us",
      demo: "Demo",
      terms: "Terms of Service",
      privacy: "Privacy Policy"
    }
  },
  common: {
    loading: "Loading...",
    error: "Something went wrong",
    success: "Success!",
    cancel: "Cancel",
    save: "Save",
    edit: "Edit",
    delete: "Delete",
    confirm: "Confirm",
    close: "Close"
  }
} as const;

// 404 Page Content
export const NOT_FOUND_PAGE = {
  title: "404",
  heading: "Oops! Page not found",
  description: "Looks like this page doesn't exist. Let's get you back on track.",
  buttonText: "Return to Dashboard",
  helpText: "Need help? Contact our support team or check out our",
  helpLink: "settings",
  helpLinkText: "page."
} as const;
