import React, { useState, useEffect } from "react";

interface HeroButton {
    label: string;
    href: string;
}

interface HeroProps {
    slides: string[];
    eyebrow?: string;
    title: React.ReactNode;
    description?: React.ReactNode;
    buttons?: HeroButton[];
    autoSlide?: boolean;
    slideInterval?: number;
    height?: string;
}

const Hero: React.FC<HeroProps> = ({
    slides,
    eyebrow = "",
    title,
    description,
    buttons = [],
    autoSlide = true,
    slideInterval = 5000,
    height = "h-[500px]",
}) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        if (!autoSlide || slides.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, slideInterval);

        return () => clearInterval(interval);
    }, [autoSlide, slideInterval, slides.length]);

    return (
        <section className={`relative ${height} overflow-hidden flex items-center`}>
            {/* Background Slider */}
            <div className="absolute inset-0 z-0 bg-gray-900">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"
                            }`}
                        style={{ backgroundImage: `url('${slide}')` }}
                        aria-hidden={index !== currentSlide}
                    />
                ))}
                <div className="absolute inset-0 bg-black/40 z-10" />
            </div>

            {/* Content */}
            <div className="relative z-20 container mx-auto px-4 lg:px-16 text-white">
                {eyebrow && (
                    <h2 className="text-xl md:text-3xl font-light mb-4 tracking-wide">
                        {eyebrow}
                    </h2>
                )}

                <h1 className="text-xl md:text-2xl lg:text-5xl font-bold mb-6 leading-tight max-w-5xl">
                    {title}
                </h1>

                {description && (
                    <p className="text-lg md:text-xl max-w-4xl mb-10 text-gray-100 font-light">
                        {description}
                    </p>
                )}

                {buttons.length > 0 && (
                    <div className="flex flex-col sm:flex-row gap-4">
                        {buttons.map((btn, i) => (
                            <a
                                key={i}
                                href={btn.href}
                                className="bg-primary hover:bg-secondary text-white px-8 py-3 rounded-full text-lg font-medium transition flex items-center justify-center"
                            >
                                {btn.label}
                                <span className="ml-2">
                                    <svg
                                        aria-hidden="true"
                                        className="w-5 h-5 fill-white"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm-28.9 143.6l75.5 72.4H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h182.6l-75.5 72.4c-9.7 9.3-9.9 24.8-.4 34.3l11 10.9c9.4 9.4 24.6 9.4 33.9 0L404.3 273c9.4-9.4 9.4-24.6 0-33.9L271.6 106.3c-9.4-9.4-24.6-9.4-33.9 0l-11 10.9c-9.5 9.6-9.3 25.1.4 34.4z" />
                                    </svg>
                                </span>
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export { Hero };
