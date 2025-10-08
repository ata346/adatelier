import { useState } from 'react';
import { MessageCircle, X, Phone } from 'lucide-react';

const WhatsAppWidget = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleSendMessage = () => {
    window.open('https://wa.me/919656778508?text=Hello!%20How%20can%20I%20help%20you%20today%3F', '_blank');
  };

  return (
    <>
      {/* WhatsApp Widget Button */}
      <div className="fixed bottom-4 sm:bottom-5 right-4 sm:right-5 z-[1000]">
        <button
          onClick={togglePopup}
          className="w-14 h-14 sm:w-16 sm:h-16 bg-brand-deep-blue hover:bg-brand-mid-blue rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          aria-label="Open WhatsApp chat"
        >
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-brand-white" />
        </button>
      </div>

      {/* WhatsApp Popup */}
      {isPopupOpen && (
        <div className="fixed bottom-20 sm:bottom-24 right-4 sm:right-5 w-80 sm:w-96 max-w-[calc(100vw-2rem)] bg-background rounded-2xl shadow-2xl z-[999] border border-border animate-slide-in-right">
          {/* Header */}
          <div className="bg-[#25D366] text-brand-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">Luva Support</h3>
                <p className="text-xs text-brand-white/80">Typically replies in minutes</p>
              </div>
            </div>
            <button
              onClick={togglePopup}
              className="w-8 h-8 rounded-full bg-brand-white/20 hover:bg-brand-white/30 flex items-center justify-center transition-colors"
              aria-label="Close chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Content */}
          <div className="p-4 space-y-4">
            <div className="bg-muted rounded-lg p-3">
              <p className="text-sm text-foreground font-brand-body">
                👋 Hi! How can we help you today?
              </p>
            </div>

            <div className="space-y-2">
              <button
                onClick={handleSendMessage}
                className="w-full text-left p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors"
              >
                <p className="text-sm font-medium text-foreground">💬 Start a conversation</p>
                <p className="text-xs text-muted-foreground">Chat with our support team</p>
              </button>

              <button
                onClick={() => window.open('tel:+919656778508', '_self')}
                className="w-full text-left p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium text-foreground">📞 Call us directly</p>
                  <p className="text-xs text-muted-foreground">+91 96567 78508</p>
                </div>
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-border bg-muted rounded-b-2xl">
            <p className="text-xs text-muted-foreground text-center">
              We typically reply within minutes
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppWidget;