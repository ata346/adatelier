import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-light-gray/30">
      <div className="text-center p-6">
        <h1 className="text-4xl font-brand-heading font-bold text-brand-dark-navy mb-4">404</h1>
        <p className="text-xl font-brand-body text-brand-dark-navy/70 mb-6">Oops! Page not found</p>
        <button 
          onClick={() => window.location.href = '/'}
          className="bg-brand-deep-blue hover:bg-brand-mid-blue text-brand-white px-6 py-3 rounded-lg font-brand-body transition-colors duration-300"
        >
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
