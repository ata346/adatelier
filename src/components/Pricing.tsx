import { Calculator, TrendingUp, Shield, CheckCircle } from "lucide-react";

const Pricing = () => {
  const pricingFeatures = [
    {
      icon: Calculator,
      title: "Simple 25% Commission",
      description: "Pay the freelancer's quoted rate plus our 25% commission. No hidden fees, no surprise charges, no complex pricing tiers."
    },
    {
      icon: TrendingUp,
      title: "Value-Based Pricing",
      description: "Our commission covers project management, quality assurance, client communication, and delivery guarantee - ensuring you get professional results."
    },
    {
      icon: Shield,
      title: "Risk-Free Guarantee",
      description: "Your 25% commission includes our satisfaction guarantee. If you're not happy with the delivery, we'll make it right at no extra cost."
    }
  ];

  const pricingExamples = [
    {
      service: "Logo Design",
      freelancerRate: "₹15,000",
      commission: "₹3,750",
      totalCost: "₹18,750",
      description: "Complete brand identity package with 3 concepts and unlimited revisions"
    },
    {
      service: "Social Media Campaign",
      freelancerRate: "₹25,000",
      commission: "₹6,250", 
      totalCost: "₹31,250",
      description: "30-day campaign strategy with content creation and performance monitoring"
    },
    {
      service: "Website Design",
      freelancerRate: "₹50,000",
      commission: "₹12,500",
      totalCost: "₹62,500",
      description: "Responsive website design with UX optimization and mobile compatibility"
    }
  ];

  return (
    <section id="pricing" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="font-brand-heading text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6 text-brand-dark-navy px-2 sm:px-4 leading-tight">
            Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-brand-mid-blue mx-auto mb-4 sm:mb-6 md:mb-8"></div>
          <p className="font-brand-body text-sm sm:text-base md:text-lg text-brand-dark-navy/70 max-w-3xl mx-auto px-2 sm:px-4 leading-relaxed">
            No complex pricing tiers or hidden fees. Our simple <strong className="text-brand-deep-blue">25% commission model</strong> 
            ensures you know exactly what you're paying for.
          </p>
        </div>

        {/* Commission Explanation */}
        <div className="max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20">
          <div className="bg-gradient-to-br from-brand-deep-blue to-brand-mid-blue rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 text-brand-white text-center">
            <h3 className="font-brand-heading text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6">
              How Our 25% Commission Works
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-center">
              <div className="bg-brand-white/10 rounded-lg p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl font-bold mb-2">75%</div>
                <div className="text-sm sm:text-base">Freelancer Keeps</div>
              </div>
              <div className="bg-brand-white/20 rounded-lg p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl font-bold mb-2">25%</div>
                <div className="text-sm sm:text-base">Our Commission</div>
              </div>
              <div className="bg-brand-white/10 rounded-lg p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl font-bold mb-2">100%</div>
                <div className="text-sm sm:text-base">Satisfaction Guaranteed</div>
              </div>
            </div>
          </div>
        </div>

        {/* What's Included */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <h3 className="font-brand-heading text-xl sm:text-2xl md:text-3xl text-center text-brand-dark-navy mb-8 sm:mb-10 md:mb-12">
            What Your 25% Commission Includes
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {pricingFeatures.map((feature, index) => (
              <div 
                key={index}
                className="group bg-brand-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-1 border border-brand-mid-blue/10"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-brand-deep-blue rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-brand-mid-blue transition-colors duration-300">
                  <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-brand-white" />
                </div>
                
                <h4 className="font-brand-heading text-lg sm:text-xl mb-3 sm:mb-4 text-brand-dark-navy group-hover:text-brand-deep-blue transition-colors duration-300 leading-tight">
                  {feature.title}
                </h4>
                
                <p className="font-brand-body text-sm sm:text-base text-brand-dark-navy/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Examples */}
        <div className="mb-10 sm:mb-12 md:mb-16">
          <h3 className="font-brand-heading text-xl sm:text-2xl md:text-3xl text-center text-brand-dark-navy mb-8 sm:mb-10 md:mb-12">
            Pricing Examples
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {pricingExamples.map((example, index) => (
              <div 
                key={index}
                className="bg-brand-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-elegant border border-brand-mid-blue/10 hover:shadow-glow transition-all duration-300"
              >
                <h4 className="font-brand-heading text-lg sm:text-xl text-brand-dark-navy mb-3 sm:mb-4">
                  {example.service}
                </h4>
                <p className="font-brand-body text-xs sm:text-sm text-brand-dark-navy/60 mb-4 sm:mb-6">
                  {example.description}
                </p>
                
                <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  <div className="flex justify-between items-center">
                    <span className="font-brand-body text-sm sm:text-base text-brand-dark-navy/70">Freelancer Rate:</span>
                    <span className="font-brand-body text-sm sm:text-base font-semibold text-brand-dark-navy">{example.freelancerRate}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-brand-body text-sm sm:text-base text-brand-dark-navy/70">Our Commission (25%):</span>
                    <span className="font-brand-body text-sm sm:text-base font-semibold text-brand-deep-blue">{example.commission}</span>
                  </div>
                  <div className="border-t border-brand-mid-blue/20 pt-2">
                    <div className="flex justify-between items-center">
                      <span className="font-brand-body text-base sm:text-lg font-bold text-brand-dark-navy">Total Cost:</span>
                      <span className="font-brand-body text-base sm:text-lg font-bold text-brand-deep-blue">{example.totalCost}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center text-green-600">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  <span className="font-brand-body text-xs sm:text-sm">Includes quality guarantee</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-brand-light-gray/20 to-brand-white rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 shadow-elegant border border-brand-mid-blue/10 max-w-2xl mx-auto">
            <h3 className="font-brand-heading text-lg sm:text-xl md:text-2xl text-brand-dark-navy mb-4 sm:mb-6">
              Ready to Get Started?
            </h3>
            <p className="font-brand-body text-sm sm:text-base text-brand-dark-navy/70 mb-6 sm:mb-8">
              Get a detailed quote for your project. We'll match you with the perfect freelancer and provide transparent pricing with our 25% commission structure.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-brand-mid-blue text-brand-white hover:bg-brand-deep-blue rounded-lg font-brand-body font-semibold text-sm sm:text-base transition-all duration-300 shadow-glow hover:shadow-elegant"
            >
              Get Your Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;