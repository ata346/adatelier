import { CheckCircle, Users, Target, Clock } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Target,
      title: "Results That Matter",
      problem: "Tired of campaigns that look good but don't drive business results?",
      solution: "We focus on measurable outcomes that directly impact your bottom line, not just vanity metrics."
    },
    {
      icon: Users,
      title: "Right Talent, Right Time",
      problem: "Struggling with agencies that assign junior staff to your important projects?",
      solution: "Our curated network ensures you get senior-level expertise matched specifically to your project needs."
    },
    {
      icon: Clock,
      title: "Speed Without Compromise",
      problem: "Frustrated with slow agency processes and endless revision cycles?",
      solution: "Our streamlined freelance model delivers faster turnarounds while maintaining exceptional quality standards."
    },
    {
      icon: CheckCircle,
      title: "Transparent 25% Commission",
      problem: "Paying premium agency rates for overhead costs that don't benefit your project?",
      solution: "Our clear 25% commission model eliminates hidden fees - you pay the freelancer's rate plus our 25% for project management, quality assurance, and delivery guarantee."
    }
  ];

  return (
    <section id="why-choose-us" className="py-12 sm:py-16 md:py-20 bg-brand-light-gray/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="font-brand-heading text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6 text-brand-dark-navy px-2 sm:px-4 leading-tight">
            Why Choose <span className="gradient-text">Ad Atelier</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-brand-mid-blue mx-auto mb-4 sm:mb-6 md:mb-8"></div>
          <p className="font-brand-body text-sm sm:text-base md:text-lg text-brand-dark-navy/70 max-w-3xl mx-auto px-2 sm:px-4 leading-relaxed">
            We understand the challenges businesses face with traditional agencies. Here's how we solve them differently 
            with our <strong className="text-brand-deep-blue">transparent 25% commission structure</strong>.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="group bg-background rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-brand-deep-blue rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-brand-mid-blue transition-colors duration-300">
                <reason.icon className="w-6 h-6 sm:w-8 sm:h-8 text-brand-white" />
              </div>
              
              <h3 className="font-brand-heading text-lg sm:text-xl mb-3 sm:mb-4 text-brand-dark-navy group-hover:text-brand-deep-blue transition-colors duration-300 leading-tight">
                {reason.title}
              </h3>
              
              <div className="space-y-3 sm:space-y-4">
                <p className="font-brand-body text-sm sm:text-base text-brand-dark-navy/60 leading-relaxed italic">
                  {reason.problem}
                </p>
                <p className="font-brand-body text-sm sm:text-base text-brand-dark-navy/80 leading-relaxed font-medium">
                  {reason.solution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;