import CallToActionSection from '../cities/callTo-action-section';
import FinalInfoSection from '../cities/final-info-section';
import InfoTabsSection from '../cities/info-tabs-section';
import MoveLocationSection from '../cities/move-location-section';
import NeighborhoodsSection from '../cities/neighborhoods-section';
import WhyMoveSection from '../cities/why-move';

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
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d413381.9169633572!2d-83.92534!3d35.958069!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885c162246ce42a9%3A0x7bea92dac4f534c5!2sKnoxville%2C%20TN!5e0!3m2!1sen!2sus!4v1771221283007!5m2!1sen!2sus',
    conclusion:
        'Its central location makes it ideal for outdoor lovers and frequent travelers.',
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
        features: ['Historic homes', 'Revitalized areas', 'Close to downtown'],
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
        footer: 'Education options make Knoxville attractive for families and students alike.',
        imageUrl: '/assets/images/football_team1-2048x1365.jpeg',
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
        imageUrl:
            '/assets/images/Team_building_concept._Office_life1-2048x969.jpeg',
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
        imageUrl:
            '/assets/images/University_of_Tennessee_football_stadium_and_campus_in_the_early_morning_light1-2048x1149.jpeg',
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
                <h2 className="mb-6 text-center text-3xl font-bold md:text-[42px]">
                    Cost of Living in Knoxville
                </h2>
                <p className="mb-10 text-center text-gray-600">
                    Knoxville remains one of the more affordable cities in
                    Tennessee.
                </p>

                <div className="grid gap-6 md:grid-cols-4">
                    <CostCard title="Mediam home price" value="$330,000" />
                    <CostCard
                        title="2-bedroom apartment"
                        value="$1,300–$1,600"
                    />
                    <CostCard
                        title="Utilities"
                        value="Below national average"
                    />
                    <CostCard
                        title="Property taxes"
                        value="Low compared to many states"
                    />
                </div>
            </div>
            <div className="bg-primary py-16">
                <div className="container mx-auto px-4 lg:px-16">
                    <h2 className="mb-6 text-center text-3xl font-medium text-primary-foreground md:text-[40px]">
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
                description="Working with a local Knoxville realtor helps you:"
                // benefits={[
                //     'Identify the best neighborhoods',
                //     'Navigate competitive listings',
                //     'Arrange virtual tours if relocating',
                //     'Negotiate pricing and inspections',
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
                        text: 'Navigate competitivelistings',
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
                        text: 'Arrange virtual tours if relocating',
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
                buttonText="Connect With a Knoxville Realtor"
            />

            <FinalInfoSection
                property={{
                    title: 'Is Knoxville Right for You?',
                    rightTitle: 'Explore More Tennessee Cities',
                    description:
                        'Knoxville may be the perfect fit if you’re looking for:',

                    points: [
                        'Affordable home prices',
                        'Strong job opportunities',
                        'A family-friendly environment',
                        'Outdoor recreation year-round',
                        'A growing city without big-city stress',
                    ],

                    footer: 'For many people moving to Tennessee, Knoxville checks every box.',
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
