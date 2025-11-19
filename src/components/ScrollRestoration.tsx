import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const scrollPositions: Record<string, number> = {};

export const ScrollRestoration = () => {
  const location = useLocation();

  useEffect(() => {
    // Save current scroll position before navigation
    const saveScrollPosition = () => {
      scrollPositions[location.pathname] = window.scrollY;
    };

    window.addEventListener("beforeunload", saveScrollPosition);

    // Restore scroll position or scroll to top
    const handleScroll = () => {
      if (scrollPositions[location.pathname]) {
        window.scrollTo(0, scrollPositions[location.pathname]);
      } else {
        window.scrollTo(0, 0);
      }
    };

    // Small delay to ensure page is rendered
    const timer = setTimeout(handleScroll, 50);

    return () => {
      saveScrollPosition();
      window.removeEventListener("beforeunload", saveScrollPosition);
      clearTimeout(timer);
    };
  }, [location.pathname]);

  return null;
};
