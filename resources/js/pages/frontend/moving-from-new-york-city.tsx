import FrontendLayout from '@/layouts/frontend-layout';
import {
  Building2,
  KeyRound,
  MapPin,
  Minus,
  Mountain,
  Plus,
  ThumbsDown,
  ThumbsUp,
  Tractor,
} from 'lucide-react';
import { Hero } from '@/components/sections/frontend/hero';
import WhyMoveSection from '@/components/sections/frontend/cities/why-move';
import MoveLocationSection from '@/components/sections/frontend/cities/move-location-section';
import InfoTabsSection from '@/components/sections/frontend/cities/info-tabs-section';
import FinalInfoSection from '@/components/sections/frontend/cities/final-info-section';
import React from 'react';

const whyMoveData = {
  title: 'Why New Yorkers Are Moving to Tennessee',
  description:
    'For many people leaving New York, the decision comes down to affordability, space, and quality of life.',
  points: [
    'No state income tax',
    'Much lower home prices',
    'Lower property taxes overall',
    'Less congestion and crowding',
    'More space for families and remote work',
    'Friendlier business and regulatory environment',
    'Strong job growth in key metros',
  ],
  conclusion:
    'For many former New Yorkers, Tennessee offers something that has become harder to find back home: financial breathing room.',
  imageUrl: '/assets/images/moving-checklist/pexels-chaitaastic-3722911-scaled.jpg',
  imageUrl2: '/assets/images/live-in-tennessee/pexels-kelly-2833713-2048x1150.jpg',
};

const locationData = {
  title: 'Cost of Living: Tennessee vs New York',
  description: (
    <>
      The difference in cost of living is often the biggest shock - in a good way.
      <br />
      <br />
      Housing costs
    </>
  ),
  distances: [
    'Housing prices in Tennessee are dramatically lower than in most New York markets.',
    'A single-family home in Tennessee may cost less than a condo or co-op in New York.',
    'Property taxes are lower in most Tennessee counties.',
    'New construction and land are far more accessible.',
    'Renters relocating from New York also find lower monthly rent, fewer application fees, larger living spaces, and more parking and storage options.',
  ],
  mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740189.2615344464!2d89.2962686231708!3d23.72852328985695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1773802844776!5m2!1sen!2sbd',
  conclusion:
    'For former New Yorkers, Tennessee often offers something that has become harder to find back home: financial breathing room.',
};

