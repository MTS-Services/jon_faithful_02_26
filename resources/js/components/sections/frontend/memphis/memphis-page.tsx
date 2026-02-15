import React from 'react';
import CallToActionSection from '../cities/callTo-action-section';
import FinalInfoSection from '../cities/final-info-section';
import InfoTabsSection from '../cities/info-tabs-section';
import MoveLocationSection from '../cities/move-location-section';
import NeighborhoodsSection from '../cities/neighborhoods-section';
import WhyMoveSection from '../cities/why-move';

const whyMoveData = {
    title: 'Why People Are Moving to Memphis',
    description:
        'Memphis attracts buyers looking for affordability, culture, and value.',
    points: [
        'Some of the most affordable housing in Tennessee',
        'No state income tax',
        'Strong logistics and distribution job market',
        'Rich music, food, and arts culture',
        'Major transportation and travel hub',
        'Diverse neighborhoods and lifestyles',
    ],
    conclusion:
        'Many people relocating to Tennessee choose Memphis for its low cost of entry and big-city feel.',
    imageUrl:
        '/assets/images/Neon-signs-of-Beale-Street-Memphis-Tennessee-2048x1367.jpeg',
    videoUrl:
        'https://whytennessee.com/wp-content/uploads/2025/12/Memphis-Tennessee-Downtown-Skyline-Aerial.mp4',
};

// LOCATION DATA
const locationData = {
    title: 'Where Is Memphis Located?',
    description:
        'Memphis is located in Southwest Tennessee, along the Mississippi River.',
    distances: [
        '3 hours to Nashville',
        '4 hours to St. Louis',
        'Easy access to Arkansas and Mississippi',
        'Major international airport (MEM)',
    ],
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d417681.4876458511!2d-89.93864!3d35.128264!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d57e1eea439745%3A0xd193f315601ab6fe!2sMemphis%2C%20TN!5e0!3m2!1sen!2sus!4v1770182919566!5m2!1sen!2sus',
    conclusion:
        'Its central location makes Memphis a key logistics and transportation hub.',
};

const neighborhoods = [
    {
        name: 'East Memphis',
        features: [
            'Established neighborhoods',
            'Popular with families and professionals',
            'Strong resale value',
        ],
    },
    {
        name: 'Midtown',
        features: ['Historic homes', 'Arts and music scene', 'Walkable areas'],
    },
    {
        name: 'Downtown Memphis',
        features: [
            'Condos and lofts',
            'Riverfront access',
            'Entertainment and dining',
        ],
    },
    {
        name: 'Germantown & Collierville',
        features: [
            'Highly rated schools',
            'Upscale neighborhoods',
            'Family-friendly environments',
        ],
    },
];

const tabs = [
    {
        id: 'tab1',
        label: 'Schools & Education',
        title: 'Schools & Education',
        intro: 'Memphis provides multiple education options:',
        items: [
            'Public and private K-12 schools',
            'Charter schools',
            'University of Memphis',
            'Medical and technical institutions',
        ],
        footer: 'Education options continue to expand across the metro area.',
        imageUrl:
            '/assets/images/Simmons_Bank_Liberty_Stadium_of_Memphis_-_home_of_the_Tigers_Football_Team_-_aerial_view_-_MEMPHIS1-2048x1149.jpeg',
    },
    {
        id: 'tab2',
        label: 'Healthcare & Employment',
        title: 'Healthcare & Employment',
        intro: 'Memphis has a diverse economy supported by:',
        items: [
            'Logistics and distribution (FedEx HQ)',
            'Healthcare and medical research',
            'Manufacturing',
            'Education and government',
        ],
        footer: 'FedEx alone makes Memphis one of the most important logistics centers in the world.',
        imageUrl:
            '/assets/images/toronto-city-skyline-view-with-park-urban-buildings-2048x1374.jpg',
    },
    {
        id: 'tab3',
        label: 'Things to Do in Memphis',
        title: 'Things to Do in Memphis',
        intro: 'Memphis offers culture you won’t find anywhere else:',
        items: [
            'Beale Street and live music',
            'Graceland and music history landmarks',
            'World-famous BBQ',
            'Riverfront parks and trails',
            'Professional sports and festivals',
        ],
        footer: 'Memphis blends Southern culture with urban energy.',
        imageUrl:
            '/assets/images/Memphis_-Tennessee_-USA-Downtown-Skyline-Aerial-1-1-2048x1151.jpeg',
    },
    {
        id: 'tab4',
        label: 'Homes for Sale in Memphis',
        title: 'Homes for Sale in Memphis',
        intro: 'Memphis’ housing market includes:',
        items: [
            'Affordable single-family homes',
            'Historic properties',
            'Condos and townhomes',
            'Investment and rental opportunities',
        ],
        footer: 'Homes in Memphis are among the best values in Tennessee.',
        imageUrl: '/assets/images/Best_Memphis_Neighborhoods_Harbor_Town.jpg',
        cta: {
            label: 'Homes for Sale',
            href: '/homes-for-sale',
            icon: '',
        },
    },
];
export default function MemphisPage() {
    return (
        <div>
            <WhyMoveSection whyMove={whyMoveData} />
            <MoveLocationSection location={locationData} />

            {/* COST OF LIVING SECTION */}
            <div className="container mx-auto px-4 py-16 lg:px-16">
                <h2 className="mb-6 text-center text-3xl font-bold">
                    Cost of Living in Memphis
                </h2>
                <p className="mb-10 text-center text-gray-600">
                    Memphis offers one of the lowest costs of living of any
                    large U.S. city.
                </p>

                <div className="grid gap-6 md:grid-cols-4">
                    <CostCard title="Mediam home price" value="$200,000" />
                    <CostCard
                        title="2-bedroom apartment"
                        value="$1,100–$1,500"
                    />
                    <CostCard title="Utilities" value="Near national average" />
                    <CostCard
                        title="Property taxes"
                        value="Low compared to many states"
                    />
                </div>
            </div>
            <div className="bg-primary py-16">
                <div className="container mx-auto px-4 lg:px-16">
                    <h2 className="mb-6 text-center text-3xl font-bold text-primary-foreground">
                        Best Neighborhoods in Memphis
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
                title="Work With a Memphis Realtor"
                description="A local Memphis realtor can help you:"
                benefits={[
                    'Identify safe and desirable neighborhoods',
                    'Find value and investment opportunities',
                    'Navigate inspections and negotiations',
                    'Assist with relocation planning',
                ]}
                buttonText="Connect With a Memphis Realtor"
            />

            <FinalInfoSection
                property={{
                    title: 'Is Memphis Right for You?',
                    rightTitle: 'Explore Other Tennessee Cities',
                    description:
                        'Memphis may be a great fit if you’re looking for: Extremely affordable housing Big-city amenities Cultural depth and history Job opportunities in logistics and healthcare Strong rental and investment potential For many relocating buyers, Memphis offers unmatched value and culture.',
                    cities: ['Nashville', 'Franklin', 'Clarksville', 'Jackson'],
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
