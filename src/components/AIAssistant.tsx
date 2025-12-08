import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { MessageCircle, X, Send, Sparkles, Bot, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type Message = { role: "user" | "assistant"; content: string };

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const streamChat = async (userMessage: string) => {
    const newMessages = [...messages, { role: "user" as const, content: userMessage }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/portfolio-chat`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
          },
          body: JSON.stringify({ messages: newMessages }),
        }
      );

      if (!response.ok || !response.body) {
        throw new Error("Failed to connect to AI");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let assistantMessage = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() || "";

        for (let line of lines) {
          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (line.startsWith(":") || line.trim() === "") continue;
          if (!line.startsWith("data: ")) continue;

          const jsonStr = line.slice(6).trim();
          if (jsonStr === "[DONE]") continue;

          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content;
            if (content) {
              assistantMessage += content;
              setMessages((prev) => {
                const last = prev[prev.length - 1];
                if (last?.role === "assistant") {
                  return prev.map((m, i) =>
                    i === prev.length - 1 ? { ...m, content: assistantMessage } : m
                  );
                }
                return [...prev, { role: "assistant", content: assistantMessage }];
              });
            }
          } catch {
            // Ignore parsing errors
          }
        }
      }
    } catch (error) {
      console.error("Chat error:", error);
      toast({
        title: "Error",
        description: "Failed to get response. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    const userMessage = input;
    setInput("");
    await streamChat(userMessage);
  };

  const suggestedQuestions = [
    "What projects has Venkat worked on?",
    "What are Venkat's main skills?",
    "Tell me about Venkat's experience",
  ];

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <motion.button
              onClick={() => setIsOpen(true)}
              className="relative h-14 w-14 rounded-full bg-gradient-primary shadow-elegant hover:shadow-glow transition-all duration-300 flex items-center justify-center group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="h-6 w-6 text-primary-foreground" />
              <motion.div
                className="absolute -top-1 -right-1"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="h-4 w-4 text-accent" />
              </motion.div>
              
              {/* Pulse ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-accent"
                animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <Card className="w-96 h-[600px] flex flex-col shadow-elegant border-primary/20 overflow-hidden backdrop-blur-xl bg-card/95">
              {/* Header */}
              <motion.div
                className="flex items-center justify-between p-4 border-b bg-gradient-primary text-primary-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Bot className="h-5 w-5" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold">AI Assistant</h3>
                    <div className="flex items-center gap-1">
                      <motion.div
                        className="w-2 h-2 bg-green-400 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <span className="text-xs opacity-80">Online</span>
                    </div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-white/20 text-primary-foreground"
                >
                  <X className="h-4 w-4" />
                </Button>
              </motion.div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.length === 0 && (
                  <motion.div
                    className="text-center space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="w-16 h-16 mx-auto rounded-full bg-gradient-accent/20 flex items-center justify-center">
                      <Sparkles className="w-8 h-8 text-accent" />
                    </div>
                    <div>
                      <p className="text-foreground font-medium">Hi there! 👋</p>
                      <p className="text-sm text-muted-foreground">
                        Ask me anything about Venkat's portfolio!
                      </p>
                    </div>
                    <div className="space-y-2">
                      {suggestedQuestions.map((question, index) => (
                        <motion.button
                          key={index}
                          className="w-full text-left px-4 py-2 text-sm bg-secondary/50 hover:bg-secondary rounded-lg transition-colors text-foreground"
                          onClick={() => streamChat(question)}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {question}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {msg.role === "assistant" && (
                      <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                        <Bot className="w-4 h-4 text-primary-foreground" />
                      </div>
                    )}
                    <div
                      className={`max-w-[75%] rounded-2xl px-4 py-2 ${
                        msg.role === "user"
                          ? "bg-gradient-primary text-primary-foreground rounded-br-md"
                          : "bg-secondary text-secondary-foreground rounded-bl-md"
                      }`}
                    >
                      <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                    </div>
                    {msg.role === "user" && (
                      <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                        <User className="w-4 h-4 text-accent-foreground" />
                      </div>
                    )}
                  </motion.div>
                ))}

                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex gap-2 justify-start"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                      <Bot className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <div className="bg-secondary text-secondary-foreground rounded-2xl rounded-bl-md px-4 py-3">
                      <div className="flex gap-1">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            className="w-2 h-2 rounded-full bg-accent"
                            animate={{ y: [0, -6, 0] }}
                            transition={{
                              duration: 0.6,
                              repeat: Infinity,
                              delay: i * 0.15,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <motion.div
                className="p-4 border-t bg-card/50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSend();
                  }}
                  className="flex gap-2"
                >
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                    disabled={isLoading}
                    className="flex-1 bg-secondary/50 border-border/50 focus:border-accent"
                  />
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      type="submit"
                      disabled={isLoading || !input.trim()}
                      size="icon"
                      className="bg-gradient-primary hover:opacity-90"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </motion.div>
                </form>
              </motion.div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistant;
