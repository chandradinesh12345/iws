import { ResizableNavbar } from "@/components/ResizableNavbar";
import { Footer } from "@/components/Footer";
import { Globe, Smartphone, Code, BarChart3, FileSearch, Headphones, ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Create stunning, responsive websites that engage visitors and drive conversions. From corporate sites to e-commerce platforms.",
    features: ["Custom Web Design", "E-commerce Solutions", "CMS Development", "API Integration"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Code,
    title: "Software Development",
    description: "Build robust, scalable software solutions tailored to your business needs. Enterprise-grade applications that grow with you.",
    features: ["Custom Software", "Enterprise Solutions", "Legacy Modernization", "Cloud Integration"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.",
    features: ["iOS Development", "Android Development", "Cross-Platform Apps", "App Maintenance"],
    color: "from-orange-500 to-red-500",
  },
  {
    icon: FileSearch,
    title: "Survey GPT Website Development",
    description: "AI-powered survey platforms that leverage GPT technology for intelligent data collection and analysis.",
    features: ["AI Integration", "Smart Surveys", "Data Analytics", "Custom Dashboards"],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: BarChart3,
    title: "Digital Marketing Service",
    description: "Comprehensive digital marketing strategies to boost your online presence and drive measurable results.",
    features: ["SEO Optimization", "Social Media Marketing", "PPC Campaigns", "Content Strategy"],
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Headphones,
    title: "IT Consulting",
    description: "Expert IT consulting services to help you navigate technology decisions and optimize your infrastructure.",
    features: ["Technology Assessment", "Digital Strategy", "System Integration", "Security Audits"],
    color: "from-indigo-500 to-purple-500",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <ResizableNavbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative noise-bg">
          <div className="section-container text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Our Services
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Solutions That <span className="text-gradient">Transform</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer comprehensive technology services designed to help your business thrive in the digital age.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="section-container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="group p-8 rounded-3xl bg-card border border-border card-hover"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative noise-bg">
          <div className="section-container">
            <div className="text-center p-12 rounded-3xl border border-border bg-card">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Let's discuss how we can help transform your business with our technology solutions.
              </p>
              <Link to="/contact" className="btn-primary group">
                Get a Free Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
