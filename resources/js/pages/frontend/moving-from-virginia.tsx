import { Head } from '@inertiajs/react';

import FinalInfoSection from '@/components/sections/frontend/cities/final-info-section';
import { Hero } from '@/components/sections/frontend/hero';
import FrontendLayout from '@/layouts/frontend-layout';

const virginiaHeroSlides = [
    '/assets/images/pexels-pixabay-280222-scaled-1.jpg',
    '/assets/images/moving-checklist/pexels-chaitaastic-3722911-scaled.jpg',
    '/assets/images/live-in-tennessee/pexels-kelly-2833713-2048x1150.jpg',
    '/assets/images/live-in-tennessee/tennessee-state-capitol-building-nashville-aerial.jpeg',
];

const virginiaVsTennesseeStats = [
    { category: 'State Income Tax', virginia: '2%–5.75%', tennessee: '0%', tnSpotlight: true },
    { category: 'Avg Property Tax Rate', virginia: '~0.80%', tennessee: '0.49%' },
    { category: 'Avg Monthly Cost of Living', virginia: '~$5,300', tennessee: '~$4,800' },
    { category: 'Median Home Price', virginia: '~$385K', tennessee: '~$317K' },
    { category: 'Avg Rent (2-bed)', virginia: '~$1,700', tennessee: '~$1,400' },
    { category: 'Population Growth', virginia: 'Moderate', tennessee: 'Very High' },
] as const;

const lifestyleGains = [
    'Lower cost of living',
    'Less congestion than Northern Virginia',
    'Mountains, lakes, and outdoor lifestyle',
    'Strong community feel',
] as const;

const lifestyleTradeoffs = [
    'Proximity to Washington, D.C. job market',
    'Coastal access (Virginia Beach area)',
    'Large metro infrastructure',
] as const;

