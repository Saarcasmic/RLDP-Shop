import { useRef, useEffect } from 'react';
import {  ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';
import { Product } from '../../types/product';

interface ProductSliderProps {
  products: Product[];
}

export default function ProductSlider({ products }: ProductSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const autoScroll = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 1; // Slow scroll speed

      // Reset scroll position when reaching the end
      if (
        sliderRef.current.scrollLeft >=
        sliderRef.current.scrollWidth - sliderRef.current.clientWidth
      ) {
        sliderRef.current.scrollLeft = 0;
      }

      animationRef.current = requestAnimationFrame(autoScroll);
    }
  };

  const startAnimation = () => {
    animationRef.current = requestAnimationFrame(autoScroll);
  };

  const stopAnimation = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  useEffect(() => {
    startAnimation();
    return () => stopAnimation();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-x-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.product-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-all duration-300 -translate-x-1/2 lg:opacity-0 lg:group-hover:opacity-100"
      >
        <ChevronLeft className="w-6 h-6 text-amber-600" />
      </button>
      
      <div
        ref={sliderRef}
        className="flex gap-12 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 group px-6"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onMouseEnter={stopAnimation}
        onMouseLeave={startAnimation}
      >
        {[...products, ...products].map((product, index) => (
          <div
            key={`${product.slug}-${index}`}
            className="product-card flex-shrink-0 opacity-0 translate-x-8 transition-all duration-700"
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <ProductCard {...product} />
          </div>
        ))}
      </div>

      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-all duration-300 translate-x-1/2 lg:opacity-0 lg:group-hover:opacity-100"
      >
        <ChevronRight className="w-6 h-6 text-amber-600" />
      </button>
    </div>
  );
}