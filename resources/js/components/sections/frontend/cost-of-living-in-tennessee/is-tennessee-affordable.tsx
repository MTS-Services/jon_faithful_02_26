export default function IsTennesseeAffordable() {
    return (
        <div>
            <div className="bg-muted px-4 py-16 md:py-36">
                <div className="container mx-auto flex flex-col items-center gap-12 px-4 py-12 font-montserrat md:flex-row">
                    <div className="w-full">
                        <h2 className="mb-6 font-montserrat text-3xl font-semibold text-secondary-foreground">
                            Is Tennessee Affordable?
                        </h2>

                        <p className="mb-6 font-montserrat text-base font-normal text-secondary-foreground">
                            Yes — Tennessee consistently ranks below the national average for overall cost of living. 
                        </p>

                        <ul className="mb-2 ml-4 space-y-3">
                            <li className="flex items-start gap-3">
                                <span className="mt-[6px] shrink-0">
                                    <svg
                                        width="6"
                                        height="6"
                                        viewBox="0 0 8 8"
                                        fill="black"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle cx="4" cy="4" r="4" />
                                    </svg>
                                </span>
                                <p className="text-base text-secondary-foreground">
                                    <span className="text-base font-montserrat font-bold">U.S. Average Cost of Living Index: </span> 100
                                </p>
                            </li>

                            <li className="flex items-start gap-3">
                                <span className="mt-[6px] shrink-0">
                                    <svg
                                        width="6"
                                        height="6"
                                        viewBox="0 0 8 8"
                                        fill="black"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle cx="4" cy="4" r="4" />
                                    </svg>
                                </span>
                                <p className="text-base text-secondary-foreground">
                                    <span className="text-base font-montserrat font-bold">Tennessee Cost of Living Index:</span> ~89–91 
                                </p>
                            </li>
                        </ul>

                        <p className="text-base text-secondary-foreground">
                            That means most everyday expenses in Tennessee cost <span className="text-base font-montserrat font-bold">9–11% less than the national average. </span>
                        </p>
                    </div>

                    <div className="relative mb-20 w-full md:mb-0">
                        <div className="w-[90%] overflow-hidden rounded-2xl shadow-lg md:w-full">
                            <img
                                src="/assets/images/Aerial-View-of-Murfreesboro_-Tennessee-at-Sunrise-2048x1364 (1).jpeg"
                                alt="Tennessee Home"
                                className="h-64 w-full object-cover md:h-[400px]"
                            />
                        </div>

                        <div className="absolute right-0 bottom-[-104px] w-[55%] overflow-hidden rounded-2xl shadow-2xl md:w-[50%] border-4 border-white">
                            <img
                                src="/assets/images/pexels-kelly-2833713-2048x1150.jpg"
                                alt="Apartment"
                                className="h-32 w-full object-cover md:h-48"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
