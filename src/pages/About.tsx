import { ResizableNavbar } from "@/components/ResizableNavbar";
import { Footer } from "@/components/Footer";
import { TeamSection } from "@/components/TeamSection";
import { Target, Eye, Users, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "250+", label: "Loyal Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "15+", label: "Team Members" },
];

const values = [
  {
    icon: Target,
    title: "Mission",
    description: "To deliver cutting-edge technology solutions that empower businesses to achieve their full potential and drive digital transformation.",
  },
  {
    icon: Eye,
    title: "Vision",
    description: "To be the leading software development company recognized for innovation, quality, and customer-centric approach in delivering transformative solutions.",
  },
  {
    icon: Users,
    title: "Customer First",
    description: "We pride ourselves on our customer-centric approach, ensuring every project is delivered on time, within budget, and to the highest standards.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Our commitment to excellence has enabled us to build long-lasting relationships with clients across various industries worldwide.",
  },
];


const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <ResizableNavbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative noise-bg">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                  About Us
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                  Building <span className="text-gradient">Digital Future</span> Since 2020
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Founded in 2020, Info Web Software has rapidly emerged as a trusted name in the software development and web services industry. Our mission is to deliver cutting-edge technology solutions that empower businesses to achieve their full potential.
                </p>
                <p className="text-muted-foreground mb-8">
                  At Info Web Software, we specialize in custom software development, web application development, and comprehensive IT consulting services. Our team of experienced professionals is dedicated to crafting innovative, scalable, and secure solutions tailored to meet the unique needs of our clients.
                </p>
                <Link to="/contact" className="btn-primary group">
                  Work With Us
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=600&fit=crop" 
                    alt="Team collaboration"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 p-6 rounded-2xl bg-card border border-border shadow-lg">
                  <div className="text-3xl font-bold text-gradient">5+</div>
                  <div className="text-muted-foreground">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-secondary/30">
          <div className="section-container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-0">
          <div className="section-container">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                Our Values
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                What <span className="text-gradient">Drives Us</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div 
                  key={value.title}
                  className="p-6 rounded-2xl bg-card border border-border card-hover text-center"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center" style={{ background: "var(--gradient-primary)" }}>
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

       
              <TeamSection />

      </main>
      <Footer />
    </div>
  );
};

export default About;
