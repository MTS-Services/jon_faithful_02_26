import React from 'react'

export default function Hero() {
  return (
        <div
        className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <img src="/assets/images/Highbury-Homes-for-rent-cookeville-tn.webp" alt="Apartment building in Tennessee"
            className="absolute top-0 left-0 w-full h-full object-cover" />

        <div className="absolute inset-0 bg-foreground/60"></div>

        <div className="container mx-auto relative z-10 px-6">
            <div className="text-center text-primary-foreground">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl  font-montserrat font-medium  mb-6 leading-tight">
                        Modern Home in West Knoxville
                    </h2>

                    <div className="flex items-center gap-3 justify-center text-sm md:text-base font-medium">
                        <a href="#" className="hover:text-muted transition-colors cursor-pointer">Home</a>

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20" height="20"
                            fill="currentColor">
                            <path
                                d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z">
                            </path>
                        </svg>

                        <span className="text-muted">Modern Home in West Knoxville</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
