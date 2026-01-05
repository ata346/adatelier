import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Smartphone, Monitor, Tablet } from 'lucide-react';
import { usePersonalization, getPersonalizedGreeting, getPersonalizedCTA } from '@/hooks/usePersonalization';

const WelcomeBackBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const personalization = usePersonalization();

  useEffect(() => {
    // Check if banner was dismissed in this session
    const dismissed = sessionStorage.getItem('welcomeBannerDismissed');
    if (dismissed) {
      setIsDismissed(true);
      return;
    }

    // Show banner after content loads
    const timer = setTimeout(() => {
      if (personalization) {
        setIsVisible(true);
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [personalization]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    sessionStorage.setItem('welcomeBannerDismissed', 'true');
  };

  if (isDismissed || !personalization) return null;

  const greeting = getPersonalizedGreeting(personalization);
  const cta = getPersonalizedCTA(personalization);

  const DeviceIcon = {
    mobile: Smartphone,
    tablet: Tablet,
    desktop: Monitor,
  }[personalization.deviceType];

  const getSourceBadge = () => {
    if (personalization.utmSource) {
      const sourceLabels: Record<string, string> = {
        google: '🔍 Google',
        facebook: '📘 Facebook',
        instagram: '📸 Instagram',
        twitter: '🐦 Twitter',
        linkedin: '💼 LinkedIn',
        referral: '🤝 Referido',
        email: '📧 Email',
      };
      return sourceLabels[personalization.utmSource] || personalization.utmSource;
    }
    return null;
  };

  const sourceBadge = getSourceBadge();

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-accent via-accent/90 to-primary shadow-lg"
        >
          <div className="container mx-auto px-4 py-3">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
              {/* Left: Greeting and personalization info */}
              <div className="flex items-center gap-3 text-accent-foreground">
                <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-accent-foreground/20">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="text-center sm:text-left">
                  <p className="font-semibold text-sm sm:text-base">
                    {greeting}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-accent-foreground/80">
                    <span className="flex items-center gap-1">
                      <DeviceIcon className="w-3 h-3" />
                      {personalization.deviceType === 'mobile' ? 'Móvil' : 
                       personalization.deviceType === 'tablet' ? 'Tablet' : 'Desktop'}
                    </span>
                    {personalization.visitCount > 1 && (
                      <span className="bg-accent-foreground/20 px-2 py-0.5 rounded-full">
                        Visita #{personalization.visitCount}
                      </span>
                    )}
                    {sourceBadge && (
                      <span className="bg-accent-foreground/20 px-2 py-0.5 rounded-full">
                        {sourceBadge}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Right: Personalized CTA */}
              <div className="flex items-center gap-3">
                <div className="text-right hidden md:block">
                  <p className="text-sm font-medium text-accent-foreground">{cta.text}</p>
                  <p className="text-xs text-accent-foreground/70">{cta.subtext}</p>
                </div>
                <button
                  onClick={handleDismiss}
                  className="p-2 text-accent-foreground/70 hover:text-accent-foreground hover:bg-accent-foreground/10 rounded-full transition-colors"
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

export default WelcomeBackBanner;
