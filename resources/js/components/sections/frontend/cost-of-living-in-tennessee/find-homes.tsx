export default function FindHomes() {
    return (
        <section className="bg-white px-4 py-20 font-montserrat md:px-10 lg:px-20">
            <div className="container mx-auto flex flex-col items-center gap-12 md:flex-row">
                {/* Image Area */}
                <div className="w-full md:w-1/2">
                    <div className="group relative">
                        <div className="overflow-hidden rounded-xl border-4 shadow-2xl">
                            <img
                                src="/assets/images/pexels-caleb-clark-6462955-32767698-scaled (1).jpg"
                                alt="Nashville Tennessee Cityscape"
                                className="h-[350px] w-full object-cover md:h-[500px]"
                            />
                        </div>
                    </div>
                </div>
                {/* Text Content Area */}
                <div className="w-full md:w-1/2">
                    <h2 className="mb-6 text-3xl font-bold text-[#2d3748] md:text-4xl">
                        Find Homes & Realtors in Tennessee
                    </h2>

                    <p className="mb-6 text-lg leading-relaxed text-gray-700">
                        Whether you’re just researching or ready to move,
                        WhyTennessee.com helps you:
                    </p>

                    <p className="mb-4 text-gray-700">
                        Whether you’re just researching or ready to move, WhyTennessee.com helps you: 
                    </p>

                    {/* Income Tax List */}
                    <ul className="mb-8 ml-4 list-inside list-disc space-y-1 text-gray-700">
                        <li>Compare cities </li>
                        <li>Browse homes for sale </li>
                        <li>Connect with trusted local realtors </li>
                    </ul>
                    <div className="mt-5">
                        <div className="">
                            <button className="cursor-pointer rounded-lg bg-[#1e3a62] px-8 py-3 font-medium text-white transition-colors hover:bg-secondary hover:text-primary">
                                View Homes for Sale in Tennessee
                            </button>
                        </div>
                        <div className="mt-5">
                            <button className="cursor-pointer rounded-lg bg-[#1e3a62] px-8 py-3 font-medium text-white transition-colors hover:bg-secondary hover:text-primary">
                                Explore the Best Places to Live in Tennessee
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
