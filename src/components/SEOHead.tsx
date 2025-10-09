import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  type?: string;
  image?: string;
}

const SEOHead = ({ 
  title = "Leading Branding & Advertising Agency in Kozhikode | Ad Atelier - Strategic Brand Design & Creative Advertising",
  description = "Premier branding and advertising agency in Kozhikode, Kerala delivering strategic brand design, creative advertising campaigns, social media marketing, and results-driven marketing solutions. Award-winning branding agency helping businesses across India build influential brands. Contact Ad Atelier for professional branding and advertising services.",
  keywords = "branding agency kozhikode, advertising agency kerala, brand design agency, branding and advertising services, creative advertising agency, marketing agency kozhikode, brand identity design, advertising campaign management, social media marketing agency, logo design kozhikode, brand strategy consultants, digital advertising kerala, creative branding solutions, marketing consultancy india, founder credential card, business branding services, advertising agency ulliyeri",
  canonical = "https://ad-atelier.com/",
  type = "website",
  image = "/lovable-uploads/d7b2780c-4663-4385-a815-82bb418fb3f8.png"
}: SEOHeadProps) => {
  
  useEffect(() => {
    try {
      // Update document title
      document.title = title;
      
      // Update meta description
      let metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      } else {
        // Create if doesn't exist
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        metaDescription.setAttribute('content', description);
        document.head.appendChild(metaDescription);
      }
      
      // Update meta keywords
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      } else {
        // Create if doesn't exist
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        metaKeywords.setAttribute('content', keywords);
        document.head.appendChild(metaKeywords);
      }
      
      // Update canonical URL
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) {
        canonicalLink.setAttribute('href', canonical);
      } else {
        // Create if doesn't exist
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        canonicalLink.setAttribute('href', canonical);
        document.head.appendChild(canonicalLink);
      }
      
      // Update Open Graph tags
      const ogTags = [
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:type', content: type },
        { property: 'og:url', content: canonical },
        { property: 'og:image', content: image }
      ];
      
      ogTags.forEach(({ property, content }) => {
        let tag = document.querySelector(`meta[property="${property}"]`);
        if (tag) {
          tag.setAttribute('content', content);
        } else {
          tag = document.createElement('meta');
          tag.setAttribute('property', property);
          tag.setAttribute('content', content);
          document.head.appendChild(tag);
        }
      });
      
      // Update Twitter Card tags
      const twitterTags = [
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: image }
      ];
      
      twitterTags.forEach(({ name, content }) => {
        let tag = document.querySelector(`meta[name="${name}"]`);
        if (tag) {
          tag.setAttribute('content', content);
        } else {
          tag = document.createElement('meta');
          tag.setAttribute('name', name);
          tag.setAttribute('content', content);
          document.head.appendChild(tag);
        }
      });
      
    } catch (error) {
      console.error('Error updating SEO meta tags:', error);
    }
  }, [title, description, keywords, canonical, type, image]);

  return null; // This component doesn't render anything
};

export default SEOHead;