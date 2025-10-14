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
      className="py-16 sm:py-20 md:py-24 lg:py-28 bg-brand-light-gray/30"
      aria-labelledby="contact-heading"
      itemScope
      itemType="https://schema.org/ContactPage"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 
            id="contact-heading"
            className="font-brand-heading text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 md:mb-8 text-brand-dark-navy px-2 sm:px-4 leading-tight"
            itemProp="name"
          >
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 sm:w-32 h-1.5 bg-gradient-to-r from-brand-deep-blue via-brand-mid-blue to-brand-deep-blue mx-auto mb-6 sm:mb-8 md:mb-10 rounded-full"></div>
          <p className="font-brand-body text-base sm:text-lg md:text-xl text-brand-dark-navy/80 max-w-3xl mx-auto px-2 sm:px-4 leading-relaxed">
            <strong>Ready to build a brand that influences, not just attracts?</strong> Let's discuss how our elite creative specialists 
            can deliver strategic branding, performance-driven advertising, and marketing solutions engineered to drive measurable business growth. 
            Share your objectives below, and we'll assemble the perfect team to transform your brand into a revenue-generating competitive advantage.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8 order-2 lg:order-1 px-2 sm:px-0">
            <div>
              <h3 className="font-brand-heading text-xl sm:text-2xl mb-4 sm:mb-6 text-brand-dark-navy leading-tight">
                Let's Start a Conversation
              </h3>
              <p className="font-brand-body text-sm sm:text-base text-brand-dark-navy/70 mb-6 sm:mb-8 leading-relaxed">
                <strong>Let's build influence that converts.</strong> Share your branding or advertising challenge, and we'll match you with 
                senior specialists who deliver strategic solutions—not just creative work, but business transformation. Projects typically 
                start within 3-5 business days. Your brand's competitive advantage begins with this conversation.
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
          <div className="bg-background rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-elegant hover:shadow-hover transition-all duration-500 order-1 lg:order-2 border border-brand-light-gray/20">
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-7">
              <div className="grid grid-cols-1 gap-5 sm:gap-6">
                <div>
                  <label className="font-brand-body text-sm sm:text-base font-semibold text-brand-dark-navy mb-2.5 block">
                    Name *
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="font-brand-body text-base sm:text-lg h-12 sm:h-14 transition-all duration-300 focus:shadow-elegant"
                  />
                </div>
                <div>
                  <label className="font-brand-body text-sm sm:text-base font-semibold text-brand-dark-navy mb-2.5 block">
                    Phone
                  </label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    className="font-brand-body text-base sm:text-lg h-12 sm:h-14 transition-all duration-300 focus:shadow-elegant"
                  />
                </div>
              </div>
              
              <div>
                <label className="font-brand-body text-sm sm:text-base font-semibold text-brand-dark-navy mb-3.5 block">
                  Services Interested In
                </label>
                <div className="grid grid-cols-1 gap-3 sm:gap-4">
                  {availableServices.map((service) => (
                    <div key={service} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-brand-light-gray/30 transition-all duration-300">
                      <Checkbox
                        id={service}
                        checked={formData.services.includes(service)}
                        onCheckedChange={(checked) => 
                          handleServiceChange(service, checked as boolean)
                        }
                        className="mt-0.5"
                      />
                      <Label 
                        htmlFor={service} 
                        className="font-brand-body text-sm sm:text-base text-brand-dark-navy cursor-pointer leading-relaxed flex-1"
                      >
                        {service}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="font-brand-body text-sm sm:text-base font-semibold text-brand-dark-navy mb-2.5 block">
                  Budget Range
                </label>
                <Input
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  placeholder="e.g., $5,000 - $10,000"
                  className="font-brand-body text-base sm:text-lg h-12 sm:h-14 transition-all duration-300 focus:shadow-elegant"
                />
              </div>
              
              <div>
                <label className="font-brand-body text-sm sm:text-base font-semibold text-brand-dark-navy mb-2.5 block">
                  Message *
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={5}
                  required
                  className="font-brand-body resize-none text-base sm:text-lg min-h-[140px] sm:min-h-[160px] transition-all duration-300 focus:shadow-elegant"
                />
              </div>
              
              <Button
                type="submit"
                variant="contact"
                className="w-full group h-14 sm:h-16 text-base sm:text-lg font-semibold shadow-elegant hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
              >
                Send Message
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-all duration-300" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;