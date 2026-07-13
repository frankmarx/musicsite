import { useEffect, useRef, useState } from "react";

interface CarouselPictureProps {
  src: string;
}

export function CarouselPicture({ src }: CarouselPictureProps) {
  const ref = useRef<HTMLImageElement>(null);
  const [orientation, setOrientation] = useState<"landscape" | "portrait">(
    "landscape"
  );

  useEffect(() => {
    const img = ref.current;
    if (!img) return;

    const determine = () => {
      if (img.naturalWidth > 0 && img.naturalHeight > 0) {
        setOrientation(
          img.naturalWidth >= img.naturalHeight ? "landscape" : "portrait"
        );
      }
    };

    determine();
    img.addEventListener("load", determine);
    return () => img.removeEventListener("load", determine);
  }, [src]);

  return (
    <img
      src={src}
      alt=""
      ref={ref}
      className="carousel-picture"
      data-orientation={orientation}
    />
  );
}
