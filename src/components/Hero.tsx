import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroBg})`
    }} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Logo */}
          <h1 className="font-brand-heading text-6xl md:text-8xl lg:text-9xl mb-4 gradient-text tracking-tight">
            Ad Atelier
          </h1>
          
          {/* Slogan */}
          <p className="font-brand-body text-xl md:text-2xl lg:text-3xl text-brand-dark-navy mb-8 max-w-4xl mx-auto leading-relaxed">Designing Influence, Not Just Attention</p>
          
          {/* CTA Button */}
          <Button variant="hero" size="lg" onClick={scrollToContact} className="text-lg px-8 py-4 group">
            Get Started
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-brand-mid-blue/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-brand-deep-blue/20 rounded-full blur-xl animate-pulse delay-1000" />
    </section>;
};
export default Hero;