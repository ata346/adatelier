import { useState, useEffect } from 'react';
import { X, Download, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ExitIntentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [hasShown, setHasShown] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check if already shown in this session
    const exitIntentShown = sessionStorage.getItem('exitIntentShown');
    const lastShown = localStorage.getItem('exitIntentLastShown');
    const now = new Date().getTime();
    
    // Don't show if shown in this session or within last 7 days
    if (exitIntentShown || (lastShown && (now - parseInt(lastShown)) < 7 * 24 * 60 * 60 * 1000)) {
      setHasShown(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger when mouse moves to top 50px of viewport (likely closing tab/window)
      if (e.clientY <= 50 && !hasShown && !isVisible) {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem('exitIntentShown', 'true');
      }
    };

    // Add delay before activating to avoid triggering immediately
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave);
    }, 3000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown, isVisible]);

  const closePopup = () => {
    setIsVisible(false);
    localStorage.setItem('exitIntentLastShown', new Date().getTime().toString());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email.trim())) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    // Format WhatsApp message with the lead
    const message = `🎁 *Free Checklist Download Request*\n\n📧 *Email:* ${email.trim()}\n\n⏰ *Time:* ${new Date().toLocaleString()}\n\n_User requested the free branding checklist_`;
    const whatsappUrl = `https://wa.me/919656778508?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Success!",
      description: "Your free checklist will be sent to your email shortly!",
    });
    
    closePopup();
    setEmail('');
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 bg-foreground/60 backdrop-blur-md z-[10001] flex items-center justify-center p-4 animate-fade-in"
      onClick={closePopup}
    >
      <div 
        className="bg-background rounded-3xl p-8 max-w-lg w-full shadow-2xl animate-scale-in relative border-2 border-brand-electric-blue/20"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closePopup}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close popup"
        >
          <X size={20} />
        </button>

        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-brand-electric-blue to-brand-electric-blue/80 rounded-2xl mb-4">
            <Download className="w-8 h-8 text-brand-white" />
          </div>
          
          <h2 className="text-3xl font-brand-heading font-bold text-foreground mb-3">
            Wait! Don't Leave Empty-Handed
          </h2>
          <p className="text-lg text-muted-foreground font-brand-body">
            Get our <span className="text-brand-electric-blue font-semibold">FREE Branding Checklist</span> – 
            a comprehensive guide to building a powerful brand identity
          </p>
        </div>

        <div className="bg-gradient-to-br from-brand-electric-blue/5 to-transparent rounded-2xl p-6 mb-6">
          <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2 font-brand-heading">
            <CheckCircle className="w-5 h-5 text-brand-electric-blue" />
            What's Inside:
          </h3>
          <ul className="space-y-2 text-sm text-muted-foreground font-brand-body">
            <li className="flex items-start gap-2">
              <span className="text-brand-electric-blue mt-0.5">✓</span>
              <span>Essential brand elements every business needs</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-electric-blue mt-0.5">✓</span>
              <span>Step-by-step guide to creating your visual identity</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-electric-blue mt-0.5">✓</span>
              <span>Common branding mistakes to avoid</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-electric-blue mt-0.5">✓</span>
              <span>Proven strategies from successful brands</span>
            </li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-4 border-2 border-border rounded-xl text-base focus:border-brand-electric-blue focus:outline-none focus:ring-2 focus:ring-brand-electric-blue/20 transition-all font-brand-body"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-brand-electric-blue to-brand-electric-blue/90 text-brand-white p-4 rounded-xl font-semibold text-base flex items-center justify-center gap-2 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 font-brand-body"
          >
            <Download size={20} />
            Download Free Checklist
          </button>
          
          <p className="text-xs text-center text-muted-foreground font-brand-body">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </form>
      </div>
    </div>
  );
};

export default ExitIntentPopup;
