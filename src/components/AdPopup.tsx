import { useState, useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';

const AdPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasShown = localStorage.getItem('adPopupShown');
      const lastShown = localStorage.getItem('adPopupShownTime');
      const now = new Date().getTime();
      
      // Show if never shown or if 24 hours have passed
      if (!hasShown || (lastShown && (now - parseInt(lastShown)) > 24 * 60 * 60 * 1000)) {
        setIsVisible(true);
      }
    }, 3000); // Show after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsVisible(false);
    localStorage.setItem('adPopupShown', 'true');
    localStorage.setItem('adPopupShownTime', new Date().getTime().toString());
  };

  const handleAdClick = () => {
    window.open('https://store.link?via=Um4wGCfwh0xG', '_blank', 'noopener,noreferrer');
    closePopup();
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 bg-foreground/60 backdrop-blur-sm z-[10001] flex items-center justify-center p-4 animate-fade-in"
      onClick={closePopup}
    >
      <div 
        className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 rounded-2xl p-8 max-w-lg w-full shadow-2xl animate-scale-in relative border-2 border-primary/20"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closePopup}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close advertisement"
        >
          <X size={18} />
        </button>

        <div className="text-center space-y-6">
          <div className="space-y-3">
            <div className="inline-block px-4 py-1 bg-primary/10 rounded-full mb-2">
              <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                Special Offer
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Exclusive Deal Available!
            </h2>
            <p className="text-base text-muted-foreground">
              Check out amazing products and services tailored for you
            </p>
          </div>

          <button
            onClick={handleAdClick}
            className="w-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-4 px-6 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group"
          >
            Visit Store
            <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <p className="text-xs text-muted-foreground">
            Limited time offer • Click to explore
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdPopup;
