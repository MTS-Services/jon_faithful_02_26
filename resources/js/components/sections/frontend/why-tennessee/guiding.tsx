import React from 'react'

export default function Guiding() {
  return (
        <div className=" bg-muted px-4 py-16 md:py-36">

        <div className="container mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-12 font-montserrat">
            <div className="w-full relative mb-20 md:mb-0">
                <div className="rounded-2xl overflow-hidden shadow-lg w-[90%] md:w-full">
                    <img src="/assets/images/pexels-denil-33475257-2048x1366.jpg" alt="Tennessee Home"
                        className="w-full h-64 md:h-[400px] object-cover" />
                </div>

                <div className="absolute bottom-[-104px] right-0 w-[55%] md:w-[50%] rounded-2xl overflow-hidden shadow-2xl">
                    <img src="/assets/images/pexels-denil-33448751-2048x1366.jpg" alt="Apartment"
                        className="w-full h-32 md:h-48 object-cover" />
                </div>
            </div>

            <div className="w-full">
                <h2 className="max-w-[60%] text-3xl md:text-[42px] font-semibold text-text-secondary-foreground mb-6 leading-tight">
                    Guiding Smart Real Estate Decisions
                </h2>

                <p className="text-base font-medium text-muted-foreground mb-6">
                    We are a professional real estate platform built to support buyers, sellers, and investors with
                    clarity,
                    confidence, and strategic insight. Our role goes far beyond property listings — we help our clients
                    understand the market, evaluate opportunities, and make informed decisions that align with both
                    lifestyle and long-term value.
                </p>

                <p className="text-base font-medium text-muted-foreground">
                    To become a trusted authority in real estate by delivering reliable guidance, market intelligence,
                    and a
                    refined client experience. We believe great decisions are made when information, expertise, and
                    integrity come together.
                </p>

                <div className="mt-5">
                    <button
                        className="inline-block text-primary-foreground font-montserrat font-normal py-4 px-10 rounded-full bg-primary hover:bg-primary/80 transition-colors duration-300 shadow-xl">
                        Contact us
                    </button>
                </div>
            </div>
        </div>


    </div>
  )
}
