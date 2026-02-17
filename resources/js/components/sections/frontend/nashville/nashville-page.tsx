import CallToActionSection from '../cities/callTo-action-section';
import FinalInfoSection from '../cities/final-info-section';
import InfoTabsSection from '../cities/info-tabs-section';
import MoveLocationSection from '../cities/move-location-section';
import NeighborhoodsSection from '../cities/neighborhoods-section';
import WhyMoveSection from '../cities/why-move';

// WHY MOVE DATA
const whyMoveData = {
    title: 'Why People Are Moving to Nashville ?',
    description:
        'Nashville continues to draw new residents from states like California, Texas, Illinois, New York, and Florida.',
    points: [
        'No state income tax in Tennessee',
        'Strong job growth in healthcare, tech, finance, and entertainment',
        'World-class music and culture',
        'Diverse neighborhoods from urban to suburban',
        'Major airport and easy travel access',
        'Long-term real estate appreciation',
    ],
    conclusion:
        'For many buyers, Nashville offers opportunity, lifestyle, and growth potential all in one place.',
    imageUrl:
        '/assets/images/Colorful_Nashville_Broadway_at_night_-_NASHVILLE1-scaled.jpeg',
    videoUrl:
        'https://whytennessee.com/wp-content/uploads/2025/12/Tennessee_Nashville_Aerial_v3_Cityscape_hyperlapse_flying_low_over_river_and_over_downtown_buildings_10181.mp4',
};

// LOCATION DATA
const locationData = {
    title: 'Where Is Nashville Located?',
    description: (
        <>
            Nashville is located in Middle Tennessee, serving as the state’s
            economic and cultural hub.
            <br />
            <br />
            Driving distances:
        </>
    ),

    distances: [
        '30–45 minutes to Franklin and Murfreesboro',
        '2 hours to Chattanooga',
        '3 hours to Knoxville',
        'Central access to most of the Southeast',
    ],
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d412223.05814771564!2d-86.784002!3d36.178899!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8864ec3213eb903d%3A0x7d3fb9d0a1e9daa0!2sNashville%2C%20TN!5e0!3m2!1sen!2sus!4v1771221202435!5m2!1sen!2sus',
    conclusion:
        'Nashville’s location makes it ideal for business travel and regional commuting.',
};

const neighborhoods = [
    {
        name: 'Downtown Nashville',
        features: [
            'Condos and high-rise living',
            'Walkable lifestyle',
            'Entertainment, dining, nightlife',
        ],
    },
    {
        name: 'East Nashville',
        features: [
            'Trendy and artistic vibe',
            'Popular with creatives and young professionals',
            'Historic homes and renovations',
        ],
    },
    {
        name: 'The Gulch',
        features: [
            'Upscale, modern living',
            'Luxury condos and apartments',
            'Close to downtown and amenities',
        ],
    },
    {
        name: 'Green Hills',
        features: [
            'Established neighborhoods',
            'Shopping and dining hubs',
            'Popular with families and professionals',
        ],
    },
    {
        name: 'Bellevue',
        features: [
            'More affordable suburban option',
            'Easy access to downtown',
            'Easy access to downtown',
        ],
    },
];

