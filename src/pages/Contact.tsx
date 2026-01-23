import { ResizableNavbar } from "@/components/ResizableNavbar";
import { Footer } from "@/components/Footer";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: Mail, label: "Email", value: "info@infowebsoftware.com", href: "mailto:info@infowebsoftware.com" },
  { icon: Phone, label: "Phone", value: "+91 9627407876", href: "tel:9627407876" },
  { icon: MapPin, label: "Address", value: "Manral’s Business Center Chharayal Choraha, Birla School Road, Haldwani, Uttarakhand 263139", href: "#" },
  { icon: Clock, label: "Working Hours", value: "9AM to 5PM Mon To Sat", href: "#" },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    services: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", phone: "", services: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <ResizableNavbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative noise-bg">
          <div className="section-container text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Contact Us
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Let's <span className="text-gradient">Connect</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? We'd love to hear from you. Get in touch and let's create something amazing together.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-10">
          <div className="section-container">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                  <p className="text-muted-foreground">
                    Whether you're a startup looking to establish your digital presence or an enterprise seeking to optimize operations, we're here to help.
                  </p>
                </div>
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <a
                      key={info.label}
                      href={info.href}
                      className="flex items-start gap-4 p-4 rounded-2xl bg-card border border-border card-hover group"
                    >
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "var(--gradient-primary)" }}>
                        <info.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{info.label}</div>
                        <div className="font-medium group-hover:text-primary transition-colors">{info.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-3">
                <form onSubmit={handleSubmit} className="p-8 rounded-3xl bg-card border border-border">
                  <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                  <div className="grid sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        placeholder="name@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Services</label>
                      <input
                        type="text"
                        required
                        value={formData.services}
                        onChange={(e) => setFormData({ ...formData, services: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        placeholder="Enter services you're interested in"
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">Your Message</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full sm:w-auto group">
                    Send Message
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="py-10">
          <div className="section-container">
            <div className="rounded-3xl overflow-hidden border border-border h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55726.660119815555!2d79.41676765820313!3d29.196592299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a09b2e96b1384f%3A0xc4b8c3b3ea1877d7!2sInfo%20Web%20Software!5e0!3m2!1sen!2sin!4v1769141842614!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
