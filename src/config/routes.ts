import { 
  Home, 
  FileText, 
  CreditCard, 
  ScrollText, 
  HelpCircle, 
  Mail, 
  Briefcase, 
  DollarSign, 
  Target, 
  Users, 
  Workflow,
  type LucideIcon
} from "lucide-react";

export interface RouteInfo {
  title: string;
  href: string;
  icon: LucideIcon;
  description: string;
  lastUpdated: string;
  category: "main" | "section";
}

export const routes: RouteInfo[] = [
  // Main Pages
  {
    title: "Home",
    href: "/",
    icon: Home,
    description: "Main landing page with overview of our branding and advertising services",
    lastUpdated: "2024-11-19",
    category: "main",
  },
  {
    title: "FAQ",
    href: "/faq",
    icon: HelpCircle,
    description: "Frequently asked questions about our services, pricing, and process",
    lastUpdated: "2024-11-19",
    category: "main",
  },
  {
    title: "Payment & Refund Policy",
    href: "/payment-refund",
    icon: CreditCard,
    description: "Detailed information about payment methods, terms, and refund policies",
    lastUpdated: "2024-11-19",
    category: "main",
  },
  {
    title: "Terms & Conditions",
    href: "/terms-conditions",
    icon: ScrollText,
    description: "Legal terms, conditions, and agreements for using our services",
    lastUpdated: "2024-11-19",
    category: "main",
  },
  {
    title: "Sitemap",
    href: "/sitemap",
    icon: FileText,
    description: "Complete overview of all pages and sections on our website",
    lastUpdated: "2024-11-19",
    category: "main",
  },
  // Home Page Sections
  {
    title: "About",
    href: "/#about",
    icon: FileText,
    description: "Learn about Ad Atelier, our mission, and our commitment to excellence",
    lastUpdated: "2024-11-19",
    category: "section",
  },
  {
    title: "Services",
    href: "/#services",
    icon: Briefcase,
    description: "Explore our comprehensive branding and advertising services",
    lastUpdated: "2024-11-19",
    category: "section",
  },
  {
    title: "Pricing",
    href: "/#pricing",
    icon: DollarSign,
    description: "View our transparent pricing packages and service offerings",
    lastUpdated: "2024-11-19",
    category: "section",
  },
  {
    title: "Why Choose Us",
    href: "/#why-choose-us",
    icon: Target,
    description: "Discover what sets Ad Atelier apart from other agencies",
    lastUpdated: "2024-11-19",
    category: "section",
  },
  {
    title: "How We Work",
    href: "/#how-we-work",
    icon: Workflow,
    description: "Understand our streamlined process and methodology",
    lastUpdated: "2024-11-19",
    category: "section",
  },
  {
    title: "Contact",
    href: "/#contact",
    icon: Mail,
    description: "Get in touch with our team for consultations and inquiries",
    lastUpdated: "2024-11-19",
    category: "section",
  },
];

export const getRoutesByCategory = (category: "main" | "section") => {
  return routes.filter(route => route.category === category);
};

export const getAllRoutes = () => routes;

export const getRouteByPath = (path: string) => {
  return routes.find(route => route.href === path);
};
