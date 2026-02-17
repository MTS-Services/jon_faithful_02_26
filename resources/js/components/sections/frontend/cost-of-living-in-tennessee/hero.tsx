export default function Hero() {
    return (
        <div>
            <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden sm:h-[400px] md:h-[500px]">
                <img
                    src="/assets/images/pexels-chaitaastic-3722911-scaled.jpg"
                    alt="Apartment building in Tennessee"
                    className="absolute top-0 left-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-foreground/60"></div>

                <div className="relative z-10 container mx-auto px-4 sm:px-6">
                    <div className="max-w-3xl text-background">
                        <h2 className="mb-4 font-montserrat text-2xl md:text-[50px] font-semibold text-background sm:mb-5 sm:text-3xl md:mb-6 md:text-4xl lg:text-5xl">
                            Cost of Living in Tennessee
                        </h2>

                        <p className="mb-4 font-montserrat text-base leading-relaxed font-semibold text-background sm:mb-5 sm:text-base md:mb-6">
                            Housing, Taxes, Utilities, Groceries & Real-World
                            Expenses
                        </p>

                        <p className="mb-4 font-montserrat text-base leading-relaxed font-normal text-background sm:mb-5 sm:text-base md:mb-6">
                            Tennessee is widely recognized as one of the most
                            affordable states to live in the U.S. With no state
                            income tax, reasonable housing prices, and
                            below-average living expenses, Tennessee continues
                            to attract people relocating from higher-cost states
                            like California, New York, Illinois, Florida, and
                            Texas.
                        </p>
                        <p className="mb-4 hidden font-montserrat text-base leading-relaxed font-normal text-background sm:mb-5 sm:block sm:text-base md:mb-6">
                            This guide breaks down the true cost of living in
                            Tennessee, including housing, taxes, utilities,
                            groceries, transportation, and regional differences.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
