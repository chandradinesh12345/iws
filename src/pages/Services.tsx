import { ResizableNavbar } from "@/components/ResizableNavbar";
import { Footer } from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";



const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <ResizableNavbar />
      <main>
         {/* 👇 child service pages yahan aayenge */}
        <Outlet />
      
        {/* CTA Section */}
        <section className="relative bg-white py-10 overflow-hidden">

          <div className="section-container relative z-10">
            <div
              className="
                relative
                overflow-hidden
                text-center px-10 py-20
                rounded-3xl
                border border-white/10
                bg-white/[0.04] backdrop-blur-2xl
                shadow-2xl
                z-10
              "
            >
              {/* 🔹 BACKGROUND LAYERS (same place) */}
              <div className="absolute inset-0 pointer-events-none z-0">

                {/* Grid pattern */}
                <div
                  className="absolute inset-0 opacity-[0.15]"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />

                {/* Noise */}
                <div className="absolute inset-0 noise-bg opacity-40" />

                {/* Orbs */}
                <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-primary/25 rounded-full blur-[120px]" />
                <div className="absolute top-1/3 -right-40 w-[450px] h-[450px] bg-cyan-500/25 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-200px] left-1/3 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[140px]" />
              </div>

              {/* 🔥 CONTENT */}
              <div className="relative z-10">
                {/* Badge */}
                <span className="inline-flex items-center gap-2 px-4 py-1 mb-6
                                rounded-full text-sm
                                bg-primary/10 text-primary">
                  ✨ Start Something Impactful
                </span>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  Ready to Start Your Project?
                </h2>

                <p className="text-muted-foreground mb-10 max-w-xl mx-auto text-lg">
                  Let’s collaborate to build innovative, scalable, and future-ready
                  digital solutions for your business.
                </p>

                {/* CTA */}
                <div className="flex justify-center">
                  <Link
                    to="/contact"
                    className="
                      btn-primary group
                      inline-flex items-center gap-2
                      px-8 py-3 text-base
                      rounded-xl
                      shadow-xl shadow-primary/30
                      hover:shadow-primary/50
                      transition-all
                    "
                  >
                    Get a Free Quote
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>



             
      </main>
      <Footer />
    </div>
  );
};

export default Services;
