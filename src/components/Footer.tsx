import { Phone, MapPin } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-brand-dark-navy text-brand-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="font-brand-heading text-2xl gradient-text">
              Ad Atelier
            </h3>
            <p className="font-brand-body text-brand-white/70 text-sm leading-relaxed">Crafting creative solutions for modern advertising. We help brands tell their stories through innovative design and strategic ca</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-brand-heading text-lg text-brand-white">Quick Links</h4>
            <div className="space-y-2">
              {["About", "Services", "Contact"].map(link => <a key={link} href={`#${link.toLowerCase()}`} className="block font-brand-body text-brand-white/70 hover:text-brand-mid-blue transition-colors duration-300 text-sm">
                  {link}
                </a>)}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-brand-heading text-lg text-brand-white">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-brand-mid-blue" />
                <a href="tel:+919656778508" className="font-brand-body text-brand-white/70 hover:text-brand-mid-blue transition-colors duration-300 text-sm">
                  +91 9656778508
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-brand-mid-blue" />
                <span className="font-brand-body text-brand-white/70 text-sm">
                  Kerala, India
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-white/20 mt-8 pt-8 text-center">
          <p className="font-brand-body text-brand-white/60 text-sm">
            © {currentYear} Ad Atelier. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;