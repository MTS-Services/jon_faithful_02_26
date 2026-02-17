import { ArrowRightIcon } from 'lucide-react';
import CallToActionSection from '../cities/callTo-action-section';
import FinalInfoSection from '../cities/final-info-section';
import InfoTabsSection from '../cities/info-tabs-section';
import MoveLocationSection from '../cities/move-location-section';
import NeighborhoodsSection from '../cities/neighborhoods-section';
import WhyMoveSection from '../cities/why-move';

// WHY MOVE DATA
const whyMoveData = {
    title: 'Why People Are Moving to Chattanooga',
    description:
        'Chattanooga consistently ranks as one of Tennessee’s most desirable relocation cities.',
    points: [
        'Access to mountains, rivers, and outdoor recreation',
        'No state income tax in Tennessee',
        'Growing tech and innovation scene',
        'Revitalized downtown and riverfront',
        'Affordable housing compared to many U.S. cities',
        'Family-friendly neighborhoods and suburbs',
    ],
    conclusion:
        'Many people moving to Tennessee choose Chattanooga for its balance of adventure, opportunity, and livability.',
    imageUrl:
        'https://whytennessee.com/wp-content/uploads/2025/12/Bristol-Virginia-Tennessee-Slogan-Sign-at-night.jpeg',
    videoUrl:
        'https://whytennessee.com/wp-content/uploads/2025/12/Aerial_4K_Drone_Video_Over_the_Tennessee_River_Looking_into_Downtown_Chattanooga_on_a_Beautiful_Spring_Evening1.mp4',
};

// LOCATION DATA
const locationData = {
    title: 'Where Is Chattanooga Located?',
    description:
        'Chattanooga is located in Southeast Tennessee, along the Tennessee River and at the foothills of the Appalachian Mountains.',
    distances: [
        '2 hours to Nashville',
        '2 hours to Knoxville',
        '2 hours to Atlanta',
        'Easy access to Alabama and Georgia',
    ],
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d418104.00558382407!2d-85.3093995!3d35.0457984!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886060408a83e785%3A0x2471261f898728aa!2sChattanooga%2C%20TN%2C%20USA!5e0!3m2!1sen!2sbd!4v1771221011449!5m2!1sen!2sbd',
    conclusion: 'Easy access to Alabama and Georgia',
};

const neighborhoods = [
    {
        name: 'Downtown Chattanoogal',
        features: [
            'Walkable lifestyle',
            'Condos and lofts',
            'Riverfront access',
            'Restaurants and nightlife',
        ],
    },
    {
        name: 'North Shore',
        features: [
            'Popular with young professionals',
            'Shops, cafes, and parks',
            'Close to downtown',
        ],
    },
    {
        name: 'Signal Mountain',
        features: [
            'Mountain views',
            'Highly rated schools',
            'Quiet, upscale neighborhoods',
        ],
    },
    {
        name: 'Hixson',
        features: [
            'Suburban living',
            'New construction and established homes',
            'Shopping and dining hubs',
        ],
    },
    {
        name: 'East Brainerd',
        features: [
            'Family-friendly',
            'Convenient access to schools and retail',
            'Wide range of housing options',
        ],
    },
];

