import { CheckCircle, Users, Target, Clock } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Target,
      title: "Results-Driven Branding & Advertising",
      problem: "Tired of branding and advertising that looks impressive but doesn't drive business results?",
      solution: "Our branding and advertising agency focuses on strategic solutions that generate measurable ROI—brand recognition, customer acquisition, and revenue growth that truly impact your bottom line."
    },
    {
      icon: Users,
      title: "Expert Creative Specialists",
      problem: "Frustrated with advertising agencies that assign junior staff to your brand-critical projects?",
      solution: "Our curated network of branding and advertising specialists ensures you work with seasoned professionals—brand designers, advertising strategists, and marketing experts perfectly matched to your industry and objectives."
    },
    {
      icon: Clock,
      title: "Agile Agency Execution",
      problem: "Annoyed with traditional advertising agencies that move slowly with endless approval chains?",
      solution: "Our streamlined agency model delivers premium branding and advertising work faster—combining the quality of established agencies with the speed and flexibility modern businesses demand."
    },
    {
      icon: CheckCircle,
      title: "Transparent Pricing Model",
      problem: "Tired of inflated agency fees and hidden costs in branding and advertising projects?",
      solution: "Our transparent 25% fee structure means no surprises—you pay the creative professional's rate plus 25% for project management, quality assurance, and guaranteed satisfaction on all branding and advertising deliverables."
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
            As a <strong className="text-brand-deep-blue">professional branding and advertising agency</strong>, we solve the 
            common challenges businesses face with traditional agencies—delivering strategic branding, creative advertising, 
            and marketing excellence with our <strong className="text-brand-deep-blue">transparent 25% fee structure</strong>.
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