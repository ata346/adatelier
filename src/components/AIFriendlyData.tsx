import { useEffect } from 'react';

// Component to add AI-friendly structured data and meta information
const AIFriendlyData = () => {
  useEffect(() => {
    // Add AI-specific meta tags dynamically
    const aiMetaTags = [
      { name: 'ai-content-priority', content: 'high' },
      { name: 'ai-crawl-preference', content: 'comprehensive' },
      { name: 'content-analysis', content: 'business-services-branding-marketing' },
      { name: 'business-intent', content: 'lead-generation-client-acquisition' },
      { name: 'target-market', content: 'small-medium-large-businesses-kerala-india-global' },
      { name: 'competitive-advantage', content: 'freelance-network-flexibility-agency-reliability' },
      { name: 'service-differentiation', content: 'influence-driven-strategic-branding-results-focused' }
    ];

    aiMetaTags.forEach(tag => {
      const existingTag = document.querySelector(`meta[name="${tag.name}"]`);
      if (!existingTag) {
        const metaTag = document.createElement('meta');
        metaTag.name = tag.name;
        metaTag.content = tag.content;
        document.head.appendChild(metaTag);
      }
    });

    // Add comprehensive business data as JSON-LD
    const businessData = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": "https://ad-atelier.com/#professional-service",
      "name": "Ad Atelier - Premier Branding & Advertising Agency",
      "alternateName": ["Ad Atelier Agency", "Ad Atelier Branding Agency", "Ad Atelier Advertising", "Ad Atelier Kerala"],
      "description": "Leading branding and advertising agency in Kozhikode, Kerala delivering strategic brand design, creative advertising campaigns, social media marketing, and results-driven marketing solutions through expert creative professionals across India",
      "url": "https://ad-atelier.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ad-atelier.com/lovable-uploads/d7b2780c-4663-4385-a815-82bb418fb3f8.png",
        "width": 400,
        "height": 400,
        "caption": "Ad Atelier - Professional Branding Agency Logo"
      },
      "image": [
        "https://ad-atelier.com/lovable-uploads/d7b2780c-4663-4385-a815-82bb418fb3f8.png",
        "https://ad-atelier.com/src/assets/hero-bg.jpg"
      ],
      "telephone": "+91-9656778508",
      "email": "contact@ad-atelier.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Ulliyeri",
        "addressLocality": "Kozhikode",
        "addressRegion": "Kerala",
        "postalCode": "673323",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 11.2588,
        "longitude": 75.7804
      },
      "serviceArea": [
        {
          "@type": "State",
          "name": "Kerala",
          "containedInPlace": {
            "@type": "Country",
            "name": "India"
          }
        },
        {
          "@type": "Country", 
          "name": "India"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Professional Branding & Advertising Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Strategic Brand Design & Identity Services",
              "description": "Professional brand identity design, logo design, brand positioning, visual identity systems, brand guidelines, brand strategy consultation, and comprehensive branding solutions",
              "serviceType": "Brand Design & Identity",
              "category": "Branding"
            },
            "eligibleRegion": {
              "@type": "Country",
              "name": "India"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service", 
              "name": "Advertising & Marketing Campaign Services",
              "description": "Strategic advertising campaign development, creative advertising, digital marketing, campaign management, performance optimization, ROI tracking, and multi-channel advertising solutions",
              "serviceType": "Advertising & Marketing",
              "category": "Advertising"
            },
            "eligibleRegion": {
              "@type": "Country",
              "name": "India"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Social Media Marketing & Branding Services",
              "description": "Strategic social media marketing, social media branding, content strategy, community management, influencer marketing, social media advertising, and engagement optimization",
              "serviceType": "Social Media Marketing",
              "category": "Marketing"
            },
            "eligibleRegion": {
              "@type": "Country",
              "name": "India"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Founder Credential Card Design Services",
              "description": "Premium PVC founder credential card design and printing service. Custom-designed brand identity cards representing your entrepreneurial journey and brand story with professional printing and doorstep delivery",
              "serviceType": "Brand Identity Design",
              "category": "Branding"
            },
            "eligibleRegion": {
              "@type": "Country",
              "name": "India"
            }
          }
        ]
      },
      "founder": {
        "@type": "Organization",
        "name": "Ad Atelier Creative Team"
      },
      "employee": {
        "@type": "OrganizationRole",
        "roleName": "Creative Specialists Network"
      },
      "memberOf": {
        "@type": "Organization",
        "name": "Kerala Creative Industry Network"
      },
      "knowsAbout": [
        "Brand Design",
        "Advertising Services",
        "Strategic Branding",
        "Brand Identity Design", 
        "Logo Design",
        "Creative Advertising",
        "Advertising Campaigns",
        "Marketing Campaigns",
        "Social Media Marketing",
        "Social Media Branding",
        "Influence Marketing",
        "Campaign Development",
        "Creative Design",
        "Brand Strategy",
        "Digital Advertising",
        "Content Marketing",
        "Graphic Design",
        "Marketing Consultation",
        "Brand Positioning",
        "Visual Identity",
        "Creative Direction",
        "Marketing Strategy",
        "Founder Credential Card Design",
        "Brand Identity Cards"
      ],
      "specialty": [
        "Strategic brand design and identity",
        "Creative advertising campaign development",
        "Influence-driven marketing campaigns",
        "Strategic brand positioning", 
        "Results-focused advertising solutions",
        "Social media marketing and branding",
        "Professional creative network coordination",
        "Cross-platform brand consistency",
        "ROI-focused marketing solutions",
        "Kerala market expertise"
      ],
      "awards": [
        {
          "@type": "Award",
          "name": "Top Rated Branding & Advertising Agency",
          "description": "Recognized for excellence in strategic branding, creative advertising, and results-driven marketing solutions"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "47",
        "bestRating": "5",
        "worstRating": "1"
      },
      "priceRange": "$$",
      "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer", "Digital Payment"],
      "currenciesAccepted": "INR",
      "openingHours": "Mo-Fr 09:00-18:00",
      "availableLanguage": ["English", "Malayalam", "Hindi"],
      "slogan": "Designing Influence, Not Just Attention",
      "mission": "To deliver strategic branding and advertising solutions that create lasting influence and drive measurable business results through our curated network of expert creative professionals",
      "foundingDate": "2020",
      "numberOfEmployees": "5-15",
      "sameAs": [
        "https://www.instagram.com/ad.atelier.eo/"
      ],
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://ad-atelier.com/"
      }
    };

    // Add the structured data script
    const existingScript = document.querySelector('script[data-ai-business="true"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-ai-business', 'true');
      script.textContent = JSON.stringify(businessData);
      document.head.appendChild(script);
    }

    // Cleanup function
    return () => {
      // Remove dynamically added elements if component unmounts
      aiMetaTags.forEach(tag => {
        const element = document.querySelector(`meta[name="${tag.name}"]`);
        if (element && !element.hasAttribute('data-static')) {
          element.remove();
        }
      });
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default AIFriendlyData;