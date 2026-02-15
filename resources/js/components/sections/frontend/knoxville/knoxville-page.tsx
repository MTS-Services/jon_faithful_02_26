import { ArrowRightIcon } from "lucide-react";
import CallToActionSection from "../cities/callTo-action-section";
import FinalInfoSection from "../cities/final-info-section";
import InfoTabsSection from "../cities/info-tabs-section";
import MoveLocationSection from "../cities/move-location-section";
import NeighborhoodsSection from "../cities/neighborhoods-section";
import WhyMoveSection from "../cities/why-move";

const whyMoveData = {
    title: 'Why People Are Moving to Knoxville',
    description:
        'Knoxville consistently attracts new residents from states like California, Florida, Texas, and New York. Here’s why:',
    points: [
        'Affordable cost of living compared to national averages',
        'No state income tax in Tennessee',
        'Strong job growth in healthcare, education, manufacturing, and tech',
        'University of Tennessee energy and culture',
        'Close proximity to the Smoky Mountains',
        'Family-friendly neighborhoods and suburbs',
    ],
    conclusion:
        'Knoxville offers the charm of a mid-sized city with the amenities of a much larger metro.',
    imageUrl:
        '/assets/images/Paddling_on_the_Tennessee_River_in_Knoxville1-2048x1367.jpeg',
    videoUrl:
        'https://whytennessee.com/wp-content/uploads/2025/12/Knoxville_-Tennessee.-View-from-above-of-University-of-Tennessee-campus-historical-buildings.mp4',
};

// LOCATION DATA
const locationData = {
    title: 'Where Is Knoxville Located?',
    description:
        'Knoxville is located in East Tennessee, along the Tennessee River, about:',
    distances: [
        '30 minutes from Great Smoky Mountains National Park',
        '1 hour from Asheville, NC',
        '2.5 hours from Nashville',
        '4 hours from Atlanta',
    ],
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51457.1062024796!2d-82.22271618683415!3d36.588667533816285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8850702df2f8f8b3%3A0x64e8e04e9c71c4c9!2sBristol%2C%20TN!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus',
    conclusion: 'Its central location makes it ideal for outdoor lovers and frequent travelers.',
};

const neighborhoods = [
    {
        name: 'Downtown Knoxville',
        features: [
            'Walkable lifestyle',
            'Condos, lofts, and apartments',
            'Restaurants, bars, and entertainment',
            'Popular with young professionals',
        ],
    },
    {
        name: 'West Knoxville',
        features: [
            'Highly rated schools',
            'Suburban living',
            'Newer homes and developments',
            'Great for families',
        ],
    },
    {
        name: 'West Knoxville',
        features: [
            'Shopping and dining hubs',
            'Strong resale value',
            'Mix of established and newer neighborhoods',
        ],
    },
    {
        name: 'North Knoxville',
        features: [
            'Historic homes',
            'Revitalized areas',
            'Close to downtown',
        ],
    },
    {
        name: 'South Knoxville',
        features: [
            'Close to downtown',
            'Riverfront living',
            'Growing popularity and development',
        ],
    },
];



const tabs = [
    {
        id: 'tab1',
        label: 'Schools & Education',
        title: 'Schools & Education',
        intro: 'Knoxville is home to:',
        items: [
            'University of Tennessee (UTK)',
            'Public and private K-12 schools',
            'Strong suburban school districts like Farragut',
        ],
        footer: 'Education options support families relocating to the area.',
        imageUrl:
            '/assets/images/football_team1-2048x1365.jpeg',
    },
    {
        id: 'tab2',
        label: 'Healthcare & Employment',
        title: 'Healthcare & Employment',
        intro: 'Knoxville has a robust healthcare and employment base, including:',
        items: [
            'University of Tennessee Medical Center',
            'Covenant Health',
            'Oak Ridge National Laboratory (nearby)',
            'Manufacturing, logistics, and tech employers',
        ],
        footer: 'The region continues to grow as employers expand in East Tennessee.',
        imageUrl: '/assets/images/Team_building_concept._Office_life1-2048x969.jpeg',
    },
    {
        id: 'tab3',
        label: 'Things to Do in Konxville',
        title: 'Things to Do in Konxville',
        intro: 'Living in Knoxville means you’re never short on activities:',
        items: [
            'Hiking, camping, and waterfalls in the Smokies',
            'Boating and fishing on the Tennessee River',
            'UT Volunteers sports and events',
            'Live music, festivals, and local breweries',
            'Shopping, dining, and cultural attractions',
        ],
        footer: 'Knoxville offers a year-round outdoor lifestyle with city convenience.',
        imageUrl: '/assets/images/University_of_Tennessee_football_stadium_and_campus_in_the_early_morning_light1-2048x1149.jpeg',
    },
    {
        id: 'tab4',
        label: 'Homes for Sale in Konxville',
        title: 'Homes for Sale in Konxville',
        intro: 'Knoxville’s housing market includes:',
        items: [
            'Single-family homes',
            'Condos and townhomes',
            'New construction communities',
            'Lakefront and mountain-view properties',
        ],
        footer: 'Inventory ranges from affordable starter homes to luxury properties in West Knoxville and Farragut.',
        imageUrl: '/assets/images/Beautiful_home_exterior.jpeg',
        cta: {
            label: 'Homes for Sale',
            href: '/homes-for-sale',
            icon: '',
        },
    },
];
export default function KnoxvillePage() {
    return (
        <div>
            <WhyMoveSection whyMove={whyMoveData} />
            <MoveLocationSection location={locationData} />

            {/* COST OF LIVING SECTION */}
            <div className="container mx-auto px-4 py-16 lg:px-16">
                <h2 className="mb-6 text-center text-3xl font-bold">
                   Cost of Living in Knoxville
                </h2>
                <p className="mb-10 text-center text-gray-600">
                    Knoxville remains one of the more affordable cities in Tennessee.
                </p>

                <div className="grid gap-6 md:grid-cols-4">
                    <CostCard title="Mediam home price" value="$325,000" />
                    <CostCard
                        title="2-bedroom apartment"
                        value="$1,300–$1,600"
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
                    <h2 className="mb-6 text-center text-3xl font-bold text-primary-foreground">
                        Best Neighborhoods & Areas in Knoxville
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
                title="Work With a Knoxville Realtor"
                description="Working with a local Knoxville realtor helps you::"
                benefits={[
                    'Identify the best neighborhoods',
                    'Navigate competitive listings',
                    'Arrange virtual tours if relocating',
                    'Negotiate pricing and inspections',
                ]}
                buttonText="Connect With a Knoxville Realtor"
            />

            <FinalInfoSection
                property={{
                    title: 'Is Knoxville Right for You?',
                    rightTitle: 'Explore More Tennessee Cities',
                    description:
                        'Knoxville may be the perfect fit if you’re looking for: Affordable home prices Strong job opportunities A family-friendly environment Outdoor recreation year-round A growing city without big-city stress For many people moving to Tennessee, Knoxville checks every box.',
                    cities: [
                        'Johnson City',
                        'Chattanooga',
                        'Nashville',
                        'Franklin',
                        'Kingsport',
                        'Bristol',
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
