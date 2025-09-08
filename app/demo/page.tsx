"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ArrowRight, 
  BarChart3, 
  MessageSquare, 
  DollarSign, 
  TrendingUp,
  Loader2,
  Monitor
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function DemoPage() {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Auto-redirect to dashboard after 3 seconds only on desktop
    if (!isMobile) {
      const timer = setTimeout(() => {
        router.push("/dashboard");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [router, isMobile]);

  const features = [
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Real-time insights into your performance, audience growth, and revenue metrics."
    },
    {
      icon: MessageSquare,
      title: "AI Chat Assistant",
      description: "Get personalized recommendations and insights to optimize your content strategy."
    },
    {
      icon: DollarSign,
      title: "Campaign Management",
      description: "Create, track, and manage brand collaborations with comprehensive tools."
    },
    {
      icon: TrendingUp,
      title: "Research Hub",
      description: "Discover trending content, analyze competitors, and find new opportunities."
    }
  ];

  return (
    <div className="min-h-screen bg-surface">
      {/* Navigation */}
      <nav className="border-b border-subtle bg-surface/95 backdrop-blur supports-[backdrop-filter]:bg-surface/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">ID</span>
              </div>
              <span className="font-bold text-xl text-primary">Influencer Dashboard</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-secondary hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-secondary hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/pricing" className="text-secondary hover:text-primary transition-colors">
                Pricing
              </Link>
              <Link href="/contact" className="text-secondary hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Link href="/dashboard">
                <Button>Try Demo</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Desktop-Specific Message */}
      {isMobile && (
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Monitor className="h-12 w-12 text-primary" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
                  Desktop{" "}
                  <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    Optimized
                  </span>
                </h1>
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl text-secondary mb-8 max-w-3xl mx-auto"
              >
                For the best experience, please open this demo on a desktop browser. 
                Our dashboard is designed to showcase the full power of our platform on larger screens.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-6"
                  onClick={() => window.open('/dashboard', '_blank')}
                >
                  Open in Desktop Browser
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Link href="/">
                  <Button variant="outline" size="lg" className="text-lg px-8 py-6 text-primary">
                    Back to Home
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Hero Section - Desktop Only */}
      {!isMobile && (
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <Loader2 className="h-16 w-16 text-primary mx-auto mb-6 animate-spin" />
                <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
                  Loading Your{" "}
                  <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    Demo
                  </span>
                </h1>
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl text-secondary mb-8 max-w-3xl mx-auto"
              >
                We&apos;re preparing your personalized dashboard experience. You&apos;ll be redirected 
                to the full platform in just a moment.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Link href="/dashboard">
                  <Button size="lg" className="text-lg px-8 py-6">
                    Go to Dashboard Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/">
                  <Button variant="outline" size="lg" className="text-lg px-8 py-6 text-primary">
                    Back to Home
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Demo Preview Section - Desktop Only */}
      {!isMobile && (
        <section className="py-20 bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold text-primary mb-4"
            >
              What You&apos;ll Experience
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-secondary max-w-2xl mx-auto"
            >
              Get a preview of the powerful features waiting for you in the full dashboard.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full shadow-elevated bg-elevated border-subtle hover-lift">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* Demo Stats Section - Desktop Only */}
      {!isMobile && (
        <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold text-primary mb-4"
            >
              See Real Results
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-secondary max-w-2xl mx-auto"
            >
              Our demo includes real data from successful influencers using our platform.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="p-8 shadow-elevated bg-elevated border-subtle">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">+300%</div>
                  <div className="text-secondary">Average Revenue Increase</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">2.5M+</div>
                  <div className="text-secondary">Total Followers Managed</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">98%</div>
                  <div className="text-secondary">User Satisfaction Rate</div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
      )}

      {/* CTA Section - Desktop Only */}
      {!isMobile && (
        <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to See It in Action?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Experience the full power of our platform with real data and interactive features.
            </p>
            <Link href="/dashboard">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Launch Full Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
      )}

      {/* Footer */}
      <footer className="bg-surface py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">ID</span>
                </div>
                <span className="font-bold text-xl text-primary">Influencer Dashboard</span>
              </div>
              <p className="text-secondary max-w-md">
                Empowering influencers with AI-powered tools to maximize their reach, 
                engagement, and revenue potential.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-primary mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-secondary hover:text-primary transition-colors">About Us</Link></li>
                <li><Link href="/pricing" className="text-secondary hover:text-primary transition-colors">Pricing</Link></li>
                <li><Link href="/contact" className="text-secondary hover:text-primary transition-colors">Contact Us</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-primary mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="/terms" className="text-secondary hover:text-primary transition-colors">Terms of Service</Link></li>
                <li><Link href="/privacy" className="text-secondary hover:text-primary transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-subtle mt-8 pt-8 text-center">
            <p className="text-secondary">
              © 2024 Influencer Dashboard. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
