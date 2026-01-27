import { ArrowRight, CheckCircle, Building2,
  ShoppingCart,
  LayoutTemplate,
  User,
  Layers,
  Gift } from "lucide-react";
import { Link } from "react-router-dom";

import heroImg from "@/assets/service_img_1.png";
import processImg from "@/assets/service_img_2.png";
import qualityImg from "@/assets/service_img_3.png";

const websiteTypes = [
  {
    title: "Business & Corporate Websites",
    icon: Building2,
  },
  {
    title: "E-commerce Websites",
    icon: ShoppingCart,
  },
  {
    title: "Landing Pages",
    icon: LayoutTemplate,
  },
  {
    title: "Portfolio Websites",
    icon: User,
  },
  {
    title: "SaaS Applications",
    icon: Layers,
  },
  {
    title: "Survey & Reward Platforms",
    icon: Gift,
  },
];

const WebDesign = () => {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative py-28 bg-gradient-to-br from-primary/10 via-transparent to-cyan-500/10">
        <div className="section-container grid lg:grid-cols-2 gap-14 items-center relative z-10">

          {/* Text */}
          <div>
            <span className="inline-block mb-4 px-4 py-1 rounded-full text-sm bg-primary/10 text-primary">
              Website Development
            </span>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight mb-6">
              Build <span className="text-gradient">High-Performance Websites</span> That Grow Your Business
            </h1>

            <p className="text-muted-foreground text-lg mb-8 max-w-xl">
              We design and develop fast, secure, and scalable websites that
              deliver exceptional user experience and real business results.
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
              alt="Website Development"
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
              Websites Designed for Performance & Conversions
            </h2>

            <p className="text-muted-foreground mb-4">
              Your website is the first impression of your brand. We focus on
              building modern, responsive, and SEO-ready websites that engage
              users and convert visitors into customers.
            </p>

            <p className="text-muted-foreground">
              From startups to enterprises, our solutions are crafted to scale
              with your business needs.
            </p>
          </div>

          <div className="bg-card border border-border rounded-3xl p-8 shadow-lg">
            <ul className="space-y-4">
              {[
                "Lightning-fast loading speed",
                "Mobile-first responsive layouts",
                "SEO-friendly architecture",
                "Secure & scalable codebase",
                "Easy content management",
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
            alt="Development Process"
            className="rounded-3xl shadow-xl"
          />

          {/* Steps */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Our Website Development Process
            </h2>

            <div className="space-y-6">
              {[
                ["Discovery & Planning", "Understanding business goals and requirements"],
                ["UI/UX Design", "Creating clean, user-centric designs"],
                ["Development", "Building fast and scalable systems"],
                ["Optimization & SEO", "Performance tuning & search optimization"],
                ["Testing & Launch", "Quality assurance and secure deployment"],
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
              Types of Websites We Build
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              We design and develop a wide range of websites tailored to different
              business needs and industries.
            </p>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {websiteTypes.map((item) => (
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
              Why Choose Our Website Development Services?
            </h2>

            <ul className="space-y-4">
              {[
                "Experienced design & development team",
                "Modern technology stack",
                "SEO & performance focused",
                "Secure and scalable solutions",
                "Transparent communication",
                "Long-term support & maintenance",
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
            alt="Quality Driven Development"
          />
        </div>
      </section>

    </>
  );
};

export default WebDesign;
