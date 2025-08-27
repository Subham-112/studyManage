import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  Users,
  BookOpen,
  Calendar,
  DollarSign,
  TrendingUp,
  Shield,
  Clock,
  MessageSquare,
  CheckCircle,
  Star,
  ArrowRight,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const features = [
    {
      icon: Users,
      title: "Student Management",
      description: "Complete student lifecycle management with profiles, enrollment tracking, and academic records."
    },
    {
      icon: GraduationCap,
      title: "Teacher Portal",
      description: "Dedicated teacher dashboard for class management, grading, and student communication."
    },
    {
      icon: Calendar,
      title: "Smart Attendance",
      description: "Automated attendance tracking with biometric integration and parent notifications."
    },
    {
      icon: DollarSign,
      title: "Fee Management",
      description: "Streamlined fee collection with online payments, invoicing, and automated reminders."
    },
    {
      icon: BookOpen,
      title: "Course & Batch Management",
      description: "Organize courses, create batches, assign teachers, and manage timetables efficiently."
    },
    {
      icon: TrendingUp,
      title: "Analytics & Reports",
      description: "Comprehensive insights into student performance, attendance patterns, and institutional growth."
    }
  ];

  const plans = [
    {
      name: "Starter",
      price: "₹2,999",
      period: "/month",
      description: "Perfect for small schools",
      features: [
        "Up to 100 students",
        "5 teachers",
        "Basic attendance tracking",
        "Fee management",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "₹5,999",
      period: "/month",
      description: "For growing institutions",
      features: [
        "Up to 500 students",
        "25 teachers",
        "Advanced analytics",
        "Parent portal access",
        "SMS notifications",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "₹12,999",
      period: "/month",
      description: "For large institutions",
      features: [
        "Unlimited students",
        "Unlimited teachers",
        "Custom integrations",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom features"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="gradient-primary p-2 rounded-lg">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold">EduManage Pro</h1>
                <p className="text-xs text-muted-foreground">Education Management System</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <a href="#features" className="text-sm hover:text-primary transition-smooth">Features</a>
              <a href="#pricing" className="text-sm hover:text-primary transition-smooth">Pricing</a>
              <a href="#contact" className="text-sm hover:text-primary transition-smooth">Contact</a>
              <Link to="/login">
                <Button variant="outline" size="sm">Login</Button>
              </Link>
              <Link to="/signup">
                <Button variant="gradient" size="sm">Get Started</Button>
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 space-y-3">
              <a href="#features" className="block text-sm hover:text-primary transition-smooth">Features</a>
              <a href="#pricing" className="block text-sm hover:text-primary transition-smooth">Pricing</a>
              <a href="#contact" className="block text-sm hover:text-primary transition-smooth">Contact</a>
              <div className="flex gap-3 mt-4">
                <Link to="/login" className="flex-1">
                  <Button variant="outline" size="sm" className="w-full">Login</Button>
                </Link>
                <Link to="/signup" className="flex-1">
                  <Button variant="gradient" size="sm" className="w-full">Get Started</Button>
                </Link>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <Badge className="mb-6 bg-secondary text-foreground border-border hover-lift">
          🎉 Transform Your Educational Institution Today
        </Badge>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Complete Education
          <span className="block text-primary">
            Management Solution
          </span>
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Streamline student management, attendance tracking, fee collection, and academic operations 
          with our comprehensive SaaS platform designed for modern educational institutions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link to="/signup">
            <Button variant="hero" size="xl" className="hover-lift">
              Start Free Trial
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
          <Button variant="outline" size="xl" className="hover-lift">
            Watch Demo
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {[
            { number: "10K+", label: "Students Managed" },
            { number: "500+", label: "Schools Using" },
            { number: "99%", label: "Uptime Guarantee" },
            { number: "24/7", label: "Support Available" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-2xl font-bold text-primary">{stat.number}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">Features</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need to Manage Your Institution
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From student enrollment to fee collection, our platform covers every aspect of educational management
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover-lift shadow-card border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="gradient-primary p-3 rounded-lg w-fit mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-success/10 text-success border-success/20">Admin & Teacher Panels</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Dashboards for Every Role
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tailored interfaces for administrators and teachers with role-based access control
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="hover-lift shadow-card border-0">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary p-2 rounded-lg">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <CardTitle>Admin Dashboard</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                "Complete institutional overview",
                "Student & teacher management", 
                "Batch & course administration",
                "Fee collection & analytics",
                "System-wide reporting"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
              <div className="pt-4">
                <Link to="/admin">
                  <Button variant="outline" className="w-full hover-lift">
                    View Admin Panel
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift shadow-card border-0">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-accent p-2 rounded-lg">
                  <GraduationCap className="h-5 w-5 text-white" />
                </div>
                <CardTitle>Teacher Dashboard</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                "Class schedule & management",
                "Student attendance tracking",
                "Grade & assignment management",
                "Parent communication tools",
                "Performance analytics"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
              <div className="pt-4">
                <Link to="/teacher">
                  <Button variant="outline" className="w-full hover-lift">
                    View Teacher Panel
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="container mx-auto px-4 py-20 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-3xl my-20">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-warning/10 text-warning border-warning/20">Pricing</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose the Perfect Plan for Your Institution
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Flexible pricing that grows with your institution. No setup fees, cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`hover-lift shadow-card border-0 relative ${plan.popular ? 'ring-2 ring-primary' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="gradient-primary text-white px-4 py-1">
                    <Star className="h-3 w-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-success" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant={plan.popular ? "gradient" : "outline"} 
                  className="w-full hover-lift"
                >
                  {plan.popular ? "Get Started Now" : "Start Free Trial"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="gradient-primary p-12 rounded-3xl text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Institution?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of educational institutions already using EduManage Pro to streamline their operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button variant="secondary" size="xl" className="hover-lift">
                Start Free Trial
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Button variant="outline" size="xl" className="hover-lift border-white/20 text-white hover:bg-white/10">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="gradient-primary p-2 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <span className="font-bold text-lg">EduManage Pro</span>
              </div>
              <p className="text-muted-foreground">
                Complete education management solution for modern institutions.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-muted-foreground hover:text-primary transition-smooth">Features</a></li>
                <li><a href="#pricing" className="text-muted-foreground hover:text-primary transition-smooth">Pricing</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Demo</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Help Center</a></li>
                <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-smooth">Contact</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Documentation</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">About</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Careers</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Privacy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center">
            <p className="text-muted-foreground">
              © 2024 EduManage Pro. All rights reserved. Built with ❤️ for education.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;