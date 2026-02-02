import React from 'react'

export default function CostOfLiving() {
  return (
    <div className="max-w-7xl mx-auto px-4 text-center mt-20">
        <h2 className="text-2xl sm:text-3xl md:text-[42px] font-bold font-montserrat text-text-primary mb-2">Cost of Living in Chattanooga</h2>
        <p className="text-sm sm:text-base text-text-primary font-normal font-montserrat mb-6 sm:mb-10">Chattanooga offers strong value compared to similar scenic cities.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="rounded-xl overflow-hidden shadow-md">
                <div className="bg-[#1f3a68] text-white py-3 sm:py-4 font-semibold text-lg sm:text-xl lg:text-2xl px-4">
                    Median home price</div>
                <div className="bg-gray-50 py-6 sm:py-10 text-2xl sm:text-3xl font-extrabold font-montserrat text-[#555]">
                    $220,000</div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-md">
                <div className="bg-[#1f3a68] text-white py-3 sm:py-4 font-semibold text-lg sm:text-xl lg:text-2xl px-4">
                    2-bedroom apartment</div>
                <div className="bg-gray-50 py-6 sm:py-10 text-2xl sm:text-3xl font-extrabold font-montserrat text-[#555]">
                    $900–$1,200</div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-md">
                <div className="bg-[#1f3a68] text-white py-3 sm:py-4 font-semibold text-lg sm:text-xl lg:text-2xl px-4">
                    Utilities</div>
                <div className="bg-gray-50 py-6 sm:py-10 text-sm sm:text-base font-normal font-montserrat text-[#555]">Below
                    national average</div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-md">
                <div className="bg-[#1f3a68] text-white py-3 sm:py-4 font-semibold text-lg sm:text-xl lg:text-2xl px-4">
                    Property taxes</div>
                <div className="bg-gray-50 py-6 sm:py-10 text-sm sm:text-base font-normal font-montserrat text-[#555]">Very
                    low</div>
            </div>
        </div>
    </div>
  )
}
