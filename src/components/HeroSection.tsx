import { ArrowRight, Play, CheckCircle } from "lucide-react";

const features = [
  "Custom Software Solutions",
  "24/7 Support",
  "Scalable Architecture",
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-bg">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[image:var(--gradient-hero)]" />
      <div className="absolute inset-0 bg-[image:var(--gradient-radial)]" />
      
      {/* Animated Blobs */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-blob" />
      <div className="absolute top-40 -right-20 w-72 h-72 bg-accent/20 rounded-full blur-[100px] animate-blob animation-delay-2000" />
      <div className="absolute -bottom-20 left-1/3 w-72 h-72 bg-primary/15 rounded-full blur-[100px] animate-blob animation-delay-4000" />

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Content */}
      <div className="relative z-10 section-container text-center pt-32 pb-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-8 animate-fade-in shadow-sm">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm text-muted-foreground font-medium">
            Trusted by 100+ Businesses Since 2020
          </span>
        </div>

        {/* Heading */}
        <h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.1s' }}
        >
          Transforming Ideas Into
          <br />
          <span className="text-gradient">Digital Reality</span>
        </h1>

        {/* Subheading */}
        <p 
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          Info Web Software delivers cutting-edge technology solutions that empower 
          businesses to achieve their full potential in the digital world.
        </p>

        {/* Feature List */}
        <div 
          className="flex flex-wrap items-center justify-center gap-4 mb-10 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.25s' }}
        >
          {features.map((feature) => (
            <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.3s' }}
        >
          <a href="#services" className="btn-primary group">
            Explore Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#about" className="btn-secondary">
            <Play className="w-4 h-4" />
            Learn More
          </a>
        </div>

        {/* Stats */}
        <div 
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto opacity-0 animate-fade-in"
          style={{ animationDelay: '0.4s' }}
        >
          {[
            { value: "5+", label: "Years Experience" },
            { value: "100+", label: "Projects Completed" },
            { value: "50+", label: "Happy Clients" },
            { value: "24/7", label: "Support" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-gradient">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
