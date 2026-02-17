import React from 'react'

const cityHighlights = [
    {
        name: 'Nashville',
        image: '/assets/images/city-compression/Colorful_Nashville_Broadway_at_night_-_NASHVILLE1-scaled.jpeg',
        bestFor: 'Careers, entertainment, nightlife',
        vibe: 'Energetic, fast-growing',
        cost: 'Higher than state average',
        housing: 'Condos, apartments, suburban homes',
    },
    {
        name: 'Knoxville',
        image: '/assets/images/city-compression/Paddling_on_the_Tennessee_River_in_Knoxville1-scaled.jpeg',
        bestFor: 'Outdoor lovers, families',
        vibe: 'Balanced & relaxed',
        cost: 'Moderate',
        housing: 'Homes, rentals, condos',
    },
    {
        name: 'Chattanooga',
        image: '/assets/images/city-compression/Screenshot_44.png',
        bestFor: 'Remote workers, outdoor enthusiasts',
        vibe: 'Active & growing',
        cost: 'Moderate',
        housing: 'Homes and rentals',
    },
    {
        name: 'Johnson City',
        image: '/assets/images/city-compression/Johnson_City__TN-8-30-2018_Large_sign_in_downtown_proclaiming_Johnson_City__Tennessee1-scaled.jpeg',
        bestFor: 'Affordability, slower pace',
        vibe: 'Small-city charm',
        cost: 'Low',
        housing: 'Homes, rentals',
    },
    {
        name: 'Kingsport',
        image: '/assets/images/city-compression/KINGSPORT_-TN_-USA-8-APRIL-2021-The-Citizens-Bank-building_-originally-the-Kingsport-train-station_-1-1-scaled.jpg',
        bestFor: 'Families, stability',
        vibe: 'Suburban',
        cost: 'Low',
        housing: 'Primarily homes',
    },
    {
        name: 'Bristol',
        image: '/assets/images/city-compression/Bristol-Virginia-Tennessee-Slogan-Sign-at-night.jpeg',
        bestFor: 'Small-town living',
        vibe: 'Laid-back',
        cost: 'Low',
        housing: 'Homes and rentals',
    },
    {
        name: 'Memphis',
        image: '/assets/images/city-compression/Neon-signs-of-Beale-Street-Memphis-Tennessee-scaled.jpeg',
        bestFor: 'Culture, affordability',
        vibe: 'Urban & historic',
        cost: 'Low-moderate',
        housing: 'Homes and rentals',
    },
    {
        name: 'Franklin',
        image: '/assets/images/city-compression/Aerial_View_of_Franklin__Tennessee_during_Spring1-scaled.jpeg',
        bestFor: 'Upscale living, families',
        vibe: 'Historic & refined',
        cost: 'Higher',
        housing: 'Primarily homes',
    },
    {
        name: 'Murfreesboro',
        image: '/assets/images/city-compression/Aerial-View-of-Murfreesboro_-Tennessee-at-Sunrise-scaled.jpeg',
        bestFor: 'Commuters',
        vibe: 'Suburban growth',
        cost: 'Moderate',
        housing: 'Homes and rentals',
    },
    {
        name: 'Clarksville',
        image: '/assets/images/city-compression/Montgomery-County-Courthouse.in-Clarksville_-Tennessee_-on-a-sunny-autumn-day-with-a-blue-sky-scaled.jpeg',
        bestFor: 'Military families',
        vibe: 'Growing & family-friendly',
        cost: 'Moderate',
        housing: 'Homes and rentals',
    },
    {
        name: 'Cookeville',
        image: '/assets/images/city-compression/Why_Cookeville_is_a_Great_Place_to_Call_Home.jpg',
        bestFor: 'College town living',
        vibe: 'Quiet & relaxed',
        cost: 'Low',
        housing: 'Homes and rentals',
    },
    {
        name: 'Jackson',
        image: '/assets/images/city-compression/Jackson-TN-downtown.webp',
        bestFor: 'Regional affordability',
        vibe: 'Small city',
        cost: 'Low',
        housing: 'Homes and rentals',
    },
];

