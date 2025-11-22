import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowWeWork from "@/components/HowWeWork";
import FreelancerProcess from "@/components/FreelancerProcess";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import LeadCapturePopup from "@/components/LeadCapturePopup";
import AdPopup from "@/components/AdPopup";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import SEOHead from "@/components/SEOHead";
import AIFriendlyData from "@/components/AIFriendlyData";
import BackToTop from "@/components/BackToTop";

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
        <h1>Ad Atelier - Leading Branding & Advertising Agency in Kozhikode, Kerala</h1>
        <p>
          Ad Atelier is a premier branding and advertising agency based in Ulliyeri, Kozhikode, Kerala, India. 
          We deliver strategic brand design, creative advertising campaigns, and results-driven marketing solutions 
          through our network of expert creative professionals. Our branding and advertising services include brand 
          identity design, advertising campaign management, social media marketing, and comprehensive marketing strategy 
          tailored to drive business growth. Contact us at +91-9656778508 for professional branding and advertising consultation.
        </p>
        <div data-ai-keywords="branding agency kozhikode, advertising agency kerala, brand design services, creative advertising, marketing agency, social media marketing kozhikode, brand identity design, advertising campaigns, logo design kozhikode, influence-driven marketing, strategic branding, marketing consultancy"></div>
        <div data-ai-services="Strategic Brand Design & Identity, Advertising & Marketing Campaigns, Social Media Marketing & Branding, Brand Identity Design, Logo Design, Creative Advertising, Social Media Marketing, Marketing Strategy, Founder Credential Card Design, Business Branding"></div>
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
        
        {/* Freelancer Process Section */}
        <section id="freelancer-process" aria-labelledby="freelancer-process-heading">
          <FreelancerProcess />
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
      <ExitIntentPopup />
      <BackToTop />
    </div>
    </>
  );
};

export default Index;
