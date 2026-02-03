import CallToActionSection from '@/components/sections/frontend/cities/callTo-action-section';
import InfoTabsSection from '@/components/sections/frontend/cities/info-tabs-section';
import NeighborhoodsSection from '@/components/sections/frontend/cities/neighborhoods-section';
import React from 'react';
import FinalInfoSection from '../cities/final-info-section';
import MoveLocationSection from '../cities/move-location-section';
import WhyMoveSection from '../cities/why-move';
import { ArrowRightIcon } from 'lucide-react';

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
        'Its location provides easy access to both states while benefiting from Tennessee’s tax advantages.',
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
            'Family-friendly atmosphere',
            'Easy access to major roads',
            'Parks and community spaces',
        ],
    },
    {
        name: 'Avoca Area (Suburbs)',
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
            'Access to Northeast State Community College and ETSU',
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
            label: 'Learn More',
            href: '/chattanooga-homes-for-sale',
            icon: <ArrowRightIcon className="h-4 w-4" />,
        },
    },
];

const BristolPage: React.FC = () => {
    return (
        <div className="font-sans antialiased">
            <WhyMoveSection whyMove={whyMoveData} />
            <MoveLocationSection location={locationData} />

            {/* COST OF LIVING SECTION */}
            <section className="container mx-auto px-4 py-16 lg:px-16">
                <h2 className="mb-6 text-center text-3xl font-bold">
                    Cost of Living in Bristol
                </h2>
                <p className="mb-10 text-center text-gray-600">
                    Bristol is one of the most affordable cities in Tennessee.
                </p>

                <div className="grid gap-6 md:grid-cols-4">
                    <CostCard title="Median Home Price" value="$220,000" />
                    <CostCard title="2 Bedroom Rent" value="$900–$1,200" />
                    <CostCard title="Utilities" value="Below national avg" />
                    <CostCard title="Property Tax" value="Very Low" />
                </div>
            </section>

            <section className="bg-gray-100 py-16">
                <div className="container mx-auto px-4 lg:px-16">
                    <h2 className="mb-6 text-center text-3xl font-bold">
                        Bristol Neighborhoods
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
            </section>
            <InfoTabsSection tabs={tabs} />
            <CallToActionSection
                title="Work With a Bristol Realtor"
                description="A local expert makes all the difference in the Tri-Cities market."
                benefits={[
                    'Navigate neighborhood differences',
                    'Identify the best value homes',
                    'Coordinate showings and inspections',
                    'Assist with relocation details',
                ]}
                buttonText="Connect With a Bristol Realtor"
            />

            <FinalInfoSection
                property={{
                    title: 'Is Bristol Right for You?',
                    rightTitle: 'Explore Nearby Cities',
                    description:
                        'Bristol may be the right fit if you’re looking for: Low cost of living, small-town charm, rich music and cultural history, affordable homeownership, and easy access to the Tri-Cities. For many relocating buyers, Bristol offers a unique blend of affordability and character.',
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
