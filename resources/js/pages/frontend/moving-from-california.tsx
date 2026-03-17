import FrontendLayout from '@/layouts/frontend-layout';
import {
  Building2,
  Check,
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
  title: 'Why Californians Are Moving to Tennessee',
  description:
    'People relocating from California often cite a mix of financial relief and lifestyle balance as the main motivators.',
  points: [
    'No state income tax',
    'Significantly lower home prices',
    'Lower overall cost of living',
    'Less congestion and density',
    'More space, both indoors and outdoors',
    'Business-friendly environment',
    'Central U.S. location with easy travel',
  ],
  conclusion:
    'For many former Californians, Tennessee offers something increasingly rare back west: affordability without sacrificing quality of life.',
  imageUrl: '/assets/images/moving-checklist/pexels-chaitaastic-3722911-scaled.jpg',
  imageUrl2: '/assets/images/live-in-tennessee/pexels-kelly-2833713-2048x1150.jpg',
};

const locationData = {
  title: 'From Pacific Coastlines to Southern Landscapes',
  description: (
    <>
      Moving from California to Tennessee means trading coastal freeways and dense urban cores
      for rolling hills, hardwood forests, and smaller-scale metro areas.
      <br />
      <br />
      Many Californians land in:
    </>
  ),
  distances: [
    'Middle Tennessee (Nashville, Franklin, Murfreesboro) for jobs & amenities',
    'East Tennessee (Knoxville, Chattanooga, Johnson City) for mountains & outdoor lifestyle',
    'West Tennessee (Memphis, Jackson) for maximum affordability',
  ],
  mapUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6538446.423819142!2d-129.35982367860402!3d36.85203577741825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia!5e0!3m2!1sen!2sus!4v1773738211091!5m2!1sen!2sus',
  conclusion:
    'Your best-fit Tennessee region depends on whether you prioritize jobs, climate, scenery, or pure affordability.',
};

const tabs = [
  {
    id: 'tab1',
    label: 'Cost of Living',
    title: 'Cost of Living: Tennessee vs California',
    intro: 'The most immediate difference Californians notice after moving to Tennessee is cost.',
    intro2: 'Housing costs',
    intro3: null,
    items: [
      'Home prices in Tennessee are dramatically lower than in most California markets.',
      'In many Tennessee cities, buyers can purchase a single-family home for what a down payment might cost in California.',
      'Property taxes are lower statewide.',
      'New construction and land are far more accessible.',
      'Renters also benefit from lower monthly rents, fewer application fees, and more housing options outside dense metro cores.',
    ],
    items2: [
      'Groceries, utilities, insurance, and transportation generally cost less in Tennessee.',
      'Gas prices, vehicle registration fees, and insurance rates are also typically lower than California averages.',
    ],
    footer:
      'For Californians used to high state costs, these differences can free up room in the budget for savings, travel, and a more sustainable lifestyle.',
    imageUrl: '/assets/images/live-in-tennessee/tennessee-state-capitol-building-nashville-aerial.jpeg',
  },
  {
    id: 'tab2',
    label: 'Lifestyle',
    title: 'Lifestyle Differences Californians Should Expect',
    intro:
      'Tennessee offers a different pace of life — slower, more community-oriented, and less crowded than many parts of California.',
    intro2: 'Space & density',
    intro3: 'Culture & community',
    items: [
      'Larger homes and lots.',
      'Less traffic outside major metro areas.',
      'More suburban, rural, and small-town living options.',
    ],
    items2: [
      'Strong sense of local community.',
      'Friendlier, more conversational social norms.',
      'More emphasis on family, church, and local events.',
      'Cities like Nashville, Knoxville, and Chattanooga have vibrant food, music, and arts scenes — but with a different tone than California.',
    ],
    footer:
      'This doesn’t mean Tennessee lacks culture, but understanding the differences in pace and community helps set expectations before you move.',
    imageUrl: '/assets/images/live-in-tennessee/tennessee-state-capitol-building-nashville-aerial.jpeg',
  },
  {
    id: 'tab3',
    label: 'Climate',
    title: 'Climate: What Californians Need to Know',
    intro: 'Tennessee’s climate surprises many Californians.',
    intro2: 'Key differences:',
    intro3: null,
    items: [
      'Four distinct seasons.',
      'Hot, humid summers.',
      'Mild to cool winters (with occasional snow).',
      'More rain, especially in spring.',
    ],
    items2: [
      'Unlike California, Tennessee experiences green, lush landscapes year-round, particularly in East Tennessee.',
      'Humidity can take adjustment if you’re coming from coastal or desert climates.',
    ],
    footer:
      'Being prepared for humidity and seasonal changes makes the transition from California’s climate much smoother.',
    imageUrl: '/assets/images/live-in-tennessee/tennessee-state-capitol-building-nashville-aerial.jpeg',
  },
  {
    id: 'tab4',
    label: 'Jobs & Economy',
    title: 'Jobs & Economy for Transplants',
    intro:
      'Tennessee’s economy has grown steadily as companies and workers relocate from high-cost states like California.',
    intro2: 'Major industries include:',
    intro3: 'Remote & hybrid work',
    items: ['Healthcare', 'Manufacturing', 'Logistics & distribution', 'Technology', 'Music & entertainment'],
    items2: [
      'Many Californians move to Tennessee while keeping remote jobs.',
      'Others start businesses, taking advantage of lower overhead and taxes.',
      'Many also transfer with employers expanding east into Tennessee.',
    ],
    footer:
      'If your income stays “California level” while your expenses drop to Tennessee levels, your financial picture can change quickly.',
    imageUrl: '/assets/images/live-in-tennessee/tennessee-state-capitol-building-nashville-aerial.jpeg',
  },
  {
    id: 'tab5',
    label: 'Best Places',
    title: 'Best Places in Tennessee for Californians to Consider',
    intro:
      'Where you land in Tennessee matters just as much as the decision to move. Popular choices for California transplants include:',
    intro2: null,
    intro3: null,
    items: [
      'Middle Tennessee: Strong job market, suburban communities, access to healthcare and education, and higher prices than other regions—but still lower than California.',
      'East Tennessee: Mountain views, outdoor recreation, lower housing costs, and a slower pace of life.',
      'West Tennessee: Affordable housing, an agricultural and logistics economy, and fewer transplants with a more local feel.',
    ],
    items2: null,
    footer:
      'Each region offers a different lifestyle — and choosing the right one is key to a successful relocation.',
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
      'Access to healthcare & education',
      'Higher prices than other regions, but lower than CA',
    ],
  },
  {
    id: 'east',
    name: 'East Tennessee',
    icon: Mountain,
    bulletPoints: ['Mountain views', 'Outdoor recreation', 'Lower housing costs', 'Slower pace of life'],
  },
  {
    id: 'west',
    name: 'West Tennessee',
    icon: Tractor,
    bulletPoints: ['Affordable housing', 'Agricultural & logistics economy', 'Fewer transplants, more local feel'],
  },
];

