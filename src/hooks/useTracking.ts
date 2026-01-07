import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '@/lib/tracking';

export const useTracking = () => {
  const location = useLocation();
  const isFirstRender = useRef(true);

  // Track page view on route change (skip first render - index.html handles initial PageView)
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    trackPageView();
  }, [location.pathname]);
};
