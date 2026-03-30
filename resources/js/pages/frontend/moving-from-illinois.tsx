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

const floralPatternUrl = '/assets/images/patterns/floral-tile.svg';

export default function MovingFromVirginia() {


    return (
        <FrontendLayout activePage="moving-to-tennessee" subPage="Moving from Virginia to Tennessee">
            <Head title="Moving From Virginia to Tennessee (2026 Guide)" />

            <div
  className="min-h-screen bg-cover bg-center font-sans text-slate-800 relative"
  style={{
    backgroundImage:
      'url("https://info.rochfordlawyers.com/hubfs/Banners/Everything%20You%20Need%20to%20Know%20About%20Title%20Insurance.jpg")'
  }}
>
  <div className="absolute inset-0  backdrop-blur-xs" />
  <div className="relative max-w-4xl mx-auto p-8 rounded-2xl my-12 border ">
    <header className="mb-10 border-l-4 border-indigo-600 pl-6">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-700 mb-4 leading-tight">
        Moving From Illinois to Tennessee
        <span className="text-secondary! block text-2xl mt-2">
          (2026 Guide): Cost, Taxes, Housing &amp; Lifestyle
        </span>
      </h1>
    </header>
    <div className="space-y-6 text-lg leading-relaxed">
      <p className="text-xl font-medium text-slate-900">
        Thinking about{" "}
        <span className="text-slate-900 font-bold">
          moving from Illinois to Tennessee?
        </span>{" "}
        You’re not alone.
      </p>
      <div className="bg-indigo-50/50 p-6 rounded-xl border border-indigo-100">
        <p>
          Illinois is one of the{" "}
          <span className="font-bold text-slate-900">top outbound states</span>{" "}
          in the U.S., with thousands of residents leaving each year for places
          like Tennessee due to{" "}
          <span className="font-bold text-slate-900 underline decoration-indigo-200 underline-offset-4">
            high taxes, rising cost of living, and better housing affordability
          </span>
          .
        </p>
      </div>
      <p>
        This guide breaks down{" "}
        <span className="font-semibold text-slate-900">
          real stats, cost comparisons, taxes, housing trends,
        </span>{" "}
        and
        <a
          href="#"
          className="text-indigo-600 font-semibold border-b-2 border-indigo-600 hover:text-indigo-800 transition-colors"
        >
          lifestyle differences
        </a>
        so you can decide if Tennessee is the right move.
      </p>
    </div>
  </div>
</div>
<div className="relative left-1/2 w-screen max-w-none -translate-x-1/2 overflow-hidden bg-primary font-sans text-slate-800 dark:bg-amber-950">

  <div
    aria-hidden
    className="pointer-events-none absolute inset-0 z-0 bg-repeat opacity-[0.72] dark:opacity-[0.38]"
    style={{
      backgroundImage: `url('${floralPatternUrl}')`,
      backgroundSize: '200px 200px',
    }}
  />
  <div
    aria-hidden
    className="pointer-events-none absolute inset-0 z-0 bg-repeat opacity-45 dark:opacity-25"
    style={{
      backgroundImage: `url('${floralPatternUrl}')`,
      backgroundSize: '200px 200px',
      backgroundPosition: '100px 70px',
    }}
  />


  <div className="relative z-10 mx-auto max-w-4xl px-8 py-8">
  <div className="mb-12 rounded-3xl bg-linear-to-br from-indigo-100/95 via-indigo-50/90 to-sky-100/95 p-6 sm:p-8 ring-1 ring-indigo-200/60 backdrop-blur-[1px] dark:from-indigo-950/75 dark:via-indigo-950/55 dark:to-slate-900 dark:ring-indigo-800/40">

  <section className="rounded-2xl border border-slate-200/80  shadow-md overflow-hidden dark:border-slate-700 dark:bg-slate-900">
    <div className="p-6 border-b border-slate-100 bg-primary dark:border-slate-700 ">
      <h2 className="text-2xl font-bold text-white flex items-center gap-2">
        <span className="text-3xl">🏠</span> Illinois vs Tennessee: Key Stats
        Comparison
      </h2>
    </div>
    <div className="overflow-x-auto bg-primary ">
      <table className="w-full text-left border-collapse dark:bg-slate-900">
        <thead>
          <tr className="bg-slate-50/50">
            <th className="p-4 font-semibold text-white border-b border-slate-100">
              Category
            </th>
            <th className="p-4 font-semibold text-white border-b border-slate-100">
              Illinois
            </th>
            <th className="p-4 font-semibold text-white border-b border-slate-100">
              Tennessee
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-50">
          <tr className="hover:bg-slate-50/30 transition-colors">
            <td className="p-4 font-medium text-white">State Income Tax</td>
            <td className="p-4 text-white">4.95% (flat)</td>
            <td className="p-4 font-bold text-green-600">0%</td>
          </tr>
          <tr className="hover:bg-slate-50/30 transition-colors">
            <td className="p-4 font-medium text-white">Avg Property Tax Rate</td>
            <td className="p-4 text-red-500 font-medium">~2.08% (VERY high)</td>
            <td className="p-4 text-green-600 font-medium">~0.49%</td>
          </tr>
          <tr className="hover:bg-slate-50/30 transition-colors">
            <td className="p-4 font-medium text-white">Avg Monthly Cost of Living</td>
            <td className="p-4 text-slate-600">~$5,400</td>
            <td className="p-4 text-green-600 font-semibold">~$4,800</td>
          </tr>
          <tr className="hover:bg-slate-50/30 transition-colors">
            <td className="p-4 font-medium text-white">Median Home Price</td>
            <td className="p-4 text-slate-600">~$280K</td>
            <td className="p-4 text-green-600 font-semibold">~$317K</td>
          </tr>
          <tr className="hover:bg-slate-50/30 transition-colors">
            <td className="p-4 font-medium text-white">Avg Rent (2-bed)</td>
            <td className="p-4 text-slate-600">~$1,800</td>
            <td className="p-4 text-green-600 font-semibold">~$1,400</td>
          </tr>
          <tr className="hover:bg-slate-50/30 transition-colors">
            <td className="p-4 font-medium text-white">Population Trend</td>
            <td className="p-4 text-orange-600">Declining</td>
            <td className="p-4 text-indigo-600 font-semibold">Growing Fast</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="p-6 bg-indigo-600 text-white">
      <h3 className="font-bold mb-3 flex items-center gap-2">
        👉 Big Takeaway:
      </h3>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm opacity-90">
        <li className="bg-indigo-500/30 p-3 rounded-lg border border-indigo-400/30">
          <span className="font-bold">No Income Tax</span> + MUCH lower property
          taxes.
        </li>
        <li className="bg-indigo-500/30 p-3 rounded-lg border border-indigo-400/30">
          Illinois is one of the <span className="font-bold">highest-tax</span>{" "}
          states in the U.S.
        </li>
        <li className="bg-indigo-500/30 p-3 rounded-lg border border-indigo-400/30">
          Tennessee is <span className="font-bold">significantly cheaper</span>{" "}
          long-term.
        </li>
      </ul>
    </div>
  </section>


  </div>


  </div>





</div>
<section className="space-y-6">
    <div className="flex items-center gap-3">
      <span className="text-4xl">💰</span>
      <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
        Cost of Living: Illinois vs Tennessee
      </h2>
    </div>
    <p className="text-lg text-slate-600 leading-relaxed">
      One of the biggest reasons people are{" "}
      <span className="text-slate-900 font-semibold">
        moving to Tennessee from Illinois
      </span>{" "}
      is affordability.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <h4 className="font-bold text-slate-900 mb-4 border-b pb-2">
          Real Cost Differences:
        </h4>
        <ul className="space-y-3">
          <li className="flex items-start gap-2">
            <span className="text-green-500 font-bold">✓</span>
            <span>
              Tennessee is about{" "}
              <span className="font-bold">10–15% cheaper overall</span>
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500 font-bold">✓</span>
            <span>Housing is cheaper long-term due to taxes</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-indigo-500 font-bold">→</span>
            <span>Utilities are similar</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500 font-bold">✓</span>
            <span>Transportation is often cheaper in Tennessee</span>
          </li>
        </ul>
      </div>
      <div className="bg-indigo-900 text-white p-6 rounded-2xl shadow-lg flex flex-col justify-center">
        <h4 className="font-bold mb-4 opacity-80 uppercase tracking-widest text-xs">
          Monthly Cost Comparison
        </h4>
        <div className="space-y-4">
          <div className="flex justify-between items-end border-b border-indigo-800 pb-2">
            <span className="text-indigo-200">Illinois Average</span>
            <span className="text-2xl font-mono text-indigo-300">~$5,400</span>
          </div>
          <div className="flex justify-between items-end border-b border-indigo-700 pb-2">
            <span className="text-white">Tennessee Average</span>
            <span className="text-2xl font-mono font-bold text-green-400">
              ~$4,800
            </span>
          </div>
          <div className="mt-4 p-3 bg-white/10 rounded-lg text-center">
            <p className="text-sm">Total Annual Savings</p>
            <p className="text-3xl font-extrabold text-green-400">
              $6,000–$8,000
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>





        </FrontendLayout>
    );
}
