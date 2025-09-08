"use client";

import React from 'react';
import { useLanguage, languageNames, flagEmojis, type Language } from '@/lib/language-context';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Globe } from 'lucide-react';

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  const languages: Language[] = ['en', 'es', 'fr', 'de', 'zh', 'ja'];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="w-full justify-start hover:bg-primary/10">
          <Globe className="h-4 w-4 mr-2 text-purple-500" />
          <span className="text-foreground">Select Language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-card border-border shadow-lg">
        {languages.map((lang) => (
          <DropdownMenuItem 
            key={lang}
            onClick={() => setLanguage(lang)}
            className={`hover:bg-primary/10 cursor-pointer flex items-center space-x-2 ${
              language === lang ? 'bg-primary/10' : ''
            }`}
          >
            <span className="text-lg">{flagEmojis[lang]}</span>
            <span>{languageNames[lang]}</span>
            {language === lang && (
              <span className="ml-auto text-primary">✓</span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
