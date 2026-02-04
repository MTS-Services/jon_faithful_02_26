import React from 'react';
import CallToActionSection from '../cities/callTo-action-section';
import FinalInfoSection from '../cities/final-info-section';
import InfoTabsSection from '../cities/info-tabs-section';
import MoveLocationSection from '../cities/move-location-section';
import NeighborhoodsSection from '../cities/neighborhoods-section';
import WhyMoveSection from '../cities/why-move';

const whyMoveData = {
    title: 'Why People Are Moving to Kingsport',
    description:
        'Kingsport attracts buyers who want stability, affordability, and a relaxed pace of life.',
    points: [
        'Very affordable home prices',
        'No state income tax in Tennessee',
        'Family-oriented neighborhoods',
        'Strong school system',
        'Easy access to Johnson City and Bristol',
        'Low traffic and commute times',
    ],
    conclusion:
        'Many people moving to the Tri-Cities choose Kingsport for its peaceful residential feel.',
    imageUrl: '/assets/images/View-From-Fire-Tower-Bays-Mountain-Park-Kingsport-TN-2048x1362 (1).jpeg',
    videoUrl:
        'https://whytennessee.com/wp-content/uploads/2025/12/Downtown-Kingsport-TN-USA_-Aerial-View-of-Church-Circle-Buildings-and-Neighborhood-on-Sunny-Fall-Day_-Drone-Shot.mp4',
};

// LOCATION DATA
const locationData = {
    title: 'Where Is Kingsport Located?',
    description: 'Kingsport is located in Northeast Tennessee, about:',
    distances: [
        '20 minutes from Johnson City',
        '25 minutes from Bristol',
        '1 hour from Asheville, NC',
        '2 hours from Knoxville',
    ],
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d410648.27114734077!2d-82.490354!3d36.477136!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885a856b70074b97%3A0x6f9cc0d30bcc841f!2sKingsport%2C%20TN!5e0!3m2!1sen!2sus!4v1770187495106!5m2!1sen!2sus',
    conclusion:
        'Its central Tri-Cities location makes it convenient while maintaining a quieter lifestyle.',
};

const neighborhoods = [
    {
        name: 'Ridgefields',
        features: [
            'Established neighborhood',
            'Large lots and mature trees',
            'Close to schools and shopping',
        ],
    },
    {
        name: 'Colonial Heights',
        features: [
            'Family-friendly area',
            'Newer homes and subdivisions',
            'Easy access to I-26',
        ],
    },
    {
        name: 'Lynn Garden',
        features: [
            'Affordable housing',
            'Quiet residential streets',
            'Close to parks and schools',
        ],
    },
    {
        name: 'Downtown Kingsport',
        features: [
            'Historic homes',
            'Ongoing revitalization',
            'Walkable areas and local events',
        ],
    },
];

const tabs = [
    {
        id: 'tab1',
        label: 'Schools & Education',
        title: 'Schools & Education',
        intro: 'Kingsport is known for its strong public schools, making it attractive for families.',
        items: [
            'Kingsport City Schools',
            'Private school options',
            'Close proximity to ETSU and Northeast State Community Collegee',
        ],
        footer: 'Education is a major draw for families relocating to the area.',
        imageUrl: '/assets/images/Modern_Bright_School_Interior_With_Students_Walking_in_the_Hallway1-2048x1117.jpeg',
    },
    {
        id: 'tab2',
        label: 'Healthcare & Employment',
        title: 'Healthcare & Employment',
        intro: 'Kingsport has a stable employment base with opportunities in:',
        items: [
            'Healthcare and medical services',
            'Manufacturing and industrial operations',
            'Education',
            'Regional business and logistics',
        ],
        footer: 'Major healthcare facilities are nearby throughout the Tri-Cities region.',
        imageUrl:
            '/assets/images/engineer_team_full_skill.jpeg',
    },
    {
        id: 'tab3',
        label: 'Things to Do in Kingsport',
        title: 'Things to Do in Kingsport',
        intro: 'Kingsport offers a variety of local activities and outdoor access:',
        items: [
            'Bays Mountain Park & Planetarium',
            'Greenbelt walking and biking trails',
            'Community events and festivals',
            'Easy access to lakes, rivers, and hiking',
        ],
        footer: 'Kingsport is ideal for those who enjoy outdoor recreation and a quiet lifestyle.',
        imageUrl:
            '/assets/images/View-From-Fire-Tower-Bays-Mountain-Park-Kingsport-TN-2048x1362 (2).jpeg',
    },
    {
        id: 'tab4',
        label: 'Homes for Sale in Kingsport',
        title: 'Homes for Sale in Kingsport',
        intro: 'Kingsport’s housing market includes:',
        items: [
            'Affordable single-family homes',
            'Ranch-style neighborhoods',
            'New construction subdivisions',
            'Rural properties on the outskirts',
        ],
        footer: 'Homes in Kingsport are often priced lower than Johnson City and Knoxville, making it a great option for budget-conscious buyers.',
        imageUrl:
            '/assets/images/Beautiful_Home_Exterior1-2048x1493.jpeg',
        cta: {
            label: 'Homes for Sale',
            href: '/chattanooga-homes-for-sale',
            icon: '',
        },
    },
];
export default function KingsportPage() {
    return (
        <div>
            <WhyMoveSection whyMove={whyMoveData} />
            <MoveLocationSection location={locationData} />

            {/* COST OF LIVING SECTION */}
            <div className="container mx-auto px-4 py-16 lg:px-16">
                <h2 className="mb-6 text-center text-3xl font-bold">
                    Cost of Living in Kingsport
                </h2>
                <p className="mb-10 text-center text-gray-600">
                    Kingsport consistently ranks as one of the most affordable cities in Tennessee.
                </p>

                <div className="grid gap-6 md:grid-cols-4">
                    <CostCard title="Mediam home price" value="$240,000" />
                    <CostCard
                        title="2-bedroom apartment"
                        value="$950–$1,200"
                    />
                    <CostCard title="Utilities" value="Well below national average" />
                    <CostCard
                        title="Property taxes"
                        value="Very low
"
                    />
                </div>
            </div>
            <div className="bg-primary py-16">
                <div className="container mx-auto px-4 lg:px-16">
                    <h2 className="mb-6 text-center text-3xl font-bold text-primary-foreground">
                        Best Neighborhoods in Kingsport
                    </h2>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
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
                title="Work With a Kingsport Realtor"
                description="A local Kingsport realtor can help you:"
                benefits={[
                    'Understand neighborhood differences',
                    'Find the best value homes',
                    'Navigate inspections and negotiations',
                    'Assist with relocation logistics',
                ]}
                buttonText="Connect With a Kingsport Realtor"
            />

            <FinalInfoSection
                property={{
                    title: 'Is Kingsport Right for You?',
                    rightTitle: 'Explore Nearby Cities',
                    description:
                        'Kingsport may be the right fit if you’re looking for:  Low cost of living  Safe, family-friendly neighborhoods  Strong schools  Quiet residential lifestyle  Easy access to the Tri-Cities  For many relocating buyers, Kingsport offers one of the best affordability-to-quality ratios in Tennessee. ',
                    cities: [
                        'Johnson City',
                        'Kingsport',
                        'Knoxville',
                        'Chattanooga',
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
