'use client';

import React, { useState } from 'react';
import {
    Mail,
    Menu,
    X,
    ChevronDown,
    ArrowRight,
    Truck,
    Home,
    FileText,
    Zap,
    Package,
    MapPin,
    DollarSign,
    Clock,
    CheckCircle,
} from 'lucide-react';
import { FaFacebook } from 'react-icons/fa';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { Hero } from '@/components/sections/frontend/hero';

const MovingChecklist = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    return (
        <>
            <Hero
                slides={[
                    "https://whytennessee.com/wp-content/uploads/2025/12/Aerial-View-Map-Eastern-Tennessee-Stunning-Drone-Photography-of-Mountains_-Rivers-_-Towns-1-scaled.jpeg",
                ]}
                title={
                    <>
                        Renting in Tennessee
                    </>
                }
                description={
                    <>
                        Renting in Tennessee has become increasingly popular as home prices rise nationwide. Whether you’re relocating for work, lifestyle, or affordability, Tennessee offers a wide range of rental options, from apartments and condos to single-family homes across both urban and small-town markets. <br></br>
                        <br></br>
                        This guide explains everything you need to know about renting in Tennessee, including costs, lease terms, best cities to rent in, and tips for renters moving from out of state.
                    </>
                }
            />
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
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-black" />
                                    <span>Compare major cities like <span className="text-gray-400">Nashville, Knoxville, Chattanooga, Memphis, and Johnson City</span></span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-black" />
                                    <span>Research cost of living, job opportunities, and lifestyle fit</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-black" />
                                    <span>Decide whether you want urban, suburban, or rural living</span>
                                </li>
                            </ul>

                            <button className="mt-4 px-8 py-3 bg-brand-dark text-white font-semibold rounded-full hover:bg-blue-900 transition-colors">
                                Explore Tennessee Cities
                            </button>
                        </div>

                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1552168324-d7da99149e43?w=600&h=500&fit=crop"
                                alt="People moving into a new home"
                                className="rounded-xl shadow-lg w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* Rent or Buy Section */}
                <section className="bg-[#FBF8F2] py-16">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            <div className="order-2 lg:order-1">
                                <img
                                    src="https://images.unsplash.com/photo-1560448204-e02f7cbb3a0a?w=600&h=500&fit=crop"
                                    alt="Tennessee home"
                                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                                />
                            </div>

                            <div className="order-1 lg:order-2 space-y-6">
                                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                                    Decide Whether to Rent or Buy
                                </h2>

                                <p className="text-lg text-gray-600">
                                    Many people moving to Tennessee choose to rent first while learning the area.
                                </p>

                                <div className="w-full md:w-1/2 space-y-6">
                                    <ul className="space-y-2 text-gray-800">
                                        <li className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-black rounded-full" />
                                            Compare rental prices vs home prices
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-black rounded-full" />
                                            Consider job stability and relocation timeline
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-black rounded-full" />
                                            Factor in market conditions and interest rates
                                        </li>
                                    </ul>

                                    <div className="flex flex-wrap gap-4 pt-4">
                                        <a href="#" className="inline-flex items-center justify-center px-6 py-3 bg-brand-dark text-white font-medium rounded-full hover:bg-opacity-90 transition-all text-sm whitespace-nowrap">
                                            Browse Homes for Sale
                                        </a>

                                        <a href="#" className="inline-flex items-center justify-center px-6 py-3 bg-brand-orange text-white font-medium rounded-full hover:bg-opacity-90 transition-all text-sm whitespace-nowrap">
                                            Browse Rentals
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Budget Section */}
                <section className="bg-gray-50 py-16 px-4">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-4xl font-bold text-gray-900 mb-10 text-left">
                            Set a Moving Budget
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                            {[
                                { Icon: Truck, label: 'Moving company or truck rental' },
                                { Icon: DollarSign, label: 'Security deposits or down payment' },
                                { Icon: FileText, label: "First month's rent or closing costs" },
                                { Icon: Zap, label: 'Utility setup fees' },
                                { Icon: Package, label: 'Furniture and household items' },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center justify-between min-h-[220px]"
                                >
                                    <item.Icon className="mb-6 text-4xl text-gray-700" />
                                    <p className="text-sm font-bold text-gray-800 leading-tight">{item.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Timeline Section */}
                <section className="container mx-auto px-6 py-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-12">Moving Timeline</h2>

                    <div className="space-y-8">
                        {[
                            {
                                title: '8 Weeks Before Moving',
                                items: ['Research neighborhoods and schools', 'Compare rental prices', 'Check job market'],
                            },
                            {
                                title: '4 Weeks Before Moving',
                                items: ['Secure housing', 'Give notice to current landlord', 'Start packing non-essentials'],
                            },
                            {
                                title: '1 Week Before Moving',
                                items: ['Pack most items', 'Arrange utilities transfer', 'Confirm moving logistics'],
                            },
                            {
                                title: 'Moving Day',
                                items: ['Complete final walkthrough', 'Transport belongings', 'Settle into new home'],
                            },
                        ].map((phase, i) => (
                            <div key={i} className="flex gap-6">
                                <div className="flex flex-col items-center">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-dark text-white font-bold">
                                        {i + 1}
                                    </div>
                                    {i < 3 && <div className="w-0.5 h-20 bg-gray-300 mt-4" />}
                                </div>
                                <div className="pb-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{phase.title}</h3>
                                    <ul className="space-y-2">
                                        {phase.items.map((item, j) => (
                                            <li key={j} className="flex items-center gap-2 text-gray-700">
                                                <CheckCircle className="text-brand-orange" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-brand-dark text-white py-16 px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-4">Ready to Move to Tennessee?</h2>
                        <p className="text-blue-100 mb-8 text-lg">
                            Start your relocation journey with our comprehensive resources and guides.
                        </p>
                        <button className="bg-brand-orange hover:bg-opacity-90 px-8 py-3 rounded-full font-semibold transition flex items-center gap-2 mx-auto">
                            Get Started <ArrowRight />
                        </button>
                    </div>
                </section>
            </div>
        </>
    );
};

export default MovingChecklist;
