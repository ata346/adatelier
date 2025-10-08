import { 
  Palette, 
  Megaphone, 
  Monitor, 
  Settings, 
  Share2,
  CreditCard
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Brand Design",
      description: "Complete brand identity that helps people remember you and take action. We create logos and designs that don't just look great - they help your business stand out and grow."
    },
    {
      icon: Megaphone,
      title: "Marketing Campaigns",
      description: "Smart campaign planning and management that actually gets results. We create campaigns that help people choose your business, not just notice it."
    },
    {
      icon: Monitor,
      title: "Website & Digital Design",
      description: "Beautiful digital experiences everywhere your customers find you. From websites to online ads, we design things that look great and work well for your business."
    },
    {
      icon: Share2,
      title: "Social Media Strategy",
      description: "Smart social media that actually helps your business. We create content and plans that get people engaged with your brand and become customers."
    },
    {
      icon: CreditCard,
      title: "Founder Credential Card",
      description: "Your brand identity deserves something you can hold with pride. We design custom premium PVC Founder Credential Cards that represent your entrepreneurial journey and brand story. From custom design to doorstep delivery, we create a tangible symbol of who you are as a founder."
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
            Our team of creative experts delivers great branding and digital marketing that actually helps your business grow. 
            From logo design to social media, we create beautiful work that gets you real customers and results.
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
            <li data-service="strategic-branding">Strategic Branding: Complete brand identity design, logo creation, brand positioning, visual identity systems, brand guidelines, brand strategy consultation</li>
            <li data-service="influence-campaigns">Influence-Driven Campaigns: Marketing campaign development, advertising strategy, campaign management, performance optimization, ROI tracking, multi-channel campaigns</li>
            <li data-service="digital-experience">Digital Experience Design: Website design, user interface design, user experience optimization, digital advertising, mobile app design, responsive design</li>
            <li data-service="social-influence">Social Influence Strategy: Social media marketing, content strategy, community management, influencer partnerships, social media advertising, engagement optimization</li>
          </ul>
          <div data-pricing="flexible pricing models available, consultation-based quotes, project-based pricing, retainer options">Flexible pricing options available for all business sizes</div>
          <div data-delivery="remote and on-site services, kerala-based team, india-wide service, global project capability">Service delivery across Kerala, India, and internationally</div>
        </div>
      </div>
    </section>
  );
};

export default Services;