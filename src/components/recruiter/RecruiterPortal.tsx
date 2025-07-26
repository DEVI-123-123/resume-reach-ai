import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { 
  Briefcase, 
  Users, 
  Star, 
  FileText, 
  Search,
  TrendingUp,
  CheckCircle2,
  Filter
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Candidate {
  id: string;
  name: string;
  title: string;
  matchScore: number;
  skills: string[];
  experience: string;
  location: string;
}

export const RecruiterPortal = () => {
  const { toast } = useToast();
  const [jobDescription, setJobDescription] = useState("");
  const [isJDAnalyzed, setIsJDAnalyzed] = useState(false);
  const [jdScore, setJdScore] = useState(0);
  const [candidates, setCandidates] = useState<Candidate[]>([]);

  const mockCandidates: Candidate[] = [
    {
      id: "1",
      name: "Sarah Johnson",
      title: "Senior Software Engineer",
      matchScore: 95,
      skills: ["React", "Python", "Machine Learning", "AWS"],
      experience: "5 years",
      location: "San Francisco, CA"
    },
    {
      id: "2",
      name: "Mike Chen",
      title: "Full Stack Developer",
      matchScore: 87,
      skills: ["JavaScript", "Node.js", "React", "MongoDB"],
      experience: "4 years",
      location: "New York, NY"
    },
    {
      id: "3",
      name: "Emily Rodriguez",
      title: "Data Scientist",
      matchScore: 82,
      skills: ["Python", "TensorFlow", "SQL", "Tableau"],
      experience: "3 years",
      location: "Austin, TX"
    }
  ];

  const analyzeJobDescription = () => {
    if (!jobDescription.trim()) {
      toast({
        title: "Please enter a job description",
        variant: "destructive",
      });
      return;
    }

    // Simulate JD analysis
    setTimeout(() => {
      setIsJDAnalyzed(true);
      setJdScore(88);
      setCandidates(mockCandidates);
      toast({
        title: "Job description analyzed!",
        description: "Found 3 matching candidates with high compatibility.",
      });
    }, 2000);
  };

  const getMatchColor = (score: number) => {
    if (score >= 90) return "text-green-600";
    if (score >= 80) return "text-blue-600";
    if (score >= 70) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-2">
          Recruiter Portal
        </h1>
        <p className="text-muted-foreground">
          Post jobs, analyze requirements, and find the perfect candidates with AI
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Job Description Input */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-accent" />
              Job Description Analysis
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              placeholder="Paste your job description here..."
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              className="min-h-[200px] resize-none"
            />
            <div className="flex gap-2">
              <Button variant="gradient" onClick={analyzeJobDescription}>
                <Search className="w-4 h-4 mr-2" />
                Analyze & Find Candidates
              </Button>
              {isJDAnalyzed && (
                <Button variant="outline">
                  <Filter className="w-4 h-4 mr-2" />
                  Refine Criteria
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* JD Quality Score */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="w-5 h-5 text-primary" />
              JD Quality Score
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">{jdScore}/100</div>
              <Progress value={jdScore} className="h-3" />
              <p className="text-sm text-muted-foreground mt-2">
                {jdScore >= 85 ? "Excellent" : jdScore >= 70 ? "Good" : "Needs Improvement"}
              </p>
            </div>
            
            {isJDAnalyzed && (
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Clarity</span>
                  <span className="font-medium">90%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Completeness</span>
                  <span className="font-medium">85%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Bias-Free</span>
                  <span className="font-medium">92%</span>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Candidate Matches */}
        {candidates.length > 0 && (
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-purple-600" />
                Top Candidate Matches
                <Badge variant="secondary">{candidates.length} found</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {candidates.map((candidate) => (
                  <Card key={candidate.id} className="relative hover:shadow-lg transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-semibold">{candidate.name}</h3>
                          <p className="text-sm text-muted-foreground">{candidate.title}</p>
                        </div>
                        <div className="text-right">
                          <div className={`text-lg font-bold ${getMatchColor(candidate.matchScore)}`}>
                            {candidate.matchScore}%
                          </div>
                          <div className="text-xs text-muted-foreground">Match</div>
                        </div>
                      </div>
                      
                      <div className="space-y-2 mb-3">
                        <div className="text-sm">
                          <span className="text-muted-foreground">Experience: </span>
                          <span className="font-medium">{candidate.experience}</span>
                        </div>
                        <div className="text-sm">
                          <span className="text-muted-foreground">Location: </span>
                          <span className="font-medium">{candidate.location}</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="text-sm font-medium">Key Skills:</div>
                        <div className="flex flex-wrap gap-1">
                          {candidate.skills.slice(0, 3).map((skill) => (
                            <Badge key={skill} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                          {candidate.skills.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{candidate.skills.length - 3}
                            </Badge>
                          )}
                        </div>
                      </div>

                      <div className="mt-4 pt-3 border-t border-border">
                        <Button size="sm" className="w-full">
                          View Full Profile
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};