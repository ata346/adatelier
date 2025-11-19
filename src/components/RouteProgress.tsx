import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

// Configure NProgress
NProgress.configure({ 
  showSpinner: false,
  minimum: 0.1,
  easing: 'ease',
  speed: 400,
  trickle: true,
  trickleSpeed: 200
});

export const RouteProgress = () => {
  const location = useLocation();

  useEffect(() => {
    NProgress.start();
    
    const timer = setTimeout(() => {
      NProgress.done();
    }, 300);

    return () => {
      clearTimeout(timer);
      NProgress.done();
    };
  }, [location.pathname]);

  return null;
};
