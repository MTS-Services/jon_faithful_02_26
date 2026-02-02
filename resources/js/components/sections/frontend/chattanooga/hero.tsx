import React from 'react'

export default function Hero() {
  return (
       <div
        className="relative w-full h-[400px] md:h-[500px] bg-foreground flex items-center justify-center overflow-hidden">
        <img src="/assets/images/Aerial-View-of-Chattanooga-Tennessee-TN.jpeg" alt="Apartment building in Tennessee"
            className="absolute top-0 left-0 w-full h-full object-cover" />

        <div className="absolute inset-0 bg-foreground/80"></div>

        <div className="container mx-auto relative z-10 px-6">
            <div className="max-w-3xl text-white">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-medium  mb-6 text-white">
                    Living in Chattanooga, Tennessee
                </h2>
                <p className="text-base font-montserrat font-normal  mb-6 text-white">Homes, Cost of Living, Neighborhoods &
                    Outdoor Lifestyle Chattanooga, Tennessee is one of the most scenic and fast-growing cities in the
                    Southeast. Known for its mountains, riverfront living, and outdoor lifestyle, Chattanooga blends
                    natural beauty with a revitalized downtown and growing job market. It’s a top choice for
                    professionals, families, and outdoor enthusiasts relocating to Tennessee. .
                </p>
            </div>
        </div>
    </div>
  )
}
