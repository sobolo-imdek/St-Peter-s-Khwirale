import { useState, useEffect } from "react";

export default function HeroCarousel({
    images = [],
    autoSlide = true,
    autoSlideInterval = 5000
}) {
    const [curr, setCurr] = useState(0);

    const prev = () =>
        setCurr((curr) => (curr === 0 ? images.length - 1 : curr - 1));
    const next = () =>
        setCurr((curr) => (curr === images.length - 1 ? 0 : curr + 1));

    useEffect(() => {
        if (!autoSlide) return;
        const slideInterval = setInterval(next, autoSlideInterval);
        return () => clearInterval(slideInterval);
    }, [curr, autoSlide, autoSlideInterval]);

    return (
        <div className="absolute inset-0 overflow-hidden">
            {/* Image Strip */}
            <div
                className="flex transition-transform duration-700 ease-out h-full"
                style={{ transform: `translateX(-${curr * 100}%)` }}
            >
                {images.map((img, i) => (
                    <div key={i} className="min-w-full h-full relative">
                        <img
                            src={img}
                            alt={`Hero ${i + 1}`}
                            className="w-full h-full object-cover"
                            loading={i === 0 ? "eager" : "lazy"}
                        />
                        {/* Dark overlay for text readability */}
                        <div className="absolute inset-0 bg-black/50" />
                    </div>
                ))}
            </div>

            {/* Controls */}
            <div className="absolute inset-0 flex items-center justify-between px-0 z-40 pointer-events-none">
                {/* Buttons need pointer-events-auto */}
                <button
                    onClick={prev}
                    className="pointer-events-auto p-2 text-white/40 hover:text-white transition-all hover:scale-110 active:scale-90"
                    aria-label="Previous Slide"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-10 h-10 md:w-12 md:h-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>
                <button
                    onClick={next}
                    className="pointer-events-auto p-2 text-white/40 hover:text-white transition-all hover:scale-110 active:scale-90"
                    aria-label="Next Slide"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-10 h-10 md:w-12 md:h-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>

            {/* Indicators */}
            <div className="absolute bottom-6 left-0 right-0 z-50">
                <div className="flex items-center justify-center gap-2">
                    {images.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurr(i)}
                            className={`
                transition-all w-3 h-3 rounded-full
                ${curr === i ? "bg-white w-6" : "bg-white/50 hover:bg-white/80"}
              `}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
