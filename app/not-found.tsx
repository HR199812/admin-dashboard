"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Ghost, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Card className="w-full max-w-md mx-4 rounded-2xl shadow-lg">
        <CardContent className="p-8 text-center">
          <div className="mb-8">
            {/* Ghost icon for a more modern look */}
            <Ghost className="w-24 h-24 mx-auto text-muted-foreground mb-6" />
            
            <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Oops! Page not found
            </h2>
            <p className="text-muted-foreground text-lg">
              Looks like this page doesn&apos;t exist. Let&apos;s get you back on track.
            </p>
          </div>
          
          <div className="space-y-4">
            <Link href="/dashboard">
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                <Home className="w-4 h-4 mr-2" />
                Return to Dashboard
              </Button>
            </Link>
          </div>
          
          <div className="mt-8 pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Need help? Contact our support team or check out our{" "}
              <Link href="/settings" className="text-primary hover:underline">
                settings
              </Link>{" "}
              page.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
