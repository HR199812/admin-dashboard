"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BarChart3, 
  MessageSquare, 
  DollarSign, 
  TrendingUp, 
  Star,
  ArrowRight,
  Target,
  Zap,
  Shield
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { LANDING_PAGE, COMPANY, UI_TEXT, ROUTES } from "@/lib/constants";

// Icon mapping for features
const iconMap = {
  MessageSquare,
  DollarSign,
  BarChart3,
  TrendingUp
} as const;

const features = LANDING_PAGE.features.map(feature => ({
  ...feature,
  icon: iconMap[feature.icon as keyof typeof iconMap]
}));

const testimonials = LANDING_PAGE.testimonials;
const stats = LANDING_PAGE.stats;

export default function LandingPage() {
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
              <Link href={ROUTES.HOME} className="text-primary hover:text-primary transition-colors">
                {UI_TEXT.navigation.home}
              </Link>
              <Link href={ROUTES.ABOUT} className="text-secondary hover:text-primary transition-colors">
                {UI_TEXT.navigation.about}
              </Link>
              <Link href={ROUTES.PRICING} className="text-secondary hover:text-primary transition-colors">
                {UI_TEXT.navigation.pricing}
              </Link>
              <Link href={ROUTES.CONTACT} className="text-secondary hover:text-primary transition-colors">
                {UI_TEXT.navigation.contact}
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Link href={ROUTES.DEMO}>
                <Button>{UI_TEXT.buttons.tryDemo}</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-success/5 to-info/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="text-gradient-rainbow">{LANDING_PAGE.hero.title}</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-secondary mb-8 max-w-3xl mx-auto"
            >
              {LANDING_PAGE.hero.subtitle}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link href={ROUTES.DEMO}>
                <Button size="lg" className="text-lg px-8 py-6">
                  {LANDING_PAGE.hero.primaryCta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href={ROUTES.CONTACT}>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-subtle text-primary hover:bg-accent hover:text-accent-foreground">
                  {LANDING_PAGE.hero.secondaryCta}
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-success/10 to-info/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`text-3xl md:text-4xl font-bold mb-2 ${
                  index === 0 ? 'text-gradient-primary' : 
                  index === 1 ? 'text-green-600' : 
                  index === 2 ? 'text-yellow-600' : 
                  'text-purple-600'
                }`}>
                  {stat.number}
                </div>
                <div className="text-secondary">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold text-primary mb-4"
            >
              Everything You Need to Succeed
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-secondary max-w-2xl mx-auto"
            >
              Powerful tools and insights designed to help influencers grow their audience, 
              increase engagement, and maximize revenue.
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
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                      index === 0 ? 'bg-gradient-primary' : 
                      index === 1 ? 'bg-gradient-success' : 
                      index === 2 ? 'bg-gradient-warning' : 
                      'bg-gradient-info'
                    }`}>
                      <feature.icon className="h-6 w-6 text-white" />
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

      {/* Revenue & Growth Section */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                {LANDING_PAGE.revenueSection.title}
              </h2>
              <p className="text-xl text-secondary mb-8">
                {LANDING_PAGE.revenueSection.description}
              </p>
              <div className="space-y-4">
                {LANDING_PAGE.revenueSection.features.map((feature, index) => {
                  const icons = [Target, Zap, Shield];
                  const colors = ['text-red-500', 'text-yellow-500', 'text-green-500'];
                  const bgColors = ['bg-red-100 dark:bg-red-900/20', 'bg-yellow-100 dark:bg-yellow-900/20', 'bg-green-100 dark:bg-green-900/20'];
                  const IconComponent = icons[index];
                  return (
                    <div key={index} className="flex items-center space-x-3">
                      <div className={`w-8 h-8 ${bgColors[index]} rounded-full flex items-center justify-center`}>
                        <IconComponent className={`h-4 w-4 ${colors[index]}`} />
                      </div>
                      <span className="text-primary">{feature}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <Card className="p-8 shadow-elevated bg-elevated border-subtle">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Revenue Analytics</h3>
                    <div className="text-2xl font-bold text-primary">{LANDING_PAGE.revenueSection.mockupStats.revenue}</div>
                  </div>
                  <div className="h-32 bg-gradient-to-r from-primary/20 to-primary/5 rounded-lg flex items-end justify-center">
                    <div className="text-secondary text-sm">Dashboard Preview</div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">{LANDING_PAGE.revenueSection.mockupStats.growth}</div>
                      <div className="text-sm text-secondary">Growth</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">{LANDING_PAGE.revenueSection.mockupStats.campaigns}</div>
                      <div className="text-sm text-secondary">Campaigns</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">{LANDING_PAGE.revenueSection.mockupStats.success}</div>
                      <div className="text-sm text-secondary">Success</div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold text-primary mb-4"
            >
              Trusted by Top Influencers
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-secondary"
            >
              See what our community is saying about their success
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full shadow-elevated bg-elevated border-subtle hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-secondary mb-6 italic">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-primary-foreground font-semibold text-sm">
                          {testimonial.avatar}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-primary">{testimonial.name}</div>
                        <div className="text-sm text-secondary">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              {LANDING_PAGE.cta.title}
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              {LANDING_PAGE.cta.description}
            </p>
            <Link href={ROUTES.DASHBOARD}>
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                {LANDING_PAGE.cta.buttonText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

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
                {COMPANY.tagline}
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-primary mb-4">{UI_TEXT.footer.company}</h3>
              <ul className="space-y-2">
                <li><Link href={ROUTES.ABOUT} className="text-secondary hover:text-primary transition-colors">{UI_TEXT.footer.links.about}</Link></li>
                <li><Link href={ROUTES.PRICING} className="text-secondary hover:text-primary transition-colors">{UI_TEXT.footer.links.pricing}</Link></li>
                <li><Link href={ROUTES.CONTACT} className="text-secondary hover:text-primary transition-colors">{UI_TEXT.footer.links.contact}</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-primary mb-4">{UI_TEXT.footer.legal}</h3>
              <ul className="space-y-2">
                <li><Link href="/terms" className="text-secondary hover:text-primary transition-colors">{UI_TEXT.footer.links.terms}</Link></li>
                <li><Link href="/privacy" className="text-secondary hover:text-primary transition-colors">{UI_TEXT.footer.links.privacy}</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-subtle mt-8 pt-8 text-center">
            <p className="text-secondary">
              {UI_TEXT.footer.copyright}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
