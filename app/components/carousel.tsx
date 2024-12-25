'use client'
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface Slide {
    id: number;
    url: string;
    alt: string;
}

interface CarouselProps {
    slides: Slide[];
}

const Carousel = ({ slides } : CarouselProps) => {
    const [current, setCurrent] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrent((current) => (current === slides.length - 1 ? 0 : current + 1));
    }, [slides.length]);
    
    const prevSlide = useCallback(() => {
        setCurrent((current) => (current === 0 ? slides.length - 1 : current - 1));
    }, [slides.length]);
    
    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [nextSlide]);

    return (
        <div className="relative w-full h-full overflow-hidden">
            {/* Slides Container */}
            <div
                className="relative h-full flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {slides.map((slide) => (
                    <div key={slide.id} className="relative w-full h-full flex-shrink-0">
                        <Image
                            src={slide.url}
                            alt={slide.alt}
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                ))}
            </div>
            {/* Buttons */}
            <button
                className="absolute top-0 left-0 w-[15%] h-full"
                onClick={prevSlide}
            ></button>
            <button
                className="absolute top-0 right-0 w-[15%] h-full"
                onClick={nextSlide}
            ></button>

            {/* Indicators */}
            <div className=" absolute bottom-0 left-1/2 space-x-3 transform -translate-y-1/2 -translate-x-1/2">
                {slides.map((_, idx) => (
                <button
                    key={idx}
                    className={`w-2 h-2 rounded-full ${
                        idx === current ? 'bg-white' : 'bg-gray-500'
                    }`}
                    onClick={() => setCurrent(idx)}
                />
                ))}
            </div>

        </div>
    );
}

export default Carousel;