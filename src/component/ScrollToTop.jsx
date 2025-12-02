import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Immediate scroll with instant behavior (override smooth scroll CSS)
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });

        // Delayed scroll to handle GSAP cleanup and late-rendering content
        // Increased to 150ms to ensure it runs AFTER RouteHandler's GSAP cleanup (100ms)
        const scrollTimer = setTimeout(() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        }, 150);

        return () => clearTimeout(scrollTimer);
    }, [pathname]);

    return null;
};

export default ScrollToTop;