const tabs = [
  {
    id: 'tab1',
    label: 'Cost of Living',
    title: 'Cost of Living: Tennessee vs New York',
    intro: 'The difference in cost of living is often the biggest shock - in a good way.',
    intro2: 'Housing costs',
    intro3: null,
    items: [
      'Housing prices in Tennessee are dramatically lower than in most New York markets.',
      'A single-family home in Tennessee may cost less than a condo or co-op in New York.',
      'Property taxes are lower in most Tennessee counties.',
      'New construction and land are far more accessible.',
      'Renters relocating from New York also find lower monthly rent, fewer application fees, larger living spaces, and more parking and storage options.',
    ],
    items2: [
      'Groceries, utilities, car insurance, and healthcare costs are generally lower in Tennessee.',
      'Gas prices and vehicle registration fees are also typically far less than in New York.',
    ],
    footer:
      'For former New Yorkers, Tennessee often offers something that has become harder to find back home: financial breathing room.',
    imageUrl: '/assets/images/live-in-tennessee/tennessee-state-capitol-building-nashville-aerial.jpeg',
  },
  {
    id: 'tab2',
    label: 'Taxes',
    title: 'Taxes: A Major Advantage for New Yorkers',
    intro: 'Tennessee’s tax structure is one of its strongest draws for people leaving New York.',
    intro2: 'What changes:',
    intro3: null,
    items: [
      'No state income tax',
      'No tax on wages or salaries',
      'Lower combined tax burden for most households',
    ],
    items2: [
      'New Yorkers accustomed to state, city, and local income taxes often save thousands of dollars per year after relocating.',
    ],
    footer:
      'New Yorkers accustomed to state, city, and local income taxes often save thousands of dollars per year after relocating.',
    imageUrl: '/assets/images/live-in-tennessee/tennessee-state-capitol-building-nashville-aerial.jpeg',
  },
  {
    id: 'tab3',
    label: 'Lifestyle',
    title: 'Lifestyle Changes New Yorkers Should Expect',
    intro: 'Moving from New York to Tennessee involves more than financial changes - daily life feels very different.',
    intro2: 'Pace of life',
    intro3: 'Space & housing',
    items: [
      'Slower, less rushed atmosphere',
      'Fewer crowds and lines',
      'Less noise and density outside major cities',
    ],
    items2: [
      'Larger homes and yards',
      'Driveways instead of street parking',
      'More suburban and rural living options',
      'Greater emphasis on family and local events',
    ],
    footer:
      'For many New Yorkers, this adjustment is welcome — but it can take time.',
    imageUrl: '/assets/images/live-in-tennessee/tennessee-state-capitol-building-nashville-aerial.jpeg',
  },
  {
    id: 'tab4',
    label: 'Climate',
    title: 'Climate: Tennessee vs New York',
    intro: 'Tennessee’s climate differs significantly from New York’s, especially in winter.',
    intro2: 'What’s different:',
    intro3: null,
    items: [
      'Milder winters with less snow',
      'Hotter, more humid summers',
      'Longer spring and fall seasons',
      'More rainfall overall',
    ],
    items2: [
      'If you are leaving harsh New York winters, Tennessee often feels like a major upgrade.',
      'Summer humidity can surprise newcomers, so it helps to plan for that adjustment early.',
    ],
    footer:
      'If you’re leaving harsh New York winters, Tennessee’s climate often feels like a major upgrade - though summer humidity can surprise newcomers.',
    imageUrl: '/assets/images/live-in-tennessee/tennessee-state-capitol-building-nashville-aerial.jpeg',
  },
  {
    id: 'tab5',
    label: 'Jobs & Work',
    title: 'Jobs & Work Opportunities for New York Transplants',
    intro: 'Tennessee’s economy continues to grow as businesses and workers relocate from high-cost states.',
    intro2: 'Major industries include:',
    intro3: 'Remote and hybrid work',
    items: ['Healthcare', 'Logistics and distribution', 'Manufacturing', 'Technology', 'Music, entertainment, and tourism'],
    items2: [
      'Many former New Yorkers keep remote jobs after relocating.',
      'Others transfer with expanding companies or start small businesses.',
      'Tennessee’s lower cost structure makes entrepreneurship more accessible.',
    ],
    footer:
      'Tennessee’s lower cost structure makes entrepreneurship more accessible.',
    imageUrl: '/assets/images/live-in-tennessee/tennessee-state-capitol-building-nashville-aerial.jpeg',
  },
];

const bestPlaces = [
  {
    id: 'middle',
    name: 'Middle Tennessee',
    icon: Building2,
    bulletPoints: [
      'Strong job market',
      'Suburban communities',
      'Access to major healthcare systems',
      'Higher prices than other TN regions, but still far lower than NY',
    ],
  },
  {
    id: 'east',
    name: 'East Tennessee',
    icon: Mountain,
    bulletPoints: ['Mountain scenery', 'Outdoor recreation', 'Lower housing costs', 'Slower pace of life'],
  },
  {
    id: 'west',
    name: 'West Tennessee',
    icon: Tractor,
    bulletPoints: ['Very affordable housing', 'Fewer transplants', 'More traditional Southern lifestyle'],
  },
];

