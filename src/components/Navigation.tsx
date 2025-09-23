import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Why Choose Us", href: "#why-choose-us" },
    { name: "How We Work", href: "#how-we-work" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md shadow-elegant' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <div 
            className="font-brand-heading text-lg xs:text-xl sm:text-2xl gradient-text cursor-pointer touch-manipulation tap-highlight-transparent"
            onClick={() => scrollToSection("#home")}
          >
            Ad Atelier
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="font-brand-body text-sm xl:text-base text-brand-dark-navy hover:text-brand-deep-blue transition-colors duration-300 relative group whitespace-nowrap"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-deep-blue transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <Button 
              variant="hero" 
              size="sm"
              onClick={() => scrollToSection("#contact")}
            >
              Get Quote
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
          <div className="lg:hidden absolute top-full left-0 right-0 z-50">
            <div className="mx-4 mt-2 bg-background/98 backdrop-blur-md rounded-xl shadow-elegant border border-brand-light-gray/50">
              <div className="py-2 space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left px-4 py-3 font-brand-body text-sm text-brand-dark-navy hover:text-brand-deep-blue hover:bg-brand-light-gray/30 transition-colors duration-300 touch-manipulation tap-highlight-transparent min-h-[44px] flex items-center"
                  >
                    {item.name}
                  </button>
                ))}
                <div className="px-4 py-3 border-t border-brand-light-gray/30">
                  <Button 
                    variant="hero" 
                    size="sm"
                    onClick={() => scrollToSection("#contact")}
                    className="w-full min-h-[44px] touch-manipulation tap-highlight-transparent"
                  >
                    Get Quote
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