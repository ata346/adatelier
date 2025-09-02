const About = () => {
  return (
    <section 
      id="about" 
      className="py-12 sm:py-16 md:py-20 bg-background"
      aria-labelledby="about-heading"
      itemScope
      itemType="https://schema.org/AboutPage"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 
            id="about-heading"
            className="font-brand-heading text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6 text-brand-dark-navy px-2 sm:px-4 leading-tight"
            itemProp="name"
          >
            About <span className="gradient-text">Ad Atelier</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-brand-mid-blue mx-auto mb-4 sm:mb-6 md:mb-8" aria-hidden="true"></div>
        </header>
        
        <article className="max-w-4xl mx-auto px-2 sm:px-4" itemProp="mainEntity">
          <div className="space-y-4 sm:space-y-5 md:space-y-6 text-center">
            <div itemScope itemType="https://schema.org/Problem">
              <h3 className="sr-only">Problem: Mismatched Expertise</h3>
              <p 
                className="font-brand-body text-sm sm:text-base md:text-lg text-brand-dark-navy/80 leading-relaxed"
                itemProp="description"
              >
                Struggling with agencies that promise the world but deliver generic solutions? At Ad Atelier, we solve 
                the fundamental problem of mismatched expertise. Our network-based approach means you get the exact 
                specialist your project needs—no junior staff, no learning curves on your dime.
              </p>
            </div>
            
            <div itemScope itemType="https://schema.org/Solution">
              <h3 className="sr-only">Solution: Influence-Driven Results</h3>
              <p 
                className="font-brand-body text-sm sm:text-base md:text-lg text-brand-dark-navy/80 leading-relaxed"
                itemProp="description"
              >
                Tired of campaigns that look impressive but don't move the needle? We focus on influence-driven results 
                that directly impact your business goals. Every creative decision is strategically aligned with measurable 
                outcomes that matter to your bottom line.
              </p>
            </div>
            
            <div itemScope itemType="https://schema.org/Value">
              <h3 className="sr-only">Value: Streamlined Process</h3>
              <p 
                className="font-brand-body text-sm sm:text-base md:text-lg text-brand-dark-navy/80 leading-relaxed"
                itemProp="description"
              >
                Frustrated with slow processes and bloated agency overhead? Our streamlined network delivers the 
                reliability of an established agency with the agility and cost-effectiveness of working directly 
                with top-tier specialists. You get faster results, better value, and direct access to expertise.
              </p>
            </div>
          </div>
        </article>
        
        {/* Freelancer CTA */}
        <aside className="max-w-2xl mx-auto text-center mt-10 sm:mt-12 md:mt-16 px-2 sm:px-4">
          <div className="bg-gradient-to-br from-brand-white to-brand-light-blue/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-elegant border border-brand-mid-blue/10">
            <a
              href="https://forms.gle/hU9EcCz7a4eBMXkKA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 sm:px-6 md:px-8 py-3 md:py-4 bg-brand-mid-blue text-brand-white hover:bg-brand-deep-blue rounded-lg font-brand-body font-semibold text-sm sm:text-base md:text-lg transition-all duration-300 shadow-glow hover:shadow-elegant group w-full sm:w-auto min-h-[48px]"
              aria-label="Join our freelance network - Help craft compelling visual experiences"
            >
              Join as a Freelancer
            </a>
            <p className="font-brand-body text-xs sm:text-sm md:text-base text-brand-dark-navy/70 leading-relaxed mt-3 sm:mt-4">
              Join our creative team and help craft compelling visual experiences that transform brands and drive real engagement.
            </p>
          </div>
        </aside>
        
        {/* Schema.org structured data for About section */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "mainEntity": {
              "@type": "Organization",
              "name": "Ad Atelier",
              "description": "Leading branding agency solving mismatched expertise problems through network-based approach, delivering influence-driven results with streamlined processes",
              "knowsAbout": [
                "Strategic Branding",
                "Digital Marketing",
                "Creative Design",
                "Brand Identity",
                "Freelance Network Management",
                "Marketing Campaign Strategy"
              ],
              "serviceArea": {
                "@type": "Place",
                "name": "Kerala, India"
              }
            }
          })
        }} />
      </div>
    </section>
  );
};

export default About;