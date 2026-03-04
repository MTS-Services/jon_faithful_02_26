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
        videoUrl: '/assets/images/buying/Aerial-Drone-View-Suburban-Residential-Neighborhood.mp4',
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
        videoUrl: '/assets/images/buying/new-construction-homes-american-flag-sunset-aerial.mov',
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
        videoUrl: '/assets/images/buying/Aerial-Drone-View-Suburban-Residential-Neighborhood.mp4',
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
                <VideoTabsSection tabs={tabs} />
            </div>
        </div>
    );
}
