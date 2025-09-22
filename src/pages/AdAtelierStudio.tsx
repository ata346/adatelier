import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import SEOHead from '@/components/SEOHead';

const AdAtelierStudio = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
    budget: '',
    services: [] as string[]
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.message) {
      console.log('Form validation failed: Missing required fields');
      return;
    }

    // Format message for email
    const servicesText = formData.services.length > 0 ? formData.services.join(', ') : 'Not specified';
    const budgetText = formData.budget || 'Not specified';
    const message = `New Contact Form Submission\n\nName: ${formData.name}\nPhone: ${formData.phone || 'Not provided'}\nServices: ${servicesText}\nBudget: ${budgetText}\nMessage: ${formData.message}`;
    
    // Redirect to WhatsApp with pre-filled message
    const whatsappMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919656778508?text=${whatsappMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    
    // Reset form
    setFormData({ name: "", email: "", message: "", phone: "", budget: "", services: [] });
    
    console.log('Form submitted successfully via WhatsApp');
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <SEOHead 
        title="Ad Atelier Studio - Professional Video Production Services"
        description="Professional mobile video production and editing services in Kozhikode, Kerala. Cinematic quality video shooting and post-production for businesses and personal projects."
        keywords="video production kerala, mobile video shooting kozhikode, video editing services, cinematic videography, professional video production ulliyeri, corporate videos kerala, event videography kozhikode"
        canonical="https://ad-atelier.com/adatelierstudio"
        type="website"
      />
      <div className="min-h-screen bg-background font-brand-body">
        {/* Navigation Header */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border" role="navigation" aria-label="Ad Atelier Studio Navigation">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16 sm:h-18">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.location.href = '/'}
                className="flex items-center gap-2 text-foreground hover:text-primary touch-manipulation tap-highlight-transparent min-h-[44px] min-w-[44px] px-3 sm:px-4"
                aria-label="Return to main Ad Atelier website"
              >
                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden xs:inline text-sm sm:text-base">Back to Main Site</span>
                <span className="xs:hidden text-sm">Back</span>
              </Button>
              
              <div className="font-brand-heading text-base xs:text-lg sm:text-xl md:text-2xl text-foreground text-center flex-1 px-2">
                Ad Atelier Studio
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="min-h-screen bg-brand-dark-navy flex items-center justify-center px-4 pt-20 sm:pt-16" role="banner" aria-labelledby="studio-hero-heading">
          <div className="text-center animate-fade-in max-w-4xl mx-auto">
            <h1 id="studio-hero-heading" className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-brand-heading text-brand-white uppercase tracking-wide mb-4 sm:mb-6 leading-tight px-2">
              Ad Atelier Studio
            </h1>
            <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-brand-white italic mb-8 sm:mb-10 md:mb-12 font-light leading-relaxed px-2">
              "Capturing life's best moments in just one snap!"
            </p>
            <Button
              onClick={scrollToContact}
              variant="outline"
              size="lg"
              className="bg-brand-white text-brand-dark-navy border-brand-white hover:bg-brand-dark-navy hover:text-brand-white uppercase tracking-wider touch-manipulation tap-highlight-transparent min-h-[48px] px-6 sm:px-8 text-sm sm:text-base"
              aria-label="Contact Ad Atelier Studio for video production services"
            >
              Get in Touch
            </Button>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 px-4 bg-background" aria-labelledby="studio-about-heading">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in">
              <h2 id="studio-about-heading" className="sr-only">About Ad Atelier Studio</h2>
              <p className="text-xl md:text-2xl text-foreground leading-relaxed font-medium">
                We are a professional video production studio dedicated to capturing unforgettable moments 
                with cinematic precision. Our passion lies in transforming your vision into compelling visual 
                stories that resonate with authenticity and creativity. Every frame we capture tells a story 
                worth remembering.
              </p>
            </div>
          </div>
        </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-brand-heading text-foreground text-center mb-8 sm:mb-12 md:mb-16 uppercase tracking-wide px-2 leading-tight">
            Our Services
          </h2>
          <div className="flex justify-center">
            <div className="bg-brand-dark-navy text-brand-white p-6 sm:p-8 md:p-12 rounded-lg hover:scale-105 transition-transform duration-300 max-w-md w-full animate-fade-in">
              <h3 className="text-lg xs:text-xl sm:text-2xl font-brand-heading mb-3 sm:mb-4 uppercase tracking-wider leading-tight">
                Mobile Video Shooting & Editing
              </h3>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                Professional mobile video production services that deliver cinematic quality. 
                From concept to final edit, we create compelling visual content that captures 
                your story with precision and artistry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-brand-heading text-foreground text-center mb-8 sm:mb-12 md:mb-16 uppercase tracking-wide px-2 leading-tight">
            Portfolio
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="aspect-video bg-brand-dark-navy rounded-lg hover:scale-105 hover:opacity-80 transition-all duration-300 flex items-center justify-center cursor-pointer animate-fade-in touch-manipulation tap-highlight-transparent"
                style={{ animationDelay: `${item * 0.2}s` }}
              >
                <div className="text-brand-white text-center p-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-brand-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg
                      className="w-6 h-6 sm:w-8 sm:h-8"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 12l-6-4h12l-6 4z" />
                    </svg>
                  </div>
                  <p className="text-xs sm:text-sm font-medium">Video {item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 bg-brand-dark-navy">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-brand-heading text-brand-white text-center mb-8 sm:mb-12 md:mb-16 uppercase tracking-wide px-2 leading-tight">
            Let's Work Together
          </h2>
          
          <div className="text-center mb-8 sm:mb-10 md:mb-12 px-2">
            <p className="text-brand-white text-base sm:text-lg mb-3 sm:mb-4">Ready to create something amazing?</p>
            <a
              href="mailto:communityfirefox87@gmail.com"
              className="text-brand-white text-lg sm:text-xl font-semibold hover:underline break-all"
            >
              communityfirefox87@gmail.com
            </a>
          </div>

          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4 sm:space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-brand-white text-brand-dark-navy rounded-lg border-2 border-transparent focus:border-muted focus:outline-none text-base sm:text-lg min-h-[48px]"
                aria-label="Your full name"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-brand-white text-brand-dark-navy rounded-lg border-2 border-transparent focus:border-muted focus:outline-none text-base sm:text-lg min-h-[48px]"
                aria-label="Your email address"
              />
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone (Optional)"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-brand-white text-brand-dark-navy rounded-lg border-2 border-transparent focus:border-muted focus:outline-none text-base sm:text-lg min-h-[48px]"
                aria-label="Your phone number"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows={6}
                value={formData.message}
                onChange={handleInputChange}
                required
                className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-brand-white text-brand-dark-navy rounded-lg border-2 border-transparent focus:border-muted focus:outline-none text-base sm:text-lg resize-none min-h-[100px] sm:min-h-[120px]"
              />
            </div>
            <div className="text-center">
              <Button
                type="submit"
                variant="outline"
                size="lg"
                className="bg-brand-white text-brand-dark-navy border-brand-white hover:bg-transparent hover:text-brand-white uppercase tracking-wider min-h-[48px] px-6 sm:px-8 text-sm sm:text-base w-full sm:w-auto"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-background">
        <div className="text-center">
          <p className="text-foreground text-lg font-medium">
            Copyright © Ad Atelier Studio 2025
          </p>
        </div>
      </footer>
    </div>
    </>
  );
};

export default AdAtelierStudio;