export default function MovingFromCalifornia() {
  return (
    <FrontendLayout activePage="city" subPage="California">
      <Hero
        slides={['/assets/images/moving-checklist/pexels-chaitaastic-3722911-scaled.jpg']}
        title={<>Moving to Tennessee from California: What You Need to Know Before You Relocate</>}
        description={
          <>
            <p className="mb-2">
              More Californians are moving to Tennessee than almost any other state-to-state migration — and it’s not
              by accident.
            </p>
            <p className="mb-2">
              Whether you’re leaving California because of cost of living, taxes, housing prices, or lifestyle changes,
              Tennessee offers a dramatically different way of life. But relocating across the country is a major
              decision, and understanding how Tennessee compares before you move can save time, money, and frustration.
            </p>
            <p>
              This guide breaks down everything Californians should know before moving to Tennessee — from taxes and
              housing to lifestyle, jobs, and the best cities to consider.
            </p>
          </>
        }
        width="max-w-3xl"
      />

      <WhyMoveSection whyMove={whyMoveData} />
      <MoveLocationSection location={locationData} />
      <InfoTabsSection tabs={tabs} />

      {/* Best Places */}
      <section
        className="relative py-16 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/live-in-tennessee/pexels-kelly-2833713-2048x1150.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-2xl font-semibold tracking-tight text-white mb-4">
            Best Places in Tennessee for Californians
          </h2>
          <p className="text-base leading-relaxed mb-8 text-white">
            Where you land in Tennessee matters just as much as the decision to move. Popular choices for California
            transplants:
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
            Each region offers a different lifestyle — choosing the right one is key to a successful relocation.
          </p>
        </div>
      </section>

      <FinalInfoSection
        property={{
          title: 'Is Tennessee a Good Fit for Californians?',
          rightTitle: 'Planning Your Move From California',
          description:
            'Moving from California to Tennessee is more than a change of address — it’s a lifestyle shift. Tennessee isn’t California, and that’s exactly why many people love it.',
          points: [
            'You value lower financial pressure and realistic paths to homeownership.',
            'You want more space, privacy, and a slower pace of life.',
            'You appreciate community-oriented living and strong local culture.',
            'You understand you may trade coastal weather, transit, and certain conveniences for these benefits.',
          ],
          footer:
            'The more clearly you define what you liked (and disliked) about California, the easier it is to choose the right Tennessee city or region, set realistic expectations, and relocate without regret.',
          cities: [
            { name: 'Nashville', route: route('frontend.livingInNashville') },
            { name: 'Knoxville', route: route('frontend.livingInKnoxville') },
            { name: 'Chattanooga', route: route('frontend.livingInChattanooga') },
            { name: 'Memphis', route: route('frontend.living-in-memphis') },
          ],
        }}
      />


      {/* Real Estate */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 gap-12">
            <div className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-md focus-within:ring-2 focus-within:ring-slate-200">
              <h2 className="text-xl font-semibold tracking-tight text-slate-900 mb-4">Buying a Home</h2>
              <p className="text-sm leading-relaxed mb-4">
                The home-buying process in Tennessee may feel refreshingly simple compared to California. What’s
                different:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="text-sm flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-slate-400" /> Less aggressive bidding (market-dependent)
                </li>
                <li className="text-sm flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-slate-400" /> Fewer contingencies in many areas
                </li>
                <li className="text-sm flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-slate-400" /> Lower closing costs
                </li>
                <li className="text-sm flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-slate-400" /> More new construction options
                </li>
              </ul>
              <p className="text-xs text-slate-500 leading-relaxed">
                However, local knowledge matters. Neighborhood quality, school zones, and county tax differences can
                vary significantly.
              </p>
            </div>
            <div className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-md focus-within:ring-2 focus-within:ring-slate-200">
              <h2 className="text-xl font-semibold tracking-tight text-slate-900 mb-4">Renting Before You Buy</h2>
              <p className="text-sm leading-relaxed mb-4">
                Many Californians choose to rent first after moving to Tennessee. Benefits include:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="text-sm flex items-center gap-2">
                  <KeyRound className="w-4 h-4 text-slate-400" /> Learning the area before committing
                </li>
                <li className="text-sm flex items-center gap-2">
                  <KeyRound className="w-4 h-4 text-slate-400" /> Understanding commute patterns
                </li>
                <li className="text-sm flex items-center gap-2">
                  <KeyRound className="w-4 h-4 text-slate-400" /> Exploring multiple neighborhoods
                </li>
                <li className="text-sm flex items-center gap-2">
                  <KeyRound className="w-4 h-4 text-slate-400" /> Avoiding rushed purchase decisions
                </li>
              </ul>
              <p className="text-xs text-slate-500 leading-relaxed">
                This is especially common for families, retirees, and remote workers looking for the perfect long-term
                fit.
              </p>
            </div>
          </div>
        </div>

        {/* Tradeoffs & Fit */}
        <div className="container mx-auto px-4 mt-16">
          <h2 className="text-2xl font-semibold tracking-tight text-white mb-6">Is Tennessee a Good Fit?</h2>
          <p className="text-base leading-relaxed mb-8 text-white">
            Relocating is exciting, but it’s honest to acknowledge tradeoffs. Tennessee isn’t California — and that’s
            exactly why many people love it.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div
              className="group p-6 rounded-2xl border border-slate-200 bg-white transition-all hover:-translate-y-0.5 hover:shadow-md focus-within:ring-2 focus-within:ring-slate-200"
              tabIndex={0}
            >
              <h3 className="text-sm font-medium text-white mb-4 flex items-center gap-2">
                <ThumbsUp className="w-4 h-4 text-slate-800" />
                You'll likely enjoy it if you value:
              </h3>
              <ul className="space-y-3">
                <li className="text-sm text-slate-600 flex items-start gap-2">
                  <Plus className="w-3.5 h-3.5 text-slate-300 mt-0.5" /> Lower financial pressure
                </li>
                <li className="text-sm text-slate-600 flex items-start gap-2">
                  <Plus className="w-3.5 h-3.5 text-slate-300 mt-0.5" /> Homeownership opportunities
                </li>
                <li className="text-sm text-slate-600 flex items-start gap-2">
                  <Plus className="w-3.5 h-3.5 text-slate-300 mt-0.5" /> Space and privacy
                </li>
                <li className="text-sm text-slate-600 flex items-start gap-2">
                  <Plus className="w-3.5 h-3.5 text-slate-300 mt-0.5" /> A slower pace of life
                </li>
                <li className="text-sm text-slate-600 flex items-start gap-2">
                  <Plus className="w-3.5 h-3.5 text-slate-300 mt-0.5" /> Community-oriented living
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
                  <Minus className="w-3.5 h-3.5 text-slate-400 mt-0.5" /> Large-scale public transit
                </li>
                <li className="text-sm text-slate-600 flex items-start gap-2">
                  <Minus className="w-3.5 h-3.5 text-slate-400 mt-0.5" /> Year-round coastal weather
                </li>
                <li className="text-sm text-slate-600 flex items-start gap-2">
                  <Minus className="w-3.5 h-3.5 text-slate-400 mt-0.5" /> Dense urban living only
                </li>
                <li className="text-sm text-slate-600 flex items-start gap-2">
                  <Minus className="w-3.5 h-3.5 text-slate-400 mt-0.5" /> Immediate ocean access
                </li>
                <li className="text-sm text-slate-600 flex items-start gap-2">
                  <Minus className="w-3.5 h-3.5 text-slate-400 mt-0.5" /> Extreme food diversity (niche cuisines)
                </li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-white mt-6 text-center">
            Understanding these differences upfront helps set realistic expectations and reduces relocation regret.
          </p>
        </div>
      </section>

      {/* Final Thoughts Section */}
      <section className="bg-primary-background px-4 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Final Thoughts
          </h2>
          <p className="text-base leading-relaxed mb-6">
            Moving from California to Tennessee is more than a change of address — it’s a lifestyle shift. The most
            successful relocations happen when people research regions before choosing a city, visit in person, work
            with local experts, and avoid assuming Tennessee works like California.
          </p>
          <p className="text-base leading-relaxed">
            With the right preparation, Tennessee can offer Californians a more affordable, balanced, and sustainable
            way of life.
          </p>
        </div>
      </section>
    </FrontendLayout>
  );
}

