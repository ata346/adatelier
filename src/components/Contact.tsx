import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-brand-light-gray/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-brand-heading text-4xl md:text-5xl lg:text-6xl mb-6 text-brand-dark-navy">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-brand-mid-blue mx-auto mb-8"></div>
          <p className="font-brand-body text-lg text-brand-dark-navy/70 max-w-3xl mx-auto">
            Ready to transform your brand? Let's discuss your project and create something amazing together.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
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
                <div className="w-12 h-12 bg-brand-mid-blue rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-brand-white" />
                </div>
                <div>
                  <h4 className="font-brand-heading text-lg text-brand-dark-navy">Email</h4>
                  <a 
                    href="mailto:hello@adatelier.com" 
                    className="font-brand-body text-brand-deep-blue hover:text-brand-mid-blue transition-colors duration-300"
                  >
                    hello@adatelier.com
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
          <div className="bg-background rounded-2xl p-8 shadow-elegant">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
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
                  Email *
                </label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="font-brand-body"
                />
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