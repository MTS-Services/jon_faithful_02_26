export default function StartYourMove() {
    return (
        <section className="flex flex-col items-center justify-between gap-8 bg-primary px-4 py-10 sm:px-6 md:flex-row md:items-center md:px-16">
            {/* Text */}
            <div className="container">
                <div className="max-w-2xl text-center text-primary-foreground md:text-left">
                    <h2 className="mb-4 font-montserrat text-2xl leading-tight font-semibold sm:text-3xl md:text-4xl">
                        Start Your Move to <br className="hidden sm:block" />{' '}
                        Tennessee with Confidence
                    </h2>
                    <p className="font-montserrat text-sm font-normal sm:text-base">
                        Explore cities, compare lifestyles, browse homes, and
                        connect with local experts.
                    </p>
                </div>

                {/* Buttons */}
                <div className="flex w-full flex-col gap-4 sm:flex-row md:w-auto">
                    <a
                        href="#"
                        className="group flex w-full items-center justify-center gap-2 rounded-full bg-background px-6 py-4 text-sm font-semibold whitespace-nowrap text-text-primary transition-all hover:bg-secondary hover:text-primary-foreground sm:w-auto sm:text-base"
                    >
                        Explore Tennessee Cities
                        <span className="rounded-full bg-secondary-foreground p-1 text-primary-foreground transition-colors group-hover:bg-background group-hover:text-secondary">
                            <svg
                                className="h-4 w-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                            </svg>
                        </span>
                    </a>

                    <a
                        href="#"
                        className="group flex w-full items-center justify-center gap-2 rounded-full bg-background px-6 py-4 text-sm font-semibold whitespace-nowrap text-text-primary transition-all hover:bg-secondary hover:text-primary-foreground sm:w-auto sm:text-base"
                    >
                        Search Homes for Sale in Tennessee
                        <span className="rounded-full bg-secondary-foreground p-1 text-primary-foreground transition-colors group-hover:bg-background group-hover:text-secondary">
                            <svg
                                className="h-4 w-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                            </svg>
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
}
