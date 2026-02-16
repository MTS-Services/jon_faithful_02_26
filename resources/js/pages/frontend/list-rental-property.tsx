
import ListProperty from '@/components/sections/frontend/list-property/list-property';
import FrontendLayout from '@/layouts/frontend-layout';
import { usePage } from '@inertiajs/react';
import { FaChevronRight } from 'react-icons/fa';

export default function ListRentalProperty() {
    const { auth } = usePage().props as any;
    return (
        <FrontendLayout>
            {/* <Hero />
            <MovingToChattanooga />
            <ChattanoogaLocated />
            <CostOfLiving /> */}

            {/* HERO SECTION */}
            <section className="relative flex min-h-[80vh] items-center overflow-hidden">
                <video
                    className="absolute inset-0 h-full w-full object-cover"
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

                <div className="relative z-10 container mx-auto w-full px-4 py-16">
                    <h1 className="max-w-4xl text-4xl leading-tight font-bold text-white md:text-5xl">
                        Be Featured Before WhyTennessee Publicly Launches
                    </h1>
                    <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/80">
                        WhyTennessee.com is a Tennessee-focused relocation and
                        discovery platform built to help people moving into the
                        state confidently choose where to live, rent, or buy.
                    </p>
                    <p className="mt-3 max-w-3xl text-lg leading-relaxed text-white/80">
                        We are currently inviting a limited number of local real
                        estate professionals to join as Founding Realtor
                        Partners. This early-access opportunity is designed for
                        agents seeking increased visibility and early exposure
                        to motivated buyers.
                    </p>
                    {!auth.user ? (
                        <>
                            <a
                                href={route('user.choose')}
                                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#b8912a]"
                            >
                                Join Partner Program
                                <span className="inline-flex items-center rounded-full bg-white p-1 text-black">
                                    <FaChevronRight size={12} />
                                </span>
                            </a>
                        </>
                    ) : (
                        <>
                            <a
                                href={route('user.dashboard')}
                                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#b8912a]"
                            >
                                Account
                                <span className="inline-flex items-center rounded-full bg-white p-1 text-black">
                                    <FaChevronRight size={12} />
                                </span>
                            </a>
                        </>
                    )}
                </div>
            </section>
            <ListProperty />
        </FrontendLayout>
    );
}
