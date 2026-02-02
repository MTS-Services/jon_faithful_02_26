import React from 'react'

export default function Hero() {
  return (
    <div className="relative w-full h-[500px] bg-foreground flex items-center justify-center overflow-hidden">
        <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay muted loop>
            <source
                src="https://whytennessee.com/wp-content/uploads/2025/12/Dolly-Zoom-into-a-Countryside-Family-Home-with-a-Pool.mp4"
                type="video/mp4" />
        </video>
        <div className="container">

            <div className="relative z-10 text-center px-4 md:px-16">
                <div className="w-full md:w-3/4 mx-auto">
                    <h2 className="text-3xl md:text-5xl text-primary-foreground  font-montserrat font-semibold uppercase mb-4">
                        Homes for Sale in Tennessee | Search Tennessee Real Estate & Houses by City
                    </h2>
                </div>
                <div className="w-full md:w-2/3 lg:w-[63%] mx-auto">
                    <p className="text-primary-foreground  font-montserrat text-base md:text-lg leading-relaxed">
                        Browse homes for sale in Tennessee by city, price, beds, and baths. Explore
                        Tennessee real estate in Knoxville, Nashville, Chattanooga, Johnson City, Kingsport, Bristol,
                        Memphis, Franklin, Clarksville, Murfreesboro, Cookeville, Jackson, and more.
                    </p>
                </div>
            </div>

        </div>
    </div>
  )
}
