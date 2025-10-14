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
      description: "Transform your business into a commanding market presence with brand identities engineered for influence. We craft comprehensive visual systems—logos, typography, color psychology, brand guidelines—that position you as the premium choice in your category. Our strategic approach ensures every brand touchpoint reinforces customer confidence, elevates perceived value, and drives conversion rates 30-50% higher than generic branding."
    },
    {
      icon: Megaphone,
      title: "Advertising & Marketing Campaigns",
      description: "Launch advertising campaigns that generate measurable business results, not just impressions. Our performance-focused approach combines psychological triggers, compelling creative, precise audience targeting, and continuous optimization to deliver qualified leads, increased sales velocity, and customer acquisition costs 25-40% below industry benchmarks. Every campaign is built on strategy, executed with creativity, and validated with data."
    },
    {
      icon: Share2,
      title: "Social Media Marketing & Branding",
      description: "Build social media presence that converts followers into revenue-generating customers. We architect content strategies that establish thought leadership, create authentic engagement, and systematically guide audiences from awareness to purchase. Our approach combines platform-specific expertise, viral-worthy creative, community cultivation, and conversion optimization to deliver follower growth, brand advocacy, and direct sales attribution that justify every rupee invested."
    },
    {
      icon: CreditCard,
      title: "Founder Credential Card Design",
      description: "Command instant credibility with premium Founder Credential Cards that position you as a serious business leader. These aren't standard business cards—they're tangible brand statements crafted from premium PVC with sophisticated design that communicates authority, professionalism, and founder-level status. Custom-designed to embody your personal brand and entrepreneurial journey, delivered ready to make powerful first impressions. From concept to premium printing to doorstep delivery—we handle everything."
    }
  ];

  return (
    <section 
      id="services" 
      className="py-16 sm:py-20 md:py-24 lg:py-28 bg-brand-light-gray/30"
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
            <strong className="text-brand-deep-blue">Ad Atelier specializes in building brands that influence customer decisions and drive measurable revenue</strong>. 
            Our comprehensive services combine strategic thinking, creative excellence, and performance optimization to deliver branding and advertising 
            solutions that don't just capture attention—they command influence, convert customers, and generate sustainable competitive advantage for 
            businesses across Kerala and beyond.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8" itemScope itemType="https://schema.org/ItemList">
          {services.map((service, index) => (
            <article 
              key={index}
              className="group bg-background rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 shadow-elegant hover:shadow-hover transition-all duration-500 hover:-translate-y-2 border border-brand-light-gray/20"
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