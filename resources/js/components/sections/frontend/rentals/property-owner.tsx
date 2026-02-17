export default function PropertyOwner() {
    return (
        <div className="relative flex min-h-[450px] w-full items-center justify-center overflow-hidden md:h-[500px]">
            <img
                src="/assets/images/Businessman-holding.jpeg"
                alt="Property Management"
                className="absolute top-0 left-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative z-10 container mx-auto">
                <div className="text-center text-background md:text-left">
                    <div className="max-w-5xl">
                        <h2 className="mb-6 font-montserrat text-3xl font-semibold md:text-[42px]"> 
                            Are You a Property Owner or Manager?
                        </h2>

                        <p className="mb-8 font-montserrat text-base font-medium">
                           If you have rentals available and want to reach people actively moving to Tennessee:
                        </p>

                        <a
                            href={route('frontend.list-rental-property')}
                            className="inline-block rounded-full bg-[#1f3a68] px-10 py-4 font-montserrat font-medium text-text-primary-foreground shadow-xl transition-colors duration-300 hover:bg-primary/80 text-lg"
                        >
                            List a Rental Property
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
