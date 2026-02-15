import React from 'react';
import CallToActionSection from '../cities/callTo-action-section';
import FinalInfoSection from '../cities/final-info-section';
import InfoTabsSection from '../cities/info-tabs-section';
import MoveLocationSection from '../cities/move-location-section';
import NeighborhoodsSection from '../cities/neighborhoods-section';
import WhyMoveSection from '../cities/why-move';

const whyMoveData = {
    title: 'Why People Are Moving to Jackson',
    description:
        'Jackson attracts buyers looking for value, convenience, and community.',
    points: [
        'Affordable home prices compared to national averages',
        'No state income tax in Tennessee',
        'Central location between Memphis and Nashville',
        'Low traffic and short commute times',
        'Growing local economy',
        'Family-friendly neighborhoods',
    ],
    conclusion:
        'Many people choose Jackson for its cost-effective living and strategic location.',
    imageUrl: '/assets/images/Jackson_TN_downtown1-2048x1366.webp',
   videoUrl:
        'https://whytennessee.com/wp-content/uploads/2025/12/Bristol-Tennesse_-Virginia-aerial-fast-push-over-state-street.mp4',
};


// LOCATION DATA
const locationData = {
    title: 'Where Is Jackson Located?',
    description: 'Jackson is located in West Tennessee, approximately:',
    distances: [
        '1 hour east of Memphis',
        '2 hours west of Nashville',
        'Easy access to major highways (I-40, US-45)',
    ],
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d206841.30668053022!2d-86.839022!3d35.900577!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886378e0e0f94935%3A0xf7addba980fa8da1!2sFranklin%2C%20TN!5e0!3m2!1sen!2sus!4v1770177569364!5m2!1sen!2sus',
    conclusion:
        'Its central location makes it convenient for travel, work, and regional commuting.',
};

const neighborhoods = [
    {
        name: 'North Jackson',
        features: [
            'Popular with families',
            'Newer subdivisions',
            'Close to schools and shopping',
        ],
    },
    {
        name: 'West Jackson',
        features: [
            'Affordable housing options',
            'Quiet residential areas',
            'Easy highway access',
        ],
    },
    {
        name: 'Downtown Jackson',
        features: [
            'Historic homes and revitalized areas',
            'Local dining and entertainment',
            'Community events',
        ],
    },
    {
        name: 'Rural Madison County',
        features: [
            'Larger lots and acreage',
            'Peaceful countryside living',
            'Short drive to city amenities',
        ],
    },
];

const tabs = [
    {
        id: 'tab1',
        label: 'Schools & Education',
        title: 'Schools & Education',
        intro: 'Jackson provides solid education options:',
        items: [
            'Jackson-Madison County School System',
            'Private school options',
            'Union University and Lane College',
        ],
        footer: 'Education access supports families and students relocating to the area.',
        imageUrl: '/assets/images/Johnson_City-2048x1151.jpg',
    },
    {
        id: 'tab2',
        label: 'Healthcare & Employment',
        title: 'Healthcare & Employment',
        intro: 'Jackson has a stable employment base with opportunities in:',
        items: [
            'Healthcare and medical services',
            'Manufacturing and logistics',
            'Education and professional services',
            'Retail and local businesses',
        ],
        footer: 'Healthcare facilities serve both the city and surrounding rural areas.',
        imageUrl: '/assets/images/pexels-kelly-2833739-2048x1150 (1).jpg',
    },
    {
        id: 'tab3',
        label: 'Things to Do in Jackson',
        title: 'Things to Do in Jackson',
        intro: 'Jackson offers a range of activities and community attractions:',
        items: [
            'Parks and green spaces',
            'Local museums and cultural centers',
            'Community festivals and events',
            'Easy access to outdoor recreation',
            'Shopping and dining options',
        ],
        footer: 'Residents enjoy a close-knit community with modern conveniences.',
        imageUrl: '/assets/images/Skyline-Cumberland-River-Nashville.webp',
    },
    {
        id: 'tab4',
        label: 'Homes for Sale in Jackson',
        title: 'Homes for Sale in Jackson',
        intro: 'Jackson’s housing market includes:',
        items: [
            'Affordable single-family homes',
            'Townhomes and condos',
            'New construction neighborhoods',
            'Rural properties with acreage',
        ],
        footer: 'Homes in Jackson often provide more space for the price compared to larger metro areas.',
        imageUrl: '/assets/images/CityHall-18-2048x1357 (1).webp',
        cta: {
            label: 'Homes for Sale',
            href: '/homes-for-sale',
            icon: '',
        },
    },
];
export default function JacksonPage() {
    return (
        <div>
            <WhyMoveSection whyMove={whyMoveData} />
            <MoveLocationSection location={locationData} />

            {/* COST OF LIVING SECTION */}
            <div className="container mx-auto px-4 py-16 lg:px-16">
                <h2 className="mb-6 text-center text-3xl font-bold">
                    Cost of Living in Jackson
                </h2>
                <p className="mb-10 text-center text-gray-600">
                    Jackson offers a low cost of living compared to many U.S.
                    cities.
                </p>

                <div className="grid gap-6 md:grid-cols-4">
                    <CostCard title="Mediam home price" value="$225,000" />
                    <CostCard
                        title="2-bedroom apartment"
                        value="$1,000–$1,300"
                    />
                    <CostCard
                        title="Utilities"
                        value="Below national average"
                    />
                    <CostCard title="Property taxes" value="low" />
                </div>
            </div>
            <div className="bg-primary py-16">
                <div className="container mx-auto px-4 lg:px-16">
                    <h2 className="mb-6 text-center text-3xl font-bold text-primary-foreground">
                        Best Neighborhoods in Jackson
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
                title="Work With a Jackson Realtor"
                description="A local Jackson realtor can help you:"
                benefits={[
                    'Find the best neighborhoods for your needs',
                    'Identify affordable housing options',
                    'Navigate inspections and negotiations',
                    'Assist with relocation planning',
                ]}
                buttonText="Connect With a Jackson Realtor"
            />

            <FinalInfoSection
                property={{
                    title: 'Is Jackson Right for You?',
                    rightTitle: 'Explore Nearby Cities',
                    description:
                        'Jackson may be the right fit if you’re looking for: Affordable housing Central West Tennessee location Family-friendly neighborhoods Small-city lifestyle Easy access to Memphis and Nashville For many relocating buyers, Jackson offers value, convenience, and comfort.',
                    cities: [
                        'Memphis',
                        'Nashville',
                        'Clarksville',
                        'Cookeville',
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
