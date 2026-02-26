import React from 'react'

export default function WhoWeServe() {
    return (
        <div className="bg-background py-20 px-6 font-montserrat">
            <div className="container mx-auto">
                <div className="w-full max-w-5xl mx-auto text-center">

                    <h2 className="text-3xl sm:text-4xl md:text-[42px] text-secondary-foreground font-medium leading-tight mb-5">
                        Who We Serve
                    </h2>

                    <p
                        className="w-full sm:max-w-[60%] md:max-w-[60%] mx-auto text-sm sm:text-base font-normal text-secondary-foreground leading-relaxed">
                        We serve individuals, families, and investors exploring a move to Tennessee. Our audience includes
                        buyers, renters, and those relocating from out of state who want clear, reliable information before
                        making important housing decisions. WhyTennessee.com connects visitors with trusted local
                        professionals
                        and curated listings, helping them navigate each step of the relocation process with confidence.
                    </p>

                    <div className="w-[40%] sm:w-[30%] md:w-[25%] mx-auto border-t border-primary mt-4 mb-5"></div>

                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

                    <div
                        className="bg-background rounded-2xl border border-muted border-b-4 border-b-primary shadow-sm flex flex-col items-center text-center px-6 pt-10 pb-8">
                        <div className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center mb-6">
                            <svg className="w-7 h-7 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
                                <path d="M9 21V12h6v9" />
                            </svg>
                        </div>
                        <h3 className="text-primary font-medium text-xl">Home Buyers<br />&amp; Sellers</h3>
                    </div>

                    <div
                        className="bg-background rounded-2xl border border-muted border-b-4 border-b-primary shadow-sm flex flex-col items-center text-center px-6 pt-10 pb-8">
                        <div className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center mb-6">
                            <svg className="w-7 h-7 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="1" y="7" width="12" height="9" rx="1" />
                                <path d="M13 10h3l4 4v3h-7v-7z" />
                                <circle cx="4.5" cy="19" r="1.5" />
                                <circle cx="17.5" cy="19" r="1.5" />
                            </svg>
                        </div>
                        <h3 className="text-primary font-medium text-xl">Relocating Families<br />&amp;
                            Professionals</h3>
                    </div>
                    <div
                        className="bg-background rounded-2xl border border-muted border-b-4 border-b-primary shadow-sm flex flex-col items-center text-center px-6 pt-10 pb-8">
                        <div className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center mb-6">
                            <svg className="w-7 h-7 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="3" y="3" width="18" height="15" rx="1.5" />
                                <path d="M7 15v-4" />
                                <path d="M10 15v-6" />
                                <path d="M13 15v-3" />
                                <path d="M16 15v-7" />
                            </svg>
                        </div>
                        <h3 className="text-primary font-medium text-xl">Real Estate<br />Investors</h3>
                    </div>

                    <div
                        className="bg-background rounded-2xl border border-muted border-b-4 border-b-primary shadow-sm flex flex-col items-center text-center px-6 pt-10 pb-8">
                        <div className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-primary" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M546.2 9.7c-5.6-12.5-21.6-13-28.3-1.2C486.9 62.4 431.4 96 368 96h-80C182 96 96 182 96 288c0 7 .8 13.7 1.5 20.5C161.3 262.8 253.4 224 384 224c8.8 0 16 7.2 16 16s-7.2 16-16 16C132.6 256 26 410.1 2.4 468c-6.6 16.3 1.2 34.9 17.5 41.6 16.4 6.8 35-1.1 41.8-17.3 1.5-3.6 20.9-47.9 71.9-90.6 32.4 43.9 94 85.8 174.9 77.2C465.5 467.5 576 326.7 576 154.3c0-50.2-10.8-102.2-29.8-144.6z"></path></svg>
                        </div>
                        <h3 className="text-primary font-medium text-xl">Long-Term Value<br />&amp; Lifestyle
                            Alignment</h3>
                    </div>

                </div>
            </div>
        </div>
    )
}
