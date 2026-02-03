import CallToActionSection from '../cities/callTo-action-section';
import FinalInfoSection from '../cities/final-info-section';
import InfoTabsSection from '../cities/info-tabs-section';
import MoveLocationSection from '../cities/move-location-section';
import NeighborhoodsSection from '../cities/neighborhoods-section';
import WhyMoveSection from '../cities/why-move';

const whyMoveData = {
    title: 'Why People Are Moving to Johnson City',
    description:
        'Johnson City has quietly become a relocation hotspot, especially for buyers moving from higher-cost states.',
    points: [
        'No state income tax in Tennessee',
        'Strong healthcare and education job market',
        'Access to the Appalachian Mountains',
        'Family-friendly neighborhoods',
        'Small-city feel with modern amenities',
    ],
    conclusion:
        'Many new residents cite quality of life as the top reason they choose Johnson City.',
    imageUrl:
        '/assets/images/Johnson_City__TN-8-30-2018_Large_sign_in_downtown_proclaiming_Johnson_City__Tennessee1-scaled.jpeg',
    videoUrl:
        'https://whytennessee.com/wp-content/uploads/2025/12/aerial-push-in-to-johnson-city-tennessee-skyline-in-east-tennessee.mp4',
};

// LOCATION DATA
const locationData = {
    title: 'Where Is Johnson City Located?',
    description:
        'Johnson City is located in Northeast Tennessee, within the Tri-Cities region (Johnson City, Kingsport, and Bristol).',
    distances: [
        '15 minutes to Kingsport',
        '25 minutes to Bristol',
        '2 hours to Knoxville',
        '4 hours to Charlotte, NC',
    ],
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51457.1062024796!2d-82.22271618683415!3d36.588667533816285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8850702df2f8f8b3%3A0x64e8e04e9c71c4c9!2sBristol%2C%20TN!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus',
    conclusion:
        'Its location makes it ideal for both commuters and outdoor enthusiasts.',
};

const neighborhoods = [
    {
        name: 'North Johnson City',
        features: [
            'Established neighborhoods',
            'Close to downtown and ETSU',
            'Mix of historic and modern homes',
        ],
    },
    {
        name: 'Boones Creek',
        features: [
            'Popular with families',
            'Newer subdivisions',
            'Easy access to Jonesborough and I-26',
        ],
    },
    {
        name: 'Gray',
        features: [
            'Quiet, suburban feel',
            'New construction options',
            'Great for commuters',
        ],
    },
    {
        name: 'Downtown Johnson City',
        features: [
            'Walkable lifestyle',
            'Apartments, townhomes, lofts',
            'Restaurants, breweries, and events',
        ],
    },
];

const tabs = [
    {
        id: 'tab1',
        label: 'Schools & Education',
        title: 'Schools & Education',
        intro: 'Johnson City is home to:',
        items: [
            'East Tennessee State University (ETSU)',
            'Public and private K-12 schools',
            'Proximity to Northeast State Community College',
        ],
        footer: 'Education and healthcare are two of the area’s strongest sectors.',
        imageUrl: '/assets/images/pexels-denil-33448751-2048x1366 (1).jpg',
    },
    {
        id: 'tab2',
        label: 'Healthcare & Employment',
        title: 'Healthcare & Employment',
        intro: 'Johnson City is a major healthcare hub for Northeast Tennessee. Major employers include:',
        items: [
            'Ballad Health',
            'ETSU & ETSU Health',
            'Manufacturing and logistics companies',
            'Regional medical and specialty centers',
        ],
        footer: 'Healthcare professionals frequently relocate to Johnson City for long-term career opportunities.',
        imageUrl: '/assets/images/pexels-kelly-2833739-2048x1150.jpg',
    },
    {
        id: 'tab3',
        label: 'Things to Do in Johnson City',
        title: 'Things to Do in Johnson City',
        intro: 'Outdoor lovers thrive here:',
        items: [
            'Hiking and biking trails',
            'Appalachian and Cherokee National Forest access',
            'Boone Lake and Watauga Lake nearby',
            'Local breweries and live music',
            'Annual festivals and community events',
        ],
        footer: 'Johnson City blends outdoor adventure with small-city charm.',
        imageUrl:
            '/assets/images/View-From-Fire-Tower-Bays-Mountain-Park-Kingsport-TN-2048x1362.jpeg',
    },
    {
        id: 'tab4',
        label: 'Homes for Sale in Johnson City',
        title: 'Homes for Sale in Johnson City',
        intro: 'The Johnson City housing market includes:',
        items: [
            'Affordable single-family homes',
            'New construction neighborhoods',
            'Townhomes and condos',
            'Rural properties just outside the city',
        ],
        footer: 'Homes range from starter properties to larger family homes with mountain views.',
        imageUrl: '/assets/images/apartment-building-in-sunny-day-2048x1363.jpeg',
        cta: {
            label: 'Homes for Sale',
            href: '/chattanooga-homes-for-sale',
            icon: '',
        },
    },
];
export default function JohnsonCityPage() {
    return (
        <div>
            <WhyMoveSection whyMove={whyMoveData} />
            <MoveLocationSection location={locationData} />

            {/* COST OF LIVING SECTION */}
            <div className="container mx-auto px-4 py-16 lg:px-16">
                <h2 className="mb-6 text-center text-3xl font-bold">
                    Cost of Living in Johnson City
                </h2>
                <p className="mb-10 text-center text-gray-600">
                   Johnson City consistently ranks as one of the most affordable cities in Tennessee.
                </p>

                <div className="grid gap-6 md:grid-cols-4">
                    <CostCard title="Mediam home price" value="$285,000" />
                    <CostCard
                        title="2-bedroom apartment"
                        value="$1,100–$1,400"
                    />
                    <CostCard
                        title="Utilities"
                        value="Below national average"
                    />
                    <CostCard title="Property taxes" value="Very low" />
                </div>
            </div>
            <div className="bg-primary py-16">
                <div className="container mx-auto px-4 lg:px-16">
                    <h2 className="mb-6 text-center text-3xl font-bold text-primary-foreground">
                        Best Neighborhoods in Johnson City
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
                title="Work With a Johnson City Realtor"
                description="A local Bristol realtor can help you:"
                benefits={[
                    'Neighborhood differences',
                    'School districts',
                    'Pricing trends',
                    'Relocation logistics',
                ]}
                buttonText="Connect With a Johnson City Realtor"
            />

            <FinalInfoSection
                property={{
                    title: 'Is Johnson City Right for You?',
                    rightTitle: 'Explore Nearby Cities',
                    description:
                        'Johnson City may be a great fit if you’re looking for: Affordable housing Strong healthcare employment Mountain and outdoor lifestyle Friendly, close-knit community Lower cost of living without sacrificing quality For many relocating buyers, Johnson City offers one of the best values in Tennessee.',
                    cities: [
                        'Kingsport',
                        'Bristol',
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
