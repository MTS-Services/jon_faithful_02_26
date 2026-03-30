import FrontendLayout from '@/layouts/frontend-layout';
import { Hero } from '@/components/sections/frontend/hero';
import {
  AlertCircle,
  ArrowRight,
  BarChart3,
  Building2,
  Bus,
  CheckCircle2,
  CircleMinus,
  Flame,
  Home,
  Leaf,
  Map,
  MapPin,
  Minus,
  Mountain,
  Package,
  Plus,
  Scale,
  TrendingUp,
  Users,
  Wallet,
} from 'lucide-react';
import { Head, Link } from '@inertiajs/react';
import WhyMoveSection from '@/components/sections/frontend/cities/why-move';

const statRows = [
  { category: 'State Income Tax', northCarolina: '4.75% (flat)', tennessee: '0%' },
  { category: 'Avg Property Tax Rate', northCarolina: '~0.77%', tennessee: '0.49%' },
  { category: 'Avg Monthly Cost of Living', northCarolina: '~$5,000', tennessee: '~$4,800' },
  { category: 'Median Home Price', northCarolina: '~$375K', tennessee: '~$317K' },
  { category: 'Avg Rent (2-bed)', northCarolina: '~$1,600', tennessee: '~$1,400' },
  { category: 'Population Growth', northCarolina: 'High', tennessee: 'Very High' },
];

const bestPlaces = [
  {
    id: 'nashville',
    title: 'Nashville',
    href: route('frontend.livingInNashville'),
    IconBox: Building2,
    bullets: ['Big city feel (closest to Charlotte/Raleigh)', 'Strong job market', 'Higher cost'],
  },
  {
    id: 'knoxville',
    title: 'Knoxville',
    href: route('frontend.livingInKnoxville'),
    IconBox: Mountain,
    bullets: ['Affordable and fast-growing', 'Close to Smoky Mountains'],
  },
  {
    id: 'chattanooga',
    title: 'Chattanooga',
    href: route('frontend.livingInChattanooga'),
    IconBox: Leaf,
    bullets: ['Outdoor lifestyle + tech growth', 'Popular with remote workers'],
  },
  {
    id: 'tri-cities',
    title: 'Tri-Cities (Johnson City / Kingsport / Bristol)',
    subtitle: '(Johnson City / Kingsport / Bristol)',
    href: route('frontend.livingInJohnsonCity'),
    IconBox: Home,
    bullets: [
      'One of the most affordable regions in TN',
      'Strong for investors',
      'Growing relocation demand',
    ],
  },
];

const movingCostRows = [
  { type: 'DIY Truck', cost: '$800 – $2,500', alt: false },
  { type: 'Moving Company', cost: '$2,500 – $6,500', alt: true },
  { type: 'Full-Service', cost: '$4,000 – $9,000', alt: false },
];

const whyLeavingData = {
  title: 'Why People Are Moving from North Carolina to Tennessee',
  description: 'Top reasons:',
  points: [
    'Lower taxes (biggest factor)',
    'Cheaper housing',
    'Less competition in real estate',
    'Better value for land and property',
    'Growing Tennessee economy',
  ],
  conclusion: 'Tennessee consistently attracts NC residents seeking stronger long-term value.',
  imageUrl: '/assets/images/north-carolina-tennessee/Point-Park-Chattanooga-view-horseshoe-bend.jpg',
  imageUrl2: '/assets/images/north-carolina-tennessee/16-North-Carolina.jpg',
};

