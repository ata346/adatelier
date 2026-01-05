import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const StickyBottomBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if banner was dismissed in this session
    const dismissed = sessionStorage.getItem('bottomBannerDismissed');
    if (dismissed) {
      setIsDismissed(true);
      return;
    }

    // Show banner after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    sessionStorage.setItem('bottomBannerDismissed', 'true');
  };

  const handleConsultation = () => {
    const message = encodeURIComponent(
      '¡Hola! Vi la oferta de consulta gratuita en su sitio web. Me gustaría programar una consulta y obtener mi código de descuento.'
    );
    window.open(`https://wa.me/5491234567890?text=${message}`, '_blank');
  };

  const copyDiscountCode = () => {
    navigator.clipboard.writeText('LUVA20');
    // Could add a toast notification here
  };

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-primary via-primary/90 to-accent shadow-2xl border-t border-primary-foreground/10"
        >
          <div className="container mx-auto px-4 py-3">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              {/* Left: Offer text */}
              <div className="flex items-center gap-3 text-primary-foreground">
                <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-primary-foreground/20">
                  <Gift className="w-5 h-5" />
                </div>
                <div className="text-center sm:text-left">
                  <p className="font-semibold text-sm sm:text-base">
                    🎁 ¡Consulta GRATIS + 20% de descuento!
                  </p>
                  <p className="text-xs sm:text-sm text-primary-foreground/80">
                    Usa el código: <span 
                      onClick={copyDiscountCode}
                      className="font-bold bg-primary-foreground/20 px-2 py-0.5 rounded cursor-pointer hover:bg-primary-foreground/30 transition-colors"
                    >
                      LUVA20
                    </span>
                  </p>
                </div>
              </div>

              {/* Right: CTA and dismiss */}
              <div className="flex items-center gap-2">
                <Button
                  onClick={handleConsultation}
                  variant="secondary"
                  size="sm"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold shadow-lg"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Agendar Consulta
                </Button>
                <button
                  onClick={handleDismiss}
                  className="p-2 text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10 rounded-full transition-colors"
                  aria-label="Cerrar banner"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyBottomBanner;