export default function MovingFromNewYorkCity() {
  return (
    <FrontendLayout activePage="city" subPage="New York City">
      <Hero
        slides={['/assets/images/moving-checklist/pexels-chaitaastic-3722911-scaled.jpg']}
        title={<>Moving to Tennessee from New York: A Complete 2026 Relocation Guide</>}
        description={
          <>
            <p className="mb-2">
              More New Yorkers are moving to Tennessee than ever before - and the reasons go far beyond just taxes.
            </p>
            <p className="mb-2">
              Whether you’re leaving New York City, Long Island, Westchester, or upstate New York, relocating to
              Tennessee represents a major lifestyle shift. Lower costs, more space, and a slower pace of life attract
              many former New Yorkers - but Tennessee is very different from New York in important ways.
            </p>
            <p>
              This guide explains everything New Yorkers should know before moving to Tennessee, including cost of
              living, taxes, housing, lifestyle changes, and where to live.
            </p>
          </>
        }
        width="max-w-3xl"
      />

      <WhyMoveSection whyMove={whyMoveData} />
      <MoveLocationSection location={locationData} />
      <InfoTabsSection tabs={tabs} />

      <section
        className="relative py-16 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/live-in-tennessee/pexels-kelly-2833713-2048x1150.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-2xl font-semibold tracking-tight text-white mb-4">Best Places in Tennessee for New Yorkers</h2>
          <p className="text-base leading-relaxed mb-8 text-white">
            Choosing the right area is critical for a successful relocation.
          </p>

          <div className="grid sm:grid-cols-3 gap-6">
            {bestPlaces.map((place) => {
              const Icon = place.icon;

              return (
                <button
                  key={place.id}
                  type="button"
                  className="group text-left border border-slate-200 rounded-2xl p-6 hover:border-slate-300 transition-transform hover:-translate-y-1 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 cursor-pointer bg-white/95 backdrop-blur-sm"
                >
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center mb-4 border border-slate-100">
                    <Icon className="w-5 h-5 text-slate-900 group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-base font-medium tracking-tight text-slate-900 mb-3">{place.name}</h3>
                  <ul className="space-y-2">
                    {place.bulletPoints.map((point) => (
                      <li key={point} className="text-sm text-slate-500 flex items-start gap-1.5">
                        <span className="text-slate-300">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </button>
              );
            })}
          </div>
          <p className="text-sm text-white mt-6 text-center">
            Each region offers a different balance of affordability, amenities, and pace.
          </p>
        </div>
      </section>

      <FinalInfoSection
        property={{
          title: 'Is Tennessee a Good Fit for People from New York?',
          rightTitle: 'Next Steps',
          description:
            'Tennessee tends to be a great fit if you value lower living costs, homeownership opportunities, more space and privacy, a calmer pace of life, and community-focused living.',
          points: [
            'It may be less ideal if you rely heavily on public transit.',
            'It may be less ideal if you need dense, walkable urban cores.',
            'It may be less ideal if you want fast-paced city lifestyles.',
          ],
          footer:
            'If you’re considering a move from New York to Tennessee, explore Tennessee cities and regions, compare homes and rentals, speak with trusted local experts, and learn which areas best match your lifestyle.',
          cities: [
            { name: 'Explore Tennessee Cities', route: route('frontend.city-comparison') },
            { name: 'Compare Homes', route: route('frontend.home-for-sale') },
            { name: 'Browse Rentals', route: route('frontend.rentals') },
            { name: 'Get In Touch', route: route('frontend.get-in-touch') },
          ],
        }}
      />

      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 gap-12">
            <div className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-md focus-within:ring-2 focus-within:ring-slate-200">
              <h2 className="text-xl font-semibold tracking-tight text-slate-900 mb-4">Buying a Home in Tennessee as a New Yorker</h2>
              <p className="text-sm leading-relaxed mb-4">
                The home-buying process in Tennessee is often less complex than in New York. Key differences:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="text-sm flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-slate-400" /> Fewer bidding wars in many markets
                </li>
                <li className="text-sm flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-slate-400" /> Lower closing costs
                </li>
                <li className="text-sm flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-slate-400" /> Less reliance on co-ops or HOA-heavy properties
                </li>
                <li className="text-sm flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-slate-400" /> More single-family homes and new builds
                </li>
              </ul>
              <p className="text-xs text-slate-500 leading-relaxed">
                However, local expertise matters. Zoning, school districts, and county taxes can vary widely.
              </p>
            </div>
            <div className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-md focus-within:ring-2 focus-within:ring-slate-200">
              <h2 className="text-xl font-semibold tracking-tight text-slate-900 mb-4">Renting First: A Smart Strategy</h2>
              <p className="text-sm leading-relaxed mb-4">
                Many New Yorkers choose to rent before buying in Tennessee. Benefits include:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="text-sm flex items-center gap-2">
                  <KeyRound className="w-4 h-4 text-slate-400" /> Learning neighborhoods and commute patterns
                </li>
                <li className="text-sm flex items-center gap-2">
                  <KeyRound className="w-4 h-4 text-slate-400" /> Understanding regional differences
                </li>
                <li className="text-sm flex items-center gap-2">
                  <KeyRound className="w-4 h-4 text-slate-400" /> Avoiding rushed buying decisions
                </li>
                <li className="text-sm flex items-center gap-2">
                  <KeyRound className="w-4 h-4 text-slate-400" /> Flexibility during the transition
                </li>
              </ul>
              <p className="text-xs text-slate-500 leading-relaxed">
                This approach is especially popular among remote workers and families.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 mt-16">
          <h2 className="text-2xl font-semibold tracking-tight text-white mb-6">What Some New Yorkers Miss After Moving</h2>
          <p className="text-base leading-relaxed mb-8 text-white">
            Relocation always involves tradeoffs. Some former New Yorkers miss:
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div
              className="group p-6 rounded-2xl border border-slate-200 bg-white transition-all hover:-translate-y-0.5 hover:shadow-md focus-within:ring-2 focus-within:ring-slate-200"
              tabIndex={0}
            >
              <h3 className="text-sm font-medium text-white mb-4 flex items-center gap-2">
                <ThumbsUp className="w-4 h-4 text-slate-800" />
                You’ll likely enjoy it if you value:
              </h3>
              <ul className="space-y-3">
                <li className="text-sm text-slate-600 flex items-start gap-2">
                  <Plus className="w-3.5 h-3.5 text-slate-300 mt-0.5" /> Lower living costs
                </li>
                <li className="text-sm text-slate-600 flex items-start gap-2">
                  <Plus className="w-3.5 h-3.5 text-slate-300 mt-0.5" /> Homeownership opportunities
                </li>
                <li className="text-sm text-slate-600 flex items-start gap-2">
                  <Plus className="w-3.5 h-3.5 text-slate-300 mt-0.5" /> More space and privacy
                </li>
                <li className="text-sm text-slate-600 flex items-start gap-2">
                  <Plus className="w-3.5 h-3.5 text-slate-300 mt-0.5" /> A calmer pace of life
                </li>
                <li className="text-sm text-slate-600 flex items-start gap-2">
                  <Plus className="w-3.5 h-3.5 text-slate-300 mt-0.5" /> Community-focused living
                </li>
              </ul>
            </div>
            <div
              className="group p-6 rounded-2xl border border-slate-200 bg-slate-50 transition-all hover:-translate-y-0.5 hover:shadow-md focus-within:ring-2 focus-within:ring-slate-200"
              tabIndex={0}
            >
              <h3 className="text-sm font-medium text-slate-900 mb-4 flex items-center gap-2">
                <ThumbsDown className="w-4 h-4 text-slate-800" />
                It may be less ideal if you rely on:
              </h3>
              <ul className="space-y-3">
                <li className="text-sm text-slate-600 flex items-start gap-2">
                  <Minus className="w-3.5 h-3.5 text-slate-400 mt-0.5" /> Public transit
                </li>
                <li className="text-sm text-slate-600 flex items-start gap-2">
                  <Minus className="w-3.5 h-3.5 text-slate-400 mt-0.5" /> Dense, walkable urban cores
                </li>
                <li className="text-sm text-slate-600 flex items-start gap-2">
                  <Minus className="w-3.5 h-3.5 text-slate-400 mt-0.5" /> Fast-paced city lifestyles
                </li>
                <li className="text-sm text-slate-600 flex items-start gap-2">
                  <Minus className="w-3.5 h-3.5 text-slate-400 mt-0.5" /> Late-night dining options
                </li>
                <li className="text-sm text-slate-600 flex items-start gap-2">
                  <Minus className="w-3.5 h-3.5 text-slate-400 mt-0.5" /> Certain cultural and food diversity
                </li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-white mt-6 text-center">
            Understanding these differences upfront helps prevent disappointment.
          </p>
        </div>
      </section>

      <section className="bg-primary-background px-4 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Final Thoughts: Planning Your Move from New York to Tennessee</h2>
          <p className="text-base leading-relaxed mb-6">
            Moving from New York to Tennessee is a significant life change - but for many, it’s a positive one. The
            most successful relocations happen when people research regions before choosing a city, visit Tennessee in
            person if possible, work with knowledgeable local professionals, and avoid assuming Tennessee works like
            New York.
          </p>
          <p className="text-base leading-relaxed">
            With thoughtful planning, Tennessee can offer New Yorkers a more affordable, spacious, and balanced
            lifestyle.
          </p>
        </div>
      </section>
    </FrontendLayout>
  );
}
