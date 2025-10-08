import { useState, useEffect } from 'react';
import { X, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const LeadCapturePopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    message: ''
  });
  const { toast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasShown = localStorage.getItem('leadPopupShown');
      const lastShown = localStorage.getItem('leadPopupShownTime');
      const now = new Date().getTime();
      
      // Show if never shown or if 24 hours have passed
      if (!hasShown || (lastShown && (now - parseInt(lastShown)) > 24 * 60 * 60 * 1000)) {
        setIsVisible(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsVisible(false);
    localStorage.setItem('leadPopupShown', 'true');
    localStorage.setItem('leadPopupShownTime', new Date().getTime().toString());
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (!formData.name.trim() || !formData.phone.trim()) {
        toast({
          title: "Missing Information",
          description: "Please fill in your name and phone number.",
          variant: "destructive"
        });
        return;
      }

      // Validate phone number (basic validation)
      const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
      if (!phoneRegex.test(formData.phone.trim())) {
        toast({
          title: "Invalid Phone Number",
          description: "Please enter a valid phone number.",
          variant: "destructive"
        });
        return;
      }

      let leadMessage = '🎯 *New Lead Captured!*\n\n';
      leadMessage += `👤 *Name:* ${formData.name.trim()}\n`;
      leadMessage += `📱 *Phone:* ${formData.phone.trim()}\n`;
      
      if (formData.address.trim()) {
        leadMessage += `🏠 *Address:* ${formData.address.trim()}\n`;
      }
      
      if (formData.message.trim()) {
        leadMessage += `💬 *Message:* ${formData.message.trim()}\n`;
      }
      
      leadMessage += `\n⏰ *Time:* ${new Date().toLocaleString()}`;
      leadMessage += '\n\n_Generated via Luva Lead Capture_';
      
      const whatsappUrl = `https://wa.me/919656778508?text=${encodeURIComponent(leadMessage)}`;
      window.open(whatsappUrl, '_blank');
      
      toast({
        title: "Success!",
        description: "Your details have been sent successfully. We will contact you soon!",
      });
      
      closePopup();
      setFormData({ name: '', phone: '', address: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again or contact us directly.",
        variant: "destructive"
      });
    }
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 bg-foreground/50 backdrop-blur-sm z-[10000] flex items-center justify-center p-4 animate-fade-in"
      onClick={closePopup}
    >
      <div 
        className="bg-background rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-2xl animate-scale-in relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closePopup}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close popup"
        >
          <X size={18} />
        </button>

        <div className="text-center mb-6">
          <h2 className="text-xl sm:text-2xl font-brand-heading font-bold text-brand-dark-navy mb-2">
            Get In Touch With Us!
          </h2>
          <p className="text-sm sm:text-base text-brand-dark-navy/70 font-brand-body">
            Leave your details and we'll contact you soon
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name *"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full p-3 sm:p-4 border-2 border-border rounded-xl text-sm sm:text-base focus:border-brand-electric-blue focus:outline-none focus:ring-2 focus:ring-brand-electric-blue/20 transition-all font-brand-body"
          />
          
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number *"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="w-full p-3 sm:p-4 border-2 border-border rounded-xl text-sm sm:text-base focus:border-brand-electric-blue focus:outline-none focus:ring-2 focus:ring-brand-electric-blue/20 transition-all font-brand-body"
          />
          
          <input
            type="text"
            name="address"
            placeholder="Your Address"
            value={formData.address}
            onChange={handleInputChange}
            className="w-full p-3 sm:p-4 border-2 border-border rounded-xl text-sm sm:text-base focus:border-brand-electric-blue focus:outline-none focus:ring-2 focus:ring-brand-electric-blue/20 transition-all font-brand-body"
          />
          
          <textarea
            name="message"
            placeholder="Your Message"
            rows={3}
            value={formData.message}
            onChange={handleInputChange}
            className="w-full p-3 sm:p-4 border-2 border-border rounded-xl text-sm sm:text-base focus:border-brand-electric-blue focus:outline-none focus:ring-2 focus:ring-brand-electric-blue/20 transition-all resize-vertical min-h-[80px] font-brand-body"
          />
          
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-brand-electric-blue to-brand-electric-blue/90 text-brand-white p-3 sm:p-4 rounded-xl font-semibold text-sm sm:text-base flex items-center justify-center gap-2 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 font-brand-body"
          >
            <MessageCircle size={18} />
            Send My Details
          </button>
        </form>

        <div className="text-center mt-5 pt-5 border-t border-border">
          <a 
            href="https://widgetify-two.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors font-brand-body"
          >
            Powered by Widgetify
          </a>
        </div>
      </div>
    </div>
  );
};

export default LeadCapturePopup;