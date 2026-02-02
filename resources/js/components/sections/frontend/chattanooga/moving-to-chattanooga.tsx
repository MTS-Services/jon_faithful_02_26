import React from 'react'

export default function MovingToChattanooga() {
  return (
        <div
        className="container mx-auto px-4 py-12 flex flex-col lg:flex-row items-center gap-8 lg:gap-12 font-montserrat">
        <div className="flex flex-col justify-center w-full lg:w-1/2">
            <h3 className="text-2xl sm:text-3xl lg:text-[42px] text-text-primary font-bold font-montserrat mb-10">Why People Are
                Moving to Chattanooga</h3>
            <p className="text-sm sm:text-base font-montserrat font-normal text-text-primary mb-8">
                Chattanooga consistently ranks as one of Tennessee’s most desirable relocation cities.
            </p>
            <ul className="text-gray-700 mb-4 space-y-1">
                <li className="flex items-start gap-3 text-sm sm:text-base font-montserrat font-normal text-text-primary">
                    <span className="mt-1.5 shrink-0">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="black">
                            <circle cx="5" cy="5" r="5" />
                        </svg>
                    </span>
                    <span>Access to mountains, rivers, and outdoor recreation</span>
                </li>
                <li className="flex items-start gap-3 text-sm sm:text-base font-montserrat font-normal text-text-primary">
                    <span className="mt-1.5 shrink-0">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="black">
                            <circle cx="5" cy="5" r="5" />
                        </svg>
                    </span>
                    <span>No state income tax in Tennessee</span>
                </li>
                <li className="flex items-start gap-3 text-sm sm:text-base font-montserrat font-normal text-text-primary">
                    <span className="mt-1.5 shrink-0">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="black">
                            <circle cx="5" cy="5" r="5" />
                        </svg>
                    </span>
                    <span>Growing tech and innovation scene</span>
                </li>
                <li className="flex items-start gap-3 text-sm sm:text-base font-montserrat font-normal text-text-primary">
                    <span className="mt-1.5 shrink-0">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="black">
                            <circle cx="5" cy="5" r="5" />
                        </svg>
                    </span>
                    <span>Revitalized downtown and riverfront</span>
                </li>
                <li className="flex items-start gap-3 text-sm sm:text-base font-montserrat font-normal text-text-primary">
                    <span className="mt-1.5 shrink-0">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="black">
                            <circle cx="5" cy="5" r="5" />
                        </svg>
                    </span>
                    <span>Affordable housing compared to many U.S. cities</span>
                </li>
                <li className="flex items-start gap-3 text-sm sm:text-base font-montserrat font-normal text-text-primary">
                    <span className="mt-1.5 shrink-0">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="black">
                            <circle cx="5" cy="5" r="5" />
                        </svg>
                    </span>
                    <span>Family-friendly neighborhoods and suburbs</span>
                </li>
            </ul>
            <p className="text-sm sm:text-base font-montserrat font-normal text-text-primary mt-7">
                Many people moving to Tennessee choose Chattanooga for its balance of adventure, opportunity, and
                livability.
            </p>
        </div>
        <div className="w-full lg:w-1/2">
            <div>
                <video autoPlay loop muted className="object-cover rounded-2xl">
                    <source
                        src="https://whytennessee.com/wp-content/uploads/2025/12/Aerial_4K_Drone_Video_Over_the_Tennessee_River_Looking_into_Downtown_Chattanooga_on_a_Beautiful_Spring_Evening1.mp4"
                        type="video/mp4" />
                </video>
            </div>
        </div>
    </div>
  )
}
