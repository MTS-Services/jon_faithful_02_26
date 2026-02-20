import React from 'react';
import WhyMoveSection from '../cities/why-move';
import MoveLocationSection from '../cities/move-location-section';
import NeighborhoodsSection from '../cities/neighborhoods-section';
import InfoTabsSection from '../cities/info-tabs-section';
import CallToActionSection from '../cities/callTo-action-section';
import FinalInfoSection from '../cities/final-info-section';
import { City } from '@/types';

const whyMoveData = {
    title: 'Why People Are Moving to Clarksville',
    description:
        'Clarksville continues to grow as one of Tennessee’s most affordable and opportunity-rich cities.',
    points: [
        'Affordable home prices compared to Nashville',
        'No state income tax in Tennessee',
        'Strong employment tied to Fort Campbell',
        'Family-friendly neighborhoods',
        'Growing retail, dining, and development',
        'Easy commute to Nashville',
    ],
    conclusion:
        'Many buyers choose Clarksville for its value, stability, and long-term growth potential.',
    imageUrl:
        '/assets/images/Montgomery-County-Courthouse.in-Clarksville_-Tennessee_-on-a-sunny-autumn-day-with-a-blue-sky-scaled.jpeg',
    videoUrl:
        'https://whytennessee.com/wp-content/uploads/2025/12/Aerial-panorama-of-downtown-Clarksville-and-Clarksville-Courthouse_-Tennessee.mp4',
};

// LOCATION DATA
const locationData = {
    title: 'Where Is Clarksville Located?',
    description:
        'Clarksville is located in Middle Tennessee. approximately:',
    distances: [
        '45–60 minutes northwest of downtown Nashville',
        'Near the Kentucky border',
        'Easy access to I-24 and major highways',
    ],
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d410031.221222827!2d-87.325522!3d36.593423!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8864ce402ffea7e5%3A0xab41b10fe905271e!2sClarksville%2C%20TN!5e0!3m2!1sen!2sus!4v1770184313737!5m2!1sen!2sus',
    conclusion:
        'Its location makes Clarksville ideal for both military families and civilian commuters.',
};

const neighborhoods = [
    {
        name: 'Downtown Clarksville',
        features: [
            'Historic homes',
            'Revitalized areas',
            'Walkable streets and riverfront access',
        ],
    },
    {
        name: 'Sango',
        features: [
            'Popular with families',
            'Newer subdivisions',
            'Convenient access to I-24'],
    },
    {
        name: 'Rossview',
        features: [
            'Highly rated schools',
            'Suburban feel',
            'Close to Fort Campbell',
        ],
    },
    {
        name: 'St. Bethlehem',
        features: [
            'Shopping and dining nearby',
            'Mix of townhomes and single-family homes',
            'Central location',
        ],
    },
];

