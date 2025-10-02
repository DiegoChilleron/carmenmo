import { useEffect } from 'react';
import { useLocation } from 'react-router';

export const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            // Si hay un hash, hacer scroll al elemento correspondiente
            const elementId = hash.substring(1);
            const timer = setTimeout(() => {
                const element = document.getElementById(elementId);
                element?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
            
            return () => clearTimeout(timer);
        } else {
            // Si no hay hash, hacer scroll al top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [pathname, hash]);

    return null;
};