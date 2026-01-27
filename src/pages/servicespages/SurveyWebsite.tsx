import {
  ClipboardList,
  Users,
  Gift,
  Wallet,
  ShieldCheck,
  BarChart3,
  CheckCircle,
  ArrowRight
} from "lucide-react";

import { Link } from "react-router-dom";

import heroImg from "@/assets/service_img_13.png";
import processImg from "@/assets/service_img_14.png";
import qualityImg from "@/assets/service_img_15.png";

const surveyTypes = [
  {
    title: "Paid Survey Platforms",
    icon: ClipboardList,
  },
  {
    title: "Reward & Points Systems",
    icon: Gift,
  },
  {
    title: "User Dashboard & Wallet",
    icon: Wallet,
  },
  {
    title: "Offerwall & Survey Integrations",
    icon: Users,
  },
  {
    title: "Analytics & Reporting",
    icon: BarChart3,
  },
  {
    title: "Secure Payments & Anti-Fraud",
    icon: ShieldCheck,
  },
];


const SurveyWebsite: React.FC = () => {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative py-28 bg-gradient-to-br from-primary/10 via-transparent to-cyan-500/10">
        <div className="section-container grid lg:grid-cols-2 gap-14 items-center relative z-10">

          {/* Text */}
          <div>
            <span className="inline-block mb-4 px-4 py-1 rounded-full text-sm bg-primary/10 text-primary">
              Survey Website Development
            </span>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight mb-6">
              Build <span className="text-gradient">High-Converting Survey Platforms</span> That Users Trust
            </h1>

            <p className="text-muted-foreground text-lg mb-8 max-w-xl">
              We design and develop secure, scalable, and user-friendly survey
              websites that help users earn rewards while delivering valuable
              insights for businesses.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 btn-primary px-7 py-3 rounded-xl"
            >
              Start Your Survey Platform
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src={heroImg}
              alt="Survey Website Development"
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
              Survey Platforms Designed for Engagement & Revenue
            </h2>

            <p className="text-muted-foreground mb-4">
              Survey websites require a perfect balance of user experience,
              monetization, and security. We build platforms that keep users
              engaged while ensuring accurate tracking and payouts.
            </p>

            <p className="text-muted-foreground">
              From startups to large survey networks, our solutions are designed
              to scale smoothly as your user base grows.
            </p>
          </div>

          <div className="bg-card border border-border rounded-3xl p-8 shadow-lg">
            <ul className="space-y-4">
              {[
                "High-conversion user interface",
                "Secure reward & payout systems",
                "Multiple survey & offerwall integrations",
                "Scalable user & data management",
                "Fraud detection & user validation",
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
            alt="Survey Website Development Process"
            className="rounded-3xl shadow-xl"
          />

          {/* Steps */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Our Survey Website Development Process
            </h2>

            <div className="space-y-6">
              {[
                ["Planning & Strategy", "Defining monetization, user flow, and integrations"],
                ["UI/UX Design", "Designing engaging and conversion-focused layouts"],
                ["Platform Development", "Building scalable backend & frontend systems"],
                ["Integration & Testing", "Connecting survey networks and testing payouts"],
                ["Launch & Optimization", "Deployment, monitoring, and continuous improvement"],
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
              Survey Website Features We Build
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Everything you need to launch and scale a successful survey platform.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {surveyTypes.map((item) => (
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
              Why Choose Our Survey Website Development Services?
            </h2>

            <ul className="space-y-4">
              {[
                "Experience with survey & reward platforms",
                "High-performance & scalable architecture",
                "Secure payouts & fraud prevention",
                "Seamless third-party integrations",
                "Conversion-focused UX design",
                "Long-term technical support",
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
            alt="Survey Platform Quality Development"
          />
        </div>
      </section>
    </>
  );
};

export default SurveyWebsite;
