import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  GraduationCap, 
  BookOpen, 
  Calendar,
  Clock,
  FileText,
  MessageSquare,
  TrendingUp,
  Settings,
  LogOut,
  Bell,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const TeacherDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const todayClasses = [
    { subject: "Mathematics", batch: "Grade 10-A", time: "09:00 AM", students: 28, status: "upcoming" },
    { subject: "Physics", batch: "Grade 12-B", time: "11:00 AM", students: 25, status: "completed" },
    { subject: "Chemistry", batch: "Grade 11-A", time: "02:00 PM", students: 30, status: "ongoing" },
    { subject: "Mathematics", batch: "Grade 9-C", time: "04:00 PM", students: 22, status: "upcoming" }
  ];

  const stats = [
    {
      title: "My Batches",
      value: "6",
      description: "Active batches assigned",
      icon: BookOpen,
      color: "text-primary"
    },
    {
      title: "Total Students",
      value: "156",
      description: "Across all batches",
      icon: Users,
      color: "text-success"
    },
    {
      title: "Today's Classes",
      value: "4",
      description: "Scheduled for today",
      icon: Calendar,
      color: "text-accent"
    },
    {
      title: "Attendance Rate",
      value: "87%",
      description: "Average this month",
      icon: TrendingUp,
      color: "text-warning"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/10 to-accent/5">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-4">
            <div className="gradient-primary p-2 rounded-lg">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold">EduManage Pro</h1>
              <p className="text-sm text-muted-foreground">Teacher Dashboard</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
            <Link to="/">
              <Button variant="ghost" size="icon">
                <LogOut className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 border-r bg-card/30 backdrop-blur-sm p-4 space-y-2">
          {[
            { id: "dashboard", label: "Dashboard", icon: TrendingUp },
            { id: "batches", label: "My Batches", icon: BookOpen },
            { id: "students", label: "Students", icon: Users },
            { id: "attendance", label: "Attendance", icon: CheckCircle },
            { id: "materials", label: "Study Materials", icon: FileText },
            { id: "messages", label: "Messages", icon: MessageSquare },
            { id: "schedule", label: "Schedule", icon: Calendar },
          ].map((item) => (
            <Button
              key={item.id}
              variant={activeTab === item.id ? "secondary" : "ghost"}
              className="w-full justify-start hover-lift"
              onClick={() => setActiveTab(item.id)}
            >
              <item.icon className="h-4 w-4 mr-2" />
              {item.label}
            </Button>
          ))}
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 space-y-6">
          {/* Welcome Section */}
          <div className="gradient-primary p-6 rounded-lg text-white">
            <h2 className="text-2xl font-bold mb-2">Good Morning, Prof. Johnson! 👋</h2>
            <p className="opacity-90">You have 4 classes today. Ready to inspire young minds?</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="hover-lift shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        {stat.title}
                      </p>
                      <p className="text-2xl font-bold">{stat.value}</p>
                      <p className="text-sm text-muted-foreground">
                        {stat.description}
                      </p>
                    </div>
                    <div className={`p-3 rounded-full bg-secondary ${stat.color}`}>
                      <stat.icon className="h-5 w-5" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Today's Schedule */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Today's Schedule
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {todayClasses.map((classItem, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg hover-lift">
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <Clock className="h-5 w-5 mx-auto mb-1 text-muted-foreground" />
                      <p className="text-sm font-medium">{classItem.time}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">{classItem.subject}</h4>
                      <p className="text-sm text-muted-foreground">{classItem.batch}</p>
                      <p className="text-xs text-muted-foreground">{classItem.students} students</p>
                    </div>
                  </div>
                  <Badge 
                    variant={classItem.status === "completed" ? "default" : 
                           classItem.status === "ongoing" ? "destructive" : "secondary"}
                  >
                    {classItem.status}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Button variant="outline" className="h-20 flex-col hover-lift">
                  <CheckCircle className="h-6 w-6 mb-2" />
                  Mark Attendance
                </Button>
                <Button variant="outline" className="h-20 flex-col hover-lift">
                  <FileText className="h-6 w-6 mb-2" />
                  Upload Material
                </Button>
                <Button variant="outline" className="h-20 flex-col hover-lift">
                  <MessageSquare className="h-6 w-6 mb-2" />
                  Send Message
                </Button>
                <Button variant="outline" className="h-20 flex-col hover-lift">
                  <TrendingUp className="h-6 w-6 mb-2" />
                  View Reports
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default TeacherDashboard;