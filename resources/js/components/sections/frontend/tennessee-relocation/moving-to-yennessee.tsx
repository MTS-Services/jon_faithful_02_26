import React from 'react'

export default function MovingToTennessee() {
  return (
        <div
        className="container mx-auto px-4 py-12 flex flex-col lg:flex-row items-center gap-8 lg:gap-12 font-montserrat">
        <div className="flex flex-col justify-center w-full lg:w-1/2">
            <h3 className="text-2xl sm:text-3xl lg:text-[42px] text-foreground font-bold font-montserrat mb-10">Why People Are
                Moving to Tennessee</h3>
            <p className="text-sm sm:text-base font-montserrat font-normal text-foreground mb-8">
                People relocate to Tennessee for many reasons, but the most common include:
            </p>
            <ul className="text-muted-foreground mb-4 space-y-1">
                <li className="flex items-start gap-3 text-sm sm:text-base font-montserrat font-normal text-foreground">
                    <span className="mt-1.5 shrink-0">
                        <svg width="6" height="6" viewBox="0 0 10 10" fill="black">
                            <circle cx="5" cy="5" r="5" />
                        </svg>
                    </span>
                    <span>No state income tax in Tennessee</span>
                </li>
                <li className="flex items-start gap-3 text-sm sm:text-base font-montserrat font-normal text-foreground">
                    <span className="mt-1.5 shrink-0">
                        <svg width="6" height="6" viewBox="0 0 10 10" fill="black">
                            <circle cx="5" cy="5" r="5" />
                        </svg>
                    </span>
                    <span>Lower cost of living than most U.S. states</span>
                </li>
                <li className="flex items-start gap-3 text-sm sm:text-base font-montserrat font-normal text-foreground">
                    <span className="mt-1.5 shrink-0">
                        <svg width="6" height="6" viewBox="0 0 10 10" fill="black">
                            <circle cx="5" cy="5" r="5" />
                        </svg>
                    </span>
                    <span>Affordable housing and rentals</span>
                </li>
                <li className="flex items-start gap-3 text-sm sm:text-base font-montserrat font-normal text-foreground">
                    <span className="mt-1.5 shrink-0">
                        <svg width="6" height="6" viewBox="0 0 10 10" fill="black">
                            <circle cx="5" cy="5" r="5" />
                        </svg>
                    </span>
                    <span>Strong job growth</span>
                </li>
                <li className="flex items-start gap-3 text-sm sm:text-base font-montserrat font-normal text-foreground">
                    <span className="mt-1.5 shrink-0">
                        <svg width="6" height="6" viewBox="0 0 10 10" fill="black">
                            <circle cx="5" cy="5" r="5" />
                        </svg>
                    </span>
                    <span>Outdoor lifestyle (mountains, lakes, rivers)</span>
                </li>
                <li className="flex items-start gap-3 text-sm sm:text-base font-montserrat font-normal text-foreground">
                    <span className="mt-1.5 shrink-0">
                        <svg width="6" height="6" viewBox="0 0 10 10" fill="black">
                            <circle cx="5" cy="5" r="5" />
                        </svg>
                    </span>
                    <span>Family-friendly communities</span>
                </li>
                <li className="flex items-start gap-3 text-sm sm:text-base font-montserrat font-normal text-foreground">
                    <span className="mt-1.5 shrink-0">
                        <svg width="6" height="6" viewBox="0 0 10 10" fill="black">
                            <circle cx="5" cy="5" r="5" />
                        </svg>
                    </span>
                    <span>Central East Coast location</span>
                </li>
            </ul>
            <p className="text-sm sm:text-base font-montserrat font-normal text-foreground mt-7">
                Tennessee offers a unique balance of affordability, opportunity, and quality of life.
            </p>
        </div>
        <div className="w-full lg:w-1/2">
            <div className="flex flex-col sm:flex-row gap-3">
                <div className="rounded-2xl overflow-hidden shadow-lg w-full sm:w-[300px] sm:shrink-0 h-48 sm:h-[420px]">
                    <img src="/assets/images/Gatlinburg_-TN-cityscape-2048x1188.jpeg" alt="Tennessee Home"
                        className="w-full h-full object-cover" />
                </div>
                <div
                    className="rounded-2xl overflow-hidden shadow-lg w-full sm:w-[300px] sm:shrink-0 h-48 sm:h-[420px] mt-12">
                    <img src="/assets/images/Memphis_-Tennessee_-USA-skyline-over-Beale-Street-2048x1367.jpeg"
                        alt="Tennessee Home" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    </div>
  )
}
