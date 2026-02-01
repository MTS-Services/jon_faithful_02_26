import React from 'react';
import {
    ArrowRightCircle,
    CheckCircle2,
    XCircle,
    Clock
} from 'lucide-react';
import { FaArrowRight, FaChevronRight } from 'react-icons/fa';

const Partner = () => {
    return (
        <div className="font-sans text-[#2c2c2c] bg-white">

            {/* HERO SECTION */}
            <section className="relative min-h-[80vh] flex items-center overflow-hidden">
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source
                        src="https://whytennessee.com/wp-content/uploads/2026/01/Family_ready_to_move_into_a_new_home__real_estate_house_purchase._Financial_investment_and_freedom_to_own_property_as_adults._Young_parents_excited__looking_at_sold_home_from_the1.mp4"
                        type="video/mp4"
                    />
                </video>
                <div className="absolute inset-0 bg-black/60"></div>

                <div className="relative z-10 w-full container mx-auto px-4 py-16">
                    <h1 className="text-white text-4xl md:text-6xl font-extrabold max-w-4xl leading-tight">
                        Be Featured Before WhyTennessee<br />Publicly Launches
                    </h1>
                    <p className="text-white/80 text-lg mt-6 leading-relaxed max-w-3xl">
                        WhyTennessee.com is a Tennessee-focused relocation and discovery platform built to help people
                        moving into the state confidently choose where to live, rent, or buy.
                    </p>
                    <p className="text-white/80 text-lg mt-3 leading-relaxed max-w-3xl">
                        We are currently inviting a limited number of local real estate professionals to join as Founding
                        Realtor Partners. This early-access opportunity is designed for agents seeking increased
                        visibility and early exposure to motivated buyers.
                    </p>
                    <button className="inline-flex items-center gap-2 mt-8 bg-[#1b2a4a] hover:bg-[#b8912a] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-1">
                        Join Partner Program
                        <span className="inline-flex items-center bg-white p-1 rounded-full text-black">
                            <FaChevronRight size={12} />
                        </span>
                    </button>
                </div>
            </section>

            {/* APPLY BAND (Dark) */}
            <section className="bg-[#1b2a4a] text-center py-12 px-6">
                <h2 className="text-white text-3xl md:text-5xl font-bold">Apply to Become a Founding Partner</h2>
                <p className="text-gray-400 text-md mt-2">Spots are limited and reviewed individually.</p>
                <button className="inline-flex items-center gap-2 mt-6 bg-[#d4a832] hover:bg-[#b8912a] text-white px-10 py-4 rounded-full font-bold transition-colors duration-300">
                    Apply Now
                    <span className="inline-flex items-center bg-white p-1 rounded-full text-black">
                        <FaChevronRight size={12} />
                    </span>
                </button>
            </section>

            {/* WHY DIFFERENT SECTION */}
            <section className="py-20">
                <div className="container mx-auto px-4 lg:px-16 grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">Why WhyTennessee.com Is Different</h2>
                        <p className="mb-6 text-gray-600 italic">WhyTennessee.com is not another general listing site.</p>
                        <ul className="space-y-4">
                            {[
                                "Low home prices compared to national averages",
                                "No state income tax in Tennessee",
                                "Historic downtown and cultural events",
                                "Easy access to Johnson City and Kingsport",
                                "Strong sense of community",
                                "Short commute times"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-black rounded-full" />
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-8 text-gray-600">
                            Many people moving to the Tri-Cities choose Bristol for its affordable housing and distinctive personality.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 h-[500px]">
                        <img
                            src="https://whytennessee.com/wp-content/uploads/2026/01/Apartments-in-2048x1365.jpeg"
                            className="rounded-2xl w-full h-full object-cover shadow-lg"
                            alt="Tennessee Apartments"
                        />
                        <img
                            src="https://whytennessee.com/wp-content/uploads/2026/01/Jackson_TN_downtown1-1024x683.webp"
                            className="rounded-2xl w-full h-3/4 object-cover shadow-lg self-end"
                            alt="Downtown Jackson"
                        />
                    </div>
                </div>
            </section>

            {/* BENEFIT CARDS */}
            <section className="bg-[#f0f0f0] py-20 px-6 rounded-t-[60px] md:rounded-t-[100px]">
                <div className="container mx-auto flex flex-col md:flex-row gap-8">

                    {/* Card 1 */}
                    <div className="flex-1 bg-[#1b2a4a] text-white rounded-2xl p-8 shadow-xl">
                        <h3 className="text-xl font-bold mb-4">What Founding Realtor Partners Receive</h3>
                        <p className="text-[#c8d4e4] text-sm mb-6 leading-relaxed">
                            As a Founding Partner, you receive early placement and visibility before additional agents join the platform.
                        </p>
                        <p className="text-[#d4a832] font-bold text-sm mb-4">Included Benefits:</p>
                        <ul className="space-y-3">
                            {[
                                "Featured property listings",
                                "Agent profile with contact information",
                                "Placement on Tennessee city pages",
                                "Exposure to motivated buyers",
                                "Priority consideration for future upgrades",
                                "Early positioning before launch traffic increases"
                            ].map((benefit, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-sm text-[#c8d4e4]">
                                    <span className="inline-flex items-center bg-white p-1 rounded-full text-black">
                                        <FaChevronRight size={12} />
                                    </span>
                                    {benefit}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Card 2 */}
                    <div className="flex-1 bg-[#1b2a4a] text-white rounded-2xl p-8 shadow-xl">
                        <h3 className="text-xl font-bold mb-4">Limited Availability by City</h3>
                        <p className="text-[#d4a832] font-bold text-sm mb-4 uppercase tracking-wider">Quality Assurance:</p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-start gap-3 text-sm text-[#c8d4e4]">
                                <span className="inline-flex items-center bg-white p-1 rounded-full text-black">
                                    <FaChevronRight size={12} />
                                </span>
                                Founding Partner spots are limited per city
                            </li>
                            <li className="flex items-start gap-3 text-sm text-[#c8d4e4]">
                                <span className="inline-flex items-center bg-white p-1 rounded-full text-black">
                                    <FaChevronRight size={12} />
                                </span>
                                Not all applicants will be accepted
                            </li>
                            <li className="flex items-start gap-3 text-sm text-[#c8d4e4]">
                                <span className="inline-flex items-center bg-white p-1 rounded-full text-black">
                                    <FaChevronRight size={12} />
                                </span>
                                Priority is given to licensed, active agents
                            </li>
                        </ul>

                        <h3 className="text-xl font-bold mb-4 border-t border-white/10 pt-6">No Long-Term Commitment</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-sm text-[#c8d4e4]">
                                <XCircle size={18} className="text-red-500 shrink-0" />
                                Has no long-term contracts
                            </li>
                            <li className="flex items-start gap-3 text-sm text-[#c8d4e4]">
                                <XCircle size={18} className="text-red-500 shrink-0" />
                                Has no upfront listing fees during launch
                            </li>
                            <li className="flex items-start gap-3 text-sm text-[#c8d4e4]">
                                <span className="inline-flex items-center bg-white p-1 rounded-full text-black">
                                    <FaChevronRight size={12} />
                                </span>
                                Allows you to evaluate results risk-free
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* PROCESS STEPS */}
            <section className="bg-[#1b2a4a] py-20 px-6">
                <h2 className="text-white text-center text-4xl md:text-5xl font-bold mb-16">How the Process Works</h2>
                <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                    {[
                        "Apply to become a Founding Realtor Partner",
                        "Complete a short verification process",
                        "Submit listings and profile details",
                        "Listings are reviewed and published",
                        "Begin receiving exposure as the platform grows"
                    ].map((step, idx) => (
                        <div key={idx} className="bg-white rounded-xl p-6 text-center flex flex-col items-center">
                            <span className="text-5xl font-black text-[#1b2a4a] leading-none mb-4">{idx + 1}</span>
                            <p className="text-sm font-bold text-gray-700 leading-snug">{step}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="bg-white text-center py-20 px-6">
                <h2 className="text-[#1b2a4a] text-4xl font-bold mb-4">Apply to Become a Founding Partner</h2>
                <p className="text-gray-500 mb-8">Spots are limited and reviewed individually.</p>
                <button className="inline-flex items-center gap-2 bg-[#d4a832] hover:bg-[#b8912a] text-white font-bold px-10 py-4 rounded-full transition-all hover:-translate-y-1 shadow-lg">
                    Apply Now
                    <span className="inline-flex items-center bg-white p-1 rounded-full text-black">
                        <FaChevronRight size={12} />
                    </span>
                </button>
            </section>

            {/* DISCLAIMER */}
            <footer className="bg-[#1b2a4a] text-center px-6 py-12 border-t border-white/5">
                <h2 className="text-white text-2xl font-bold mb-4">Disclaimer</h2>
                <p className="text-white/60 max-w-2xl mx-auto text-sm leading-relaxed">
                    Participation in the WhyTennessee.com partner program does not guarantee leads, inquiries, or
                    transactions. Placement, availability, and program details may change as the platform grows.
                </p>
            </footer>
        </div>
    );
};

export default Partner;