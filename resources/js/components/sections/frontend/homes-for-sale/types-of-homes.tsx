import React from 'react'

export default function TypesOfHomes() {
  return (
        <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-12 font-montserrat">
        <div className="w-full">
            <h2 className="text-[40px] font-montserrat font-medium text-foreground mb-6">
                Types of Homes for Sale in Tennessee
            </h2>

            <p className="text-base font-montserrat font-normal text-foreground mb-6">
                Tennessee's housing market includes a wide range of property types. On this page you'll find:
            </p>

            <ul className="space-y-3 mb-2 ml-4">
                <li className="flex items-start gap-3">
                    <span className="mt-[6px] shrink-0">
                        <svg width="6" height="6" viewBox="0 0 8 8" fill="black" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="4" cy="4" r="4" />
                        </svg>
                    </span>
                    <p className="text-base text-foreground">
                        <span className="font-montserrat font-bold">Single-family homes</span> – from starter homes to
                        luxury estates
                    </p>
                </li>

                <li className="flex items-start gap-3">
                    <span className="mt-[6px] shrink-0">
                        <svg width="6" height="6" viewBox="0 0 8 8" fill="black" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="4" cy="4" r="4" />
                        </svg>
                    </span>
                    <p className="text-base text-foreground">
                        <span className="font-bold">Townhomes & condos</span> – low-maintenance living near city centers
                    </p>
                </li>

                <li className="flex items-start gap-3">
                    <span className="mt-[6px] shrink-0">
                        <svg width="6" height="6" viewBox="0 0 8 8" fill="black" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="4" cy="4" r="4" />
                        </svg>
                    </span>
                    <p className="text-base text-foreground">
                        <span className="font-bold">New construction communities</span> – energy-efficient homes with modern
                        layouts
                    </p>
                </li>

                <li className="flex items-start gap-3">
                    <span className="mt-[6px] shrink-0">
                        <svg width="6" height="6" viewBox="0 0 8 8" fill="black" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="4" cy="4" r="4" />
                        </svg>
                    </span>
                    <p className="text-base text-foreground">
                        <span className="font-bold">Rural properties & mini-farms</span> – extra land, privacy, and space to
                        grow
                    </p>
                </li>

                <li className="flex items-start gap-3">
                    <span className="mt-[6px] shrink-0">
                        <svg width="6" height="6" viewBox="0 0 8 8" fill="black" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="4" cy="4" r="4" />
                        </svg>
                    </span>
                    <p className="text-base text-foreground">
                        <span className="font-bold">Lakefront and mountain homes</span> – perfect for primary residences,
                        second homes, or vacation rentals
                    </p>
                </li>
            </ul>

            <p className="text-base text-foreground">
                Use the <span className="font-bold">Property Type</span> filter to quickly narrow your search to the kind of
                home that fits your lifestyle.
            </p>
        </div>

        <div className="w-full">
            <div className="rounded-2xl overflow-hidden shadow-lg h-[650px]">
                <img src="/assets/images/classic-house-with-flower-garden-2048x1365.jpeg" alt="Tennessee Home"
                    className="w-full h-full object-cover" />
            </div>
        </div>
    </div>
  )
}
