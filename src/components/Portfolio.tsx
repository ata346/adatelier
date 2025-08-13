const Portfolio = () => {
  const portfolioItems = [
    {
      title: "Tech Startup Branding",
      category: "Branding",
      description: "Complete brand identity for a cutting-edge technology startup"
    },
    {
      title: "Restaurant Digital Campaign",
      category: "Digital Advertising",
      description: "Social media campaign that increased foot traffic by 150%"
    },
    {
      title: "Fashion Brand Launch",
      category: "Social Media",
      description: "Comprehensive social media strategy for fashion brand launch"
    },
    {
      title: "Corporate Event Promotion",
      category: "Digital Wall Ads",
      description: "Large-scale digital advertising campaign for corporate events"
    },
    {
      title: "E-commerce Rebranding",
      category: "Branding",
      description: "Complete rebrand strategy that doubled online sales"
    },
    {
      title: "Healthcare Digital Presence",
      category: "Digital Marketing",
      description: "Digital transformation for healthcare provider"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-brand-heading text-4xl md:text-5xl lg:text-6xl mb-6 text-brand-dark-navy">
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <div className="w-24 h-1 bg-brand-mid-blue mx-auto mb-8"></div>
          <p className="font-brand-body text-lg text-brand-dark-navy/70 max-w-3xl mx-auto">
            Explore some of our recent work and see how we've helped businesses transform their brand presence and achieve remarkable results.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div 
              key={index}
              className="group bg-brand-light-gray/50 rounded-2xl overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-2"
            >
              <div className="h-48 bg-gradient-to-br from-brand-deep-blue to-brand-mid-blue"></div>
              
              <div className="p-6">
                <span className="inline-block bg-brand-mid-blue/10 text-brand-deep-blue text-sm font-brand-body px-3 py-1 rounded-full mb-3">
                  {item.category}
                </span>
                
                <h3 className="font-brand-heading text-xl mb-3 text-brand-dark-navy group-hover:text-brand-deep-blue transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="font-brand-body text-brand-dark-navy/70 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;