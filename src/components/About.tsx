const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="font-brand-heading text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6 text-brand-dark-navy px-2 sm:px-4 leading-tight">
            About <span className="gradient-text">Ad Atelier</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-brand-mid-blue mx-auto mb-4 sm:mb-6 md:mb-8"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-5 md:space-y-6 px-2 sm:px-4">
          <p className="font-brand-body text-sm sm:text-base md:text-lg text-brand-dark-navy/80 leading-relaxed">
            At Ad Atelier, we believe in the power of creative storytelling and innovative design. 
            Our team of passionate professionals specializes in transforming brand visions into 
            compelling visual experiences.
          </p>
          <p className="font-brand-body text-sm sm:text-base md:text-lg text-brand-dark-navy/80 leading-relaxed">
            From traditional advertising to cutting-edge digital solutions, we craft campaigns 
            that resonate with your audience and drive meaningful engagement. Our holistic 
            approach ensures your brand message reaches the right people at the right time.
          </p>
          <p className="font-brand-body text-sm sm:text-base md:text-lg text-brand-dark-navy/80 leading-relaxed">
            With years of experience in the advertising industry, we've helped countless brands 
            establish their unique identity and achieve their marketing goals through strategic 
            creativity and data-driven insights.
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