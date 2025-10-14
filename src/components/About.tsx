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
                <strong className="text-brand-deep-blue">Ad Atelier is Kerala's leading on-demand branding and advertising agency</strong>, connecting ambitious 
                businesses with elite creative specialists who craft brands that influence customer decisions and drive measurable revenue growth. Unlike traditional 
                agencies with inflated overhead, we assemble expert teams—senior brand designers, advertising strategists, and marketing professionals—matched 
                precisely to your industry, objectives, and budget. Every project gets experienced talent, never juniors learning on your investment.
              </p>
            </div>
            
            <div itemScope itemType="https://schema.org/Solution">
              <h3 className="sr-only">Solution: Influence-Driven Results</h3>
              <p 
                className="font-brand-body text-sm sm:text-base md:text-lg text-brand-dark-navy/80 leading-relaxed"
                itemProp="description"
              >
                Our <strong className="text-brand-deep-blue">influence-first branding philosophy</strong> rejects superficial design that generates 
                fleeting attention. Instead, we architect strategic brand identities and advertising campaigns engineered to shape customer perception, 
                command market authority, and generate quantifiable business outcomes—increased conversion rates, elevated average order values, 
                stronger customer loyalty, and sustainable competitive advantage. Beautiful design is our baseline; business transformation is our benchmark.
              </p>
            </div>
            
            <div itemScope itemType="https://schema.org/Value">
              <h3 className="sr-only">Value: Streamlined Process</h3>
              <p 
                className="font-brand-body text-sm sm:text-base md:text-lg text-brand-dark-navy/80 leading-relaxed"
                itemProp="description"
              >
                Experience the power of <strong className="text-brand-deep-blue">agency-caliber branding with startup speed and transparency</strong>. 
                Our revolutionary on-demand model eliminates traditional agency bloat—no account managers billing hourly, no creative directors 
                justifying retainers, no bureaucratic delays. You get <strong className="text-brand-deep-blue">direct access to senior specialists, 
                faster project delivery (typically 40-60% quicker), and a transparent 25% fee</strong>—you know exactly what the creative professional 
                charges, we add just 25% for sourcing talent, managing quality, and guaranteeing your satisfaction. Premium branding and advertising 
                excellence, delivered with radical transparency and efficiency.
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