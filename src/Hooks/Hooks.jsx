import { useEffect, useRef } from 'react';

export function useScrollAnimation() {
    const elementoRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        if (elementoRef.current) observer.observe(elementoRef.current);
        return () => observer.disconnect();
    }, []);

    return elementoRef;
}