import { useState } from 'react';
const WhatsAppWidget = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  const handleSendMessage = () => {
    window.open('https://wa.me/919656778508?text=Hello!%20How%20can%20I%20help%20you%20today%3F', '_blank');
  };
  return <>
      

      
    </>;
};
export default WhatsAppWidget;