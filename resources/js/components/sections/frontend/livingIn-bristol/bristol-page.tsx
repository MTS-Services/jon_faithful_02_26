import CallToActionSection from '@/components/sections/frontend/cities/callTo-action-section';
import InfoTabsSection from '@/components/sections/frontend/cities/info-tabs-section';
import NeighborhoodsSection from '@/components/sections/frontend/cities/neighborhoods-section';
import { ArrowRightIcon } from 'lucide-react';
import React from 'react';
import FinalInfoSection from '../cities/final-info-section';
import MoveLocationSection from '../cities/move-location-section';
import WhyMoveSection from '../cities/why-move';

// WHY MOVE DATA
const whyMoveData = {
    title: 'Why People Are Moving to Bristol',
    description:
        'Bristol appeals to buyers looking for affordability, character, and a slower pace of life.',
    points: [
        'Low home prices compared to national averages',
        'No state income tax in Tennessee',
        'Historic downtown and cultural events',
        'Easy access to Johnson City and Kingsport',
        'Strong sense of community',
        'Short commute times',
    ],
    conclusion:
        'Many people moving to the Tri-Cities choose Bristol for its affordable housing and distinctive personality.',
    imageUrl:
        'https://whytennessee.com/wp-content/uploads/2025/12/Bristol-Virginia-Tennessee-Slogan-Sign-at-night.jpeg',
    videoUrl:
        'https://whytennessee.com/wp-content/uploads/2025/12/Bristol-Tennesse_-Virginia-aerial-fast-push-over-state-street.mp4',
};

// LOCATION DATA
const locationData = {
    title: 'Where Is Bristol Located?',
    description:
        'Bristol sits directly on the Tennessee–Virginia state line. Approximate distances:',
    distances: [
        '20 minutes to Johnson City',
        '20 minutes to Kingsport',
        '1 hour to Asheville, NC',
        '2 hours to Knoxville',
    ],
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51457.1062024796!2d-82.22271618683415!3d36.588667533816285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8850702df2f8f8b3%3A0x64e8e04e9c71c4c9!2sBristol%2C%20TN!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus',
    conclusion:
        'Its location provides easy access to both states while benefiting from Tennessee’s tax advantages. Shape',
};

const neighborhoods = [
    {
        name: 'Downtown Bristol',
        features: [
            'Historic homes and buildings',
            'Walkable streets',
            'Restaurants, museums, and music venues',
        ],
    },
    {
        name: 'Fairmount',
        features: [
            'Established neighborhoods',
            'Quiet residential streets',
            'Close to schools and shopping',
        ],
    },
    {
        name: 'Avoca Area',
        features: [
            'Affordable housing options',
            'Easy access to major roads',
            'Family-friendly atmosphere',
        ],
    },
    {
        name: 'Rural Bristol',
        features: [
            'Larger lots and privacy',
            'Mountain and countryside views',
            'Short drive to city amenities',
        ],
    },
];

