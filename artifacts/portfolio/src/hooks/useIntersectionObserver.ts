import { useEffect, useRef, useState } from 'react';

export function useIntersectionObserver(options: IntersectionObserverInit = { threshold: 0.1 }) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef<any>(null);

  useEffect(() => {
    const currentTarget = targetRef.current;
    if (!currentTarget) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        observer.unobserve(currentTarget);
      }
    }, options);

    observer.observe(currentTarget);

    return () => {
      observer.unobserve(currentTarget);
    };
  }, []);

  return { targetRef, isIntersecting };
}
