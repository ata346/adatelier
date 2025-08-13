const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-brand-heading text-4xl md:text-5xl lg:text-6xl mb-6 text-brand-dark-navy">
            About <span className="gradient-text">Ad Atelier</span>
          </h2>
          <div className="w-24 h-1 bg-brand-mid-blue mx-auto mb-8"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="font-brand-body text-lg text-brand-dark-navy/80 leading-relaxed">
              At Ad Atelier, we believe in the power of creative storytelling and innovative design. 
              Our team of passionate professionals specializes in transforming brand visions into 
              compelling visual experiences.
            </p>
            <p className="font-brand-body text-lg text-brand-dark-navy/80 leading-relaxed">
              From traditional advertising to cutting-edge digital solutions, we craft campaigns 
              that resonate with your audience and drive meaningful engagement. Our holistic 
              approach ensures your brand message reaches the right people at the right time.
            </p>
            <p className="font-brand-body text-lg text-brand-dark-navy/80 leading-relaxed">
              With years of experience in the advertising industry, we've helped countless brands 
              establish their unique identity and achieve their marketing goals through strategic 
              creativity and data-driven insights.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-brand-deep-blue rounded-full flex items-center justify-center mx-auto mb-4 shadow-elegant">
                <span className="font-brand-heading text-2xl text-brand-white">5+</span>
              </div>
              <h3 className="font-brand-heading text-lg text-brand-dark-navy mb-2">Years Experience</h3>
              <p className="font-brand-body text-sm text-brand-dark-navy/60">In Creative Industry</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-brand-mid-blue rounded-full flex items-center justify-center mx-auto mb-4 shadow-elegant">
                <span className="font-brand-heading text-2xl text-brand-white">100+</span>
              </div>
              <h3 className="font-brand-heading text-lg text-brand-dark-navy mb-2">Happy Clients</h3>
              <p className="font-brand-body text-sm text-brand-dark-navy/60">Successful Projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;