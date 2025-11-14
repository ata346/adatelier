import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Detect active section
      if (location.pathname === '/') {
        const sections = ["home", "about", "services", "pricing", "why-choose-us", "how-we-work", "contact"];
        const currentSection = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });
        if (currentSection) setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Pricing", href: "#pricing" },
    { name: "Why Choose Us", href: "#why-choose-us" },
    { name: "How We Work", href: "#how-we-work" },
    { name: "FAQ", href: "/faq", isExternal: true },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string, isExternal?: boolean) => {
    setIsOpen(false);
    
    if (isExternal) {
      navigate(href);
      return;
    }
    
    // If we're not on the home page, navigate there first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        if (href === "#home") {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const element = document.querySelector(href);
          element?.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Already on home page, just scroll
      if (href === "#home") {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-background/98 backdrop-blur-lg shadow-elegant border-b border-brand-light-gray/20' 
          : 'bg-gradient-to-b from-brand-white/80 via-brand-white/40 to-transparent backdrop-blur-sm'
      }`}
      role="navigation"
      aria-label="Main navigation for Ad Atelier branding agency"
      itemScope
      itemType="https://schema.org/SiteNavigationElement"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-18 md:h-20">
          {/* Logo */}
          <div 
            className="font-brand-heading text-xl xs:text-2xl sm:text-3xl gradient-text cursor-pointer touch-manipulation tap-highlight-transparent transition-transform duration-300 hover:scale-105"
            onClick={() => scrollToSection("#home")}
            role="button"
            tabIndex={0}
            aria-label="Ad Atelier - Return to homepage"
            onKeyDown={(e) => e.key === 'Enter' && scrollToSection("#home")}
          >
            Ad Atelier
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId && location.pathname === '/';
              
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href, item.isExternal)}
                  className={`font-brand-body text-sm xl:text-base transition-all duration-300 relative group whitespace-nowrap hover:-translate-y-0.5 ${
                    isActive ? 'text-brand-deep-blue font-semibold' : 'text-brand-dark-navy hover:text-brand-deep-blue'
                  }`}
                  aria-label={`Navigate to ${item.name} section`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-brand-deep-blue to-brand-mid-blue transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} aria-hidden="true"></span>
                </button>
              );
            })}
            <Button 
              variant="hero" 
              size="sm"
              onClick={() => scrollToSection("#contact")}
              aria-label="Hire us for branding and marketing services"
            >
              Hire us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="touch-manipulation tap-highlight-transparent min-h-[44px] min-w-[44px]"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 z-50 animate-fade-in">
            <div className="mx-4 mt-2 bg-background/98 backdrop-blur-lg rounded-2xl shadow-hover border border-brand-light-gray/50">
              <div className="py-3 space-y-1">
                {navItems.map((item) => {
                  const sectionId = item.href.replace('#', '');
                  const isActive = activeSection === sectionId && location.pathname === '/';
                  
                  return (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href, item.isExternal)}
                      className={`block w-full text-left px-5 py-4 font-brand-body text-base hover:text-brand-deep-blue hover:bg-gradient-to-r hover:from-brand-light-gray/40 hover:to-transparent transition-all duration-300 touch-manipulation tap-highlight-transparent min-h-[48px] flex items-center rounded-lg ${
                        isActive ? 'text-brand-deep-blue font-semibold bg-gradient-to-r from-brand-light-gray/30 to-transparent' : 'text-brand-dark-navy'
                      }`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {item.name}
                    </button>
                  );
                })}
                <div className="px-4 py-3 border-t border-brand-light-gray/30">
                  <Button 
                    variant="hero" 
                    size="sm"
                    onClick={() => scrollToSection("#contact")}
                    className="w-full min-h-[44px] touch-manipulation tap-highlight-transparent"
                  >
                    Hire us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;