export default function MovingFromNorthCarolina() {
  return (
    <FrontendLayout activePage="moving-to-tennessee" subPage="Moving from North Carolina to Tennessee">
      <Head title="Moving From North Carolina to Tennessee (2026 Guide): Cost, Taxes, Housing & Lifestyle" />
      <Hero
        slides={['/assets/images/north-carolina-tennessee/lin-cove-viaduct-blue-ridge-parkway.jpg']}
        title={
          <>
            Cost, Taxes, Housing &amp; Lifestyle
          </>
        }
        description={
          <>
            <p className="mb-2">Thinking about moving from North Carolina to Tennessee? You’re not alone.</p>
            <p className="mb-2">
              With rising home prices in cities like Charlotte, Raleigh, and Asheville, more people are relocating to
              Tennessee for lower taxes, more affordable housing, and better overall value.
            </p>
            <p>
              This guide covers real stats, cost comparisons, housing trends, and lifestyle differences so you can decide
              if Tennessee is the right move.
            </p>
          </>
        }
        width="max-w-3xl"
        height="h-[calc(100vh-80px)] md:h-[550px]"
      />

      <section className="border-t border-slate-800 bg-primary py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-16 text-center">
            <h2 className="inline-flex items-center gap-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              <BarChart3 className="h-10 w-10 shrink-0 text-indigo-400 md:h-11 md:w-11" aria-hidden />
              North Carolina vs Tennessee: Key Stats Comparison
            </h2>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-800/40 backdrop-blur-sm">
            <div className="grid grid-cols-3 border-b border-slate-700/50 bg-slate-800/80 p-5">
              <div className="text-sm font-medium uppercase tracking-wide text-slate-400">Category</div>
              <div className="text-sm font-medium uppercase tracking-wide text-slate-400">North Carolina</div>
              <div className="text-sm font-medium uppercase tracking-wide text-indigo-400">Tennessee</div>
            </div>
            <div className="divide-y divide-slate-700/50">
              {statRows.map((row) => (
                <div
                  key={row.category}
                  className="grid grid-cols-3 items-center p-5 transition-colors hover:bg-slate-800/60"
                >
                  <div className="text-base font-medium tracking-tight text-slate-200">{row.category}</div>
                  <div className="text-base text-slate-300">{row.northCarolina}</div>
                  <div className="text-base font-medium text-white">{row.tennessee}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-3xl rounded-xl border border-indigo-500/20 bg-indigo-500/10 p-6 text-center">
            <span className="mb-3 block text-sm font-medium uppercase tracking-wide text-indigo-400">Big Takeaway</span>
            <p className="text-lg leading-relaxed tracking-tight text-slate-200">
              Tennessee = no state income tax + lower housing costs
            </p>
            <p className="text-lg leading-relaxed tracking-tight text-slate-200">
              North Carolina = rising home prices in major metros
            </p>
            <p className="text-lg leading-relaxed tracking-tight text-slate-200">
              Overall = Tennessee is more affordable long-term
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-100 bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="relative">
              <div className="absolute inset-0 -z-10 translate-x-2 translate-y-2 rotate-2 rounded-2xl bg-slate-100" />
              <img
                src="/assets/images/north-carolina-tennessee/Cades-Cove-Tennessee-bike-ride.jpg"
                alt="Tennessee skyline and Capitol area"
                className="aspect-[4/3] h-auto w-full rounded-2xl object-cover shadow-lg"
                loading="lazy"
              />
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-8 shadow-sm lg:p-10">
              <h3 className="mb-6 flex items-start gap-3 text-2xl font-semibold tracking-tight text-primary lg:text-3xl">
                <Wallet className="h-10 w-10 shrink-0 text-secondary stroke-[1.5]" aria-hidden />
                Cost of Living: North Carolina vs Tennessee
              </h3>
              <p className="mb-8 text-base tracking-tight text-slate-600">
                One of the biggest reasons people are moving to Tennessee from North Carolina is affordability.
              </p>
              <div className="space-y-4">
                <div className="mb-2 text-sm font-medium uppercase tracking-wide text-slate-500">Real Cost Differences:</div>
                <ul className="space-y-3">
                  {[
                    <>Tennessee is about <strong>4–8% cheaper</strong> overall</>,
                    <>Housing is often <strong>10–25% cheaper</strong></>,
                    'Utilities are similar',
                    'Groceries are similar',
                  ].map((line, i) => (
                    <li key={i} className="flex items-start gap-3 text-base tracking-tight">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" aria-hidden />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 rounded-xl border border-amber-100 bg-amber-50 p-5">
                <h4 className="mb-3 text-sm font-semibold tracking-tight text-amber-900">Monthly Cost Comparison:</h4>
                <ul className="mb-4 space-y-2 text-sm tracking-tight text-amber-800">
                  <li className="flex items-center justify-between border-b border-amber-200/60 pb-2">
                    <span>North Carolina:</span> <span className="font-medium">~$5,000</span>
                  </li>
                  <li className="flex items-center justify-between border-b border-amber-200/60 pb-2">
                    <span>Tennessee:</span> <span className="font-medium">~$4,800</span>
                  </li>
                </ul>
                <p className="flex items-center gap-2 text-base font-medium tracking-tight text-amber-900">
                  <ArrowRight className="h-5 w-5 shrink-0" aria-hidden />
                  That’s $2,000–$4,000/year savings
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-100 bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <h2 className="mb-6 text-3xl font-semibold tracking-tight text-primary md:text-4xl">
                Housing Market: Where You Save
              </h2>
              <p className="mb-8 text-lg tracking-tight text-slate-600">
                Housing is where Tennessee often wins — especially outside Nashville.
              </p>
              <div className="mb-8 grid gap-6 sm:grid-cols-2">
                <div className="rounded-xl border border-indigo-100 bg-indigo-50 p-5">
                  <h4 className="mb-3 text-base font-semibold tracking-tight text-indigo-900">Tennessee Advantages</h4>
                  <ul className="space-y-2">
                    {[
                      'Lower median home price (~$317K)',
                      'More rural and land opportunities',
                      'Lower property taxes',
                      'Strong appreciation potential',
                    ].map((txt) => (
                      <li key={txt} className="flex items-start gap-2 text-sm tracking-tight text-indigo-800">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo-500" />
                        {txt}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <h4 className="mb-3 text-base font-semibold tracking-tight text-primary">North Carolina Challenges</h4>
                  <ul className="space-y-2">
                    {[
                      'Charlotte and Raleigh prices rising fast',
                      'Asheville becoming expensive due to demand',
                      'Competitive housing market',
                    ].map((txt) => (
                      <li key={txt} className="flex items-start gap-2 text-sm tracking-tight text-slate-600">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-400" />
                        {txt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mb-8 rounded-xl bg-primary p-6 shadow-md">
                <h4 className="mb-4 flex items-center gap-2 text-lg font-medium tracking-tight text-white">
                  <Wallet className="h-6 w-6 shrink-0 text-amber-400 stroke-[1.5]" aria-hidden />
                  Taxes: Why Tennessee Has the Edge
                </h4>
                <div className="space-y-6">
                  <div>
                    <h5 className="mb-2 text-sm font-semibold tracking-tight text-slate-300">No State Income Tax</h5>
                    <ul className="mb-2 space-y-1 text-sm tracking-tight text-slate-400">
                      <li className="flex justify-between">
                        <span>North Carolina:</span> <span>4.75%</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Tennessee:</span> <span>0%</span>
                      </li>
                    </ul>
                    <p className="rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium tracking-tight text-emerald-400">
                      On $100,000 income: NC tax ≈ $4,750 | Tennessee tax = $0
                    </p>
                  </div>
                  <div>
                    <h5 className="mb-2 text-sm font-semibold tracking-tight text-slate-300">Lower Property Taxes</h5>
                    <ul className="mb-2 space-y-1 text-sm tracking-tight text-slate-400">
                      <li className="flex justify-between">
                        <span>North Carolina:</span> <span>~0.77%</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Tennessee:</span> <span>~0.49%</span>
                      </li>
                    </ul>
                    <p className="rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium tracking-tight text-emerald-400">
                      On a $400,000 home: NC ≈ $3,080/year | Tennessee ≈ $2,000/year
                    </p>
                  </div>
                  <p className="text-sm tracking-tight text-slate-300">
                    Tennessee consistently ranks among the lowest-tax states in the U.S. — lower overall tax burden for
                    many households.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-amber-100 bg-amber-50 p-5">
                <Building2 className="h-6 w-6 shrink-0 text-secondary stroke-[1.5]" aria-hidden />
                <div className="tracking-tight">
                  <p className="mb-1 text-sm font-semibold text-amber-900">Real Example &amp; Investor Insight</p>
                  <p className="text-sm text-amber-800">
                    Charlotte median home: ~$400K. Raleigh median home: ~$415K. Nashville median home: ~$430K. East
                    Tennessee: $250K–$350K. Tennessee offers better entry price, lower holding costs, and strong flip
                    potential.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative order-1 hidden h-[600px] lg:order-2 lg:block">
              <img
                src="/assets/images/north-carolina-tennessee/original.jpg"
                alt="City night"
                className="absolute top-0 right-0 z-10 h-2/3 w-2/3 rounded-2xl object-cover shadow-xl"
                loading="lazy"
              />
              <img
                src="/assets/images/north-carolina-tennessee/stock_blue_ridge_parkway.jpg"
                alt="Suburbs and landscape"
                className="absolute bottom-0 left-0 z-20 h-2/3 w-2/3 rounded-2xl border-4 border-white object-cover shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <h2 className="inline-flex flex-wrap items-center justify-center gap-3 text-3xl font-semibold tracking-tight text-primary md:text-4xl">
              <MapPin className="h-10 w-10 shrink-0 text-secondary" aria-hidden />
              Lifestyle: North Carolina vs Tennessee
            </h2>
          </div>
          <div className="mb-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="mb-6 flex items-center gap-3 text-xl font-semibold tracking-tight text-primary">
                <span className="rounded-lg bg-emerald-50 p-2 text-emerald-600">
                  <Leaf className="h-6 w-6" aria-hidden />
                </span>
                What You Gain Moving to Tennessee
              </h3>
              <ul className="space-y-4">
                {[
                  'Lower cost of living',
                  'Less crowded in many areas',
                  'Mountains, lakes, and outdoor lifestyle',
                  'Strong community feel',
                ].map((txt) => (
                  <li key={txt} className="flex items-start gap-3 text-base tracking-tight text-slate-600">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" aria-hidden />
                    <span>{txt}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="mb-6 flex items-center gap-3 text-xl font-semibold tracking-tight text-primary">
                <span className="rounded-lg bg-amber-50 p-2 text-secondary">
                  <AlertCircle className="h-6 w-6" aria-hidden />
                </span>
                What You Lose
              </h3>
              <ul className="space-y-4">
                {[
                  'Coastal access (NC beaches)',
                  'Some larger metro job hubs',
                  'Slightly milder climate in coastal NC',
                ].map((txt) => (
                  <li key={txt} className="flex items-start gap-3 text-base tracking-tight text-slate-600">
                    <CircleMinus className="mt-0.5 h-5 w-5 shrink-0 text-secondary" aria-hidden />
                    <span>{txt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mx-auto max-w-2xl rounded-xl bg-primary p-6 text-center shadow-md">
            <span className="mb-3 block text-sm font-medium uppercase tracking-wide text-slate-400">
              Both states are similar in
            </span>
            <p className="mb-2 text-base tracking-tight text-slate-200">Climate (4 seasons)</p>
            <p className="mb-2 text-base tracking-tight text-slate-200">Outdoor activities</p>
            <p className="text-base tracking-tight text-slate-200">Culture and pace of life</p>
          </div>
        </div>
      </section>

      <section
        className="relative py-24 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/north-carolina-tennessee/chimney-rock-north-carolina-2.jpg')" }}
      >
        <div className="absolute inset-0 bg-slate-900/85"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl font-bold text-white mb-2">Best Places in Tennessee for NC Transplants</h2>
          <p className="text-slate-300 text-sm md:text-base mb-10 max-w-2xl mx-auto">
            If you&apos;re relocating, these are top areas:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestPlaces.map((place) => {
              const Icon = place.IconBox;
              return (
                <Link
                  key={place.id}
                  href={place.href}
                  className="group block bg-white/95 backdrop-blur-sm rounded-3xl p-8 text-left border border-white transition-all hover:shadow-2xl hover:-translate-y-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center mb-6 group-hover:bg-primary-100 transition-colors">
                    <Icon className="w-7 h-7 text-primary-600" aria-hidden />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-4 group-hover:text-primary-700 transition-colors">
                    {place.title}
                  </h3>
                  <ul className="space-y-3">
                    {place.bullets.map((point) => (
                      <li key={point} className="text-sm text-slate-600 flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" aria-hidden /> {point}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary-600 group-hover:gap-2 transition-all">
                    Explore
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-100 bg-white py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-16 text-center">
            <h2 className="inline-flex items-center gap-3 text-3xl font-semibold tracking-tight text-primary md:text-4xl">
              <Users className="h-10 w-10 shrink-0 text-secondary md:h-11 md:w-11" aria-hidden />
              Job Market Comparison
            </h2>
          </div>
          <div className="mb-10 grid gap-8 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
              <h4 className="mb-4 text-lg font-semibold tracking-tight text-primary">North Carolina Strengths:</h4>
              <ul className="space-y-3">
                {['Banking (Charlotte)', 'Tech (Raleigh)', 'Research Triangle'].map((txt) => (
                  <li key={txt} className="flex items-center gap-3 text-base tracking-tight text-slate-600">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                    {txt}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-indigo-100 bg-indigo-50 p-8">
              <h4 className="mb-4 text-lg font-semibold tracking-tight text-indigo-900">Tennessee Strengths:</h4>
              <ul className="space-y-3">
                {['Healthcare (Nashville hub)', 'Manufacturing', 'Logistics'].map((txt) => (
                  <li key={txt} className="flex items-center gap-3 text-base tracking-tight text-indigo-800">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                    {txt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="text-center">
            <p className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-5 py-2.5 text-base font-medium tracking-tight text-primary">
              <TrendingUp className="h-5 w-5 shrink-0 text-secondary" aria-hidden />
              Tennessee is growing rapidly in: Nashville, Knoxville, and Chattanooga.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-2 inline-flex items-center gap-3 text-3xl font-semibold tracking-tight text-primary">
            <Bus className="h-10 w-10 shrink-0 text-secondary" aria-hidden />
            Cost to Move from North Carolina to Tennessee
          </h2>
          <p className="mb-12 text-base tracking-tight text-slate-500">Typical moving costs:</p>
          <div className="mx-auto mb-8 max-w-2xl overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-sm">
            <div className="grid grid-cols-2 border-b border-slate-200 bg-slate-50 p-4">
              <div className="text-sm font-medium tracking-tight text-slate-600">Move Type</div>
              <div className="text-sm font-medium tracking-tight text-slate-600">Cost</div>
            </div>
            {movingCostRows.map((row) => (
              <div
                key={row.type}
                className={`grid grid-cols-2 items-center p-4 ${row.alt ? 'bg-slate-50/50' : ''}`}
              >
                <div className="text-sm font-medium tracking-tight text-primary">{row.type}</div>
                <div className="text-sm tracking-tight text-slate-600">{row.cost}</div>
              </div>
            ))}
          </div>
          <p className="text-sm font-medium tracking-tight text-slate-700">
            Cheaper than cross-country moves due to closer distance
          </p>
        </div>
      </section>

      <section className="border-t border-slate-800 bg-primary py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <h2 className="inline-flex items-center gap-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              <Scale className="h-10 w-10 shrink-0 text-secondary" aria-hidden />
              Pros &amp; Cons of Moving from North Carolina to Tennessee
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-700/50 bg-slate-800/40 p-8 lg:p-10">
              <h3 className="mb-8 flex items-center gap-3 text-2xl font-semibold tracking-tight text-white">
                <span className="rounded-lg bg-emerald-500/20 p-2 text-emerald-400">
                  <Plus className="h-6 w-6" aria-hidden />
                </span>
                Pros
              </h3>
              <ul className="space-y-5">
                {[
                  'No state income tax',
                  'Lower property taxes',
                  'Lower home prices (in many areas)',
                  'Strong real estate investment opportunities',
                ].map((txt) => (
                  <li key={txt} className="flex items-start gap-4 text-base tracking-tight text-slate-300">
                    <Plus className="h-6 w-6 shrink-0 text-emerald-400" aria-hidden />
                    <span>{txt}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-700/50 bg-slate-800/40 p-8 lg:p-10">
              <h3 className="mb-8 flex items-center gap-3 text-2xl font-semibold tracking-tight text-white">
                <span className="rounded-lg bg-rose-500/20 p-2 text-rose-400">
                  <Minus className="h-6 w-6" aria-hidden />
                </span>
                Cons
              </h3>
              <ul className="space-y-5">
                {['No beach access', 'Some smaller job markets', 'Fewer large metro areas'].map((txt) => (
                  <li key={txt} className="flex items-start gap-4 text-base tracking-tight text-slate-300">
                    <Minus className="h-6 w-6 shrink-0 text-rose-400" aria-hidden />
                    <span>{txt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <WhyMoveSection whyMove={whyLeavingData} />

      <section className="border-b border-slate-200 bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
            <div>
              <h2 className="mb-6 text-3xl font-semibold tracking-tight text-primary md:text-4xl">
                Is Moving from North Carolina to Tennessee Worth It?
              </h2>
              <p className="mb-6 text-lg font-medium tracking-tight text-primary">
                For most people — yes, especially financially.
              </p>
              <div className="mb-8">
                <h4 className="mb-4 flex items-center gap-2 text-base font-semibold tracking-tight text-primary">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500" aria-hidden />
                  Tennessee is ideal if you want:
                </h4>
                <ul className="ml-1 space-y-3 border-l-2 border-slate-200 pl-4 text-sm tracking-tight text-slate-600">
                  <li>Lower taxes</li>
                  <li>Better housing value</li>
                  <li>Investment opportunities</li>
                </ul>
              </div>
              <div className="mb-8">
                <h4 className="mb-4 flex items-center gap-2 text-base font-semibold tracking-tight text-primary">
                  <AlertCircle className="h-5 w-5 shrink-0 text-secondary" aria-hidden />
                  North Carolina may still be better if:
                </h4>
                <ul className="ml-1 space-y-3 border-l-2 border-slate-200 pl-4 text-sm tracking-tight text-slate-600">
                  <li>You want coastal living</li>
                  <li>You rely on major metro job hubs</li>
                </ul>
              </div>
              <p className="text-sm leading-relaxed tracking-tight text-slate-600">
                Looking for homes, relocation help, or the best areas? Visit{' '}
                <span className="font-semibold text-primary">WhyTennessee.com</span> for: Homes for sale, Relocation
                guides, Area breakdowns across Tennessee.
              </p>
            </div>
            <div className="h-fit rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <h3 className="mb-8 flex items-center gap-3 text-2xl font-semibold tracking-tight text-primary">
                <Package className="h-9 w-9 shrink-0 text-secondary" aria-hidden />
                Start Your Move to Tennessee
              </h3>
              <div className="mb-10 grid grid-cols-2 gap-4">
                <Link
                  href={route('frontend.why-tennessee')}
                  className="group flex items-center gap-3 rounded-xl border border-slate-100 bg-white p-4 shadow-sm transition-colors hover:bg-slate-100"
                >
                  <MapPin className="h-5 w-5 shrink-0 text-indigo-500 transition-transform group-hover:scale-110" />
                  <span className="text-sm font-medium tracking-tight text-slate-700">Why Tennessee</span>
                </Link>
                <Link
                  href={route('frontend.home-for-sale')}
                  className="group flex items-center gap-3 rounded-xl border border-slate-100 bg-white p-4 shadow-sm transition-colors hover:bg-slate-100"
                >
                  <Home className="h-5 w-5 shrink-0 text-indigo-500 transition-transform group-hover:scale-110" />
                  <span className="text-sm font-medium tracking-tight text-slate-700">Homes for Sale</span>
                </Link>
                <Link
                  href={route('frontend.tennessee-relocation')}
                  className="group flex items-center gap-3 rounded-xl border border-slate-100 bg-white p-4 shadow-sm transition-colors hover:bg-slate-100"
                >
                  <Map className="h-5 w-5 shrink-0 text-indigo-500 transition-transform group-hover:scale-110" />
                  <span className="text-sm font-medium tracking-tight text-slate-700">Relocation Guides</span>
                </Link>
                <Link
                  href={route('frontend.city-comparison')}
                  className="group flex items-center gap-3 rounded-xl border border-slate-100 bg-white p-4 shadow-sm transition-colors hover:bg-slate-100"
                >
                  <Building2 className="h-5 w-5 shrink-0 text-indigo-500 transition-transform group-hover:scale-110" />
                  <span className="text-sm font-medium tracking-tight text-slate-700">Area Breakdowns</span>
                </Link>
              </div>
              <Link
                href={route('frontend.livetennessee')}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-4 text-sm font-medium tracking-tight text-white transition-colors hover:bg-slate-800"
              >
                See Best Places to Live in Tennessee
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50 py-24 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-6 flex items-center justify-center gap-3 text-3xl font-semibold tracking-tight text-primary">
            <Flame className="h-10 w-10 shrink-0 text-secondary" aria-hidden />
            Final Verdict
          </h2>
          <p className="mb-4 text-lg tracking-tight text-slate-600">
            Moving from North Carolina to Tennessee is a smart financial move for:
          </p>
          <ul className="mb-8 mx-auto inline-block text-left text-base tracking-tight text-slate-600 space-y-2">
            {['Homebuyers', 'Investors', 'Remote workers'].map((line) => (
              <li key={line} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" aria-hidden />
                {line}
              </li>
            ))}
          </ul>
          <p className="mb-4 text-base font-medium tracking-tight text-primary">You&apos;ll typically:</p>
          <div className="mb-10 inline-block rounded-r-xl border border-l-0 border-slate-100 border-t border-r border-b bg-white py-4 pl-4 pr-8 text-left text-sm tracking-tight text-slate-600 shadow-sm">
            <div className="space-y-3 border-l-2 border-indigo-500 pl-4">
              {['Save thousands per year', 'Pay less in taxes', 'Get more house for your money'].map((line) => (
                <p key={line} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" aria-hidden />
                  {line}
                </p>
              ))}
            </div>
          </div>
          <div>
            <a
              href="https://WhyTennessee.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm font-medium tracking-tight text-secondary transition-colors hover:text-indigo-700"
            >
              Visit WhyTennessee.com
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </a>
          </div>
        </div>
      </section>
    </FrontendLayout>
  );
}
