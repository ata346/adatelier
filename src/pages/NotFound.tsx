import { useLocation, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Home, Search, FileQuestion, FileText, CreditCard, Map, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import NotFoundIllustration from "@/components/NotFoundIllustration";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const pages = [
    { name: "Home", path: "/", icon: Home, description: "Return to homepage" },
    { name: "FAQ", path: "/faq", icon: FileQuestion, description: "Frequently asked questions" },
    { name: "Terms & Conditions", path: "/terms-conditions", icon: FileText, description: "Legal terms and policies" },
    { name: "Payment & Refund", path: "/payment-refund", icon: CreditCard, description: "Payment and refund policy" },
    { name: "Sitemap", path: "/sitemap", icon: Map, description: "View all pages" },
  ];

  const filteredPages = pages.filter(
    page =>
      page.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      page.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (filteredPages.length > 0) {
      navigate(filteredPages[0].path);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          {/* Animated Illustration */}
          <div className="mb-8 animate-fade-in">
            <NotFoundIllustration />
          </div>

          {/* Error Code */}
          <div className="text-center mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h1 className="text-6xl sm:text-7xl font-brand-heading font-bold text-primary mb-4">
              404
            </h1>
            <h2 className="text-2xl sm:text-3xl font-brand-heading font-semibold text-foreground mb-4">
              Page Not Found
            </h2>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <form onSubmit={handleSearch} className="max-w-xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search for pages..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-6 text-lg bg-card border-2 border-border focus:border-primary transition-colors"
                />
              </div>
            </form>
          </div>

          {/* Quick Links */}
          <div className="mb-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-xl font-brand-heading font-semibold text-foreground mb-6 text-center">
              Quick Links
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredPages.map((page, index) => {
                const Icon = page.icon;
                return (
                  <Link
                    key={page.path}
                    to={page.path}
                    className="group"
                    style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                  >
                    <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-brand-heading font-semibold text-foreground mb-1 flex items-center gap-2">
                            {page.name}
                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {page.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* No Results */}
          {searchQuery && filteredPages.length === 0 && (
            <div className="text-center py-8 animate-fade-in">
              <p className="text-muted-foreground mb-4">
                No pages found matching "{searchQuery}"
              </p>
              <Button
                onClick={() => setSearchQuery("")}
                variant="outline"
              >
                Clear Search
              </Button>
            </div>
          )}

          {/* Primary CTA */}
          <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <Link to="/">
              <Button size="lg" className="gap-2">
                <Home className="w-5 h-5" />
                Back to Homepage
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
