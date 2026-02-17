export default function UtilitiesMonthlyBills() {
    return (
        <div>
            <div className="container mx-auto mt-20 mb-20 px-4 sm:px-6">
                <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-stretch">
                    <div className="w-full shrink-0 lg:w-1/2">
                        <img
                            src="/assets/images/pexels-kelly-4765246-2048x1151.jpg"
                            alt="Nashville Skyline"
                            className="h-72 w-full rounded-xl object-cover lg:h-full"
                        />
                    </div>

                    <div className="flex w-full flex-col justify-center py-4 lg:w-1/2">
                        <h2 className="mb-4 text-3xl font-semibold text-primary lg:text-4xl">
                            Utilities & Monthly Bills
                        </h2>

                        <p className="text-uted-foreground mb-5 text-lg">
                            Overall, utilities in Tennessee are considered it
                            right now.affordable, especially when compared to
                            high-cost states like California, New York, or
                            Florida.
                        </p>
                        <p className="text-uted-foreground mb-5 text-lg font-bold">
                            Factors that influence monthly costs include:
                        </p>

                        <ul className="mb-6 space-y-2">
                            <li className="flex items-center gap-2.5">
                                <svg
                                    aria-hidden="true"
                                    className="h-4 w-4 text-black"
                                    viewBox="0 0 512 512"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                                    ></path>
                                </svg>
                                <span className="text-uted-foreground text-sm">
                                    Home size and age
                                </span>
                            </li>
                            <li className="flex items-center gap-2.5">
                                <svg
                                    aria-hidden="true"
                                    className="h-4 w-4 text-black"
                                    viewBox="0 0 512 512"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                                    ></path>
                                </svg>
                                <span className="text-uted-foreground text-sm">
                                    Apartment vs single-family home
                                </span>
                            </li>
                            <li className="flex items-center gap-2.5">
                                <svg
                                    aria-hidden="true"
                                    className="h-4 w-4 text-black"
                                    viewBox="0 0 512 512"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                                    ></path>
                                </svg>
                                <span className="text-uted-foreground text-sm">
                                    City or rural location
                                </span>
                            </li>
                            <li className="flex items-center gap-2.5">
                                <svg
                                    aria-hidden="true"
                                    className="h-4 w-4 text-black"
                                    viewBox="0 0 512 512"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                                    ></path>
                                </svg>
                                <span className="text-uted-foreground text-sm">
                                    Seasonal energy usage (summer cooling, winter heating)
                                </span>
                            </li>
                        </ul>

                        <p className="text-uted-foreground mb-5 text-lg">
                            Tennessee’s mild climate helps keep utility bills
                            relatively stable throughout the year.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
