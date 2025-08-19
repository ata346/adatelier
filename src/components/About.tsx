const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="font-brand-heading text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6 text-brand-dark-navy px-2 sm:px-4 leading-tight">
            About <span className="gradient-text">Kerala's Leading Creative Agency</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-brand-mid-blue mx-auto mb-4 sm:mb-6 md:mb-8"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-5 md:space-y-6 px-2 sm:px-4">
          <p className="font-brand-body text-sm sm:text-base md:text-lg text-brand-dark-navy/80 leading-relaxed">
            At Ad Atelier, Kerala's leading branding agency, we don't just create—we design influence. 
            Operating through a network of highly skilled freelance creatives in Kozhikode and across India, 
            we assemble the right team for every project. No full-time employees, no unnecessary overhead—just 
            the expertise your brand requires from the best creative professionals near you.
          </p>
          <p className="font-brand-body text-sm sm:text-base md:text-lg text-brand-dark-navy/80 leading-relaxed">
            As a premier digital marketing agency in Kerala, we select specialists best suited for your 
            project—brand designers, strategic marketers, and creative storytellers—ensuring the right 
            skills are applied at the right time. We deliver campaigns that make an impact, creating 
            measurable results that matter, not just attention-grabbing visuals.
          </p>
          <p className="font-brand-body text-sm sm:text-base md:text-lg text-brand-dark-navy/80 leading-relaxed">
            We combine the flexibility of a freelance creative network with the reliability of an 
            established advertising agency. Whether it's strategic branding campaigns, social media marketing, 
            or comprehensive digital experiences, we transform brand visions into compelling experiences 
            that genuinely engage and influence your target audience across Kerala and beyond.
          </p>
        </div>
        
        {/* Freelancer CTA */}
        <div className="max-w-2xl mx-auto text-center mt-10 sm:mt-12 md:mt-16 px-2 sm:px-4">
          <div className="bg-gradient-to-br from-brand-white to-brand-light-blue/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-elegant border border-brand-mid-blue/10">
            <a
              href="https://forms.gle/hU9EcCz7a4eBMXkKA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 sm:px-6 md:px-8 py-3 md:py-4 bg-brand-mid-blue text-brand-white hover:bg-brand-deep-blue rounded-lg font-brand-body font-semibold text-sm sm:text-base md:text-lg transition-all duration-300 shadow-glow hover:shadow-elegant group w-full sm:w-auto min-h-[48px]"
            >
              Join as a Freelancer
            </a>
            <p className="font-brand-body text-xs sm:text-sm md:text-base text-brand-dark-navy/70 leading-relaxed mt-3 sm:mt-4">
              Join our creative team and help craft compelling visual experiences that transform brands and drive real engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;