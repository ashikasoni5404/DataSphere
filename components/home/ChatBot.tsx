"use client";

import { useState } from "react";
import { 
  MessageSquare, 
  Send, 
  X, 
  User, 
  Bot, 
  ChevronRight, 
  Loader2 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from "@/components/ui/sheet";

interface Message {
  type: "user" | "bot";
  content: string;
}

export function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([
    { type: "bot", content: "Hi there! I'm DataSphere's AI assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMessage: Message = {
      type: "user",
      content: input
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);
    
    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "I'd be happy to help you learn more about our data engineering services. Our team specializes in building robust data pipelines, ETL processes, and data warehousing solutions.",
        "Our data science team uses advanced analytics and machine learning to extract valuable insights from your data. Would you like to learn more about a specific application?",
        "DataSphere offers cutting-edge AI solutions including natural language processing, computer vision, and recommendation systems. How can we help with your specific needs?",
        "I'd be happy to connect you with one of our specialists who can provide more detailed information about your specific inquiry. Would you like me to arrange that for you?",
        "You can schedule a consultation with our team by using the contact form on our website. Would you like me to guide you there?"
      ];
      
      const botMessage: Message = {
        type: "bot",
        content: responses[Math.floor(Math.random() * responses.length)]
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  const quickQuestions = [
    "What services do you offer?",
    "How can AI help my business?",
    "I need help with data integration",
    "Do you offer free consultations?"
  ];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg"
          size="icon"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent className="sm:max-w-md p-0 flex flex-col h-full">
        <SheetHeader className="px-4 py-3 border-b">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-blue-100 dark:bg-blue-900 p-1 rounded-full">
                <Bot className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <SheetTitle className="text-lg">DataSphere Assistant</SheetTitle>
            </div>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                <X className="h-4 w-4" />
              </Button>
            </SheetTrigger>
          </div>
        </SheetHeader>
        
        <div className="flex-1 overflow-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.type === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`flex items-start gap-2 max-w-[85%] ${
                  message.type === "user" ? "flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center ${
                    message.type === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 dark:bg-gray-800"
                  }`}
                >
                  {message.type === "user" ? (
                    <User className="h-5 w-5" />
                  ) : (
                    <Bot className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  )}
                </div>
                <div
                  className={`p-3 rounded-lg ${
                    message.type === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 dark:bg-gray-800"
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                </div>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="flex items-start gap-2 max-w-[85%]">
                <div className="flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                  <Bot className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800">
                  <Loader2 className="h-5 w-5 animate-spin" />
                </div>
              </div>
            </div>
          )}
        </div>
        
        {messages.length === 1 && (
          <div className="px-4 py-3">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              Quick questions:
            </p>
            <div className="flex flex-wrap gap-2">
              {quickQuestions.map((question, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="text-xs justify-start"
                  onClick={() => {
                    setInput(question);
                    handleSend();
                  }}
                >
                  <ChevronRight className="h-3 w-3 mr-1" />
                  {question}
                </Button>
              ))}
            </div>
          </div>
        )}
        
        <div className="p-4 border-t mt-auto">
          <div className="flex gap-2">
            <Input
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              className="flex-1"
            />
            <Button
              onClick={handleSend}
              disabled={input.trim() === "" || isTyping}
              size="icon"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
            This is a simulated AI assistant for demonstration purposes.
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}