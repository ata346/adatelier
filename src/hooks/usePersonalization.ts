import { useState, useEffect } from 'react';

interface VisitorData {
  visitCount: number;
  firstVisit: string;
  lastVisit: string;
  utmSource: string | null;
  utmMedium: string | null;
  utmCampaign: string | null;
  deviceType: 'mobile' | 'tablet' | 'desktop';
  referrer: string | null;
}

interface PersonalizationData extends VisitorData {
  isReturningVisitor: boolean;
  daysSinceLastVisit: number;
  segment: 'new' | 'returning' | 'frequent';
}

const getDeviceType = (): 'mobile' | 'tablet' | 'desktop' => {
  const width = window.innerWidth;
  if (width < 768) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
};

const getUTMParams = () => {
  const params = new URLSearchParams(window.location.search);
  return {
    utmSource: params.get('utm_source'),
    utmMedium: params.get('utm_medium'),
    utmCampaign: params.get('utm_campaign'),
  };
};

const calculateDaysSince = (dateString: string): number => {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  return Math.floor(diffTime / (1000 * 60 * 60 * 24));
};

export const usePersonalization = (): PersonalizationData | null => {
  const [data, setData] = useState<PersonalizationData | null>(null);

  useEffect(() => {
    const storageKey = 'luva_visitor_data';
    const stored = localStorage.getItem(storageKey);
    const now = new Date().toISOString();
    const utmParams = getUTMParams();
    const deviceType = getDeviceType();
    const referrer = document.referrer || null;

    let visitorData: VisitorData;

    if (stored) {
      const parsed: VisitorData = JSON.parse(stored);
      visitorData = {
        ...parsed,
        visitCount: parsed.visitCount + 1,
        lastVisit: now,
        deviceType,
        // Keep UTM params from first visit if current ones are null
        utmSource: utmParams.utmSource || parsed.utmSource,
        utmMedium: utmParams.utmMedium || parsed.utmMedium,
        utmCampaign: utmParams.utmCampaign || parsed.utmCampaign,
      };
    } else {
      visitorData = {
        visitCount: 1,
        firstVisit: now,
        lastVisit: now,
        deviceType,
        referrer,
        ...utmParams,
      };
    }

    localStorage.setItem(storageKey, JSON.stringify(visitorData));

    // Calculate personalization data
    const daysSinceLastVisit = stored 
      ? calculateDaysSince(JSON.parse(stored).lastVisit)
      : 0;

    const segment: 'new' | 'returning' | 'frequent' = 
      visitorData.visitCount === 1 ? 'new' :
      visitorData.visitCount >= 5 ? 'frequent' : 'returning';

    setData({
      ...visitorData,
      isReturningVisitor: visitorData.visitCount > 1,
      daysSinceLastVisit,
      segment,
    });
  }, []);

  return data;
};

export const getPersonalizedGreeting = (data: PersonalizationData): string => {
  const hour = new Date().getHours();
  const timeGreeting = hour < 12 ? '¡Buenos días' : hour < 18 ? '¡Buenas tardes' : '¡Buenas noches';

  if (data.segment === 'frequent') {
    return `${timeGreeting}! Qué bueno verte de nuevo 🎉`;
  }
  
  if (data.isReturningVisitor) {
    if (data.daysSinceLastVisit > 7) {
      return `${timeGreeting}! Te extrañamos, ¡bienvenido de vuelta! 👋`;
    }
    return `${timeGreeting}! ¡Bienvenido de nuevo! 😊`;
  }

  return `${timeGreeting}! Bienvenido a Luva Digital ✨`;
};

export const getPersonalizedCTA = (data: PersonalizationData): { text: string; subtext: string } => {
  // Personalize based on UTM source
  if (data.utmSource === 'google' || data.utmSource === 'ads') {
    return {
      text: 'Obtén tu propuesta personalizada',
      subtext: 'Aprovecha nuestra oferta especial para visitantes de Google',
    };
  }

  if (data.utmSource === 'instagram' || data.utmSource === 'facebook') {
    return {
      text: '¡Hola desde las redes! 📱',
      subtext: 'Tenemos descuentos exclusivos para seguidores',
    };
  }

  if (data.utmSource === 'referral') {
    return {
      text: '¡Gracias por la recomendación!',
      subtext: 'Obtén 25% de descuento por venir referido',
    };
  }

  // Personalize based on device
  if (data.deviceType === 'mobile') {
    return {
      text: 'Contáctanos por WhatsApp',
      subtext: 'Respuesta inmediata en tu móvil',
    };
  }

  // Personalize based on visit frequency
  if (data.segment === 'frequent') {
    return {
      text: '¿Listo para comenzar?',
      subtext: 'Como cliente frecuente, tienes prioridad',
    };
  }

  if (data.segment === 'returning') {
    return {
      text: 'Continuemos donde lo dejamos',
      subtext: '¿Tienes alguna pregunta pendiente?',
    };
  }

  return {
    text: 'Agenda tu consulta gratuita',
    subtext: 'Sin compromiso, 100% personalizada',
  };
};
