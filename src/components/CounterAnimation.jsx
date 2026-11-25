import { useEffect, useRef, useState } from 'react';

export default function CounterAnimation({ value, prefix = '', suffix = '', duration = 900 }) {
  const ref = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      setCount(value);
      return undefined;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      const start = performance.now();
      const animate = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        setCount(Math.round(value * (1 - Math.pow(1 - progress, 3))));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
      observer.disconnect();
    }, { threshold: 0.35 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, duration]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}
