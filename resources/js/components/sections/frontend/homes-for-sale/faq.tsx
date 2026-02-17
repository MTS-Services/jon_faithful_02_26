import React from 'react'

export default function FAQ() {
  return (
        <div className="bg-primary-background  px-4 py-12 sm:px-6 lg:px-8 rounded-t-[100px]">
        <div className="container mx-auto">
          
            <div className="text-center mb-8">
                <p className="text-primary font-normal font-montserrat text-sm mb-2">FAQs</p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary">Frequently Asked Questions
                </h1>
            </div>

           
            <div className="space-y-4">
              
                <details className="group overflow-hidden">
                    <summary
                        className="flex justify-between items-center cursor-pointer px-6 py-5 text-primary-foreground font-medium text-base sm:text-lg list-none bg-primary rounded-lg">
                        <span>Are homes for sale in Tennessee affordable compared to other states?</span>
                        <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none"
                            stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </summary>
                    <div className="bg-[#faf7ef] px-6 pb-5 text-gray-200 text-base">
                        <p className=" text-primary mt-2">Yes. Overall, Tennessee’s housing prices are typically lower
                            than the national average, especially in cities like Johnson City, Kingsport, Bristol,
                            Clarksville, Cookeville, Jackson, and many areas around Memphis. Some suburbs of Nashville
                            and Franklin are more expensive but often offer top-tier schools and amenities.</p>

                        <div className="border mt-4"></div>
                    </div>
                </details>
                <details className="group overflow-hidden">
                    <summary
                        className="flex justify-between items-center cursor-pointer px-6 py-5 text-primary-foreground font-medium text-base sm:text-lg list-none bg-primary rounded-lg">
                        <span>Which Tennessee cities are best for first-time homebuyers?</span>
                        <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none"
                            stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </summary>
                    <div className="bg-[#faf7ef] px-6 pb-5 text-gray-200 text-base">
                        <p className=" text-primary mt-2">Great options for first-time buyers include Clarksville,
                            Murfreesboro, Cookeville, Kingsport, Bristol, Jackson, and parts of Knoxville and
                            Chattanooga. These areas often have a good mix of affordable homes, stable job markets, and
                            growing communities.</p>
                        <div className="border mt-4"></div>
                    </div>
                </details>
                <details className="group overflow-hidden">
                    <summary
                        className="flex justify-between items-center cursor-pointer px-6 py-5 text-primary-foreground font-medium text-base sm:text-lg list-none bg-primary rounded-lg">
                        <span>What’s the real estate market like right now in Tennessee?</span>
                        <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none"
                            stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </summary>
                    <div className="bg-[#faf7ef] px-6 pb-5 text-gray-200 text-base">
                        <p className=" text-primary mt-2">While each city is different, many Tennessee markets remain
                            active and competitive due to strong in-migration and job growth. Inventory may fluctuate by
                            season, so it’s important to work with a local realtor who understands current trends in
                            your target city.</p>
                        <div className="border mt-4"></div>
                    </div>
                </details>
                <details className="group overflow-hidden">
                    <summary
                        className="flex justify-between items-center cursor-pointer px-6 py-5 text-primary-foreground font-medium text-base sm:text-lg list-none bg-primary rounded-lg">
                        <span>Can I buy a home in Tennessee if I’m moving from out of state?</span>
                        <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none"
                            stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </summary>
                    <div className="bg-[#faf7ef] px-6 pb-5 text-gray-200 text-base">
                        <p className=" text-primary mt-2">Absolutely. Many buyers purchase homes while relocating from other states. Local agents can provide virtual tours, video walk-throughs, and help you manage inspections, paperwork, and closing remotely.</p>
                        <div className="border mt-4"></div>
                    </div>
                </details>
                <details className="group overflow-hidden">
                    <summary
                        className="flex justify-between items-center cursor-pointer px-6 py-5 text-primary-foreground font-medium text-base sm:text-lg list-none bg-primary rounded-lg">
                        <span>How do I get connected with a Tennessee realtor?</span>
                        <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none"
                            stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </summary>
                    <div className="bg-[#faf7ef] px-6 pb-5 text-gray-200 text-base">
                        <p className=" text-primary mt-2">Every listing on WhyTennessee.com includes direct contact
                            information for the local realtor. You can also visit our [Find a Tennessee Realtor] page to
                            get matched with an agent in your target city.</p>
                        <div className="border mt-4"></div>
                    </div>
                </details>
                <details className="group overflow-hidden">
                    <summary
                        className="flex justify-between items-center cursor-pointer px-6 py-5 text-primary-foreground font-medium text-base sm:text-lg list-none bg-primary rounded-lg">
                        <span>Start Your Tennessee Home Search Today</span>
                        <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none"
                            stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </summary>
                    <div className="bg-[#faf7ef] px-6 pb-5 text-gray-200 text-base">
                        <p className=" text-primary mt-2">Whether you’re ready to buy now or just starting to explore,
                            this page is your central hub for homes for sale in Tennessee. Use the search filters,
                            browse listings, and connect with trusted local agents to find the right home for your
                            budget and lifestyle.</p>
                        <div className="border mt-4"></div>
                    </div>
                </details>
            </div>
        </div>
    </div>
  )
}
