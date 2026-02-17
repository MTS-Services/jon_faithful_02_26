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
                <h2 className="mb-6 text-center text-3xl font-bold md:text-[42px]">
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
                    <h2 className="mb-6 text-center text-3xl font-medium text-primary-foreground md:text-[40px]">
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
                    {
                        text: 'Identify safe and desirable neighborhoods',
                        icon: (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-7 w-7"
                                fill="currentColor"
                                viewBox="0 0 640 512"
                            >
                                <path d="M620.61 366.55L512 320v192h112c8.84 0 16-7.16 16-16V395.96a32 32 0 0 0-19.39-29.41zM0 395.96V496c0 8.84 7.16 16 16 16h112V320L19.39 366.55A32 32 0 0 0 0 395.96zm464.46-149.28L416 217.6V102.63c0-8.49-3.37-16.62-9.38-22.63L331.31 4.69c-6.25-6.25-16.38-6.25-22.62 0L233.38 80c-6 6-9.38 14.14-9.38 22.63V217.61l-48.46 29.08A31.997 31.997 0 0 0 160 274.12V512h96v-96c0-35.35 28.66-64 64-64s64 28.65 64 64v96h96V274.12c0-11.24-5.9-21.66-15.54-27.44z" />
                            </svg>
                        ),
                    },
                    {
                        text: 'Find value and investment opportunities',
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
                        text: 'Navigate inspections and negotiations',
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
                        text: 'Assist with relocation planning',
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
                buttonText="Connect With a Memphis Realtor"
            />

            <FinalInfoSection
                property={{
                    title: 'Is Memphis Right for You?',
                    rightTitle: 'Explore Other Tennessee Cities',
                    description:
                        'Memphis may be a great fit if you’re looking for:',
                    points: [
                        'Extremely affordable housing',
                        'Big-city amenities',
                        'Cultural depth and history',
                        'Job opportunities in logistics and healthcare',
                        'Strong rental and investment potential',
                    ],

                    footer: 'For many relocating buyers, Memphis offers unmatched value and culture.',
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
            <p className="text-base font-bold md:text-2xl">{value}</p>
        </div>
    </div>
);
