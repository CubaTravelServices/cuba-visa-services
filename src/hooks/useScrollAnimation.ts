import { useEffect, useRef } from "react";

export function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.classList.add("visible");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    const elements = ref.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el, i) => {
      (el as HTMLElement).style.transitionDelay = `${i * 0.1}s`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return ref;
}
