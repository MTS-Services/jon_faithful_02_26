import React from 'react';

const ConfidenceCTA: React.FC = () => {
    return (
        <section className="py-12 bg-[#1F3A68] border-t border-gray-100">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-4 leading-tight">
                            Start Your Move to <br /> Tennessee with Confidence
                        </h2>
                        <p className="text-white/90 text-lg">
                            Explore cities, compare lifestyles, browse homes, and connect with local experts.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-center md:justify-end items-center gap-4">
                        <a
                            href="#"
                            className="w-full sm:w-auto bg-white hover:bg-[#C9A249] text-[#1F3A68] hover:text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 flex items-center justify-center shadow-lg"
                        >
                            Explore Cities <span className="ml-2">➔</span>
                        </a>
                        <a
                            href="#"
                            className="w-full sm:w-auto bg-white hover:bg-[#C9A249] text-[#1F3A68] hover:text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 flex items-center justify-center shadow-lg"
                        >
                            Search Homes <span className="ml-2">➔</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ConfidenceCTA;