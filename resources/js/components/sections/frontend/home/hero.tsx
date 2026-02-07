import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "/assets/images/home/Aerial-View-Map.jpeg",
    "/assets/images/home/Nashville-country.jpeg",
  ];

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, [slides.length]);

  return (
    <section className="relative h-[650px] overflow-hidden flex items-center justify-center">
      
      {/* Background Slider */}
      <div className="absolute inset-0 z-0 bg-gray-900">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url('${slide}')` }}
            aria-hidden={index !== currentSlide}
          />
        ))}
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-white mt-10">
        <h2 className="text-xl md:text-3xl font-light mb-4 tracking-wide">
          Why Tennessee?
        </h2>
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-6 leading-tight">
          The Complete Guide to Living,<br />
          Moving and Buying a Home<br />
          in Tennessee
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mb-10 text-gray-100 font-light">
          Thinking about moving to Tennessee? WhyTennessee.com is your all-in-one
          relocation resource for discovering the best places to live in Tennessee,
          comparing cities, understanding the cost of living, and browsing homes for sale.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-start gap-4">
          <a
            href="#cities"
            className="bg-primary hover:bg-secondary text-white px-8 py-3 rounded-full text-lg font-medium transition flex items-center justify-center"
          >
            Explore Tennessee Cities
            <span className="ml-2">
              <svg
                aria-hidden="true"
                className="w-5 h-5 fill-white"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm-28.9 143.6l75.5 72.4H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h182.6l-75.5 72.4c-9.7 9.3-9.9 24.8-.4 34.3l11 10.9c9.4 9.4 24.6 9.4 33.9 0L404.3 273c9.4-9.4 9.4-24.6 0-33.9L271.6 106.3c-9.4-9.4-24.6-9.4-33.9 0l-11 10.9c-9.5 9.6-9.3 25.1.4 34.4z" />
              </svg>
            </span>
          </a>

          <a
            href="homes-for-sale"
            className="bg-primary hover:bg-secondary text-white px-8 py-3 rounded-full text-lg font-medium transition flex items-center justify-center"
          >
            Search Homes for Sale
            <span className="ml-2">
              <svg
                aria-hidden="true"
                className="w-5 h-5 fill-white"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm-28.9 143.6l75.5 72.4H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h182.6l-75.5 72.4c-9.7 9.3-9.9 24.8-.4 34.3l11 10.9c9.4 9.4 24.6 9.4 33.9 0L404.3 273c9.4-9.4 9.4-24.6 0-33.9L271.6 106.3c-9.4-9.4-24.6-9.4-33.9 0l-11 10.9c-9.5 9.6-9.3 25.1.4 34.4z" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export { Hero }