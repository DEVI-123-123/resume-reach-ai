import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  FileText, 
  Bot, 
  BarChart3, 
  Menu, 
  X,
  User,
  Briefcase,
  LogOut
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavigationProps {
  currentModule: string;
  onModuleChange: (module: string) => void;
}

export const Navigation = ({ currentModule, onModuleChange }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { signOut, profile } = useAuth();

  const modules = [
    { id: "candidate", icon: User, label: "Candidate Hub", color: "text-primary" },
    { id: "recruiter", icon: Briefcase, label: "Recruiter Portal", color: "text-accent" },
    { id: "ai-engine", icon: Bot, label: "AI Engine", color: "text-purple-600" },
    { id: "analytics", icon: BarChart3, label: "Analytics", color: "text-orange-600" },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              ResumeMatch AI
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {modules.map((module) => {
              const Icon = module.icon;
              return (
                <Button
                  key={module.id}
                  variant={currentModule === module.id ? "gradient" : "ghost"}
                  size="sm"
                  onClick={() => onModuleChange(module.id)}
                  className={cn(
                    "relative group",
                    currentModule === module.id && "shadow-lg"
                  )}
                >
                  <Icon className={cn("w-4 h-4", module.color)} />
                  <span className="font-medium">{module.label}</span>
                  {currentModule === module.id && (
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full" />
                  )}
                </Button>
              );
            })}
            
            {/* User Menu */}
            <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-border">
              <span className="text-sm text-muted-foreground">
                {profile?.full_name || 'User'}
              </span>
              <Button
                variant="ghost"
                size="icon"
                onClick={signOut}
                className="text-muted-foreground hover:text-destructive"
              >
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-2">
              {modules.map((module) => {
                const Icon = module.icon;
                return (
                  <Button
                    key={module.id}
                    variant={currentModule === module.id ? "gradient" : "ghost"}
                    size="sm"
                    onClick={() => {
                      onModuleChange(module.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className="justify-start"
                  >
                    <Icon className={cn("w-4 h-4", module.color)} />
                    <span className="font-medium">{module.label}</span>
                  </Button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};