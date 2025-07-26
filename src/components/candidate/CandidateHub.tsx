import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Upload, 
  FileText, 
  Star, 
  TrendingUp, 
  Target,
  Download,
  Lightbulb,
  CheckCircle2
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const CandidateHub = () => {
  const { toast } = useToast();
  const [resumeScore, setResumeScore] = useState(0);
  const [isUploaded, setIsUploaded] = useState(false);
  const [skills, setSkills] = useState<string[]>([]);
  const [improvements, setImprovements] = useState<string[]>([]);

  const handleResumeUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Simulate resume processing
      setTimeout(() => {
        setIsUploaded(true);
        setResumeScore(78);
        setSkills(["JavaScript", "React", "Python", "Machine Learning", "Data Analysis"]);
        setImprovements([
          "Add quantifiable achievements to work experience",
          "Include more technical keywords relevant to target roles",
          "Expand the skills section with specific tools and frameworks"
        ]);
        toast({
          title: "Resume uploaded successfully!",
          description: "AI analysis complete. Check your insights below.",
        });
      }, 2000);
    }
  };

  const enhanceResume = () => {
    toast({
      title: "Resume enhancement started",
      description: "AI is rewriting your resume for better impact.",
    });
    // Simulate enhancement
    setTimeout(() => {
      setResumeScore(85);
      toast({
        title: "Resume enhanced!",
        description: "Your resume score improved to 85/100.",
      });
    }, 3000);
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
          Candidate Hub
        </h1>
        <p className="text-muted-foreground">
          Upload your resume and get AI-powered insights and improvements
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Upload Section */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="w-5 h-5 text-primary" />
              Resume Upload & Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            {!isUploaded ? (
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors">
                <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Upload Your Resume</h3>
                <p className="text-muted-foreground mb-4">
                  Support for PDF and DOCX files. AI will analyze your resume instantly.
                </p>
                <input
                  type="file"
                  accept=".pdf,.docx"
                  onChange={handleResumeUpload}
                  className="hidden"
                  id="resume-upload"
                />
                <Button asChild variant="gradient">
                  <label htmlFor="resume-upload" className="cursor-pointer">
                    Choose File
                  </label>
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-green-600">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="font-medium">Resume uploaded successfully!</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button variant="outline" onClick={enhanceResume}>
                    <Lightbulb className="w-4 h-4 mr-2" />
                    AI Enhance Resume
                  </Button>
                  <Button variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Export Enhanced Resume
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Resume Score */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="w-5 h-5 text-accent" />
              Resume Strength
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">{resumeScore}/100</div>
              <Progress value={resumeScore} className="h-3" />
              <p className="text-sm text-muted-foreground mt-2">
                {resumeScore >= 80 ? "Excellent" : resumeScore >= 60 ? "Good" : "Needs Improvement"}
              </p>
            </div>
            
            {isUploaded && (
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Content Quality</span>
                  <span className="font-medium">85%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>ATS Compatibility</span>
                  <span className="font-medium">75%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Keyword Match</span>
                  <span className="font-medium">70%</span>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Extracted Skills */}
        {isUploaded && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-purple-600" />
                Extracted Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* AI Suggestions */}
        {isUploaded && (
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-accent" />
                AI-Powered Improvements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {improvements.map((improvement, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                    <Lightbulb className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{improvement}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};