export default function WhyPeopleMove() {
    return (
        <section className="bg-[#f3f4f6] px-4 py-16 font-montserrat">
            <div className="mx-auto max-w-7xl">
                {/* Main Heading */}
                <h2 className="mb-12 text-center text-2xl font-bold text-[#1a1a1a] md:text-4xl">
                    Why People Move to Tennessee for Affordability
                </h2>

                <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2">
                    {/* Left Card: People relocating often cite */}
                    <div className="flex flex-col rounded-lg border-b-4 border-[#1e3a62] bg-white p-8 shadow-sm">
                        <p className="mb-6 text-lg text-gray-800">
                            People relocating to Tennessee often cite:
                        </p>
                        <ul className="mb-6 flex-grow space-y-3">
                            {[
                                'No state income tax',
                                'Affordable homeownership',
                                'Lower overall monthly expenses',
                                'Strong job opportunities',
                                'High quality of life',
                            ].map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-center gap-3 text-gray-700"
                                >
                                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-black"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <p className="leading-relaxed text-gray-800">
                            For many families, moving to Tennessee means{' '}
                            <span className="font-bold">
                                owning a home sooner
                            </span>
                            , reducing financial stress, and building long-term
                            stability.
                        </p>
                    </div>

                    {/* Right Card: Is Tennessee a Good Place? */}
                    <div className="flex flex-col rounded-lg border-b-4 border-[#1e3a62] bg-white p-8 shadow-sm">
                        <h3 className="mb-6 text-lg font-medium text-gray-800">
                            Is Tennessee a Good Place to Live on a Budget?
                        </h3>
                        <p className="mb-4 text-gray-700">
                            Yes — Tennessee offers one of the best{' '}
                            <span className="font-bold">
                                cost-of-living-to-quality-of-life ratios
                            </span>{' '}
                            in the U.S. It's especially attractive for:
                        </p>
                        <ul className="flex-grow space-y-3">
                            {[
                                'First-time homebuyers',
                                'Retirees',
                                'Remote workers',
                                'Families looking to stretch their budget',
                                'Investors seeking affordable real estate',
                            ].map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-center gap-3 text-gray-700"
                                >
                                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-black"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
