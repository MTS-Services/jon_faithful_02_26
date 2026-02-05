export default function HealthcareTransportationCosts() {
    // Apnar deya SVG check icon
    const CheckIcon = () => (
        <svg
            width="10"
            height="10"
            viewBox="0 0 8 8"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="4" cy="4" r="4" />
        </svg>
    );

    return (
        <div
            className="relative bg-cover bg-fixed bg-center px-6 py-20 font-montserrat"
            style={{
                backgroundImage:
                    "url('/assets/images/pexels-caleb-clark-6462955-32767698-scaled.jpg')",
            }}
        >
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black/80"></div>

            <div className="relative z-10 mx-auto container">
                {/* Main Heading */}
                <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl">
                    Healthcare & Transportation Costs
                </h2>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {/* Transportation Costs Card */}
                    <div className="rounded-xl border border-white/20 bg-[#ffffff2e] p-8 text-white">
                        <h3 className="mb-4 border-b border-white/20 pb-2 text-2xl font-bold">
                            Transportation Costs
                        </h3>
                        <p className="mb-6 text-sm opacity-90">
                            Transportation in Tennessee is generally affordable
                            due to:
                        </p>
                        <ul className="space-y-3">
                            {[
                                'Lower gas prices than the national average',
                                'Minimal toll roads across most of the state',
                                'Shorter commute times outside major cities',
                                'Lower vehicle registration and ownership costs',
                                'Limited reliance on public transportation, reducing transit expenses',
                            ].map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-3 text-sm"
                                >
                                    <CheckIcon />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-6 text-sm leading-relaxed italic opacity-80">
                            For most residents, owning a vehicle is essential,
                            but overall transportation expenses remain
                            manageable compared to many other states.
                        </p>
                    </div>

                    {/* Healthcare Costs Card */}
                    <div className="rounded-xl border border-white/20 bg-[#ffffff2e] p-8 text-white">
                        <h3 className="mb-4 border-b border-white/20 pb-2 text-2xl font-bold">
                            Healthcare Costs
                        </h3>
                        <p className="mb-6 text-sm opacity-90">
                            Healthcare costs in Tennessee are close to or
                            slightly below national averages.
                        </p>
                        <ul className="space-y-4">
                            {[
                                'Strong healthcare systems across the state',
                                'Major hubs include Nashville, Knoxville, Chattanooga, Memphis, and Johnson City',
                                'Many residents relocate specifically for healthcare employment and access',
                            ].map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-3 text-sm"
                                >
                                    <CheckIcon />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
