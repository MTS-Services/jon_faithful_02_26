import React from 'react';
import CallToActionSection from '../cities/callTo-action-section';
import FinalInfoSection from '../cities/final-info-section';
import InfoTabsSection from '../cities/info-tabs-section';
import MoveLocationSection from '../cities/move-location-section';
import NeighborhoodsSection from '../cities/neighborhoods-section';
import WhyMoveSection from '../cities/why-move';

const whyMoveData = {
    title: 'Why People Are Moving to Franklin',
    description:
        'Franklin consistently ranks among the best places to live in Tennessee and the Southeast.',
    points: [
        'No state income tax in Tennessee',
        'Top-rated public and private schools',
        'Beautiful historic downtown',
        'Upscale neighborhoods and luxury homes',
        'Strong job market nearby in Nashville',
        'Family-friendly, safe communities',
    ],
    conclusion:
        'Many buyers choose Franklin for its combination of luxury living and small-town charm.',
    imageUrl: '/assets/images/Franklin-Tennessee-Cityscape.jpeg',
    videoUrl:
        'https://whytennessee.com/wp-content/uploads/2025/12/1-Franklin_-Tennessee_-Downtown_-Amazing-Landscape_-Aerial-View-1.mp4',
};

// LOCATION DATA
const locationData = {
    title: 'Where Is Franklin Located?',
    description: 'Franklin is located in Williamson County, approximately:',
    distances: [
        '25–30 minutes south of downtown Nashville',
        '20 minutes to Brentwood',
        '30 minutes to Murfreesboro',
        'Easy access to I-65 and major highways',
    ],
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d206841.30668053022!2d-86.839022!3d35.900577!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886378e0e0f94935%3A0xf7addba980fa8da1!2sFranklin%2C%20TN!5e0!3m2!1sen!2sus!4v1770177569364!5m2!1sen!2sus',
    conclusion:
        'Its proximity to Nashville makes Franklin ideal for commuters who want a quieter, more refined lifestyle.',
};

const neighborhoods = [
    {
        name: 'Downtown Franklin',
        features: [
            'Historic homes and charm',
            'Walkable shops and restaurants',
            'Highly sought-after real estate',
        ],
    },
    {
        name: 'Cool Springs',
        features: [
            'Modern subdivisions',
            'Shopping, dining, and offices',
            'Popular with professionals',
        ],
    },
    {
        name: 'Fieldstone Farms',
        features: [
            'Master-planned community',
            'Parks, pools, and trails',
            'Strong sense of community',
        ],
    },
    {
        name: 'Arrington & Leiper’s Fork Areas',
        features: [
            'Estate homes and acreage',
            'Scenic countryside living',
            'Privacy and space',
        ],
    },
    {
        name: 'Westhaven',
        features: [
            'Luxury homes and townhomes',
            'Golf course community',
            'Highly desirable amenities',
        ],
    },
];

const tabs = [
    {
        id: 'tab1',
        label: 'Schools & Education',
        title: 'Schools & Education',
        intro: 'Franklin is nationally known for its schools.',
        items: [
            'Williamson County Schools (top-rated in TN)',
            'Excellent private school options',
            'Proximity to universities in Nashville',
        ],
        footer: 'Education quality is one of the biggest drivers of Franklin’s real estate demand.',
        imageUrl: '/assets/images/MFYMVNTLQJDGHDBKTVFLSEGZJA.avif',
    },
    {
        id: 'tab2',
        label: 'Healthcare & Employment',
        title: 'Healthcare & Employment',
        intro: 'Residents benefit from strong employment access:',
        items: [
            'Close proximity to Nashville’s healthcare industry',
            'Corporate offices in Cool Springs',
            'Finance, tech, and professional services',
        ],
        footer: 'Many Franklin residents work locally or commute to Nashville.',
        imageUrl:
            '/assets/images/bkg-state-of-franklin-healthcare-associates.jpg',
    },
    {
        id: 'tab3',
        label: 'Things to Do in Franklin',
        title: 'Things to Do in Franklin',
        intro: 'Franklin offers an exceptional lifestyle:',
        items: [
            'Historic downtown events and festivals',
            'Local boutiques and dining',
            'Parks, walking trails, and greenways',
            'Easy access to Nashville entertainment',
            'Nearby wineries and countryside attractions',
        ],
        footer: 'Franklin blends Southern charm with modern convenience.',
        imageUrl:
            '/assets/images/LEAD-Franklin-Square-jpeg-scaled-1-2048x1378.jpeg',
    },
    {
        id: 'tab4',
        label: 'Homes for Sale in Franklin',
        title: 'Homes for Sale in Franklin',
        intro: 'Franklin’s real estate market includes:',
        items: [
            'Luxury single-family homes',
            'Gated and golf-course communities',
            'Townhomes and condos',
            'Estate properties with acreage',
        ],
        footer: 'Inventory is competitive, and homes often sell quickly due to demand.',
        imageUrl:
            '/assets/images/Home_and_healthy_front_yard_during_late_spring_season1-2048x1560.jpeg',
        cta: {
            label: 'Homes for Sale',
            href: '/homes-for-sale',
            icon: '',
        },
    },
];
export default function FranklinPage() {
    return (
        <div>
            <WhyMoveSection whyMove={whyMoveData} />
            <MoveLocationSection location={locationData} />

            {/* COST OF LIVING SECTION */}
            <div className="container mx-auto px-4 py-16 lg:px-16">
                <h2 className="mb-6 text-center text-3xl font-bold">
                    Cost of Living in Franklin
                </h2>
                <p className="mb-10 text-center text-gray-600">
                    Franklin is one of the more expensive cities in Tennessee,
                    largely due to demand and school quality.
                </p>

                <div className="grid gap-6 md:grid-cols-4">
                    <CostCard title="Mediam home price" value="$850,000" />
                    <CostCard
                        title="2-bedroom apartment"
                        value="$2,000–$2,600"
                    />
                    <CostCard title="Utilities" value="Near national average" />
                    <CostCard
                        title="Property taxes"
                        value="Lower than many high-income states"
                    />
                </div>
            </div>
            <div className="bg-primary py-16">
                <div className="container mx-auto px-4 lg:px-16">
                    <h2 className="mb-6 text-center text-3xl font-bold text-primary-foreground">
                        Best Neighborhoods in Franklin
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
                title="Work With a Franklin Realtor"
                description="A local Franklin realtor can help you:"
                benefits={[
                    'Navigate competitive listings',
                    'Understand school zoning and neighborhoods',
                    'Identify off-market opportunities',
                    'Negotiate effectively in a high-demand market',
                ]}
                buttonText="Connect With a Franklin Realtor"
            />

            <FinalInfoSection
                property={{
                    title: 'Is Franklin Right for You?',
                    rightTitle: 'Explore Nearby Cities',
                    description:
                        'Franklin may be the perfect fit if you’re looking for: Top-tier schools Luxury and upscale living Safe, family-oriented communities Close proximity to Nashville Long-term property value For many relocating buyers, Franklin represents the pinnacle of suburban living in Tennessee.',
                    cities: [
                        'Nashville',
                        'Murfreesboro',
                        'Brentwood',
                        'Clarksville',
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
