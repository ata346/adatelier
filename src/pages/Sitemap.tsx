import { Link } from "react-router-dom";
import { format } from "date-fns";
import SEOHead from "@/components/SEOHead";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { routes, getRoutesByCategory } from "@/config/routes";
import { Calendar, ExternalLink } from "lucide-react";

const Sitemap = () => {
  const mainPages = getRoutesByCategory("main");
  const homeSections = getRoutesByCategory("section");

  const formatDate = (dateString: string) => {
    return format(new Date(dateString), "MMMM d, yyyy");
  };

  const isSectionLink = (href: string) => href.includes("/#");

  return (
    <>
      <SEOHead 
        title="Sitemap | Ad Atelier"
        description="Navigate through all pages and sections of Ad Atelier's website. Find branding services, pricing, FAQ, and contact information with last updated dates."
        keywords="sitemap, site navigation, ad atelier pages, website structure, site map"
      />
      <Navigation />
      <div className="min-h-screen bg-background pt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
              Website Sitemap
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Navigate through all pages and sections of our website. Find everything you need to know about our branding and advertising services.
            </p>
            <Badge variant="secondary" className="mt-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              {routes.length} Total Pages & Sections
            </Badge>
          </header>

          {/* Main Pages Section */}
          <section className="mb-16 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-1 w-12 bg-primary rounded-full"></div>
              <h2 className="text-2xl font-bold text-foreground">Main Pages</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mainPages.map((page, index) => {
                const Icon = page.icon;
                return (
                  <Link
                    key={page.href}
                    to={page.href}
                    className="group animate-fade-in"
                    style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                  >
                    <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50 hover:-translate-y-1">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          {isSectionLink(page.href) && (
                            <ExternalLink className="h-4 w-4 text-muted-foreground" />
                          )}
                        </div>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {page.title}
                        </CardTitle>
                        <CardDescription className="line-clamp-2">
                          {page.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          <span>Updated: {formatDate(page.lastUpdated)}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </section>

          {/* Home Page Sections */}
          <section className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-1 w-12 bg-accent rounded-full"></div>
              <h2 className="text-2xl font-bold text-foreground">Home Page Sections</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {homeSections.map((section, index) => {
                const Icon = section.icon;
                return (
                  <Link
                    key={section.href}
                    to={section.href}
                    className="group animate-fade-in"
                    style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                  >
                    <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-accent/50 hover:-translate-y-1">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                            <Icon className="h-5 w-5 text-accent" />
                          </div>
                          <ExternalLink className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <CardTitle className="text-lg group-hover:text-accent transition-colors">
                          {section.title}
                        </CardTitle>
                        <CardDescription className="line-clamp-2">
                          {section.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          <span>Updated: {formatDate(section.lastUpdated)}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </section>

          {/* Additional Information */}
          <section className="mt-16 p-8 bg-muted/50 rounded-lg animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <h3 className="text-xl font-bold text-foreground mb-4">Need Help?</h3>
            <p className="text-muted-foreground mb-4">
              Can't find what you're looking for? Our team is here to help you navigate our services and answer any questions you may have.
            </p>
            <Link 
              to="/#contact" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
            >
              Contact Us
              <ExternalLink className="h-4 w-4" />
            </Link>
          </section>
        </div>
      </div>
      <Footer />
      <BackToTop />
    </>
  );
};

export default Sitemap;
