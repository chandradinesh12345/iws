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
        <section className="py-20 relative noise-bg">
          <div className="section-container">
            <div className="text-center p-12 rounded-3xl border border-border bg-card">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Let's discuss how we can help transform your business with our technology solutions.
              </p>
              <Link to="/contact" className="btn-primary group">
                Get a Free Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
             
      </main>
      <Footer />
    </div>
  );
};

export default Services;
