import FrontendLayout from '@/layouts/frontend-layout';
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  KeyRound,
  Landmark,
  Minus,
  Mountain,
  Plus,
  ThumbsDown,
  ThumbsUp,
  Tractor,
} from 'lucide-react';
import { Hero } from '@/components/sections/frontend/hero';
import WhyMoveSection from '@/components/sections/frontend/cities/why-move';
import InfoTabsSection from '@/components/sections/frontend/cities/info-tabs-section';
import FinalInfoSection from '@/components/sections/frontend/cities/final-info-section';
import { Head, Link } from '@inertiajs/react';

const statRows = [
  { category: 'State Income Tax', florida: '0%', tennessee: '0%' },
  { category: 'Avg Property Tax Rate', florida: '~0.83%', tennessee: '0.49%' },
  { category: 'Avg Home Insurance', florida: '$3,000–$6,000+/yr', tennessee: '~$1,200–$2,000/yr' },
  { category: 'Avg Monthly Cost of Living', florida: '~$5,200', tennessee: '~$4,800' },
  { category: 'Median Home Price', florida: '~$410K', tennessee: '~$317K' },
  { category: 'Population Growth (recent trend)', florida: 'High', tennessee: 'Very High' },
];

const whyLeavingData = {
  title: 'Why People Are Leaving Florida for Tennessee',
  description: 'Top reasons based on relocation trends:',
  points: [
    'Insurance costs skyrocketing',
    'Housing affordability issues',
    'Hurricane risk',
    'Crowding in major metros',
    'Desire for land and space',
  ],
  conclusion: 'Tennessee checks all those boxes.',
  imageUrl: '/assets/images/florida-tennessee/UF-MH.png',
  imageUrl2: '/assets/images/florida-tennessee/florida3.jpg',
};

const tabs = [
  {
    id: 'tab-cost',
    label: 'Cost of Living',
    title: '💰 Cost of Living: Florida vs Tennessee',
    intro: 'One of the biggest reasons people are moving to Tennessee from Florida is affordability.',
    intro2: 'Real Cost Differences:',
    intro3: null,
    items: [
      'Tennessee is about 7–10% cheaper overall than Florida',
      'Housing is often 20–30% cheaper outside Nashville',
      'Utilities are slightly cheaper in Tennessee',
      'Groceries are similar',
    ],
    items2: [
      'Biggest Savings = Insurance',
      'Florida homeowners are getting hit hard:',
      'Florida average: $3,000–$6,000+ per year',
      'Tennessee average: $1,200–$2,000 per year',
    ],
    footer: 'That’s $2,000–$4,000/year savings just in insurance',
    imageUrl: '/assets/images/florida-tennessee/residential-real-estate-property-listing.jpe',
  },
  {
    id: 'tab-housing',
    label: 'Housing',
    title: '🏡 Housing Market: Where You Save Big',
    intro: 'Housing is one of the biggest advantages when moving to Tennessee.',
    intro2: 'Tennessee Advantages:',
    intro3: null,
    items: [
      'Lower home prices (especially outside Nashville)',
      'Lower property taxes',
      'More land for the money',
      'Strong appreciation trends',
    ],
    items2: [
      'Florida Challenges:',
      'Rising home prices in major metros',
      'High insurance costs (hurricanes, flooding)',
      'HOA-heavy communities',
    ],
    footer:
      'Real Example: Tampa median home: ~$420K. Nashville median home: ~$430K. BUT outside Nashville (like East TN): $250K–$350K range. Investor insight: Tennessee gives you better cash flow, lower holding costs, and less risk.',
    imageUrl: '/assets/images/florida-tennessee/modern-suburban-luxury-home-exterior.jpeg',
  },
  {
    id: 'tab-taxes',
    label: 'Taxes',
    title: '🧾 Taxes: Florida vs Tennessee',
    intro: '✔ No State Income Tax (Both States) — You keep your income in both states.',
    intro2: '✔ Property Taxes Favor Tennessee',
    intro3: null,
    items: ['Florida: ~0.83%', 'Tennessee: ~0.49%'],
    items2: [
      'On a $400,000 home:',
      'Florida ≈ $3,300/year',
      'Tennessee ≈ $2,000/year',
      '✔ Lower Overall Cost Burden in Tennessee — When you combine property tax, insurance, and housing costs.',
    ],
    footer: 'Tennessee wins financially for most homeowners.',
    imageUrl: '/assets/images/home-ownership-process-real-estate-mortgage-compliance.jpeg',
  },
  {
    id: 'tab-lifestyle',
    label: 'Lifestyle',
    title: '🌴 vs ⛰️ Lifestyle: What Changes?',
    intro: 'What You Gain Moving to Tennessee',
    intro2: null,
    intro3: null,
    items: [
      'Mountains, lakes, rivers (huge lifestyle upgrade for many)',
      'Lower humidity (less extreme than Florida)',
      '4 real seasons (fall colors are a big draw)',
      'Less hurricane risk',
    ],
    items2: [
      'What You Lose',
      'Beach access',
      'Year-round tropical weather',
      'Larger coastal metro feel',
    ],
    footer: 'Tennessee lifestyle = More scenic, less chaotic, lower stress',
    imageUrl: '/assets/images/florida-tennessee/professional-cyclist-road-racing-action.jpe',
  },
  {
    id: 'tab-jobs',
    label: 'Job Market',
    title: '📈 Job Market Comparison',
    intro: 'Florida Strengths:',
    intro3: null,
    items: ['Tourism', 'Hospitality', 'Healthcare'],
    item2Intro: 'Tennessee Strengths:',
    items2: ['Healthcare (huge in Nashville)', 'Manufacturing', 'Logistics'],
    footer:
      'Tennessee is growing fast, especially in: Nashville (corporate + healthcare hub), Knoxville & Chattanooga (mid-size growth markets).',
    imageUrl: '/assets/images/florida-tennessee/laravel-javascript-software-development-process.jpeg',
  },
];