const tabs = [
    {
        id: 'tab1',
        label: 'Schools & Education',
        title: 'Schools & Education',
        intro: 'Nashville provides extensive education options:',
        items: [
            'Public and private K-12 schools',
            'Charter and magnet schools',
            'Universities including Vanderbilt University, Belmont University, and Tennessee State University',
        ],
        footer: 'Education access is a major draw for families relocating to the area.',
        imageUrl: '/assets/images/FirstBank_Stadium_is_home.jpeg',
    },
    {
        id: 'tab2',
        label: 'Healthcare & Employment',
        title: 'Healthcare & Employment',
        intro: 'Nashville is a national leader in healthcare and continues to expand across multiple industries. Major employment sectors:',
        items: [
            'Healthcare and hospital systems',
            'Technology and startups',
            'Finance and corporate headquarters',
            'Music, entertainment, and media',
        ],
        footer: 'Large employers and a growing startup scene make Nashville attractive for career growth.',
        imageUrl: '/assets/images/Doctor_and_hospital.jpeg',
    },
    {
        id: 'tab3',
        label: 'Things to Do in Nashville',
        title: 'Things to Do in Nashville',
        intro: 'Living in Nashville means access to endless entertainment and activities:',
        items: [
            'Live music venues and concerts',
            'Live music venues and concerts',
            'Professional sports teams',
            'Restaurants, bars, and nightlife',
            'Parks, greenways, and outdoor events',
            'Festivals and cultural attractions year-round',
        ],
        footer: 'Nashville offers big-city energy with Southern hospitality.',
        imageUrl:
            '/assets/images/crowd_with_raised_hands_at_concert_festival_banner1-2048x1182.jpeg',
    },
    {
        id: 'tab4',
        label: 'Homes for Sale in Nashville',
        title: 'Homes for Sale in Nashville',
        intro: 'Nashville’s housing market includes:',
        items: [
            'Condos and townhomes',
            'Single-family homes',
            'New construction communities',
            'Luxury properties and estates',
        ],
        footer: 'Prices vary widely by neighborhood, giving buyers options across different budgets.',
        imageUrl: '/assets/images/Beautiful_home_exterior.jpeg',
        cta: {
            label: 'Homes for Sale',
            href: '/homes-for-sale',
            icon: '',
        },
    },
];
export default function NashvillePage() {
    return (
        <div>
            <WhyMoveSection whyMove={whyMoveData} />
            <MoveLocationSection location={locationData} />

            {/* COST OF LIVING SECTION */}
            <div className="container mx-auto px-4 py-16 lg:px-16">
                <h2 className="mb-6 text-center text-3xl font-bold md:text-[42px]">
                    Cost of Living in Nashville
                </h2>
                <p className="mb-10 text-center text-text-primary">
                    While Nashville is more expensive than many Tennessee
                    cities, it remains competitive compared to other major
                    metros nationwide.
                </p>
                <p className="mx-auto mt-7 mb-10 max-w-[320px] text-center text-text-primary sm:max-w-[500px] md:max-w-[640px]">
                    Compared to cities like Nashville or Asheville, Knoxville
                    provides significantly more value for housing.
                </p>

                <div className="grid gap-6 md:grid-cols-4">
                    <CostCard title="Median home price" value="$325,000" />
                    <CostCard
                        title="2-bedroom apartment"
                        value="$1,700–2,200"
                    />
                    <CostCard title="Utilities" value="Near national average" />
                    <CostCard
                        title="Property taxes"
                        value="Lower than many states with income tax"
                    />
                </div>
            </div>
            <div className="">
                <div className="rounded-t-[30px] bg-primary py-16 sm:rounded-t-[50px] md:rounded-t-[60px] lg:rounded-t-[80px]">
                    <div className="container mx-auto px-4 lg:px-16">
                        <h2 className="mb-6 text-center text-3xl font-medium text-primary-foreground md:text-[40px]">
                            Best Neighborhoods in Nashville
                        </h2>

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                            {/* First full rows (3 cards per row) */}
                            {neighborhoods
                                .slice(
                                    0,
                                    Math.floor(neighborhoods.length / 3) * 3,
                                )
                                .map((neighborhood, idx) => (
                                    <NeighborhoodsSection
                                        key={idx}
                                        name={neighborhood.name}
                                        features={neighborhood.features}
                                    />
                                ))}
                        </div>

                        {/* Last row (centered) */}
                        {neighborhoods.length % 3 !== 0 && (
                            <div className="mt-6 block justify-center gap-6 md:flex">
                                {neighborhoods
                                    .slice(
                                        Math.floor(neighborhoods.length / 3) *
                                            3,
                                    )
                                    .map((neighborhood, idx) => (
                                        <NeighborhoodsSection
                                            key={`last-${idx}`}
                                            name={neighborhood.name}
                                            features={neighborhood.features}
                                        />
                                    ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <InfoTabsSection tabs={tabs} />
            <CallToActionSection
                title="Work With a Nashville Realtor"
                description="A knowledgeable Nashville realtor can help you:"
                benefits={[
                    {
                        text: 'Choose the right neighborhood',
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
                buttonText="Connect With a Nashville Realtor"
            />

            <FinalInfoSection
                property={{
                    title: 'Is Nashville Right for You?',
                    rightTitle: 'Explore Nearby Cities',
                    description:
                        'Nashville may be a great fit if you’re looking for: ',

                    points: [
                        'Strong job and income opportunities ',
                        'A vibrant music and entertainment scene ',
                        'Diverse neighborhoods and housing options ',
                        'Long-term appreciation potential ',
                        'Big-city amenities without coastal prices ',
                    ],

                    footer: 'For many relocating buyers, Nashville represents opportunity, culture, and growth. ',
                    cities: [
                        'Franklin',
                        'Murfreesboro',
                        'Clarksville',
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
