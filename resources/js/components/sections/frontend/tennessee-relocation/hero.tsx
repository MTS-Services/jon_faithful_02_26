import React from 'react'

export default function Hero() {
  return (
        <div
        className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <img src="/assets/images/pexels-pixabay-280222-scaled-1.jpg" alt="Apartment building in Tennessee"
            className="absolute top-0 left-0 w-full h-full object-cover" />

        <div className="absolute inset-0 bg-foreground/80"></div>

        <div className="container mx-auto relative z-10 px-6">
            <div className="max-w-3xl text-background">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-medium  mb-6 text-background">
                    The Ultimate Tennessee Relocation Guide
                </h2>
                <p className="text-base font-montserrat font-normal  mb-6 text-background">Moving to Tennessee is one of the
                    smartest lifestyle and financial decisions many Americans are making today. With no state income
                    tax, affordable living, growing job markets, and diverse cities, Tennessee continues to attract
                    families, retirees, remote workers, and investors from across the country.
                </p>
                <p className="text-base font-montserrat font-normal  mb-6 text-background">This Tennessee Relocation Guide walks
                    you through everything you need to know before you move — from choosing the right city to
                    understanding housing, renting, jobs, schools, and daily life.
                </p>
            </div>
        </div>
    </div>
  )
}
