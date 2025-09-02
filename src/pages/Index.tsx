import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowWeWork from "@/components/HowWeWork";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";

const Index = () => {
  return (
    <div className="min-h-screen" itemScope itemType="https://schema.org/WebPage">
      {/* Skip to main content for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50"
        aria-label="Skip to main content"
      >
        Skip to main content
      </a>
      
      <Navigation />
      
      <main id="main-content" role="main" aria-label="Main content">
        {/* Hero Section */}
        <section id="home" aria-labelledby="hero-heading">
          <Hero />
        </section>
        
        {/* About Section */}
        <section id="about" aria-labelledby="about-heading">
          <About />
        </section>
        
        {/* Services Section */}
        <section id="services" aria-labelledby="services-heading">
          <Services />
        </section>
        
        {/* Why Choose Us Section */}
        <section id="why-choose-us" aria-labelledby="why-choose-us-heading">
          <WhyChooseUs />
        </section>
        
        {/* How We Work Section */}
        <section id="how-we-work" aria-labelledby="how-we-work-heading">
          <HowWeWork />
        </section>
        
        {/* Contact Section */}
        <section id="contact" aria-labelledby="contact-heading">
          <Contact />
        </section>
      </main>
      
      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default Index;
