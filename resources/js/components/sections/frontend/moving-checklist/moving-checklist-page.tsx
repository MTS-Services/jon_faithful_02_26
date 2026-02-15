import React, { useState } from 'react';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';

interface TabContent {
    id: string;
    label: string;
    title: string;
    intro: string;
    items: string[];
    footer: string;
    imageUrl: string;
    cta?: {
        label: string;
        href: string;
    };
}

const MovingChecklistPage = () => {
    const [activeTab, setActiveTab] = useState<string>('tab1');

    const tabs: TabContent[] = [
        {
            id: "tab1",
            label: "Schools & Education",
            title: "Schools & Education",
            intro: "Bristol offers:",
            items: [
                "Public schools serving the city",
                "Private school options nearby",
                "Access to Northeast State Community College and ETSU",
            ],
            footer: "Education options support families relocating to the area.",
            imageUrl:
                "https://whytennessee.com/wp-content/uploads/2026/01/Be_focus_and_patient_while_teaching_new_things1-scaled.jpeg",
        },
        {
            id: "tab2",
            label: "Healthcare & Employment",
            title: "Healthcare & Employment",
            intro:
                "Bristol residents benefit from regional healthcare and employment opportunities, including:",
            items: [
                "Medical centers throughout the Tri-Cities",
                "Manufacturing and industrial employers",
                "Tourism & speedway-related jobs",
            ],
            footer: "Healthcare and regional employers provide stable job options.",
            imageUrl:
                "https://whytennessee.com/wp-content/uploads/2026/01/Cropped-shot-of-diverse-coworkers-working-together-in-boardroom_-brainstorming_-discussing-and-analyzing-and-planning-business-strategy-scaled.jpeg",
        },
        {
            id: "tab3",
            label: "Things to Do in Bristol",
            title: "Things to Do in Bristol",
            intro: "Bristol offers a variety of activities for residents:",
            items: [
                "Bristol Motor Speedway events",
                "Birthplace of Country Music Museum",
                "Local festivals & live music",
                "Outdoor recreation & parks",
            ],
            footer:
                "Bristol combines culture, history, and outdoor access in a small-city setting.",
            imageUrl:
                "https://whytennessee.com/wp-content/uploads/2026/01/Bristol_Motor_Speedway_Preparing_For_The_Speedway_Classic_2025_Between_The_Atlanta_Braves_and_the_Cincinnati_Reds1-scaled.jpeg",
        },
        {
            id: "tab4",
            label: "Homes for Sale in Bristol",
            title: "Homes for Sale in Bristol",
            intro: "Bristol’s housing market includes:",
            items: [
                "Affordable single-family homes",
                "Historic properties",
                "Newer subdivisions",
                "Rural homes with acreage",
            ],
            footer:
                "Homes in Bristol are often priced lower than surrounding cities, making it a great option for first-time buyers and retirees.",
            imageUrl:
                "https://whytennessee.com/wp-content/uploads/2025/12/pexels-lebele-11935244-scaled.jpg",
            cta: {
                label: "Homes for Sale",
                href: "/homes-for-sale",
            },
        },
    ];


    return (
        <>
            <div className="min-h-screen bg-white text-gray-800">
                {/* Research Section */}
                <section className="container mx-auto p-8 font-sans">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                        <div className="space-y-6">
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                                Research Tennessee Cities & Regions
                            </h1>

                            <p className="text-gray-600 text-lg">
                                Tennessee offers a wide range of lifestyles, from fast-growing cities to quiet mountain towns.
                            </p>

                            <ul className="space-y-4 text-gray-700">
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
                                    <span>Compare major cities like <span className="text-gray-400">Nashville, Knoxville, Chattanooga,
                                        Memphis, and Johnson City</span></span>
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
                                    <span>Research cost of living, job opportunities, and lifestyle fit</span>
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
                                    <span>Decide whether you want urban, suburban, or rural living</span>
                                </li>
                            </ul>

                            <button
                                className="mt-4 px-8 py-3 bg-primary text-white font-semibold rounded-full hover:bg-secondary transition-colors">
                                Explore Tennessee Cities
                            </button>
                        </div>

                        <div className="relative">
                            <img src="assets/images/moving-checklist/moving.jpeg" alt="People moving into a new home"
                                className="rounded-xl shadow-lg w-full h-auto object-cover" />
                        </div>

                    </div>
                </section>

                <section className="bg-[#FBF8F2] py-16">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            <div className="order-2 lg:order-1">
                                <img src="https://whytennessee.com/wp-content/uploads/2025/12/pexels-kelly-3061230-scaled.jpg"
                                    alt="Tennessee home" className="w-full h-auto rounded-lg shadow-lg object-cover" loading="lazy" />
                            </div>

                            <div className="order-1 lg:order-2 space-y-6">
                                <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900">
                                    Decide Whether to Rent or Buy
                                </h2>

                                <p className="text-lg text-gray-600">
                                    Many people moving to Tennessee choose to rent first while learning the area.
                                </p>

                                <div className="w-full md:w-1/2 space-y-6">

                                    <ul className="space-y-2 text-gray-800">
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
                                            Compare rental prices vs home prices
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
                                            Consider job stability and relocation timeline
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
                                            Factor in market conditions and interest rates
                                        </li>
                                    </ul>

                                    <div className="flex flex-wrap gap-4 pt-4">
                                        <a href={route('frontend.home-for-sale')}
                                            className="inline-flex items-center justify-center px-6 py-3 bg-[#243c64] text-white font-medium rounded-full hover:bg-opacity-90 transition-all text-sm whitespace-nowrap">
                                            Browse Homes for Sale in Tennessee
                                        </a>

                                        <a href={route('frontend.rentals')}
                                            className="inline-flex items-center justify-center px-6 py-3 bg-[#c9973d] text-white font-medium rounded-full hover:bg-opacity-90 transition-all text-sm whitespace-nowrap">
                                            Browse Rentals in Tennessee
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-gray-50 py-16 px-4">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-4xl font-bold text-gray-900 mb-10 text-left">
                            Set a Moving Budget
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">

                            <div
                                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center justify-between min-h-[180px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                    className="mb-6">
                                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
                                    <path d="M15 18H9" />
                                    <path d="M19 18h2a1 1 0 0 0 1-1v-5l-4-4h-3v10Z" />
                                    <circle cx="7" cy="18" r="2" />
                                    <circle cx="17" cy="18" r="2" />
                                </svg>
                                <p className="text-md font-bold text-gray-800 leading-tight">Moving company or truck rental</p>
                            </div>

                            <div
                                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center justify-between min-h-[180px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                    className="mb-6">
                                    <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" />
                                    <path
                                        d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-5.4a2 2 0 0 0-3-2.7L15 13" />
                                    <path d="M11 5h2a2 2 0 1 0 0-4h-3a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2Z" />
                                </svg>
                                <p className="text-md font-bold text-gray-800 leading-tight">Security deposits or down payment</p>
                            </div>

                            <div
                                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center justify-between min-h-[180px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                    className="mb-6">
                                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                                    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                                    <path d="M12 12v5" />
                                    <path d="M9 15h6" />
                                </svg>
                                <p className="text-md font-bold text-gray-800 leading-tight">First month's rent or closing costs</p>
                            </div>

                            <div
                                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center justify-between min-h-[180px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                    className="mb-6">
                                    <path d="M13 2 L3 14h9l-1 8 10-12h-9l1-8z" fill="currentColor" />
                                </svg>
                                <p className="text-md font-bold text-gray-800 leading-tight">Utility setup fees</p>
                            </div>

                            <div
                                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center justify-between min-h-[180px]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                    className="mb-6">
                                    <rect width="16" height="20" x="4" y="2" rx="2" />
                                    <path d="M9 22v-4h6v4" />
                                    <path d="M8 6h.01" />
                                    <path d="M16 6h.01" />
                                    <path d="M8 10h.01" />
                                    <path d="M16 10h.01" />
                                    <path d="M8 14h.01" />
                                    <path d="M16 14h.01" />
                                </svg>
                                <p className="text-md font-bold text-gray-800 leading-tight">Temporary housing if needed</p>
                            </div>

                        </div>
                    </div>
                </section>


                <section className="bg-primary flex flex-col items-center py-16 px-6 font-sans">
                    <h2 className="text-white text-4xl font-bold mb-12 tracking-tight">
                        60 Days Before Moving
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl w-full">

                        <div className="bg-white rounded-xl p-8 shadow-lg">
                            <h3 className="text-[#2d3748] text-xl font-bold mb-6">Secure Housing</h3>
                            <ul className="space-y-4 text-[#4a5568] text-sm leading-relaxed">
                                <li className="flex items-start">
                                    <svg className="w-4 h-4 mt-1 mr-3 flex-shrink-0" fill="none" stroke="black" viewBox="0 0 24 24"
                                        stroke-width="3">
                                        <path d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span>Apply for rentals or make an offer on a home</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-4 h-4 mt-1 mr-3 flex-shrink-0" fill="none" stroke="black" viewBox="0 0 24 24"
                                        stroke-width="3">
                                        <path d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span>Schedule inspections or walkthroughs</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-4 h-4 mt-1 mr-3 flex-shrink-0" fill="none" stroke="black" viewBox="0 0 24 24"
                                        stroke-width="3">
                                        <path d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span>Review lease terms or purchase contracts carefully</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-xl p-8 shadow-lg">
                            <h3 className="text-[#2d3748] text-xl font-bold mb-6">Hire a Moving Company</h3>
                            <ul className="space-y-4 text-[#4a5568] text-sm leading-relaxed">
                                <li className="flex items-start">
                                    <svg className="w-4 h-4 mt-1 mr-3 flex-shrink-0" fill="none" stroke="black" viewBox="0 0 24 24"
                                        stroke-width="3">
                                        <path d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span>Get multiple quotes</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-4 h-4 mt-1 mr-3 flex-shrink-0" fill="none" stroke="black" viewBox="0 0 24 24"
                                        stroke-width="3">
                                        <path d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span>Verify licensing and insurance</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-4 h-4 mt-1 mr-3 flex-shrink-0" fill="none" stroke="black" viewBox="0 0 24 24"
                                        stroke-width="3">
                                        <path d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span>Confirm move dates in writing</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-xl p-8 shadow-lg">
                            <h3 className="text-[#2d3748] text-xl font-bold mb-6">Notify Employers & Schools</h3>
                            <ul className="space-y-4 text-[#4a5568] text-sm leading-relaxed">
                                <li className="flex items-start">
                                    <svg className="w-4 h-4 mt-1 mr-3 flex-shrink-0" fill="none" stroke="black" viewBox="0 0 24 24"
                                        stroke-width="3">
                                        <path d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span>Coordinate start dates or remote work schedules</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-4 h-4 mt-1 mr-3 flex-shrink-0" fill="none" stroke="black" viewBox="0 0 24 24"
                                        stroke-width="3">
                                        <path d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span>Request school records and transfers</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-4 h-4 mt-1 mr-3 flex-shrink-0" fill="none" stroke="black" viewBox="0 0 24 24"
                                        stroke-width="3">
                                        <path d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span>Research Tennessee school districts if moving with children</span>
                                </li>
                            </ul>
                        </div>

                    </div>
                </section>

                {/* TABS SECTION */}
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`px-6 py-5 font-bold rounded-full transition-all duration-300 flex items-center text-md ${activeTab === tab.id
                                        ? 'bg-secondary text-white scale-105 shadow-md'
                                        : 'bg-slate-800 text-white hover:bg-secondary'
                                        }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        {tabs.map((tab) => (
                            <div key={tab.id} className={`${activeTab === tab.id ? 'grid opacity-100' : 'hidden opacity-0'} md:grid-cols-2 gap-12 items-center transition-opacity duration-500`}>
                                <img src={tab.imageUrl} alt={tab.title} className="rounded-2xl shadow-2xl w-full object-cover h-96" />
                                <div>
                                    <h2 className="text-4xl font-bold mb-6 text-slate-900">{tab.title}</h2>
                                    <p className="mb-6 text-gray-600 leading-relaxed">{tab.intro}</p>
                                    <ul className="space-y-4">
                                        {tab.items.map((item, iIdx) => (
                                            <li key={iIdx} className="flex items-center gap-3">
                                                <FaArrowAltCircleRight className="text-secondary" size={18} />
                                                <span className="text-gray-700 font-medium">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="mt-8 text-gray-500 italic border-l-4 border-secondary pl-4">{tab.footer}</p>
                                    {tab.id === 'tab4' && (
                                        <a href="/homes-for-sale" className="inline-flex items-center gap-2 mt-8 bg-slate-900 text-white px-8 py-4 rounded-full hover:bg-secondary transition-colors font-bold">
                                            View Local Listings <HiArrowRight />
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <div className="space-y-20 bg-gray-100 font-sans">

                    <section className="bg-primary py-20 px-6">
                        <div className="max-w-7xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">2 Weeks Before Moving</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-white">
                                <div className="flex flex-col md:flex-row items-center md:items-center gap-6">
                                    <img src="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?q=80&w=400&auto=format&fit=crop"
                                        alt="Nashville" className="w-72 h-72 rounded-xl object-cover" />
                                    <div>
                                        <h3 className="text-xl font-bold mb-4">Confirm Final Details</h3>
                                        <ul className="space-y-2 text-sm list-disc list-inside opacity-90">
                                            <li>Reconfirm moving company date and time</li>
                                            <li>Review lease or closing paperwork</li>
                                            <li>Schedule final walkthroughs</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row items-center md:items-center gap-6">
                                    <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=400&auto=format&fit=crop"
                                        alt="Documents" className="w-72 h-72 rounded-xl object-cover" />
                                    <div>
                                        <h3 className="text-xl font-bold mb-4">Prepare Important Documents</h3>
                                        <ul className="space-y-2 text-sm list-disc list-inside opacity-90">
                                            <li>Driver's License</li>
                                            <li>Social Security card</li>
                                            <li>Birth certificates</li>
                                            <li>Medical and school records</li>
                                            <li>Insurance documents</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>


                <section className="bg-[#EEF4FB] font-sans ">

                    <div className={`relative py-20 px-4 bg-cover bg-center`}
                        style={{ backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('https://images.unsplash.com/photo-1470219556762-1771e7f9427d?q=80&w=2000')" }}>

                        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

                            <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white">
                                <h2 className="text-3xl font-bold text-gray-800 mb-2">Moving Week</h2>

                                <div className="mb-8">
                                    <h3 className="text-xl font-bold text-gray-700 mb-3">Pack an Essentials Box</h3>
                                    <p className="text-sm text-gray-600 mb-4">Keep these items with you during the move for easy access:
                                    </p>
                                    <ul className="space-y-2 text-sm text-gray-700 list-disc pl-5">
                                        <li>Toiletries and personal hygiene items</li>
                                        <li>Phone chargers and power banks</li>
                                        <li>Medications and prescriptions</li>
                                        <li>Important paperwork and documents</li>
                                        <li>Basic kitchen items (coffee maker, utensils, paper towels)</li>
                                        <li>A change of clothes for each family member</li>
                                        <li>Cleaning supplies and trash bags</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-gray-700 mb-3">Inspect Your New Home</h3>
                                    <p className="text-sm text-gray-600 mb-4">Before unloading, do a quick walkthrough:</p>
                                    <ul className="space-y-2 text-sm text-gray-700 list-disc pl-5">
                                        <li>Take photos of the home's condition</li>
                                        <li>Confirm all utilities are active (electric, water, gas, internet)</li>
                                        <li>Test locks, smoke detectors, and carbon monoxide alarms</li>
                                        <li>Check appliances are working properly</li>
                                        <li>Locate circuit breakers and water shut-off valves</li>
                                        <li>Confirm movers' arrival time and contact information</li>
                                        <li>Protect floors and doorways during move-in</li>
                                        <li>Keep pets and children in a safe, quiet area</li>
                                        <li>Do a final walk-thru of your old home</li>
                                        <li>Secure valuables and important documents</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-white/80 backdrop-blur-md p-8 py-10 rounded-2xl shadow-xl border border-white flex flex-col items-start justify-center">
                                <h2 className="text-3xl font-bold text-gray-800 mb-6">After You Arrive in Tennessee</h2>

                                <div className="mb-8">
                                    <h3 className="text-xl font-bold text-gray-700 mb-3">Update Driver's License & Vehicle Registration
                                    </h3>
                                    <p className="text-sm text-gray-600 mb-4">Tennessee requires new residents to:</p>
                                    <ul className="space-y-2 text-sm text-gray-700 list-disc pl-5 mb-4">
                                        <li>Get a Tennessee driver's license</li>
                                        <li>Register vehicles and update plates</li>
                                    </ul>
                                    <p className="text-sm font-medium text-gray-800">Visit a local Tennessee DMV within the required
                                        timeframe.</p>
                                </div>

                                <div className="mb-8">
                                    <h3 className="text-xl font-bold text-gray-700 mb-3">Register to Vote</h3>
                                    <ul className="space-y-2 text-sm text-gray-700 list-disc pl-5">
                                        <li>Update voter registration with your new address</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-gray-700 mb-3">Get Familiar With Your Area</h3>
                                    <ul className="space-y-2 text-sm text-gray-700 list-disc pl-5">
                                        <li>Locate grocery stores, pharmacies, hospitals</li>
                                        <li>Explore parks, restaurants, and neighborhoods</li>
                                        <li>Meet neighbors and join local groups</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="bg-[#FBF8F2] py-24 px-6">
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                        <div className="flex flex-col md:flex-row gap-10 items-center">
                            <div className="flex-1">
                                <h2 className="text-3xl font-semibold mb-6">Ongoing Tasks After Your Move</h2>
                                <ul className="text-gray-700 font-medium">
                                    <li className="flex items-center gap-2">
                                        <span className="flex-shrink-0">
                                            <svg aria-hidden="true" className="w-2 h-2 fill-current text-black" viewBox="0 0 512 512">
                                                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                            </svg>
                                        </span>Update healthcare providers</li>
                                    <li className="flex items-center gap-2">
                                        <span className="flex-shrink-0">
                                            <svg aria-hidden="true" className="w-2 h-2 fill-current text-black" viewBox="0 0 512 512">
                                                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                            </svg>
                                        </span>Transfer prescriptions</li>
                                    <li className="flex items-center gap-2">
                                        <span className="flex-shrink-0">
                                            <svg aria-hidden="true" className="w-2 h-2 fill-current text-black" viewBox="0 0 512 512">
                                                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                            </svg>
                                        </span>Review local tax considerations</li>
                                    <li className="flex items-center gap-2">
                                        <span className="flex-shrink-0">
                                            <svg aria-hidden="true" className="w-2 h-2 fill-current text-black" viewBox="0 0 512 512">
                                                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                            </svg>
                                        </span>Evaluate long-term housing plans</li>
                                </ul>
                            </div>
                            <img src="https://images.unsplash.com/photo-1533903345306-15d1c30952de?auto=format&fit=crop&q=80&w=400"
                                className="w-80 h-80 rounded-lg shadow-2xl object-cover" />
                        </div>
                        <div className="flex flex-col md:flex-row gap-10 items-center">
                            <div className="flex-1 order-2 md:order-1">
                                <h2 className="text-3xl font-bold mb-6">Helpful Moving Tips for Tennessee</h2>
                                <ul className="text-gray-700 font-medium text-right md:text-left">
                                    <li className="flex items-center gap-2">
                                        <span className="flex-shrink-0">
                                            <svg aria-hidden="true" className="w-2 h-2 fill-current text-black" viewBox="0 0 512 512">
                                                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                            </svg>
                                        </span>Tennessee has no state income tax</li>
                                    <li className="flex items-center gap-2">
                                        <span className="flex-shrink-0">
                                            <svg aria-hidden="true" className="w-2 h-2 fill-current text-black" viewBox="0 0 512 512">
                                                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                            </svg>
                                        </span>Weather varies by region — research local climate</li>
                                    <li className="flex items-center gap-2">
                                        <span className="flex-shrink-0">
                                            <svg aria-hidden="true" className="w-2 h-2 fill-current text-black" viewBox="0 0 512 512">
                                                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                            </svg>
                                        </span>Traffic and commute times vary widely by city</li>
                                    <li className="flex items-center gap-2">
                                        <span className="flex-shrink-0">
                                            <svg aria-hidden="true" className="w-2 h-2 fill-current text-black" viewBox="0 0 512 512">
                                                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                            </svg>
                                        </span>Housing demand differs significantly by market</li>
                                </ul>
                            </div>
                            <img src="https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&q=80&w=400"
                                className="w-80 h-80 rounded-lg shadow-2xl object-cover order-1 md:order-2" />
                        </div>
                    </div>
                </section>

                <section className="bg-primary py-20 px-6 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-white text-4xl font-bold mb-6">Want a Printable Checklist?</h2>
                        <p className="text-gray-300 text-lg mb-10">Download our Tennessee Moving Checklist PDF and keep everything
                            organized in one place.</p>
                        <button
                            className="bg-secondary text-white px-10 py-4 rounded-full text-md transition-all shadow-lg hover:cursor-pointer">
                            Download the Tennessee Relocation Guide
                        </button>
                    </div>
                </section>


                <section className="bg-[#fcfaf2] py-20 px-6">
                    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

                        <div className="text-center md:text-left">
                            <h2 className="text-[#333333] text-4xl md:text-5xl font-semibold mb-4 tracking-tight">
                                Start Your Tennessee Search
                            </h2>
                            <p className="text-[#333333] text-xl opacity-90">
                                Ready to take the next step?
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 w-full md:w-auto min-w-[320px]">

                            <a href={route('frontend.city-comparison')}
                                className="bg-primary hover:bg-secondary text-white py-4 px-8 rounded-full font-medium transition-colors text-center shadow-sm">
                                Compare Tennessee Cities
                            </a>

                            <a href={route('frontend.movingChecklist')}
                                className="bg-secondary hover:bg-primary text-white py-4 px-8 rounded-full font-medium transition-colors text-center shadow-sm">
                                Explore Tennessee Rentals
                            </a>

                            <a href={route('frontend.home-for-sale')}
                                className="bg-primary hover:bg-secondary text-white py-4 px-8 rounded-full font-medium transition-colors text-center shadow-sm">
                                Browse Homes for Sale in Tennessee
                            </a>

                        </div>
                    </div>
                </section>

                <section className="bg-primary py-16 px-4 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white">Disclaimer</h2>
                        <p className="text-gray-100">The information provided is for general informational purposes only and should not be considered financial, legal, or real estate advice. Costs, prices, and conditions may vary by location and over time.</p>
                    </div>
                </section>
            </div>
        </>
    );
};

export default MovingChecklistPage;
