import { Link } from '@inertiajs/react';
import { Home, MapPin } from 'lucide-react';
import { BsBuildings } from 'react-icons/bs';

export default function RentingSections() {
    return (
        <div className="w-full bg-white">
            {/* Good Idea Section */}
            <section className="container mx-auto px-4 py-20">
                <div className="grid items-center gap-8 md:grid-cols-2">
                    <div>
                        <h2 className="mb-4 text-5xl font-bold">
                            Is Renting in Tennessee a Good Idea?
                        </h2>
                        <p className="mb-4 text-gray-600">
                            Yes — for many people, renting in Tennessee is the
                            smartest first step. Renting makes sense if you:
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3">
                                <span className="flex-shrink-0">
                                    <svg
                                        aria-hidden="true"
                                        className="h-2 w-2 fill-current text-white"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                    </svg>
                                </span>
                                <span>Are moving from another state</span>
                            </li>
                            <li className="flex items-center gap-3">
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
                                    Want to explore different cities before
                                    buying
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
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
                                    Are waiting for interest rates or prices to
                                    stabilize
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
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
                                    Need flexibility for work or family reasons
                                </span>
                            </li>
                        </ul>
                        <p className="mt-4 text-gray-600">
                            Many people who eventually buy in Tennessee rent
                            first, then purchase once they know the area.
                        </p>
                    </div>

                    <video className="rounded-lg" controls>
                        <source
                            src="https://whytennessee.com/wp-content/uploads/2026/01/Slider-Shot-of-Luxury-Apartments-in-the-Suburbs.mp4"
                            type="video/mp4"
                        />
                    </video>
                </div>
            </section>

            {/* Average Rent Section */}
            <section className="bg-primary px-4 py-16 text-white">
                <div className="container mx-auto">
                    <div className="grid items-center gap-8 md:grid-cols-2">
                        <img
                            src="https://whytennessee.com/wp-content/uploads/2026/01/Apartments-in-scaled.jpeg"
                            alt="Modern apartment"
                            className="rounded-tr-4xl rounded-bl-4xl"
                        />
                        <div>
                            <h2 className="mb-4 text-3xl font-bold">
                                Average Rent in Tennessee
                            </h2>
                            <p className="max-w-2xl text-blue-100">
                                Rental prices vary by city and region, but
                                Tennessee remains more affordable than most U.S.
                                states.
                            </p>
                            <p className="mb-6 text-blue-100">
                                Typical Monthly Rent Ranges :
                            </p>
                            <div className="mb-6 space-y-3">
                                <p className="flex items-center gap-2">
                                    <span className="flex-shrink-0">
                                        <svg
                                            aria-hidden="true"
                                            className="h-2 w-2 fill-current text-white"
                                            viewBox="0 0 512 512"
                                        >
                                            <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                        </svg>
                                    </span>
                                    <strong>1-bedroom apartment:</strong>{' '}
                                    $900–$1,400
                                </p>
                                <p className="flex items-center gap-2">
                                    <span className="flex-shrink-0">
                                        <svg
                                            aria-hidden="true"
                                            className="h-2 w-2 fill-current text-white"
                                            viewBox="0 0 512 512"
                                        >
                                            <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                        </svg>
                                    </span>
                                    <strong>2-bedroom apartment:</strong>{' '}
                                    $1,100–$1,700
                                </p>
                                <p className="flex items-center gap-2">
                                    <span className="flex-shrink-0">
                                        <svg
                                            aria-hidden="true"
                                            className="h-2 w-2 fill-current text-white"
                                            viewBox="0 0 512 512"
                                        >
                                            <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                        </svg>
                                    </span>
                                    <strong>Single-family home:</strong>{' '}
                                    $1,400–$2,200
                                </p>
                            </div>
                            <p className="mb-6 text-white">
                                East and West Tennessee tend to be more
                                affordable than areas near Nashville.
                            </p>
                            <a
                                href={route(
                                    'frontend.cost-of-renting-tennessee',
                                )}
                                className="rounded bg-secondary px-6 py-2 font-semibold text-white transition hover:bg-secondary"
                            >
                                See Cost of Renting in Tennessee →
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Neighborhoods Section */}
            <section className="container mx-auto px-4 py-16">
                <h2 className="mb-12 text-center text-5xl">
                    Average Rent in Tennessee
                </h2>
                <div className="grid gap-8 md:grid-cols-3">
                    {[
                        {
                            title: 'Best for Affordability',
                            list: [
                                'Kingsport',
                                'Bristol',
                                'Jackson',
                                'Memphis',
                            ],
                            img: 'https://whytennessee.com/wp-content/uploads/2025/12/Best_Memphis_Neighborhoods_Harbor_Town.jpg',
                        },
                        {
                            title: 'Best for Kids & City Life',
                            list: ['Nashville', 'Chattanooga', 'Knoxville'],
                            img: 'https://whytennessee.com/wp-content/uploads/2025/12/pexels-kelly-3061230-scaled.jpg',
                        },
                        {
                            title: 'Best for Families',
                            list: [
                                'Johnson City',
                                'Clarksville',
                                'Murfreesboro',
                            ],
                            img: 'https://whytennessee.com/wp-content/uploads/2025/12/pexels-curtis-adams-1694007-3935344-scaled.jpg',
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="flex h-full flex-col overflow-hidden rounded-lg border shadow-lg transition hover:shadow-xl"
                        >
                            {/* Image */}
                            <div className="p-4">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="h-60 w-full rounded-md object-cover"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex flex-1 flex-col p-6">
                                <div>
                                    <h3 className="mb-2 text-lg font-bold">
                                        {item.title}
                                    </h3>
                                    {item.list && (
                                        <ul className="mb-4 space-y-1 text-sm text-gray-600">
                                            {item.list.map((city, idx) => (
                                                <li
                                                    key={idx}
                                                    className="text-md flex items-center gap-2 font-medium"
                                                >
                                                    <span className="flex-shrink-0">
                                                        <svg
                                                            aria-hidden="true"
                                                            className="h-2 w-2 fill-current text-black"
                                                            viewBox="0 0 512 512"
                                                        >
                                                            <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                                        </svg>
                                                    </span>
                                                    {city}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>

                                {/* Button always at bottom */}
                                <div className="mt-auto">
                                    <a
                                        href={route('frontend.rentals')}
                                        className="rounded bg-primary px-5 py-3 font-semibold text-white transition hover:bg-secondary"
                                    >
                                        Browse Rentals by City →
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Types & Lease Section */}
            <section className="bg-primary-background px-4 py-16">
                <div className="container mx-auto grid gap-8 md:grid-cols-2">
                    <div className="flex gap-5">
                        <img
                            src="https://whytennessee.com/wp-content/uploads/2025/12/300-S.Montclair.jpg"
                            alt="Garden apartment"
                            className="h-96 w-80 object-cover"
                        />
                        <div>
                            <h3 className="mb-6 text-xl lg:text-2xl">
                                Types of Rentals Available in Tennessee
                            </h3>
                            <p className="text-md mb-6 text-gray-600">
                                Renters can choose from a wide variety of
                                properties:
                            </p>
                            <ul className="space-y-1 text-sm">
                                <li className="text-md flex items-center gap-2">
                                    <span className="flex-shrink-0">
                                        <svg
                                            aria-hidden="true"
                                            className="h-2 w-2 fill-current text-black"
                                            viewBox="0 0 512 512"
                                        >
                                            <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                        </svg>
                                    </span>
                                    <span>Apartments</span>
                                </li>
                                <li className="text-md flex items-center gap-2">
                                    <span className="flex-shrink-0">
                                        <svg
                                            aria-hidden="true"
                                            className="h-2 w-2 fill-current text-black"
                                            viewBox="0 0 512 512"
                                        >
                                            <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                        </svg>
                                    </span>
                                    <span>Condos</span>
                                </li>
                                <li className="text-md flex items-center gap-2">
                                    <span className="flex-shrink-0">
                                        <svg
                                            aria-hidden="true"
                                            className="h-2 w-2 fill-current text-black"
                                            viewBox="0 0 512 512"
                                        >
                                            <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                        </svg>
                                    </span>
                                    <span>Townhomes</span>
                                </li>
                                <li className="text-md flex items-center gap-2">
                                    <span className="flex-shrink-0">
                                        <svg
                                            aria-hidden="true"
                                            className="h-2 w-2 fill-current text-black"
                                            viewBox="0 0 512 512"
                                        >
                                            <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                        </svg>
                                    </span>
                                    <span>Single-family homes</span>
                                </li>
                                <li className="text-md flex items-center gap-2">
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
                                        Short-term and corporate rentals
                                    </span>
                                </li>
                            </ul>
                            <p className="mt-6 text-sm text-gray-600">
                                Single-family home rentals are especially
                                popular with families relocating to Tennessee.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <img
                            src="https://whytennessee.com/wp-content/uploads/2026/01/Interracial-couple-having-consultation-with-a-realtor-scaled.jpeg"
                            alt="Lease agreement"
                            className="h-96 w-80 object-cover"
                        />
                        <div>
                            <h3 className="mb-6 text-xl font-bold">
                                Lease Terms & Deposits
                            </h3>
                            <p className="mb-6 text-sm text-gray-600">
                                Understand Tennessee's lease agreements and
                                security deposit requirements.
                            </p>
                            <ul className="space-y-1 text-sm">
                                <li className="text-md flex items-center gap-2">
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
                                        Lease length: 12 months (some offer
                                        6-month or month-to-month)
                                    </span>
                                </li>
                                <li className="text-md flex items-center gap-2">
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
                                        Security deposit: Typically 1 month’s
                                        rent
                                    </span>
                                </li>
                                <li className="text-md flex items-center gap-2">
                                    <span className="flex-shrink-0">
                                        <svg
                                            aria-hidden="true"
                                            className="h-2 w-2 fill-current text-black"
                                            viewBox="0 0 512 512"
                                        >
                                            <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                        </svg>
                                    </span>
                                    <span>Pet deposit: Varies by property</span>
                                </li>
                            </ul>
                            <p className="mt-6 text-sm text-gray-600">
                                Tennessee landlord-tenant laws are generally
                                landlord-friendly, so renters should carefully
                                review lease terms.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Utilities Section */}
            <section className="bg-primary px-4 py-16 text-white">
                <div className="container mx-auto">
                    <h2 className="mb-6 text-center text-5xl">
                        Utilities & Monthly Costs
                    </h2>
                    <p className="mb-6 text-center text-lg">
                        Some apartments include utilities, but for most homes,
                        renters need to pay them separately.
                    </p>
                    <div className="grid gap-4 md:grid-cols-4">
                        {[
                            { label: 'Electricity', price: '$120-$180' },
                            { label: 'Water/Gas', price: '$40-$70' },
                            { label: 'Internet', price: '$60-$90' },
                            { label: 'Total', desc: 'Sometimes included' },
                        ].map((util, i) => (
                            <div
                                key={i}
                                className="overflow-hidden rounded-lg bg-white text-center font-bold"
                            >
                                <p className="mb-2 bg-secondary py-4 text-xl text-white">
                                    {util.label}
                                </p>
                                <p
                                    className={`py-8 text-black ${util.price ? 'text-2xl font-bold' : 'text-lg'}`}
                                >
                                    {util.price ? util.price : util.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pet Friendly Section */}
            <section className="container mx-auto px-4 py-16">
                <div className="grid items-center gap-8 md:grid-cols-2">
                    <div className="flex h-full w-full flex-col justify-center bg-primary-background p-8">
                        <h3 className="mb-6 text-2xl font-semibold lg:text-4xl">
                            Pet Friendly Rentals in Tennessee
                        </h3>
                        <p className="text-md text-gray-600">
                            Pet-friendly rentals are common, but policies vary.
                        </p>
                        <br />
                        <p>Typical requirements:</p>
                        <ul className="space-y-1 text-sm">
                            <li className="text-md flex items-center gap-2">
                                <span className="flex-shrink-0">
                                    <svg
                                        aria-hidden="true"
                                        className="h-2 w-2 fill-current text-black"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                    </svg>
                                </span>
                                <span>Monthly pet rent</span>
                            </li>
                            <li className="text-md flex items-center gap-2">
                                <span className="flex-shrink-0">
                                    <svg
                                        aria-hidden="true"
                                        className="h-2 w-2 fill-current text-black"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                    </svg>
                                </span>
                                <span>Non-refundable pet fees</span>
                            </li>
                            <li className="text-md flex items-center gap-2">
                                <span className="flex-shrink-0">
                                    <svg
                                        aria-hidden="true"
                                        className="h-2 w-2 fill-current text-black"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                    </svg>
                                </span>
                                <span>Breed or size restrictions</span>
                            </li>
                        </ul>
                        <p className="mt-6 text-sm text-gray-600">
                            Homes for rent are often more pet-friendly than
                            apartments.
                        </p>
                    </div>
                    <img
                        src="https://whytennessee.com/wp-content/uploads/2026/01/Four-young-friends-playing-with-a-dog_-spending-time-together-on-a-porch-of-a-country-house-on-the-evening-scaled.jpeg"
                        alt="Pet friendly"
                        className="h-full min-h-[400px] w-full rounded-tl-4xl rounded-br-4xl object-cover"
                    />
                    <video
                        className="h-full min-h-[400px] w-full rounded-tl-4xl rounded-br-4xl object-cover"
                        controls
                    >
                        <source
                            src="https://whytennessee.com/wp-content/uploads/2026/01/Aerial-close-following-behind-grey-Sports-Car-nearby-a-river-at-sunset_-US-National-Park.mp4"
                            type="video/mp4"
                        />
                    </video>
                    <div className="flex h-full w-full flex-col justify-center bg-blue-900 p-8 text-white">
                        <h3 className="mb-6 text-2xl font-semibold lg:text-4xl">
                            Transportation & Commuting
                        </h3>
                        <p className="text-md mb-6 text-white">
                            Tennessee is a car-dependent state.
                        </p>
                        <ul className="space-y-1 text-sm">
                            <li className="text-md flex items-center gap-2">
                                <span className="flex-shrink-0">
                                    <svg
                                        aria-hidden="true"
                                        className="h-2 w-2 fill-current text-white"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                    </svg>
                                </span>
                                <span>
                                    Public transportation is limited outside
                                    major cities
                                </span>
                            </li>
                            <li className="text-md flex items-center gap-2">
                                <span className="flex-shrink-0">
                                    <svg
                                        aria-hidden="true"
                                        className="h-2 w-2 fill-current text-white"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                    </svg>
                                </span>
                                <span>
                                    Gas prices are below national averages
                                </span>
                            </li>
                            <li className="text-md flex items-center gap-2">
                                <span className="flex-shrink-0">
                                    <svg
                                        aria-hidden="true"
                                        className="h-2 w-2 fill-current text-white"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                    </svg>
                                </span>
                                <span>
                                    Commute times are shorter than many metro
                                    areas
                                </span>
                            </li>
                        </ul>
                        <p className="mt-6 text-sm text-white">
                            Single-family home rentals are especially popular
                            with families relocating to Tennessee.
                        </p>
                    </div>
                </div>
            </section>

            {/* Renting vs Buying Section */}
            <section className="bg-primary-background py-16">
                <div className="container mx-auto grid grid-cols-1 items-center gap-8 px-4 md:grid-cols-2">
                    <div>
                        <h2 className="text-4xl font-semibold">
                            Renting vs Buying in
                        </h2>
                        <h2 className="mb-6 text-4xl font-semibold">
                            Tennessee
                        </h2>
                        <a
                            href={route('frontend.renting-buy')}
                            className="rounded bg-primary px-5 py-3 font-semibold text-white transition hover:bg-secondary"
                        >
                            Renting vs Buying in Tennessee →
                        </a>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                        {[
                            {
                                title: 'Renting in Tennessee',
                                desc: 'You should rent if you:',
                                list: [
                                    'You’re new to Tennesse',
                                    'Need flexibility',
                                    'Aren’t ready for a long-term commitment',
                                ],
                            },
                            {
                                title: 'Buying in Tennessee',
                                desc: 'You should buy if you:',
                                list: [
                                    'You plan to stay long-term',
                                    'Want to build equity',
                                    'Have stable income and down payment',
                                ],
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="rounded-lg border bg-white p-6 shadow-xl"
                            >
                                <h3 className="mb-4 text-xl font-semibold">
                                    {item.title}
                                </h3>
                                <p className="mb-4 text-gray-600">
                                    {item.desc}
                                </p>
                                <ul className="mb-4 space-y-1 text-sm text-gray-600">
                                    {item.list.map((item, idx) => (
                                        <li
                                            key={idx}
                                            className="text-md flex items-center gap-2 font-medium"
                                        >
                                            <span className="flex-shrink-0">
                                                <svg
                                                    aria-hidden="true"
                                                    className="h-2 w-2 fill-current text-black"
                                                    viewBox="0 0 512 512"
                                                >
                                                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                                                </svg>
                                            </span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How To Find Section */}
            <section className="bg-blue-900 px-4 py-16 text-white">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="mb-4 text-3xl font-bold">
                        How to Find Rentals in Tennessee
                    </h2>
                    <p className="mb-6 text-blue-100">
                        The best rental opportunities often come from local
                        realtors, property managers, and private landlords who
                        know the market well. Working with these sources can
                        help you find better options, fair pricing, and rentals
                        that may not be widely advertised.
                    </p>
                    <p className="mb-6 text-blue-100">
                        WhyTennessee.com brings rentals, homes for sale, and
                        relocation resources into one place.
                    </p>
                    <a
                        href={route('frontend.rentals')}
                        className="mx-auto flex w-fit items-center gap-2 rounded bg-secondary px-8 py-3 font-semibold transition hover:bg-secondary"
                    >
                        Browse Rentals in Tennessee →
                    </a>
                </div>
            </section>

            {/* Explore Cities Section */}
            <section className="container mx-auto px-4 py-16">
                <h2 className="mb-12 text-center text-3xl font-bold">
                    Explore Rentals & Cities
                </h2>
                <div className="grid gap-8 md:grid-cols-3">
                    {[
                        {
                            icon: BsBuildings,
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
                            href: route('frontend.rentals'),
                        },
                        {
                            icon: MapPin,
                            city: 'Explore Cities',
                            desc: "Learn about Tennessee's neighborhoods",
                            button: 'Explore Cities →',
                            href: route('frontend.livingInBristol'),
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="rounded-lg border p-6 text-center transition hover:shadow-lg"
                        >
                            <item.icon
                                size={40}
                                className="mx-auto mb-4 text-blue-900"
                            />
                            <h3 className="mb-2 text-lg font-bold">
                                {item.city}
                            </h3>
                            <p className="text-md mx-auto mb-4 w-52 text-gray-600">
                                {item.desc}
                            </p>
                            <Link href={item.href}>
                                <button className="w-full rounded bg-blue-900 py-2 font-semibold text-white transition hover:bg-blue-800">
                                    {item.button}
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* Final Thoughts Section */}
            <section className="bg-primary-background px-4 py-24 text-center">
                <div className="mx-auto max-w-2xl">
                    <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                        Final Thoughts
                    </h2>
                    <p className="text-gray-600">
                        Tennessee offers an excellent rental market with
                        affordable prices, great communities, and quality of
                        life. Start your Tennessee rental journey today.
                    </p>
                </div>
            </section>
            {/* Final Thoughts Section */}
            <section className="bg-primary px-4 py-16 text-center">
                <div className="mx-auto max-w-3xl">
                    <h2 className="mb-4 text-2xl font-bold text-white md:text-4xl">
                        Disclaimer
                    </h2>
                    <p className="text-gray-100">
                        The information provided is for general informational
                        purposes only and should not be considered financial,
                        legal, or real estate advice. Costs, prices, and
                        conditions may vary by location and over time.
                    </p>
                </div>
            </section>
        </div>
    );
}
