import { Calculator, TrendingUp, Shield, Star, Zap, Crown } from "lucide-react";
import { usePersonalization } from "@/hooks/usePersonalization";
import { motion } from "framer-motion";

const Pricing = () => {
  const personalization = usePersonalization();

  const pricingFeatures = [{
    icon: Calculator,
    title: "Transparent 25% Fee Structure",
    description: "You see exactly what the creative professional charges. We add just 25% for sourcing elite talent, managing projects, ensuring quality, and guaranteeing results. No hidden hourly rates, no inflated retainers, no billing surprises—just honest pricing that respects your budget and intelligence."
  }, {
    icon: TrendingUp,
    title: "Premium Value, Fair Investment",
    description: "Your 25% fee delivers exceptional value: access to senior specialists (not juniors), dedicated project management, multi-round quality reviews, on-time delivery guarantees, and unlimited communication. You get agency-level excellence at freelance-level economics—typically 40-60% lower than traditional agencies."
  }, {
    icon: Shield,
    title: "Satisfaction Guaranteed, Risk Eliminated",
    description: "Your 25% fee includes our iron-clad satisfaction guarantee. Deliverables don't meet expectations? We revise until they do—at no additional cost. Unsatisfied after revisions? We refund your fee, no questions asked. We only succeed when you succeed, aligning our interests completely with yours."
  }];

  const pricingPlans = [
    {
      id: "starter",
      name: "Starter",
      icon: Zap,
      price: "₹18,750",
      description: "Perfect para emprendedores y pequeños negocios",
      features: [
        "Diseño de logo profesional",
        "3 conceptos iniciales",
        "Revisiones ilimitadas",
        "Archivos finales en todos los formatos",
        "Soporte por 30 días"
      ],
      cta: "Comenzar Ahora",
      popular: false,
      recommended: [] as string[],
      utmMatch: ["google", "ads"],
      segmentMatch: ["new"],
    },
    {
      id: "professional",
      name: "Professional",
      icon: Star,
      price: "₹43,750",
      description: "Ideal para empresas en crecimiento",
      features: [
        "Todo lo del plan Starter",
        "Identidad de marca completa",
        "Campaña publicitaria inicial",
        "Estrategia de marketing digital",
        "Gestión de redes sociales (1 mes)",
        "Soporte prioritario por 60 días"
      ],
      cta: "Elegir Professional",
      popular: true,
      recommended: ["returning", "frequent"],
      utmMatch: ["facebook", "instagram", "linkedin"],
      segmentMatch: ["returning"],
    },
    {
      id: "enterprise",
      name: "Enterprise",
      icon: Crown,
      price: "₹87,500",
      description: "Solución completa para marcas ambiciosas",
      features: [
        "Todo lo del plan Professional",
        "Branding integral 360°",
        "Campaña multi-canal",
        "Producción de contenido (3 meses)",
        "Consultoría estratégica mensual",
        "Account manager dedicado",
        "Soporte ilimitado por 6 meses"
      ],
      cta: "Contactar Ventas",
      popular: false,
      recommended: ["frequent"],
      utmMatch: ["referral", "email"],
      segmentMatch: ["frequent"],
    }
  ];

  // Determine which plan to highlight based on personalization
  const getRecommendedPlanId = (): string => {
    if (!personalization) return "professional";

    // Check UTM source first
    if (personalization.utmSource) {
      const matchingPlan = pricingPlans.find(p => 
        p.utmMatch.includes(personalization.utmSource!)
      );
      if (matchingPlan) return matchingPlan.id;
    }

    // Check visitor segment
    const matchingPlan = pricingPlans.find(p => 
      p.segmentMatch.includes(personalization.segment)
    );
    if (matchingPlan) return matchingPlan.id;

    return "professional";
  };

  const recommendedPlanId = getRecommendedPlanId();

  // Get personalized headline
  const getPersonalizedHeadline = (): { title: string; subtitle: string } => {
    if (!personalization) {
      return {
        title: "Planes Transparentes",
        subtitle: "Elige el plan perfecto para tu negocio"
      };
    }

    if (personalization.utmSource === "google" || personalization.utmSource === "ads") {
      return {
        title: "Ofertas Exclusivas",
        subtitle: "Precios especiales para visitantes de Google"
      };
    }

    if (personalization.utmSource === "facebook" || personalization.utmSource === "instagram") {
      return {
        title: "¡Hola, Social Media Fan! 📱",
        subtitle: "Descuentos exclusivos para seguidores"
      };
    }

    if (personalization.utmSource === "referral") {
      return {
        title: "Precio Especial Referido",
        subtitle: "25% de descuento adicional por venir recomendado"
      };
    }

    if (personalization.segment === "frequent") {
      return {
        title: "Tu Plan VIP te Espera",
        subtitle: "Beneficios exclusivos para clientes frecuentes"
      };
    }

    if (personalization.segment === "returning") {
      return {
        title: "¡Qué Bueno Verte de Nuevo!",
        subtitle: "Hemos reservado algo especial para ti"
      };
    }

    return {
      title: "Planes Transparentes",
      subtitle: "Elige el plan perfecto para tu negocio"
    };
  };

  const headline = getPersonalizedHeadline();

  return <section 
    id="pricing" 
    className="py-16 sm:py-20 md:py-24 lg:py-28 bg-background"
    aria-labelledby="pricing-heading"
    itemScope
    itemType="https://schema.org/PriceSpecification"
  >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 
            id="pricing-heading"
            className="font-brand-heading text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6 text-brand-dark-navy px-2 sm:px-4 leading-tight"
            itemProp="name"
          >
            {headline.title.split(' ')[0]} <span className="gradient-text">{headline.title.split(' ').slice(1).join(' ')}</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-brand-mid-blue mx-auto mb-4 sm:mb-6 md:mb-8"></div>
          <p className="font-brand-body text-sm sm:text-base md:text-lg text-brand-dark-navy/70 max-w-3xl mx-auto px-2 sm:px-4 leading-relaxed">
            {headline.subtitle}
          </p>
        </div>

        {/* Personalized Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20">
          {pricingPlans.map((plan, index) => {
            const isRecommended = plan.id === recommendedPlanId;
            const Icon = plan.icon;
            
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-brand-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-elegant border-2 transition-all duration-300 hover:-translate-y-2 ${
                  isRecommended 
                    ? 'border-brand-mid-blue ring-2 ring-brand-mid-blue/20 scale-[1.02]' 
                    : 'border-brand-mid-blue/10 hover:border-brand-mid-blue/30'
                }`}
              >
                {/* Recommended Badge */}
                {isRecommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-brand-mid-blue to-brand-deep-blue text-brand-white text-xs font-semibold px-4 py-1 rounded-full shadow-glow">
                      ✨ Recomendado para ti
                    </span>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-6">
                  <div className={`w-14 h-14 mx-auto rounded-xl flex items-center justify-center mb-4 ${
                    isRecommended 
                      ? 'bg-gradient-to-br from-brand-mid-blue to-brand-deep-blue' 
                      : 'bg-brand-deep-blue/10'
                  }`}>
                    <Icon className={`w-7 h-7 ${isRecommended ? 'text-brand-white' : 'text-brand-deep-blue'}`} />
                  </div>
                  <h3 className="font-brand-heading text-xl sm:text-2xl text-brand-dark-navy mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-brand-dark-navy/60 mb-4">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-3xl sm:text-4xl font-bold text-brand-dark-navy">
                      {plan.price}
                    </span>
                    <span className="text-brand-dark-navy/50 text-sm">/proyecto</span>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-brand-dark-navy/70">
                      <svg className="w-5 h-5 text-brand-mid-blue flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className={`w-full py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-300 ${
                    isRecommended
                      ? 'bg-gradient-to-r from-brand-mid-blue to-brand-deep-blue text-brand-white hover:shadow-glow'
                      : 'bg-brand-deep-blue/10 text-brand-deep-blue hover:bg-brand-deep-blue hover:text-brand-white'
                  }`}
                >
                  {plan.cta}
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Commission Explanation */}
        <div className="max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20">
          <div className="bg-gradient-to-br from-brand-deep-blue to-brand-mid-blue rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 text-brand-white text-center">
            <h3 className="font-brand-heading text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6">
              How Our 25% Fee Works
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-center">
              <div className="bg-brand-white/10 rounded-lg p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl font-bold mb-2">75%</div>
                <div className="text-sm sm:text-base">Freelancer Keeps</div>
              </div>
              <div className="bg-brand-white/20 rounded-lg p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl font-bold mb-2">25%</div>
                <div className="text-sm sm:text-base">Our Fee</div>
              </div>
              <div className="bg-brand-white/10 rounded-lg p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl font-bold mb-2">100%</div>
                <div className="text-sm sm:text-base">Satisfaction Guaranteed</div>
              </div>
            </div>
          </div>
        </div>

        {/* What's Included */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <h3 className="font-brand-heading text-xl sm:text-2xl md:text-3xl text-center text-brand-dark-navy mb-8 sm:mb-10 md:mb-12">
            What Your 25% Fee Includes
          </h3>
          
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {pricingFeatures.map((feature, index) => <article 
              key={index} 
              className="group bg-brand-white rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 shadow-elegant hover:shadow-hover transition-all duration-500 hover:-translate-y-2 border border-brand-mid-blue/10"
              itemScope
              itemType="https://schema.org/Offer"
            >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-brand-deep-blue rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-brand-mid-blue transition-colors duration-300">
                  <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-brand-white" />
                </div>
                
                <h4 
                  className="font-brand-heading text-lg sm:text-xl mb-3 sm:mb-4 text-brand-dark-navy group-hover:text-brand-deep-blue transition-colors duration-300 leading-tight"
                  itemProp="name"
                >
                  {feature.title}
                </h4>
                
                <p 
                  className="font-brand-body text-sm sm:text-base text-brand-dark-navy/70 leading-relaxed"
                  itemProp="description"
                >
                  {feature.description}
                </p>
              </article>)}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-brand-light-gray/20 to-brand-white rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 shadow-elegant border border-brand-mid-blue/10 max-w-2xl mx-auto">
            <h3 className="font-brand-heading text-lg sm:text-xl md:text-2xl text-brand-dark-navy mb-4 sm:mb-6">
              Ready to Get Started?
            </h3>
            <p className="font-brand-body text-sm sm:text-base text-brand-dark-navy/70 mb-6 sm:mb-8">
              Get a detailed quote for your project. We'll find you the perfect freelancer and give you clear pricing with our simple 25% fee.
            </p>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({
            behavior: 'smooth'
          })} className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-brand-mid-blue text-brand-white hover:bg-brand-deep-blue rounded-lg font-brand-body font-semibold text-sm sm:text-base transition-all duration-300 shadow-glow hover:shadow-elegant">
              Get Your Quote
            </button>
          </div>
        </div>
      </div>
    </section>;
};
export default Pricing;