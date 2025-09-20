import { useState } from 'react';
import { Button } from '@/components/ui/button';

const AdAtelierStudio = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background font-brand-body">
      {/* Hero Section */}
      <section className="min-h-screen bg-brand-dark-navy flex items-center justify-center px-4">
        <div className="text-center animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-brand-heading text-brand-white uppercase tracking-wide mb-6">
            Ad Atelier Studio
          </h1>
          <p className="text-xl md:text-2xl text-brand-white italic mb-12 font-light">
            "Capturing life's best moments in just one snap!"
          </p>
          <Button
            onClick={scrollToContact}
            variant="outline"
            size="lg"
            className="bg-brand-white text-brand-dark-navy border-brand-white hover:bg-brand-dark-navy hover:text-brand-white uppercase tracking-wider"
          >
            Get in Touch
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
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
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-brand-heading text-foreground text-center mb-16 uppercase tracking-wide">
            Our Services
          </h2>
          <div className="flex justify-center">
            <div className="bg-brand-dark-navy text-brand-white p-12 rounded-lg hover:scale-105 transition-transform duration-300 max-w-md animate-fade-in">
              <h3 className="text-2xl font-brand-heading mb-4 uppercase tracking-wider">
                Mobile Video Shooting & Editing
              </h3>
              <p className="text-lg leading-relaxed">
                Professional mobile video production services that deliver cinematic quality. 
                From concept to final edit, we create compelling visual content that captures 
                your story with precision and artistry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-brand-heading text-foreground text-center mb-16 uppercase tracking-wide">
            Portfolio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="aspect-video bg-brand-dark-navy rounded-lg hover:scale-105 hover:opacity-80 transition-all duration-300 flex items-center justify-center cursor-pointer animate-fade-in"
                style={{ animationDelay: `${item * 0.2}s` }}
              >
                <div className="text-brand-white text-center">
                  <div className="w-16 h-16 bg-brand-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 12l-6-4h12l-6 4z" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium">Video {item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-brand-dark-navy">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-brand-heading text-brand-white text-center mb-16 uppercase tracking-wide">
            Let's Work Together
          </h2>
          
          <div className="text-center mb-12">
            <p className="text-brand-white text-lg mb-4">Ready to create something amazing?</p>
            <a
              href="mailto:communityfirefox87@gmail.com"
              className="text-brand-white text-xl font-semibold hover:underline"
            >
              communityfirefox87@gmail.com
            </a>
          </div>

          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-6 py-4 bg-brand-white text-brand-dark-navy rounded-lg border-2 border-transparent focus:border-muted focus:outline-none text-lg"
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
                className="w-full px-6 py-4 bg-brand-white text-brand-dark-navy rounded-lg border-2 border-transparent focus:border-muted focus:outline-none text-lg"
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
                className="w-full px-6 py-4 bg-brand-white text-brand-dark-navy rounded-lg border-2 border-transparent focus:border-muted focus:outline-none text-lg resize-none"
              />
            </div>
            <div className="text-center">
              <Button
                type="submit"
                variant="outline"
                size="lg"
                className="bg-brand-white text-brand-dark-navy border-brand-white hover:bg-transparent hover:text-brand-white uppercase tracking-wider"
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
  );
};

export default AdAtelierStudio;