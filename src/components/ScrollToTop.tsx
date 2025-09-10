import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when pathname changes
    // Use a small delay to ensure the page content is rendered
    const scrollToTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      
      // Also try scrolling the main element if it exists
      const mainElement = document.querySelector('main');
      if (mainElement) {
        mainElement.scrollTop = 0;
      }
    };

    // Immediate scroll
    scrollToTop();
    
    // Also scroll after a small delay to handle any layout shifts
    const timeoutId = setTimeout(scrollToTop, 50);
    
    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
