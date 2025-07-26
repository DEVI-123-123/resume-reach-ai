import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Bot, 
  Brain, 
  MessageCircle, 
  Zap,
  Target,
  TrendingUp,
  Send,
  Sparkles
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ChatMessage {
  id: string;
  type: "user" | "ai";
  message: string;
  timestamp: Date;
}

export const AIEngine = () => {
  const { toast } = useToast();
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      type: "ai",
      message: "Hello! I'm your AI Career Assistant. I can help you with resume optimization, career guidance, and job matching. What would you like to know?",
      timestamp: new Date()
    }
  ]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const aiInsights = [
    {
      title: "Resume-JD Similarity",
      value: "78%",
      description: "Using BERT embeddings for semantic matching",
      icon: Target,
      color: "text-blue-600"
    },
    {
      title: "Skill Extraction Accuracy",
      value: "94%",
      description: "NLP-powered skill identification from resumes",
      icon: Brain,
      color: "text-purple-600"
    },
    {
      title: "Match Predictions",
      value: "89%",
      description: "ML model accuracy for candidate-job fit",
      icon: TrendingUp,
      color: "text-green-600"
    },
    {
      title: "AI Enhancements",
      value: "156",
      description: "Resumes improved this week",
      icon: Sparkles,
      color: "text-yellow-600"
    }
  ];

  const sendMessage = async () => {
    if (!currentMessage.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: "user",
      message: currentMessage,
      timestamp: new Date()
    };

    setChatMessages(prev => [...prev, userMessage]);
    setCurrentMessage("");
    setIsProcessing(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponses = [
        "Based on your resume, I recommend highlighting quantifiable achievements in your work experience. This can increase your resume score by 15-20%.",
        "Your skills align well with data science roles. Consider adding certifications in TensorFlow or PyTorch to strengthen your profile.",
        "The job market for your skillset shows a 23% growth this quarter. I'd suggest targeting mid-to-senior level positions.",
        "Your resume could benefit from more industry-specific keywords. I can help optimize it for better ATS compatibility."
      ];

      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: "ai",
        message: aiResponses[Math.floor(Math.random() * aiResponses.length)],
        timestamp: new Date()
      };

      setChatMessages(prev => [...prev, aiMessage]);
      setIsProcessing(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
          AI Matching Engine
        </h1>
        <p className="text-muted-foreground">
          Advanced NLP and ML models powering intelligent resume-job matching
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
        {aiInsights.map((insight, index) => {
          const Icon = insight.icon;
          return (
            <Card key={index} className="relative overflow-hidden">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <Icon className={`w-5 h-5 ${insight.color}`} />
                  <Badge variant="outline" className="text-xs">
                    Live
                  </Badge>
                </div>
                <div className="text-2xl font-bold mb-1">{insight.value}</div>
                <div className="text-sm font-medium mb-1">{insight.title}</div>
                <div className="text-xs text-muted-foreground">{insight.description}</div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* AI Career Chatbot */}
        <Card className="flex flex-col h-[500px]">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-blue-600" />
              AI Career Assistant
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col">
            <div className="flex-1 overflow-y-auto space-y-4 mb-4">
              {chatMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      msg.type === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    }`}
                  >
                    <div className="text-sm">{msg.message}</div>
                    <div className="text-xs opacity-70 mt-1">
                      {msg.timestamp.toLocaleTimeString()}
                    </div>
                  </div>
                </div>
              ))}
              {isProcessing && (
                <div className="flex justify-start">
                  <div className="bg-muted p-3 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Bot className="w-4 h-4 animate-pulse" />
                      <span className="text-sm">AI is thinking...</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="flex gap-2">
              <Input
                placeholder="Ask about career advice, resume tips, or job matching..."
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={isProcessing}
              />
              <Button 
                onClick={sendMessage}
                disabled={isProcessing || !currentMessage.trim()}
                size="icon"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* AI Model Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-purple-600" />
              Model Performance
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">BERT Embeddings</span>
                  <span className="text-sm text-muted-foreground">94% accuracy</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" style={{width: '94%'}}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Random Forest Classifier</span>
                  <span className="text-sm text-muted-foreground">91% accuracy</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full" style={{width: '91%'}}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">GPT Enhancement</span>
                  <span className="text-sm text-muted-foreground">97% satisfaction</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-gradient-to-r from-yellow-500 to-green-500 h-2 rounded-full" style={{width: '97%'}}></div>
                </div>
              </div>
            </div>

            <div className="border-t border-border pt-4">
              <h4 className="font-semibold mb-2">Recent Improvements</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-yellow-500" />
                  <span>Response time reduced by 35%</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-green-500" />
                  <span>Matching accuracy improved to 89%</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-purple-500" />
                  <span>Added multilingual support</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};