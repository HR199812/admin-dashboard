"use client";

import { AppSidebar } from "@/components/app-sidebar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { SidebarLayout, SidebarTrigger } from "@/components/ui/sidebar";
import { Send, Bot, User, Lightbulb, TrendingUp, Target, MessageSquare } from "lucide-react";
import { useSidebarStore, useChatStore } from "@/lib/store";
import { useState } from "react";

const examplePrompts = [
  {
    title: "Viral Content Ideas",
    description: "Suggest 5 viral video ideas for my niche",
    icon: Lightbulb,
    prompt: "Suggest 5 viral video ideas for my lifestyle and beauty niche that would perform well on TikTok and Instagram Reels. Consider current trends and my audience demographics.",
  },
  {
    title: "Audience Growth",
    description: "How can I improve engagement with Gen Z?",
    icon: TrendingUp,
    prompt: "How can I improve my engagement with Gen Z audience on social media? What content strategies and posting times work best for this demographic?",
  },
  {
    title: "Brand Partnerships",
    description: "Which brand category should I target next?",
    icon: Target,
    prompt: "Based on my current follower demographics and engagement metrics, which brand categories should I target for partnerships? I'm interested in expanding beyond beauty and lifestyle.",
  },
  {
    title: "Content Strategy",
    description: "Create a content calendar for next month",
    icon: MessageSquare,
    prompt: "Create a detailed content calendar for next month including post ideas, hashtags, and optimal posting times for Instagram, TikTok, and YouTube. Focus on lifestyle and beauty content.",
  },
];

export default function AIChatPage() {
  const { isOpen } = useSidebarStore();
  const { messages, addMessage } = useChatStore();
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (messageText: string) => {
    if (!messageText.trim()) return;

    // Add user message
    addMessage({
      role: "user",
      content: messageText,
    });

    setInput("");
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "Based on your current metrics, I'd recommend focusing on short-form video content that showcases authentic moments. Your audience responds well to behind-the-scenes content and tutorials.",
        "For Gen Z engagement, consider using trending audio, participating in challenges, and creating interactive content like polls and Q&As. Post during peak hours: 6-9 PM on weekdays.",
        "Given your strong engagement in beauty and lifestyle, I suggest exploring partnerships with sustainable fashion brands, wellness companies, and tech accessories. Your audience values authenticity and quality.",
        "Here's a content calendar structure: Monday - Motivational Monday posts, Tuesday - Tutorial Tuesday, Wednesday - Behind-the-scenes Wednesday, Thursday - Throwback Thursday, Friday - Fun Friday, Weekend - Lifestyle content.",
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      addMessage({
        role: "assistant",
        content: randomResponse,
      });
      setIsLoading(false);
    }, 1500);
  };

  const handleExamplePrompt = (prompt: string) => {
    setInput(prompt);
  };

  return (
    <SidebarLayout defaultOpen={isOpen}>
      <AppSidebar />
      <main className="flex flex-1 flex-col p-2 transition-all duration-300 ease-in-out bg-surface">
        <div className="h-full rounded-md border-2 border-dashed border-subtle">
          <SidebarTrigger />
          <div className="px-8 py-6 h-full flex flex-col">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-primary">AI Assistant</h1>
              <p className="text-secondary">
                Get personalized advice for your influencer journey
              </p>
            </div>

            <div className="flex-1 flex flex-col">
              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto mb-6 space-y-4">
                {messages.length === 0 ? (
                  <div className="text-center py-12">
                    <Bot className="w-16 h-16 mx-auto text-secondary mb-4" />
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      Welcome to your AI Assistant
                    </h3>
                    <p className="text-secondary mb-6">
                      Ask me anything about content creation, growth strategies, or brand partnerships
                    </p>
                    
                    {/* Example Prompts */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                      {examplePrompts.map((prompt, index) => (
                        <Card 
                          key={index} 
                          className="rounded-2xl shadow-elevated bg-elevated border-subtle hover-lift cursor-pointer"
                          onClick={() => handleExamplePrompt(prompt.prompt)}
                        >
                          <CardContent className="p-4">
                            <div className="flex items-start space-x-3">
                              <prompt.icon className="w-5 h-5 text-purple-600 mt-1" />
                              <div>
                                <h4 className="font-semibold text-sm text-primary">{prompt.title}</h4>
                                <p className="text-xs text-secondary">{prompt.description}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[80%] rounded-2xl p-4 ${
                            message.role === "user"
                              ? "bg-purple-600 text-white"
                              : "bg-gray-100 dark:bg-gray-800 text-primary"
                          }`}
                        >
                          <div className="flex items-start space-x-2">
                            {message.role === "assistant" && (
                              <Bot className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                            )}
                            {message.role === "user" && (
                              <User className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                            )}
                            <div className="flex-1">
                              <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                              <p className="text-xs opacity-70 mt-2">
                                {new Date(message.timestamp).toLocaleTimeString()}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    {isLoading && (
                      <div className="flex justify-start">
                        <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-4">
                          <div className="flex items-center space-x-2">
                            <Bot className="w-5 h-5 text-purple-600" />
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce"></div>
                              <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                              <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Input Area */}
              <div className="border-t border-subtle pt-4">
                <div className="flex space-x-2">
                  <Textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask me anything about your influencer journey..."
                    className="flex-1 min-h-[60px] max-h-[120px] resize-none rounded-2xl border-subtle bg-surface text-primary"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleSendMessage(input);
                      }
                    }}
                  />
                  <Button
                    onClick={() => handleSendMessage(input)}
                    disabled={!input.trim() || isLoading}
                    className="bg-purple-600 hover:bg-purple-700 rounded-2xl px-4"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-xs text-secondary mt-2">
                  Press Enter to send, Shift+Enter for new line
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </SidebarLayout>
  );
}
