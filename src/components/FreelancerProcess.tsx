import { Search, Users, FileText, CheckCircle, DollarSign, Briefcase } from "lucide-react";

const FreelancerProcess = () => {
  const processSteps = [
    {
      icon: Search,
      title: "Step 1: Pick Your Projects",
      description: "Browse available projects across brand design, advertising, social media, and marketing. Filter by your expertise, preferred budget range, and timeline. Select projects that align with your skills and creative interests. You're in control—choose work you'll genuinely enjoy and excel at delivering."
    },
    {
      icon: Users,
      title: "Step 2: Join the Team",
      description: "Get matched with complementary creative professionals who enhance your work. Collaborate with strategists, designers, copywriters, and marketers who share your commitment to quality. Our team structure ensures seamless collaboration, clear communication, and outstanding results for every client project."
    },
    {
      icon: FileText,
      title: "Step 3: Receive the Brief",
      description: "Access comprehensive project briefs including client objectives, target audience, brand guidelines, deliverable formats, timeline, and budget. Attend kickoff meetings to clarify expectations and ask questions. All project requirements are clearly documented to ensure you have everything needed for success."
    },
    {
      icon: CheckCircle,
      title: "Step 4: Submit Your Work",
      description: "Upload your deliverables through our secure platform for quality review. Receive constructive feedback from our project managers and implement revisions as needed. Your work undergoes thorough quality checks before client presentation. We support you throughout the revision process to ensure excellence."
    },
    {
      icon: DollarSign,
      title: "Step 5: Get Paid & Move On",
      description: "Receive 75% of the project fee directly to your account upon project completion—we take only 25% for client acquisition, project management, and quality assurance. Get paid within 5 business days. Build your portfolio with high-quality work and establish long-term client relationships through our platform."
    }
  ];

  return (
    <section 
      id="freelancer-process" 
      className="py-16 sm:py-20 md:py-24 lg:py-28 bg-background"
      aria-labelledby="freelancer-process-heading"
      itemScope
      itemType="https://schema.org/HowTo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 
            id="freelancer-process-heading"
            className="font-brand-heading text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6 text-brand-dark-navy px-2 sm:px-4 leading-tight"
            itemProp="name"
          >
            <span className="gradient-text">5 Steps to Work, Zero Stress</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-brand-mid-blue mx-auto mb-4 sm:mb-6 md:mb-8"></div>
          <p className="font-brand-body text-sm sm:text-base md:text-lg text-brand-dark-navy/70 max-w-2xl mx-auto">
            For Freelancers
          </p>
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
              <Briefcase className="w-8 h-8 sm:w-10 sm:h-10 text-brand-deep-blue" />
              <h3 className="font-brand-heading text-xl xs:text-2xl sm:text-3xl md:text-4xl text-brand-dark-navy">
                Freelance, On-Demand, Anywhere
              </h3>
            </div>
            <p className="font-brand-body text-sm sm:text-base md:text-lg text-brand-dark-navy/80 leading-relaxed mb-4 sm:mb-6">
              Join our network of on-demand teams and work on projects instantly—no long onboarding, no tedious admin.
            </p>
            <div className="bg-brand-white rounded-xl p-4 sm:p-6 border-l-4 border-brand-deep-blue">
              <p className="font-brand-body text-sm sm:text-base md:text-lg text-brand-dark-navy/90 leading-relaxed">
                Whether you're a designer, developer, or strategist, our system lets you focus on what you do best while collaborating with professionals who get it. <strong className="text-brand-deep-blue">Flexibility, efficiency, and top-quality work</strong>—all without the stress.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreelancerProcess;
