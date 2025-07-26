import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  Users, 
  TrendingUp, 
  FileText,
  Download,
  Eye,
  UserCheck,
  Briefcase,
  Clock,
  Target
} from "lucide-react";

export const AnalyticsDashboard = () => {
  const stats = [
    {
      title: "Total Resumes Processed",
      value: "2,847",
      change: "+12%",
      trend: "up",
      icon: FileText,
      color: "text-blue-600"
    },
    {
      title: "Active Recruiters",
      value: "156",
      change: "+8%",
      trend: "up",
      icon: Users,
      color: "text-green-600"
    },
    {
      title: "Successful Matches",
      value: "1,234",
      change: "+23%",
      trend: "up",
      icon: UserCheck,
      color: "text-purple-600"
    },
    {
      title: "Job Postings",
      value: "567",
      change: "+15%",
      trend: "up",
      icon: Briefcase,
      color: "text-orange-600"
    }
  ];

  const recentActivity = [
    {
      type: "resume",
      title: "New resume uploaded",
      user: "Sarah Johnson",
      time: "2 mins ago",
      score: 85
    },
    {
      type: "match",
      title: "High match found",
      user: "Tech Corp",
      time: "5 mins ago", 
      score: 94
    },
    {
      type: "job",
      title: "Job description posted",
      user: "StartupXYZ",
      time: "12 mins ago",
      score: 78
    },
    {
      type: "enhancement",
      title: "Resume enhanced",
      user: "Mike Chen",
      time: "18 mins ago",
      score: 92
    }
  ];

  const topMatches = [
    { candidate: "Emily Rodriguez", job: "Senior Data Scientist", company: "DataTech Inc", score: 96 },
    { candidate: "David Kim", job: "Full Stack Developer", company: "WebSolutions", score: 94 },
    { candidate: "Lisa Wang", job: "ML Engineer", company: "AI Innovations", score: 92 },
    { candidate: "Carlos Martinez", job: "Backend Developer", company: "CloudCorp", score: 89 }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
          Analytics Dashboard
        </h1>
        <p className="text-muted-foreground">
          Comprehensive insights into platform performance and user engagement
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-sm text-green-600 font-medium">
                      {stat.change} from last month
                    </p>
                  </div>
                  <div className={`p-3 rounded-full bg-muted`}>
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-600" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <div>
                      <p className="font-medium text-sm">{activity.title}</p>
                      <p className="text-xs text-muted-foreground">{activity.user} • {activity.time}</p>
                    </div>
                  </div>
                  <Badge variant={activity.score >= 90 ? "default" : "secondary"}>
                    {activity.score}%
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Matches */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-green-600" />
              Top Matches Today
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topMatches.map((match, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div>
                    <p className="font-medium text-sm">{match.candidate}</p>
                    <p className="text-xs text-muted-foreground">
                      {match.job} at {match.company}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-600">{match.score}%</div>
                    <div className="text-xs text-muted-foreground">Match</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Performance Overview */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-purple-600" />
              Platform Performance Overview
            </CardTitle>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Eye className="w-4 h-4 mr-2" />
                View Details
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export Report
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h4 className="font-semibold">AI Model Accuracy</h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Resume Parsing</span>
                      <span>94%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{width: '94%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Job Matching</span>
                      <span>89%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '89%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Skill Extraction</span>
                      <span>96%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{width: '96%'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold">User Engagement</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Daily Active Users</span>
                    <span className="font-medium">1,247</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Avg. Session Duration</span>
                    <span className="font-medium">12m 34s</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Feature Adoption</span>
                    <span className="font-medium">78%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">User Satisfaction</span>
                    <span className="font-medium">4.8/5</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold">System Health</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">API Response Time</span>
                    <span className="font-medium text-green-600">245ms</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Uptime</span>
                    <span className="font-medium text-green-600">99.9%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Error Rate</span>
                    <span className="font-medium text-green-600">0.02%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Processing Queue</span>
                    <span className="font-medium text-green-600">12 jobs</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};