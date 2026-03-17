import FrontendLayout from '@/layouts/frontend-layout';
import { Hero } from '@/components/sections/frontend/hero';
import WhyMoveSection from '@/components/sections/frontend/cities/why-move';
import MoveLocationSection from '@/components/sections/frontend/cities/move-location-section';
import InfoTabsSection from '@/components/sections/frontend/cities/info-tabs-section';
import FinalInfoSection from '@/components/sections/frontend/cities/final-info-section';
import React from 'react';

const whyMoveData = {
  title: 'Why Californians Are Moving to Tennessee',
  description:
    'More Californians are moving to Tennessee than almost any other state-to-state route. For many, it’s a shift from financial pressure to stability and breathing room.',
  points: [
    'No state income tax on wages',
    'Significantly lower home prices than major California metros',
    'Lower overall cost of living (housing, gas, insurance, utilities)',
    'Less congestion and more space—both indoors and outdoors',
    'Business- and tax-friendly environment for entrepreneurs and remote workers',
    'Central U.S. location with easier cross-country travel',
  ],
  conclusion:
    'If California has begun to feel financially unsustainable, Tennessee can offer a more balanced, attainable lifestyle without sacrificing opportunity.',
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
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6744975.780937639!2d-123.90119916347014!3d37.2587784225758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88623f20c5a9bbab%3A0x82629a39ff3a2b8a!2sTennessee!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus',
  conclusion:
    'Your best-fit Tennessee region depends on whether you prioritize jobs, climate, scenery, or pure affordability.',
};

const tabs = [
  {
    id: 'tab1',
    label: 'Cost of Living',
    title: 'Cost of Living: Tennessee vs. California',
    intro:
      'Most Californians feel the impact of Tennessee’s affordability within the first few months of living here.',
    intro2: null,
    intro3: null,
    items: [
      'Housing costs are often 40–60% lower than in major California metros',
      'Property taxes are generally lower, with no state tax on wages',
      'Gas, groceries, insurance, and utilities are typically below California averages',
      'Your monthly budget stretches further, allowing more room for savings and experiences',
    ],
    items2: null,
    footer:
      'For many former Californians, Tennessee finally makes homeownership and long‑term financial planning realistic.',
    imageUrl: '/assets/images/cost-of-living/pexels-kelly-4109661-1024x575.jpg',
  },
  {
    id: 'tab2',
    label: 'Lifestyle & Climate',
    title: 'Lifestyle & Climate Changes',
    intro:
      'Leaving California means trading coastal climate and dense cities for four seasons and more community‑driven living.',
    intro2: null,
    intro3: null,
    items: [
      'Four distinct seasons with hot, humid summers and mild to cool winters',
      'Lush, green landscapes—especially in East Tennessee—versus drought‑prone regions',
      'More small‑town and suburban options, with strong emphasis on local community',
      'Less time in traffic (outside the big metros) and more time outdoors',
    ],
    items2: null,
    footer:
      'The biggest adjustment for many Californians is humidity—but the tradeoff is year‑round greenery and a slower pace of life.',
    imageUrl: '/assets/images/live-in-tennessee/General-view.jpeg',
  },
  {
    id: 'tab3',
    label: 'Jobs & Remote Work',
    title: 'Jobs, Remote Work & Opportunity',
    intro:
      'Tennessee’s economy has been growing as employers and workers both seek lower‑cost, business‑friendly states.',
    intro2: null,
    intro3: null,
    items: [
      'Major industries include healthcare, manufacturing, logistics, technology, and entertainment',
      'Many Californians keep their West‑coast remote jobs while living on a Tennessee budget',
      'More room to launch small businesses with lower overhead and taxes',
      'Nashville, Knoxville, and Chattanooga are standout markets for career growth',
    ],
    items2: null,
    footer:
      'If your income stays “California level” while your expenses drop to Tennessee levels, your financial picture can change quickly.',
    imageUrl: '/assets/images/live-in-tennessee/tennessee-state-capitol-building-nashville-aerial.jpeg',
  },
  {
    id: 'tab4',
    label: 'Buying vs. Renting',
    title: 'Buying a Home vs. Renting First',
    intro:
      'Many Californians choose to rent for 6–12 months before buying, especially if they’ve never lived in the Southeast.',
    intro2: null,
    intro3: null,
    items: [
      'Renting first lets you learn commute patterns, school zones, and neighborhood feel',
      'Buying is generally more straightforward than in California, with fewer bidding wars in many areas',
      'Closing costs and property taxes tend to be lower, even when interest rates are similar',
      'New construction and suburban master‑planned communities are widely available',
    ],
    items2: null,
    footer:
      'Whether you rent or buy first, working with a local Tennessee‑based agent who understands out‑of‑state relocations is a major advantage.',
    imageUrl: '/assets/images/Beautiful_home_exterior.jpeg',
    cta: {
      label: 'Browse Homes for Sale in Tennessee',
      href: '/homes-for-sale',
      icon: '',
    },
  },
];

export default function MovingFromCalifornia() {
  return (
    <FrontendLayout activePage="city" subPage="California">
      <Hero
        slides={['/assets/images/moving-checklist/pexels-chaitaastic-3722911-scaled.jpg']}
        title={<>Moving to Tennessee from California</>}
        description={
          <>
            Homes, Cost of Living, Lifestyle &amp; Relocation Tips. Learn how Tennessee compares to
            California on taxes, housing, jobs, and everyday quality of life before you make the
            move.
          </>
        }
        width="max-w-3xl"
      />

      <WhyMoveSection whyMove={whyMoveData} />
      <MoveLocationSection location={locationData} />
      <InfoTabsSection tabs={tabs} />

      <FinalInfoSection
        property={{
          title: 'Is Tennessee Right for You as a Californian?',
          rightTitle: 'Tennessee Regions to Explore Next',
          description:
            'Tennessee can be a strong fit if you are seeking lower financial pressure, more space, and a community‑oriented lifestyle without giving up modern amenities.',
          points: [
            'You want to keep more of your income instead of paying high state taxes',
            'You’re ready to trade congestion and density for space and slower pace',
            'You’d like realistic paths to homeownership or investment properties',
            'You value access to nature, seasonal change, and smaller‑scale metros',
          ],
          footer:
            'The more clearly you define what you liked (and disliked) about California, the easier it is to choose the right Tennessee city or region.',
          cities: [
            { name: 'Nashville', route: route('frontend.livingInNashville') },
            { name: 'Knoxville', route: route('frontend.livingInKnoxville') },
            { name: 'Chattanooga', route: route('frontend.livingInChattanooga') },
            { name: 'Memphis', route: route('frontend.living-in-memphis') },
          ],
        }}
      />
    </FrontendLayout>
  );
}

