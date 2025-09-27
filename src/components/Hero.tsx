import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden"
      role="banner"
      aria-labelledby="hero-heading"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <div 
        className="absolute inset-0 opacity-10 bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: `url(${heroBg})` }} 
        aria-hidden="true" 
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 sm:py-24">
        <header className="animate-fade-in">
          <h1 
            id="hero-heading"
            className="font-brand-heading text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-4 sm:mb-6 gradient-text tracking-tight leading-tight px-2"
            itemProp="name"
          >
            Ad Atelier
          </h1>
          
          <h2 
            className="font-brand-body text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-brand-dark-navy mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed px-2 sm:px-4"
            itemProp="slogan"
          >
            Designing Influence - Not Just Attention
          </h2>
          
          {/* Hidden description for AI */}
          <div 
            className="sr-only"
            itemProp="description"
          >
            Creative branding studio transforming businesses through strategic design, innovative campaigns, and expert freelance collaboration across Kerala and India
          </div>
          
          <Button 
            variant="hero" 
            size="lg" 
            onClick={scrollToContact} 
            className="text-sm xs:text-base md:text-lg px-4 xs:px-6 md:px-8 py-3 md:py-4 group w-auto min-w-[140px] sm:min-w-[160px]"
            aria-label="Get started with Ad Atelier - Contact us for branding and marketing services"
          >
            Get Started
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
          </Button>
        </header>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-5 left-5 sm:top-10 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 bg-brand-mid-blue/20 rounded-full blur-xl animate-pulse" aria-hidden="true" />
      <div className="absolute bottom-10 right-5 sm:bottom-20 sm:right-20 w-24 h-24 sm:w-32 sm:h-32 bg-brand-deep-blue/20 rounded-full blur-xl animate-pulse delay-1000" aria-hidden="true" />
      
      {/* Schema.org structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Ad Atelier",
          "slogan": "Designing Influence - Not Just Attention",
          "description": "Creative branding studio in Kozhikode transforming businesses through strategic design, innovative campaigns, and expert freelance collaboration",
          "url": "https://ad-atelier.com",
          "logo": "/lovable-uploads/d7b2780c-4663-4385-a815-82bb418fb3f8.png",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Kozhikode",
            "addressRegion": "Kerala",
            "addressCountry": "IN"
          },
          "knowsAbout": [
            "Strategic Branding",
            "Digital Marketing", 
            "Creative Design",
            "Social Media Marketing",
            "Brand Identity Design",
            "Logo Design",
            "Marketing Campaigns"
          ]
        })
      }} />
    </section>
  );
};

export default Hero;