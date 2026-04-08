import { ResizableNavbar } from "@/components/ResizableNavbar";
import { Footer } from "@/components/Footer";
import { Shield } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <ResizableNavbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative noise-bg">
        <div className="absolute inset-0 bg-[image:var(--gradient-hero)] opacity-30" />
        <div className="section-container relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center" style={{ background: "var(--gradient-primary)" }}>
              <Shield className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Privacy <span className="text-gradient">Policy</span>
            </h1>
            <p className="text-muted-foreground">Last updated: December 2024</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="section-container">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="space-y-8">
              <div className="p-6 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We collect information you provide directly to us, such as when you create an account, 
                  make a purchase, contact us for support, or otherwise communicate with us. This information 
                  may include your name, email address, phone number, and any other information you choose to provide.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices, updates, and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Communicate with you about products, services, and events</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Information Sharing</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We do not sell, trade, or otherwise transfer your personal information to outside parties 
                  except as described in this policy. We may share information with trusted third parties 
                  who assist us in operating our website, conducting our business, or serving you.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate security measures to protect your personal information against 
                  unauthorized access, alteration, disclosure, or destruction. However, no method of 
                  transmission over the Internet is 100% secure.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Cookies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use cookies to enhance your experience on our website. You can choose to disable 
                  cookies through your browser settings, but this may affect your ability to use certain 
                  features of our website.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at:
                  <br /><br />
                  <strong className="text-foreground">Email:</strong> info@infowebsoftware.com<br />
                  <strong className="text-foreground">Phone:</strong> +91 9627407876<br />
                  <strong className="text-foreground">Address:</strong> Manral’s Business Center Chharayal Choraha, Birla School Road, Haldwani, Uttarakhand 263139
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

export default PrivacyPolicy;
