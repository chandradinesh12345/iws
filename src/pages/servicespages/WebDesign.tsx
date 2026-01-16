import {
  Code,
  Layout,
  Gauge,
  ShieldCheck,
  Search,
  Layers,
  CheckCircle,
} from "lucide-react";

const WebDesign = () => {
  return (
    <div className="bg-background">

      {/* ================= BANNER SECTION ================= */}
      <section className="relative h-[70vh] flex items-center">
        {/* Background Image */}
        <img
          src="https://shop-api.leaseweb.com/medias/HOMEPAGE-CAROUSEL-1920x642-22-.webp?context=bWFzdGVyfGltYWdlc3w2Njk5MHxpbWFnZS93ZWJwfGFEazRMMmc1TUM4NU1qSTVNVGN4TnpVeU9Ua3dMMGhQVFVWUVFVZEZJRU5CVWs5VlUwVk1JQzBnTVRreU1IZzJORElnS0RJeUtTNTNaV0p3fDg5NGQwNjI1NjY2OTc0NGQ2M2ZjNjI3NjYyYzA2ODc2ZTExMGM4YjkxMTAwODlmOWUwZDA0MzRjMDJmODkwYjc"
          alt="Website Development Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative section-container text-center text-white">
          <span className="inline-block mb-4 text-sm tracking-wide uppercase text-white/70">
            Services / Website Development
          </span>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Website Development
          </h1>

          <p className="max-w-2xl mx-auto text-lg text-white/80">
            Scalable, secure, and performance-driven website development
            solutions tailored for modern businesses.
          </p>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="py-24">
        <div className="section-container max-w-5xl">
          <h2 className="text-3xl font-bold mb-6">
            Website Development Overview
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Website development is the foundation of your digital presence.
            It goes beyond visual design to include performance, scalability,
            security, and user experience. A professionally developed website
            helps build trust, improves visibility, and supports business growth.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            We develop websites with a long-term mindset — ensuring clean code,
            future scalability, and seamless integrations with modern tools and
            platforms.
          </p>
        </div>
      </section>

      {/* ================= CAPABILITIES ================= */}
      <section className="py-24 bg-card border-y border-border">
        <div className="section-container">
          <h2 className="text-3xl font-bold mb-14 text-center">
            Core Website Development Capabilities
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Capability
              icon={Layout}
              title="UI/UX & Interface Architecture"
              desc="User-focused layouts and responsive interfaces designed for clarity and usability."
            />
            <Capability
              icon={Code}
              title="Frontend & Backend Engineering"
              desc="Modern frameworks and clean codebases built for long-term scalability."
            />
            <Capability
              icon={Gauge}
              title="Performance Optimization"
              desc="Fast-loading websites optimized for speed and smooth interaction."
            />
            <Capability
              icon={Search}
              title="SEO-Ready Development"
              desc="Search-engine friendly structure and accessibility compliance."
            />
            <Capability
              icon={ShieldCheck}
              title="Security & Reliability"
              desc="Secure authentication, data protection, and best-practice security layers."
            />
            <Capability
              icon={Layers}
              title="Scalable Architecture"
              desc="Flexible system design that evolves with your business needs."
            />
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-24">
        <div className="section-container">
          <h2 className="text-3xl font-bold mb-14 text-center">
            How We Execute Website Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProcessStep
              step="01"
              title="Requirement & Analysis"
              desc="Understanding business goals, users, and technical requirements."
            />
            <ProcessStep
              step="02"
              title="Design & Experience Planning"
              desc="Creating structured UI/UX systems and visual direction."
            />
            <ProcessStep
              step="03"
              title="Development & Integration"
              desc="Robust frontend and backend development with integrations."
            />
            <ProcessStep
              step="04"
              title="Testing & Deployment"
              desc="Quality assurance, performance checks, and controlled launch."
            />
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-24 bg-card border-y border-border">
        <div className="section-container grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <div>
            <img
              src="/images/why-choose-web.jpg"
              alt="Why Choose Our Website Development"
              className="rounded-3xl shadow-xl border border-border"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold mb-8">
              Why Choose Our Website Development
            </h2>

            <div className="space-y-5">
              {[
                "Business-driven development approach",
                "Clean, maintainable, and scalable code",
                "Mobile-first and responsive design",
                "SEO and performance-focused structure",
                "Secure and reliable architecture",
                "Transparent communication & delivery",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1" />
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default WebDesign;

/* ================= COMPONENTS ================= */

const Capability = ({
  icon: Icon,
  title,
  desc,
}: {
  icon: any;
  title: string;
  desc: string;
}) => (
  <div className="p-8 rounded-3xl bg-background border border-border hover:border-primary transition">
    <Icon className="w-8 h-8 text-primary mb-4" />
    <h3 className="font-semibold text-lg mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground leading-relaxed">
      {desc}
    </p>
  </div>
);

const ProcessStep = ({
  step,
  title,
  desc,
}: {
  step: string;
  title: string;
  desc: string;
}) => (
  <div className="p-8 rounded-3xl bg-card border border-border">
    <span className="text-primary text-2xl font-bold">{step}</span>
    <h4 className="mt-4 font-semibold text-lg">{title}</h4>
    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
      {desc}
    </p>
  </div>
);
