import { Globe, Code, Smartphone, MessageSquare, Megaphone, Layers, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Create stunning, responsive websites that engage your audience and drive conversions with modern technologies.",
    features: ["React & Next.js", "Responsive Design", "SEO Optimized"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Code,
    title: "Software Development",
    description: "Custom software solutions tailored to your business needs, built for scalability and performance.",
    features: ["Custom Solutions", "Cloud Integration", "API Development"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    features: ["iOS & Android", "React Native", "Flutter Apps"],
    color: "from-orange-500 to-red-500",
  },
  {
    icon: MessageSquare,
    title: "Survey GPT Website",
    description: "AI-powered survey platforms that collect intelligent insights and automate data analysis.",
    features: ["AI Integration", "Smart Analytics", "Real-time Reports"],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Strategic digital marketing campaigns that increase visibility and drive qualified leads.",
    features: ["SEO & SEM", "Social Media", "Content Strategy"],
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Layers,
    title: "IT Consulting",
    description: "Expert guidance on technology strategies to optimize your operations and drive growth.",
    features: ["Tech Strategy", "Infrastructure", "Security Audit"],
    color: "from-indigo-500 to-violet-500",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative noise-bg">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            What We <span className="text-gradient">Offer</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology solutions to help your business thrive in the digital age.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:border-transparent transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient Border on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl p-[1px]">
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-50`} />
              </div>
              
              <div className="relative p-8 bg-card rounded-2xl m-[1px]">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${service.color}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* Link */}
                <Link 
                  to="/services" 
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm group/link"
                >
                  Learn More 
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