export default function CityComparisonPage() {
    return (
        <>
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-8">
                                How to Use This Guide
                            </h2>
                            <p className="text-gray-700 text-lg mb-8">Use this guide to:</p>
                            <ul className="space-y-0">
                                <li className="flex items-start">
                                    <span className="text-black text-xl mr-3 mt-1">•</span>
                                    <span className="text-gray-700 text-lg">Compare key metrics across Tennessee's top cities</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-black text-xl mr-3 mt-1">•</span>
                                    <span className="text-gray-700 text-lg">Find detailed information on housing, jobs, and
                                        schools</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-black text-xl mr-3 mt-1">•</span>
                                    <span className="text-gray-700 text-lg">Discover lifestyle amenities and local
                                        attractions</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-black text-xl mr-3 mt-1">•</span>
                                    <span className="text-gray-700 text-lg">Make informed decisions about your Tennessee move</span>
                                </li>
                            </ul>
                        </div>

                        <div className="lg:w-2/5">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex items-center ">
                                    <img src="assets/images/moving-checklist/Aerial-View-over-the-Buildings-and-Infrastructure-in-Clarksville-Tennessee-2048x1151.jpeg" alt="Tennessee City"
                                        className="w-full h-96 object-cover rounded-br-3xl rounded-tl-3xl shadow-lg" />
                                </div>
                                <div className="space-y-4">
                                    <img src="assets/images/moving-checklist/Aerial_View_of_Franklin__Tennessee_during_Spring1-2048x1364.jpeg"
                                        alt="Tennessee City"
                                        className="w-full h-48 object-cover rounded-br-3xl rounded-tl-3xl shadow-md" />
                                    <img src="assets/images/moving-checklist/Johnson_City__Tennessee1-2048x1536.jpeg"
                                        alt="Tennessee City"
                                        className="w-full h-48 object-cover rounded-br-3xl rounded-tl-3xl shadow-md" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="py-16 bg-primary">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">City-by-City Breakdown</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {cityHighlights.map((city) => (
                            <>
                                <div
                                    className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <img src={city.image}
                                        alt={city.name} className="w-full h-48 object-cover" />
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-primary mb-3">{city.name}</h3>
                                        <div className="space-y-2 text-md">
                                            <div className="flex gap-2">
                                                <span className="font-bold">Best for:</span>
                                                <span className="font-medium text-primary">{city.bestFor}</span>
                                            </div>
                                            <div className="flex gap-2">
                                                <span className="font-bold">Vibe:</span>
                                                <span className="font-medium text-primary">{city.vibe}</span>
                                            </div>
                                            <div className="flex gap-2">
                                                <span className="font-bold">Cost:</span>
                                                <span className="font-medium text-primary">{city.cost}</span>
                                            </div>
                                            <div className="flex gap-2">
                                                <span className="font-bold">Housing:</span>
                                                <span className="font-medium text-primary">{city.housing}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>

                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        <div className="bg-gray-50 rounded-lg p-8 shadow-md">
                            <h3 className="text-4xl font-bold text-primary mb-6">Which City Is Right for You?</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <span className="text-secondary mt-1 mr-3 flex-shrink-0">
                                        <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </span>
                                    <span className="text-gray-700"><b>Young professionals:</b> Nashville, Chattanooga</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-secondary mt-1 mr-3 flex-shrink-0">
                                        <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </span>
                                    <span className="text-gray-700"><b>Remote workers:</b> Chattanooga, Knoxville</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-secondary mt-1 mr-3 flex-shrink-0">
                                        <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </span>
                                    <span className="text-gray-700"><b>Families:</b> Franklin, Kingsport, Murfreesboro</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-secondary mt-1 mr-3 flex-shrink-0">
                                        <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </span>
                                    <span className="text-gray-700"><b>Budget-friendly:</b> Johnson City, Kingsport, Jackson</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-secondary mt-1 mr-3 flex-shrink-0">
                                        <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </span>
                                    <span className="text-gray-700"><b>Culture lovers:</b> Nashville, Memphis</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-secondary mt-1 mr-3 flex-shrink-0">
                                        <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </span>
                                    <span className="text-gray-700"><b>Quiet lifestyle:</b> Bristol, Cookeville</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-8 shadow-md">
                            <h3 className="text-4xl font-bold text-primary mb-6">Rent or Buy?</h3>
                            <p className="text-gray-700 mb-8 leading-relaxed">
                                Many people relocating to Tennessee choose to rent first, explore neighborhoods, and then buy
                                once they're confident in their location.
                            </p>
                            <div className="flex flex-wrap gap-4 pt-4">
                                <a href={route('frontend.home-for-sale')}
                                    className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-medium rounded-full hover:bg-secondary transition-all text-sm whitespace-nowrap">
                                    Browse Homes for Sale in Tennessee
                                </a>

                                <a href={route('frontend.rentals')}
                                    className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-white font-medium rounded-full hover:bg-primary transition-all text-sm whitespace-nowrap">
                                    Browse Rentals in Tennessee
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative h-[400px] w-full overflow-hidden flex items-center justify-center text-white">
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('assets/images/moving-checklist/pexels-kelly-2519392-scaled.jpg')" }}>
                    <div className="absolute inset-0 bg-blue-600/50 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-black/20"></div>
                </div>

                <div className="relative z-10 container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">

                    <div className="max-w-xl text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                            Start Exploring Tennessee
                        </h1>
                        <p className="text-lg opacity-90 leading-relaxed max-w-lg">
                            Choosing the right city is the most important part of your move. Use this guide as your starting
                            point, then explore city pages, rentals, and homes to take the next step.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-4">
                        <a href="#"
                            className="px-8 py-4 bg-secondary hover:bg-primary text-white rounded-full font-semibold transition-all shadow-lg text-center whitespace-nowrap">
                            Explore Tennessee Cities
                        </a>
                        <a href={route('frontend.tennessee-relocation')}
                            className="px-8 py-4 bg-secondary hover:bg-primary text-white rounded-full font-semibold transition-all shadow-lg text-center whitespace-nowrap">
                            Get the Tennessee Relocation Guide
                        </a>
                    </div>

                </div>
            </section>
        </>
    )
}
