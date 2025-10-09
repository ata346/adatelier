import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import luvaLogo from "@/assets/luva-logo.png";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
    budget: "",
    services: [] as string[]
  });

  const availableServices = [
    "Strategic Brand Design & Identity",
    "Advertising & Marketing Campaigns", 
    "Social Media Marketing & Branding",
    "Founder Credential Card Design"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // Format message for WhatsApp
    const servicesText = formData.services.length > 0 ? formData.services.join(', ') : 'Not specified';
    const budgetText = formData.budget || 'Not specified';
    const message = `*New Contact Form Submission*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone || 'Not provided'}%0A*Services:* ${servicesText}%0A*Budget:* ${budgetText}%0A*Message:* ${formData.message}`;
    
    // WhatsApp URL
    const whatsappUrl = `https://wa.me/919656778508?text=${message}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Redirecting to WhatsApp",
      description: "Your message is being sent via WhatsApp",
    });
    
    setFormData({ name: "", phone: "", message: "", budget: "", services: [] });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleServiceChange = (service: string, checked: boolean) => {
    if (checked) {
      setFormData({
        ...formData,
        services: [...formData.services, service]
      });
    } else {
      setFormData({
        ...formData,
        services: formData.services.filter(s => s !== service)
      });
    }
  };

  return (
    <section 
      id="contact" 
      className="py-12 sm:py-16 md:py-20 bg-brand-light-gray/30"
      aria-labelledby="contact-heading"
      itemScope
      itemType="https://schema.org/ContactPage"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 
            id="contact-heading"
            className="font-brand-heading text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6 text-brand-dark-navy px-2 sm:px-4 leading-tight"
            itemProp="name"
          >
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-brand-mid-blue mx-auto mb-4 sm:mb-6 md:mb-8"></div>
          <p className="font-brand-body text-sm sm:text-base md:text-lg text-brand-dark-navy/70 max-w-3xl mx-auto px-2 sm:px-4 leading-relaxed">
            Ready to elevate your brand? Let's discuss your branding and advertising needs. Our team of expert 
            creative specialists will deliver strategic brand design, creative advertising campaigns, and marketing 
            solutions that drive measurable results. Contact Ad Atelier—your trusted branding and advertising agency.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8 order-2 lg:order-1 px-2 sm:px-0">
            <div>
              <h3 className="font-brand-heading text-xl sm:text-2xl mb-4 sm:mb-6 text-brand-dark-navy leading-tight">
                Let's Start a Conversation
              </h3>
              <p className="font-brand-body text-sm sm:text-base text-brand-dark-navy/70 mb-6 sm:mb-8 leading-relaxed">
                Ready to build a brand that creates influence? Our branding and advertising agency will assemble expert specialists 
                to deliver strategic branding, creative advertising, and marketing solutions that transform your business.
              </p>
            </div>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-deep-blue rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-brand-white" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-brand-heading text-base sm:text-lg text-brand-dark-navy">Phone</h4>
                  <a 
                    href="tel:+919656778508" 
                    className="font-brand-body text-sm sm:text-base text-brand-deep-blue hover:text-brand-mid-blue transition-colors duration-300 break-all"
                  >
                    +91 9656778508
                  </a>
                </div>
              </div>
              
              
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-deep-blue rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-brand-white" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-brand-heading text-base sm:text-lg text-brand-dark-navy">Location</h4>
                  <p className="font-brand-body text-sm sm:text-base text-brand-dark-navy/70">Ulliyeri, Kozhikode, India</p>
                </div>
              </div>
            </div>
            
            {/* Luva Community */}
            <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-brand-deep-blue/5 rounded-xl border border-brand-deep-blue/10">
              <div className="text-center">
                <h4 className="font-brand-heading text-base sm:text-lg text-brand-dark-navy mb-3">
                  Join Our Free Community
                </h4>
                <div className="flex flex-col items-center space-y-3">
                  <img 
                    src={luvaLogo} 
                    alt="Luva Community Logo - Join our free creative community on WhatsApp" 
                    className="w-24 sm:w-32 h-auto"
                    width="128"
                    height="128"
                    loading="lazy"
                  />
                  <p className="font-brand-body text-xs sm:text-sm text-brand-dark-navy/70 max-w-xs">
                    Connect with fellow creators, share insights, and stay updated with the latest trends
                  </p>
                  <Button
                    onClick={() => window.open('https://chat.whatsapp.com/BWizaIVwmsnAPAOVRENGsT', '_blank')}
                    variant="outline"
                    className="w-full sm:w-auto bg-brand-deep-blue hover:bg-brand-mid-blue text-brand-white border-brand-deep-blue hover:border-brand-mid-blue transition-all duration-300"
                  >
                    Join Luva Community
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-background rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-elegant order-1 lg:order-2">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="font-brand-body text-xs sm:text-sm font-medium text-brand-dark-navy mb-2 block">
                    Name *
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="font-brand-body text-sm sm:text-base h-10 sm:h-11"
                  />
                </div>
                <div>
                  <label className="font-brand-body text-xs sm:text-sm font-medium text-brand-dark-navy mb-2 block">
                    Phone
                  </label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    className="font-brand-body text-sm sm:text-base h-10 sm:h-11"
                  />
                </div>
              </div>
              
              <div>
                <label className="font-brand-body text-xs sm:text-sm font-medium text-brand-dark-navy mb-3 block">
                  Services Interested In
                </label>
                <div className="grid grid-cols-1 gap-2 sm:gap-3">
                  {availableServices.map((service) => (
                    <div key={service} className="flex items-start space-x-2 p-2 sm:p-0">
                      <Checkbox
                        id={service}
                        checked={formData.services.includes(service)}
                        onCheckedChange={(checked) => 
                          handleServiceChange(service, checked as boolean)
                        }
                        className="mt-0.5 sm:mt-0"
                      />
                      <Label 
                        htmlFor={service} 
                        className="font-brand-body text-xs sm:text-sm text-brand-dark-navy cursor-pointer leading-relaxed flex-1"
                      >
                        {service}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="font-brand-body text-xs sm:text-sm font-medium text-brand-dark-navy mb-2 block">
                  Budget Range
                </label>
                <Input
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  placeholder="e.g., $5,000 - $10,000"
                  className="font-brand-body text-sm sm:text-base h-10 sm:h-11"
                />
              </div>
              
              <div>
                <label className="font-brand-body text-xs sm:text-sm font-medium text-brand-dark-navy mb-2 block">
                  Message *
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={4}
                  required
                  className="font-brand-body resize-none text-sm sm:text-base min-h-[100px] sm:min-h-[120px]"
                />
              </div>
              
              <Button
                type="submit"
                variant="contact"
                className="w-full group h-11 sm:h-12 text-sm sm:text-base"
              >
                Send Message
                <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;