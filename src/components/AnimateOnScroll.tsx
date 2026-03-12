"use client";

import { useEffect, useRef } from "react";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  animation?: "fade-up" | "fade-left" | "fade-right" | "scale-in" | "slide-right";
  delay?: number;
  className?: string;
}

export default function AnimateOnScroll({
  children,
  animation = "fade-up",
  delay = 0,
  className = "",
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => el.classList.add("is-visible"), delay * 1000);
          } else {
            el.classList.add("is-visible");
          }
          observer.unobserve(el);
        }
      },
      { rootMargin: "-50px", threshold: 0 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const animClass = `anim-${animation}`;

  return (
    <div
      ref={ref}
      className={`animate-on-scroll ${animClass} ${className}`}
    >
      {children}
    </div>
  );
}
