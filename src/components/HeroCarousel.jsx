
import { useCallback, useEffect, useState } from "react";

function imageSrc(img) {
  return typeof img === "string" ? img : img.src;
}

function imageAlt(img, index) {
  return typeof img === "string" ? `Hero ${index + 1}` : img.alt;
}

export default function HeroCarousel({
    images = [],
    autoSlide = true,
    autoSlideInterval = 5000
}) {
    const [curr, setCurr] = useState(0);

    const prev = () =>
        setCurr((curr) => (curr === 0 ? images.length - 1 : curr - 1));
    const next = useCallback(() => {
        setCurr((curr) => (curr === images.length - 1 ? 0 : curr + 1));
    }, [images.length]);

    useEffect(() => {
        if (!autoSlide || images.length <= 1) return;
        const slideInterval = setInterval(next, autoSlideInterval);
        return () => clearInterval(slideInterval);
    }, [autoSlide, autoSlideInterval, images.length, next]);

    useEffect(() => {
        if (images.length <= 1) return;
        const nextIndex = (curr + 1) % images.length;
        const preload = new Image();
        preload.src = imageSrc(images[nextIndex]);
    }, [curr, images]);

    if (images.length === 0) return null;

    const activeSrc = imageSrc(images[curr]);
    const activeAlt = imageAlt(images[curr], curr);

    return (
        <div className="absolute inset-0 overflow-hidden">
            <img
                key={activeSrc}
                src={activeSrc}
                alt={activeAlt}
                className="w-full h-full object-cover object-[center_35%]"
                loading="eager"
                fetchPriority="high"
                decoding="async"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 md:via-black/20 to-transparent" />

            {/* Controls */}
            <div className="absolute inset-0 flex items-center justify-between px-2 md:px-0 z-40 pointer-events-none">
                <button
                    onClick={prev}
                    className="pointer-events-auto p-1 md:p-2 text-white/60 hover:text-white transition-all hover:scale-110 active:scale-90"
                    aria-label="Previous Slide"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-8 h-8 md:w-12 md:h-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>
                <button
                    onClick={next}
                    className="pointer-events-auto p-1 md:p-2 text-white/60 hover:text-white transition-all hover:scale-110 active:scale-90"
                    aria-label="Next Slide"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-8 h-8 md:w-12 md:h-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>

            {/* Indicators */}
            <div className="absolute bottom-4 md:bottom-6 left-0 right-0 z-50">
                <div className="flex items-center justify-center gap-2">
                    {images.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurr(i)}
                            className={`
                transition-all w-2 h-2 md:w-3 md:h-3 rounded-full
                ${curr === i ? "bg-white w-4 md:w-6" : "bg-white/50 hover:bg-white/80"}
              `}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
