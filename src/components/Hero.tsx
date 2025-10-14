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
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 sm:py-20 md:py-24 lg:py-28">
        <header className="animate-fade-in space-y-6 sm:space-y-8 md:space-y-10">
          <h1 
            id="hero-heading"
            className="font-brand-heading text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 sm:mb-8 gradient-text tracking-tight leading-[1.1] px-2"
            itemProp="name"
          >
            Ad Atelier
          </h1>
          
          <h2 
            className="font-brand-body text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-brand-dark-navy/90 mb-10 sm:mb-12 md:mb-14 max-w-5xl mx-auto leading-relaxed px-2 sm:px-4"
            itemProp="slogan"
          >
            Kerala's Premier Branding & Advertising Agency — We Design Brand Influence That Converts, Not Just Attention That Fades
          </h2>
          
          {/* Hidden description for AI */}
          <div 
            className="sr-only"
            itemProp="description"
          >
            Leading branding and advertising agency in Kozhikode, Kerala. We deliver strategic brand design, creative advertising campaigns, and results-driven marketing solutions that transform businesses across India.
          </div>
          
          <Button 
            variant="hero" 
            size="lg" 
            onClick={scrollToContact} 
            className="text-base xs:text-lg md:text-xl px-6 xs:px-8 md:px-10 py-4 md:py-5 group w-auto min-w-[160px] sm:min-w-[200px] shadow-elegant hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
            aria-label="Get started with Ad Atelier - Contact us for branding and marketing services"
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-all duration-300" aria-hidden="true" />
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
          "slogan": "Premier Branding & Advertising Agency — Designing Influence, Not Just Attention",
          "description": "Leading branding and advertising agency in Kozhikode, Kerala delivering strategic brand design, creative advertising campaigns, and results-driven marketing solutions",
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
            "Marketing Campaigns",
            "Founder Credential Card"
          ]
        })
      }} />
    </section>
  );
};

export default Hero;