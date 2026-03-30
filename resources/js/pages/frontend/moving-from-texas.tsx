import FrontendLayout from '@/layouts/frontend-layout';
import {
  AlertCircle,
  ArrowRight,
  Briefcase,
  Building2,
  CheckCircle2,
  Landmark,
  MapPinIcon,
  Minus,
  Mountain,
  Plus,
  ThumbsDown,
  ThumbsUp,
  Tractor,
  Wallet,
} from 'lucide-react';
import { Hero } from '@/components/sections/frontend/hero';
import InfoTabsSection from '@/components/sections/frontend/cities/info-tabs-section';
import FinalInfoSection from '@/components/sections/frontend/cities/final-info-section';
import { Head, Link } from '@inertiajs/react';
import { FaArrowCircleRight, FaEnvelope, FaExternalLinkAlt, FaFireAlt, FaHome, FaMapMarkerAlt } from 'react-icons/fa';
import { HiExternalLink } from 'react-icons/hi';

const statRows = [
  { category: 'State Income Tax', texas: '0%', tennessee: '0%' },
  { category: 'Avg Property Tax Rate', texas: '1.36%', tennessee: '0.49%' },
  { category: 'Avg Monthly Cost of Living', texas: '$5,305', tennessee: '$4,891' },
  { category: 'Sales Tax (avg combined)', texas: '~8.2%', tennessee: '~9.6%' },
  { category: 'Median Home Price', texas: '~$304K', tennessee: '~$317K' },
];

const tabs = [
  {
    id: 'tab-cost',
    label: 'Cost of Living',
    title: '💰 Cost of Living: Texas vs Tennessee',
    intro: 'One of the biggest reasons people are moving to Tennessee from Texas is affordability.',
    intro2: null,
    intro3: null,
    items: [
      'Tennessee’s average monthly cost is about $400 cheaper than Texas',
      'Cities like Knoxville, Chattanooga, and Johnson City are significantly cheaper than major Texas metros',
      'Dallas is about 3.7% more expensive than Nashville on average',
    ],
    items2: [
      'Real Cost Differences:',
      'Transportation: cheaper in Tennessee',
      'Insurance: typically lower',
      'Utilities: similar',
      'Groceries: slightly higher in TN in some areas',
    ],
    footer: '👉 Bottom line: Your money generally stretches further in Tennessee — especially outside Nashville.',
    imageUrl: '/assets/images/texas-to-tennessee/PLACES_Cities.jpg',
  },
  {
    id: 'tab-housing',
    label: 'Housing',
    title: '🏡 Housing Market: Where You Win (or Lose)',
    intro: 'Housing is where things get interesting.',
    intro2: 'Tennessee Pros:',
    intro3: null,
    items: [
      'Lower property taxes (huge savings long-term)',
      'More land and rural options',
      'Strong appreciation (up ~63% in recent years)',
    ],
    items2: [
      'Texas Pros:',
      'Slightly lower entry home prices in some markets',
      'Larger metro inventory',
    ],
    footer:
      'Real Example: Houston homes average ~$421K vs Nashville ~$534K. But Tennessee property taxes are ~60–70% lower. 👉 Investor insight (important for you): Tennessee is often better for long-term cash flow and equity, while Texas can be more competitive upfront.',
    imageUrl: '/assets/images/texas-to-tennessee/House.jpg',
  },
  {
    id: 'tab-taxes',
    label: 'Taxes',
    title: '🧾 Taxes: The Biggest Advantage of Moving to Tennessee',
    intro: 'This is where Tennessee dominates.',
    intro2: '✔ No State Income Tax (same as Texas)',
    intro3: null,
    items: ['Both states let you keep your paycheck.'],
    items2: [
      '✔ MASSIVE Property Tax Savings',
      'Texas: ~1.36%',
      'Tennessee: ~0.49%',
      '👉 On a $400,000 house:',
      'Texas ≈ $5,400/year',
      'Tennessee ≈ $2,000/year',
      'That’s $3,000+ savings every year',
      '✔ Lower Overall Tax Burden',
      'Tennessee total tax burden ≈ 5.75%',
      'Texas ≈ 8.22%',
    ],
    imageUrl: '/assets/images/texas-to-tennessee/pigeon-forge-tennessee-Kevin-Ruck.jpg',
  },
  {
    id: 'tab-lifestyle',
    label: 'Lifestyle',
    title: '🌎 Lifestyle Differences',
    intro: 'What You Gain Moving to Tennessee',
    intro2: null,
    intro3: null,
    items: [
      'Mountains, lakes, rivers (huge outdoor appeal)',
      'Less traffic than major Texas metros',
      'Strong community feel',
      'Four seasons (mild winters, colorful fall)',
    ],
    items2: ['What You Lose', 'Fewer large metro job hubs than Texas', 'Smaller cities (outside Nashville)', 'Less big-city infrastructure'],
    footer: '👉 Tennessee feels more: Slower paced, Scenic, Community-driven',
    imageUrl: '/assets/images/live-in-tennessee/tennessee-state-capitol-building-nashville-aerial.jpeg',
  },
  {
    id: 'tab-jobs',
    label: 'Jobs & Economy',
    title: '📈 Job Market & Economy',
    intro: 'Tennessee has strong growth in:',
    intro2: null,
    intro3: null,
    items: ['Healthcare', 'Manufacturing', 'Logistics'],
    items2: [],
    footer:
      'Nashville has a lower unemployment rate than many Texas metros. 👉 Texas still wins for: Tech hubs (Austin), Energy jobs, Large corporate HQs.',
    imageUrl: '/assets/images/live-in-tennessee/tennessee-state-capitol-building-nashville-aerial.jpeg',
  },
];

