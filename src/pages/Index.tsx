import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowWeWork from "@/components/HowWeWork";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import LeadCapturePopup from "@/components/LeadCapturePopup";
import AdPopup from "@/components/AdPopup";
import SEOHead from "@/components/SEOHead";
import AIFriendlyData from "@/components/AIFriendlyData";

const Index = () => {
  return (
    <>
      <SEOHead />
      <AIFriendlyData />
      <div 
        className="min-h-screen" 
        itemScope 
        itemType="https://schema.org/WebPage"
        data-ai-content="primary-business-page"
        data-ai-category="branding-agency"
        data-ai-location="kozhikode-kerala-india"
      >
      {/* Skip to main content for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50"
        aria-label="Skip to main content"
      >
        Skip to main content
      </a>
      
      {/* AI Content Summary for Crawlers */}
      <div className="sr-only" data-ai-summary="true">
        <h1>Ad Atelier - Premier Branding Agency in Kozhikode, Kerala</h1>
        <p>
          Ad Atelier is a creative branding studio based in Ulliyeri, Kozhikode, Kerala, India. 
          We connect businesses with expert creative professionals through our curated freelance network. 
          Our collaborative approach delivers brand identity design, marketing campaigns, social media strategy, 
          and digital solutions tailored to each client's unique needs. Reach us at +91-9656778508 or visit 
          our Kozhikode studio for personalized branding and marketing consultation.
        </p>
        <div data-ai-keywords="best branding agency near me, branding agency kozhikode, digital marketing kerala, creative agency ulliyeri, brand design services, social media marketing kozhikode, advertising agency kerala, freelance creative network, marketing consultants kerala, logo design kozhikode, influence-driven marketing, strategic branding solutions"></div>
        <div data-ai-services="Strategic Branding, Influence-Driven Campaigns, Digital Experience Design, Social Influence Strategy, Brand Identity, Logo Design, Digital Marketing, Social Media Marketing, Creative Design, Marketing Consultancy"></div>
        <div data-ai-location="Ulliyeri, Kozhikode, Kerala 673323, India"></div>
        <div data-ai-contact="phone:+91-9656778508, email:contact@ad-atelier.com, website:https://ad-atelier.com"></div>
      </div>
      
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
        
        {/* Pricing Section */}
        <section id="pricing" aria-labelledby="pricing-heading">
          <Pricing />
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
      <LeadCapturePopup />
      <AdPopup />
    </div>
    </>
  );
};

export default Index;
