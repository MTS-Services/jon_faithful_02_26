import React from 'react'

export default function ExploreTennessee() {
  return (
        <div className="bg-primary-foreground py-28 px-4 md:px-16 mt-20 rounded-t-[100px]">
        <div className="container mx-auto ">
         
            <div className="max-w-2xl mx-auto text-center mb-8">
                <h2 className="text-2xl md:text-5xl font-bold font-montserrat text-text-secondary-foreground mb-4">Explore Tennessee Real
                    Estate by
                    Region</h2>
                <p className="text-sm md:text-base font-montserrat font-normal text-text-secondary-foreground mt-10 ">
                    Tennessee offers an incredible variety of housing options — from affordable starter homes to luxury
                    properties and mountain cabins. Use this page to explore real estate across the three main regions
                    of
                    the state.
                </p>
            </div>

   
            <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
                <button
                    className="text-base  font-normal text-primary-foreground font-montserrat mb-2 bg-primary text-center rounded-full p-4">East
                    Tennessee
                    Homes for Sale</button>
                <button
                    className="bg-primary-foreground text-text-secondary-foreground hover:text-primary-foreground px-6 py-2 rounded-full hover:bg-primary border border-muted-foreground transition">Middle
                    Tennessee Homes for Sale</button>
                <button
                    className="bg-primary-foreground text-text-secondary-foreground hover:text-primary-foreground px-6 py-2 rounded-full hover:bg-primary border border-muted-foreground transition">West
                    Tennessee Homes for Sale</button>
            </div>

     
            <div
                className="bg-primary-foreground shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row gap-16 md:gap-6 p-4 md:p-6">

                <div className="">
                    <video className="rounded-lg" controls>
                        <source className=""
                            src="https://whytennessee.com/wp-content/uploads/2025/12/Evening-aerial-flyby-of-scenic-rural-home-surrounded-by-trees-in-Springtime.mp4"
                            type="video/mp4" />
                    </video>
                </div>


                <div className="flex flex-col justify-center">
                    <h3 className="text-[25px] text-[#333] font-medium font-montserrat mb-2">East Tennessee Homes for Sale
                    </h3>
                    <p className="text-base font-montserrat font-normal text-text-secondary-foreground mb-2">
                        East Tennessee is known for its mountain views, lakes, and outdoor lifestyle. Popular East
                        Tennessee
                        markets include:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                        <li className="flex items-start gap-3 text-base font-montserrat font-normal text-text-secondary-foreground">
                            <span className="mt-1.5 shrink-0">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="black" className="">
                                    <circle cx="5" cy="5" r="5" />
                                </svg>
                            </span>
                            <span>Knoxville homes for sale – college town energy, strong job market, nearby
                                lakes.</span>
                        </li>
                        <li className="flex items-start gap-3 text-base font-montserrat font-normal text-text-secondary-foreground">
                            <span className="mt-1.5 shrink-0">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="black" className="">
                                    <circle cx="5" cy="5" r="5" />
                                </svg>
                            </span>
                            <span>Johnson City homes for sale – affordable mountain living, great schools, healthcare
                                hub.</span>
                        </li>
                        <li className="flex items-start gap-3 text-base font-montserrat font-normal text-text-secondary-foreground">
                            <span className="mt-1.5 shrink-0">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="black" className="">
                                    <circle cx="5" cy="5" r="5" />
                                </svg>
                            </span>
                            <span>Kingsport homes for sale – quiet
                                neighborhoods, family-friendly communities.</span>
                        </li>
                        <li className="flex items-start gap-3 text-base font-montserrat font-normal text-text-secondary-foreground">
                            <span className="mt-1.5 shrink-0">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="black" className="">
                                    <circle cx="5" cy="5" r="5" />
                                </svg>
                            </span>
                            <span>Bristol homes for sale – low cost
                                of living, historic downtown, raceway events.</span>
                        </li>
                        <li className="flex items-start gap-3 text-base font-montserrat font-normal text-text-secondary-foreground">
                            <span className="mt-1.5 shrink-0">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="black" className="">
                                    <circle cx="5" cy="5" r="5" />
                                </svg>
                            </span>
                            <span>Chattanooga homes for sale –
                                riverfront lifestyle, tech jobs, incredible outdoor access.</span>
                        </li>
                    </ul>
                    <p className="text-text-secondary-foreground font-montserrat font-normal mt-7">
                        Whether you want a downtown condo, a suburban family home, or a cabin with a view of the
                        mountains,
                        East Tennessee has options at a range of price points.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
