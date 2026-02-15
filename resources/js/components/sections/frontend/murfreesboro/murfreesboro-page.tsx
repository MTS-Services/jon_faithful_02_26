import React from 'react';
import CallToActionSection from '../cities/callTo-action-section';
import FinalInfoSection from '../cities/final-info-section';
import InfoTabsSection from '../cities/info-tabs-section';
import MoveLocationSection from '../cities/move-location-section';
import NeighborhoodsSection from '../cities/neighborhoods-section';
import WhyMoveSection from '../cities/why-move';

const whyMoveData = {
    title: 'Why People Are Moving to Murfreesboro',
    description:
        'Murfreesboro consistently attracts buyers relocating to Middle Tennessee for both lifestyle and opportunity.',
    points: [
        'More affordable housing than Nashville',
        'NNo state income tax in Tennessee',
        'Strong job market and population growth',
        'Family-friendly neighborhoods',
        'Home to Middle Tennessee State University (MTSU)',
        'Convenient commute to Nashville',
    ],
    conclusion:
        'Many people choose Murfreesboro for its balance of affordability, growth, and community feel.',
    imageUrl:
        '/assets/images/Cannon-At-The-Stones-River-National-Battlefield-And-Cemetery-2048x1367.jpeg',
    videoUrl:
        'https://whytennessee.com/wp-content/uploads/2025/12/Murfreesboro-Town-Square-Straight-Flyover-in-December-2020-sunset-Joy-decorations.mp4',
};

// LOCATION DATA
const locationData = {
    title: 'Where Is Murfreesboro Located?',
    description: 'Murfreesboro is located in Middle Tennessee, approximately:',
    distances: [
        '30–35 minutes southeast of downtown Nashville',
        '25 minutes to Franklin',
        '1.5 hours to Chattanooga',
        'Easy access to I-24 and major highways',
    ],
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d413806.1038338707!2d-86.452249!3d35.876943!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8863f80e5b170141%3A0x850cb92ad6b577f6!2sMurfreesboro%2C%20TN!5e0!3m2!1sen!2sus!4v1770185867151!5m2!1sen!2sus',
    conclusion:
        'Its location makes it ideal for commuters and those wanting proximity to Nashville without city congestion. Shape',
};

const neighborhoods = [
    {
        name: 'Blackman',
        features: [
            'Highly rated schools',
            'New construction communities',
            'Popular with families',
        ],
    },
    {
        name: 'Siegel Area',
        features: [
            'Established neighborhoods',
            'Convenient access to shopping and schools',
            'Mix of home styles',
        ],
    },
    {
        name: 'Downtown Murfreesboro',
        features: [
            'Historic homes',
            'Revitalized area',
            'Local restaurants and events',
        ],
    },
    {
        name: 'North Murfreesboro',
        features: [
            'Affordable housing options',
            'Easy highway access',
            'Growing residential developments',
        ],
    },
];

const tabs = [
    {
        id: 'tab1',
        label: 'Schools & Education',
        title: 'Schools & Education',
        intro: 'Murfreesboro is known for strong education options:',
        items: [
            'Rutherford County Schools',
            'Multiple private school choices',
            'Middle Tennessee State University (MTSU)',
            'Proximity to colleges in Nashville',
        ],
        footer: 'Education and family appeal are major reasons people relocate here.',
        imageUrl: '/assets/images/Pupils_leaving.jpeg',
    },
    {
        id: 'tab2',
        label: 'Healthcare & Employment',
        title: 'Healthcare & Employment',
        intro: 'Murfreesboro has a growing employment base with opportunities in:',
        items: [
            'Healthcare and medical services',
            'Education and higher education',
            'Retail and professional services',
        ],
        footer: 'Its proximity to Nashville expands employment options even further.',
        imageUrl: '/assets/images/Collage_Industry_jobs1-2048x1151.jpeg',
    },
    {
        id: 'tab3',
        label: 'Things to Do in Murfreesboro',
        title: 'Things to Do in Murfreesboro',
        intro: 'Murfreesboro offers a variety of family-friendly and outdoor activities:',
        items: [
            'Greenway trails and parks',
            'Stones River National Battlefield',
            'Community festivals and events',
            'Shopping and dining options',
            'Easy access to Nashville entertainment',
        ],
        footer: 'Residents enjoy both local amenities and nearby big-city attractions',
        imageUrl:
            '/assets/images/Cannon-At-The-Stones-River-National-Battlefield-And-Cemetery-2048x1367 (1).jpeg',
    },
    {
        id: 'tab4',
        label: 'Homes for Sale in Murfreesboro',
        title: 'Homes for Sale in Murfreesboro',
        intro: 'Murfreesboro’s housing market includes:',
        items: [
            'Single-family homes',
            'New construction subdivisions',
            'Townhomes and condos',
            'Larger suburban lots',
        ],
        footer: 'The city offers many opportunities for first-time buyers and growing families.',
        imageUrl:
            '/assets/images/Four_young_friends_playing_with_a_dog__spending_time_together_on_a_porch_of_a_country_house_on_the_evening1-2048x1366.jpeg',
        cta: {
            label: 'Homes for Sale',
            href: '/homes-for-sale',
            icon: '',
        },
    },
];
export default function MurfreesboroPage() {
    return (
        <div>
            <WhyMoveSection whyMove={whyMoveData} />
            <MoveLocationSection location={locationData} />

            {/* COST OF LIVING SECTION */}
            <div className="container mx-auto px-4 py-16 lg:px-16">
                <h2 className="mb-6 text-center text-3xl font-bold">
                    Cost of Living in Murfreesboro
                </h2>
                <p className="mb-10 text-center text-gray-600">
                    Murfreesboro offers strong value compared to other
                    fast-growing metro areas.
                </p>

                <div className="grid gap-6 md:grid-cols-4">
                    <CostCard title="Mediam home price" value="$400,000" />
                    <CostCard
                        title="2-bedroom apartment"
                        value="$1,400–$1,800"
                    />
                    <CostCard
                        title="Utilities"
                        value="Near or slightly below national average"
                    />
                    <CostCard
                        title="Property taxes"
                        value="Low compared to many states"
                    />
                </div>
            </div>
            <div className="bg-primary py-16">
                <div className="container mx-auto px-4 lg:px-16">
                    <h2 className="mb-6 text-center text-3xl font-bold text-primary-foreground">
                        Best Neighborhoods in Murfreesboro
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
                title="Work With a Murfreesboro Realtor"
                description="A local Clarksville realtor can help you:"
                benefits={[
                    'Navigate competitive listings',
                    'Find the best neighborhoods for schools and commute',
                    'Arrange showings or virtual tours',
                    'Negotiate pricing and inspections',
                ]}
                buttonText="Connect With a Murfreesboro Realtor"
            />

            <FinalInfoSection
                property={{
                    title: 'Is Murfreesboro Right for You?',
                    rightTitle: 'Explore Nearby Cities',
                    description:
                        'Murfreesboro may be the right fit if you’re looking for:  Family-friendly living  Strong schools  Affordable housing near Nashville  A growing and diverse community  Long-term appreciation potential  For many relocating buyers, Murfreesboro offers one of the best value markets in Middle Tennessee. ',
                    cities: [
                        'Nashville',
                        'Franklin',
                        'Clarksville',
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
