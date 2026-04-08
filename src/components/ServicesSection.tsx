import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import webdesign from "../assets/web-design.webp";
import SoftwareDevelopment from "../assets/Software_Development.jpeg";
import MobileAppDevelopment from "../assets/MobileAppDevelopment.webp";
import SurveyWebsite from "../assets/SurveyWebsite.webp";
import DigitalMarketing from "../assets/DigitalMarketing.webp";
import ITConsulting from "../assets/ITConsulting.webp";

const services = [
  {
    img: webdesign,
    title: "Web Development",
    slug: "web-design",
    description: "Create stunning, responsive websites that engage your audience and drive conversions with modern technologies.",
    features: ["React & Next.js", "Responsive Design", "SEO Optimized"],
  },
  {
    img: SoftwareDevelopment,
    title: "Software Development",
    slug: "software-development",
    description: "Custom software solutions tailored to your business needs, built for scalability and performance.",
    features: ["Custom Solutions", "Cloud Integration", "API Development"],
  },
  {
    img: MobileAppDevelopment,
    title: "Mobile App Development",
    slug: "mobile-apps",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    features: ["iOS & Android", "React Native", "Flutter Apps"],
  },
  {
    img: SurveyWebsite,
    title: "Survey Website",
    slug: "survey-website",
    description: "AI-powered survey platforms that collect intelligent insights and automate data analysis.",
    features: ["AI Integration", "Smart Analytics", "Real-time Reports"],
  },
  {
    img: DigitalMarketing,
    title: "Digital Marketing",
    slug: "digital-marketing",
    description: "Strategic digital marketing campaigns that increase visibility and drive qualified leads.",
    features: ["SEO & SEM", "Social Media", "Content Strategy"],
  },
  {
    img: ITConsulting,
    title: "IT Consulting",
    slug: "it-consulting",
    description: "Expert guidance on technology strategies to optimize your operations and drive growth.",
    features: ["Tech Strategy", "Infrastructure", "Security Audit"],
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
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br opacity-50`} />
              </div>
              
              <div className="relative p-4 bg-card rounded-2xl m-[1px]">
                {/* img */}
                <div className="w-full h-[200px] rounded-2xl mb-6 overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover rounded-2xl 
                  transition-transform duration-700 ease-in-out 
                  group-hover:scale-110"
                  />
                </div>

                
                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-2 mb-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br from-[#d4263c] to-cyan-500}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* Link */}
                <Link 
                  to={`/services/${service.slug}`}
                  className="inline-flex items-center border-b border-primary gap-2 text-primary font-semibold text-sm group/link"
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
