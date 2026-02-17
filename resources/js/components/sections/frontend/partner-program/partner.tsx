import { ActionButton } from '@/components/ui/action-button';
import { Link, usePage } from '@inertiajs/react';
import { ArrowRight, XCircle } from 'lucide-react';
import { FaChevronRight } from 'react-icons/fa';

const Partner = () => {
    const { auth } = usePage().props as any;
    return (
        <div className="bg-white font-sans text-[#2c2c2c]">
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
                    <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold mb-6 leading-tight max-w-5xl text-white">
                        Be Featured Before WhyTennessee
                        <br />
                        Publicly Launches
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
                            <Link
                                href={route('user.choose')}
                                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-secondary"
                            >
                                Join Partner Program
                                <span className="inline-flex items-center rounded-full bg-white p-1 text-black">
                                    <FaChevronRight size={12} />
                                </span>
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link
                                href={route('user.dashboard')}
                                className="mt-8 inline-flex items-center gap-2 rounded-full bg-secondary hover:bg-primary px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1"
                            >
                                Account
                                <span className="inline-flex items-center rounded-full bg-white p-1 text-black">
                                    <FaChevronRight size={12} />
                                </span>
                            </Link>
                        </>
                    )}
                </div>
            </section>

            {/* APPLY BAND (Dark) */}
            <section className="bg-primary px-6 py-12 text-center">
                <h2 className="text-xl md:text-2xl lg:text-4xl font-bold mb-6 text-white">
                    Apply to Become a Founding Partner
                </h2>
                <p className="text-md mt-2 text-gray-400">
                    Spots are limited and reviewed individually.
                </p>

                {!auth.user ? (
                    <>
                        <Link
                            href={route('user.choose')}
                            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#d4a832] px-10 py-4 font-bold text-white transition-colors duration-300 hover:bg-secondary"
                        >
                            Apply Now
                            <span className="inline-flex items-center rounded-full bg-white p-1 text-black">
                                <FaChevronRight size={12} />
                            </span>
                        </Link>
                    </>
                ) : (
                    <>
                        <Link
                            href={route('user.dashboard')}
                            className="mt-8 inline-flex items-center gap-2 rounded-full bg-secondary px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1"
                        >
                            Account
                            <span className="inline-flex items-center rounded-full bg-white p-1 text-black">
                                <FaChevronRight size={12} />
                            </span>
                        </Link>
                    </>
                )}
            </section>

            {/* WHY DIFFERENT SECTION */}
            <section className="py-20 bg-primary-background">
                <div className="container mx-auto grid items-center gap-16 px-4 md:grid-cols-2 lg:px-16">
                    <div>
                        <h2 className="mb-4 text-xl md:text-2xl lg:text-4xl leading-tight font-bold sm:mb-5 md:mb-6">
                            Why WhyTennessee.com Is Different
                        </h2>
                        <p className="mb-6 text-gray-600">
                            WhyTennessee.com is not another general listing site.
                        </p>
                        <p className="mb-6 text-gray-600">Our audience includes:</p>
                        <ul className="space-y-1">
                            {[
                                'Buyers and renters relocating from out of state',
                                'Families comparing Tennessee cities',
                                'Renters planning to buy',
                                'Investors researching Tennessee markets',
                            ].map((item, idx) => (
                                <li
                                    key={idx}
                                    className="flex items-center gap-3"
                                >
                                    <div className="h-2 w-2 rounded-full bg-black" />
                                    <span className="text-gray-700">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-8 text-gray-600">
                            Visitors come to WhyTennessee.com before choosing an agent — making this an ideal platform for early relationship building.
                        </p>
                    </div>

                    <div className="grid h-[500px] grid-cols-1 gap-4 md:grid-cols-2">
                        <img
                            src="https://whytennessee.com/wp-content/uploads/2026/01/Apartments-in-2048x1365.jpeg"
                            className="h-full w-full rounded-2xl object-cover shadow-lg"
                            alt="Tennessee Apartments"
                        />
                        <img
                            src="https://whytennessee.com/wp-content/uploads/2026/01/Jackson_TN_downtown1-1024x683.webp"
                            className="h-3/4 w-full self-end rounded-2xl object-cover shadow-lg"
                            alt="Downtown Jackson"
                        />
                    </div>
                </div>
            </section>

            {/* BENEFIT CARDS */}
            <section className="rounded-t-[60px] bg-[#f0f0f0] px-6 py-20 md:rounded-t-[100px]">
                <div className="container mx-auto flex flex-col gap-8 md:flex-row">
                    {/* Card 1 */}
                    <div className="flex-1 rounded-2xl bg-primary p-8 text-white shadow-xl">
                        <h3 className="mb-4 text-xl font-bold text-white">
                            What Founding Realtor Partners Receive
                        </h3>
                        <p className="mb-6 text-md leading-relaxed text-white font-medium">
                            As a Founding Partner, you receive early placement
                            and visibility before additional agents join the
                            platform.
                        </p>
                        <p className="mb-4 text-md font-bold text-[#d4a832]">
                            Included Benefits:
                        </p>
                        <ul className="space-y-3">
                            {[
                                'Featured property listings',
                                'Agent profile with contact information',
                                'Placement on Tennessee city pages',
                                'Exposure to motivated buyers',
                                'Priority consideration for future upgrades',
                                'Early positioning before launch traffic increases',
                            ].map((benefit, idx) => (
                                <li
                                    key={idx}
                                    className="flex items-start gap-3 text-md text-white font-medium"
                                >
                                    <span className="inline-flex items-center rounded-full bg-white p-1 text-black">
                                        <FaChevronRight size={12} />
                                    </span>
                                    {benefit}
                                </li>
                            ))}
                        </ul>
                        <p className="mt-4 text-md">
                            Early positioning before public launch traffic increases
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="flex-1 rounded-2xl bg-primary p-8 text-white shadow-xl">
                        <h3 className="mb-4 text-xl font-bold">
                            Limited Availability by City
                        </h3>
                        <p className="mb-4 text-md font-bold tracking-wider text-[#d4a832]">
                            To maintain quality and fairness:
                        </p>
                        <ul className="mb-8 space-y-3">
                            <li className="flex items-start gap-3 text-md text-white font-medium">
                                <span className="inline-flex items-center rounded-full bg-white p-1 text-black">
                                    <FaChevronRight size={12} />
                                </span>
                                Founding Partner spots are limited per city
                            </li>
                            <li className="flex items-start gap-3 text-sm text-white font-medium">
                                <span className="inline-flex items-center rounded-full bg-white p-1 text-black">
                                    <FaChevronRight size={12} />
                                </span>
                                Not all applicants will be accepted
                            </li>
                            <li className="flex items-start gap-3 text-sm text-white font-medium">
                                <span className="inline-flex items-center rounded-full bg-white p-1 text-black">
                                    <FaChevronRight size={12} />
                                </span>
                                Priority is given to licensed, active agents
                            </li>
                        </ul>
                        <p className="text-md">
                            Once spots are filled, future listings will be offered through paid plans.
                        </p>

                        <h3 className="mb-4 pt-4 text-xl font-bold">
                            No Long-Term Commitment
                        </h3>
                        <p className="mb-4 text-md font-bold tracking-wider text-white">
                            The Founding Partner Program:
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-sm text-white font-medium">
                                <XCircle
                                    size={18}
                                    className="shrink-0 text-secondary"
                                />
                                Has no long-term contracts
                            </li>
                            <li className="flex items-start gap-3 text-sm text-white font-medium">
                                <XCircle
                                    size={18}
                                    className="shrink-0 text-secondary"
                                />
                                Has no upfront listing fees during launch
                            </li>
                            <li className="flex items-start gap-3 text-sm text-white font-medium">
                                <span className="inline-flex items-center rounded-full bg-white p-1 text-black">
                                    <FaChevronRight size={12} />
                                </span>
                                Allows you to evaluate results risk-free
                            </li>
                        </ul>
                        <p className="mt-4 text-md text-white">
                            After launch, partners will have the option (not obligation) to continue with upgraded placement.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-primary-background">
                <div className="container mx-auto grid items-center gap-16 px-4 md:grid-cols-2 lg:px-16">
                    <div>
                        <h2 className="mb-4 text-xl md:text-2xl lg:text-4xl leading-tight font-bold sm:mb-5 md:mb-6">
                            Who This Is Best For
                        </h2>
                        <p className="mb-6 text-gray-600">This program is ideal for:</p>
                        <ul className="space-y-1">
                            {[
                                'Local realtors serving Tennessee markets',
                                'Agents working with relocation buyers',
                                'Professionals looking to expand online exposure',
                                'Agents seeking early positioning on a growing platform',
                            ].map((item, idx) => (
                                <li
                                    key={idx}
                                    className="flex items-center gap-3"
                                >
                                    <div className="h-2 w-2 rounded-full bg-black" />
                                    <span className="text-gray-700">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-8 text-gray-600">
                            Visitors come to WhyTennessee.com before choosing an agent — making this an ideal platform for early relationship building.
                        </p>
                    </div>

                    <div className="grid h-[500px] grid-cols-1 gap-4 md:grid-cols-2">
                        <img
                            src="https://whytennessee.com/wp-content/uploads/2026/01/Apartments-in-2048x1365.jpeg"
                            className="h-full w-full rounded-2xl object-cover shadow-lg"
                            alt="Tennessee Apartments"
                        />
                        <img
                            src="https://whytennessee.com/wp-content/uploads/2026/01/Jackson_TN_downtown1-1024x683.webp"
                            className="h-3/4 w-full self-end rounded-2xl object-cover shadow-lg"
                            alt="Downtown Jackson"
                        />
                    </div>
                </div>
            </section>

            {/* PROCESS STEPS */}
            <section className="bg-primary px-6 py-20">
                <h2 className="mb-16 text-center text-4xl font-bold text-white md:text-5xl">
                    How the Process Works
                </h2>
                <div className="container mx-auto grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                    {[
                        'Apply to become a Founding Realtor Partner',
                        'Complete a short verification process',
                        'Submit listings and profile details',
                        'Listings are reviewed and published',
                        'Begin receiving exposure as the platform grows',
                    ].map((step, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col items-center rounded-xl bg-white p-8 text-center"
                        >
                            <span className="mb-4 text-5xl leading-none font-black text-primary">
                                {idx + 1}
                            </span>
                            <p className="text-md leading-snug font-medium text-gray-700">
                                {step}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="bg-white px-6 py-20 text-center">
                <h2 className="mb-4 text-xl md:text-2xl lg:text-4xl font-bold text-primary">
                    Apply to Become a Founding Partner
                </h2>
                <p className="mb-8 text-gray-700">
                    Spots are limited and reviewed individually.
                </p>
                {!auth.user ? (
                    <>
                        <Link
                            href={route('user.choose')}
                            className="inline-flex items-center gap-2 rounded-full bg-[#d4a832] px-10 py-4 font-bold text-white transition-colors duration-300 hover:bg-secondary"
                        >
                            Apply Now
                            <span className="inline-flex items-center rounded-full bg-white p-1 text-black">
                                <FaChevronRight size={12} />
                            </span>
                        </Link>
                    </>
                ) : (
                    <>
                        <Link
                            href={route('user.dashboard')}
                            className="inline-flex items-center gap-2 rounded-full bg-secondary px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1"
                        >
                            Account
                            <span className="inline-flex items-center rounded-full bg-white p-1 text-black">
                                <FaChevronRight size={12} />
                            </span>
                        </Link>
                    </>
                )}
            </section>

            {/* DISCLAIMER */}
            <footer className="border-t border-white/5 bg-primary px-6 py-12 text-center">
                <h2 className="mb-4 text-2xl font-bold text-white">
                    Disclaimer
                </h2>
                <p className="mx-auto max-w-2xl text-md leading-relaxed text-white/80">
                    Participation in the WhYTennessee.com partner program does not guarantee leads, inquiries, or transactions. Placement, availability, and progam details may as the platform grows.
                </p>
            </footer>
        </div>
    );
};

export default Partner;
