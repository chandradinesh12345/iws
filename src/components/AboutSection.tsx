import { Target, Eye, Rocket, Heart, Users, Award } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To deliver cutting-edge technology solutions that empower businesses to achieve their full potential in the digital world.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description: "To be the most trusted technology partner for businesses worldwide, driving innovation and digital transformation.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Rocket,
    title: "Innovation First",
    description: "We constantly explore new technologies and methodologies to deliver forward-thinking solutions.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Heart,
    title: "Client Focused",
    description: "Your success is our success. We're committed to understanding and exceeding your expectations.",
    color: "from-pink-500 to-rose-500",
  },
];

const stats = [
  { icon: Users, value: "50+", label: "Team Members" },
  { icon: Award, value: "100+", label: "Projects Delivered" },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30 relative noise-bg overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 -left-20 w-80 h-80 bg-accent/5 rounded-full blur-[100px]" />
      
      <div className="section-container relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            What Drives Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Your Trusted Technology <span className="text-gradient">Partner</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Founded in 2020, Info Web Software has rapidly emerged as a trusted name in the 
            software development and web services industry.
          </p>
        </div>

        {/* Values Grid - Modern Bento Style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((item, index) => (
            <div
              key={item.title}
              className="group relative bg-card rounded-2xl border border-border p-6 hover:border-transparent transition-all duration-500 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="w-7 h-7 text-white" />
              </div>
              
              {/* Content */}
              <h3 className="text-lg font-bold mb-2 text-foreground">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              
              {/* Decorative Line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="flex items-center gap-4 p-6 rounded-2xl bg-card border border-border"
            >
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: "var(--gradient-primary)" }}>
                <stat.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
