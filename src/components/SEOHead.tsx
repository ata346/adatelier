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
  title = "Best Branding Agency Near Me | Ad Atelier Kozhikode - Strategic Brand Design & Digital Marketing",
  description = "Top branding agency in Kozhikode, Kerala specializing in strategic brand design, digital marketing campaigns, and social media branding. Expert freelance network delivering influence-driven results for businesses across India.",
  keywords = "best branding agency near me, branding agency kozhikode, digital marketing kerala, brand design agency, social media marketing kozhikode, creative agency kerala, advertising agency ulliyeri, brand strategy consultants, logo design kozhikode, marketing agency kerala, freelance creative network, influence marketing agency",
  canonical = "https://ad-atelier.com/",
  type = "website",
  image = "/lovable-uploads/d7b2780c-4663-4385-a815-82bb418fb3f8.png"
}: SEOHeadProps) => {
  
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }
    
    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', canonical);
    }
    
    // Update Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }
    
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }
    
    let ogType = document.querySelector('meta[property="og:type"]');
    if (ogType) {
      ogType.setAttribute('content', type);
    }
    
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', canonical);
    }
    
    let ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute('content', image);
    }
    
    // Update Twitter Card tags
    let twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', title);
    }
    
    let twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', description);
    }
    
    let twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage) {
      twitterImage.setAttribute('content', image);
    }
    
  }, [title, description, keywords, canonical, type, image]);

  return null; // This component doesn't render anything
};

export default SEOHead;