const tabs = [
    {
        id: 'tab1',
        label: 'Schools & Education',
        title: 'Schools & Education',
        intro: 'Clarksville provides strong education options:',
        items: [
            'Clarksville-Montgomery County School System',
            'Private and charter school options',
            'Austin Peay State University',
        ],
        footer: 'Education and affordability make Clarksville attractive for families and military households.',
        imageUrl:
            '/assets/images/Montgomery-County-Courthouse.in-Clarksville_-Tennessee_-on-a-sunny-autumn-day-with-a-blue-sky-scaled (1).jpeg',
    },
    {
        id: 'tab2',
        label: 'Healthcare & Employment',
        title: 'Healthcare & Employment',
        intro: 'Clarksville’s economy is supported by:',
        items: [
            'Fort Campbell military base',
            'Healthcare and medical services',
            'Manufacturing and logistics',
            'Education and government',
        ],
        footer: 'The city’s employment base provides stability and continued growth. Shape',
        imageUrl:
            '/assets/images/Doctor_and_hospital_administrators_talking_in_meeting1-2048x1365.jpeg',
    },
    {
        id: 'tab3',
        label: 'Things to Do in Clarkville',
        title: 'Things to Do in Clarkville',
        intro: 'Clarksville offers a mix of outdoor recreation and local attractions:',
        items: [
            'Cumberland Riverwalk and marina',
            'Parks, greenways, and trails',
            'Local festivals and events',
            'Historic downtown dining and shopping',
            'Easy access to Nashville entertainment',
        ],
        footer: 'Residents enjoy a balanced lifestyle with both small-city charm and nearby big-city amenities.',
        imageUrl:
            '/assets/images/Aerial-View-over-the-Buildings-and-Infrastructure-in-Clarksville-Tennessee-scaled (1).jpeg',
    },
    {
        id: 'tab4',
        label: 'Homes for Sale in Clarkville',
        title: 'Homes for Sale in Clarkville',
        intro: 'Clarksville’s housing market includes:',
        items: [
            'Affordable single-family homes',
            'New construction communities',
            'Townhomes and condos',
            'Properties near Fort Campbell',
        ],
        footer: 'Homes in Clarksville often provide more space for the price compared to nearby metro areas.',
        imageUrl: '/assets/images/Traditional-style-home-2048x1366.jpeg',
        cta: {
            label: 'Homes for Sale',
            href: '/homes-for-sale',
            icon: '',
        },
    },
];
export default function ClarksvillePage({ city }: { city: City }) {
    return (
        <div>
            <WhyMoveSection whyMove={whyMoveData} />
            <MoveLocationSection location={locationData} />

            {/* COST OF LIVING SECTION */}
            <div className="container mx-auto px-4 py-16 lg:px-16">
                <h2 className="mb-6 text-center text-3xl font-bold">
                    Cost of Living in Clarksville
                </h2>
                <p className="mb-10 text-center text-gray-600">
                    Clarksville offers one of the best affordability levels in Middle Tennessee.
                </p>

                <div className="grid gap-6 md:grid-cols-4">
                    <CostCard title="Mediam home price" value="$310,000" />
                    <CostCard
                        title="2-bedroom apartment"
                        value="$1,200–$1,500"
                    />
                    <CostCard title="Utilities" value="Below national average" />
                    <CostCard
                        title="Property taxes"
                        value="low"
                    />
                </div>
            </div>
            <div className="bg-primary py-16">
                <div className="container mx-auto px-4 lg:px-16">
                    <h2 className="mb-6 text-center text-3xl font-bold text-primary-foreground">
                        Best Neighborhoods in Clarksville
                    </h2>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
                        {neighborhoods.map((neighborhood, idx) => (
                            <NeighborhoodsSection
                                name={neighborhood.name}
                                features={neighborhood.features}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <InfoTabsSection tabs={tabs} />
            <CallToActionSection
                title="Work With a Cookeville Realtor"
                description="A local Cookeville realtor can help you:"
                benefits={[
                    {
                        text: 'Navigate military relocation timelines',
                        icon: (
                            <svg className="w-7 h-7 fill-white" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"></path></svg>
                        ),
                    },
                    {
                        text: 'Understand school zonesand neighborhoods',
                        icon: (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-7 w-7"
                                fill="currentColor"
                                viewBox="0 0 576 512"
                                width="576"
                                height="512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
                                />
                            </svg>
                        ),
                    },
                    {
                        text: 'Find affordable housing options',
                        icon: (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-7 w-7"
                                fill="currentColor"
                                viewBox="0 0 448 512"
                                width="448"
                                height="512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
                                />
                            </svg>
                        ),
                    },
                    {
                        text: 'Coordinate inspections and closings',
                        icon: (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-7 w-7"
                                fill="currentColor"
                                viewBox="0 0 640 512"
                                width="640"
                                height="512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M621.3 237.3l-58.5-58.5c-12-12-28.3-18.7-45.3-18.7H480V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64v336c0 44.2 35.8 80 80 80 26.3 0 49.4-12.9 64-32.4 14.6 19.6 37.7 32.4 64 32.4 44.2 0 80-35.8 80-80 0-5.5-.6-10.8-1.6-16h163.2c-1.1 5.2-1.6 10.5-1.6 16 0 44.2 35.8 80 80 80s80-35.8 80-80c0-5.5-.6-10.8-1.6-16H624c8.8 0 16-7.2 16-16v-85.5c0-17-6.7-33.2-18.7-45.2zM80 432c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32zm128 0c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32zm272-224h37.5c4.3 0 8.3 1.7 11.3 4.7l43.3 43.3H480v-48zm48 224c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32z"
                                />
                            </svg>
                        ),
                    },
                ]}
                cityId={city.id}
                cityName={city.name}
            />

            <FinalInfoSection
                property={{
                    title: 'Is Memphis Right for You?',
                    rightTitle: 'Explore Nearby Cities',
                    description:
                        'Clarksville may be a great fit if you’re looking for: Affordable housing near Nashville Military-friendly communities Strong job stability Family-oriented neighborhoods Long-term growth potential For many relocating buyers, Clarksville offers one of the best affordability-to-opportunity ratios in Tennessee.',
                    cities: [
                        'Nashville',
                        'Franklin',
                        'Murfreesboro',
                        'Cookeville'
                    ],
                }}
            />
        </div>
    );
}

const CostCard: React.FC<{ title: string; value: string }> = ({
    title,
    value,
}) => (
    <div className="overflow-hidden rounded-xl border bg-gray-100/50 text-center shadow-sm transition-shadow hover:shadow-md">
        <div className="bg-primary py-4">
            <p className="text-xl font-semibold text-white">{title}</p>
        </div>
        <div className="py-5 lg:py-10">
            <p className="text-base font-bold">{value}</p>
        </div>
    </div>
);
