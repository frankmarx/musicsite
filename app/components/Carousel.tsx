import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

interface CarouselProps {
  children: ReactNode;
}

export function Carousel({ children }: CarouselProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const container = el?.parentElement;
    if (!el || !container) return;

    const handleWheel = (e: WheelEvent) => {
      // Let horizontal input scroll natively so the trackpad's
      // momentum/inertia is preserved (smooth, Instagram-like glide).
      if (Math.abs(e.deltaX) > 0) return;
      // Map vertical wheel input to horizontal scrolling.
      el.scrollLeft += e.deltaY;
      e.preventDefault();
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="carousel" ref={ref}>
      {children}
    </div>
  );
}
