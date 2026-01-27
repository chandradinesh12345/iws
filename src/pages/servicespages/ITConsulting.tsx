import {
  MonitorCog,
  Lightbulb,
  ShieldCheck,
  Cloud,
  Server,
  Workflow,
  CheckCircle,
  ArrowRight
} from "lucide-react";

import heroImg from "@/assets/service_img_16.png";
import processImg from "@/assets/service_img_17.png";
import qualityImg from "@/assets/service_img_18.png";

import { Link } from "react-router-dom";

const itConsultingTypes = [
  {
    title: "IT Strategy & Planning",
    icon: Lightbulb,
  },
  {
    title: "Infrastructure & Cloud Consulting",
    icon: Cloud,
  },
  {
    title: "System Architecture & Optimization",
    icon: Server,
  },
  {
    title: "Cybersecurity Consulting",
    icon: ShieldCheck,
  },
  {
    title: "Digital Transformation",
    icon: Workflow,
  },
  {
    title: "Technology Audit & Advisory",
    icon: MonitorCog,
  },
];


const ITConsulting: React.FC = () => {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative py-28 bg-gradient-to-br from-primary/10 via-transparent to-cyan-500/10">
        <div className="section-container grid lg:grid-cols-2 gap-14 items-center relative z-10">

          {/* Text */}
          <div>
            <span className="inline-block mb-4 px-4 py-1 rounded-full text-sm bg-primary/10 text-primary">
              IT Consulting
            </span>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight mb-6">
              Smart <span className="text-gradient">IT Consulting</span> for Smarter Business Decisions
            </h1>

            <p className="text-muted-foreground text-lg mb-8 max-w-xl">
              We help businesses make the right technology decisions by aligning
              IT strategies with business goals for efficiency, security, and growth.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 btn-primary px-7 py-3 rounded-xl"
            >
              Book a Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src={heroImg}
              alt="IT Consulting Services"
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
              Expert Guidance to Optimize Your IT Infrastructure
            </h2>

            <p className="text-muted-foreground mb-4">
              Technology plays a critical role in modern business success. Our IT
              consulting services help organizations improve efficiency, reduce
              risks, and adopt the right technologies at the right time.
            </p>

            <p className="text-muted-foreground">
              Whether you need strategic planning or technical optimization, we
              provide actionable insights and practical solutions.
            </p>
          </div>

          <div className="bg-card border border-border rounded-3xl p-8 shadow-lg">
            <ul className="space-y-4">
              {[
                "Business-aligned IT strategies",
                "Cost-effective technology solutions",
                "Improved system performance & reliability",
                "Enhanced security & compliance",
                "Scalable IT infrastructure planning",
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
            alt="IT Consulting Process"
            className="rounded-3xl shadow-xl"
          />

          {/* Steps */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Our IT Consulting Process
            </h2>

            <div className="space-y-6">
              {[
                ["Assessment & Analysis", "Evaluating current systems and challenges"],
                ["Strategy & Roadmap", "Defining a clear IT strategy and action plan"],
                ["Solution Design", "Designing secure and scalable solutions"],
                ["Implementation Support", "Guiding execution and system improvements"],
                ["Monitoring & Optimization", "Continuous improvement and optimization"],
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

          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              IT Consulting Services We Offer
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Comprehensive IT consulting solutions to support your business growth.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {itConsultingTypes.map((item) => (
              <div
                key={item.title}
                className="
                  group bg-white border border-gray-200 rounded-2xl p-8 text-center
                  shadow-sm hover:shadow-xl hover:border-primary/40
                  transition-all duration-300
                "
              >
                <div
                  className="
                    w-14 h-14 mx-auto mb-5
                    flex items-center justify-center
                    rounded-xl
                    bg-primary/10 text-primary
                    group-hover:bg-primary group-hover:text-white
                    transition-all duration-300
                  "
                >
                  <item.icon className="w-7 h-7" />
                </div>

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
              Why Choose Our IT Consulting Services?
            </h2>

            <ul className="space-y-4">
              {[
                "Experienced IT consultants",
                "Vendor-neutral technology advice",
                "Security & compliance focused approach",
                "Practical and actionable recommendations",
                "Cost & performance optimization",
                "Ongoing advisory & support",
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
            alt="IT Consulting Quality Services"
          />
        </div>
      </section>
    </>
  );
};

export default ITConsulting;
