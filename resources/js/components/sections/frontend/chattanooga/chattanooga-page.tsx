import { ArrowRightIcon } from 'lucide-react';
import CallToActionSection from '../cities/callTo-action-section';
import InfoTabsSection from '../cities/info-tabs-section';
import MoveLocationSection from '../cities/move-location-section';
import NeighborhoodsSection from '../cities/neighborhoods-section';
import WhyMoveSection from '../cities/why-move';
import FinalInfoSection from '../cities/final-info-section';

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
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51457.1062024796!2d-82.22271618683415!3d36.588667533816285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8850702df2f8f8b3%3A0x64e8e04e9c71c4c9!2sBristol%2C%20TN!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus',
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
            'Highly rated schools Quiet, upscale',
            'neighborhoods',
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
            'Public schools serving the city',
            'Private school options nearby',
            'Access to Northeast State Community College and ETSU',
        ],
        footer: 'Education options support families relocating to the area.',
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
            href: '/chattanooga-homes-for-sale',
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
                <h2 className="mb-6 text-center text-xl md:text-2xl lg:text-4xl font-bold">
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
                    <h2 className="mb-6 text-center text-xl md:text-2xl lg:text-4xl font-bold text-primary-foreground">
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
                title="Work With a Bristol Realtor"
                description="A local Bristol realtor can help you:"
                benefits={[
                    'Navigate neighborhood differences',
                    'Identify the best value homes',
                    'Coordinate showings and inspections',
                    'Assist with relocation details',
                ]}
                buttonText="Connect With a Chattanooga Realtor"
            />

            <FinalInfoSection
                property={{
                    title: 'Is Chattanooga Right for You?',
                    rightTitle: 'Explore Other Tennessee Cities',
                    description:
                        'Bristol may be the right fit if you’re looking for: Low cost of living, small-town charm, rich music and cultural history, affordable homeownership, and easy access to the Tri-Cities. For many relocating buyers, Bristol offers a unique blend of affordability and character.',
                    cities: [
                        'Johnson City',
                        'Kingsport',
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
