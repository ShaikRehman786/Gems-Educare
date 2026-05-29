import { useEffect, useState, useRef } from 'react';

const CountUp = ({ end, suffix = '', duration = 2000, decimals = 0 }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    let startTime = null;
    const endNum = parseFloat(end.toString().replace(/,/g, ''));

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * endNum;
      setCount(current);
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [hasStarted, end, duration]);

  const display = typeof end === 'string' && isNaN(parseFloat(end))
    ? end
    : count.toFixed(decimals);

  return <span ref={ref}>{display}{suffix}</span>;
};

export default CountUp;
