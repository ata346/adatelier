import { Link } from "react-router-dom";
import { Home, FileText, CreditCard, ScrollText, HelpCircle, Mail, Briefcase, DollarSign, Target, Users, Workflow } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Sitemap = () => {
  const mainPages = [
    {
      title: "Home",
      href: "/",
      icon: Home,
      description: "Main landing page with overview of our services",
    },
    {
      title: "FAQ",
      href: "/faq",
      icon: HelpCircle,
      description: "Frequently asked questions about our services",
    },
    {
      title: "Payment & Refund Policy",
      href: "/payment-refund",
      icon: CreditCard,
      description: "Information about payments, refunds, and billing",
    },
    {
      title: "Terms & Conditions",
      href: "/terms-conditions",
      icon: ScrollText,
      description: "Legal terms and conditions for using our services",
    },
  ];

  const homeSections = [
    {
      title: "About",
      href: "/#about",
      icon: FileText,
      description: "Learn about Ad Atelier and our mission",
    },
    {
      title: "Services",
      href: "/#services",
      icon: Briefcase,
      description: "Explore our branding and advertising services",
    },
    {
      title: "Pricing",
      href: "/#pricing",
      icon: DollarSign,
      description: "View our service packages and pricing",
    },
    {
      title: "Why Choose Us",
      href: "/#why-choose-us",
      icon: Target,
      description: "Discover what makes us different",
    },
    {
      title: "How We Work",
      href: "/#how-we-work",
      icon: Workflow,
      description: "Understand our process and methodology",
    },
    {
      title: "Contact",
      href: "/#contact",
      icon: Mail,
      description: "Get in touch with our team",
    },
  ];

  return (
    <>
      <SEOHead 
        title="Sitemap | Ad Atelier"
        description="Navigate through all pages and sections of Ad Atelier's website. Find branding services, pricing, FAQ, and contact information."
        keywords="sitemap, site navigation, ad atelier pages, website structure"
      />
      <Navigation />
      <div className="min-h-screen bg-background pt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/" className="text-brand-mid-blue hover:text-brand-deep-blue transition-colors duration-300">
                    Home
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-brand-dark-navy font-semibold">
                  Sitemap
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <header className="mb-12">
            <h1 className="font-brand-heading text-4xl font-bold text-brand-dark-navy mb-4">
              Sitemap
            </h1>
            <p className="text-brand-dark-navy/70 font-brand-body text-lg max-w-3xl">
              Navigate through all pages and sections of our website. Find everything you need to know about our branding and advertising services.
            </p>
          </header>

          {/* Main Pages Section */}
          <section className="mb-12">
            <h2 className="font-brand-heading text-2xl font-semibold text-brand-dark-navy mb-6 pb-2 border-b-2 border-brand-mid-blue/20 flex items-center gap-2">
              <Home className="w-6 h-6 text-brand-mid-blue" />
              Main Pages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mainPages.map((page) => (
                <Link key={page.href} to={page.href}>
                  <Card className="h-full transition-all duration-300 hover:shadow-hover hover:-translate-y-1 hover:border-brand-mid-blue/50 group">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-brand-dark-navy group-hover:text-brand-deep-blue transition-colors duration-300">
                        <page.icon className="w-5 h-5 text-brand-mid-blue" />
                        {page.title}
                      </CardTitle>
                      <CardDescription className="font-brand-body">
                        {page.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </section>

          {/* Home Page Sections */}
          <section className="mb-12">
            <h2 className="font-brand-heading text-2xl font-semibold text-brand-dark-navy mb-6 pb-2 border-b-2 border-brand-mid-blue/20 flex items-center gap-2">
              <Users className="w-6 h-6 text-brand-mid-blue" />
              Home Page Sections
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {homeSections.map((section) => (
                <Link key={section.href} to={section.href}>
                  <Card className="h-full transition-all duration-300 hover:shadow-hover hover:-translate-y-1 hover:border-brand-mid-blue/50 group">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-brand-dark-navy group-hover:text-brand-deep-blue transition-colors duration-300">
                        <section.icon className="w-5 h-5 text-brand-mid-blue" />
                        {section.title}
                      </CardTitle>
                      <CardDescription className="font-brand-body">
                        {section.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </section>

          {/* Quick Actions */}
          <section className="mb-12">
            <Card className="bg-gradient-to-br from-brand-deep-blue to-brand-mid-blue text-white">
              <CardHeader>
                <CardTitle className="text-white text-2xl font-brand-heading">
                  Need Help?
                </CardTitle>
                <CardDescription className="text-white/90 font-brand-body">
                  Can't find what you're looking for? We're here to help!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    to="/#contact"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-brand-deep-blue rounded-lg font-brand-body font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-105"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Contact Us
                  </Link>
                  <Link 
                    to="/faq"
                    className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg font-brand-body font-semibold hover:bg-white/10 transition-colors duration-300"
                  >
                    <HelpCircle className="w-4 h-4 mr-2" />
                    View FAQ
                  </Link>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Contact Information */}
          <section className="bg-brand-light-gray/30 rounded-2xl p-8">
            <h2 className="font-brand-heading text-2xl font-semibold text-brand-dark-navy mb-4">
              Contact Information
            </h2>
            <div className="space-y-2 font-brand-body text-brand-dark-navy/80">
              <p><strong>Location:</strong> Ulliyeri, Kozhikode, Kerala 673323, India</p>
              <p><strong>Phone:</strong> <a href="tel:+919656778508" className="text-brand-mid-blue hover:text-brand-deep-blue transition-colors duration-300">+91-9656778508</a></p>
              <p><strong>Email:</strong> <a href="mailto:contact@ad-atelier.com" className="text-brand-mid-blue hover:text-brand-deep-blue transition-colors duration-300">contact@ad-atelier.com</a></p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
      <BackToTop />
    </>
  );
};

export default Sitemap;
