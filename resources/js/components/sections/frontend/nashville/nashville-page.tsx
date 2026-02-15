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
        '2 hours to Knoxville',
        '3 hours to Knoxville',
        'Central access to most of the Southeast',
    ],
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51457.1062024796!2d-82.22271618683415!3d36.588667533816285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8850702df2f8f8b3%3A0x64e8e04e9c71c4c9!2sBristol%2C%20TN!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus',
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
                <h2 className="mb-6 text-center text-3xl font-bold">
                    Cost of Living in Nashville
                </h2>
                <p className="mb-10 text-center text-text-primary">
                    While Nashville is more expensive than many Tennessee
                    cities, it remains competitive compared to other major
                    metros nationwide.
                </p>
                <p className="mx-auto mt-7 mb-10 max-w-[320px] text-center text-text-primary sm:max-w-[500px] md:max-w-[640px] lg:max-w-[720px]">
                    Compared to cities like Nashville or Asheville, Knoxville
                    provides significantly more value for housing.
                </p>

                <div className="grid gap-6 md:grid-cols-5">
                    <CostCard title="Median home price" value="$325,000" />
                    <CostCard title="2-bedroom apartment" value="$480,000" />
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
                <div className="bg-primary rounded-t-[30px] py-16 sm:rounded-t-[50px] md:rounded-t-[60px] lg:rounded-t-[80px]">
                    <div className="container mx-auto px-4 lg:px-16">
                        <h2 className="mb-6 text-center text-3xl font-bold text-primary-foreground">
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
                    'Choose the right neighborhood',
                    'Navigate competitive listings',
                    'Arrange virtual tours if relocating',
                    'Negotiate pricing and inspections',
                ]}
                buttonText="See Best Places to Live in Tennessee"
            />

            <FinalInfoSection
                property={{
                    title: 'Is Nashville Right for You?',
                    rightTitle: 'Explore Nearby Cities',
                    description:
                        'Nashville may be a great fit if you’re looking for: Strong job and income opportunities A vibrant music and entertainment scene Diverse neighborhoods and housing options Long-term appreciation potential Big-city amenities without coastal prices For many relocating buyers, Nashville represents opportunity, culture, and growth.',
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
