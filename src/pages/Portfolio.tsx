import { ResizableNavbar } from "@/components/ResizableNavbar";
import { Footer } from "@/components/Footer";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "A full-featured e-commerce platform with payment integration, inventory management, and analytics dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "#",
  },
  {
    id: 2,
    title: "Healthcare Mobile App",
    category: "Mobile Development",
    description: "Patient management app with appointment scheduling, telemedicine, and health tracking features.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
    technologies: ["Flutter", "Firebase", "Node.js"],
    link: "#",
  },
  {
    id: 3,
    title: "Survey GPT Platform",
    category: "AI & Software",
    description: "AI-powered survey platform using GPT technology for intelligent data collection and analysis.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    technologies: ["Python", "OpenAI", "React", "PostgreSQL"],
    link: "#",
  },
  {
    id: 4,
    title: "Restaurant Chain Website",
    category: "Web Development",
    description: "Multi-location restaurant website with online ordering, reservations, and loyalty program.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
    technologies: ["Next.js", "Tailwind CSS", "Supabase"],
    link: "#",
  },
  {
    id: 5,
    title: "Fitness Tracking App",
    category: "Mobile Development",
    description: "Comprehensive fitness app with workout plans, nutrition tracking, and social features.",
    image: "https://images.unsplash.com/photo-1461896836934- voices?w=600&h=400&fit=crop",
    technologies: ["React Native", "Node.js", "MongoDB"],
    link: "#",
  },
  {
    id: 6,
    title: "Real Estate Portal",
    category: "Web Development",
    description: "Property listing platform with virtual tours, mortgage calculator, and agent matching.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    technologies: ["React", "Laravel", "MySQL"],
    link: "#",
  },
  {
    id: 7,
    title: "Digital Marketing Dashboard",
    category: "Digital Marketing",
    description: "Unified marketing analytics dashboard integrating multiple ad platforms and social media.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    technologies: ["Vue.js", "Python", "AWS"],
    link: "#",
  },
  {
    id: 8,
    title: "Enterprise CRM System",
    category: "AI & Software",
    description: "Custom CRM with AI-powered lead scoring, automation, and comprehensive reporting.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    technologies: ["React", "Node.js", "PostgreSQL", "AI/ML"],
    link: "#",
  },
];

const categories = ["All", "Web Development", "Mobile Development", "AI & Software", "Digital Marketing"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <ResizableNavbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-12 relative noise-bg">
          <div className="section-container text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Our Portfolio
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-gradient">Success Stories</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our portfolio of successful projects across various industries and technologies.
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="py-6 border-b border-border">
          <div className="section-container">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                    ${activeCategory === category
                      ? "text-primary-foreground"
                      : "bg-secondary text-muted-foreground hover:text-foreground"
                    }
                  `}
                  style={activeCategory === category ? { background: "var(--gradient-primary)" } : {}}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16">
          <div className="section-container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="group rounded-2xl overflow-hidden bg-card border border-border card-hover"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                      <a 
                        href={project.link}
                        className="w-12 h-12 rounded-full bg-card flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                      <a 
                        href="#"
                        className="w-12 h-12 rounded-full bg-card flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold text-primary-foreground"
                        style={{ background: "var(--gradient-primary)" }}>
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-2 py-1 rounded-md bg-secondary text-xs text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 relative noise-bg">
          <div className="section-container">
            <div className="text-center p-12 rounded-3xl border border-border bg-card">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Have a Project in Mind?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Let's work together to bring your vision to life. Contact us today to discuss your next project.
              </p>
              <a href="/contact" className="btn-primary">
                Start Your Project
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
