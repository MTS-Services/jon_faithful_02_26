import React from "react";

const ProsConsTennesseePage = () => {
    return (
        <>
            {/* PROS SECTION */}
            <section className="bg-[#0b1c36] py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-center text-white mb-12">
                        Pros of Living in Tennessee
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <div className="bg-white rounded-lg p-6 shadow-md">
                            <h3 className="font-semibold mb-3 text-2xl text-2xl">No State Income Tax</h3>
                            <p className="text-md mb-3">Benefits include:</p>
                            <ul className="text-md space-y-1">
                                <li className="flex items-center gap-2"><span className="flex-shrink-0">
                                    <svg
                                        aria-hidden="true"
                                        className="w-2 h-2 fill-current text-black"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                    </svg>
                                </span>Higher take-home pay</li>
                                <li className="flex items-center gap-2"><span className="flex-shrink-0">
                                    <svg
                                        aria-hidden="true"
                                        className="w-2 h-2 fill-current text-black"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                    </svg>
                                </span>Major savings for remote workers and business owners</li>
                                <li className="flex items-center gap-2"><span className="flex-shrink-0">
                                    <svg
                                        aria-hidden="true"
                                        className="w-2 h-2 fill-current text-black"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                    </svg>
                                </span>Attractive for retirees living on fixed income</li>
                            </ul>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white rounded-lg p-6 shadow-md">
                            <h3 className="font-semibold mb-3 text-2xl">Affordable Housing</h3>
                            <p className="text-md mb-3">
                                Compared to most states, Tennessee offers lower home prices and
                                rents.
                            </p>
                            <ul className="text-sm space-y-1">
                                <li className="flex items-center gap-2"><span className="flex-shrink-0">
                                    <svg
                                        aria-hidden="true"
                                        className="w-2 h-2 fill-current text-black"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                    </svg>
                                </span>Many cities still offer homes under $300,000</li>
                                <li className="flex items-center gap-2"><span className="flex-shrink-0">
                                    <svg
                                        aria-hidden="true"
                                        className="w-2 h-2 fill-current text-black"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                    </svg>
                                </span>Property taxes are low</li>
                                <li className="flex items-center gap-2"><span className="flex-shrink-0">
                                    <svg
                                        aria-hidden="true"
                                        className="w-2 h-2 fill-current text-black"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                    </svg>
                                </span>More home for the money</li>
                            </ul>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white rounded-lg p-6 shadow-md">
                            <h3 className="font-semibold mb-3 text-2xl">Strong Job Markets</h3>
                            <p className="text-md mb-3">
                                Tennessee has growing job opportunities in:
                            </p>
                            <ul className="text-sm space-y-1">
                                <li className="flex items-center gap-2"><span className="flex-shrink-0">
                                    <svg
                                        aria-hidden="true"
                                        className="w-2 h-2 fill-current text-black"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                    </svg>
                                </span>Healthcare</li>
                                <li className="flex items-center gap-2"><span className="flex-shrink-0">
                                    <svg
                                        aria-hidden="true"
                                        className="w-2 h-2 fill-current text-black"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                    </svg>
                                </span>Manufacturing</li>
                                <li className="flex items-center gap-2"><span className="flex-shrink-0">
                                    <svg
                                        aria-hidden="true"
                                        className="w-2 h-2 fill-current text-black"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                    </svg>
                                </span>Logistics</li>
                                <li className="flex items-center gap-2"><span className="flex-shrink-0">
                                    <svg
                                        aria-hidden="true"
                                        className="w-2 h-2 fill-current text-black"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                    </svg>
                                </span>Technology</li>
                                <li className="flex items-center gap-2"><span className="flex-shrink-0">
                                    <svg
                                        aria-hidden="true"
                                        className="w-2 h-2 fill-current text-black"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                    </svg>
                                </span>Education</li>
                            </ul>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-white rounded-lg p-6 shadow-md">
                            <h3 className="font-semibold mb-3 text-2xl">
                                Natural Beauty mdOutd3or Lifestyle
                            </h3>
                            <p className="text-sm mb-2">Tennessee offers:</p>
                            <ul className="text-sm space-y-1">
                                <li className="flex items-center gap-2"><span className="flex-shrink-0">
                                    <svg
                                        aria-hidden="true"
                                        className="w-2 h-2 fill-current text-black"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                    </svg>
                                </span>Mountains, rivers, lakes, and forests</li>
                                <li className="flex items-center gap-2"><span className="flex-shrink-0">
                                    <svg
                                        aria-hidden="true"
                                        className="w-2 h-2 fill-current text-black"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                    </svg>
                                </span>National and state parks</li>
                                <li className="flex items-center gap-2"><span className="flex-shrink-0">
                                    <svg
                                        aria-hidden="true"
                                        className="w-2 h-2 fill-current text-black"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                    </svg>
                                </span>Hiking, boating, and camping year-round</li>
                            </ul>
                        </div>

                        {/* Card 5 */}
                        <div className="bg-white rounded-lg p-6 shadow-md">
                            <h3 className="font-semibold mb-3 text-2xl">Diverse Places to Live</h3>
                            <p className="text-md mb-3">Tennessee offers:</p>
                            <ul className="text-sm space-y-1">
                                <li className="flex items-center gap-2"><span className="flex-shrink-0">
                                    <svg
                                        aria-hidden="true"
                                        className="w-2 h-2 fill-current text-black"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                    </svg>
                                </span>Major cities (Nashville, Memphis)</li>
                                <li className="flex items-center gap-2"><span className="flex-shrink-0">
                                    <svg
                                        aria-hidden="true"
                                        className="w-2 h-2 fill-current text-black"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                    </svg>
                                </span>Suburbs (Franklin, Murfreesboro)</li>
                                <li className="flex items-center gap-2"><span className="flex-shrink-0">
                                    <svg
                                        aria-hidden="true"
                                        className="w-2 h-2 fill-current text-black"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                    </svg>
                                </span>Small towns (Kingsport, Cookeville)</li>
                            </ul>
                        </div>

                        {/* Card 6 */}
                        <div className="bg-white rounded-lg p-6 shadow-md">
                            <h3 className="font-semibold mb-3 text-2xl">
                                Lower Transportmdion 3osts
                            </h3>
                            <ul className="text-sm space-y-1">
                                <li className="flex items-center gap-2"><span className="flex-shrink-0">
                                    <svg
                                        aria-hidden="true"
                                        className="w-2 h-2 fill-current text-black"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                    </svg>
                                </span>Gas prices below national average</li>
                                <li className="flex items-center gap-2"><span className="flex-shrink-0">
                                    <svg
                                        aria-hidden="true"
                                        className="w-2 h-2 fill-current text-black"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                    </svg>
                                </span>Minimal toll roads</li>
                                <li className="flex items-center gap-2"><span className="flex-shrink-0">
                                    <svg
                                        aria-hidden="true"
                                        className="w-2 h-2 fill-current text-black"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                    </svg>
                                </span>Shorter commute times in many cities</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONS SECTION */}
            <section
                className="relative bg-cover bg-center py-20 px-4"
                style={{
                    backgroundImage:
                        "url('assets/images/pros-cons-tennessee/imgi_39_family-home-in-colorado-pufikhomes-1.jpg')",
                }}
            >
                <div className="absolute inset-0 bg-black/70" />

                <div className="relative max-w-7xl mx-auto text-white">
                    <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-center mb-12">
                        Cons of Living in Tennessee
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                            <h3 className="font-semibold mb-3 text-2xl">Hot, Humid Summers</h3>
                            <p className="text-md mb-3">
                                Tennessee summers can be hot and humid, especially from June
                                through September.
                            </p>
                            <ul className="text-sm space-y-1">
                                <li className="flex items-center gap-2"><span className="flex-shrink-0">
                                    <svg
                                        aria-hidden="true"
                                        className="w-2 h-2 fill-current text-white"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                    </svg>
                                </span>High humidity</li>
                                <li className="flex items-center gap-2"><span className="flex-shrink-0">
                                    <svg
                                        aria-hidden="true"
                                        className="w-2 h-2 fill-current text-white"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                    </svg>
                                </span>Temperatures often in the 90s</li>
                                <li className="flex items-center gap-2"><span className="flex-shrink-0">
                                    <svg
                                        aria-hidden="true"
                                        className="w-2 h-2 fill-current text-white"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                    </svg>
                                </span>Heavy summer thunderstorms</li>
                            </ul>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                            <h3 className="font-semibold mb-3 text-2xl">Severe Weather Risks</h3>
                            <p className="text-md mb-3">Tennessee experiences:</p>
                            <ul className="text-sm space-y-1">
                                <li className="flex items-center gap-2"><span className="flex-shrink-0">
                                    <svg
                                        aria-hidden="true"
                                        className="w-2 h-2 fill-current text-white"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                    </svg>
                                </span>Strong thunderstorms</li>
                                <li className="flex items-center gap-2"><span className="flex-shrink-0">
                                    <svg
                                        aria-hidden="true"
                                        className="w-2 h-2 fill-current text-white"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                    </svg>
                                </span>Tornado risk (especially Middle & West TN)</li>
                                <li className="flex items-center gap-2"><span className="flex-shrink-0">
                                    <svg
                                        aria-hidden="true"
                                        className="w-2 h-2 fill-current text-white"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                    </svg>
                                </span>Occasional flooding</li>
                            </ul>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                            <h3 className="font-semibold mb-3 text-2xl">Higher Sales Tax</h3>
                            <p className="text-md mb-3">
                                Tennessee has one of the higher combined sales tax rates in the
                                U.S.
                            </p>
                            <ul className="text-sm space-y-1">
                                <li className="flex items-center gap-2"><span className="flex-shrink-0">
                                    <svg
                                        aria-hidden="true"
                                        className="w-2 h-2 fill-current text-white"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                    </svg>
                                </span>State rate: 7%</li>
                                <li className="flex items-center gap-2"><span className="flex-shrink-0">
                                    <svg
                                        aria-hidden="true"
                                        className="w-2 h-2 fill-current text-white"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                    </svg>
                                </span>Local taxes often push total to 9–9.75%</li>
                            </ul>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                            <h3 className="font-semibold mb-3 text-2xl">
                                Traffic in Growmdg Ci3ies
                            </h3>
                            <p className="text-sm mb-2">
                                Rapid growth has increased congestion in:
                            </p>
                            <ul className="text-sm space-y-1">
                                <li className="flex items-center gap-2"><span className="flex-shrink-0">
                                    <svg
                                        aria-hidden="true"
                                        className="w-2 h-2 fill-current text-white"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                    </svg>
                                </span>Nashville</li>
                                <li className="flex items-center gap-2"><span className="flex-shrink-0">
                                    <svg
                                        aria-hidden="true"
                                        className="w-2 h-2 fill-current text-white"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                    </svg>
                                </span>Murfreesboro</li>
                                <li className="flex items-center gap-2"><span className="flex-shrink-0">
                                    <svg
                                        aria-hidden="true"
                                        className="w-2 h-2 fill-current text-white"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                    </svg>
                                </span>Parts of Knoxville</li>
                            </ul>
                        </div>

                        {/* Card 5 */}
                        <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                            <h3 className="font-semibold mb-3 text-2xl">
                                School Quality mdries3by Location
                            </h3>
                            <p className="text-sm mb-2">
                                School quality varies significantly by county and district.
                            </p>
                            <ul className="text-sm space-y-1">
                                <li className="flex items-center gap-2"><span className="flex-shrink-0">
                                    <svg
                                        aria-hidden="true"
                                        className="w-2 h-2 fill-current text-white"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                    </svg>
                                </span>Some areas have top-rated schools (Franklin, Williamson
                                    County)
                                </li>
                                <li className="flex items-center gap-2"><span className="flex-shrink-0">
                                    <svg
                                        aria-hidden="true"
                                        className="w-2 h-2 fill-current text-white"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                    </svg>
                                </span>Others may require careful research</li>
                            </ul>
                        </div>

                        {/* Card 6 */}
                        <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                            <h3 className="font-semibold mb-3 text-2xl">
                                Public Transpormdtion3is Limited
                            </h3>
                            <p className="text-sm mb-2">Outside of major metro areas:</p>
                            <ul className="text-sm space-y-1">
                                <li className="flex items-center gap-2"><span className="flex-shrink-0">
                                    <svg
                                        aria-hidden="true"
                                        className="w-2 h-2 fill-current text-white"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                    </svg>
                                </span>Public transit options are limited</li>
                                <li className="flex items-center gap-2"><span className="flex-shrink-0">
                                    <svg
                                        aria-hidden="true"
                                        className="w-2 h-2 fill-current text-white"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                    </svg>
                                </span>Most residents rely on personal vehicles</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                    <h2 className="text-xl md:text-2xl lg:text-4xl font-bold mb-6 text-slate-900">Is Tennessee a Good Place to Live?</h2>
                    <p className="text-lg leading-relaxed text-muted-foreground mb-2">
                        For most people, the pros outweigh the cons.</p>
                    <p className="text-lg leading-relaxed text-muted-foreground mb-2">Tennessee is an excellent fit if you value:</p>
                    <ul className="text-sm space-y-1">
                        <li className="flex items-center gap-2"><span className="flex-shrink-0">
                            <svg
                                aria-hidden="true"
                                className="w-2 h-2 fill-current text-black"
                                viewBox="0 0 512 512"
                            >
                                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                            </svg>
                        </span>Lower taxes</li>
                        <li className="flex items-center gap-2"><span className="flex-shrink-0">
                            <svg
                                aria-hidden="true"
                                className="w-2 h-2 fill-current text-black"
                                viewBox="0 0 512 512"
                            >
                                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                            </svg>
                        </span>Affordable housing</li>
                        <li className="flex items-center gap-2"><span className="flex-shrink-0">
                            <svg
                                aria-hidden="true"
                                className="w-2 h-2 fill-current text-black"
                                viewBox="0 0 512 512"
                            >
                                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                            </svg>
                        </span>Outdoor access</li>
                        <li className="flex items-center gap-2"><span className="flex-shrink-0">
                            <svg
                                aria-hidden="true"
                                className="w-2 h-2 fill-current text-black"
                                viewBox="0 0 512 512"
                            >
                                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                            </svg>
                        </span>Career opportunities</li>
                        <li className="flex items-center gap-2"><span className="flex-shrink-0">
                            <svg
                                aria-hidden="true"
                                className="w-2 h-2 fill-current text-black"
                                viewBox="0 0 512 512"
                            >
                                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                            </svg>
                        </span>A slower pace of life</li>
                    </ul>
                    <p className="text-lg leading-relaxed text-muted-foreground my-4">It may be less ideal if you require:</p>
                    <ul className="text-sm space-y-1">
                        <li className="flex items-center gap-2"><span className="flex-shrink-0">
                            <svg
                                aria-hidden="true"
                                className="w-2 h-2 fill-current text-black"
                                viewBox="0 0 512 512"
                            >
                                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                            </svg>
                        </span>Extensive public transit</li>
                        <li className="flex items-center gap-2"><span className="flex-shrink-0">
                            <svg
                                aria-hidden="true"
                                className="w-2 h-2 fill-current text-black"
                                viewBox="0 0 512 512"
                            >
                                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                            </svg>
                        </span>Mild summers</li>
                        <li className="flex items-center gap-2"><span className="flex-shrink-0">
                            <svg
                                aria-hidden="true"
                                className="w-2 h-2 fill-current text-black"
                                viewBox="0 0 512 512"
                            >
                                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                            </svg>
                        </span>Very low sales tax</li>
                    </ul>
                </div>
                <div className="relative h-64 md:h-96 order-1 md:order-2">
                    <img
                        src="assets/images/pros-cons-tennessee/imgi_39_family-home-in-colorado-pufikhomes-1.jpg"
                        alt="Tennessee Cityscape"
                        className="rounded-lg shadow-xl object-cover w-full md:w-[calc(100%-200px] h-full"
                    />
                    <div className="absolute -bottom-6 -right-6 w-1/2 h-1/2 hidden md:block">
                        <img src="assets/images/pros-cons-tennessee/imgi_3_tourist-tent-camping-in-mountains-at-sunset-scaled.jpg" alt="Suburban TN" className="rounded-lg border-4 border-white shadow-lg object-cover" />
                    </div>
                </div>
            </section>
            <section className="container mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">

                <div className="relative h-64 md:h-96">
                    <img
                        src="assets/images/pros-cons-tennessee/imgi_39_family-home-in-colorado-pufikhomes-1.jpg"
                        alt="Tennessee Cityscape"
                        className="rounded-lg shadow-xl object-cover w-full h-full"
                    />
                </div>
                <div>
                    <h2 className="text-xl md:text-2xl lg:text-4xl font-medium mb-6 text-slate-900">Best Tennessee Cities Based on Lifestyle</h2>
                    <ul className="text-sm space-y-1 mb-6">
                        <li className="flex items-center gap-2"><span className="flex-shrink-0">
                            <svg
                                aria-hidden="true"
                                className="w-2 h-2 fill-current text-black"
                                viewBox="0 0 512 512"
                            >
                                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                            </svg>
                        </span>Best for jobs: Nashville</li>
                        <li className="flex items-center gap-2"><span className="flex-shrink-0">
                            <svg
                                aria-hidden="true"
                                className="w-2 h-2 fill-current text-black"
                                viewBox="0 0 512 512"
                            >
                                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                            </svg>
                        </span>Best for families: Franklin, Murfreesboro</li>
                        <li className="flex items-center gap-2"><span className="flex-shrink-0">
                            <svg
                                aria-hidden="true"
                                className="w-2 h-2 fill-current text-black"
                                viewBox="0 0 512 512"
                            >
                                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                            </svg>
                        </span>Best for affordability: Kingsport, Bristol, Jackson</li>
                        <li className="flex items-center gap-2"><span className="flex-shrink-0">
                            <svg
                                aria-hidden="true"
                                className="w-2 h-2 fill-current text-black"
                                viewBox="0 0 512 512"
                            >
                                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                            </svg>
                        </span>Best for outdoor lifestyle: Chattanooga, Knoxville</li>
                        <li className="flex items-center gap-2"><span className="flex-shrink-0">
                            <svg
                                aria-hidden="true"
                                className="w-2 h-2 fill-current text-black"
                                viewBox="0 0 512 512"
                            >
                                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                            </svg>
                        </span>Best for culture: Memphis</li>
                    </ul>
                    <button className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-secondary transition">Explore Tennessee Cities →</button>
                </div>
            </section>

            <section
                className="relative w-full bg-cover bg-center py-24 px-4 text-center"
                style={{
                    backgroundImage:
                        "url('assets/images/pros-cons-tennessee/pexels-denil-33476066-scaled (1).jpg')",
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50" />

                {/* Content */}
                <div className="relative z-10 max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                        Final Thoughts
                    </h2>
                    <p className="text-white">
                        Tennessee offers an excellent rental market with affordable prices, great
                        communities, and quality of life. Start your Tennessee rental journey
                        today.
                    </p>
                </div>
            </section>
        </>
    );
};

export default ProsConsTennesseePage;
