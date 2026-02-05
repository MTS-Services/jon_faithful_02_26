import React from 'react';

export default function TaxesInTennessee() {
    return (
        <section className="bg-white py-20 px-4 md:px-10 lg:px-20 font-montserrat">
            <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
                
                {/* Text Content Area */}
                <div className="w-full md:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#2d3748] mb-6">
                        Taxes in Tennessee
                    </h2>

                    <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                        Tennessee is one of the most tax-friendly states in the country. 
                        <span className="font-bold text-black ml-1">No State Income Tax</span>
                    </p>

                    <p className="text-gray-700 mb-4">
                        Tennessee does not tax earned income. Huge benefit for:
                    </p>

                    {/* Income Tax List */}
                    <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700 mb-8">
                        <li>Remote workers</li>
                        <li>Business owners
                            <ul className="list-[circle] list-inside ml-8 mt-1 space-y-1">
                                <li>Retirees</li>
                                <li>High-income earners</li>
                            </ul>
                        </li>
                    </ul>

                    {/* Property Taxes Section */}
                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-black mb-3">Property Taxes</h3>
                        <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
                            <li>Property taxes are <span className="font-bold text-black">well below the national average</span></li>
                            <li>Rates vary by county but remain affordable statewide</li>
                        </ul>
                    </div>

                    {/* Sales Tax Section */}
                    <div>
                        <h3 className="text-xl font-bold text-black mb-3">Sales Tax</h3>
                        <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
                            <li>State sales tax: <span className="font-bold text-black">7%</span></li>
                            <li>Local taxes may apply (usually 2–2.75%)</li>
                            <li>Groceries are taxed at a lower rate than non-food items</li>
                        </ul>
                    </div>
                </div>

                {/* Image Area */}
                <div className="w-full md:w-1/2">
                    <div className="relative group">
                      
                    
                        <div className=" overflow-hidden rounded-xl border-4 shadow-2xl">
                            <img
                                src="/assets/images/pexels-mineiamartins-32775636-2048x1365.jpg"
                                alt="Nashville Tennessee Cityscape"
                                className="w-full h-[350px] md:h-[500px] object-cover"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}