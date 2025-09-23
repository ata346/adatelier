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
      "name": "Ad Atelier - Professional Branding & Marketing Agency",
      "alternateName": ["Ad Atelier Agency", "Ad Atelier Branding", "Ad Atelier Kerala"],
      "description": "Premier branding and digital marketing agency in Kozhikode, Kerala offering strategic brand design, digital campaigns, social media marketing, and creative solutions through curated freelance network serving businesses across India and globally",
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
        "name": "Professional Branding & Marketing Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Strategic Branding Services",
              "description": "Complete brand identity design, logo creation, brand positioning, visual identity systems, brand guidelines, and strategic consultation",
              "serviceType": "Brand Design",
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
              "name": "Digital Marketing Campaigns",
              "description": "Influence-driven marketing campaigns, digital advertising, campaign management, performance optimization, and ROI tracking",
              "serviceType": "Digital Marketing",
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
              "name": "Digital Experience Design", 
              "description": "Website design, user interface design, user experience optimization, digital advertising creative, and responsive design",
              "serviceType": "Web Design",
              "category": "Design"
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
              "name": "Social Media Marketing",
              "description": "Social influence strategy, content strategy, community management, influencer partnerships, and social media advertising",
              "serviceType": "Social Media",
              "category": "Digital Marketing"
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
        "Strategic Branding",
        "Brand Identity Design", 
        "Logo Design",
        "Digital Marketing",
        "Social Media Marketing",
        "Influence Marketing",
        "Campaign Development",
        "Creative Design",
        "Brand Strategy",
        "Digital Advertising",
        "Content Marketing",
        "SEO Services",
        "Web Design",
        "User Experience Design",
        "Graphic Design",
        "Marketing Consultation",
        "Brand Positioning",
        "Visual Identity",
        "Creative Direction",
        "Marketing Strategy"
      ],
      "specialty": [
        "Influence-driven marketing campaigns",
        "Strategic brand positioning", 
        "Freelance network coordination",
        "Cross-platform brand consistency",
        "ROI-focused marketing solutions",
        "Kerala market expertise",
        "Multi-language campaign development"
      ],
      "awards": [
        {
          "@type": "Award",
          "name": "Top Rated Creative Agency",
          "description": "Recognized for excellence in branding and marketing services"
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
      "mission": "To provide strategic branding and marketing solutions that create lasting influence and drive measurable business results through our curated network of creative professionals",
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