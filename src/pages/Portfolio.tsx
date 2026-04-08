import { ResizableNavbar } from "@/components/ResizableNavbar";
import { Footer } from "@/components/Footer";
import { ExternalLink } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";


import cashinbuck from "../assets/cashinbuck.png";
import autozcrave from "../assets/autozcrave.png";
import medikosh from "../assets/medikosh.png";
import rewardpayu from "../assets/rewardpayu.png";
import aarushws from "../assets/aarushws.png";
import flexrewards from "../assets/flexrewards.png";
import onesupportonelife from "../assets/onesupportonelife.png";
import bijatech from "../assets/bijatech.png";

const projects = [
  {
    id: 1,
    title: "Survey Platform",
    category: "Web Development",
    description: "A rewards platform curating exciting, high-quality earning opportunities, prioritizing your time and maximizing your rewards.",
    image: cashinbuck,
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL"],
    link: "https://cashinbucks.com/",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "Medikosh is an online store offers largest range of Homeopathic and Ayurvedic Medicines",
    image: medikosh,
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "CI", "MySQL"],
    link: "https://medikosh.com/",
  },
  {
    id: 3,
    title: "Survey Platform",
    category: "Web Development",
    description: "Complete tasks, play games, and take surveys to earn coins. Instantly Withdraw to PayPal, Bitcoin, Ethereum, and Gift Cards.",
    image: rewardpayu,
    technologies: ["HTML", "Tailwind CSS", "PHP", "MySQL"],
    link: "https://rewardpayu.com/",
  },
  {
    id: 4,
    title: "Aarush Welfare Society",
    category: "Web Development",
    description: "Aarush Welfare Society is a nationally registered non-profit organization under the Society Registration Act, 1860. ",
    image: aarushws,
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL"],
    link: "https://aarushws.org/",
  },
  {
    id: 5,
    title: "Get paid surveys",
    category: "Web Development",
    description: "Earn up to $3,000 per offer • 10,000+ offers available now",
    image: flexrewards,
    technologies: ["React", "Tailwind CSS", "API Integration", "Node.js", "MongoDB"],
    link: "https://flexrewards.net/",
  },
  {
    id: 6,
    title: "Autozcrave",
    category: "Web Development",
    description: "We believe that quality is non-negotiable. Our products are meticulously crafted using the finest materials and the latest in detailing technology. ",
    image: autozcrave,
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "Laravel", "MySQL"],
    link: "https://autozcrave.com/",
  },
  {
    id: 7,
    title: "Digital Marketing Dashboard",
    category: "Digital Marketing",
    description: "Unified marketing analytics dashboard integrating multiple ad platforms and social media.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    technologies: ["Vue.js", "Python", "AWS"],
    link: "#",
    comingSoon: true // ✅ add this
  },
  {
  id: 8,
  title: "CRM System",
  category: "Mobile Development",
  description: "Custom CRM with AI-powered lead scoring, automation, and comprehensive reporting.",
  image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
  technologies: ["React", "Node.js", "PostgreSQL", "AI/ML"],
  link: "#",
  comingSoon: true // ✅ add this
},
  {
    id: 9,
    title: "NGO Platform",
    category: "Web Development",
    description: "One Support One Life Organisation is a non-profitable foundation based in Noida(Uttar Pradesh)",
    image: onesupportonelife,
    technologies: ["HTML", "CSS", "Bootstrap" , "JavaScript", "PHP", "MySQL"],
    link: "https://www.onesupportonelife.org/",
  },
  {
    id: 10,
    title: "MEP Solutions Pvt. Ltd.",
    category: "Web Development",
    description: "Bijatech MEP Solutions Pvt. Ltd. is a trusted turnkey project solution provider for MEP, Electrical , Utility Projects.",
    image: bijatech,
    technologies: ["PHP", "HTML", "Bootstrap", "JavaScript", "PHP", "MySQL"],
    link: "https://bijatech.in/",
  },
];

const categories = ["All", "Web Development", "Mobile Development", "Digital Marketing"];

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
        <section className="pt-32 pb-0 relative noise-bg">
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
        <section className="py-16 pb-0">
          <div className="section-container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="group rounded-2xl overflow-hidden bg-card border border-border card-hover"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* 🔥 Coming Soon Overlay */}
                  {project.comingSoon && (
                    <div className="absolute w-full h-full inset-0 bg-black/60 flex items-center justify-center z-20">
                      <span className=" w-full h-full text-white px-4 py-2 font-semibold text-xl flex items-center justify-center" style={{ background: "var(--gradient-primary)" }}>
                        🚀 Coming Soon
                      </span>
                    </div>
                  )}

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <a 
                      href={project.link}
                      target="_blank"
                      className="w-12 h-12 rounded-full bg-card flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>

                  {/* Category */}
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
              <Link to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-primary-foreground"
                style={{ background: "var(--gradient-primary)" }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
