export default function WhyTrust() {
    return (
        <div className="relative mt-10 flex min-h-[500px] w-full items-center justify-center overflow-hidden py-12 md:mt-20 md:py-20">
            <img
                src="/assets/images/pexels-kelly-34088068-1-scaled.jpg"
                alt="apartment-building-in-sunny-day-scaled"
                className="absolute top-0 left-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-foreground/50"></div>

            <div className="relative z-10 max-w-5xl px-4 sm:px-6 lg:px-8">
                <div className="rounded-xl bg-background p-8 text-center text-foreground shadow-2xl md:p-16">
                    <h2 className="mb-4 text-2xl font-semibold text-foreground md:mb-6 md:text-4xl">
                        Why Trust WhyTennessee.com?
                    </h2>

                    <p className="mb-8 font-montserrat text-sm leading-relaxed font-normal md:text-lg">
                        We focus exclusively on Tennessee. Unlike national
                        listing sites, we provide local insight, city-specific
                        guides, and relocation-focused information designed to
                        help people make smart decisions about where to live.
                    </p>
                    <h3 className="mb-4 text-xl font-bold tracking-wide text-foreground uppercase md:text-2xl">
                        Our mission is simple:
                    </h3>

                    <p className="font-montserrat text-lg font-medium text-muted-foreground md:text-xl">
                        Make moving to Tennessee easier, clearer, and more
                        informed.
                    </p>
                </div>
            </div>
        </div>
    );
}
