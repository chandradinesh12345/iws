import { ResizableNavbar } from "@/components/ResizableNavbar";
import { Footer } from "@/components/Footer";
import { FileText } from "lucide-react";

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <ResizableNavbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative noise-bg">
        <div className="absolute inset-0 bg-[image:var(--gradient-hero)] opacity-30" />
        <div className="section-container relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center" style={{ background: "var(--gradient-primary)" }}>
              <FileText className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Terms & <span className="text-gradient">Conditions</span>
            </h1>
            <p className="text-muted-foreground">Last updated: December 2024</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="p-6 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using the services provided by Info Web Software, you accept and agree 
                  to be bound by these Terms and Conditions. If you do not agree to these terms, please 
                  do not use our services.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Services</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Info Web Software provides web development, software development, mobile application 
                  development, digital marketing, and IT consulting services. The specific scope of work, 
                  deliverables, and timelines will be outlined in individual project agreements.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Payment Terms</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Payment terms will be specified in individual project agreements. Generally:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>A deposit may be required before work commences</li>
                  <li>Milestone payments may be required for larger projects</li>
                  <li>Final payment is due upon project completion</li>
                  <li>Late payments may incur additional charges</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Upon full payment, the client will own the intellectual property rights to the custom 
                  work created specifically for them. Info Web Software retains the right to use general 
                  code libraries, frameworks, and methodologies developed during the project.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Confidentiality</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Both parties agree to maintain the confidentiality of any proprietary information 
                  shared during the course of the project. This includes business strategies, technical 
                  specifications, and any other sensitive information.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Info Web Software shall not be liable for any indirect, incidental, special, or 
                  consequential damages arising out of or in connection with our services. Our total 
                  liability shall not exceed the amount paid for the specific service in question.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Either party may terminate the agreement with written notice. In case of termination, 
                  the client shall pay for all work completed up to the termination date.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For any questions regarding these Terms and Conditions, please contact us at:
                  <br /><br />
                  <strong className="text-foreground">Email:</strong> legal@infowebsoftware.com<br />
                  <strong className="text-foreground">Phone:</strong> +91 98765 43210<br />
                  <strong className="text-foreground">Address:</strong> Mumbai, Maharashtra, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsConditions;
