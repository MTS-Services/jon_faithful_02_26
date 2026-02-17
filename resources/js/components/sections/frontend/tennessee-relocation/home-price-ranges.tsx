export default function HomePriceRanges() {
    return (
        <div className="bg-primary px-6 py-16">
            <h2 className="mb-12 text-center font-montserrat text-3xl font-bold text-background md:text-4xl">
                Home Price Ranges by Tennessee Region
            </h2>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    <div className="rounded-2xl border border-muted shadow-sm">
                        <div className="h-[300px]">
                            <img
                                src="/assets/images/Aerial-View-over-the-Buildings.jpeg"
                                alt="East Tennessee aerial view"
                                className="h-full rounded-2xl object-cover"
                            />
                        </div>
                        <div className="rounded-b-2xl bg-background p-4">
                            <h2 className="mb-4 font-montserrat text-2xl font-semibold">
                                East Tennessee
                            </h2>
                            <p className="font-medium mb-4 font-montserrat text-base text-secondary-foreground">
                                Typical Range: $200,000 - $450,000
                            </p>
                            <p className="mb-6 font-montserrat text-base font-normal text-secondary-foreground">
                                Cities such as Knoxville, Johnson City, Kingsport, and Bristol offer strong affordability with access to outdoor recreation and healthcare.
                            </p>
                            <div className="space-y-3">
                                <div className="font-montserrat text-base font-normal text-secondary-foreground">
                                    <span className="mr-2">»</span>
                                    Entry-level homes widely available
                                </div>
                                <div className="font-montserrat text-base font-normal text-secondary-foreground">
                                    <span className="mr-2">»</span>
                                    Moderate demand in growing cities
                                </div>
                                <div className="font-montserrat text-base font-normal text-secondary-foreground">
                                    <span className="mr-2">»</span>
                                    Popular with retirees and families
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-2xl border border-muted shadow-sm">
                        <div className="h-[300px]">
                            <img
                                src="/assets/images/Aerial-View-of-Murfreesboro_-Tennessee-at-Sunrise-2048x1364.jpeg"
                                alt="Middle Tennessee aerial view"
                                className="h-full rounded-2xl object-cover"
                            />
                        </div>
                        <div className="rounded-b-2xl bg-background p-4">
                            <h2 className="mb-4 font-montserrat text-2xl font-semibold">
                                Middle Tennessee
                            </h2>
                            <p className="font-medium mb-4 font-montserrat text-base text-secondary-foreground">
                                Typical Range: $350,000 - $700,000+
                            </p>
                            <p className="mb-6 font-montserrat text-base font-normal text-secondary-foreground">
                                Middle Tennessee is the most expensive region due to job growth and population demand.
                            </p>
                            <div className="space-y-3">
                                <div className="font-montserrat text-base font-normal text-secondary-foreground">
                                    <span className="mr-2">»</span>
                                    Nashville, Franklin, and surrounding suburbs command higher prices
                                </div>
                                <div className="font-montserrat text-base font-normal text-secondary-foreground">
                                    <span className="mr-2">»</span>
                                    Competitive market in desirable areas
                                </div>
                                <div className="font-montserrat text-base font-normal text-secondary-foreground">
                                    <span className="mr-2">»</span>
                                    Strong new construction activity
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-2xl border border-muted shadow-sm">
                        <div className="h-[300px]">
                            <img
                                src="/assets/images/Aerial_View_of_Franklin__Tennessee_during_Spring1-2048x1364.jpeg"
                                alt="West Tennessee aerial view"
                                className="h-full rounded-2xl object-cover"
                            />
                        </div>
                        <div className="rounded-b-2xl bg-background p-4">
                            <h2 className="mb-4 font-montserrat text-2xl font-semibold">
                                West Tennessee
                            </h2>
                            <p className="font-medium mb-4 font-montserrat text-base text-secondary-foreground">
                                Typical Range: $180,000 - $400,000
                            </p>
                            <p className="mb-6 font-montserrat text-base font-normal text-secondary-foreground">
                                West Tennessee remains one of the most affordable regions, especially outside of select Memphis neighborhoods.
                            </p>
                            <div className="space-y-3">
                                <div className="font-montserrat text-base font-normal text-secondary-foreground">
                                    <span className="mr-2">»</span>
                                    Urban and suburban affordability
                                </div>
                                <div className="font-montserrat text-base font-normal text-secondary-foreground">
                                    <span className="mr-2">»</span>
                                    Popular with investors and first-time buyers
                                </div>
                                <div className="font-montserrat text-base font-normal text-secondary-foreground">
                                    <span className="mr-2">»</span>
                                    Stable long-term housing demand
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
