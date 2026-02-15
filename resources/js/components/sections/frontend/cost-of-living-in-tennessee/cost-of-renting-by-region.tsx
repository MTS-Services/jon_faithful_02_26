import React from 'react';

export default function CostOfRentingByRegion() {
    return (
        <section className="bg-[#f8fafd] py-16 px-4 font-montserrat">
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-semibold text-primary uppercase tracking-wide mb-4">
                    Cost of Renting by Region
                </h2>
                <p className="text-primary font-normal  text-lg">
                    Average Rent Across East, Middle, and West Tennessee
                </p>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* East Tennessee Card */}
                <div className="bg-white rounded-xl shadow-md border border-gray-100 p-8 flex flex-col">
                    <h3 className="text-[#333] text-lg font-medium mb-4">Average Rent by East Tennessee City</h3>
                    
                    <div className="space-y-6 flex-grow">
                        <div>
                            <h4 className="font-bold text-lg">Knoxville</h4>
                            <p className="text-base font-normal font-montserrat text-primary mb-2">Cities: Knoxville, Johnson City, Kingsport, Bristol, Chattanooga</p>
                            <ul className="text-sm space-y-1">
                                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 bg-primary rounded-full"></span> Apartments: $950 - $1,400</li>
                                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 bg-primary rounded-full"></span> Homes: $1,500 - $2,300</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-lg">Johnson City</h4>
                            <p className="text-base font-normal font-montserrat text-primary mb-2">Johnson City remains one of the most affordable mid-size cities in the region.</p>
                            <ul className="text-sm space-y-1">
                                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 bg-primary rounded-full"></span> Homes: $1,200 - $1,900</li>
                                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 bg-primary rounded-full"></span> Apartments: $800-$1,100</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-lg">Kingsport</h4>
                            <p className="text-base font-normal font-montserrat text-primary mb-2">Kingsport offers lower rents and is popular with families and long-term renters.</p>
                            <ul className="text-sm space-y-1">
                                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 bg-primary rounded-full"></span> Apartments: $750 $1,000</li>
                                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 bg-primary rounded-full"></span> Homes: $1,100 - $1,700</li>
                            </ul>
                        </div>
                    </div>

                    <a href={route('frontend.rentals')} className="mt-8 bg-[#1e3a62] text-white py-3 px-6 rounded-md font-medium hover:bg-[#152a47] transition-all self-start">
                        Explore East Tennessee Cities
                    </a>
                </div>

                {/* Middle Tennessee Card */}
                <div className="bg-white rounded-xl shadow-md border border-gray-100 p-8 flex flex-col">
                    <h3 className="text-[#333] text-lg font-medium mb-4">Average Rent by Middle Tennessee City</h3>
                    
                    <div className="space-y-6 flex-grow">
                        <div>
                            <h4 className="font-bold text-lg">Nashville</h4>
                            <p className="text-base font-normal font-montserrat text-primary mb-2">Nashville has the highest rental prices in Tennessee, driven by job growth, entertainment, and population demand.</p>
                            <ul className="text-sm space-y-1">
                                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 bg-primary rounded-full"></span> Homes: $2,200 - $3,500+</li>
                                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 bg-primary rounded-full"></span> Apartments: $1,400 - $2,200</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-lg">Franklin</h4>
                            <p className="text-base font-normal font-montserrat text-primary mb-2">Franklin offers upscale suburban living and top-rated schools.</p>
                            <ul className="text-sm space-y-1">
                                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 bg-primary rounded-full"></span> Apartments: $1,500 - $2,200</li>
                                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 bg-primary rounded-full"></span> Homes: $2,400 - $3,800+</li>
                            </ul>
                        </div>
                    </div>

                    <a href={route('frontend.rentals')} className="mt-8 bg-[#1e3a62] text-white py-3 px-6 rounded-md font-medium hover:bg-[#152a47] transition-all self-start">
                        Explore Middle Tennessee Cities
                    </a>
                </div>

                {/* West Tennessee Card */}
                <div className="bg-white rounded-xl shadow-md border border-gray-100 p-8 flex flex-col">
                    <h3 className="text-[#333] text-lg font-medium mb-4">Average Rent by West Tennessee City</h3>
                    
                    <div className="space-y-6 flex-grow">
                        <div>
                            <h4 className="font-bold text-lg">Memphis</h4>
                            <p className="text-base font-normal font-montserrat text-primary mb-2">Memphis is the largest rental market in West Tennessee and offers some of the most affordable urban rents.</p>
                            <ul className="text-sm space-y-1">
                                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 bg-primary rounded-full"></span> Apartments: $900 - $1,400</li>
                                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 bg-primary rounded-full"></span> Homes: $1,300 - $2,200</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-lg">Jackson</h4>
                            <p className="text-base font-normal font-montserrat text-primary mb-2">Jackson provides small-city affordability with access to regional employers.</p>
                            <ul className="text-sm space-y-1">
                                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 bg-primary rounded-full"></span> Homes: $1,200 - $1,800</li>
                                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 bg-primary rounded-full"></span> Apartments: $800 - $1,100</li>
                            </ul>
                        </div>
                    </div>

                    <a href={route('frontend.rentals')} className="mt-8 bg-[#1e3a62] text-white py-3 px-6 rounded-md font-medium hover:bg-[#152a47] transition-all self-start">
                        Explore West Tennessee Cities
                    </a>
                </div>

            </div>
        </section>
    );
}