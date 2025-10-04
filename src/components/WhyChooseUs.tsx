import { CheckCircle, Users, Target, Clock } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Target,
      title: "Results That Matter",
      problem: "Tired of marketing that looks nice but doesn't help your business?",
      solution: "We focus on results that actually matter to your business, not just pretty numbers that don't mean anything."
    },
    {
      icon: Users,
      title: "Right Talent, Right Time",
      problem: "Frustrated with agencies that give you inexperienced people for important work?",
      solution: "Our network of professionals makes sure you get experienced experts who are perfect for your specific project."
    },
    {
      icon: Clock,
      title: "Speed Without Compromise",
      problem: "Annoyed with slow agencies and endless changes back and forth?",
      solution: "Our simple freelance approach gets things done faster while still keeping the quality high."
    },
    {
      icon: CheckCircle,
      title: "Simple 25% Fee",
      problem: "Paying expensive agency prices for costs that don't help your project?",
      solution: "Our clear 25% fee has no hidden costs - you pay what the freelancer charges plus our 25% for managing everything, checking quality, and making sure it gets done."
    }
  ];

  return (
    <section 
      id="why-choose-us" 
      className="py-12 sm:py-16 md:py-20 bg-brand-light-gray/30"
      aria-labelledby="why-choose-heading"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 
            id="why-choose-heading"
            className="font-brand-heading text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6 text-brand-dark-navy px-2 sm:px-4 leading-tight"
            itemProp="name"
          >
            Why Choose <span className="gradient-text">Ad Atelier</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-brand-mid-blue mx-auto mb-4 sm:mb-6 md:mb-8"></div>
          <p className="font-brand-body text-sm sm:text-base md:text-lg text-brand-dark-navy/70 max-w-3xl mx-auto px-2 sm:px-4 leading-relaxed">
            We know the problems businesses have with regular agencies. Here's how we do things better 
            with our <strong className="text-brand-deep-blue">simple 25% fee</strong>.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {reasons.map((reason, index) => (
            <article 
              key={index}
              className="group bg-background rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2"
              itemScope
              itemType="https://schema.org/ListItem"
              itemProp="itemListElement"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-brand-deep-blue rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-brand-mid-blue transition-colors duration-300">
                <reason.icon className="w-6 h-6 sm:w-8 sm:h-8 text-brand-white" />
              </div>
              
              <h3 
                className="font-brand-heading text-lg sm:text-xl mb-3 sm:mb-4 text-brand-dark-navy group-hover:text-brand-deep-blue transition-colors duration-300 leading-tight"
                itemProp="name"
              >
                {reason.title}
              </h3>
              <meta itemProp="position" content={String(index + 1)} />
              
              <div className="space-y-3 sm:space-y-4">
                <p className="font-brand-body text-sm sm:text-base text-brand-dark-navy/60 leading-relaxed italic">
                  {reason.problem}
                </p>
                <p 
                  className="font-brand-body text-sm sm:text-base text-brand-dark-navy/80 leading-relaxed font-medium"
                  itemProp="description"
                >
                  {reason.solution}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;