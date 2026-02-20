export default function Hero() {
    return (
        <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden bg-foreground">
            <video
                className="absolute top-0 left-0 h-full w-full object-cover"
                autoPlay
                muted
                loop
            >
                <source
                    src="https://whytennessee.com/wp-content/uploads/2025/12/Dolly-Zoom-into-a-Countryside-Family-Home-with-a-Pool.mp4"
                    type="video/mp4"
                />
            </video>
            <div className="absolute inset-0 bg-black/40 z-10" />
            <div className="container">
                <div className="relative z-10 px-4 text-center md:px-16">
                    <div className="md:w-3/ mx-auto w-full">
                        <h2 className="mb-4 font-montserrat text-3xl font-semibold text-primary-foreground uppercase md:text-5xl">
                            Homes for Sale in Tennessee | Search Tennessee Real
                            Estate & Houses by City
                        </h2>
                    </div>
                    <div className="mx-auto w-full md:w-2/3 lg:w-[70%]">
                        <p className="font-montserrat text-base leading-relaxed text-primary-foreground md:text-lg">
                            Browse homes for sale in Tennessee by city, price,
                            beds, and baths. Explore Tennessee real estate in
                            Knoxville, Nashville, Chattanooga, Johnson City,
                            Kingsport, Bristol, Memphis, Franklin, Clarksville,
                            Murfreesboro, Cookeville, Jackson, and more.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
