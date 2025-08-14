import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

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
    const message = `*New Contact Form Submission*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone || 'Not provided'}%0A*Message:* ${formData.message}`;
    
    // WhatsApp URL
    const whatsappUrl = `https://wa.me/919656778508?text=${message}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Redirecting to WhatsApp",
      description: "Your message is being sent via WhatsApp",
    });
    
    setFormData({ name: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-brand-light-gray/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-brand-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6 text-brand-dark-navy px-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-brand-mid-blue mx-auto mb-6 md:mb-8"></div>
          <p className="font-brand-body text-base md:text-lg text-brand-dark-navy/70 max-w-3xl mx-auto px-4">
            Ready to transform your brand? Let's discuss your project and create something amazing together.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
            <div>
              <h3 className="font-brand-heading text-2xl mb-6 text-brand-dark-navy">
                Let's Start a Conversation
              </h3>
              <p className="font-brand-body text-brand-dark-navy/70 mb-8">
                We're here to help you bring your vision to life. Reach out to us through any of the following channels:
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-brand-deep-blue rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-brand-white" />
                </div>
                <div>
                  <h4 className="font-brand-heading text-lg text-brand-dark-navy">Phone</h4>
                  <a 
                    href="tel:+919656778508" 
                    className="font-brand-body text-brand-deep-blue hover:text-brand-mid-blue transition-colors duration-300"
                  >
                    +91 9656778508
                  </a>
                </div>
              </div>
              
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-brand-deep-blue rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-brand-white" />
                </div>
                <div>
                  <h4 className="font-brand-heading text-lg text-brand-dark-navy">Location</h4>
                  <p className="font-brand-body text-brand-dark-navy/70">Kerala, India</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-background rounded-2xl p-6 md:p-8 shadow-elegant order-1 lg:order-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="font-brand-body text-sm font-medium text-brand-dark-navy mb-2 block">
                    Name *
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="font-brand-body"
                  />
                </div>
                <div>
                  <label className="font-brand-body text-sm font-medium text-brand-dark-navy mb-2 block">
                    Phone
                  </label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    className="font-brand-body"
                  />
                </div>
              </div>
              
              <div>
                <label className="font-brand-body text-sm font-medium text-brand-dark-navy mb-2 block">
                  Message *
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={5}
                  required
                  className="font-brand-body resize-none"
                />
              </div>
              
              <Button
                type="submit"
                variant="contact"
                className="w-full group"
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