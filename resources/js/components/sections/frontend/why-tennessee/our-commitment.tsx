import React from 'react'


export default function OurCommitment() {
  return (
        <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-12 font-montserrat">
        <div className="w-full">
            <h2 className="text-[40px] font-montserrat font-semibold text-secondary-foreground mb-6">
                Our Commitment to Excellence
            </h2>

            <p className="text-base font-montserrat font-normal text-secondary-foreground mb-6">
                Tennessee's housing market includes a wide range of property types. On this page you'll find:
            </p>

            <ul className="space-y-3 mb-2 ml-4">
                <li className="flex items-start gap-3">
                    <span className="mt-[6px] shrink-0">
                        <svg width="6" height="6" viewBox="0 0 8 8" fill="black" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="4" cy="4" r="4" />
                        </svg>
                    </span>
                    <p className="text-base text-secondary-foreground">
                        Strategic guidance backed by market insight
                    </p>
                </li>

                <li className="flex items-start gap-3">
                    <span className="mt-[6px] shrink-0">
                        <svg width="6" height="6" viewBox="0 0 8 8" fill="black" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="4" cy="4" r="4" />
                        </svg>
                    </span>
                    <p className="text-base text-secondary-foreground">
                        Transparent and timely communication
                    </p>
                </li>

                <li className="flex items-start gap-3">
                    <span className="mt-[6px] shrink-0">
                        <svg width="6" height="6" viewBox="0 0 8 8" fill="black" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="4" cy="4" r="4" />
                        </svg>
                    </span>
                    <p className="text-base text-secondary-foreground">
                        Professional representation from start to finish
                    </p>
                </li>

                <li className="flex items-start gap-3">
                    <span className="mt-[6px] shrink-0">
                        <svg width="6" height="6" viewBox="0 0 8 8" fill="black" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="4" cy="4" r="4" />
                        </svg>
                    </span>
                    <p className="text-base text-secondary-foreground">
                        A smooth, stress-free client experience
                    </p>
                </li>
            </ul>

            <p className="text-base text-secondary-foreground">
                We measure success by the confidence our clients feel in every decision they make.
            </p>
            <div className="mt-5">
                <a href={route('frontend.get-in-touch')}
                    className="inline-block text-background font-montserrat font-normal py-4 px-10 rounded-full bg-primary hover:bg-primary/80 transition-colors duration-300 shadow-xl">
                    Contact us
                </a>
            </div>
        </div>

        <div className="w-full">
            <div className="rounded-2xl overflow-hidden shadow-lg h-[650px]">
                <img src="/assets/images/Dawning_OptionalPool-Dusk-1024x683.webp" alt="Tennessee Home"
                    className="w-full h-full object-cover" />
            </div>
        </div>
    </div>
  )
}
