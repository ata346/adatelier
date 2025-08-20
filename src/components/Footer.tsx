import { Phone, MapPin, Instagram } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-brand-dark-navy text-brand-white py-6 sm:py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Brand Section */}
          <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
            <h3 className="font-brand-heading text-xl sm:text-2xl gradient-text">
              Ad Atelier
            </h3>
            <p className="font-brand-body text-brand-white/70 text-xs sm:text-sm leading-relaxed">Designing Influence, Not Just Attention</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
            <h4 className="font-brand-heading text-base sm:text-lg text-brand-white">Quick Links</h4>
            <div className="flex sm:flex-col items-center sm:items-start justify-center sm:justify-start space-x-4 sm:space-x-0 sm:space-y-2">
              {[
                { name: "About", href: "#about" },
                { name: "Services", href: "#services" },
                { name: "Why Choose Us", href: "#why-choose-us" },
                { name: "How We Work", href: "#how-we-work" },
                { name: "Contact", href: "#contact" }
              ].map(link => <a key={link.name} href={link.href} className="font-brand-body text-brand-white/70 hover:text-brand-mid-blue transition-colors duration-300 text-xs sm:text-sm">
                  {link.name}
                </a>)}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 sm:space-y-4 text-center sm:text-left sm:col-span-2 md:col-span-1">
            <h4 className="font-brand-heading text-base sm:text-lg text-brand-white">Contact Info</h4>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-brand-mid-blue flex-shrink-0" />
                <a href="tel:+919656778508" className="font-brand-body text-brand-white/70 hover:text-brand-mid-blue transition-colors duration-300 text-xs sm:text-sm">
                  +91 9656778508
                </a>
              </div>
              <div className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-brand-mid-blue flex-shrink-0" />
                <span className="font-brand-body text-brand-white/70 text-xs sm:text-sm">
                  Ulliyeri, Kozhikode, India
                </span>
              </div>
              <div className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3">
                <Instagram className="w-3 h-3 sm:w-4 sm:h-4 text-brand-mid-blue flex-shrink-0" />
                <a 
                  href="https://www.instagram.com/ad.atelier.eo/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-brand-body text-brand-white/70 hover:text-brand-mid-blue transition-colors duration-300 text-xs sm:text-sm break-all"
                >
                  @ad.atelier.eo
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-white/20 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center space-y-1 sm:space-y-2">
          <p className="font-brand-body text-brand-white/60 text-xs sm:text-sm">
            © {currentYear} Ad Atelier. All rights reserved.
          </p>
          <p className="font-brand-body text-brand-white/50 text-xs">
            Engineered by{" "}
            <a 
              href="https://adwebcomicagency.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-brand-accent hover:text-brand-accent/80 transition-colors duration-300"
            >
              Ad Web Comic Agency
            </a>
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;