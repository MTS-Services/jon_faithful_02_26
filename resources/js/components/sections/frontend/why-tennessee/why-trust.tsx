import React from 'react'


export default function WhyTrust() {
  return (
       <div
        className="relative w-full min-h-[500px] flex items-center justify-center overflow-hidden py-12 md:py-20 mt-10 md:mt-20">
        <img src="/assets/images/pexels-kelly-34088068-1-scaled.jpg" alt="apartment-building-in-sunny-day-scaled"
            className="absolute top-0 left-0 w-full h-full object-cover" />

        <div className="absolute inset-0 bg-foreground/50"></div>

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
            <div className="bg-background text-foreground p-8 md:p-16 shadow-2xl text-center rounded-xl">

                <h2 className="text-2xl md:text-4xl font-semibold mb-4 md:mb-6 text-foreground">
                    Why Trust WhyTennessee.com?
                </h2>

                <p className="text-sm md:text-lg font-montserrat font-normal mb-8 leading-relaxed">
                    We focus exclusively on Tennessee. Unlike national listing sites, we provide local insight,
                    city-specific guides, and relocation-focused information designed to help people make
                    smart decisions about where to live.
                </p>
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-foreground uppercase tracking-wide">
                    Our mission is simple:
                </h3>

                <p className="text-lg md:text-xl font-montserrat font-medium text-muted-foreground">
                    Make moving to Tennessee easier, clearer, and more informed.
                </p>

            </div>
        </div>
    </div>
  )
}