export default function MovingFromVirginia() {


    return (
        <FrontendLayout activePage="moving-to-tennessee" subPage="Moving from Virginia to Tennessee">
            <Head title="Moving From Virginia to Tennessee (2026 Guide)" />
            <div className="bg-gray-50 text-gray-900 antialiased selection:bg-gray-200 selection:text-gray-900">
                {/* Navigation */}


                {/* Hero: full-width rotating backgrounds */}
                <Hero
                    slides={virginiaHeroSlides}
                    eyebrow="2026 Relocation Guide"
                    title="Moving From Virginia to Tennessee"
                    description="Thinking about moving? With rising costs in Northern Virginia, Richmond, and Southwest Virginia, more people are relocating to Tennessee for lower taxes, cheaper housing, and a better overall cost of living."
                    buttons={[
                        { label: 'Get Relocation Help', href: '#cta' },
                        { label: 'Read the Breakdown', href: '#stats' },
                    ]}
                    width="max-w-2xl"
                    height="h-[min(72vh,520px)] md:h-[560px]"
                />

                <div className="mx-auto container space-y-24 px-4 pb-32 sm:px-6 lg:px-8">

                    {/* Stats Section — full-bleed background; content stays in container */}
                    <section
                        id="stats"
                        className="scroll-mt-24 w-screen max-w-[100vw] border-y border-emerald-100 bg-[#1b2a4a] text-white antialiased selection:bg-emerald-600 selection:text-white ml-[calc(50%-50vw)]"
                    >
                        <div className="mx-auto container px-4 pt-8 sm:px-6 sm:pt-10 md:pt-12 lg:px-8">
                            <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                                <div className="max-w-xl">
                                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white shadow-sm">
                                        <iconify-icon icon="solar:chart-square-linear" className="text-lg text-white" aria-hidden />
                                        2026 comparison
                                    </div>
                                    <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                                        Virginia vs Tennessee: Key Stats
                                    </h2>
                                    <p className="mt-2 text-sm leading-relaxed text-white/80">
                                        A side-by-side look at taxes, housing, and cost of living—so you can plan your move with clarity.
                                    </p>
                                </div>
                                <div className="hidden shrink-0 items-center gap-3 rounded-2xl border border-white/80 bg-white/10 px-5 py-3 shadow-sm sm:flex">
                                    <div className="text-center">
                                        <span className="block text-[10px] font-semibold uppercase tracking-widest text-slate-400">VA</span>
                                        <span className="text-sm font-semibold text-white">Origin</span>
                                    </div>
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/60 bg-white/10 text-xs font-bold text-white/70">
                                        vs
                                    </div>
                                    <div className="text-center">
                                        <span className="block text-[10px] font-semibold uppercase tracking-widest text-white">TN</span>
                                        <span className="text-sm font-semibold text-white">Destination</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="h-1.5 w-full bg-white/10" aria-hidden />

                        <div className="mx-auto container px-4 pb-10 pt-6 sm:px-6 sm:pb-12 md:pb-14 lg:px-8">
                            {/* Mobile: stacked comparison cards */}
                            <div className="space-y-3 md:hidden">
                                {virginiaVsTennesseeStats.map((row) => (
                                    <div
                                        key={row.category}
                                        className="rounded-2xl border border-white/50 bg-white/10 p-4"
                                    >
                                            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/80">
                                                {row.category}
                                            </p>
                                            <div className="grid grid-cols-2 gap-3">
                                                <div className="rounded-xl border border-white/50 bg-white/10 px-3 py-3">
                                                    <span className="text-[10px] font-semibold uppercase tracking-wide text-gray-700">
                                                        Virginia
                                                    </span>
                                                    <p className="mt-1 text-sm font-semibold tabular-nums text-white">
                                                        {row.virginia}
                                                    </p>
                                                </div>
                                                <div
                                                    className={`rounded-xl border border-white/50 bg-white/10 px-3 py-3 ${
                                                        'tnSpotlight' in row && row.tnSpotlight ? 'border-emerald-400' : ''
                                                    }`}
                                                >
                                                    <span className="text-[10px] font-semibold uppercase tracking-wide text-white">
                                                        Tennessee
                                                    </span>
                                                    <p
                                                        className={`mt-1 text-sm font-semibold tabular-nums ${
                                                            'tnSpotlight' in row && row.tnSpotlight
                                                                ? 'text-white'
                                                                : 'text-white'
                                                        }`}
                                                    >
                                                        {row.tennessee}
                                                    </p>
                                                </div>
                                            </div>
                                    </div>
                                ))}
                            </div>

                            {/* Desktop: comparison grid */}
                            <div className="hidden md:block">
                                <div className="overflow-hidden rounded-xl bg-emerald-50">
                                    <div className="grid grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)_minmax(0,1fr)] border-b border-emerald-200/60 bg-emerald-50">
                                            <div className="flex items-center px-5 py-4">
                                                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                                                    Category
                                                </span>
                                            </div>
                                            <div className="flex flex-col justify-center border-l border-emerald-200/60 px-5 py-4 text-center">
                                                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                                                    Virginia
                                                </span>
                                                <span className="mt-0.5 text-[11px] text-slate-400">Current state</span>
                                            </div>
                                            <div className="flex flex-col justify-center border-l border-emerald-200/60 px-5 py-4 text-center">
                                                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
                                                    Tennessee
                                                </span>
                                                <span className="mt-0.5 text-[11px] text-emerald-600/80">Your next chapter</span>
                                            </div>
                                        </div>

                                        {virginiaVsTennesseeStats.map((row) => (
                                            <div
                                                key={row.category}
                                                className="grid grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)_minmax(0,1fr)] border-b border-emerald-200/60 bg-emerald-50 transition-colors last:border-b-0 hover:bg-emerald-100/35"
                                            >
                                                <div className="flex items-center px-5 py-4 text-sm text-gray-600">
                                                    {row.category}
                                                </div>
                                                <div className="flex items-center justify-center border-l border-emerald-200/60 px-5 py-4 text-sm font-medium tabular-nums text-slate-800">
                                                    {row.virginia}
                                                </div>
                                                <div
                                                    className={`flex items-center justify-center border-l border-emerald-200/60 px-5 py-4 text-sm font-semibold tabular-nums ${
                                                        'tnSpotlight' in row && row.tnSpotlight ? 'text-emerald-800' : 'text-emerald-900'
                                                    }`}
                                                >
                                                    {row.tennessee}
                                                </div>
                                            </div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative mt-8 border-t border-white/10 pt-6 sm:pt-8">
                                <div className="absolute right-6 top-6 hidden opacity-[0.07] sm:block" aria-hidden>
                                    <iconify-icon icon="solar:map-point-wave-linear" width="120" height="120" className="text-[#b8912a]" />
                                </div>
                                <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#b8912a] text-white shadow-md shadow-[#b8912a]/25">
                                        <iconify-icon icon="solar:lightbulb-bolt-linear" className="text-2xl" aria-hidden />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-wider text-white">
                                            Big takeaway
                                        </p>
                                        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base">
                                            <strong className="font-semibold text-white">Tennessee</strong> means no state
                                            income tax and generally lower housing costs.{' '}
                                            <strong className="font-semibold text-white">Virginia</strong> runs higher—
                                            especially in Northern VA—so most movers see{' '}
                                            <span className="font-semibold text-white">stronger long-term affordability</span>{' '}
                                            after relocating to Tennessee.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Cost & Housing */}
                    <section className="py-20 bg-white font-sans text-gray-700 antialiased">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16 max-w-2xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-gray-700">
                            Virginia vs. Tennessee
                        </h2>
                        <p className="text-xl text-gray-500">
                            One of the biggest reasons people are moving to Tennessee is
                            affordability. See how the numbers stack up.
                        </p>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                        <div className="lg:col-span-4 space-y-6">
                            <div className="bg-white/10 border border-gray-100/10 backdrop-blur-sm bg-clip-padding bg-opacity-10 rounded-3xl p-8 shadow-sm">
                            <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                                <iconify-icon
                                icon="solar:graph-up-bold"
                                className="text-secondary! text-2xl"
                                />
                                Real Cost Differences
                            </h3>
                            <div className="space-y-8">
                                <div>
                                <div className="flex justify-between mb-2 items-end">
                                    <span className="font-semibold text-gray-700">
                                    Overall Cost of Living
                                    </span>
                                    <span className="text-secondary! font-bold text-sm bg-secondary!important/10 px-2 py-1 rounded">
                                    8–12% Cheaper
                                    </span>
                                </div>
                                <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden flex">
                                    <div className="h-full bg-white/10 w-[100%]" />{" "}
                                    <div className="h-full bg-secondary! w-[88%] -ml-[10%] border-l-2 border-white" />{" "}
                                </div>
                                </div>
                                <div>
                                <div className="flex justify-between mb-2 items-end">
                                        <span className="font-semibold text-gray-700">
                                    Housing Costs
                                    </span>
                                    <span className="text-secondary! font-bold text-sm   px-2 py-1 rounded">
                                    15–30% Cheaper
                                    </span>
                                </div>
                                <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden flex">
                                    <div className="h-full bg-white/10 w-[100%]" />
                                    <div className="h-full bg-secondary! w-[70%] -ml-[30%] border-l-2 border-white" />
                                </div>
                                </div>
                                <div>
                                <div className="flex justify-between mb-2 items-end">
                                    <span className="font-semibold text-gray-700">
                                    Transportation
                                    </span>
                                    <span className="text-secondary! font-bold text-sm bg-secondary!important/10 px-2 py-1 rounded">
                                    Lower Fuel &amp; Fees
                                    </span>
                                </div>
                                <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden flex">
                                    <div className="h-full bg-white/10 w-[100%]" />
                                    <div className="h-full bg-secondary!important w-[92%] -ml-[8%] border-l-2 border-white" />
                                </div>
                                </div>
                            </div>
                            <div className="mt-10 flex items-center gap-4 p-4  rounded-2xl border border-secondary! ">
                                <iconify-icon
                                icon="solar:wad-of-money-bold-duotone"
                                className="text-gray-700 text-3xl flex-shrink-0"
                                />
                                <p className="text-sm text-gray-700 leading-snug">
                                <strong>Pro Tip:</strong> Tennessee has{" "}
                                <strong>no state income tax</strong>, which acts like an immediate
                                5-6% raise for most Virginia transplants.
                                </p>
                            </div>
                            </div>
                        </div>
                        <div className="lg:col-span-4 space-y-6">
                            <div className="bg-white/10 text-white rounded-3xl p-8 relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-secondary! rounded-full blur-3xl" />
                            <h3 className="text-lg font-medium text-gray-700 mb-8 uppercase tracking-widest">
                                Monthly Averages
                            </h3>
                            <div className="space-y-10 relative z-10">
                                <div className="flex justify-between items-center border-b border-gray-700 pb-6">
                                <div>
                                    <p className="text-sm text-gray-700 mb-1">Virginia</p>
                                    <p className="text-3xl font-bold tracking-tight text-gray-700">
                                    $5,300
                                    </p>
                                </div>
                                <div className="text-right">
                                    <iconify-icon
                                    icon="solar:home-2-linear"
                                    className="text-gray-700 text-2xl"
                                    />
                                </div>
                                </div>
                                <div className="flex justify-between items-center">
                                <div>
                                    <p className="text-sm text-secondary! mb-1">Tennessee</p>
                                    <p className="text-4xl font-black tracking-tighter text-secondary!">
                                    $4,800
                                    </p>
                                </div>
                                <div className="text-right">
                                    <iconify-icon
                                    icon="solar:star-fall-bold"
                                        className="text-secondary! text-3xl"
                                    />
                                </div>
                                </div>
                            </div>
                            <div className="mt-10 bg-gradient-to-r from-secondary! to-secondary! rounded-2xl p-6 text-center transform transition hover:scale-[1.02]">
                                <p className="text-white text-sm font-medium uppercase tracking-wider mb-1">
                                Annual Savings Potential
                                </p>
                                <p className="text-3xl font-black text-white">$4,000 – $6,000</p>
                                <p className="text-xs text-white/80">Annual savings potential</p>
                            </div>
                            </div>
                            <div className="flex items-center gap-3 px-6 text-gray-700 italic text-sm">
                            <iconify-icon icon="solar:info-circle-linear" className="text-lg" />
                            Utilities remain largely consistent between both states.
                            </div>
                        </div>
                        <div className="lg:col-span-4 h-full flex items-center justify-center">
                            <div className="aspect-square w-full rounded-3xl overflow-hidden border border-white/10 shadow-sm bg-white/10 flex items-center justify-center text-white/80">
                            <img
                                src="https://static.stacker.com/s3fs-public/styles/1280x720/s3/croppedshutterstock1826551427P9ASjpg.JPEG"
                                alt="A happy family unpacking boxes in a new home, symbolizing relocation"
                                className="w-full h-full object-cover"
                            />
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>


                    {/* Taxes Section */}
                    <section className="py-20 bg-gray-50 font-sans text-gray-900">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4">
                            <iconify-icon icon="solar:home-smile-bold" />
                            Real Estate Focus
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-700 mb-4">
                            Housing Market: <span className="text-secondary!">Where You Save</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl">
                            Housing is where Tennessee truly pulls ahead. From entry prices to
                            long-term taxes, the math favors the Move South.
                        </p>
                        </div>
                        <div className="grid lg:grid-cols-12 gap-8">
                        <div className="lg:col-span-8 grid md:grid-cols-2 gap-6">
                            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <iconify-icon
                                icon="solar:check-circle-bold"
                                className="text-8xl text-emerald-600"
                                />
                            </div>
                            <h3 className="text-2xl font-bold text-secondary! mb-6 flex items-center gap-2">
                                Tennessee Advantages
                            </h3>
                            <ul className="space-y-5">
                                <li className="flex gap-3">
                                <iconify-icon
                                    icon="solar:double-alt-arrow-right-bold"
                                    className="text-secondary! mt-1"
                                />
                                <div>
                                    <span className="block font-bold text-gray-800 text-lg">
                                    ~$317K Median Price
                                    </span>
                                    <p className="text-sm text-gray-500">
                                    Significantly lower barrier to entry for first-time buyers.
                                    </p>
                                </div>
                                </li>
                                <li className="flex gap-3">
                                <iconify-icon
                                    icon="solar:double-alt-arrow-right-bold"
                                    className="text-secondary! mt-1"
                                />
                                <div>
                                    <span className="block font-bold text-gray-800 text-lg">
                                    Lower Property Taxes
                                    </span>
                                    <p className="text-sm text-gray-500">
                                    Keep hundreds more in your pocket every single month.
                                    </p>
                                </div>
                                </li>
                                <li className="flex gap-3">
                                <iconify-icon
                                    icon="solar:double-alt-arrow-right-bold"
                                    className="text-emerald-500 mt-1"
                                />
                                <div>
                                    <span className="block font-bold text-slate-800 text-lg">
                                    More Land for Less
                                    </span>
                                    <p className="text-sm text-slate-500">
                                    Acreage is accessible, even near major metro hubs.
                                    </p>
                                </div>
                                </li>
                            </ul>
                            </div>
                            <div className="bg-slate-100 p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
                            <h3 className="text-2xl font-bold text-slate-400 mb-6 flex items-center gap-2">
                                Virginia Challenges
                            </h3>
                            <ul className="space-y-5">
                                <li className="flex gap-3">
                                <iconify-icon
                                    icon="solar:close-circle-bold"
                                    className="text-slate-400 mt-1"
                                />
                                <div>
                                    <span className="block font-bold text-slate-700 text-lg">
                                    Northern VA Premium
                                    </span>
                                    <p className="text-sm text-slate-500">
                                    Prices often start at $600K for aging townhomes.
                                    </p>
                                </div>
                                </li>
                                <li className="flex gap-3">
                                <iconify-icon
                                    icon="solar:close-circle-bold"
                                    className="text-slate-400 mt-1"
                                />
                                <div>
                                    <span className="block font-bold text-slate-700 text-lg">
                                    DC Proximity Tax
                                    </span>
                                    <p className="text-sm text-slate-500">
                                    Extreme competition leads to bidding wars and waived
                                    inspections.
                                    </p>
                                </div>
                                </li>
                                <li className="flex gap-3">
                                <iconify-icon
                                    icon="solar:close-circle-bold"
                                    className="text-slate-400 mt-1"
                                />
                                <div>
                                    <span className="block font-bold text-slate-700 text-lg">
                                    Richmond Rising
                                    </span>
                                    <p className="text-sm text-slate-500">
                                    Suburban prices are climbing rapidly, closing the "value gap."
                                    </p>
                                </div>
                                </li>
                            </ul>
                            </div>
                            <div className="md:col-span-2 bg-slate-900 rounded-3xl p-8 text-white">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                                <div>
                                <h4 className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-2">
                                    Real Price Comparison
                                </h4>
                                <p className="text-slate-400 text-sm">
                                    Median home prices by popular region:
                                </p>
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full md:w-auto">
                                <div>
                                    <p className="text-slate-500 text-xs font-bold uppercase">
                                    NoVA
                                    </p>
                                    <p className="text-xl font-bold">$600K+</p>
                                </div>
                                <div>
                                    <p className="text-slate-500 text-xs font-bold uppercase">
                                    Nashville
                                    </p>
                                    <p className="text-xl font-bold">$430K</p>
                                </div>
                                <div>
                                    <p className="text-slate-500 text-xs font-bold uppercase">
                                    Richmond
                                    </p>
                                    <p className="text-xl font-bold">$380K</p>
                                </div>
                                <div>
                                    <p className="text-emerald-400 text-xs font-bold uppercase">
                                    East TN
                                    </p>
                                    <p className="text-xl font-bold text-emerald-400">$250K+</p>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="lg:col-span-4 space-y-6">
                            <div className="rounded-3xl overflow-hidden aspect-[4/5] shadow-lg border-4 border-gray-200">
                            <img
                                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop"
                                alt="Beautiful modern home in Tennessee"
                                className="w-full h-full object-cover"
                            />
                            </div>
                            <div className="bg-secondary! rounded-3xl p-8 text-gray-700 shadow-xl shadow-secondary!">
                            <div className="flex items-center gap-3 mb-4">
                                <iconify-icon
                                icon="solar:chart-square-bold"
                                className="text-3xl text-secondary! text-gray-700"
                                />
                                <h4 className="text-xl font-bold text-gray-900">Investor Insight</h4>
                            </div>
                            <p className=" leading-relaxed mb-6 text-gray-200">
                                Tennessee offers a rare trifecta:{" "}
                                <strong>lower entry prices</strong>,{" "}
                                <strong>minimal holding costs</strong> (taxes), and{" "}
                                <strong>stronger ROI</strong> potential due to massive inbound
                                migration.
                            </p>
                            <div className="pt-6 border-t border-secondary! flex items-center justify-between text-gray-200">
                                <span className="text-sm font-medium text-secondary! text-gray-200 text-gray-200">
                                Market Appreciation
                                </span>
                                <span className="text-2xl font-black text-gray-700 text-gray-700">+Strong</span>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>



                    {/* Lifestyle & pros / cons */}
                    <section className="py-24 bg-white font-sans text-slate-700 overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                        <div className="max-w-2xl">
                            <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-gray-700 mb-4">
                            Taxes: Why Tennessee Is a Major Upgrade
                            </h1>

                        </div>
                        </div>
                        <div className="grid lg:grid-cols-2 gap-8">
                        <div className="relative group">
                            <div className="absolute -inset-1  rounded-[2.5rem] blur   group-hover:opacity-40 transition duration-1000" />
                            <div className="relative bg-white border border-slate-100 rounded-[2.5rem] p-10 shadow-xl h-full flex flex-col">
                            <div className="flex items-start justify-between mb-10">
                                <div>
                                <div className="bg-secondary! text-gray-100! text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                                    State Income Tax
                                </div>
                                <h3 className="text-3xl font-black text-slate-900">
                                    The 0% Advantage
                                </h3>
                                </div>
                                <iconify-icon
                                icon="solar:wad-of-money-bold-duotone"
                                className="text-5xl text-emerald-500"
                                />
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100">
                                <span className="font-bold text-slate-600">Virginia Rate</span>
                                <span className="text-xl font-extrabold text-rose-500">
                                    Up to 5.75%
                                </span>
                                </div>
                                <div className="flex items-center justify-between p-6 rounded-2xl bg-secondary! border-2 border-secondary!">
                                <span className="font-bold text-gray-100! text-lg">
                                    Tennessee Rate
                                </span>
                                <span className="text-3xl font-black text-gray-100!">0%</span>
                                </div>
                            </div>
                            <div className="mt-auto pt-8 border-t border-slate-100">
                                <p className="text-slate-500 text-sm mb-2">
                                On a <span className="font-bold text-slate-800">$100,000</span>{" "}
                                annual income:
                                </p>
                                <div className="flex items-baseline gap-2">
                                <span className="text-4xl font-black text-slate-900">$5,750</span>
                                <span className="text-emerald-600 font-bold">Annual Savings</span>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="absolute -inset-1  rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000" />
                            <div className="relative bg-white border border-slate-100 rounded-[2.5rem] p-10 shadow-xl h-full flex flex-col">
                            <div className="flex items-start justify-between mb-10">
                                <div>
                                <div className="bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                                    Property Taxes
                                </div>
                                <h3 className="text-3xl font-black text-slate-900">
                                    Lower Holding Costs
                                </h3>
                                </div>
                                <iconify-icon
                                icon="solar:home-bold-duotone"
                                className="text-5xl text-blue-500"
                                />
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100">
                                <span className="font-bold text-slate-600">Virginia Average</span>
                                <span className="text-xl font-extrabold text-rose-500">
                                    ~0.80%
                                </span>
                                </div>
                                <div className="flex items-center justify-between p-6 rounded-2xl bg-blue-50 border-2 border-blue-200">
                                <span className="font-bold text-blue-900 text-lg">
                                    Tennessee Average
                                </span>
                                <span className="text-3xl font-black text-blue-600">~0.49%</span>
                                </div>
                            </div>
                            <div className="mt-auto pt-8 border-t border-slate-100">
                                <p className="text-slate-500 text-sm mb-2">
                                On a <span className="font-bold text-slate-800">$400,000</span>{" "}
                                home valuation:
                                </p>
                                <div className="flex items-baseline gap-2">
                                <span className="text-4xl font-black text-slate-900">$1,200</span>
                                <span className="text-blue-600 font-bold">Saved per Year</span>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="mt-12 bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
                            <iconify-icon icon="solar:banknote-bold" className="text-9xl" />
                        </div>
                        <div className="relative z-10 grid md:grid-cols-3 gap-12 items-center">
                            <div className="md:col-span-1 border-r border-slate-800 pr-8">
                            <h4 className="text-emerald-400 font-bold uppercase tracking-widest text-sm mb-2">
                                Total Tax Burden
                            </h4>
                            <p className="text-3xl font-black leading-tight mb-4">
                                One of the Lowest in the Nation
                            </p>
                            <div className="inline-flex items-center gap-2 text-slate-400">
                                <iconify-icon
                                icon="solar:ranking-bold"
                                className="text-amber-400"
                                />
                                <span>Top Tier for Affordability</span>
                            </div>
                            </div>
                            <div className="md:col-span-2">
                            <h4 className="text-xl font-bold mb-6 text-slate-200">
                                Tennessee is the ideal destination for:
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <div className="flex flex-col gap-2 p-4 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-emerald-500/50 transition-colors">
                                <iconify-icon
                                    icon="solar:users-group-rounded-bold-duotone"
                                    className="text-3xl text-emerald-400"
                                />
                                <span className="font-bold">Homeowners</span>
                                </div>
                                <div className="flex flex-col gap-2 p-4 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-emerald-500/50 transition-colors">
                                <iconify-icon
                                    icon="solar:chart-square-bold-duotone"
                                    className="text-3xl text-emerald-400"
                                />
                                <span className="font-bold">Investors</span>
                                </div>
                                <div className="flex flex-col gap-2 p-4 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-emerald-500/50 transition-colors">
                                <iconify-icon
                                    icon="solar:cup-first-bold-duotone"
                                    className="text-3xl text-emerald-400"
                                />
                                <span className="font-bold">Retirees</span>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>


                    {/* Cities Grid */}
                    <div className="bg-gray-50 min-h-screen font-sans">

                    <div className="relative bg-gray-700 text-white pt-24 pb-40 px-6 overflow-hidden">

                        <img
                        src="https://www.holidayvacations.com/sites/default/files/2024-10/image/%C2%A92018-Gaylord-Hotels_GO-Photo-General-Jackson_da27c6ed-25b7-4d81-98f2-57c36233474a.jpg"
                        alt="Scenic mountain landscape representing Virginia and Tennessee outdoors"
                        className="absolute inset-0 w-full h-full object-cover opacity-30 object-center"
                        />

                        <header className="relative z-10 text-center max-w-4xl mx-auto">
                        <span className="text-secondary! font-bold tracking-widest uppercase text-sm">Relocation Guide</span>
                        <h1 className="text-5xl md:text-6xl font-extrabold mt-3 mb-5 leading-tight">
                            Virginia <span className="text-gray-400 text-3xl md:text-4xl font-light italic mx-1">vs</span> Tennessee
                        </h1>
                        <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                            Comparing the lifestyle, economy, and landscape of two Southern favorites.
                        </p>
                        </header>
                    </div>

                    <div className="max-w-4xl mx-auto px-6 -mt-24 relative z-20 pb-16">

                        <div className="grid md:grid-cols-2 gap-8 mb-12">

                        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-slate-100 transition-all hover:shadow-2xl">
                            <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-8 shadow-inner">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                            </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-7">What You Gain in Tennessee</h2>
                            <ul className="space-y-5">
                            <li className="flex items-start">
                                <span className="bg-green-500 mt-1.5 mr-4 w-2.5 h-2.5 rounded-full shrink-0"></span>
                                <span className="text-slate-700 leading-relaxed"><strong>Lower cost of living:</strong> No state income tax and more affordable housing.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="bg-green-500 mt-1.5 mr-4 w-2.5 h-2.5 rounded-full shrink-0"></span>
                                <span className="text-slate-700 leading-relaxed"><strong>Less congestion:</strong> A breath of fresh air compared to the NoVA gridlock.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="bg-green-500 mt-1.5 mr-4 w-2.5 h-2.5 rounded-full shrink-0"></span>
                                <span className="text-slate-700 leading-relaxed"><strong>Outdoor Lifestyle:</strong> World-class access to the Smokies and Tennessee River lakes.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="bg-green-500 mt-1.5 mr-4 w-2.5 h-2.5 rounded-full shrink-0"></span>
                                <span className="text-slate-700 leading-relaxed"><strong>Strong Community:</strong> A deep-rooted "small town" feel, even in growing cities.</span>
                            </li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-slate-100 transition-all hover:shadow-2xl">
                            <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mb-8 shadow-inner">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                            </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-7">What You Leave Behind</h2>
                            <ul className="space-y-5">
                            <li className="flex items-start">
                                <span className="bg-orange-500 mt-1.5 mr-4 w-2.5 h-2.5 rounded-full shrink-0"></span>
                                <span className="text-slate-700 leading-relaxed"><strong>D.C. Job Market:</strong> Proximity to federal roles and high-tier tech corridors.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="bg-orange-500 mt-1.5 mr-4 w-2.5 h-2.5 rounded-full shrink-0"></span>
                                <span className="text-slate-700 leading-relaxed"><strong>Coastal Access:</strong> TN is landlocked; say goodbye to the Virginia Beach shoreline.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="bg-orange-500 mt-1.5 mr-4 w-2.5 h-2.5 rounded-full shrink-0"></span>
                                <span className="text-slate-700 leading-relaxed"><strong>Metro Infrastructure:</strong> Less extensive public transit and international airport hubs.</span>
                            </li>
                            </ul>
                        </div>
                        </div>

                        <div className="bg-slate-900 rounded-3xl p-10 md:p-12 text-white relative overflow-hidden shadow-xl">
                        <div className="relative z-10">
                            <h3 className="text-center text-2xl font-bold mb-10 tracking-tight">The Common Ground</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                                <div className="text-4xl mb-3">🍂</div>
                                <p className="text-slate-100 font-semibold text-lg">Four Seasons</p>
                                <p className="text-slate-400 text-sm mt-1">Vibrant falls, distinct winters.</p>
                            </div>
                            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                                <div className="text-4xl mb-3">⛰️</div>
                                <p className="text-slate-100 font-semibold text-lg">Scenic Mountains</p>
                                <p className="text-slate-400 text-sm mt-1">Appalachian beauty in both.</p>
                            </div>
                            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                                <div className="text-4xl mb-3">🤝</div>
                                <p className="text-slate-100 font-semibold text-lg">Cultural Roots</p>
                                <p className="text-slate-400 text-sm mt-1">Shared Southern hospitality.</p>
                            </div>
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-green-500/10 rounded-full blur-3xl"></div>
                        </div>

                    </div>
                    </div>

                            {/* Moving Costs & Jobs */}
                            <div className="min-h-screen bg-neutral-950 p-8 font-sans text-slate-200 rounded">
                            <div className="mx-auto max-w-5xl">
                                <div className="mb-12 border-l-4 border-orange-500 pl-6">
                                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                                    Best Places in <span className="text-orange-500">Tennessee</span>
                                </h1>
                                <p className="mt-2 text-lg text-slate-400">
                                    Tailored recommendations for Virginia Transplants
                                </p>
                                </div>
                                <div className="grid gap-6 md:grid-cols-2">
                                <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:bg-white/10">
                                    <div className="flex items-center gap-3">
                                    <span className="text-2xl">🔥</span>
                                    <h2 className="text-2xl font-semibold text-white">Nashville</h2>
                                    </div>
                                    <ul className="mt-4 space-y-3 text-slate-400">
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                                        <span>
                                        Strong economy{" "}
                                        <span className="text-slate-200">
                                            (Similar to Northern VA job markets)
                                        </span>
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                                        <span>Higher cost but growing fast</span>
                                    </li>
                                    </ul>
                                </div>
                                <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:bg-white/10">
                                    <div className="flex items-center gap-3">
                                    <span className="text-2xl">🔥</span>
                                    <h2 className="text-2xl font-semibold text-white">Knoxville</h2>
                                    </div>
                                    <ul className="mt-4 space-y-3 text-slate-400">
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                                        <span>Affordable and fast-growing</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                                        <span>Close to Smoky Mountains</span>
                                    </li>
                                    </ul>
                                </div>
                                <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:bg-white/10">
                                    <div className="flex items-center gap-3">
                                    <span className="text-2xl">🔥</span>
                                    <h2 className="text-2xl font-semibold text-white">Chattanooga</h2>
                                    </div>
                                    <ul className="mt-4 space-y-3 text-slate-400">
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                                        <span>Outdoor lifestyle + tech growth</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                                        <span>One of the hottest relocation markets</span>
                                    </li>
                                    </ul>
                                </div>
                                <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:bg-white/10">
                                    <div className="flex items-center gap-3">
                                    <span className="text-2xl">🔥</span>
                                    <h2 className="text-2xl font-semibold text-white">Tri-Cities</h2>
                                    </div>
                                    <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-500">
                                    Johnson City / Kingsport / Bristol
                                    </p>
                                    <ul className="mt-4 space-y-3 text-slate-400">
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                                        <span>One of the most affordable areas in TN</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                                        <span>Strong for investors and flips</span>
                                    </li>
                                    <li className="flex items-start gap-2 border-t border-white/5 pt-2">
                                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                                        <span className="italic text-blue-400">
                                        Close to VA border (easy transition)
                                        </span>
                                    </li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            </div>


                            {/* Final Verdict & CTA */}
                            <div className="container mx-auto p-6 bg-gray-50 font-sans text-gray-900">
  <div className="mb-8 rounded-xl overflow-hidden shadow-lg border border-gray-200">
    <img
      src="https://rx2solutions.com/assets/images/EConOutlook.jpeg"
      alt="Virginia and Tennessee Landscape"
      className="w-full h-64 object-cover"
    />
  </div>
  <div className="text-center mb-10">
    <h1 className="text-3xl font-bold text-blue-900 mb-2">
      Job Market &amp; Moving Analysis
    </h1>
    <p className="text-gray-600 italic">
      Comparing Virginia and Tennessee opportunities
    </p>
  </div>
  <div className="grid md:grid-cols-2 gap-6 mb-12">
    <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100">
      <div className="flex items-center mb-4">
        <span className="text-2xl mr-2">🏛️</span>
        <h2 className="text-xl font-bold text-blue-800">Virginia Strengths</h2>
      </div>
      <ul className="space-y-3">
        <li className="flex items-start">
          <span className="text-blue-500 mr-2">•</span>
          <span>
            <strong>Government:</strong> Major hub (DC Metro area)
          </span>
        </li>
        <li className="flex items-start">
          <span className="text-blue-500 mr-2">•</span>
          <span>
            <strong>Tech &amp; Defense:</strong> High concentration of
            contractors
          </span>
        </li>
        <li className="flex items-start">
          <span className="text-blue-500 mr-2">•</span>
          <span>
            <strong>Finance:</strong> Growing corporate presence
          </span>
        </li>
      </ul>
    </div>
    <div className="bg-white p-6 rounded-xl shadow-sm border border-orange-100">
      <div className="flex items-center mb-4">
        <span className="text-2xl mr-2">🎸</span>
        <h2 className="text-xl font-bold text-orange-800">
          Tennessee Strengths
        </h2>
      </div>
      <ul className="space-y-3">
        <li className="flex items-start">
          <span className="text-orange-500 mr-2">•</span>
          <span>
            <strong>Healthcare:</strong> Nashville national hub
          </span>
        </li>
        <li className="flex items-start">
          <span className="text-orange-500 mr-2">•</span>
          <span>
            <strong>Manufacturing:</strong> Automotive and industrial growth
          </span>
        </li>
        <li className="flex items-start">
          <span className="text-orange-500 mr-2">•</span>
          <span>
            <strong>Logistics:</strong> Centralized shipping &amp; distribution
          </span>
        </li>
      </ul>
      <div className="mt-6 pt-4 border-t border-gray-100">
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
          High Growth Cities:
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-bold">
            Nashville
          </span>
          <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-bold">
            Knoxville
          </span>
          <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-bold">
            Chattanooga
          </span>
        </div>
      </div>
    </div>
  </div>
  <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
    <div className="bg-slate-800 p-4">
      <h2 className="text-white font-bold flex items-center">
        <span className="mr-2">🚚</span> Cost to Move: Virginia to Tennessee
      </h2>
    </div>
    <div className="p-6">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b-2 border-gray-100">
            <th className="py-3 px-4 text-gray-600 font-semibold uppercase text-sm">
              Move Type
            </th>
            <th className="py-3 px-4 text-gray-600 font-semibold uppercase text-sm text-right">
              Estimated Cost
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          <tr className="hover:bg-gray-50 transition-colors">
            <td className="py-4 px-4 font-medium">DIY Truck Rental</td>
            <td className="py-4 px-4 text-right text-green-600 font-bold">
              $800 – $2,500
            </td>
          </tr>
          <tr className="hover:bg-gray-50 transition-colors">
            <td className="py-4 px-4 font-medium">Standard Moving Company</td>
            <td className="py-4 px-4 text-right text-green-600 font-bold">
              $2,500 – $6,500
            </td>
          </tr>
          <tr className="hover:bg-gray-50 transition-colors">
            <td className="py-4 px-4 font-medium">
              Full-Service (Pack &amp; Move)
            </td>
            <td className="py-4 px-4 text-right text-green-600 font-bold">
              $4,000 – $9,000
            </td>
          </tr>
        </tbody>
      </table>
      <div className="mt-6 p-4 bg-blue-50 rounded-lg flex items-center">
        <span className="text-blue-600 mr-3">💡</span>
        <p className="text-sm text-blue-800">
          <strong>Pro-tip:</strong> This route is generally more affordable than
          long-distance cross-country moves due to regional proximity.
        </p>
      </div>
    </div>
  </div>
</div>


                </div>
                <div className="max-w-7xl mx-auto my-10 p-8 bg-white shadow-xl rounded border border-gray-100 font-sans text-gray-800">
  <header className="text-center mb-10">
    <h1 className="text-3xl md:text-4xl font-extrabold text-gray-700 mb-2">
      Moving from Virginia to Tennessee
    </h1>
    <p className="text-lg text-gray-600 italic">
      Is the grass really greener in the Volunteer State?
    </p>
  </header>
  <div className="grid md:grid-cols-2 gap-6 mb-10">
    <div className="bg-green-50 p-6 rounded-xl border border-green-100">
      <h2 className="flex items-center text-xl font-bold text-gray-700 mb-4">
        <span className="mr-2">✅</span> Pros
      </h2>
      <ul className="space-y-3">
        <li className="flex items-start">
          <span className="text-gray-500 mr-2">•</span>
          <span>
            <strong>No state income tax</strong> (Keep more of your paycheck)
          </span>
        </li>
        <li className="flex items-start">
          <span className="text-gray-500 mr-2">•</span>
          <span>Lower property taxes</span>
        </li>
        <li className="flex items-start">
          <span className="text-gray-500 mr-2">•</span>
          <span>Lower overall cost of living</span>
        </li>
        <li className="flex items-start">
          <span className="text-gray-500 mr-2">•</span>
          <span>Cheaper housing &amp; real estate investment potential</span>
        </li>
      </ul>
    </div>
    <div className="bg-red-50 p-6 rounded-xl border border-red-100">
      <h2 className="flex items-center text-xl font-bold text-gray-700 mb-4">
        <span className="mr-2">❌</span> Cons
      </h2>
      <ul className="space-y-3">
        <li className="flex items-start">
          <span className="text-gray-500 mr-2">•</span>
          <span>Smaller job markets (outside Nashville)</span>
        </li>
        <li className="flex items-start">
          <span className="text-gray-500 mr-2">•</span>
          <span>No proximity to the DC powerhouse economy</span>
        </li>
        <li className="flex items-start">
          <span className="text-gray-500 mr-2">•</span>
          <span>Fewer large-scale metro infrastructures</span>
        </li>
      </ul>
    </div>
  </div>
  <hr className="border-gray-200 mb-10" />
  <section className="mb-10">
    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
      <span className="mr-3">📊</span> Why the Migration?
    </h2>
    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <p className="font-semibold text-gray-600">Financial Drivers</p>
          <p className="text-sm text-gray-600">
            Lower taxes and better affordability across the board.
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <p className="font-semibold text-gray-600">Lifestyle Shift</p>
          <p className="text-sm text-gray-600">
            Significant reduction in traffic congestion vs. Northern VA.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section className="mb-10">
    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
      <span className="mr-3">🤔</span> Is it Worth It?
    </h2>
    <div className="space-y-4">
      <div className="flex items-center p-4 bg-gray-50 border-l-4 border-gray-500 rounded-r-lg">
        <p className="text-gray-700">
          <strong>Go to Tennessee if:</strong> You prioritize housing value and
          monthly savings.
        </p>
      </div>
      <div className="flex items-center p-4 bg-gray-50 border-l-4 border-gray-500 rounded-r-lg">
        <p className="text-gray-700">
          <strong>Stay in Virginia if:</strong> You rely on DC-based
          high-security or government jobs.
        </p>
      </div>
    </div>
  </section>
        <section className="bg-gradient-to-r from-gray-700 to-gray-700 text-white p-8 rounded-2xl mb-10 text-center">
    <h2 className="text-2xl font-bold mb-4 italic">🔥 Final Verdict</h2>
    <p className="text-lg opacity-90">
      A <strong>smart financial pivot</strong> for homebuyers, remote workers,
      and retirees. Expect to save thousands annually while getting more square
      footage for your dollar.
    </p>
  </section>
  <footer className="text-center">
            <div className="inline-block p-1 rounded-full bg-secondary!">
      <a
        href="https://WhyTennessee.com"
        className="block px-8 py-3 bg-white hover:bg-gray-50 text-gray-900 font-bold rounded-full transition-all duration-200"
      >
        Start Your Move at WhyTennessee.com
      </a>
    </div>
    <p className="mt-4 text-xs text-gray-400">
      Relocation Guides • Home Listings • Area Breakdowns
    </p>
  </footer>
</div>


                    </div>
        </FrontendLayout>
    );
}
