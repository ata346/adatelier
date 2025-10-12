import { Search, Users, FileText, CheckCircle, Sparkles, Clock } from "lucide-react";

const HowWeWork = () => {
  const processSteps = [
    {
      icon: Search,
      title: "Step 1: Choose Your Service",
      description: "Browse our comprehensive service offerings including Strategic Brand Design, Advertising Campaigns, Social Media Marketing, and Founder Credential Cards. Select the service that aligns with your business goals and budget. Each service is designed to deliver measurable results and drive real business growth."
    },
    {
      icon: Users,
      title: "Step 2: Book Your Team",
      description: "We carefully match you with expert creative specialists from our curated network. Your dedicated team is hand-selected based on your industry, project requirements, and objectives. No junior staff—only experienced professionals with proven track records in branding and advertising excellence."
    },
    {
      icon: FileText,
      title: "Step 3: Share Your Brief",
      description: "Submit your detailed project requirements through our streamlined briefing process. Include your brand vision, target audience, competitors, timeline, and budget. Our team reviews your brief and schedules a consultation call to clarify objectives and ensure complete alignment before work begins."
    },
    {
      icon: CheckCircle,
      title: "Step 4: Review the Work",
      description: "Receive initial concepts and designs for your review. Provide detailed feedback through our collaborative review platform. Your assigned team implements revisions promptly, ensuring every deliverable meets your standards. We include multiple revision rounds to guarantee your complete satisfaction with the final output."
    },
    {
      icon: Sparkles,
      title: "Step 5: Done!",
      description: "Receive your final deliverables in all required formats along with comprehensive brand guidelines or campaign documentation. We provide ongoing support for 30 days post-delivery and remain available for future projects. Your brand assets are ready to drive influence, engagement, and measurable business results."
    }
  ];

  return (
    <section 
      id="how-we-work" 
      className="py-16 sm:py-20 md:py-24 lg:py-28 bg-secondary/20"
      aria-labelledby="how-we-work-heading"
      itemScope
      itemType="https://schema.org/HowTo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 
            id="how-we-work-heading"
            className="font-brand-heading text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6 text-brand-dark-navy px-2 sm:px-4 leading-tight"
            itemProp="name"
          >
            <span className="gradient-text">5 Steps, Zero Stress</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-brand-mid-blue mx-auto mb-4 sm:mb-6 md:mb-8"></div>
        </div>
        
        <div className="mb-10 sm:mb-12 md:mb-16">
          
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 xs:gap-5 sm:gap-6 lg:gap-8">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <article 
                  key={index} 
                  className="text-center group"
                  itemScope
                  itemType="https://schema.org/HowToStep"
                  itemProp="step"
                >
                  <div className="bg-brand-white rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 shadow-elegant hover:shadow-hover transition-all duration-500 hover:-translate-y-1 border border-brand-mid-blue/10 h-full flex flex-col min-h-[320px] xs:min-h-[360px] sm:min-h-[340px]">
                    <div className="w-12 xs:w-14 sm:w-16 h-12 xs:h-14 sm:h-16 bg-gradient-to-br from-brand-mid-blue to-brand-deep-blue rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 xs:w-7 sm:w-8 h-6 xs:h-7 sm:h-8 text-brand-white" />
                    </div>
                    <h4 
                      className="font-brand-heading text-base xs:text-lg sm:text-xl md:text-2xl text-brand-dark-navy mb-3 sm:mb-4 leading-tight"
                      itemProp="name"
                    >
                      {step.title}
                    </h4>
                    <p 
                      className="font-brand-body text-xs xs:text-sm sm:text-base text-brand-dark-navy/70 leading-relaxed flex-grow"
                      itemProp="text"
                    >
                      {step.description}
                    </p>
                    <meta itemProp="position" content={String(index + 1)} />
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center px-2 sm:px-4 mt-12 sm:mt-16 md:mt-20">
          <div className="bg-gradient-to-br from-brand-deep-blue/5 to-brand-mid-blue/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-elegant border border-brand-mid-blue/20">
            <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
              <Clock className="w-8 h-8 sm:w-10 sm:h-10 text-brand-deep-blue" />
              <h3 className="font-brand-heading text-xl xs:text-2xl sm:text-3xl md:text-4xl text-brand-dark-navy">
                On-Demand Teams Built in a Blink
              </h3>
            </div>
            <p className="font-brand-body text-sm sm:text-base md:text-lg text-brand-dark-navy/80 leading-relaxed mb-4 sm:mb-6">
              With our curated team of experts, you can instantly extend your in-house capabilities, ensuring top-notch results every time.
            </p>
            <div className="bg-brand-white rounded-xl p-4 sm:p-6 border-l-4 border-brand-deep-blue">
              <p className="font-brand-body text-sm sm:text-base md:text-lg text-brand-dark-navy/90 leading-relaxed">
                Our on-demand teams are more than just skilled—they're <strong className="text-brand-deep-blue">agile, adaptive, and ready to work behind the scenes</strong>, even when you're off the clock. Experience efficiency and quality without the stress.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;