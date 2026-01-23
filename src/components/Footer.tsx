import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram } from "lucide-react";
import { Logo } from "./Logo";

const footerLinks = {
  services: [
    { name: "Web Development", href: "/services/web-design" },
    { name: "Software Development", href: "/services/software-development" },
    { name: "Mobile Apps", href: "/services/mobile-apps" },
    { name: "Digital Marketing", href: "/services/digital-marketing" },
    { name: "Survey Website", href: "/services/survey-website" },
    { name: "IT Consulting", href: "/services/it-consulting" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Career", href: "/career" },
  ],
  support: [
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "/faq" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms-conditions" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/infowebsoftware1", label: "Facebook" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/info-web-software-technology/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/iws.infowebsoftware/", label: "Instagram" },
];

export const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-background pt-20 pb-4">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Logo variant="footer" />
            </div>
            <p className="text-background/70 mb-6 leading-relaxed">
              Transforming ideas into digital reality since 2020. We deliver cutting-edge 
              technology solutions that empower businesses to achieve their full potential.
            </p>
            <div className="space-y-3">
              <a href="mailto:info@infowebsoftware.com" className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                info@infowebsoftware.com
              </a>
              <a href="tel:+919876543210" className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                +91 9627407876
              </a>
              <div className="flex items-start gap-3 text-background/70">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>Manral’s Business Center Chharayal Choraha, Birla School Road, Haldwani, Uttarakhand 263139</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-background">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-background/70 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-background">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-background/70 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-background">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-background/70 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/60 text-sm">
            © 2024 Info Web Software. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors group"
              >
                <social.icon className="w-4 h-4 text-background/70 group-hover:text-primary-foreground transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
