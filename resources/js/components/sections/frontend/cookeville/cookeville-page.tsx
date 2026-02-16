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
        'https://whytennessee.com/wp-content/uploads/2025/12/Bristol-Virginia-Tennessee-Slogan-Sign-at-night.jpeg',
    videoUrl:
        'https://whytennessee.com/wp-content/uploads/2025/12/Aerial_4K_Drone_Video_Over_the_Tennessee_River_Looking_into_Downtown_Chattanooga_on_a_Beautiful_Spring_Evening1.mp4',
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
        imageUrl: '/assets/images/FirstBank_Stadium_is_home.jpeg',
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
export default function CookevillePage() {
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
                    <CostCard title="Mediam home price" value="$325,000" />
                    <CostCard
                        title="2-bedroom apartment"
                        value="$1,100–$1,400"
                    />
                    <CostCard
                        title="Utilities"
                        value="Near or below national average"
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
                    'Find affordable homes and acreage',
                    'Navigate rural property considerations',
                    'Arrange virtual tours for relocation buyers',
                    'Understand local zoningand land use',
                ]}
                buttonText="Connect With a Cookeville Realtor"
            />

            <FinalInfoSection
                property={{
                    title: 'Is Cookeville Right for You?',
                    rightTitle: 'Explore Nearby Cities',
                    description:'Cookeville may be a great fit if you’re looking for: Affordable housing Small-city lifestyle Access to outdoor recreation Strong sense of community Slower pace of life For many relocating buyers, Cookeville offers peace, value, and natural beauty.',
                    cities: [
                        'Nashville',
                        'Chattanooga',
                        'Knoxville',
                        'Clarksville',
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
