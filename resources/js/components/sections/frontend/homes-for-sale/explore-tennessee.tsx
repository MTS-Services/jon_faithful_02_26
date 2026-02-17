import { ArrowRightIcon } from "lucide-react";
import InfoTabsSection from "../cities/info-tabs-section";
import { vi } from "date-fns/locale";
import VideoTabsSection from "../cities/video-tabs-section";


const tabs = [
    {
        id: 'tab1',
        label: 'East Tennessee Homes for Sale',
        title: 'East Tennessee Homes for Sale',
        intro: 'East Tennessee is known for its mountain views, lakes, and outdoor lifestyle. Popular East Tennessee markets include:',
        items: [
            'Knoxville homes for sale – college town energy, strong job market, nearby lakes.',
            'Johnson City homes for sale – affordable mountain living, great schools, healthcare hub.',
            'Kingsport homes for sale – quiet neighborhoods, family-friendly communities.',
            'Bristol homes for sale – low cost of living, historic downtown, raceway events.',
            'Chattanooga homes for sale – riverfront lifestyle, tech jobs, incredible outdoor access.',
        ],
        footer: 'Whether you want a downtown condo, a suburban family home, or a cabin with a view of the mountains, East Tennessee has options at a range of price points.',
        videoUrl: 'https://whytennessee.com/wp-content/uploads/2025/12/Evening-aerial-flyby-of-scenic-rural-home-surrounded-by-trees-in-Springtime.mp4',
    },
    {
        id: 'tab2',
        label: 'Middle Tennessee Homes for Sale',
        title: 'Middle Tennessee Homes for Sale',
        intro: 'Middle Tennessee is one of the fastest-growing regions in the country, thanks to a booming economy and strong job growth. Key markets include:',
        items: [
            'Nashville homes for sale – music, healthcare, tech, and endless entertainment.',
            'Franklin homes for sale – top-rated schools, luxury neighborhoods, historic charm.',
            'Murfreesboro homes for sale – fast-growing, family-friendly, convenient to Nashville.',
            'EClarksville homes for sale – military community, excellent value, new construction.',
        ],
        footer: 'If you’re looking for opportunity, nightlife, and long-term appreciation, Middle Tennessee offers some of the best real estate in the state.',
        videoUrl: 'https://whytennessee.com/wp-content/uploads/2025/12/Evening-aerial-flyby-of-scenic-rural-home-surrounded-by-trees-in-Springtime.mp4',
    },
    {
        id: 'tab3',
        label: 'West Tennessee Homes for Sale',
        title: 'West Tennessee Homes for Sale',
        intro: 'West Tennessee offers some of the most affordable homes for sale in the entire state, along with rich culture and central access. Top West Tennessee markets:',
        items: [
            'Memphis homes for sale – deep music history, diverse neighborhoods, very low prices.',
            'Jackson homes for sale – affordable cost of living, small-city convenience, easy access to larger metros.',
        ],
        footer: 'For buyers focused on stretching their budget or investing in rental properties, West Tennessee can provide excellent value.',
        videoUrl: 'https://whytennessee.com/wp-content/uploads/2025/12/Evening-aerial-flyby-of-scenic-rural-home-surrounded-by-trees-in-Springtime.mp4',
    },
];
export default function ExploreTennessee() {
    return (
        <div className="rounded-t-[100px] bg-primary-background px-4 py-12 sm:py-16 md:px-16 md:py-20 lg:py-28">
            <div className="container mx-auto">
                <div className="mx-auto mb-8 max-w-xl text-center">
                    <h2 className="mb-4 font-montserrat text-2xl font-bold text-text-secondary-foreground md:text-[42px]">
                        Explore Tennessee Real Estate by Region
                    </h2>
                    <p className="mt-10 font-montserrat text-sm font-normal text-text-secondary-foreground md:text-base">
                        Tennessee offers an incredible variety of housing
                        options — from affordable starter homes to luxury
                        properties and mountain cabins. Use this page to explore
                        real estate across the three main regions of the state.
                    </p>
                </div>

                {/* <div className="mb-8 flex flex-col justify-center gap-4 md:flex-row">
                    <button className="mb-2 rounded-full bg-primary p-4 text-center font-montserrat text-base font-normal text-primary-foreground">
                        East Tennessee Homes for Sale
                    </button>
                    <button className="rounded-full border border-muted-foreground bg-primary-foreground px-6 py-2 text-text-secondary-foreground transition hover:bg-primary hover:text-primary-foreground">
                        Middle Tennessee Homes for Sale
                    </button>
                    <button className="rounded-full border border-muted-foreground bg-primary-foreground px-6 py-2 text-text-secondary-foreground transition hover:bg-primary hover:text-primary-foreground">
                        West Tennessee Homes for Sale
                    </button>
                </div> */}

                <VideoTabsSection tabs={tabs} />
                {/* <div
                className="bg-primary-foreground shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row gap-16 md:gap-6 p-4 md:p-6">

                <div className="">
                    <video className="rounded-lg" controls>
                        <source className=""
                            src="https://whytennessee.com/wp-content/uploads/2025/12/Evening-aerial-flyby-of-scenic-rural-home-surrounded-by-trees-in-Springtime.mp4"
                            type="video/mp4" />
                    </video>
                </div>


                <div className="flex flex-col justify-center">
                    <h3 className="text-[25px] text-[#333] font-medium font-montserrat mb-2">East Tennessee Homes for Sale
                    </h3>
                    <p className="text-base font-montserrat font-normal text-text-secondary-foreground mb-2">
                        East Tennessee is known for its mountain views, lakes, and outdoor lifestyle. Popular East
                        Tennessee
                        markets include:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                        <li className="flex items-start gap-3 text-base font-montserrat font-normal text-text-secondary-foreground">
                            <span className="mt-1.5 shrink-0">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="black" className="">
                                    <circle cx="5" cy="5" r="5" />
                                </svg>
                            </span>
                            <span>Knoxville homes for sale – college town energy, strong job market, nearby
                                lakes.</span>
                        </li>
                        <li className="flex items-start gap-3 text-base font-montserrat font-normal text-text-secondary-foreground">
                            <span className="mt-1.5 shrink-0">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="black" className="">
                                    <circle cx="5" cy="5" r="5" />
                                </svg>
                            </span>
                            <span>Johnson City homes for sale – affordable mountain living, great schools, healthcare
                                hub.</span>
                        </li>
                        <li className="flex items-start gap-3 text-base font-montserrat font-normal text-text-secondary-foreground">
                            <span className="mt-1.5 shrink-0">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="black" className="">
                                    <circle cx="5" cy="5" r="5" />
                                </svg>
                            </span>
                            <span>Kingsport homes for sale – quiet
                                neighborhoods, family-friendly communities.</span>
                        </li>
                        <li className="flex items-start gap-3 text-base font-montserrat font-normal text-text-secondary-foreground">
                            <span className="mt-1.5 shrink-0">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="black" className="">
                                    <circle cx="5" cy="5" r="5" />
                                </svg>
                            </span>
                            <span>Bristol homes for sale – low cost
                                of living, historic downtown, raceway events.</span>
                        </li>
                        <li className="flex items-start gap-3 text-base font-montserrat font-normal text-text-secondary-foreground">
                            <span className="mt-1.5 shrink-0">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="black" className="">
                                    <circle cx="5" cy="5" r="5" />
                                </svg>
                            </span>
                            <span>Chattanooga homes for sale –
                                riverfront lifestyle, tech jobs, incredible outdoor access.</span>
                        </li>
                    </ul>
                    <p className="text-text-secondary-foreground font-montserrat font-normal mt-7">
                        Whether you want a downtown condo, a suburban family home, or a cabin with a view of the
                        mountains,
                        East Tennessee has options at a range of price points.
                    </p>
                </div>
            </div> */}
            </div>
        </div>
    );
}
