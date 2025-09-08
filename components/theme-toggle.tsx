"use client";

import * as React from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="w-full justify-start text-secondary hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary transition-all duration-200 border border-subtle">
          <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-yellow-500" />
          <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-purple-400" />
          <span className="sr-only">Toggle theme</span>
          <span className="ml-2">Theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-elevated border-subtle shadow-elevated">
        <DropdownMenuItem 
          onClick={() => setTheme("light")}
          className="hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer text-primary transition-all duration-200"
        >
          <Sun className="h-4 w-4 mr-2 text-yellow-500" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("dark")}
          className="hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer text-primary transition-all duration-200"
        >
          <Moon className="h-4 w-4 mr-2 text-purple-400" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("system")}
          className="hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer text-primary transition-all duration-200"
        >
          <Monitor className="h-4 w-4 mr-2 text-green-500" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
