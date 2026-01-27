import {
  BarChart3,
  Search,
  Megaphone,
  Share2,
  PenTool,
  TrendingUp,
  CheckCircle,
  ArrowRight
} from "lucide-react";

import { Link } from "react-router-dom";

import heroImg from "@/assets/service_img_10.png";
import processImg from "@/assets/service_img_11.png";
import qualityImg from "@/assets/service_img_12.png";

const digitalMarketingTypes = [
  {
    title: "Search Engine Optimization (SEO)",
    icon: Search,
  },
  {
    title: "Pay-Per-Click Advertising (PPC)",
    icon: TrendingUp,
  },
  {
    title: "Social Media Marketing",
    icon: Share2,
  },
  {
    title: "Content Marketing",
    icon: PenTool,
  },
  {
    title: "Brand Promotion & Ads",
    icon: Megaphone,
  },
  {
    title: "Analytics & Conversion Tracking",
    icon: BarChart3,
  },
];


const DigitalMarketing: React.FC = () => {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative py-28 bg-gradient-to-br from-primary/10 via-transparent to-cyan-500/10">
        <div className="section-container grid lg:grid-cols-2 gap-14 items-center relative z-10">

          {/* Text */}
          <div>
            <span className="inline-block mb-4 px-4 py-1 rounded-full text-sm bg-primary/10 text-primary">
              Digital Marketing
            </span>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight mb-6">
              Grow Your Business With
              <span className="text-gradient"> Result-Driven Digital Marketing</span>
            </h1>

            <p className="text-muted-foreground text-lg mb-8 max-w-xl">
              We help brands increase visibility, attract quality traffic, and
              convert visitors into customers using data-driven digital marketing
              strategies.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 btn-primary px-7 py-3 rounded-xl"
            >
              Start Marketing Now
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src={heroImg}
              alt="Digital Marketing Services"
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
              Marketing Strategies That Drive Traffic & Conversions
            </h2>

            <p className="text-muted-foreground mb-4">
              Digital marketing is essential for business growth in today’s
              competitive landscape. We create targeted strategies that connect
              your brand with the right audience at the right time.
            </p>

            <p className="text-muted-foreground">
              From organic growth to paid campaigns, we focus on measurable
              results and long-term success.
            </p>
          </div>

          <div className="bg-card border border-border rounded-3xl p-8 shadow-lg">
            <ul className="space-y-4">
              {[
                "Data-driven marketing strategies",
                "High-quality lead generation",
                "Brand visibility & engagement",
                "Conversion-focused campaigns",
                "Transparent performance reporting",
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
            alt="Digital Marketing Process"
            className="rounded-3xl shadow-xl"
          />

          {/* Steps */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Our Digital Marketing Process
            </h2>

            <div className="space-y-6">
              {[
                ["Research & Strategy", "Understanding audience, goals, and competitors"],
                ["Campaign Planning", "Selecting channels and defining KPIs"],
                ["Execution", "Launching SEO, ads, and social campaigns"],
                ["Optimization", "Improving performance using data insights"],
                ["Reporting & Growth", "Tracking results and scaling success"],
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
              Digital Marketing Services We Offer
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Complete digital marketing solutions designed to grow your brand
              online.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {digitalMarketingTypes.map((item) => (
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
              Why Choose Our Digital Marketing Services?
            </h2>

            <ul className="space-y-4">
              {[
                "Experienced digital marketing experts",
                "ROI-focused strategies",
                "Transparent analytics & reporting",
                "Multi-channel marketing approach",
                "Continuous optimization",
                "Scalable growth solutions",
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
            alt="Digital Marketing Quality"
          />
        </div>
      </section>
    </>
  );
};

export default DigitalMarketing;
