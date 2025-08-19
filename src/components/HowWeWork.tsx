import { Ear, Users, Palette, Rocket } from "lucide-react";

const HowWeWork = () => {
  const processSteps = [
    {
      icon: Ear,
      title: "We Listen",
      description: "We start by understanding your brand, objectives, and vision to identify what will genuinely engage and influence your audience."
    },
    {
      icon: Users,
      title: "We Assemble",
      description: "From our curated network of freelancers, we select the specialists best suited for your project—designers, strategists, and storytellers ensuring the right skills are applied at the right time."
    },
    {
      icon: Palette,
      title: "We Create",
      description: "While our freelancers develop the work, we manage timelines, quality, and coordination. This guarantees creativity that is both polished and purposeful."
    },
    {
      icon: Rocket,
      title: "We Deliver",
      description: "Whether it's campaigns, branding, or social content, we deliver projects that make an impact creating results that matter, not just attention."
    }
  ];

  return (
    <section id="how-we-work" className="py-12 sm:py-16 md:py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="font-brand-heading text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6 text-brand-dark-navy px-2 sm:px-4 leading-tight">
            How <span className="gradient-text">We Work</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-brand-mid-blue mx-auto mb-4 sm:mb-6 md:mb-8"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-12 md:mb-16 px-2 sm:px-4">
          <p className="font-brand-body text-sm sm:text-base md:text-lg text-brand-dark-navy/80 leading-relaxed">
            At Kerala's leading branding agency, we don't just create—we design influence. Operating through 
            a network of highly skilled freelance creatives across Kozhikode and India, we assemble the 
            right team for every project. No full-time employees, no unnecessary overhead—just the creative 
            expertise your brand requires from the best professionals near you.
          </p>
        </div>

        <div className="mb-10 sm:mb-12 md:mb-16">
          <h3 className="font-brand-heading text-xl xs:text-2xl sm:text-3xl md:text-4xl text-center text-brand-dark-navy mb-8 sm:mb-10 md:mb-12">
            Our Process
          </h3>
          
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-5 sm:gap-6 lg:gap-8">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-brand-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-elegant hover:shadow-glow transition-all duration-300 border border-brand-mid-blue/10 h-full flex flex-col min-h-[280px] xs:min-h-[320px] sm:min-h-[300px]">
                    <div className="w-12 xs:w-14 sm:w-16 h-12 xs:h-14 sm:h-16 bg-gradient-to-br from-brand-mid-blue to-brand-deep-blue rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 xs:w-7 sm:w-8 h-6 xs:h-7 sm:h-8 text-brand-white" />
                    </div>
                    <h4 className="font-brand-heading text-base xs:text-lg sm:text-xl md:text-2xl text-brand-dark-navy mb-3 sm:mb-4 leading-tight">
                      {step.title}
                    </h4>
                    <p className="font-brand-body text-xs xs:text-sm sm:text-sm md:text-base text-brand-dark-navy/70 leading-relaxed flex-grow">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center px-2 sm:px-4">
          <div className="bg-gradient-to-br from-brand-white to-brand-light-gray/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-elegant border border-brand-mid-blue/10">
            <p className="font-brand-body text-sm sm:text-base md:text-lg text-brand-dark-navy/80 leading-relaxed font-medium">
              We combines the flexibility of a freelance network with the reliability of an agency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;