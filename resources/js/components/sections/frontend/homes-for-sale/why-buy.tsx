import React from 'react'

export default function WhyBuy() {
  return (
        <div className="bg-background mx-auto px-4 py-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="w-full h-full">
                <video className="h-full" controls>
                    <source className="h-full"
                        src="https://whytennessee.com/wp-content/uploads/2025/12/Blue-Grass-village-in-Highland-county_-Virginia-countryside_-car-driving-point-of-view-by-farm-shed-barns-houses-at-Appalachian-mountains.mp4"
                        type="video/mp4" />
                </video>
            </div>
            <div className="w-full">
                <h2 className="text-[40px] font-montserrat font-medium text-[primary mb-6">
                    Why Buy a Home in Tennessee?
                </h2>

                <p className="text-base font-montserrat font-normal text-primary mb-6">
                    If you’re browsing this page, you’re probably already thinking about moving or investing in
                    Tennessee. Here are a few key reasons buyers choose homes in Tennessee:
                </p>

                <ul className="space-y-3 mb-2 ml-4">
                    <li className="flex items-start gap-3">
                        <span className="mt-[6px] shrink-0">
                            <svg width="6" height="6" viewBox="0 0 8 8" fill="black" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="4" cy="4" r="4" />
                            </svg>
                        </span>
                        <p className="text-base text-primary">
                            <span className="font-montserrat font-bold">No state income tax</span> – keep more of your
                            paycheck or retirement income
                        </p>
                    </li>

                    <li className="flex items-start gap-3">
                        <span className="mt-[6px] shrink-0">
                            <svg width="6" height="6" viewBox="0 0 8 8" fill="black" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="4" cy="4" r="4" />
                            </svg>
                        </span>
                        <p className="text-base text-primary">
                            <span className="font-bold">Affordable housing</span> compared to many other states
                        </p>
                    </li>

                    <li className="flex items-start gap-3">
                        <span className="mt-[6px] shrink-0">
                            <svg width="6" height="6" viewBox="0 0 8 8" fill="black" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="4" cy="4" r="4" />
                            </svg>
                        </span>
                        <p className="text-base text-primary">
                            <span className="font-bold">Strong job markets</span> in cities like Nashville, Knoxville,
                            Chattanooga, Memphis, and the Tri-Cities
                        </p>
                    </li>

                    <li className="flex items-start gap-3">
                        <span className="mt-[6px] shrink-0">
                            <svg width="6" height="6" viewBox="0 0 8 8" fill="black" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="4" cy="4" r="4" />
                            </svg>
                        </span>
                        <p className="text-base text-primary">
                            <span className="font-bold">Four-season climate</span> with mild winters and beautiful fall
                            colors
                        </p>
                    </li>

                    <li className="flex items-start gap-3">
                        <span className="mt-[6px] shrink-0">
                            <svg width="6" height="6" viewBox="0 0 8 8" fill="black" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="4" cy="4" r="4" />
                            </svg>
                        </span>
                        <p className="text-base text-primary">
                            <span className="font-bold">Endless outdoor recreation</span> – lakes, rivers, mountains,
                            hiking, and more
                        </p>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="mt-[6px] shrink-0">
                            <svg width="6" height="6" viewBox="0 0 8 8" fill="black" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="4" cy="4" r="4" />
                            </svg>
                        </span>
                        <p className="text-base text-primary">
                            <span className="font-bold">Friendly communities</span> with a mix of small-town charm and city
                            amenities
                        </p>
                    </li>
                </ul>

                <p className="text-base text-primary">
                    For many buyers, Tennessee offers a rare combination of affordability, opportunity, and quality of
                    life.
                </p>
            </div>
        </div>
    </div>
  )
}
