import InfoTabsSection from '../cities/info-tabs-section';
import WhyMoveSection from '../cities/why-move';

// WHY MOVE DATA
const whyMoveData = {
    title: 'Why List on Why Tennessee?',
    description:
        'Unlike traditional listing sites, WhyTennessee.com is designed around relocation intent. What makes us different:',
    points: [
        'Visitors are actively researching a move to Tennessee',
        'Strong SEO pages drive organic traffic year-round',
        'City-specific pages bring targeted exposure',
        'Listings are not buried under thousands of MLS results',
        'Direct inquiries from motivated buyers and renters',
    ],
    conclusion:
        'Your listing is seen by people choosing a city, not just scrolling listings.',
    imageUrl: 'assets/images/pexels-kelly-3061230-2048x1150.jpg',
    videoUrl:
        'https://whytennessee.com/wp-content/uploads/2025/12/Aerial_4K_Drone_Video_Over_the_Tennessee_River_Looking_into_Downtown_Chattanooga_on_a_Beautiful_Spring_Evening1.mp4',
};

const tabs = [
    {
        id: 'tab1',
        label: 'Homes for Sale',
        title: 'Homes for Sale',
        intro: '',
        items: [
            'Single-family homes',
            'Condos & townhomes',
            'New construction',
            'Luxury properties',
        ],
        footer: '',
        imageUrl: '/assets/images/2490861534_d220818fa4_o.webp',
    },
    {
        id: 'tab2',
        label: 'Rentals',
        title: 'Rentals',
        intro: '',
        items: [
            'Apartments',
            'Single-family homes for rent',
            'Condos & townhomes',
            'Short-term or relocation rentals',
        ],
        footer: 'Each listing receives its own dedicated page, optimized for search visibility.',
        imageUrl:
            '/assets/images/outdoor_pool_in_a_modern_apartment_complex1-1024x683.jpeg',
    },
    {
        id: 'tab3',
        label: 'Featured Listings',
        title: 'Featured Listings = More Exposure',
        intro: 'Featured listings receive:',
        items: [
            'Priority placement on listing pages',
            'Highlighted visibility on city pages',
            'Increased clicks and inquiries',
            'Competitive listings',
            'Time-sensitive rentalss',
            'Premium properties',
        ],
        footer: '',
        imageUrl: '/assets/images/29941-1.jpeg',
    },
];

const steps = [
    {
        id: 1,
        label: 'Create your account',
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
            >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
            </svg>
        ),
    },
    {
        id: 2,
        label: 'Choose a listing or subscription plan',
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
            >
                <line x1="8" y1="6" x2="21" y2="6" />
                <line x1="8" y1="12" x2="21" y2="12" />
                <line x1="8" y1="18" x2="21" y2="18" />
                <line x1="3" y1="6" x2="3.01" y2="6" />
                <line x1="3" y1="12" x2="3.01" y2="12" />
                <line x1="3" y1="18" x2="3.01" y2="18" />
            </svg>
        ),
    },
    {
        id: 3,
        label: 'Submit your property details & photos',
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
            >
                <path d="M21 2v6h-6" />
                <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
                <path d="M3 22v-6h6" />
                <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
            </svg>
        ),
    },
    {
        id: 4,
        label: 'Listings are reviewed and published',
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
            >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
                <line x1="12" y1="2" x2="12" y2="4" />
                <line x1="12" y1="20" x2="12" y2="22" />
            </svg>
        ),
    },
    {
        id: 5,
        label: 'Receive inquiries directly',
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
            >
                <polyline points="20 6 9 17 4 12" />
            </svg>
        ),
    },
];

