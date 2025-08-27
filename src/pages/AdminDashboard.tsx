import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  GraduationCap, 
  BookOpen, 
  Calendar,
  DollarSign,
  TrendingUp,
  AlertCircle,
  Settings,
  LogOut,
  Bell
} from "lucide-react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const stats = [
    {
      title: "Total Students",
      value: "1,247",
      change: "+12%",
      icon: Users,
      color: "text-primary"
    },
    {
      title: "Active Teachers",
      value: "89",
      change: "+5%", 
      icon: GraduationCap,
      color: "text-success"
    },
    {
      title: "Running Batches",
      value: "32",
      change: "+8%",
      icon: BookOpen,
      color: "text-accent"
    },
    {
      title: "Monthly Revenue",
      value: "₹2,45,600",
      change: "+18%",
      icon: DollarSign,
      color: "text-warning"
    }
  ];

  const alerts = [
    { message: "15 students have pending fees", type: "warning" },
    { message: "Low attendance in Batch-A", type: "error" },
    { message: "New teacher registration pending", type: "info" }
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
              <p className="text-sm text-muted-foreground">Admin Dashboard</p>
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
            { id: "students", label: "Students", icon: Users },
            { id: "teachers", label: "Teachers", icon: GraduationCap },
            { id: "batches", label: "Batches", icon: BookOpen },
            { id: "attendance", label: "Attendance", icon: Calendar },
            { id: "fees", label: "Fee Management", icon: DollarSign },
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
                      <p className="text-sm text-success">
                        {stat.change} from last month
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

          {/* Alerts */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                Quick Alerts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {alerts.map((alert, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg hover-lift">
                  <p className="text-sm">{alert.message}</p>
                  <Badge variant={alert.type === "warning" ? "destructive" : "secondary"}>
                    {alert.type}
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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button variant="outline" className="h-20 flex-col hover-lift">
                  <Users className="h-6 w-6 mb-2" />
                  Add Student
                </Button>
                <Button variant="outline" className="h-20 flex-col hover-lift">
                  <GraduationCap className="h-6 w-6 mb-2" />
                  Add Teacher
                </Button>
                <Button variant="outline" className="h-20 flex-col hover-lift">
                  <BookOpen className="h-6 w-6 mb-2" />
                  Create Batch
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;