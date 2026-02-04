import React from 'react';
import { MdDoubleArrow } from "react-icons/md";
import {
    Mail,
    Facebook,
    Twitter,
    Instagram,
    Check,
    X,
    ChevronRight,
    MapPin,
    Phone,
    Clock,
    Building,
    Home,
    Search
} from 'lucide-react';
import FrontendLayout from '@/layouts/frontend-layout';
import { Hero } from '@/components/sections/frontend/hero';
import { FaRightFromBracket } from 'react-icons/fa6';
import ExploreRentalCities from '@/components/sections/frontend/cities/explore-rental-cities';
import { BsBuildings } from 'react-icons/bs';
import { FaCity } from 'react-icons/fa';

const exploreCitiesData = [
    {
        icon: Building,
        city: 'Browse Rentals',
        desc: "Find your perfect rental in Tennessee's top cities",
        button: 'View Rentals →',
    },
    {
        icon: Home,
        city: 'Homes for Sale',
        desc: 'Discover properties across Tennessee',
        button: 'View Homes →',
    },
    {
        icon: MapPin,
        city: 'Explore Citiess',
        desc: "Learn about Tennessee's neighborhoods",
        button: 'Explore Cities →',
    },
]

const RentingBuy = () => {
    return (
        <FrontendLayout>

            <Hero
                slides={[
                    'https://whytennessee.com/wp-content/uploads/2026/01/Hay-bales-in-pasture-on-horse-farm-in-shadow-of-the-Blue-Ridge-Mountains-scaled.jpeg',
                ]}
                title={<>Renting vs Buying in Tennessee</>}
                description={<>
                    If you’re moving to Tennessee, one of the biggest decisions you’ll face is whether to rent or buy a home. With rising home prices, changing interest rates, and a growing rental market, there is no one-size-fits-all answer. This guide breaks down the pros and cons of renting vs buying in Tennessee, compares costs, and helps you decide which option is best based on your lifestyle, finances, and long-term plans.
                </>}
            />
            {/* ================= INTRO SECTION ================= */}
            <section className="py-16 px-6 md:px-12 container mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-bold text-slate-900">Renting vs Buying in</h2>
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">Tennessee</h2>
                        <p className="text-slate-600 mb-4">Tennessee is attractive for both renters and buyers due to:</p>
                        <ul className="text-gray-700">
                            <li className="flex items-center gap-2">
                                <span className="flex-shrink-0">
                                    <svg
                                        aria-hidden="true"
                                        className="w-2 h-2 fill-current text-black"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                    </svg>
                                </span>
                                <span>No state income tax</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="flex-shrink-0">
                                    <svg
                                        aria-hidden="true"
                                        className="w-2 h-2 fill-current text-black"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                    </svg>
                                </span>
                                <span>Affordable housing compared to national averages</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="flex-shrink-0">
                                    <svg
                                        aria-hidden="true"
                                        className="w-2 h-2 fill-current text-black"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                    </svg>
                                </span>
                                <span>Strong job growth</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="flex-shrink-0">
                                    <svg
                                        aria-hidden="true"
                                        className="w-2 h-2 fill-current text-black"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                    </svg>
                                </span>
                                <span>Diverse cities and lifestyles</span>
                            </li>
                        </ul>
                        <p className="text-slate-600 mt-4">
                            Many people relocating to Tennessee choose to rent first, then buy once they know the area.
                        </p>
                    </div>
                    <div className="relative">
                        {/* Rounded Image Shape */}
                        <div className="overflow-hidden rounded-tr-[80px] rounded-bl-[80px] shadow-xl">
                            <img
                                src="https://whytennessee.com/wp-content/uploads/2025/12/memphis-tn.jpg"
                                alt="Nashville Skyline"
                                className="w-full h-[450px] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= COMPARE OPTIONS SECTION ================= */}
            <section className="py-16 bg-[#F3EAD3]">
                <div className="container mx-auto px-6 md:px-12">
                    <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Compare Your Options</h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-lg shadow-md flex flex-col">
                            <h3 className="text-4xl font-bold mb-4">Renting in Tennessee</h3>

                            <div>
                                <h4 className="font-semibold text-[#d4af37] mb-4 uppercase text-sm border-b-2 border-black inline-block">Pros of Renting</h4>
                                <ul className="space-y-2 mb-4 text-sm">
                                    <li className="flex gap-2"><Check size={20} className="text-black font-bold" />Lower upfront costs</li>
                                    <li className="flex gap-2"><Check size={20} className="text-black font-bold" />Flexibility to move between cities or neighborhoods</li>
                                    <li className="flex gap-2"><Check size={20} className="text-black font-bold" />Easier option for people relocating from out of state</li>
                                    <li className="flex gap-2"><Check size={20} className="text-black font-bold" />Ideal for short-term or uncertain plans</li>
                                </ul>
                            </div>

                            <h4 className="font-semibold text-slate-800 mb-2 text-sm">Especially Common For:</h4>
                            <ul className="space-y-1 mb-4 text-sm">
                                <li className="flex gap-2"><Check size={20} className="text-black font-bold" />New residents</li>
                                <li className="flex gap-2"><Check size={20} className="text-black font-bold" />Remote workers testing locations</li>
                                <li className="flex gap-2"><Check size={20} className="text-black font-bold" />Families waiting for the right home</li>
                                <li className="flex gap-2"><Check size={20} className="text-black font-bold" />Buyers waiting on interest rates</li>
                            </ul>

                            <div>
                                <h4 className="font-semibold text-[#d4af37] mb-4 uppercase text-sm border-b-2 border-black inline-block">Cons of Renting</h4>
                                <ul className="space-y-2 mb-6 text-sm">
                                    <li className="flex items-center gap-2"><span className="text-red-500">
                                        <span className="flex-shrink-0">
                                            <svg
                                                aria-hidden="true"
                                                className="w-1.5 h-1.5 fill-current text-black"
                                                viewBox="0 0 512 512"
                                            >
                                                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                            </svg>
                                        </span>
                                    </span>Monthly payments do not build equity</li>
                                    <li className="flex items-center gap-2"><span className="text-red-500">
                                        <span className="flex-shrink-0">
                                            <svg
                                                aria-hidden="true"
                                                className="w-1.5 h-1.5 fill-current text-black"
                                                viewBox="0 0 512 512"
                                            >
                                                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                            </svg>
                                        </span>
                                    </span>Rent increases over time</li>
                                    <li className="flex items-center gap-2"><span className="text-red-500">
                                        <span className="flex-shrink-0">
                                            <svg
                                                aria-hidden="true"
                                                className="w-1.5 h-1.5 fill-current text-black"
                                                viewBox="0 0 512 512"
                                            >
                                                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                            </svg>
                                        </span>
                                    </span>Limited ability to customize the home</li>
                                    <li className="flex items-center gap-2"><span className="text-red-500">
                                        <span className="flex-shrink-0">
                                            <svg
                                                aria-hidden="true"
                                                className="w-1.5 h-1.5 fill-current text-black"
                                                viewBox="0 0 512 512"
                                            >
                                                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                            </svg>
                                        </span>
                                    </span>Less long-term stability</li>
                                </ul>
                            </div>

                            <div className="rounded mb-6 text-sm">
                                <h5 className="text-md font-bold mb-4">Typical Monthly Costs</h5>
                                <div className="flex items-center gap-2">
                                    <span className="flex-shrink-0">
                                        <svg
                                            aria-hidden="true"
                                            className="w-1.5 h-1.5 fill-current text-black"
                                            viewBox="0 0 512 512"
                                        >
                                            <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                        </svg>
                                    </span>
                                    <p>2-bedroom apartment: $1,100–$1,700</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="flex-shrink-0">
                                        <svg
                                            aria-hidden="true"
                                            className="w-1.5 h-1.5 fill-current text-black"
                                            viewBox="0 0 512 512"
                                        >
                                            <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                        </svg>
                                    </span>
                                    <p>Utilities may be partially included</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="flex-shrink-0">
                                        <svg
                                            aria-hidden="true"
                                            className="w-1.5 h-1.5 fill-current text-black"
                                            viewBox="0 0 512 512"
                                        >
                                            <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                        </svg>
                                    </span>
                                    <p>No maintenance costs</p>
                                </div>
                            </div>

                            <button className="w-full bg-primary text-white py-3 rounded text-md font-bold hover:bg-primary mt-auto">
                                Browse Rentals in Tennessee →
                            </button>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <h3 className="text-4xl font-bold mb-4">Buying in Tennessee</h3>

                            <h4 className="font-semibold text-[#d4af37] mb-4 uppercase text-sm border-b-2 border-black inline-block">Pros of Renting</h4>
                            <ul className="space-y-2 mb-4 text-sm">
                                <li className="flex gap-2"><Check size={20} className="text-black font-bold" />Build equity over time</li>
                                <li className="flex gap-2"><Check size={20} className="text-black font-bold" />Lock in monthly housing costs</li>
                                <li className="flex gap-2"><Check size={20} className="text-black font-bold" />Take advantage of low property taxes</li>
                                <li className="flex gap-2"><Check size={20} className="text-black font-bold" />Benefit from long-term appreciation</li>
                                <li className="flex gap-2"><Check size={20} className="text-black font-bold" />Greater freedom to customize</li>
                            </ul>
                            <p className="text-sm mb-4 text-md"><strong className='text-black'>Tennessee’s lack of state income tax</strong> makes homeownership especially attractive for long-term residents.</p>

                            <h4 className="font-semibold text-[#d4af37] mb-4 uppercase text-sm border-b-2 border-black inline-block">Cons of Renting</h4>
                            <ul className="space-y-2 mb-6 text-sm">
                                <li className="flex items-center gap-2"><span className="text-red-500">
                                    <span className="flex-shrink-0">
                                        <svg
                                            aria-hidden="true"
                                            className="w-1.5 h-1.5 fill-current text-black"
                                            viewBox="0 0 512 512"
                                        >
                                            <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                        </svg>
                                    </span>
                                </span>Higher upfront costs (down payment, closing costs)</li>
                                <li className="flex items-center gap-2"><span className="text-red-500">
                                    <span className="flex-shrink-0">
                                        <svg
                                            aria-hidden="true"
                                            className="w-1.5 h-1.5 fill-current text-black"
                                            viewBox="0 0 512 512"
                                        >
                                            <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                        </svg>
                                    </span>
                                </span>Maintenance and repair responsibilities</li>
                                <li className="flex items-center gap-2"><span className="text-red-500">
                                    <span className="flex-shrink-0">
                                        <svg
                                            aria-hidden="true"
                                            className="w-1.5 h-1.5 fill-current text-black"
                                            viewBox="0 0 512 512"
                                        >
                                            <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                        </svg>
                                    </span>
                                </span>Less flexibility to move</li>
                                <li className="flex items-center gap-2"><span className="text-red-500">
                                    <span className="flex-shrink-0">
                                        <svg
                                            aria-hidden="true"
                                            className="w-1.5 h-1.5 fill-current text-black"
                                            viewBox="0 0 512 512"
                                        >
                                            <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                        </svg>
                                    </span>
                                </span>Mortgage rates impact affordability</li>
                            </ul>


                            <div className="rounded mb-6 text-sm">
                                <h5 className="text-md font-bold mb-4">Typical Monthly Costs</h5>
                                <ul className="space-y-2 mb-6 text-sm">
                                    <li className="flex items-center gap-2"><span className="text-red-500">
                                        <span className="flex-shrink-0">
                                            <svg
                                                aria-hidden="true"
                                                className="w-1.5 h-1.5 fill-current text-black"
                                                viewBox="0 0 512 512"
                                            >
                                                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                            </svg>
                                        </span>
                                    </span>Mortgage payment depends on price, rate, and down payment</li>
                                    <li className="flex items-center gap-2"><span className="text-red-500">
                                        <span className="flex-shrink-0">
                                            <svg
                                                aria-hidden="true"
                                                className="w-1.5 h-1.5 fill-current text-black"
                                                viewBox="0 0 512 512"
                                            >
                                                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                            </svg>
                                        </span>
                                    </span>Property taxes are low</li>
                                    <li className="flex items-center gap-2"><span className="text-red-500">
                                        <span className="flex-shrink-0">
                                            <svg
                                                aria-hidden="true"
                                                className="w-1.5 h-1.5 fill-current text-black"
                                                viewBox="0 0 512 512"
                                            >
                                                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                            </svg>
                                        </span>
                                    </span>Homeowners insurance required</li>
                                    <li className="flex items-center gap-2"><span className="text-red-500">
                                        <span className="flex-shrink-0">
                                            <svg
                                                aria-hidden="true"
                                                className="w-1.5 h-1.5 fill-current text-black"
                                                viewBox="0 0 512 512"
                                            >
                                                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                            </svg>
                                        </span>
                                    </span>Maintenance costs apply</li>
                                </ul>
                                <p className="mt-4">Buying makes the most sense if you plan to stay at least 3–5 years. Shape</p>
                            </div>

                            <button className="w-full bg-primary text-white py-3 rounded text-md font-bold hover:bg-[#152a50]">
                                View Homes for Sale in Tennessee →
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= BY REGION SECTION ================= */}
            <section className="py-16 container mx-auto px-6 md:px-12">
                <h2 className="text-4xl font-bold text-center mb-4">Renting vs Buying by Region</h2>
                <p className="text-center text-slate-600 mb-12">Tennessee offers diverse markets across its three main regions, each with unique opportunities.</p>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* East TN */}
                    <div className="group shadow-xl p-4 rounded-lg border">
                        <div className="overflow-hidden rounded-lg mb-4 h-60">
                            <img src="assets/images/renting-buy/east-tennessee.jpg" alt="East TN" className="w-full h-full object-cover group-hover:scale-105 transition" />
                        </div>
                        <h3 className="font-bold text-lg mb-1">East Tennessee</h3>
                        <p className="text-xs text-slate-500 mb-3">Knoxville, Johnson City, Chattanooga</p>
                        <ul className="text-sm space-y-1">
                            <li>• Renting is very affordable</li>
                            <li>• Buying offers strong value and lower prices</li>
                        </ul>
                    </div>

                    {/* Middle TN */}
                    <div className="group shadow-xl p-4 rounded-lg border">
                        <div className="overflow-hidden rounded-lg mb-4 h-60">
                            <img src="assets/images/renting-buy/Middle-Tennessee.jpg" alt="Middle TN" className="w-full h-full object-cover group-hover:scale-105 transition" />
                        </div>
                        <h3 className="font-bold text-lg mb-1">Middle Tennessee</h3>
                        <p className="text-xs text-slate-500 mb-3">Nashville, Franklin, Murfreesboro</p>
                        <ul className="text-sm space-y-1">
                            <li>• Renting often cheaper short-term</li>
                            <li>• Buying offers long-term appreciation</li>
                        </ul>
                    </div>

                    {/* West TN */}
                    <div className="group shadow-xl p-4 rounded-lg border">
                        <div className="overflow-hidden rounded-lg mb-4 h-60">
                            <img src="assets/images/renting-buy/West-Tennessee.jpe" alt="West TN" className="w-full h-full object-cover group-hover:scale-105 transition" />
                        </div>
                        <h3 className="font-bold text-lg mb-1">West Tennessee</h3>
                        <p className="text-xs text-slate-500 mb-3">Memphis, Jackson</p>
                        <ul className="text-sm space-y-1">
                            <li>• Extremely affordable rent</li>
                            <li>• Buying offers strong value and lower prices</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ================= DECISION SECTION ================= */}
            <section className="py-16 bg-[#C9A24973]">
                <div className="container mx-auto px-6 md:px-12">
                    <h2 className="text-2xl lg:text-4xl font-bold text-center mb-12">Making the Right Decision</h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded shadow-xl">
                            <h3 className="text-xl font-bold mb-4">When Renting First Makes Sense</h3>
                            <p className="text-md mb-4">Consider renting first if you want flexibility and time to learn the area.</p>
                            <ul className="space-y-2 text-md">
                                <li className="flex gap-2 text-slate-700 items-center"><span className="text-primary font-bold">
                                    <MdDoubleArrow size={14} />
                                </span> You're new to Tennessee</li>
                                <li className="flex gap-2 text-slate-700 items-center"><span className="text-primary font-bold">
                                    <MdDoubleArrow size={14} />
                                </span> You're unsure which city fits your lifestyle</li>
                                <li className="flex gap-2 text-slate-700 items-center"><span className="text-primary font-bold">
                                    <MdDoubleArrow size={14} />
                                </span> You're waiting for market conditions to change</li>
                                <li className="flex gap-2 text-slate-700 items-center"><span className="text-primary font-bold">
                                    <MdDoubleArrow size={14} />
                                </span> You want flexibility</li>
                            </ul>
                            <p className="text-md mt-4 text-slate-500">Many people rent for 6-24 months, then purchase once they're comfortable.</p>
                        </div>

                        <div className="bg-white p-8 rounded shadow-xl">
                            <h3 className="text-xl font-bold mb-4">When Buying Makes Sense</h3>
                            <p className="text-md mb-4">Buying is ideal if you're ready to commit and build long-term equity.</p>
                            <ul className="space-y-2 text-md">
                                <li className="flex gap-2 text-slate-700 items-center"><span className="text-primary font-bold">
                                    <MdDoubleArrow size={14} />
                                </span> You plan to stay long-term</li>
                                <li className="flex gap-2 text-slate-700 items-center"><span className="text-primary font-bold">
                                    <MdDoubleArrow size={14} />
                                </span> You want stable housing costs</li>
                                <li className="flex gap-2 text-slate-700 items-center"><span className="text-primary font-bold">
                                    <MdDoubleArrow size={14} />
                                </span> You want to build equity</li>
                                <li className="flex gap-2 text-slate-700 items-center"><span className="text-primary font-bold">
                                    <MdDoubleArrow size={14} />
                                </span> You want flexibility</li>
                            </ul>
                            <p className="text-md mt-4">Homeownership is especially attractive in Tennessee due to low property taxes and no income tax.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= STRATEGY CTA SECTION ================= */}
            <section className="relative py-20 bg-primary">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
                <div className="relative z-10 container mx-auto px-6 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">The Smart Tennessee Strategy: Rent, Then Buy</h2>
                    <p className="max-w-2xl mx-auto mb-4 text-gray-200">
                        For many people moving to Tennessee, the best strategy is to start by renting short-term, learn the city and neighborhoods, then buy with confidence.
                    </p>
                    <p className="max-w-2xl mx-auto text-gray-200 mb-8">This reduces risk and leads to better long-term decisions.</p>
                    <button className="bg-secondary text-white px-8 py-3 rounded shadow-lg font-bold transition">
                        Connect With a Tennessee Realtor →
                    </button>
                </div>
            </section>

            {/* ================= EXPLORE OPTIONS ================= */}
            <section className="py-20 bg-white container mx-auto px-6 md:px-12">
                <h2 className="text-3xl font-bold text-center mb-12">Explore Your Options in Tennessee</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ExploreRentalCities exploreCities={exploreCitiesData} />
                </div>
            </section>

            {/* ================= FINAL THOUGHTS ================= */}
            <section className="py-16 bg-secondary/50 text-center px-6">
                <h2 className="text-3xl font-bold mb-6">Final Thoughts</h2>
                <p className="max-w-3xl mx-auto text-slate-700 mb-4">
                    Tennessee offers strong opportunities for both renters and buyers. The right choice depends on your timeline, budget, and lifestyle goals.
                </p>
                <p className="max-w-3xl mx-auto text-slate-700">
                    Whether you rent or buy first, Tennessee remains one of the best states in the country to put down roots.
                </p>
            </section>

        </FrontendLayout>
    );
};

export default RentingBuy;