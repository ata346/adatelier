const About = () => {
  return (
    <section 
      id="about" 
      className="py-16 sm:py-20 md:py-24 lg:py-28 bg-background"
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
                As a <strong className="text-brand-deep-blue">professional branding and advertising agency</strong>, we connect you with 
                expert creative specialists who deliver exceptional brand identities, strategic advertising campaigns, and marketing solutions 
                that drive real business growth. No junior staff, no compromises—just experienced professionals matched to your project.
              </p>
            </div>
            
            <div itemScope itemType="https://schema.org/Solution">
              <h3 className="sr-only">Solution: Influence-Driven Results</h3>
              <p 
                className="font-brand-body text-sm sm:text-base md:text-lg text-brand-dark-navy/80 leading-relaxed"
                itemProp="description"
              >
                Our <strong className="text-brand-deep-blue">advertising and branding expertise</strong> focuses on creating campaigns that convert. 
                We design strategic brand identities and advertising solutions that influence customer decisions, build brand authority, 
                and deliver measurable ROI—not just visual appeal.
              </p>
            </div>
            
            <div itemScope itemType="https://schema.org/Value">
              <h3 className="sr-only">Value: Streamlined Process</h3>
              <p 
                className="font-brand-body text-sm sm:text-base md:text-lg text-brand-dark-navy/80 leading-relaxed"
                itemProp="description"
              >
                Experience <strong className="text-brand-deep-blue">agency-level branding and advertising excellence</strong> with startup agility. 
                Our curated network of creative professionals delivers premium brand design, advertising strategy, and marketing campaigns 
                faster and more cost-effectively. <strong className="text-brand-deep-blue">Our transparent 25% fee structure</strong> ensures 
                you receive top-tier branding and advertising services without expensive overhead or hidden costs.
              </p>
            </div>
          </div>
        </article>
        
        {/* Freelancer CTA */}
        <aside className="max-w-2xl mx-auto text-center mt-10 sm:mt-12 md:mt-16 px-2 sm:px-4">
          <div className="bg-gradient-to-br from-brand-white to-brand-light-gray/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-elegant border border-brand-mid-blue/10">
            <div className="mb-4 sm:mb-6">
              <div className="bg-brand-deep-blue/10 rounded-lg p-3 sm:p-4 border border-brand-deep-blue/20 mb-4">
                <p className="font-brand-body text-xs sm:text-sm md:text-base text-brand-deep-blue font-semibold">
                  <strong>For Freelancers:</strong> Join our team and keep 75% of what you earn - we take only 25% for finding you clients, managing projects, and ensuring quality.
                </p>
              </div>
            </div>
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
              Join our creative team and help make amazing designs that help brands grow and connect with their customers.
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
              "description": "Premier branding and advertising agency in Kozhikode, Kerala delivering strategic brand design, creative advertising campaigns, and results-driven marketing solutions through expert creative professionals",
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