const tabs = [
    {
        id: 'tab1',
        label: 'Schools & Education',
        title: 'Schools & Education',
        intro: 'Bristol offers:',
        items: [
            'Public schools serving the city',
            'Private school options nearby',
            'Access to Northeast State Community College and ETSU within driving distance',
        ],
        footer: 'Education options support families relocating to the area.',
        imageUrl:
            'https://whytennessee.com/wp-content/uploads/2026/01/Be_focus_and_patient_while_teaching_new_things1-scaled.jpeg',
    },
    {
        id: 'tab2',
        label: 'Healthcare & Employment',
        title: 'Healthcare & Employment',
        intro: 'Bristol residents benefit from regional healthcare and employment opportunities, including:',
        items: [
            'Medical centers throughout the Tri-Cities',
            'Manufacturing and industrial employers',
            'Tourism & speedway-related jobs',
        ],
        footer: 'Healthcare and regional employers provide stable job options.',
        imageUrl:
            'https://whytennessee.com/wp-content/uploads/2026/01/Cropped-shot-of-diverse-coworkers-working-together-in-boardroom_-brainstorming_-discussing-and-analyzing-and-planning-business-strategy-scaled.jpeg',
    },
    {
        id: 'tab3',
        label: 'Things to Do in Bristol',
        title: 'Things to Do in Bristol',
        intro: 'Bristol offers a variety of activities for residents:',
        items: [
            'Bristol Motor Speedway events',
            'Birthplace of Country Music Museum',
            'Local festivals & live music',
            'Outdoor recreation & parks',
        ],
        footer: 'Bristol combines culture, history, and outdoor access in a small-city setting.',
        imageUrl:
            'https://whytennessee.com/wp-content/uploads/2026/01/Bristol_Motor_Speedway_Preparing_For_The_Speedway_Classic_2025_Between_The_Atlanta_Braves_and_the_Cincinnati_Reds1-scaled.jpeg',
    },
    {
        id: 'tab4',
        label: 'Homes for Sale in Bristol',
        title: 'Homes for Sale in Bristol',
        intro: 'Bristol’s housing market includes:',
        items: [
            'Affordable single-family homes',
            'Historic properties',
            'Newer subdivisions',
            'Rural homes with acreage',
        ],
        footer: 'Homes in Bristol are often priced lower than surrounding cities, making it a great option for first-time buyers and retirees.',
        imageUrl:
            'https://whytennessee.com/wp-content/uploads/2025/12/pexels-lebele-11935244-scaled.jpg',

        cta: {
            label: 'Homes for Sale',
            href: '/homes-for-sale',
            icon: <ArrowRightIcon className="h-4 w-4" />,
        },
    },
];

const BristolPage: React.FC<{ city: any }> = ({ city }) => {
    return (
        <div className="font-sans antialiased">
            <WhyMoveSection whyMove={whyMoveData} />
            <MoveLocationSection location={locationData} />

            {/* COST OF LIVING SECTION */}
            <section className="container mx-auto px-4 py-16 lg:px-16">
                <h2 className="mb-6 text-center text-3xl font-bold md:text-[42px]">
                    Cost of Living in Bristol
                </h2>
                <p className="mb-10 text-center text-[#000]">
                    Bristol is one of the most affordable cities in Tennessee.
                </p>

                <div className="grid gap-6 md:grid-cols-4">
                    <CostCard title="Mediam home price" value="$220,000" />
                    <CostCard title="2-bedroom apartment" value="$900–$1,200" />
                    <CostCard title="Utilities" value="Below national avg" />
                    <CostCard title="Property taxes" value="Very Low" />
                </div>
            </section>

            <div className="bg-primary py-16">
                <div className="container mx-auto px-4 sm:px-0 lg:px-16">
                    <h2 className="mb-6 text-center text-3xl font-medium text-primary-foreground md:text-[40px]">
                        Best Neighborhoods in Bristol
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
                title="Work With a Bristol Realtor"
                description="A local Bristol realtor can help you:"
                benefits={[
                    {
                        text: 'Navigate neighborhood differences',
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
                        text: 'Identify the best value homes',
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
                        text: 'Coordinate showings and inspections',
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
                        text: 'Assist with relocation details',
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
                    title: 'Is Bristol Right for You?',
                    rightTitle: 'Explore Nearby Cities',
                    description:
                        'Bristol may be the right fit if you’re looking for: Low cost of living Small-town charm Rich music and cultural history Affordable homeownership Easy access to the Tri-Cities For many relocating buyers, Bristol offers a unique blend of affordability and character. Shape',
                    cities: [
                        {name: 'Johnson City', route: route('frontend.livingInJohnsonCity')},
                        {name: 'Kingsport', route: route('frontend.livingInKingsport')},
                        {name: 'Knoxville', route: route('frontend.livingInKnoxville')},
                        {name: 'Chattanooga', route: route('frontend.livingInChattanooga')},
                    ],
                }}
            />
        </div>
    );
};

const CostCard: React.FC<{ title: string; value: string }> = ({
    title,
    value,
}) => (
    <div className="overflow-hidden rounded-xl border bg-gray-100/50 text-center shadow-sm transition-shadow hover:shadow-md">
        <div className="bg-primary py-4">
            <p className="text-xl font-semibold text-white">{title}</p>
        </div>
        <div className="py-5 lg:py-10">
            <p className="text-2xl font-bold">{value}</p>
        </div>
    </div>
);
export default BristolPage;
