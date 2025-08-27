import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GraduationCap, Mail, Lock, User, UserCheck } from "lucide-react";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Signup logic will be implemented with Supabase integration
    console.log("Signup attempt:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/20 to-accent/10 p-4">
      <Card className="w-full max-w-md shadow-card hover-lift">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="gradient-primary p-3 rounded-full">
              <GraduationCap className="h-8 w-8 text-white" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold">Create Account</CardTitle>
          <p className="text-muted-foreground">Join our education platform</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Full Name
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
                className="transition-smooth focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
                className="transition-smooth focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="flex items-center gap-2">
                <Lock className="h-4 w-4" />
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                required
                className="transition-smooth focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <UserCheck className="h-4 w-4" />
                Role
              </Label>
              <Select onValueChange={(value) => setFormData({...formData, role: value})}>
                <SelectTrigger className="transition-smooth focus:ring-2 focus:ring-primary">
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="teacher">Teacher</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" variant="gradient" size="lg" className="w-full">
              Create Account
            </Button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link to="/login" className="text-primary hover:underline font-medium">
                Sign in
              </Link>
            </p>
          </div>
          <div className="mt-4 text-center">
            <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
              ← Back to home
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Signup;