export default function ListProperty() {
    return (
        <div>
            <div className="bg-background px-6 py-20 font-montserrat">
                <div className="container mx-auto">
                    <h2 className="mb-2 text-center text-4xl leading-tight font-medium text-text-secondary-foreground md:text-5xl">
                        Who This Is For
                    </h2>
                    <p className="mb-16 text-center">
                        You can list on Why Tennessee if you are a:
                    </p>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <div className="flex flex-col items-center rounded-xl border-b-4 border-muted-foreground border-b-primary bg-background p-8 text-center shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary text-primary">
                                <svg
                                    aria-hidden="true"
                                    className="e-font-icon-svg e-fas-check-circle"
                                    viewBox="0 0 512 512"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                                </svg>
                            </div>
                            <h3 className="mb-4 text-xl font-medium text-text-secondary-foreground">
                                Licensed real estate agent
                            </h3>
                        </div>
                        <div className="flex flex-col items-center rounded-xl border-b-4 border-muted-foreground border-b-primary bg-background p-8 text-center shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary text-primary">
                                <svg
                                    aria-hidden="true"
                                    className="e-font-icon-svg e-fas-check-circle"
                                    viewBox="0 0 512 512"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                                </svg>
                            </div>
                            <h3 className="mb-4 text-xl font-medium text-text-secondary-foreground">
                                Realtor representing buyers or sellers
                            </h3>
                        </div>
                        <div className="flex flex-col items-center rounded-xl border-b-4 border-muted-foreground border-b-primary bg-background p-8 text-center shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary text-primary">
                                <svg
                                    aria-hidden="true"
                                    className="e-font-icon-svg e-fas-check-circle"
                                    viewBox="0 0 512 512"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                                </svg>
                            </div>
                            <h3 className="mb-4 text-xl font-medium text-text-secondary-foreground">
                                Landlord with rental properties
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#fbf8f2]">
                <WhyMoveSection whyMove={whyMoveData} />
            </div>
            <div className="bg-[#e4e7ed]!">
                <InfoTabsSection tabs={tabs} />
            </div>
            <div className="bg-white py-20 font-sans">
                <div className="container mx-auto px-4">
                    {/* Header Section */}
                    <h2 className="mb-20 text-center text-3xl font-bold text-[#0f172a] md:text-4xl">
                        Simple Listing Process
                    </h2>

                    {/* Timeline Wrapper */}
                    <div className="relative">
                        {/* Desktop connecting line */}
                        <div className="absolute top-[28px] right-[10%] left-[10%] hidden h-[1px] bg-slate-300 md:block"></div>

                        {/* Steps Grid */}
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-4">
                            {steps.map((step) => (
                                <div
                                    key={step.id}
                                    className="group relative flex flex-col items-center"
                                >
                                    {/* SVG Icon Circle */}
                                    <div className="z-10 flex h-14 w-14 items-center justify-center rounded-full bg-[#1e3a5f] text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-[#2a4d7d]">
                                        {step.icon}
                                    </div>

                                    {/* Text Content */}
                                    <div className="mt-6 text-center">
                                        <p className="px-4 text-[15px] leading-relaxed font-medium text-slate-700">
                                            {step.label}
                                        </p>
                                    </div>

                                    {/* Mobile connecting line (vertical) */}
                                    {step.id !== 5 && (
                                        <div className="mt-4 h-8 w-[1px] bg-slate-300 md:hidden"></div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white px-4 py-16">
                {/* Title Section */}
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                        Rental Listing Packages
                    </h2>
                    <div className="mx-auto h-1 w-48 bg-[#1e3a5f]"></div>
                </div>

                <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-2">
                    {/* Card 1: Pay-Per-Listing */}
                    <div className="flex flex-col justify-between rounded-xl bg-[#213a63] p-8 text-white shadow-xl md:p-12">
                        <div>
                            <h3 className="mb-2 text-xl font-semibold">
                                Pay-Per-Listing (Basic)
                            </h3>
                            <p className="mb-8 text-sm font-medium text-slate-200">
                                Best for small landlords & agents
                            </p>

                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <ArrowCircleIcon />
                                    <span className="text-lg">
                                        Basic Rental Listing: $29 (30 days)
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <ArrowCircleIcon />
                                    <span className="text-lg">
                                        Featured Rental Listing: $79 (30 days)
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <div className="mt-10">
                            <a
                                href={route('user.choose')}
                                className="flex w-fit items-center gap-2 rounded-full bg-[#cd9f4d] px-4 sm:px-8 py-2 md:py-4 text-lg font-normal text-white transition-colors hover:bg-[#b88a3e]"
                            >
                                Publish Rental Listing
                                <span className="rounded-full bg-white/20 p-1">
                                    <ArrowRightSmall />
                                </span>
                            </a>
                        </div>
                    </div>

                    {/* Card 2: Subscription */}
                    <div className="flex flex-col justify-between rounded-xl bg-[#213a63] p-8 text-white shadow-xl md:p-12">
                        <div>
                            <h3 className="mb-2 text-xl font-semibold">
                                Subscription (Best Long-Term)
                            </h3>
                            <p className="mb-8 text-sm font-medium text-slate-200">
                                Best for property managers & realtors
                            </p>

                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <ArrowCircleIcon />
                                    <span className="text-lg">
                                        Starter: $49/month (3 active rentals)
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <ArrowCircleIcon />
                                    <span className="text-lg">
                                        Pro: $99/month (10 active rentals)
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <ArrowCircleIcon />
                                    <span className="text-lg">
                                        Unlimited: $199/month
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <div className="mt-10">
                            <a
                                href={route('user.choose')}
                                className="flex w-fit items-center gap-2 rounded-full bg-[#cd9f4d] px-4 sm:px-8 py-2 md:py-4 text-lg font-normal text-white transition-colors hover:bg-[#b88a3e]"
                            >
                                Activate Rental Exposure
                                <span className="rounded-full bg-white/20 p-1">
                                    <ArrowRightSmall />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white px-4 py-16">
                {/* Title Section */}
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                        Homes Sale Listing Packages
                    </h2>
                    <div className="mx-auto h-1 w-48 bg-[#1e3a5f]"></div>
                </div>

                <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-3">
                    {/* Card 1: Pay-Per-Listing */}
                    <div className="flex flex-col justify-between rounded-xl bg-[#213a63] p-8 text-white shadow-xl md:p-12">
                        <div>
                            <h3 className="mb-2 text-xl font-semibold">
                                Basic Property Listing
                            </h3>
                            <p className="mb-8 text-sm font-medium text-slate-200">
                                $25 per listing
                            </p>

                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <ArrowCircleIcon />
                                    <span className="text-lg">
                                        30-day listing placement
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <ArrowCircleIcon />
                                    <span className="text-lg">
                                        Appears on relevant city pages
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <ArrowCircleIcon />
                                    <span className="text-lg">
                                        Property details, photos & contact info
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <ArrowCircleIcon />
                                    <span className="text-lg">
                                        Direct buyer inquiries
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <ArrowCircleIcon />
                                    <span className="text-lg">
                                        No contracts or commitments
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <ArrowCircleIcon />
                                    <span className="text-lg">
                                        Will be listed on “Meet your Real Estate
                                        Agents” page
                                    </span>
                                </li>
                            </ul>
                            <p className="mt-2">
                                Best for agents who want to promote individual
                                listings.
                            </p>
                        </div>

                        <div className="mt-10">
                            <a
                                href={route('user.choose')}
                                className="flex w-fit items-center gap-2 rounded-full bg-[#cd9f4d] px-4 sm:px-8 py-2 md:py-4 text-lg font-normal text-white transition-colors hover:bg-[#b88a3e]"
                            >
                                List a Property
                                <span className="rounded-full bg-white/20 p-1">
                                    <ArrowRightSmall />
                                </span>
                            </a>
                        </div>
                    </div>

                    {/* Card 2: Subscription */}
                    <div className="flex flex-col justify-between rounded-xl bg-[#213a63] p-8 text-white shadow-xl md:p-12">
                        <div>
                            <h3 className="mb-2 text-xl font-semibold">
                                Featured Property Listing
                            </h3>
                            <p className="mb-8 text-sm font-medium text-slate-200">
                                $99 per listing
                            </p>

                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <ArrowCircleIcon />
                                    <span className="text-lg">
                                        Priority placement on the Cities
                                        homepage
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <ArrowCircleIcon />
                                    <span className="text-lg">
                                        Highlighted “Featured” badge
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <ArrowCircleIcon />
                                    <span className="text-lg">
                                        Top visibility on city pages
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <ArrowCircleIcon />
                                    <span className="text-lg">
                                        Increased exposure to relocating buyers
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <ArrowCircleIcon />
                                    <span className="text-lg">
                                        30-day listing placement
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <ArrowCircleIcon />
                                    <span className="text-lg">
                                        Ideal for high-value or time-sensitive
                                        listings
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <ArrowCircleIcon />
                                    <span className="text-lg">
                                        Will be listed on “Meet your Real Estate
                                        Agents” page
                                    </span>
                                </li>
                            </ul>
                            <p className="mt-2">
                                Featured slots are limited to maintain
                                exclusivity.Featured slots are limited to
                                maintain exclusivity.
                            </p>
                        </div>

                        <div className="mt-10">
                            <a
                                href={route('user.choose')}
                                className="flex w-fit items-center gap-2 rounded-full bg-[#cd9f4d] px-4 sm:px-8 py-2 md:py-4 text-lg font-normal text-white transition-colors hover:bg-[#b88a3e]"
                            >
                                Feature a Property
                                <span className="rounded-full bg-white/20 p-1">
                                    <ArrowRightSmall />
                                </span>
                            </a>
                        </div>
                    </div>
                    {/* Card 3: Subscription */}
                    <div className="flex flex-col justify-between rounded-xl bg-[#213a63] p-8 text-white shadow-xl md:p-12">
                        <div>
                            <h3 className="mb-2 text-xl font-semibold">
                                Platinum Property Listing
                            </h3>
                            <p className="mb-8 text-sm font-medium text-slate-200">
                                $499 per listing
                            </p>

                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <ArrowCircleIcon />
                                    <span className="text-lg">
                                        Showcased in 1 of only 12 available
                                        listings on Homepage
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <ArrowCircleIcon />
                                    <span className="text-lg">
                                        Platinum placement on the Cities
                                        homepage
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <ArrowCircleIcon />
                                    <span className="text-lg">
                                        Platinum placement on Meet your Realtors
                                        page
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <ArrowCircleIcon />
                                    <span className="text-lg">
                                        Highlighted “Platinum” badge
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <ArrowCircleIcon />
                                    <span className="text-lg">
                                        Top visibility on city pages
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <ArrowCircleIcon />
                                    <span className="text-lg">
                                        Increased exposure to relocating buyers
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <ArrowCircleIcon />
                                    <span className="text-lg">
                                        30-day listing placement
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <ArrowCircleIcon />
                                    <span className="text-lg">
                                        Ideal for high-value or time-sensitive
                                        listings
                                    </span>
                                </li>
                            </ul>
                            <p className="mt-2">
                                Featured slots are limited to maintain
                                exclusivity.
                            </p>
                        </div>

                        <div className="mt-10">
                            <a
                                href={route('user.choose')}
                                className="flex w-fit items-center gap-2 rounded-full bg-[#cd9f4d] px-4 sm:px-8 py-2 md:py-4 text-lg font-normal text-white transition-colors hover:bg-[#b88a3e]"
                            >
                                Claim Platinum Placement
                                <span className="rounded-full bg-white/20 p-1">
                                    <ArrowRightSmall />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white px-4 py-16">
                {/* Title Section */}
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                        Home Sale Subscriptions
                    </h2>
                    <p>
                        For agents who want ongoing exposure and multiple
                        listings.
                    </p>
                    <div className="mx-auto h-1 w-48 bg-[#1e3a5f]"></div>
                </div>

                <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-3">
                    {/* Card 1: Pay-Per-Listing */}
                    <div className="flex flex-col justify-between rounded-xl bg-[#213a63] p-8 text-white shadow-xl md:p-12">
                        <div>
                            <h3 className="mb-2 text-xl font-semibold">
                                Starter Plan — $69/month
                            </h3>

                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <ArrowCircleIcon />
                                    <span className="text-lg">
                                        Up to 3 basic active listings on City
                                        Page
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <ArrowCircleIcon />
                                    <span className="text-lg">
                                        Agent profile exposure
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <ArrowCircleIcon />
                                    <span className="text-lg">
                                        City page placement
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <ArrowCircleIcon />
                                    <span className="text-lg">
                                        Will be listed on “Meet your Real Estate
                                        Agents“ page
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <div className="mt-10">
                            <a
                                href={route('user.choose')}
                                className="flex w-fit items-center gap-2 rounded-full bg-[#cd9f4d] px-4 sm:px-8 py-2 md:py-4 text-lg font-normal text-white transition-colors hover:bg-[#b88a3e]"
                            >
                                Start Starter Exposure
                                <span className="rounded-full bg-white/20 p-1">
                                    <ArrowRightSmall />
                                </span>
                            </a>
                        </div>
                    </div>

                    {/* Card 2: Subscription */}
                    <div className="flex flex-col justify-between rounded-xl bg-[#213a63] p-8 text-white shadow-xl md:p-12">
                        <div>
                            <h3 className="mb-2 text-xl font-semibold">
                                Pro Plan — $129/month
                            </h3>

                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <ArrowCircleIcon />
                                    <span className="text-lg">
                                        Unlimited basic listings
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <ArrowCircleIcon />
                                    <span className="text-lg">
                                        Priority placement over pay-per-listing
                                        on City Page
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <ArrowCircleIcon />
                                    <span className="text-lg">
                                        Best value for active agents
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <ArrowCircleIcon />
                                    <span className="text-lg">
                                        Will be listed on “Meet your Real Estate
                                        Agents“ page
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <div className="mt-10">
                            <a
                                href={route('user.choose')}
                                className="flex w-fit items-center gap-2 rounded-full bg-[#cd9f4d] px-4 sm:px-8 py-2 md:py-4 text-lg font-normal text-white transition-colors hover:bg-[#b88a3e]"
                            >
                                Activate Pro Placement
                                <span className="rounded-full bg-white/20 p-1">
                                    <ArrowRightSmall />
                                </span>
                            </a>
                        </div>
                    </div>
                    {/* Card 3: Subscription */}
                    <div className="flex flex-col justify-between rounded-xl bg-[#213a63] p-8 text-white shadow-xl md:p-12">
                        <div>
                            <h3 className="mb-2 text-xl font-semibold">
                                Elite Featured Plan — $299/month
                            </h3>

                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <ArrowCircleIcon />
                                    <span className="text-lg">
                                        Unlimited Featured listings
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <ArrowCircleIcon />
                                    <span className="text-lg">
                                        Featured placement on City Page
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <ArrowCircleIcon />
                                    <span className="text-lg">
                                        Featured placement on City Page
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <ArrowCircleIcon />
                                    <span className="text-lg">
                                        Maximum visibility to relocation buyers
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <ArrowCircleIcon />
                                    <span className="text-lg">
                                        Will be listed on “Meet your Real Estate
                                        Agents“ page
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <div className="mt-10">
                            <a
                                href={route('user.choose')}
                                className="flex w-fit items-center gap-2 rounded-full bg-[#cd9f4d] px-4 sm:px-8 py-2 md:py-4 text-lg font-normal text-white transition-colors hover:bg-[#b88a3e]"
                            >
                                Activate Elite Visibility
                                <span className="rounded-full bg-white/20 p-1">
                                    <ArrowRightSmall />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-muted px-4 py-16 md:py-36">
                <div className="container mx-auto flex flex-col items-center gap-12 px-4 py-12 font-montserrat md:flex-row">
                    <div className="relative mb-20 w-full md:mb-0">
                        <div className="w-[90%] overflow-hidden rounded-2xl shadow-lg md:w-full">
                            <img
                                src="/assets/images/pexels-denil-33476066-2048x1365.jpg"
                                alt="Tennessee Home"
                                className="h-64 w-full object-cover md:h-[400px]"
                            />
                        </div>

                        <div className="absolute right-0 bottom-[-104px] w-[55%] overflow-hidden rounded-2xl border-4 border-white shadow-2xl md:w-[50%]">
                            <img
                                src="/assets/images/cookeville-high-school-cookeville-tn-primaryphoto.avif"
                                alt="Apartment"
                                className="h-32 w-full object-cover md:h-48"
                            />
                        </div>
                    </div>
                    <div className="w-full">
                        <h2 className="mb-6 font-montserrat text-3xl font-bold text-secondary-foreground md:text-4xl">
                            Built for Realtors & Professionals
                        </h2>

                        <p className="mb-6 font-montserrat text-base font-normal text-secondary-foreground">
                            Why Tennessee is designed to support your business,
                            not compete with it.
                        </p>

                        <ul className="mb-2 ml-4 space-y-3">
                            <li className="flex items-start gap-3">
                                <span className="mt-[6px] shrink-0">
                                    <svg
                                        width="10"
                                        height="10"
                                        viewBox="0 0 8 8"
                                        fill="black"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle cx="4" cy="4" r="4" />
                                    </svg>
                                </span>
                                <p className="text-base text-secondary-foreground">
                                    You control your listings
                                </p>
                            </li>

                            <li className="flex items-start gap-3">
                                <span className="mt-[6px] shrink-0">
                                    <svg
                                        width="10"
                                        height="10"
                                        viewBox="0 0 8 8"
                                        fill="black"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle cx="4" cy="4" r="4" />
                                    </svg>
                                </span>
                                <p className="text-base text-secondary-foreground">
                                    Your contact information stays front and
                                    center
                                </p>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-[6px] shrink-0">
                                    <svg
                                        width="10"
                                        height="10"
                                        viewBox="0 0 8 8"
                                        fill="black"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle cx="4" cy="4" r="4" />
                                    </svg>
                                </span>
                                <p className="text-base text-secondary-foreground">
                                    Direct inquiries (no lead reselling)
                                </p>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-[6px] shrink-0">
                                    <svg
                                        width="10"
                                        height="10"
                                        viewBox="0 0 8 8"
                                        fill="black"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle cx="4" cy="4" r="4" />
                                    </svg>
                                </span>
                                <p className="text-base text-secondary-foreground">
                                    Works alongside your MLS marketing
                                </p>
                            </li>
                        </ul>

                        <p className="text-base text-secondary-foreground">
                            Many partners use Why Tennessee as a supplemental
                            lead source, especially for relocation clients.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto flex flex-col items-center gap-12 px-4 py-12 font-montserrat md:flex-row">
                <div className="w-full">
                    <h2 className="mb-6 font-montserrat text-3xl font-bold text-secondary-foreground md:text-4xl">
                        Partner With Why Tennessee
                    </h2>

                    <ul className="mb-2 ml-4 space-y-3">
                        <li className="flex items-start gap-3">
                            <span className="mt-[6px] shrink-0">
                                <svg
                                    width="10"
                                    height="10"
                                    viewBox="0 0 8 8"
                                    fill="black"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle cx="4" cy="4" r="4" />
                                </svg>
                            </span>
                            <p className="text-base text-secondary-foreground">
                                Out-of-state buyers
                            </p>
                        </li>

                        <li className="flex items-start gap-3">
                            <span className="mt-[6px] shrink-0">
                                <svg
                                    width="10"
                                    height="10"
                                    viewBox="0 0 8 8"
                                    fill="black"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle cx="4" cy="4" r="4" />
                                </svg>
                            </span>
                            <p className="text-base text-secondary-foreground">
                                Relocating families
                            </p>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="mt-[6px] shrink-0">
                                <svg
                                    width="10"
                                    height="10"
                                    viewBox="0 0 8 8"
                                    fill="black"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle cx="4" cy="4" r="4" />
                                </svg>
                            </span>
                            <p className="text-base text-secondary-foreground">
                                Renters who plan to buy later
                            </p>
                        </li>
                    </ul>

                    <p className="text-base text-secondary-foreground">
                        Why Tennessee helps you stay in front of them early in
                        the decision process.
                    </p>
                </div>
            </div>

            <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden md:h-[500px]">
                {/* Background Image with Overlay */}
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                    style={{
                       
                        backgroundImage: "url('/assets/images/pexels-chaitaastic-3722911-scaled (1).jpg')",
                    }}
                >
                    {/* Dark Overlay to make text readable */}
                    <div className="absolute inset-0 bg-black/80 shadow-inner"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
                    <h2 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
                        Get Started
                    </h2>

                    <div className="mb-10 space-y-2">
                        <p className="text-xl font-medium text-white md:text-2xl">
                            Ready to list your property?
                        </p>
                        <p className="text-xl font-medium text-white md:text-2xl">
                            Have questions before signing up?
                        </p>
                    </div>

                    {/* Contact Us Button */}
                    <a href={route('frontend.get-in-touch')} className="w-fit mx-auto flex items-center gap-2 rounded-full bg-[#cd9f4d] px-10 py-3 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:bg-[#213a63]">
                        Contact Us
                        <span className="text-xl">→</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

// --- Reusable SVG Icons ---

const ArrowCircleIcon = () => (
    <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6 shrink-0 text-white"
    >
        <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
            clipRule="evenodd"
        />
    </svg>
);

const ArrowRightSmall = () => (
    <svg
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={3}
        stroke="currentColor"
        className="h-4 w-4"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
        />
    </svg>
);
