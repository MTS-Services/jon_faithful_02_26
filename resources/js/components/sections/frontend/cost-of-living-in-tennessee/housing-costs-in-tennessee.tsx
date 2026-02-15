export default function HousingCostsInTennessee() {
    return (
        <div>
            <div className="bg-primary px-4 py-12">
                <div className="mx-auto max-w-3xl rounded-2xl bg-white p-10">
                    <h2 className="primary-foreground mb-5 text-3xl font-semibold">
                        Housing Costs in Tennessee
                    </h2>
                    <p className="font-montserrat text-base font-normal">
                        Housing is the biggest reason people move to Tennessee.
                        <span className="font-bold">
                            {' '}
                            Average Home Prices
                        </span>{' '}
                        While prices vary by city, Tennessee remains affordable
                        compared to most states.
                    </p>

                    <div className="mt-5">
                        <div className="flex items-center gap-2">
                            <span className="mt-[6px] shrink-0">
                                <svg
                                    width="8"
                                    height="8"
                                    viewBox="0 0 8 8"
                                    fill="black"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle cx="4" cy="4" r="4" />
                                </svg>
                            </span>
                            <div className="">
                                <p className="font-montserrat text-base font-normal">
                                    Statewide mediam home price: ~$330,000
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="mt-[6px] shrink-0">
                                <svg
                                    width="8"
                                    height="8"
                                    viewBox="0 0 8 8"
                                    fill="black"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle cx="4" cy="4" r="4" />
                                </svg>
                            </span>
                            <div className="">
                                <p className="font-montserrat text-base font-normal">
                                    Lower-cost cities: Jackson, Memphis,
                                    Kingsport, Bristol
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="mt-[6px] shrink-0">
                                <svg
                                    width="8"
                                    height="8"
                                    viewBox="0 0 8 8"
                                    fill="black"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle cx="4" cy="4" r="4" />
                                </svg>
                            </span>
                            <div className="">
                                <p className="font-montserrat text-base font-normal">
                                    Higher-cost areas: Franklin, parts of
                                    Nashville
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <h2 className="mb-5 font-montserrat text-base font-bold">
                            Rent Costs{' '}
                        </h2>
                        <div className="flex items-center gap-2">
                            <span className="mt-[6px] shrink-0">
                                <svg
                                    width="8"
                                    height="8"
                                    viewBox="0 0 8 8"
                                    fill="black"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle cx="4" cy="4" r="4" />
                                </svg>
                            </span>
                            <div className="">
                                <p className="font-montserrat text-base font-normal">
                                    2-bedroom apartment (statewide average):
                                    $1,200–$1,600
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="mt-[6px] shrink-0">
                                <svg
                                    width="8"
                                    height="8"
                                    viewBox="0 0 8 8"
                                    fill="black"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle cx="4" cy="4" r="4" />
                                </svg>
                            </span>
                            <div className="">
                                <p className="font-montserrat text-base font-normal">
                                    Rent is generally lower in East and West
                                    Tennessee than Middle Tennessee
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="mb-5">
                            <a
                                href={route('frontend.home-for-sale')}
                                className="inline-block rounded-lg bg-[#1e3a62] px-8 py-3 font-medium text-white transition-colors hover:bg-secondary hover:text-primary"
                            >
                                Browse Homes for Sale in Tennessee
                            </a>
                        </div>

                        <div className="mt-5">
                            <a
                                href={route('frontend.rentals')}
                                className="inline-block rounded-lg bg-[#1e3a62] px-8 py-3 font-medium text-white transition-colors hover:bg-secondary hover:text-primary"
                            >
                                Browse Rentals in Tennessee
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
