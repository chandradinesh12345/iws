import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "./Logo";
import { QuoteDialog } from "./QuoteDialog";
import { Button } from "./ui/button";
import { NavLink } from "@/components/NavLink";

const navLinks = [
  { name: "Home", href: "/" },

  {
    name: "Services",
    href: "/services",
    children: [
      { name: "Web Development", href: "/services/web-design" },
      { name: "Software Development", href: "/services/software-development" },
      { name: "Mobile Apps", href: "/services/mobile-apps" },
      { name: "Digital Marketing", href: "/services/digital-marketing" },
      { name: "Survey Website", href: "/services/survey-website" },
      { name: "IT Consulting", href: "/services/it-consulting" },
    ],
  },

  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Career", href: "/career" },
  { name: "Contact", href: "/contact" },
];


export const ResizableNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openService, setOpenService] = useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-500 ease-smooth
          ${isScrolled ? "py-2" : "py-4"}
        `}
      >
        <div
          className={`
            mx-auto transition-all duration-500 ease-smooth
            ${isScrolled 
              ? "max-w-4xl px-4" 
              : "max-w-7xl px-6"
            }
          `}
        >
          <nav
            className={`
              navbar-glass rounded-full
              transition-all duration-500 ease-smooth
              ${isScrolled 
                ? "px-4 py-2" 
                : "px-6 py-3"
              }
            `}
          >
            <div className="flex items-center justify-between">
              <Logo isScrolled={isScrolled} />

              {/* Desktop Navigation */}
              <div
                  className={`
                    hidden md:flex items-center
                    transition-all duration-500 ease-smooth
                    ${isScrolled ? "gap-0.5" : "gap-1"}
                  `}
                >
                  {navLinks.map((link) =>
                    link.children ? (
                      <div key={link.name} className="relative group">
                        {/* Parent */}
                        <NavLink
                          to={link.href}
                          className={`
                            flex items-center gap-1 rounded-full transition-all
                            hover:bg-secondary
                            ${location.pathname.startsWith("/services")
                              ? "text-primary font-medium"
                              : "text-muted-foreground hover:text-foreground"}
                            ${isScrolled ? "px-3 py-1.5 text-sm" : "px-3 py-2 text-sm"}
                          `}
                        >
                          {link.name}
                          <ChevronDown className="w-4 h-4 mt-0.5" />
                        </NavLink>

                        {/* Dropdown */}
                        <div
                          className="
                            absolute left-0 top-full mt-2 w-60
                            rounded-2xl border border-white/10
                            bg-card backdrop-blur-xl shadow-xl
                            opacity-0 invisible group-hover:opacity-100 group-hover:visible
                            transition-all duration-300
                          "
                        >
                          {link.children.map((child) => (
                            <NavLink
                              key={child.name}
                              to={child.href}
                              className="
                                block px-5 py-3 text-sm
                                text-muted-foreground
                                hover:bg-secondary hover:text-foreground
                                first:rounded-t-2xl last:rounded-b-2xl
                              "
                              activeClassName="text-primary bg-primary/10"
                            >
                              {child.name}
                            </NavLink>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <NavLink
                        key={link.name}
                        to={link.href}
                        className={`
                          rounded-full transition-all
                          hover:bg-secondary
                          ${location.pathname === link.href
                            ? "text-primary font-medium"
                            : "text-muted-foreground hover:text-foreground"}
                          ${isScrolled ? "px-3 py-1.5 text-sm" : "px-3 py-2 text-sm"}
                        `}
                      >
                        {link.name}
                      </NavLink>
                    )
                  )}
                </div>


              {/* CTA Button */}
              <div className="flex items-center gap-3">
                <QuoteDialog>
                  <Button
                    className={`
                      hidden sm:inline-flex items-center justify-center
                      font-semibold text-primary-foreground
                      rounded-full transition-all duration-300
                      hover:scale-105 glow-primary border-0
                      ${isScrolled 
                        ? "px-4 py-1.5 text-sm h-auto" 
                        : "px-5 py-2 text-sm h-auto"
                      }
                    `}
                    style={{ background: "var(--gradient-primary)" }}
                  >
                    Get Quote
                  </Button>
                </QuoteDialog>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Toggle menu"
                >
                  {isMobileMenuOpen ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <Menu className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          fixed inset-0 z-40 md:hidden
          transition-all duration-300
          ${isMobileMenuOpen 
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none"
          }
        `}
      >
        <div 
          className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={`
            absolute top-20 left-4 right-4
            bg-card rounded-2xl p-6 shadow-lg border border-border
            transition-all duration-300
            ${isMobileMenuOpen 
              ? "translate-y-0 opacity-100" 
              : "-translate-y-4 opacity-0"
            }
          `}
        >
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.name}>
                  {/* Parent */}
                  <button
                    onClick={() => setOpenService(!openService)}
                    className="flex w-full items-center justify-between px-4 py-3 text-base rounded-xl
                    text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
                  >
                    {link.name}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        openService ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Children */}
                  {openService && (
                    <div className="ml-4 mt-1 space-y-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          className="block px-4 py-2 text-sm rounded-lg
                          text-muted-foreground hover:text-foreground hover:bg-secondary"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`px-4 py-3 text-base rounded-xl transition-all
                    ${location.pathname === link.href
                      ? "text-primary bg-primary/10 font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"}
                  `}
                >
                  {link.name}
                </Link>
              )
            )}

            <QuoteDialog>
              <Button
                className="mt-4 w-full px-4 py-3 text-base font-semibold text-primary-foreground rounded-xl border-0"
                style={{ background: "var(--gradient-primary)" }}
              >
                Get Quote
              </Button>
            </QuoteDialog>
          </nav>

        </div>
      </div>
    </>
  );
};
