import { 
  Palette, 
  Megaphone, 
  Share2,
  CreditCard
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Strategic Brand Design & Identity",
      description: "Professional brand identity design that positions your business for success. From logo design to complete visual identity systems, we create memorable brands that drive recognition, build trust, and convert customers across all touchpoints."
    },
    {
      icon: Megaphone,
      title: "Advertising & Marketing Campaigns",
      description: "Results-driven advertising campaigns designed to generate leads and boost sales. Our strategic approach combines creative advertising, targeted marketing, and data-driven optimization to deliver measurable ROI and sustainable business growth."
    },
    {
      icon: Share2,
      title: "Social Media Marketing & Branding",
      description: "Strategic social media marketing that builds brand authority and drives engagement. From content strategy to community management, we create social media campaigns that amplify your brand voice, increase followers, and convert social audiences into loyal customers."
    },
    {
      icon: CreditCard,
      title: "Founder Credential Card Design",
      description: "Premium PVC Founder Credential Cards that embody your brand identity and entrepreneurial journey. Custom-designed brand identity cards that make a powerful professional statement. We handle everything from creative design to premium printing and doorstep delivery—your brand story, beautifully tangible."
    }
  ];

  return (
    <section 
      id="services" 
      className="py-12 sm:py-16 md:py-20 bg-brand-light-gray/30"
      aria-labelledby="services-heading"
      itemScope
      itemType="https://schema.org/Service"
      data-ai-section="services"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 
            id="services-heading"
            className="font-brand-heading text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6 text-brand-dark-navy px-2 sm:px-4 leading-tight"
            itemProp="name"
          >
            Our <span className="gradient-text">Services</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-brand-mid-blue mx-auto mb-4 sm:mb-6 md:mb-8"></div>
          <p 
            className="font-brand-body text-sm sm:text-base md:text-lg text-brand-dark-navy/70 max-w-3xl mx-auto px-2 sm:px-4 leading-relaxed"
            itemProp="description"
          >
            Our <strong className="text-brand-deep-blue">branding and advertising agency</strong> delivers strategic brand design, 
            creative advertising campaigns, and marketing solutions that drive measurable business results. From brand identity to 
            social media marketing, we create influence-driven work that converts audiences into customers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8" itemScope itemType="https://schema.org/ItemList">
          {services.map((service, index) => (
            <article 
              key={index}
              className="group bg-background rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2"
              itemScope
              itemType="https://schema.org/Service"
              data-ai-service={service.title.toLowerCase().replace(/\s+/g, '-')}
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-brand-deep-blue rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-brand-mid-blue transition-colors duration-300">
                <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-brand-white" />
              </div>
              
              <h3 
                className="font-brand-heading text-lg sm:text-xl mb-3 sm:mb-4 text-brand-dark-navy group-hover:text-brand-deep-blue transition-colors duration-300 leading-tight"
                itemProp="name"
              >
                {service.title}
              </h3>
              
              <p 
                className="font-brand-body text-sm sm:text-base text-brand-dark-navy/70 leading-relaxed"
                itemProp="description"
              >
                {service.description}
              </p>
              
              {/* Hidden service data for AI */}
              <div className="sr-only">
                <span itemProp="serviceType">{service.title}</span>
                <span itemProp="provider" itemScope itemType="https://schema.org/Organization">
                  <span itemProp="name">Ad Atelier</span>
                </span>
                <span itemProp="areaServed">Kerala, India</span>
              </div>
            </article>
          ))}
        </div>
        
        {/* AI-specific service data */}
        <div className="sr-only" data-ai-services-summary="true">
          <h3>Complete Service Offerings</h3>
          <ul>
            <li data-service="brand-design-identity">Strategic Brand Design & Identity: Professional brand identity design, logo design, brand positioning, visual identity systems, brand guidelines, brand strategy consultation, corporate branding, brand refresh</li>
            <li data-service="advertising-campaigns">Advertising & Marketing Campaigns: Strategic advertising campaign development, creative advertising, digital marketing, campaign management, performance optimization, ROI tracking, multi-channel advertising, lead generation campaigns</li>
            <li data-service="social-media-marketing">Social Media Marketing & Branding: Social media strategy, content marketing, social media advertising, community management, influencer marketing, social media branding, engagement optimization, platform management</li>
            <li data-service="founder-credential-card">Founder Credential Card Design: Premium PVC founder credential card design and printing, custom brand identity cards, business founder ID cards, professional brand representation, tangible brand assets, doorstep delivery service</li>
          </ul>
          <div data-pricing="flexible pricing models available, consultation-based quotes, project-based pricing, retainer options">Flexible pricing options available for all business sizes</div>
          <div data-delivery="remote and on-site services, kerala-based team, india-wide service, global project capability">Service delivery across Kerala, India, and internationally</div>
        </div>
      </div>
    </section>
  );
};

export default Services;