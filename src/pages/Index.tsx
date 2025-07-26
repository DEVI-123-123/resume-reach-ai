import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Navigation } from "@/components/Navigation";
import { CandidateHub } from "@/components/candidate/CandidateHub";
import { RecruiterPortal } from "@/components/recruiter/RecruiterPortal";
import { AIEngine } from "@/components/ai/AIEngine";
import { AnalyticsDashboard } from "@/components/analytics/AnalyticsDashboard";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

const Index = () => {
  const [currentModule, setCurrentModule] = useState("candidate");
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth');
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30 flex items-center justify-center">
        <Card className="w-80">
          <CardContent className="flex flex-col items-center justify-center p-8">
            <Loader2 className="h-8 w-8 animate-spin text-primary mb-4" />
            <p className="text-muted-foreground">Loading...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect to auth
  }

  const renderModule = () => {
    switch (currentModule) {
      case "candidate":
        return <CandidateHub />;
      case "recruiter":
        return <RecruiterPortal />;
      case "ai-engine":
        return <AIEngine />;
      case "analytics":
        return <AnalyticsDashboard />;
      default:
        return <CandidateHub />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      <Navigation currentModule={currentModule} onModuleChange={setCurrentModule} />
      <main className="container mx-auto px-4 py-8">
        {renderModule()}
      </main>
    </div>
  );
};

export default Index;
