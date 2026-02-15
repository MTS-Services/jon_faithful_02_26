import ExploreRentalCities from '@/components/sections/frontend/cities/explore-rental-cities';
import { Hero } from '@/components/sections/frontend/hero';
import FrontendLayout from '@/layouts/frontend-layout';
import { Building, Check, Home, MapPin } from 'lucide-react';
import { MdDoubleArrow } from 'react-icons/md';

const exploreCitiesData = [
    {
        icon: Building,
        city: 'Browse Rentals',
        desc: "Find your perfect rental in Tennessee's top cities",
        button: 'View Rentals →',
         href: route('frontend.rentals'),
        
    },
    {
        icon: Home,
        city: 'Homes for Sale',
        desc: 'Discover properties across Tennessee',
        button: 'View Homes →',
         href: route('frontend.homesForSale'),
    },
    {
        icon: MapPin,
        city: 'Explore Citiess',
        desc: "Learn about Tennessee's neighborhoods",
        button: 'Explore Cities →',
        href: route('frontend.livingInBristol'),
    },
];

const RentingBuy = () => {
    return (
        <FrontendLayout>
            <Hero
                slides={[
                    'https://whytennessee.com/wp-content/uploads/2026/01/Hay-bales-in-pasture-on-horse-farm-in-shadow-of-the-Blue-Ridge-Mountains-scaled.jpeg',
                ]}
                title={<>Renting vs Buying in Tennessee</>}
                description={
                    <>
                        If you’re moving to Tennessee, one of the biggest
                        decisions you’ll face is whether to rent or buy a home.
                        With rising home prices, changing interest rates, and a
                        growing rental market, there is no one-size-fits-all
                        answer. This guide breaks down the pros and cons of
                        renting vs buying in Tennessee, compares costs, and
                        helps you decide which option is best based on your
                        lifestyle, finances, and long-term plans.
                    </>
                }
            />
            {/* ================= INTRO SECTION ================= */}
            <section className="container mx-auto px-6 py-16 md:px-12">
                <div className="grid items-center gap-12 md:grid-cols-2">
                    <div>
                        <h2 className="text-4xl font-bold text-slate-900">
                            Renting vs Buying in
                        </h2>
                        <h2 className="mb-6 text-4xl font-bold text-slate-900">
                            Tennessee
                        </h2>
                        <p className="mb-4 text-slate-600">
                            Tennessee is attractive for both renters and buyers
                            due to:
                        </p>
                        <ul className="text-gray-700">
                            <li className="flex items-center gap-2">
                                <span className="flex-shrink-0">
                                    <svg
                                        aria-hidden="true"
                                        className="h-2 w-2 fill-current text-black"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                    </svg>
                                </span>
                                <span>No state income tax</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="flex-shrink-0">
                                    <svg
                                        aria-hidden="true"
                                        className="h-2 w-2 fill-current text-black"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                    </svg>
                                </span>
                                <span>
                                    Affordable housing compared to national
                                    averages
                                </span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="flex-shrink-0">
                                    <svg
                                        aria-hidden="true"
                                        className="h-2 w-2 fill-current text-black"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                    </svg>
                                </span>
                                <span>Strong job growth</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="flex-shrink-0">
                                    <svg
                                        aria-hidden="true"
                                        className="h-2 w-2 fill-current text-black"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                    </svg>
                                </span>
                                <span>Diverse cities and lifestyles</span>
                            </li>
                        </ul>
                        <p className="mt-4 text-slate-600">
                            Many people relocating to Tennessee choose to rent
                            first, then buy once they know the area.
                        </p>
                    </div>
                    <div className="relative">
                        {/* Rounded Image Shape */}
                        <div className="overflow-hidden rounded-tr-[80px] rounded-bl-[80px] shadow-xl">
                            <img
                                src="https://whytennessee.com/wp-content/uploads/2025/12/memphis-tn.jpg"
                                alt="Nashville Skyline"
                                className="h-[450px] w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= COMPARE OPTIONS SECTION ================= */}
            <section className="bg-[#F3EAD3] py-16">
                <div className="container mx-auto px-6 md:px-12">
                    <h2 className="mb-12 text-center text-3xl font-bold text-slate-900">
                        Compare Your Options
                    </h2>

                    <div className="grid gap-8 md:grid-cols-2">
                        <div className="flex flex-col rounded-lg bg-white p-8 shadow-md">
                            <h3 className="mb-4 text-4xl font-bold">
                                Renting in Tennessee
                            </h3>

                            <div>
                                <h4 className="mb-4 inline-block border-b-2 border-black text-sm font-semibold text-[#d4af37] uppercase">
                                    Pros of Renting
                                </h4>
                                <ul className="mb-4 space-y-2 text-sm">
                                    <li className="flex gap-2">
                                        <Check
                                            size={20}
                                            className="font-bold text-black"
                                        />
                                        Lower upfront costs
                                    </li>
                                    <li className="flex gap-2">
                                        <Check
                                            size={20}
                                            className="font-bold text-black"
                                        />
                                        Flexibility to move between cities or
                                        neighborhoods
                                    </li>
                                    <li className="flex gap-2">
                                        <Check
                                            size={20}
                                            className="font-bold text-black"
                                        />
                                        Easier option for people relocating from
                                        out of state
                                    </li>
                                    <li className="flex gap-2">
                                        <Check
                                            size={20}
                                            className="font-bold text-black"
                                        />
                                        Ideal for short-term or uncertain plans
                                    </li>
                                </ul>
                            </div>

                            <h4 className="mb-2 text-sm font-semibold text-slate-800">
                                Especially Common For:
                            </h4>
                            <ul className="mb-4 space-y-1 text-sm">
                                <li className="flex gap-2">
                                    <Check
                                        size={20}
                                        className="font-bold text-black"
                                    />
                                    New residents
                                </li>
                                <li className="flex gap-2">
                                    <Check
                                        size={20}
                                        className="font-bold text-black"
                                    />
                                    Remote workers testing locations
                                </li>
                                <li className="flex gap-2">
                                    <Check
                                        size={20}
                                        className="font-bold text-black"
                                    />
                                    Families waiting for the right home
                                </li>
                                <li className="flex gap-2">
                                    <Check
                                        size={20}
                                        className="font-bold text-black"
                                    />
                                    Buyers waiting on interest rates
                                </li>
                            </ul>

                            <div>
                                <h4 className="mb-4 inline-block border-b-2 border-black text-sm font-semibold text-[#d4af37] uppercase">
                                    Cons of Renting
                                </h4>
                                <ul className="mb-6 space-y-2 text-sm">
                                    <li className="flex items-center gap-2">
                                        <span className="text-red-500">
                                            <span className="flex-shrink-0">
                                                <svg
                                                    aria-hidden="true"
                                                    className="h-1.5 w-1.5 fill-current text-black"
                                                    viewBox="0 0 512 512"
                                                >
                                                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                                </svg>
                                            </span>
                                        </span>
                                        Monthly payments do not build equity
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-red-500">
                                            <span className="flex-shrink-0">
                                                <svg
                                                    aria-hidden="true"
                                                    className="h-1.5 w-1.5 fill-current text-black"
                                                    viewBox="0 0 512 512"
                                                >
                                                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                                </svg>
                                            </span>
                                        </span>
                                        Rent increases over time
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-red-500">
                                            <span className="flex-shrink-0">
                                                <svg
                                                    aria-hidden="true"
                                                    className="h-1.5 w-1.5 fill-current text-black"
                                                    viewBox="0 0 512 512"
                                                >
                                                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                                </svg>
                                            </span>
                                        </span>
                                        Limited ability to customize the home
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-red-500">
                                            <span className="flex-shrink-0">
                                                <svg
                                                    aria-hidden="true"
                                                    className="h-1.5 w-1.5 fill-current text-black"
                                                    viewBox="0 0 512 512"
                                                >
                                                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                                </svg>
                                            </span>
                                        </span>
                                        Less long-term stability
                                    </li>
                                </ul>
                            </div>

                            <div className="mb-6 rounded text-sm">
                                <h5 className="text-md mb-4 font-bold">
                                    Typical Monthly Costs
                                </h5>
                                <div className="flex items-center gap-2">
                                    <span className="flex-shrink-0">
                                        <svg
                                            aria-hidden="true"
                                            className="h-1.5 w-1.5 fill-current text-black"
                                            viewBox="0 0 512 512"
                                        >
                                            <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                        </svg>
                                    </span>
                                    <p>2-bedroom apartment: $1,100–$1,700</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="flex-shrink-0">
                                        <svg
                                            aria-hidden="true"
                                            className="h-1.5 w-1.5 fill-current text-black"
                                            viewBox="0 0 512 512"
                                        >
                                            <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                        </svg>
                                    </span>
                                    <p>Utilities may be partially included</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="flex-shrink-0">
                                        <svg
                                            aria-hidden="true"
                                            className="h-1.5 w-1.5 fill-current text-black"
                                            viewBox="0 0 512 512"
                                        >
                                            <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                        </svg>
                                    </span>
                                    <p>No maintenance costs</p>
                                </div>
                            </div>

                            <a
                                href={route('frontend.rentals')}
                                className="text-md mt-auto w-full rounded bg-primary py-3 text-center font-bold text-white hover:bg-primary"
                            >
                                Browse Rentals in Tennessee →
                            </a>
                        </div>
                        <div className="rounded-lg bg-white p-8 shadow-md">
                            <h3 className="mb-4 text-4xl font-bold">
                                Buying in Tennessee
                            </h3>

                            <h4 className="mb-4 inline-block border-b-2 border-black text-sm font-semibold text-[#d4af37] uppercase">
                                Pros of Renting
                            </h4>
                            <ul className="mb-4 space-y-2 text-sm">
                                <li className="flex gap-2">
                                    <Check
                                        size={20}
                                        className="font-bold text-black"
                                    />
                                    Build equity over time
                                </li>
                                <li className="flex gap-2">
                                    <Check
                                        size={20}
                                        className="font-bold text-black"
                                    />
                                    Lock in monthly housing costs
                                </li>
                                <li className="flex gap-2">
                                    <Check
                                        size={20}
                                        className="font-bold text-black"
                                    />
                                    Take advantage of low property taxes
                                </li>
                                <li className="flex gap-2">
                                    <Check
                                        size={20}
                                        className="font-bold text-black"
                                    />
                                    Benefit from long-term appreciation
                                </li>
                                <li className="flex gap-2">
                                    <Check
                                        size={20}
                                        className="font-bold text-black"
                                    />
                                    Greater freedom to customize
                                </li>
                            </ul>
                            <p className="text-md mb-4 text-sm">
                                <strong className="text-black">
                                    Tennessee’s lack of state income tax
                                </strong>{' '}
                                makes homeownership especially attractive for
                                long-term residents.
                            </p>

                            <h4 className="mb-4 inline-block border-b-2 border-black text-sm font-semibold text-[#d4af37] uppercase">
                                Cons of Renting
                            </h4>
                            <ul className="mb-6 space-y-2 text-sm">
                                <li className="flex items-center gap-2">
                                    <span className="text-red-500">
                                        <span className="flex-shrink-0">
                                            <svg
                                                aria-hidden="true"
                                                className="h-1.5 w-1.5 fill-current text-black"
                                                viewBox="0 0 512 512"
                                            >
                                                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                            </svg>
                                        </span>
                                    </span>
                                    Higher upfront costs (down payment, closing
                                    costs)
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-red-500">
                                        <span className="flex-shrink-0">
                                            <svg
                                                aria-hidden="true"
                                                className="h-1.5 w-1.5 fill-current text-black"
                                                viewBox="0 0 512 512"
                                            >
                                                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                            </svg>
                                        </span>
                                    </span>
                                    Maintenance and repair responsibilities
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-red-500">
                                        <span className="flex-shrink-0">
                                            <svg
                                                aria-hidden="true"
                                                className="h-1.5 w-1.5 fill-current text-black"
                                                viewBox="0 0 512 512"
                                            >
                                                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                            </svg>
                                        </span>
                                    </span>
                                    Less flexibility to move
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-red-500">
                                        <span className="flex-shrink-0">
                                            <svg
                                                aria-hidden="true"
                                                className="h-1.5 w-1.5 fill-current text-black"
                                                viewBox="0 0 512 512"
                                            >
                                                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                            </svg>
                                        </span>
                                    </span>
                                    Mortgage rates impact affordability
                                </li>
                            </ul>

                            <div className="mb-6 rounded text-sm">
                                <h5 className="text-md mb-4 font-bold">
                                    Typical Monthly Costs
                                </h5>
                                <ul className="mb-6 space-y-2 text-sm">
                                    <li className="flex items-center gap-2">
                                        <span className="text-red-500">
                                            <span className="flex-shrink-0">
                                                <svg
                                                    aria-hidden="true"
                                                    className="h-1.5 w-1.5 fill-current text-black"
                                                    viewBox="0 0 512 512"
                                                >
                                                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                                </svg>
                                            </span>
                                        </span>
                                        Mortgage payment depends on price, rate,
                                        and down payment
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-red-500">
                                            <span className="flex-shrink-0">
                                                <svg
                                                    aria-hidden="true"
                                                    className="h-1.5 w-1.5 fill-current text-black"
                                                    viewBox="0 0 512 512"
                                                >
                                                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                                </svg>
                                            </span>
                                        </span>
                                        Property taxes are low
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-red-500">
                                            <span className="flex-shrink-0">
                                                <svg
                                                    aria-hidden="true"
                                                    className="h-1.5 w-1.5 fill-current text-black"
                                                    viewBox="0 0 512 512"
                                                >
                                                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                                </svg>
                                            </span>
                                        </span>
                                        Homeowners insurance required
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-red-500">
                                            <span className="flex-shrink-0">
                                                <svg
                                                    aria-hidden="true"
                                                    className="h-1.5 w-1.5 fill-current text-black"
                                                    viewBox="0 0 512 512"
                                                >
                                                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                                </svg>
                                            </span>
                                        </span>
                                        Maintenance costs apply
                                    </li>
                                </ul>
                                <p className="mt-4">
                                    Buying makes the most sense if you plan to
                                    stay at least 3–5 years. Shape
                                </p>
                            </div>

                            <a
                                href={route('frontend.homesForSale')}
                                className="text-md mt-auto w-full rounded bg-primary py-3 text-center font-bold text-white hover:bg-primary"
                            >
                                View Homes for Sale in Tennessee →
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= BY REGION SECTION ================= */}
            <section className="container mx-auto px-6 py-16 md:px-12">
                <h2 className="mb-4 text-center text-4xl font-bold">
                    Renting vs Buying by Region
                </h2>
                <p className="mb-12 text-center text-slate-600">
                    Tennessee offers diverse markets across its three main
                    regions, each with unique opportunities.
                </p>

                <div className="grid gap-8 md:grid-cols-3">
                    {/* East TN */}
                    <div className="group rounded-lg border p-4 shadow-xl">
                        <div className="mb-4 h-60 overflow-hidden rounded-lg">
                            <img
                                src="assets/images/renting-buy/east-tennessee.jpg"
                                alt="East TN"
                                className="h-full w-full object-cover transition group-hover:scale-105"
                            />
                        </div>
                        <h3 className="mb-1 text-lg font-bold">
                            East Tennessee
                        </h3>
                        <p className="mb-3 text-xs text-slate-500">
                            Knoxville, Johnson City, Chattanooga
                        </p>
                        <ul className="space-y-1 text-sm">
                            <li>• Renting is very affordable</li>
                            <li>
                                • Buying offers strong value and lower prices
                            </li>
                        </ul>
                    </div>

                    {/* Middle TN */}
                    <div className="group rounded-lg border p-4 shadow-xl">
                        <div className="mb-4 h-60 overflow-hidden rounded-lg">
                            <img
                                src="assets/images/renting-buy/Middle-Tennessee.jpg"
                                alt="Middle TN"
                                className="h-full w-full object-cover transition group-hover:scale-105"
                            />
                        </div>
                        <h3 className="mb-1 text-lg font-bold">
                            Middle Tennessee
                        </h3>
                        <p className="mb-3 text-xs text-slate-500">
                            Nashville, Franklin, Murfreesboro
                        </p>
                        <ul className="space-y-1 text-sm">
                            <li>• Renting often cheaper short-term</li>
                            <li>• Buying offers long-term appreciation</li>
                        </ul>
                    </div>

                    {/* West TN */}
                    <div className="group rounded-lg border p-4 shadow-xl">
                        <div className="mb-4 h-60 overflow-hidden rounded-lg">
                            <img
                                src="assets/images/renting-buy/West-Tennessee.jpe"
                                alt="West TN"
                                className="h-full w-full object-cover transition group-hover:scale-105"
                            />
                        </div>
                        <h3 className="mb-1 text-lg font-bold">
                            West Tennessee
                        </h3>
                        <p className="mb-3 text-xs text-slate-500">
                            Memphis, Jackson
                        </p>
                        <ul className="space-y-1 text-sm">
                            <li>• Extremely affordable rent</li>
                            <li>
                                • Buying offers strong value and lower prices
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ================= DECISION SECTION ================= */}
            <section className="bg-[#C9A24973] py-16">
                <div className="container mx-auto px-6 md:px-12">
                    <h2 className="mb-12 text-center text-2xl font-bold lg:text-4xl">
                        Making the Right Decision
                    </h2>

                    <div className="grid gap-8 md:grid-cols-2">
                        <div className="rounded bg-white p-8 shadow-xl">
                            <h3 className="mb-4 text-xl font-bold">
                                When Renting First Makes Sense
                            </h3>
                            <p className="text-md mb-4">
                                Consider renting first if you want flexibility
                                and time to learn the area.
                            </p>
                            <ul className="text-md space-y-2">
                                <li className="flex items-center gap-2 text-slate-700">
                                    <span className="font-bold text-primary">
                                        <MdDoubleArrow size={14} />
                                    </span>{' '}
                                    You're new to Tennessee
                                </li>
                                <li className="flex items-center gap-2 text-slate-700">
                                    <span className="font-bold text-primary">
                                        <MdDoubleArrow size={14} />
                                    </span>{' '}
                                    You're unsure which city fits your lifestyle
                                </li>
                                <li className="flex items-center gap-2 text-slate-700">
                                    <span className="font-bold text-primary">
                                        <MdDoubleArrow size={14} />
                                    </span>{' '}
                                    You're waiting for market conditions to
                                    change
                                </li>
                                <li className="flex items-center gap-2 text-slate-700">
                                    <span className="font-bold text-primary">
                                        <MdDoubleArrow size={14} />
                                    </span>{' '}
                                    You want flexibility
                                </li>
                            </ul>
                            <p className="text-md mt-4 text-slate-500">
                                Many people rent for 6-24 months, then purchase
                                once they're comfortable.
                            </p>
                        </div>

                        <div className="rounded bg-white p-8 shadow-xl">
                            <h3 className="mb-4 text-xl font-bold">
                                When Buying Makes Sense
                            </h3>
                            <p className="text-md mb-4">
                                Buying is ideal if you're ready to commit and
                                build long-term equity.
                            </p>
                            <ul className="text-md space-y-2">
                                <li className="flex items-center gap-2 text-slate-700">
                                    <span className="font-bold text-primary">
                                        <MdDoubleArrow size={14} />
                                    </span>{' '}
                                    You plan to stay long-term
                                </li>
                                <li className="flex items-center gap-2 text-slate-700">
                                    <span className="font-bold text-primary">
                                        <MdDoubleArrow size={14} />
                                    </span>{' '}
                                    You want stable housing costs
                                </li>
                                <li className="flex items-center gap-2 text-slate-700">
                                    <span className="font-bold text-primary">
                                        <MdDoubleArrow size={14} />
                                    </span>{' '}
                                    You want to build equity
                                </li>
                                <li className="flex items-center gap-2 text-slate-700">
                                    <span className="font-bold text-primary">
                                        <MdDoubleArrow size={14} />
                                    </span>{' '}
                                    You want flexibility
                                </li>
                            </ul>
                            <p className="text-md mt-4">
                                Homeownership is especially attractive in
                                Tennessee due to low property taxes and no
                                income tax.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= STRATEGY CTA SECTION ================= */}
            <section className="relative bg-primary py-20">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
                <div className="relative z-10 container mx-auto px-6 text-center text-white">
                    <h2 className="mb-4 text-3xl font-bold">
                        The Smart Tennessee Strategy: Rent, Then Buy
                    </h2>
                    <p className="mx-auto mb-4 max-w-2xl text-gray-200">
                        For many people moving to Tennessee, the best strategy
                        is to start by renting short-term, learn the city and
                        neighborhoods, then buy with confidence.
                    </p>
                    <p className="mx-auto mb-8 max-w-2xl text-gray-200">
                        This reduces risk and leads to better long-term
                        decisions.
                    </p>
                    <a href={route('frontend.realEstateAgents')} className="rounded bg-secondary px-8 py-3 font-bold text-white shadow-lg transition">
                        Connect With a Tennessee Realtor →
                    </a>
                </div>
            </section>

            {/* ================= EXPLORE OPTIONS ================= */}
            <section className="container mx-auto bg-white px-6 py-20 md:px-12">
                <h2 className="mb-12 text-center text-3xl font-bold">
                    Explore Your Options in Tennessee
                </h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    <ExploreRentalCities exploreCities={exploreCitiesData} />
                </div>
            </section>

            {/* ================= FINAL THOUGHTS ================= */}
            <section className="bg-secondary/50 px-6 py-16 text-center">
                <h2 className="mb-6 text-3xl font-bold">Final Thoughts</h2>
                <p className="mx-auto mb-4 max-w-3xl text-slate-700">
                    Tennessee offers strong opportunities for both renters and
                    buyers. The right choice depends on your timeline, budget,
                    and lifestyle goals.
                </p>
                <p className="mx-auto max-w-3xl text-slate-700">
                    Whether you rent or buy first, Tennessee remains one of the
                    best states in the country to put down roots.
                </p>
            </section>
        </FrontendLayout>
    );
};

export default RentingBuy;