const tabs = [
    {
        id: 'tab1',
        label: 'Schools & Education',
        title: 'Schools & Education',
        intro: 'Chattanooga provides a range of education options:',
        items: [
            'Public and private K-12 schools',
            'Charter schools',
            'University of Tennessee at Chattanooga (UTC)',
            'Community colleges and technical schools',
        ],
        footer: 'Families appreciate the variety of educational opportunities across the metro area.',
        imageUrl:
            '/assets/images/Biology_class_at_high_school_lab1-2048x1365.jpeg',
    },
    {
        id: 'tab2',
        label: 'Healthcare & Employment',
        title: 'Healthcare & Employment',
        intro: 'Chattanooga has a diverse and growing employment base. Major industries include:',
        items: [
            'Healthcare and medical services',
            'Manufacturing and logistics',
            'Technology and startups',
            'Education and government',
        ],
        footer: 'Major healthcare systems and employers support long-term job stability in the region.',
        imageUrl: '/assets/images/Team_of_Medical.jpeg',
    },
    {
        id: 'tab3',
        label: 'Things to Do in Chattanooga',
        title: 'Things to Do in Chattanooga',
        intro: 'Chattanooga is an outdoor lover’s paradise:',
        items: [
            'Hiking and climbing at Lookout Mountain',
            'Rock climbing, kayaking, and paddleboarding',
            'Tennessee Aquarium and riverfront parks',
            'Bike trails and greenways',
            'Festivals, live music, and local breweries',
        ],
        footer: 'Chattanooga offers a year-round active lifestyle with city conveniences.',
        imageUrl: '/assets/images/pexels-kelly-2519390-scaled-1-2048x1536.jpg',
    },
    {
        id: 'tab4',
        label: 'Homes for Sale in Chattanooga',
        title: 'Homes for Sale in Chattanooga',
        intro: 'Chattanooga’s housing market includes:',
        items: [
            'Single-family homes',
            'Townhomes and condos',
            'New construction communities',
            'Mountain and river-view properties',
        ],
        footer: 'Housing options range from affordable starter homes to luxury properties in Signal Mountain and riverfront areas.',
        imageUrl: '/assets/images/Beautiful_home_exterior.jpeg',
        cta: {
            label: 'Homes for Sale',
            href: '/homes-for-sale',
            icon: <ArrowRightIcon className="h-4 w-4" />,
        },
    },
];
export default function ChattanoogaPage() {
    return (
        <div>
            <WhyMoveSection whyMove={whyMoveData} />
            <MoveLocationSection location={locationData} />

            {/* COST OF LIVING SECTION */}
            <div className="container mx-auto px-4 py-16 lg:px-16">
                <h2 className="mb-6 text-center text-xl font-bold md:text-2xl lg:text-4xl">
                    Cost of Living in Chattanooga
                </h2>
                <p className="mb-10 text-center text-gray-600">
                    Chattanooga offers strong value compared to similar scenic
                    cities.
                </p>

                <div className="grid gap-6 md:grid-cols-4">
                    <CostCard title="Mediam home price" value="$325,000" />
                    <CostCard
                        title="2-bedroom apartment"
                        value="$1,300–$1,700"
                    />
                    <CostCard
                        title="Utilities"
                        value="Near or below national average"
                    />
                    <CostCard
                        title="Property taxes"
                        value="Low compared to many states"
                    />
                </div>
            </div>
            <div className="bg-primary py-16">
                <div className="container mx-auto px-4 lg:px-16">
                    <h2 className="mb-6 text-center text-xl font-bold text-primary-foreground md:text-2xl lg:text-4xl">
                        Best Neighborhoods in Chattanooga
                    </h2>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
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
                title="Work With a Chattanooga Realtor"
                description="A local Chattanooga realtor can help you:"
                // benefits={[
                //     'Navigate neighborhood differences',
                //     'Identify the best value homes',
                //     'Coordinate showings and inspections',
                //     'Assist with relocation details',
                // ]}
                benefits={[
                    {
                        text: 'Identify the best neighborhoods',
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
                        text: 'Navigate competitive listings',
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
                        text: 'Arrange virtual tours for relocation buyers',
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
                        text: 'Negotiate pricing and inspections',
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
                buttonText="Connect With a Chattanooga Realtor"
            />

            <FinalInfoSection
                property={{
                    title: 'Is Chattanooga Right for You?',
                    rightTitle: 'Explore Other Tennessee Cities',
                    description:
                        'Chattanooga may be a perfect fit if you’re looking for:',

                    points: [
                        'Outdoor-focused lifestyle',
                        'Scenic mountain and river views',
                        'Growing job market',
                        'Affordable housing compared to similar cities',
                        'A revitalized and energetic downtown',
                    ],

                    footer:
                        'For many relocating buyers, Chattanooga offers one of the best lifestyle-to-cost ratios in Tennessee.',
                    cities: [
                        'Knoxville',
                        'Nashville',
                        'Johnson City',
                        'Franklin',
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