const bestPlaces = [
  {
    id: 'nashville',
    name: '🔥 Nashville',
    icon: Building2,
    bulletPoints: ['Fast-growing, strong economy', 'Higher cost (most expensive in TN)'],
  },
  {
    id: 'knoxville',
    name: '🔥 Knoxville',
    icon: Mountain,
    bulletPoints: ['Great balance of price + lifestyle', 'Near mountains (huge draw)'],
  },
  {
    id: 'chattanooga',
    name: '🔥 Chattanooga',
    icon: Landmark,
    bulletPoints: ['One of the fastest-growing small cities', 'Outdoor + tech growth'],
  },
  {
    id: 'tri-cities',
    name: '🔥 Tri-Cities (Johnson City / Kingsport / Bristol)',
    icon: Tractor,
    bulletPoints: ['Cheapest housing', 'Strong for investors and flips', 'Growing relocation demand'],
  },
];

const movingCostRows = [
  { type: 'DIY Truck', cost: '$1,000 – $3,000' },
  { type: 'Moving Company', cost: '$3,000 – $8,000' },
  { type: 'Full-Service Long Distance', cost: '$6,000 – $12,000' },
];

export default function MovingFromTexas() {
  return (
    <FrontendLayout activePage="moving-to-tennessee" subPage="Moving from Texas to Tennessee">
      <Head title="Moving From Texas to Tennessee (2026 Guide): Cost, Taxes, Housing & What to Expect" />
      <Hero
        slides={['/assets/images/texas-to-tennessee/TXHeader2.jpg']}
        title={
          <>
            {/* Moving From Texas to Tennessee (2026 Guide):
            <br /> */}
            Cost, Taxes, Housing &amp; What to Expect
          </>
        }
        description={
          <>
            <p className="mb-2">Thinking about moving from Texas to Tennessee? You’re not alone.</p>
            <p className="mb-2">
              Thousands of people relocate to Tennessee every year for lower property taxes, strong job growth, and a
              better overall cost of living. Whether you&apos;re leaving Dallas, Houston, Austin, or San Antonio,
              Tennessee offers a different lifestyle — and in many cases, more value for your money.
            </p>
            <p>
              This complete guide breaks down real data, costs, taxes, housing, and lifestyle differences so you can
              decide if Tennessee is the right move.
            </p>
          </>
        }
        width="max-w-3xl"
        height="h-[calc(100vh-80px)] md:h-[550px]"
      />

      <section className="bg-slate-900 py-16 text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            📊 Texas vs Tennessee: Key Stats Comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5">
            <table className="w-full text-sm text-left min-w-[520px]">
              <thead>
                <tr className="border-b border-white/15">
                  <th className="p-4 font-semibold text-slate-200">Category</th>
                  <th className="p-4 font-semibold text-slate-200">Texas</th>
                  <th className="p-4 font-semibold text-emerald-300">Tennessee</th>
                </tr>
              </thead>
              <tbody>
                {statRows.map((row) => (
                  <tr key={row.category} className="border-b border-white/10 last:border-0">
                    <td className="p-4 text-slate-100 font-medium">{row.category}</td>
                    <td className="p-4 text-slate-300">{row.texas}</td>
                    <td className="p-4 text-slate-100">{row.tennessee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-12 text-center bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-6 max-w-2xl mx-auto">
                <span className="text-sm font-medium text-secondary uppercase tracking-wide block mb-3">Big Takeaway</span>
                <p className="text-lg text-slate-200 leading-relaxed tracking-tight">Tennessee = lower taxes overall</p>
                <p className="text-lg text-slate-200 leading-relaxed tracking-tight">Texas = slightly cheaper housing in some areas</p>
                <p className="text-lg text-slate-200 leading-relaxed tracking-tight">Overall cost = very similar (but Tennessee often wins long-term)</p>
            </div>
        </div>
      </section>

      <InfoTabsSection tabs={tabs} />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">
                Housing Market & Taxes: Where You Win
              </h2>
              <p className="text-lg text-slate-600 mb-8 tracking-tight">Housing is where things get interesting between the two states.</p>

              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-indigo-50 rounded-xl p-5 border border-indigo-100">
                  <h4 className="text-base font-semibold text-indigo-900 mb-3 tracking-tight">Tennessee Pros</h4>
                  <ul className="space-y-2">
                    <li className="text-sm text-indigo-800 flex items-start gap-2 tracking-tight"><div className="w-1 h-1 rounded-full bg-indigo-500 mt-2 shrink-0"></div> Lower property taxes</li>
                    <li className="text-sm text-indigo-800 flex items-start gap-2 tracking-tight"><div className="w-1 h-1 rounded-full bg-indigo-500 mt-2 shrink-0"></div> More land and rural options</li>
                    <li className="text-sm text-indigo-800 flex items-start gap-2 tracking-tight"><div className="w-1 h-1 rounded-full bg-indigo-500 mt-2 shrink-0"></div> Strong appreciation (up ~63%)</li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <h4 className="text-base font-semibold text-slate-900 mb-3 tracking-tight">Texas Pros</h4>
                  <ul className="space-y-2">
                    <li className="text-sm text-slate-600 flex items-start gap-2 tracking-tight"><div className="w-1 h-1 rounded-full bg-slate-400 mt-2 shrink-0"></div> Slightly lower entry prices</li>
                    <li className="text-sm text-slate-600 flex items-start gap-2 tracking-tight"><div className="w-1 h-1 rounded-full bg-slate-400 mt-2 shrink-0"></div> Larger metro inventory</li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-900 rounded-xl p-6 mb-8 shadow-md">
                <h4 className="text-lg font-medium text-white mb-4 flex items-center gap-2 tracking-tight">
                  <Wallet className="h-6 w-6 shrink-0 text-amber-400 stroke-[1.5]" aria-hidden />
                  Taxes: The Biggest Advantage
                </h4>
                <p className="text-sm text-slate-300 mb-3 tracking-tight">Both states have <strong>0% State Income Tax</strong>, but property taxes are massively different:</p>
                <ul className="space-y-2 text-sm text-slate-300 tracking-tight mb-4">
                  <li className="flex items-center justify-between border-b border-slate-700/50 pb-2"><span>Texas Avg Property Tax:</span> <span className="font-medium text-white">~1.36%</span></li>
                  <li className="flex items-center justify-between border-b border-slate-700/50 pb-2"><span>Tennessee Avg Property Tax:</span> <span className="font-medium text-white">~0.49%</span></li>
                </ul>
                <p className="text-sm text-emerald-400 font-medium tracking-tight">On a $400,000 house, that's $3,000+ savings every year in TN.</p>
              </div>

              <div className="bg-amber-50 border border-amber-100 rounded-xl p-5 flex gap-3 items-start">
                <Building2 className="h-6 w-6 shrink-0 text-amber-600 stroke-[1.5]" aria-hidden />
                <div className="tracking-tight">
                  <p className="text-sm font-semibold text-amber-900 mb-1">Real Example & Investor Insight</p>
                  <p className="text-sm text-amber-800">Houston homes average ~$421K vs Nashville ~$534K. But Tennessee property taxes are ~60–70% lower. TN is often better for long-term cash flow and equity.</p>
                </div>
              </div>
            </div>

            <div className="relative h-[600px] hidden lg:block order-1 lg:order-2">
              <img
                src="/assets/images/texas-to-tennessee/GettyImages-1681066662.jpg"
                alt="Nashville and Middle Tennessee — metro housing context"
                className="absolute top-0 right-0 w-2/3 h-2/3 object-cover rounded-2xl shadow-xl z-10"
                loading="lazy"
                decoding="async"
              />
              <img
                src="/assets/images/texas-to-tennessee/texas.jpg"
                alt="Tennessee landscape and open space — residential and lifestyle appeal"
                className="absolute bottom-0 left-0 w-2/3 h-2/3 object-cover rounded-2xl shadow-lg border-4 border-white z-20"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative py-24 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/texas-to-tennessee/iStock-1559191177.jpg')" }}
      >
        <div className="absolute inset-0 bg-slate-900/85"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl font-bold text-white mb-2">Best Places in Tennessee for Texas Transplants</h2>
          <p className="text-slate-300 text-sm md:text-base mb-10 max-w-2xl mx-auto">
            If you&apos;re relocating, these are top areas:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestPlaces.map((place) => {
              const Icon = place.icon;
              return (
                <div
                  key={place.id}
                  className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 text-left border border-white transition-all hover:shadow-2xl hover:-translate-y-2"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-4">{place.name}</h3>
                  <ul className="space-y-3">
                    {place.bulletPoints.map((point) => (
                      <li key={point} className="text-sm text-slate-600 flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" /> {point}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 text-center">
            Cost to Move from Texas to Tennessee
          </h2>
          <p className="text-slate-600 text-center text-sm mb-2">Typical moving costs:</p>
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm mt-8">
            <table className="w-full text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="text-left p-4 font-semibold text-slate-900">Move Type</th>
                  <th className="text-left p-4 font-semibold text-slate-900">Cost</th>
                </tr>
              </thead>
              <tbody>
                {movingCostRows.map((row) => (
                  <tr key={row.type} className="border-t border-slate-100">
                    <td className="p-4 text-slate-700">{row.type}</td>
                    <td className="p-4 text-slate-900 font-medium">{row.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 text-center text-slate-700 text-sm">
            <p className="font-semibold text-slate-900 mb-2">Depends on:</p>
            <ul className="space-y-1 inline-block text-left">
              <li>Distance (Dallas vs East TN matters)</li>
              <li>Home size</li>
              <li>Timing</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12 flex items-center gap-2 justify-center"><HiExternalLink size={40} className="text-secondary" /> Pros &amp; Cons of Moving from Texas to Tennessee</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20">
              <div className="flex items-center gap-3 mb-6">
                <ThumbsUp className="w-6 h-6 text-emerald-400" />
                <h3 className="text-xl font-bold">✅ Pros</h3>
              </div>
              <ul className="space-y-4">
                {[
                  'Lower property taxes (huge)',
                  'Lower overall cost of living',
                  'Better outdoor lifestyle',
                  'Less congestion',
                  'Strong real estate upside',
                ].map((txt, i) => (
                  <li key={i} className="flex gap-3 text-slate-100 text-sm">
                    <Plus className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" /> {txt}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20">
              <div className="flex items-center gap-3 mb-6">
                <ThumbsDown className="w-6 h-6 text-orange-400" />
                <h3 className="text-xl font-bold">❌ Cons</h3>
              </div>
              <ul className="space-y-4 text-sm text-slate-100">
                {[
                  'Smaller job markets',
                  'Some areas have higher sales tax',
                  'Nashville pricing rising fast',
                  'Less big-city infrastructure',
                ].map((txt, i) => (
                  <li key={i} className="flex gap-3">
                    <Minus className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" /> {txt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* <FinalInfoSection
        property={{
          title: 'Is Moving from Texas to Tennessee Worth It?',
          rightTitle: 'Want Help Moving to Tennessee?',
          description: 'For most people — yes, especially long-term.',
          points: [
            'You should strongly consider Tennessee if:',
            'You want lower taxes',
            'You’re investing in real estate',
            'You want better quality of life per dollar',
            'Texas may still be better if:',
            'You rely on large metro job markets',
            'You want major-city amenities',
          ],
          footer:
            'If you\'re relocating, check out: Homes, relocation guides, and area breakdowns at WhyTennessee.com',
          cities: [
            { name: 'Why Tennessee', route: route('frontend.why-tennessee') },
            { name: 'Homes for Sale', route: route('frontend.home-for-sale'), cityLinkIcon: FaHome },
            { name: 'Relocation Guide', route: route('frontend.tennessee-relocation')},
            { name: 'Get In Touch', route: route('frontend.get-in-touch'), cityLinkIcon: FaEnvelope },
          ],
        }}
      /> */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">

            <div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">
                Is Moving from Texas to Tennessee Worth It?
              </h2>
              <p className="text-lg font-medium text-slate-900 mb-6 tracking-tight">For most people — yes, especially long-term.</p>

              <div className="mb-8">
                <h4 className="text-base font-semibold text-slate-900 mb-4 flex items-center gap-2 tracking-tight">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500 stroke-[1.5]" aria-hidden />
                  You should strongly consider Tennessee if:
                </h4>
                <ul className="space-y-3 ml-1 text-sm text-slate-600 tracking-tight border-l-2 border-slate-200 pl-4">
                  <li>You want dramatically lower property taxes</li>
                  <li>You’re investing in real estate</li>
                  <li>You want better quality of life per dollar (outdoor appeal, slower pace)</li>
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="text-base font-semibold text-slate-900 mb-4 flex items-center gap-2 tracking-tight">
                  <AlertCircle className="h-5 w-5 shrink-0 text-amber-500 stroke-[1.5]" aria-hidden />
                  Texas may still be better if:
                </h4>
                <ul className="space-y-3 ml-1 text-sm text-slate-600 tracking-tight border-l-2 border-slate-200 pl-4">
                  <li>You rely on large metro job hubs (Tech in Austin, Energy, Corporate HQs)</li>
                  <li>You want extensive major-city amenities</li>
                </ul>
              </div>

              <div className="bg-indigo-50 rounded-xl p-5 border border-indigo-100 mb-6">
                <h4 className="text-sm font-semibold text-indigo-900 mb-2 tracking-tight flex items-center gap-2">
                  <Briefcase className="h-4 w-4 shrink-0 text-indigo-600" aria-hidden />
                  A Quick Note on Jobs:
                </h4>
                <p className="text-sm text-indigo-800 tracking-tight">Tennessee has strong growth in Healthcare, Manufacturing, and Logistics. Nashville even boasts a lower unemployment rate than many Texas metros.</p>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed tracking-tight">
                Looking for homes, areas, or relocation help? Visit <span className="font-semibold text-slate-900">WhyTennessee.com</span> for: Homes for sale, Relocation guides, Best places to live in Tennessee.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 h-fit">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-8 flex items-center gap-3">
                <MapPinIcon className="text-3xl text-amber-600" />
                Start Your Move to Tennessee
              </h3>

              <div className="grid grid-cols-2 gap-4 mb-10">
                <Link href={route('frontend.why-tennessee')} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-100 group">
                  <FaMapMarkerAlt className="text-xl text-secondary group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-slate-700 tracking-tight">Why Tennessee</span>
                </Link>
                <Link href={route('frontend.home-for-sale')} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-100 group">
                  <FaHome className="text-xl text-secondary group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-slate-700 tracking-tight">Homes for Sale</span>
                </Link>
                <Link href={route('frontend.tennessee-relocation')} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-100 group">
                  <FaMapMarkerAlt className="text-xl text-secondary group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-slate-700 tracking-tight">Relocation Guide</span>
                </Link>
                <Link href={route('frontend.get-in-touch')} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-100 group">
                  <FaEnvelope className="text-xl text-secondary group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-slate-700 tracking-tight">Get In Touch</span>
                </Link>
              </div>

              <Link href={route('frontend.livetennessee')} className="flex items-center justify-center gap-2 w-full bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-xl text-sm font-medium transition-colors tracking-tight">
                See Best Places to Live in Tennessee
                <FaArrowCircleRight className="text-base text-secondary group-hover:scale-110 transition-transform" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      <section className="py-24 bg-primary-background text-center border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-6 flex items-center justify-center gap-3">
            <FaFireAlt className="text-4xl text-secondary" />
            Final Verdict
          </h2>
          <p className="text-lg text-slate-600 mb-8 tracking-tight">Moving from Texas to Tennessee is one of the smartest financial moves right now for:</p>

          <div className="flex justify-center gap-4 sm:gap-8 mb-10 text-sm font-medium text-slate-900 flex-wrap tracking-tight">
            <span className="bg-slate-100 px-4 py-2 rounded-full border border-slate-200">Homeowners</span>
            <span className="bg-slate-100 px-4 py-2 rounded-full border border-slate-200">Real estate investors</span>
            <span className="bg-slate-100 px-4 py-2 rounded-full border border-slate-200">Remote workers</span>
          </div>

          <p className="text-base font-medium text-slate-900 mb-4 tracking-tight">You'll typically:</p>
          <div className="space-y-2 mb-10 text-sm text-slate-600 inline-block text-left tracking-tight border-l-2 border-secon pl-4">
            <p>Pay less in taxes</p>
            <p>Keep more of your income</p>
            <p>Get more lifestyle value per dollar</p>
          </div>

          <div>
            <Link href="#" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-secondary transition-colors group tracking-tight">
              Visit WhyTennessee.com
              <ArrowRight className="text-base group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </FrontendLayout>
  );
}
