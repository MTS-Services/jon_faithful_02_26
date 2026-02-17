import React from 'react'

export default function Hero() {
  return (
        <div
        className="relative w-full h-[400px] md:h-[500px] bg-foreground flex items-center justify-center overflow-hidden">
        <img src="/assets/images/apartment-building-in-sunny-day-scaled.jpeg" alt="Apartment building in Tennessee"
            className="absolute top-0 left-0 w-full h-full object-cover" />

        <div className="absolute inset-0 bg-foreground/60"></div>

        <div className="container mx-auto relative z-10 px-6">
            <div className="text-center text-primary-foreground">
                <div className="max-w-4xl mx-auto">
                    <h2
                        className="text-3xl sm:text-4xl md:text-[50px] font-montserrat font-semibold uppercase mb-6 leading-tight">
                        Rentals in Tennesse
                    </h2>

                    <div className="flex items-center gap-3 justify-center text-sm md:text-base font-medium">
                        <span className="">Home</span>

                        <svg aria-hidden="true" className="w-4 h-4 fill-current text-primary-foreground/80" viewBox="0 0 448 512"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z">
                            </path>
                        </svg>

                        <span className="text-primary-foreground/90">Rentals</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
