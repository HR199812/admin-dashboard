"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { 
  Check, 
  X, 
  Star,
  ArrowRight,
  Zap,
  Crown,
  Users
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { PRICING_PAGE, COMPANY, UI_TEXT, ROUTES } from "@/lib/constants";

// Icon mapping for plans
const planIconMap = {
  Users,
  Zap,
  Crown
} as const;

const plans = PRICING_PAGE.plans.map(plan => ({
  ...plan,
  icon: planIconMap[plan.icon as keyof typeof planIconMap]
}));

const faqs = PRICING_PAGE.faqs;

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);

  const formatPrice = (price: number) => {
    if (price === 0) return "Free";
    return `$${price}`;
  };

  const getSavings = (monthly: number, yearly: number) => {
    const monthlyTotal = monthly * 12;
    const savings = monthlyTotal - yearly;
    return Math.round((savings / monthlyTotal) * 100);
  };

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
              <span className="font-bold text-xl">{COMPANY.name}</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href={ROUTES.HOME} className="text-secondary hover:text-primary transition-colors">
                {UI_TEXT.navigation.home}
              </Link>
              <Link href={ROUTES.ABOUT} className="text-secondary hover:text-primary transition-colors">
                {UI_TEXT.navigation.about}
              </Link>
              <Link href={ROUTES.PRICING} className="text-primary hover:text-primary transition-colors">
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
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-primary mb-6"
            >
              {PRICING_PAGE.hero.title}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-secondary mb-8 max-w-3xl mx-auto"
            >
              {PRICING_PAGE.hero.subtitle}
            </motion.p>

            {/* Billing Toggle */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center justify-center space-x-4 mb-12"
            >
              <span className={`text-lg ${!isYearly ? 'text-primary font-semibold' : 'text-secondary'}`}>
                Monthly
              </span>
              <Switch
                checked={isYearly}
                onCheckedChange={setIsYearly}
                className="data-[state=checked]:bg-primary data-[state=unchecked]:bg-gray-300 dark:data-[state=unchecked]:bg-gray-600"
              />
              <span className={`text-lg ${isYearly ? 'text-primary font-semibold' : 'text-secondary'}`}>
                Yearly
              </span>
              {isYearly && (
                <Badge variant="secondary" className="ml-2">
                  Save up to 17%
                </Badge>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <Card className={`h-full shadow-elevated bg-elevated border-subtle hover-lift ${plan.popular ? 'border-primary scale-105' : ''}`}>
                  <CardHeader className="text-center pb-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <plan.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription className="text-base">{plan.description}</CardDescription>
                    
                    <div className="mt-6">
                      <div className="text-4xl font-bold text-primary">
                        {formatPrice(isYearly ? plan.price.yearly : plan.price.monthly)}
                      </div>
                      {plan.price.monthly > 0 && (
                        <div className="text-secondary">
                          {isYearly ? 'per year' : 'per month'}
                          {isYearly && plan.price.yearly < plan.price.monthly * 12 && (
                            <div className="text-sm text-green-600 font-medium">
                              Save {getSavings(plan.price.monthly, plan.price.yearly)}%
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">What&apos;s included:</h4>
                      <ul className="space-y-3">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-3">
                            <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-secondary">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {plan.limitations.length > 0 && (
                      <div className="space-y-4">
                        <h4 className="font-semibold text-primary">Limitations:</h4>
                        <ul className="space-y-3">
                          {plan.limitations.map((limitation, limitationIndex) => (
                            <li key={limitationIndex} className="flex items-start space-x-3">
                              <X className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                              <span className="text-secondary">{limitation}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="pt-4">
                      <Link href="/dashboard" className="block">
                        <Button 
                          variant={plan.ctaVariant} 
                          className="w-full" 
                          size="lg"
                        >
                          {plan.cta}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold text-primary mb-4"
            >
              Compare All Features
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-secondary max-w-2xl mx-auto"
            >
              See exactly what&apos;s included in each plan to make the best choice for your needs.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-5xl mx-auto"
          >
            <Card className="shadow-elevated bg-elevated border-subtle">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-subtle">
                        <th className="text-left p-6 font-semibold text-primary">Features</th>
                        <th className="text-center p-6 font-semibold text-primary">Freemium</th>
                        <th className="text-center p-6 font-semibold text-primary">Premium</th>
                        <th className="text-center p-6 font-semibold text-primary">Pro</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { feature: "Social Media Accounts", freemium: "3", premium: "10", pro: "Unlimited" },
                        { feature: "AI Chat Queries", freemium: "5/day", premium: "Unlimited", pro: "Unlimited + Custom" },
                        { feature: "Campaign Management", freemium: "1 campaign", premium: "Unlimited", pro: "Unlimited + Automation" },
                        { feature: "Analytics Dashboard", freemium: "Basic", premium: "Advanced", pro: "Enterprise" },
                        { feature: "Support", freemium: "Email", premium: "Priority Email", pro: "24/7 Priority" },
                        { feature: "API Access", freemium: "❌", premium: "❌", pro: "✅" },
                        { feature: "Team Collaboration", freemium: "❌", premium: "❌", pro: "✅" },
                        { feature: "Custom Integrations", freemium: "❌", premium: "❌", pro: "✅" }
                      ].map((row, index) => (
                        <tr key={index} className="border-b border-subtle/50">
                          <td className="p-6 font-medium text-primary">{row.feature}</td>
                          <td className="p-6 text-center text-secondary">{row.freemium}</td>
                          <td className="p-6 text-center text-secondary">{row.premium}</td>
                          <td className="p-6 text-center text-secondary">{row.pro}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold text-primary mb-4"
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-secondary max-w-2xl mx-auto"
            >
              Everything you need to know about our pricing and plans.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="shadow-elevated bg-elevated border-subtle">
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {faq.answer}
                    </CardDescription>
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
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Join thousands of successful influencers who trust our platform to grow their business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/dashboard">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Contact Sales
                </Button>
              </Link>
            </div>
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
                Empowering influencers with AI-powered tools to maximize their reach, 
                engagement, and revenue potential.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-primary mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-secondary hover:text-primary transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="text-secondary hover:text-primary transition-colors">Contact Us</Link></li>
                <li><Link href="/demo" className="text-secondary hover:text-primary transition-colors">Demo</Link></li>
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
