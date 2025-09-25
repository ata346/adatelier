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
          className="w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] hover:bg-[#128C7E] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          aria-label="Open WhatsApp chat"
        >
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
        </button>
      </div>

      {/* WhatsApp Popup */}
      {isPopupOpen && (
        <div className="fixed bottom-20 sm:bottom-24 right-4 sm:right-5 w-80 sm:w-96 max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl z-[999] border border-gray-200 animate-slide-in-right">
          {/* Header */}
          <div className="bg-[#25D366] text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">Luva Support</h3>
                <p className="text-xs text-white/80">Typically replies in minutes</p>
              </div>
            </div>
            <button
              onClick={togglePopup}
              className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
              aria-label="Close chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Content */}
          <div className="p-4 space-y-4">
            <div className="bg-gray-100 rounded-lg p-3">
              <p className="text-sm text-gray-700 font-brand-body">
                👋 Hi! How can we help you today?
              </p>
            </div>

            <div className="space-y-2">
              <button
                onClick={handleSendMessage}
                className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <p className="text-sm font-medium text-gray-900">💬 Start a conversation</p>
                <p className="text-xs text-gray-500">Chat with our support team</p>
              </button>

              <button
                onClick={() => window.open('tel:+919656778508', '_self')}
                className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-gray-400" />
                <div>
                  <p className="text-sm font-medium text-gray-900">📞 Call us directly</p>
                  <p className="text-xs text-gray-500">+91 96567 78508</p>
                </div>
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-gray-100 bg-gray-50 rounded-b-2xl">
            <p className="text-xs text-gray-500 text-center">
              We typically reply within minutes
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppWidget;