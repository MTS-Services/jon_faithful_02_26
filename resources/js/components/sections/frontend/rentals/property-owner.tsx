import React from 'react'

export default function PropertyOwner() {
  return (
       <div
        className="relative w-full min-h-[450px] md:h-[500px]  flex items-center justify-center overflow-hidden">
        <img src="/assets/images/Businessman-holding.jpeg"
            alt="Property Management" className="absolute top-0 left-0 w-full h-full object-cover" />

        <div className="absolute inset-0 bg-primary/70"></div>

        <div className="container mx-auto relative z-10">
            <div className="text-background px-6 md:px-16 text-center md:text-left">
                <div className="max-w-4xl">
                    <h2 className="text-3xl md:text-5xl font-montserrat font-semibold uppercase mb-6 leading-tight">
                        Are You a Property Owner <br className="hidden md:block" /> or Manager?
                    </h2>

                    <p className="text-lg md:text-xl font-montserrat font-medium mb-8 opacity-90">
                        If you have rentals available and want to reach people actively moving to Tennessee:
                    </p>

                    <a href="#"
                        className="inline-block text-text-primary-foreground font-montserrat font-medium py-4 px-10 rounded-full bg-primary hover:bg-primary/80 transition-colors duration-300 shadow-xl">
                        List a Rental Property
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}
