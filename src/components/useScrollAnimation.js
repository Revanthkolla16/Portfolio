import { useEffect, useRef, useState } from "react";

export default function useScrollAnimation(animationClass = "fade-in") {
  const ref = useRef();
  const [applied, setApplied] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setApplied(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, applied ? animationClass : ""];
} 