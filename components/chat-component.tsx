import { useState } from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

export default function ChatComponent() {
  const [messages, setMessages] = useState([
    { text: "Hi, how can I help you today?", sender: "bot" },
    { text: "Hey, I'm having trouble with my account.", sender: "user" },
    { text: "What seems to be the problem?", sender: "bot" },
    { text: "I can't log in.", sender: "user" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([...messages, { text: input, sender: "user" }]);
    setInput("");
  };

  return (
    <div className="rounded-xl h-full border bg-card text-card-foreground shadow flex flex-col">
      {/* Header */}
      <div className="p-6 flex flex-row items-center">
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="/avatars/01.png" alt="Sofia Davis" />
          </Avatar>
          <div>
            <p className="text-sm font-medium">Sofia Davis</p>
            <p className="text-sm text-muted-foreground">m@example.com</p>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="p-6 pt-0 space-y-4 flex-1 overflow-y-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm ${
              msg.sender === "user"
                ? "ml-auto bg-primary text-primary-foreground"
                : "bg-muted"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="p-6 pt-0 mt-auto">
        <form className="flex items-center space-x-2" onSubmit={sendMessage}>
          <Input
            className="flex-1"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button type="submit" size="icon" disabled={!input.trim()}>
            <Send className="w-5 h-5" />
            <span className="sr-only">Send</span>
          </Button>
        </form>
      </div>
    </div>
  );
}
