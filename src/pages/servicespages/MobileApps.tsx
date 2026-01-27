import {
  Smartphone,
  Layers,
  Rocket,
  ShieldCheck,
  Cloud,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

import heroImg from "@/assets/service_img_7.png";
import processImg from "@/assets/service_img_8.png";
import qualityImg from "@/assets/service_img_9.png";

const mobileAppTypes = [
  {
    title: "Android App Development",
    icon: Smartphone,
  },
  {
    title: "iOS App Development",
    icon: Smartphone,
  },
  {
    title: "Cross-Platform Apps",
    icon: Layers,
  },
  {
    title: "Enterprise Mobile Apps",
    icon: Rocket,
  },
  {
    title: "Cloud-Connected Apps",
    icon: Cloud,
  },
  {
    title: "Secure Mobile Applications",
    icon: ShieldCheck,
  },
];


const MobileApps: React.FC = () => {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative py-28 bg-gradient-to-br from-primary/10 via-transparent to-cyan-500/10">
        <div className="section-container grid lg:grid-cols-2 gap-14 items-center relative z-10">

          {/* Text */}
          <div>
            <span className="inline-block mb-4 px-4 py-1 rounded-full text-sm bg-primary/10 text-primary">
              Mobile App Development
            </span>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight mb-6">
              Build <span className="text-gradient">Powerful Mobile Apps</span> That Users Love
            </h1>

            <p className="text-muted-foreground text-lg mb-8 max-w-xl">
              We design and develop high-performance mobile applications that
              deliver seamless user experiences across Android and iOS platforms.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 btn-primary px-7 py-3 rounded-xl"
            >
              Start Your App Project
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src={heroImg}
              alt="Mobile App Development"
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
              Mobile Apps Designed for Speed, Stability & Growth
            </h2>

            <p className="text-muted-foreground mb-4">
              Mobile apps are the backbone of modern digital experiences. We
              build intuitive, fast, and secure apps that engage users and drive
              business growth.
            </p>

            <p className="text-muted-foreground">
              From MVPs to enterprise-grade mobile solutions, our apps scale as
              your user base grows.
            </p>
          </div>

          <div className="bg-card border border-border rounded-3xl p-8 shadow-lg">
            <ul className="space-y-4">
              {[
                "Native & cross-platform development",
                "High-performance & smooth UI",
                "Secure data handling",
                "Cloud & API integrations",
                "App store deployment support",
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
            alt="Mobile App Development Process"
            className="rounded-3xl shadow-xl"
          />

          {/* Steps */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Our Mobile App Development Process
            </h2>

            <div className="space-y-6">
              {[
                ["Idea & Strategy", "Understanding app goals, users, and platforms"],
                ["UI/UX Design", "Designing intuitive and engaging mobile interfaces"],
                ["App Development", "Building scalable Android & iOS applications"],
                ["Testing & Optimization", "Ensuring performance and stability"],
                ["Launch & Support", "App store deployment and continuous updates"],
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
              Types of Mobile Apps We Develop
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              We create mobile apps tailored to diverse industries and user needs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {mobileAppTypes.map((item) => (
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
              Why Choose Our Mobile App Development Services?
            </h2>

            <ul className="space-y-4">
              {[
                "Expert mobile app developers",
                "User-centric UI/UX design",
                "High performance & security",
                "Cross-platform expertise",
                "App store compliance",
                "Ongoing maintenance & updates",
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
            alt="Mobile App Quality Development"
          />
        </div>
      </section>
    </>
  );
};

export default MobileApps;
