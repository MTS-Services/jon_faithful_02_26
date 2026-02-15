import React from 'react';
import WhyMoveSection from '../cities/why-move';
import MoveLocationSection from '../cities/move-location-section';
import NeighborhoodsSection from '../cities/neighborhoods-section';
import InfoTabsSection from '../cities/info-tabs-section';
import CallToActionSection from '../cities/callTo-action-section';
import FinalInfoSection from '../cities/final-info-section';

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
export default function ClarksvillePage() {
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
                title="Work With a Clarksville Realtor"
                description="A local Clarksville realtor can help you:"
                benefits={[
                    'Navigate military relocation timelines',
                    'Understand school zones and neighborhoods',
                    'Find affordable housing options',
                    'Coordinate inspections and closings',
                ]}
                buttonText="Connect With a Clarksville Realtor"
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
