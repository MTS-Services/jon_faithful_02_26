import React from 'react'

export default function FindThePerfectPlace() {
  return (
        <div
        className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center gap-16 md:gap-12 font-montserrat">

        <div className="w-full relative mb-20 md:mb-0">
            <div className="rounded-2xl overflow-hidden shadow-lg w-[90%] md:w-full">
                <img src="/assets/images/Highbury-Homes-for-rent-cookeville-tn.webp" alt="Tennessee Home"
                    className="w-full h-64 md:h-[400px] object-cover" />
            </div>

            <div className="absolute bottom-[-104px] right-0 w-[55%] md:w-[50%] rounded-2xl overflow-hidden shadow-2xl">
                <img src="/assets/images/Apartments-in-2048x1365.jpeg" alt="Apartment" className="w-full h-32 md:h-48 object-cover" />
            </div>
        </div>

        <div className="w-full">
            <h2 className="text-3xl md:text-[42px] font-semibold text-primary mb-6 leading-tight">
                Find the Perfect Place to Rent in Tennessee
            </h2>

            <p className="text-base font-medium text-text-muted mb-6">
                Whether you’re relocating to Tennessee, moving for work, or exploring a new city, our rental listings
                make it easy to find the right place to call home. Browse available houses, apartments, condos, and
                townhomes for rent across Tennessee’s most popular cities and communities.
            </p>

            <p className="text-base font-medium text-text-muted">
                Our platform is designed to help you compare options, narrow your search, and discover rentals that
                match your lifestyle, budget, and location preferences — all in one place.
            </p>
        </div>
    </div>
  )
}
