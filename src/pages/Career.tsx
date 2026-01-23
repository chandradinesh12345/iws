import { ResizableNavbar } from "@/components/ResizableNavbar";
import { Footer } from "@/components/Footer";
import { Briefcase, MapPin, Clock, ArrowRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const openings = [
  {
    id: 1,
    title: "Senior React Developer",
    type: "Full-time",
    location: "Mumbai / Remote",
    experience: "3-5 years",
    description: "We're looking for an experienced React developer to build cutting-edge web applications.",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Full Stack Developer",
    type: "Full-time",
    location: "Mumbai",
    experience: "2-4 years",
    description: "Join our team to build end-to-end solutions using modern technologies.",
    skills: ["Node.js", "React", "MongoDB", "AWS"],
  },
  {
    id: 3,
    title: "UI/UX Designer",
    type: "Full-time",
    location: "Remote",
    experience: "2-3 years",
    description: "Create beautiful and intuitive user interfaces for our clients' products.",
    skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
  },
  {
    id: 4,
    title: "Digital Marketing Executive",
    type: "Full-time",
    location: "Mumbai",
    experience: "1-3 years",
    description: "Drive our clients' online presence through strategic digital marketing campaigns.",
    skills: ["SEO", "Google Ads", "Social Media", "Analytics"],
  },
];

const benefits = [
  "Competitive salary packages",
  "Flexible work hours",
  "Remote work options",
  "Health insurance",
  "Learning & development budget",
  "Team outings & events",
];

const Career = () => {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "We'll review your application and get back to you soon.",
    });
    setFormData({ name: "", email: "", phone: "", position: "", message: "" });
    setSelectedJob(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <ResizableNavbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative noise-bg">
        <div className="absolute inset-0 bg-[image:var(--gradient-hero)] opacity-50" />
        <div className="section-container relative">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Join Our Team
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Build Your <span className="text-gradient">Career</span> With Us
            </h1>
            <p className="text-lg text-muted-foreground">
              Join a team of passionate professionals dedicated to creating innovative technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="pt-10 bg-secondary/30">
        <div className="section-container">
          <h2 className="text-2xl font-bold text-center mb-10">Why Work With Us?</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-10">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Current <span className="text-gradient">Openings</span>
            </h2>
            <p className="text-muted-foreground">Find your perfect role and join our growing team.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {openings.map((job) => (
              <div
                key={job.id}
                className={`p-6 rounded-2xl bg-card border transition-all duration-300 cursor-pointer ${
                  selectedJob === job.id ? "border-primary" : "border-border hover:border-primary/50"
                }`}
                onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {job.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {job.experience}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className={`w-5 h-5 text-primary transition-transform ${selectedJob === job.id ? "rotate-90" : ""}`} />
                </div>
                <p className="text-muted-foreground mb-4">{job.description}</p>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-10 bg-secondary/30">
        <div className="section-container">
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6 p-8 rounded-2xl bg-card border border-border">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-4">Apply Now</h2>
                <p className="text-muted-foreground">Send us your details and we'll get back to you.</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                <Input
                  type="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
                <Input
                  placeholder="Position Applying For *"
                  value={formData.position}
                  onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                  required
                />
              </div>
              <Textarea
                placeholder="Tell us about yourself..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
              />
              <Button type="submit" className="w-full" style={{ background: "var(--gradient-primary)" }}>
                <Send className="w-4 h-4 mr-2" />
                Submit Application
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Career;