const bestPlaces = [
  {
    id: 'nashville',
    name: '🔥 Nashville',
    description: '',
    icon: Building2,
    bulletPoints: ['Big city feel similar to Florida metros', 'Higher cost but strong job market'],
  },
  {
    id: 'knoxville',
    name: '🔥 Knoxville',
    description: '',
    icon: Mountain,
    bulletPoints: ['Great balance of affordability + lifestyle', 'Near Smoky Mountains'],
  },
  {
    id: 'chattanooga',
    name: '🔥 Chattanooga',
    description: '',
    icon: Landmark,
    bulletPoints: ['Outdoor lifestyle + growing tech scene', 'One of the most popular relocation cities'],
  },
  {
    id: 'tri-cities',
    name: '🔥 Tri-Cities (Johnson City / Kingsport / Bristol)',
    description: '',
    icon: Tractor,
    bulletPoints: [
      'One of the most affordable areas in Tennessee',
      'Strong for investors and flips',
      'Growing relocation demand',
    ],
  },
];

const movingCostRows = [
  { type: 'DIY Truck', cost: '$1,200 – $3,500' },
  { type: 'Moving Company', cost: '$3,500 – $9,000' },
  { type: 'Full-Service', cost: '$6,000 – $12,000' },
];

export default function MovingFromFlorida() {
  return (
    <FrontendLayout activePage="moving-to-tennessee" subPage="Moving from Florida to Tennessee">
      <Head title="Moving From Florida to Tennessee (2026 Guide): Cost, Taxes, Housing & Lifestyle Differences" />
      <Hero
        slides={['/assets/images/florida-tennessee/gettyimages-643977867.jpg']}
        title={
          <>
            {/* Moving From Florida to Tennessee (2026 Guide):
            <br /> */}
            Cost, Taxes, Housing &amp; Lifestyle Differences
          </>
        }
        description={
          <>
            <p className="mb-2">Thinking about moving from Florida to Tennessee? You’re not alone.</p>
            <p className="mb-2">
              Thousands of Florida residents are relocating to Tennessee every year for lower insurance costs, cheaper
              housing in many areas, and a better overall quality of life. Whether you&apos;re coming from Miami, Tampa,
              Orlando, or Jacksonville, Tennessee offers a different pace — and often more value for your money.
            </p>
            <p>
              This guide breaks down real data, costs, taxes, housing trends, and lifestyle differences so you can make
              the right move.
            </p>
          </>
        }
        width="max-w-3xl"
        height="h-[calc(100vh-80px)] md:h-[550px]"
      />

      <section className="bg-primary py-16 text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            📊 Florida vs Tennessee: Key Stats Comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5">
            <table className="w-full text-sm text-left min-w-[520px]">
              <thead>
                <tr className="border-b border-white/15">
                  <th className="p-4 font-semibold text-slate-200">Category</th>
                  <th className="p-4 font-semibold text-slate-200">Florida</th>
                  <th className="p-4 font-semibold text-emerald-300">Tennessee</th>
                </tr>
              </thead>
              <tbody>
                {statRows.map((row) => (
                  <tr key={row.category} className="border-b border-white/10 last:border-0">
                    <td className="p-4 text-slate-100 font-medium">{row.category}</td>
                    <td className="p-4 text-slate-300">{row.florida}</td>
                    <td className="p-4 text-slate-100">{row.tennessee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-12 text-center bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-6 max-w-2xl mx-auto">
            <span className="text-sm font-medium text-secondary uppercase tracking-wide block mb-3">Big Takeaway</span>
            <p className="text-lg text-slate-200 leading-relaxed">Both states = no income tax</p>
            <p className="text-lg text-slate-200 leading-relaxed">Tennessee = lower property tax + MUCH cheaper insurance</p>
            <p className="text-lg text-slate-200 leading-relaxed">Florida = higher housing costs in most metro areas</p>
          </div>
        </div>
      </section>

      <InfoTabsSection tabs={tabs} />

      <section
        className="relative py-24 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/florida-tennessee/south-beach-miami-florida_HERO.jpg')" }}
      >
        <div className="absolute inset-0 bg-slate-900/85"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">📍 Best Places in Tennessee for Florida Transplants</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
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
            🚚 Cost to Move from Florida to Tennessee
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
            <p className="font-semibold text-slate-900 mb-2">Factors:</p>
            <ul className="space-y-1 inline-block text-left">
              <li>Distance (South Florida vs North Florida)</li>
              <li>Home size</li>
              <li>Timing</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12">Pros &amp; Cons of Moving from Florida to Tennessee</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20">
              <div className="flex items-center gap-3 mb-6">
                <ThumbsUp className="w-6 h-6 text-emerald-400" />
                <h3 className="text-xl font-bold">✅ Pros</h3>
              </div>
              <ul className="space-y-4">
                {[
                  'Much lower insurance costs',
                  'Lower property taxes',
                  'Lower cost of living overall',
                  'No hurricanes',
                  'Better real estate investment potential',
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
                {['No beaches', 'Colder winters (mild, but noticeable)', 'Smaller metro areas'].map((txt, i) => (
                  <li key={i} className="flex gap-3">
                    <Minus className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" /> {txt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <WhyMoveSection whyMove={whyLeavingData} />

      <FinalInfoSection
        property={{
          title: 'Is Moving from Florida to Tennessee Worth It?',
          rightTitle: '📦 Start Your Move to Tennessee',
          description: 'For most people — yes, especially financially.',
          points: [
            'Tennessee is ideal if you want:',
            'Lower monthly expenses',
            'Safer long-term housing costs',
            'Better investment opportunities',
            'Florida may still be better if:',
            'You need coastal living',
            'You prefer warm weather year-round',
          ],
          footer:
            'Looking for homes, areas, or relocation help? Visit WhyTennessee.com for: Homes for sale, Relocation guides, Best places to live in Tennessee.',
          cities: [
            { name: 'Why Tennessee', route: route('frontend.why-tennessee') },
            { name: 'Homes for Sale', route: route('frontend.home-for-sale') },
            { name: 'Relocation Guide', route: route('frontend.tennessee-relocation') },
            { name: 'Get In Touch', route: route('frontend.get-in-touch') },
          ],
        }}
      />

      <section className="bg-primary-background px-4 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">🔥 Final Verdict</h2>
          <p className="text-base leading-relaxed mb-8">
            Moving from Florida to Tennessee is one of the fastest-growing relocation trends right now.
          </p>
          <p className="text-base font-semibold text-slate-900 mb-4">You’ll typically:</p>
          <ul className="text-base leading-relaxed space-y-2 text-left inline-block mb-10">
            <li>Save thousands per year on insurance</li>
            <li>Pay less in taxes</li>
            <li>Get more house for your money</li>
            <li>Improve your overall cost of living</li>
          </ul>
          <div>
            <a
              href="https://WhyTennessee.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:underline"
            >
              Visit WhyTennessee.com <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </FrontendLayout>
  );
}
