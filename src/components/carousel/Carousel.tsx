import { useState, useEffect } from "react";

interface CarouselProps {
  children: React.ReactNode[];
  autoSlide?: boolean;
  autoSlideInterval?: number;
}

function Carousel({ children, autoSlide = false, autoSlideInterval = 3000 }: CarouselProps) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? children.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === children.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval]);

  return (
    <div className="relative w-full max-w-4xl mx-auto min-h-[35rem] overflow-hidden">
      <div
        className="flex h-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {children.map((child, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 justify-items-center">
            {child}
          </div>
        ))}
      </div>

      <button
        onClick={prev}
        className="absolute left-4 top-[44%] -translate-y-1/2 p-1 rounded-full bg-white/80 text-gray-800 hover:bg-white"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-8 h-8" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-[44%] -translate-y-1/2 p-1 rounded-full bg-white/80 text-gray-800 hover:bg-white"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-8 h-8" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-2">
        {children.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurr(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              curr === i ? "bg-white scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;