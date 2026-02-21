import { City } from '@/types';
import CallToActionSection from '../cities/callTo-action-section';
import FinalInfoSection from '../cities/final-info-section';
import InfoTabsSection from '../cities/info-tabs-section';
import MoveLocationSection from '../cities/move-location-section';
import NeighborhoodsSection from '../cities/neighborhoods-section';
import WhyMoveSection from '../cities/why-move';

// WHY MOVE DATA
const whyMoveData = {
    title: 'Why People Are Moving to Cookeville',
    description:
        'Cookeville continues to attract people seeking simplicity, affordability, and community.',
    points: [
        'Affordable housing compared to many Tennessee cities',
        'No state income tax in Tennessee',
        'Small-city feel with modern amenities',
        'Home to Tennessee Tech University',
        'Close to lakes, state parks, and outdoor recreation',
        'Growing popularity with retirees and remote workers',
    ],
    conclusion:
        'Many buyers choose Cookeville for its balance of affordability and quality of life.',
    imageUrl:
        'assets/images/Why_Cookeville_is_a_Great_Place_to_Call_Home (1).jpg',
    imageUrl2:
        'assets/images/Burgess-Falls-State-Natural-Area-Tennessee-Cookeville.webp',
};

// LOCATION DATA
const locationData = {
    title: 'Where Is Cookeville Located?',
    description:
        'Cookeville is located in Upper Cumberland Middle Tennessee, approximately:',
    distances: [
        '1 hour east of Nashville',
        '1.5 hours to Knoxville',
        '1.5 hours to Chattanooga',
    ],
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d412552.9512243097!2d-85.544589!3d36.116154!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886718a70cf14c59%3A0x2f4ecce7ea405e1d!2sCookeville%2C%20TN!5e0!3m2!1sen!2sus!4v1771221104094!5m2!1sen!2sus',
    conclusion:
        'Its central location offers access to larger cities while maintaining a quieter lifestyle.',
};

const neighborhoods = [
    {
        name: 'Downtown Cookeville',
        features: [
            'Local shops and dining',
            'Walkable areas',
            'Historic charm',
        ],
    },
    {
        name: 'North Cookeville',
        features: [
            'Newer subdivisions',
            'Family-friendly neighborhoods',
            'Close to schools and shopping',
        ],
    },
    {
        name: 'South Cookeville',
        features: [
            'Affordable housing options',
            'Easy access to major roads',
            'Mix of rural and suburban properties',
        ],
    },
    {
        name: 'Rural Putnam County',
        features: [
            'Larger lots and acreage',
            'Quiet countryside living',
            'Short drive to town amenities',
        ],
    },
];

const tabs = [
    {
        id: 'tab1',
        label: 'Schools & Education',
        title: 'Schools & Education',
        intro: 'Cookeville is home to:',
        items: [
            'Tennessee Tech University',
            'Putnam County public schools',
            'Private and charter school options',
        ],
        footer: 'Education and community involvement are central to Cookeville’s identity.',
        imageUrl: '/assets/images/cookeville/Pupils leaving elementary school building. Children smiling walking outside.jpeg',
    },
    {
        id: 'tab2',
        label: 'Healthcare & Employment',
        title: 'Healthcare & Employment',
        intro: 'Cookeville provides stable employment opportunities in:',
        items: [
            'Healthcare and medical services',
            'Education and university employment',
            'Manufacturing and logistics',
            'Retail and local businesses',
        ],
        footer: 'Healthcare facilities serve both the city and surrounding rural areas.',
        imageUrl: '/assets/images/Doctor_and_hospital.jpeg',
    },
    {
        id: 'tab3',
        label: 'Things to Do in Cookeville',
        title: 'Things to Do in Cookeville',
        intro: 'Cookeville is a gateway to outdoor adventure:',
        items: [
            'Cummins Falls State Park',
            'Burgess Falls State Park',
            'Window Cliffs State Natural Area',
            'Hiking, kayaking, and camping',
            'Community events and local festivals',
        ],
        footer: 'Outdoor recreation is a major draw for residents.',
        imageUrl:
            '/assets/images/crowd_with_raised_hands_at_concert_festival_banner1-2048x1182.jpeg',
    },
    {
        id: 'tab4',
        label: 'Homes for Sale in Cookeville',
        title: 'Homes for Sale in Cookeville',
        intro: 'Cookeville’s housing market includes:',
        items: [
            'Affordable single-family homes',
            'New construction communities',
            'Townhomes and condos',
            'Rural homes with acreage',
        ],
        footer: 'Cookeville offers excellent value for buyers looking for space and affordability.',
        imageUrl: '/assets/images/Beautiful_home_exterior.jpeg',
        cta: {
            label: 'Homes for Sale',
            href: '/homes-for-sale',
            icon: '',
        },
    },
];
export default function CookevillePage({ city }: { city: City }) {
    return (
        <div>
            <WhyMoveSection whyMove={whyMoveData} />
            <MoveLocationSection location={locationData} />

            {/* COST OF LIVING SECTION */}
            <div className="container mx-auto px-4 py-16 lg:px-16">
                <h2 className="mb-6 text-center text-3xl font-bold">
                    Cost of Living in Cookeville
                </h2>
                <p className="mb-10 text-center text-gray-600">
                    Cookeville offers a low cost of living compared to national
                    and state averages.
                </p>

                <div className="grid gap-6 md:grid-cols-4">
                    <CostCard title="Mediam home price" value="$290,000" />
                    <CostCard
                        title="2-bedroom apartment"
                        value="$1,100–$1,400"
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
                        Best Neighborhoods in Cookeville
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
                        text: 'Find affordable homes and acreage',
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
                        text: 'Navigate rural property considerations',
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
                        text: 'Understand local zoning and land use',
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
                    title: 'Is Cookeville Right for You?',
                    rightTitle: 'Explore Nearby Cities',
                    description:
                        'Cookeville may be a great fit if you’re looking for:',
                    points: [
                        'Affordable housing',
                        'Small-city lifestyle',
                        'Access to outdoor recreation',
                        'Strong sense of community',
                        'Slower pace of life',
                    ],

                    footer: 'For many relocating buyers, Cookeville offers peace, value, and natural beauty.',
                    cities: [
                       {name: 'Nashville', route: route('frontend.livingInNashville')},
                       {name: 'Chattanooga', route: route('frontend.livingInChattanooga')},
                       {name: 'Knoxville', route: route('frontend.livingInKnoxville')},
                       {name: 'Clarksville', route: route('frontend.livingInClarksville')},
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
