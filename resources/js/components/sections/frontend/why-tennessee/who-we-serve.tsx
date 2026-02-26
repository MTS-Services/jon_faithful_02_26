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
                        <div className="w-16 h-16 rounded-full border-3 border-primary flex items-center justify-center mb-6">
                            <svg aria-hidden="true" className="w-8 h-8 text-primary" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path></svg>
                        </div>
                        <h3 className="text-primary font-medium text-xl">Home Buyers<br />&amp; Sellers</h3>
                    </div>

                    <div
                        className="bg-background rounded-2xl border border-muted border-b-4 border-b-primary shadow-sm flex flex-col items-center text-center px-6 pt-10 pb-8">
                        <div className="w-16 h-16 rounded-full border-3 border-primary flex items-center justify-center mb-6">
                            <svg aria-hidden="true" className="w-8 h-8 text-primary" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h16c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z"></path></svg>
                        </div>
                        <h3 className="text-primary font-medium text-xl">Relocating Families<br />&amp;
                            Professionals</h3>
                    </div>
                    <div
                        className="bg-background rounded-2xl border border-muted border-b-4 border-b-primary shadow-sm flex flex-col items-center text-center px-6 pt-10 pb-8">
                        <div className="w-16 h-16 rounded-full border-3 border-primary flex items-center justify-center mb-6">
                            <svg aria-hidden="true" className="w-8 h-8 text-primary" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M332.8 320h38.4c6.4 0 12.8-6.4 12.8-12.8V172.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-288 0h38.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zM496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"></path></svg>
                        </div>
                        <h3 className="text-primary font-medium text-xl">Real Estate<br />Investors</h3>
                    </div>

                    <div
                        className="bg-background rounded-2xl border border-muted border-b-4 border-b-primary shadow-sm flex flex-col items-center text-center px-6 pt-10 pb-8">
                        <div className="w-16 h-16 rounded-full border-3 border-primary flex items-center justify-center mb-6">
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
