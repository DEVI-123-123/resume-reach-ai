import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { CandidateHub } from "@/components/candidate/CandidateHub";
import { RecruiterPortal } from "@/components/recruiter/RecruiterPortal";
import { AIEngine } from "@/components/ai/AIEngine";
import { AnalyticsDashboard } from "@/components/analytics/AnalyticsDashboard";

const Index = () => {
  const [currentModule, setCurrentModule] = useState("candidate");

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
