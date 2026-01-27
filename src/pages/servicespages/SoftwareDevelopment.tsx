import {
  Settings,
  ArrowRight,
  Briefcase,
  Database,
  Cloud,
  Layers,
  CheckCircle,
  Plug
} from "lucide-react";

import { Link } from "react-router-dom";

import heroImg from "@/assets/service_img_4.png";
import processImg from "@/assets/service_img_5.png";
import qualityImg from "@/assets/service_img_6.png";

const softwareTypes = [
  {
    title: "Custom Business Software",
    icon: Briefcase,
  },
  {
    title: "Enterprise Applications",
    icon: Layers,
  },
  {
    title: "CRM & ERP Systems",
    icon: Database,
  },
  {
    title: "Cloud-Based Software",
    icon: Cloud,
  },
  {
    title: "SaaS Platforms",
    icon: Settings,
  },
  {
    title: "API & System Integrations",
    icon: Plug,
  },
];


const SoftwareDevelopment: React.FC = () => {
  return (
    <>
    {/* ================= HERO ================= */}
      <section className="relative py-28 bg-gradient-to-br from-primary/10 via-transparent to-cyan-500/10">
        <div className="section-container grid lg:grid-cols-2 gap-14 items-center relative z-10">

          {/* Text */}
          <div>
            <span className="inline-block mb-4 px-4 py-1 rounded-full text-sm bg-primary/10 text-primary">
              Software Development
            </span>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight mb-6">
              Build <span className="text-gradient">Custom Software Solutions</span> That Scale With Your Business
            </h1>

            <p className="text-muted-foreground text-lg mb-8 max-w-xl">
              We design and develop secure, scalable, and high-performance software
              tailored to your business processes and long-term goals.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 btn-primary px-7 py-3 rounded-xl"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src={heroImg}
              alt="Software Development"
              className="w-full max-w-lg mx-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-24">
        <div className="section-container grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              Software Built for Performance, Security & Growth
            </h2>

            <p className="text-muted-foreground mb-4">
              Every business has unique challenges. Our software development services
              focus on building reliable, efficient, and scalable solutions that
              streamline operations and improve productivity.
            </p>

            <p className="text-muted-foreground">
              From internal tools to enterprise-grade platforms, we build software
              that adapts as your business evolves.
            </p>
          </div>

          <div className="bg-card border border-border rounded-3xl p-8 shadow-lg">
            <ul className="space-y-4">
              {[
                "Custom-built software solutions",
                "Secure and scalable architecture",
                "Optimized performance & reliability",
                "Cloud-ready applications",
                "Easy integration with existing systems",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-24 bg-muted/40">
        <div className="section-container grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <img
            src={processImg}
            alt="Software Development Process"
            className="rounded-3xl shadow-xl"
          />

          {/* Steps */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Our Software Development Process
            </h2>

            <div className="space-y-6">
              {[
                ["Requirement Analysis", "Understanding workflows, goals, and system needs"],
                ["System Architecture", "Designing scalable and secure software architecture"],
                ["Development", "Building robust front-end & back-end systems"],
                ["Testing & QA", "Ensuring stability, security, and performance"],
                ["Deployment & Support", "Smooth deployment with ongoing maintenance"],
              ].map(([title, desc], i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-primary font-bold text-lg">
                    {`0${i + 1}`}
                  </span>
                  <div>
                    <h4 className="font-semibold">{title}</h4>
                    <p className="text-muted-foreground text-sm">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ================= TYPES ================= */}
      <section className="py-24 bg-white">
        <div className="section-container">

          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Types of Software We Develop
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              We build scalable and secure software solutions tailored to business
              needs across industries.
            </p>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {softwareTypes.map((item) => (
              <div
                key={item.title}
                className="
                  group
                  bg-white
                  border border-gray-200
                  rounded-2xl
                  p-8
                  text-center
                  shadow-sm
                  hover:shadow-xl
                  hover:border-primary/40
                  transition-all duration-300
                "
              >
                {/* Icon */}
                <div
                  className="
                    w-14 h-14 mx-auto mb-5
                    flex items-center justify-center
                    rounded-xl
                    bg-primary/10
                    text-primary
                    group-hover:bg-primary
                    group-hover:text-white
                    transition-all duration-300
                  "
                >
                  <item.icon className="w-7 h-7" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-24 bg-muted/40">
        <div className="section-container grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose Our Software Development Services?
            </h2>

            <ul className="space-y-4">
              {[
                "Experienced software engineers",
                "Robust and scalable solutions",
                "Security-first development approach",
                "Agile & transparent process",
                "Seamless system integration",
                "Long-term maintenance & support",
              ].map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <img
            src={qualityImg}
            alt="Quality Software Development"
          />
        </div>
      </section>

    </>
  );
};

export default SoftwareDevelopment;


