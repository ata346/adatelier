import { 
  Palette, 
  Megaphone, 
  Monitor, 
  Settings, 
  Share2 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Branding",
      description: "Complete brand identity development including logos, color schemes, and brand guidelines that make your business memorable."
    },
    {
      icon: Megaphone,
      title: "Ads Running",
      description: "Strategic ad campaign management across all platforms to maximize your reach and optimize conversion rates."
    },
    {
      icon: Monitor,
      title: "Digital Wall Ads Creating",
      description: "Eye-catching digital wall advertisements designed to capture attention and deliver your message effectively."
    },
    {
      icon: Share2,
      title: "Social Media Branding",
      description: "Comprehensive social media presence development with consistent branding across all platforms and engaging content."
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-brand-light-gray/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="font-brand-heading text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6 text-brand-dark-navy px-2 sm:px-4 leading-tight">
            Our <span className="gradient-text">Services</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-brand-mid-blue mx-auto mb-4 sm:mb-6 md:mb-8"></div>
          <p className="font-brand-body text-sm sm:text-base md:text-lg text-brand-dark-navy/70 max-w-3xl mx-auto px-2 sm:px-4 leading-relaxed">
            We offer comprehensive advertising solutions tailored to meet your unique business needs and drive exceptional results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-background rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-brand-deep-blue rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-brand-mid-blue transition-colors duration-300">
                <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-brand-white" />
              </div>
              
              <h3 className="font-brand-heading text-lg sm:text-xl mb-3 sm:mb-4 text-brand-dark-navy group-hover:text-brand-deep-blue transition-colors duration-300 leading-tight">
                {service.title}
              </h3>
              
              <p className="font-brand-body text-sm sm:text-base text-brand-dark-navy/70 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;