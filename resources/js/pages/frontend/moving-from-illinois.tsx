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

<section className="space-y-6 container mx-auto p-20">
  <div className="flex items-center gap-3">
    <span className="text-4xl">💰</span>
    <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
      Cost of Living: Illinois vs Tennessee
    </h2>
  </div>
  <p className="text-lg text-slate-600 leading-relaxed">
    One of the biggest reasons people are{" "}<span className="text-slate-900 font-semibold">moving to Tennessee from Illinois</span>{" "}is affordability.
  </p>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
      <div className="flex items-center gap-4 mb-4 border-b pb-2">
        <h4 className="font-bold text-slate-900">
          Real Cost Differences:
        </h4>
        <img src="https://www.rent.com/blog/wp-content/uploads/2019/02/The-Cost-of-Moving-And-How-to-Plan-For-It.jpg" alt="Cost of Living Overview Icon" className="w-10 h-10 rounded-full border border-slate-200" />
      </div>
      <ul className="space-y-3">
        <li className="flex items-start gap-2">
          <span className="text-green-500 font-bold">✓</span>
          <span>
            Tennessee is about{" "}<span className="font-bold">10–15% cheaper overall</span>
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
      <div className="flex items-center gap-4 mb-4">
        <h4 className="font-bold opacity-80 uppercase tracking-widest text-xs">
          Monthly Cost Comparison
        </h4>
        <img src="https://www.rent.com/blog/wp-content/uploads/2019/02/The-Cost-of-Moving-And-How-to-Plan-For-It.jpg" alt="Monthly Expense Calendar Icon" className="w-10 h-10 rounded-full border border-indigo-700/50" />
      </div>
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

<section className="container mx-auto p-8 bg-white font-sans text-slate-800">
  <div className="flex items-center gap-3 mb-8">
    <span className="text-4xl">🏡</span>
    <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
      Housing Market: Where Tennessee Wins Big
    </h2>
  </div>
  <p className="text-lg text-slate-600 mb-10 italic border-l-4 border-slate-200 pl-4">
    At first glance, Illinois homes may look cheaper —{" "}
    <span className="text-slate-900 font-semibold italic">
      but taxes change everything.
    </span>
  </p>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
    <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
      <h3 className="text-green-900 font-bold text-xl mb-4 flex items-center gap-2">
        ✨ Tennessee Advantages
      </h3>
      <ul className="space-y-3 text-green-800">
        <li className="flex items-start gap-2 italic">
          <span className="font-bold">✓</span> Lower property taxes (HUGE
          savings)
        </li>
        <li className="flex items-start gap-2 italic">
          <span className="font-bold">✓</span> Lower long-term ownership costs
        </li>
        <li className="flex items-start gap-2 italic">
          <span className="font-bold">✓</span> Strong appreciation trends
        </li>
        <li className="flex items-start gap-2 italic">
          <span className="font-bold">✓</span> More land and rural options
        </li>
      </ul>
    </div>
    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
      <h3 className="text-slate-900 font-bold text-xl mb-4 flex items-center gap-2">
        ⚠️ Illinois Challenges
      </h3>
      <ul className="space-y-3 text-slate-600">
        <li className="flex items-start gap-2">
          <span className="font-bold text-red-500">×</span> Extremely high
          property taxes (~2.08%)
        </li>
        <li className="flex items-start gap-2">
          <span className="font-bold text-red-500">×</span> Older housing stock
          in many areas
        </li>
        <li className="flex items-start gap-2">
          <span className="font-bold text-red-500">×</span> Slower appreciation
          in some regions
        </li>
      </ul>
    </div>
  </div>
  <div className="relative bg-slate-900 rounded-3xl p-8 text-white overflow-hidden shadow-xl mb-12">
    <div className="relative z-10">
      <h3 className="text-indigo-400 font-bold uppercase tracking-widest text-sm mb-2">
        💡 Real Example
      </h3>
      <h4 className="text-2xl font-bold mb-6">On a $300,000 Home:</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div className="flex justify-between items-center bg-white/5 p-4 rounded-xl border border-white/10">
            <span>Illinois Property Tax:</span>
            <span className="text-xl font-mono text-red-400 font-bold">
              ~$6,200/yr
            </span>
          </div>
          <div className="flex justify-between items-center bg-white/5 p-4 rounded-xl border border-white/10">
            <span>Tennessee Property Tax:</span>
            <span className="text-xl font-mono text-green-400 font-bold">
              ~$1,500/yr
            </span>
          </div>
        </div>
        <div className="bg-indigo-600 p-6 rounded-2xl text-center">
          <p className="text-indigo-100 text-sm font-medium uppercase mb-1">
            Total Savings
          </p>
          <p className="text-4xl font-black mb-1">
            $4,700{" "}
            <span className="text-lg font-normal opacity-80">/ Year</span>
          </p>
          <div className="h-px bg-indigo-500 my-3" />
          <p className="text-xl font-bold text-indigo-200">
            Over 10 Years = $47,000+ saved
          </p>
        </div>
      </div>
    </div>
    <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl" />
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div>
      <h4 className="font-bold text-slate-900 mb-4 text-lg">
        Home Price Comparison:
      </h4>
      <div className="space-y-2 text-slate-600">
        <p className="flex justify-between border-b border-slate-100 pb-2">
          <span>Chicago Suburbs:</span>{" "}
          <span className="font-semibold">$300K–$400K</span>
        </p>
        <p className="flex justify-between border-b border-slate-100 pb-2">
          <span>Nashville:</span> <span className="font-semibold">~$430K</span>
        </p>
        <p className="flex justify-between border-b border-slate-100 pb-2 text-indigo-600 font-medium">
          <span>East Tennessee:</span>{" "}
          <span className="font-bold">$250K–$350K</span>
        </p>
      </div>
    </div>
    <div className="bg-indigo-50 p-6 rounded-2xl border-2 border-dashed border-indigo-200">
      <h4 className="font-bold text-indigo-900 mb-2 flex items-center gap-2">
        👉 Investor Insight
      </h4>
      <p className="text-indigo-800 leading-relaxed text-sm italic">
        Tennessee offers{" "}
        <span className="font-bold underline decoration-indigo-300">
          better cash flow
        </span>
        , lower holding costs, and stronger ROI potential compared to high-tax
        markets.
      </p>
    </div>
  </div>
</section>


<div className="container mx-auto space-y-12 p-8 font-sans text-slate-800 bg-gray-100/50 mt-8">
  <section>
    <div className="flex items-center gap-3 mb-6">
      <span className="text-4xl">📄</span>
      <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
        Taxes: Why People Are Leaving Illinois
      </h2>
    </div>
    {/* New Image and Text Intro Section */}
    <div className="mb-10 grid grid-cols-1 md:grid-cols-5 gap-8 items-center border-b border-slate-100 pb-10">
      <img
        src="https://cst.brightspotcdn.com/dims4/default/b3bb6dc/2147483647/strip/true/crop/6000x4000+0+0/resize/840x560!/quality/90/?url=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2FWh_BcyM4ylgHVwrVORknvFO0_q8%3D%2F0x0%3A6000x4000%2F6000x4000%2Ffilters%3Afocal%283000x2000%3A3001x2001%29%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_asset%2Ffile%2F24418608%2FIllinois_State_Capital_Springfield_02.jpg"
        alt="Visual comparison: Illinois Skyline vs Tennessee Landscape"
        className="col-span-1 md:col-span-2 rounded-3xl shadow-lg border border-slate-100 object-cover w-full h-full"
      />
      <div className="col-span-1 md:col-span-3 space-y-4">
        <p className="text-lg leading-relaxed text-slate-600">
          The financial contrast between Illinois and Tennessee is one of the
          starkest in the country. Thousands of residents cite the oppressive
          tax burden as their primary motivator for making the move south.
        </p>
        <p className="text-sm font-semibold text-slate-900 bg-slate-50 p-3 rounded-lg border border-slate-100">
          👉 By moving to Tennessee, an average household could see their yearly
          available cash flow increase by thousands, simply by eliminating state
          income tax.
        </p>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
          <span className="text-green-600">✓</span> No State Income Tax in TN
        </h3>
        <div className="space-y-3 mb-6">
          <div className="flex justify-between text-sm">
            <span>Illinois:</span>{" "}
            <span className="font-semibold text-red-500">4.95%</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Tennessee:</span>{" "}
            <span className="font-semibold text-green-600 underline decoration-2 underline-offset-4">
              0%
            </span>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
            On $100,000 Income:
          </p>
          <p className="flex justify-between items-center mb-1 text-slate-600">
            <span>Illinois Tax:</span>{" "}
            <span className="font-mono font-bold">≈$4,950</span>
          </p>
          <p className="flex justify-between items-center text-green-600 font-bold">
            <span>Tennessee Tax:</span>{" "}
            <span className="font-mono text-xl">$0</span>
          </p>
        </div>
      </div>
      <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
          <span className="text-green-600">✓</span> Massive Property Tax Gap
        </h3>
        <div className="space-y-4">
          <div className="p-3 bg-red-50 rounded-lg border border-red-100">
            <p className="text-xs font-bold text-red-800 uppercase mb-1">
              Illinois Rate
            </p>
            <p className="text-xl font-bold text-red-600">~2.08%</p>
            <p className="text-xs text-red-500 font-medium">
              (One of the highest in the U.S.)
            </p>
          </div>
          <div className="p-3 bg-green-50 rounded-lg border border-green-100">
            <p className="text-xs font-bold text-green-800 uppercase mb-1">
              Tennessee Rate
            </p>
            <p className="text-xl font-bold text-green-600">~0.49%</p>
          </div>
        </div>
        <p className="mt-4 text-sm font-semibold text-slate-900 italic">
          👉 This is the #1 reason people leave Illinois.
        </p>
      </div>
    </div>
  </section>
  <section className="pt-12 border-t border-slate-100">
    <div className="flex items-center gap-3 mb-8">
      <span className="text-3xl">🏙️</span>{" "}
      <span className="text-xl text-slate-300">vs</span>{" "}
      <span className="text-3xl">🏔️</span>
      <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
        Lifestyle: Illinois vs Tennessee
      </h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900">
          What You Gain Moving to TN
        </h3>
        <ul className="space-y-3">
          <li className="flex items-center gap-3 p-3 bg-indigo-50 rounded-xl text-indigo-900 font-medium border border-indigo-100">
            <span className="w-2 h-2 bg-indigo-400 rounded-full" /> Lower cost
            of living
          </li>
          <li className="flex items-center gap-3 p-3 bg-indigo-50 rounded-xl text-indigo-900 font-medium border border-indigo-100">
            <span className="w-2 h-2 bg-indigo-400 rounded-full" /> Less
            congestion than Chicago
          </li>
          <li className="flex items-center gap-3 p-3 bg-indigo-50 rounded-xl text-indigo-900 font-medium border border-indigo-100">
            <span className="w-2 h-2 bg-indigo-400 rounded-full" /> Mountains,
            lakes, outdoor lifestyle
          </li>
          <li className="flex items-center gap-3 p-3 bg-indigo-50 rounded-xl text-indigo-900 font-medium border border-indigo-100">
            <span className="w-2 h-2 bg-indigo-400 rounded-full" /> Warmer
            winters
          </li>
        </ul>
      </div>
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900">What You Lose</h3>
        <ul className="space-y-3 text-slate-500">
          <li className="flex items-center gap-3 p-3 border border-slate-100 rounded-xl">
            <span className="w-2 h-2 bg-slate-300 rounded-full" /> Big-city
            infrastructure (Chicago level)
          </li>
          <li className="flex items-center gap-3 p-3 border border-slate-100 rounded-xl">
            <span className="w-2 h-2 bg-slate-300 rounded-full" /> Public
            transit systems
          </li>
          <li className="flex items-center gap-3 p-3 border border-slate-100 rounded-xl">
            <span className="w-2 h-2 bg-slate-300 rounded-full" /> Midwest
            proximity
          </li>
        </ul>
      </div>
    </div>
    <div className="mt-10 p-6 bg-slate-900 rounded-3xl text-white">
      <h4 className="text-indigo-400 font-bold uppercase tracking-widest text-xs mb-4">
        The Lifestyle Shift
      </h4>
      <div className="flex flex-col md:flex-row gap-6 justify-between items-center text-center md:text-left">
        <div>
          <p className="text-sm text-slate-400">Illinois is...</p>
          <p className="text-xl font-bold">
            Urban, fast-paced, &amp; industrial
          </p>
        </div>
        <div className="text-indigo-500 text-2xl font-black">➔</div>
        <div>
          <p className="text-sm text-slate-400 text-right md:text-left">
            Tennessee is...
          </p>
          <p className="text-xl font-bold text-indigo-300">
            Relaxed, scenic, &amp; community-focused
          </p>
        </div>
      </div>
    </div>
  </section>
</div>


<div className="container mx-auto p-8 font-sans text-slate-800 bg-white">
  <section className="mb-16">
    <div className="flex items-center gap-3 mb-8">
      <span className="text-4xl text-red-500">📍</span>
      <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
        Best Places in Tennessee for Illinois Transplants
      </h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="group border border-slate-200 rounded-2xl p-6 hover:shadow-xl hover:border-orange-200 transition-all bg-gradient-to-br from-white to-orange-50/30">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl">🔥</span>
          <h3 className="text-xl font-bold text-slate-900">Nashville</h3>
        </div>
        <ul className="space-y-2 text-slate-600">
          <li className="flex items-center gap-2">
            <span className="text-orange-500">🏙️</span> Closest big-city feel to
            Chicago
          </li>
          <li className="flex items-center gap-2">
            <span className="text-orange-500">💼</span> Strong job market
          </li>
          <li className="flex items-center gap-2 font-medium text-slate-800">
            <span className="text-orange-500">💰</span> Higher cost
          </li>
        </ul>
      </div>
      <div className="group border border-slate-200 rounded-2xl p-6 hover:shadow-xl hover:border-orange-200 transition-all bg-gradient-to-br from-white to-orange-50/30">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl">🔥</span>
          <h3 className="text-xl font-bold text-slate-900">Knoxville</h3>
        </div>
        <ul className="space-y-2 text-slate-600">
          <li className="flex items-center gap-2">
            <span className="text-orange-500">⛰️</span> Close to Smoky Mountains
          </li>
          <li className="flex items-center gap-2">
            <span className="text-orange-500">📈</span> Affordable and growing
            fast
          </li>
          <li className="flex items-center gap-2">
            <span className="text-orange-500">🎓</span> University of TN energy
          </li>
        </ul>
      </div>
      <div className="group border border-slate-200 rounded-2xl p-6 hover:shadow-xl hover:border-orange-200 transition-all bg-gradient-to-br from-white to-orange-50/30">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl">🔥</span>
          <h3 className="text-xl font-bold text-slate-900">Chattanooga</h3>
        </div>
        <ul className="space-y-2 text-slate-600">
          <li className="flex items-center gap-2">
            <span className="text-orange-500">🛶</span> Outdoor lifestyle + tech
            growth
          </li>
          <li className="flex items-center gap-2">
            <span className="text-orange-500">⚡</span> One of the
            fastest-growing cities
          </li>
          <li className="flex items-center gap-2">
            <span className="text-orange-500">🌐</span> Gig-speed internet (EPB)
          </li>
        </ul>
      </div>
      <div className="group border border-slate-200 rounded-2xl p-6 hover:shadow-xl hover:border-orange-200 transition-all bg-gradient-to-br from-white to-orange-50/30">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl">🔥</span>
          <h3 className="text-xl font-bold text-slate-900 leading-tight">
            Tri-Cities{" "}
            <span className="text-sm font-normal block text-slate-500">
              (Johnson City / Kingsport / Bristol)
            </span>
          </h3>
        </div>
        <ul className="space-y-2 text-slate-600">
          <li className="flex items-center gap-2">
            <span className="text-orange-500">🏠</span> Very affordable housing
          </li>
          <li className="flex items-center gap-2">
            <span className="text-orange-500">💹</span> Strong for investors
          </li>
          <li className="flex items-center gap-2">
            <span className="text-orange-500">🏘️</span> Growing relocation
            demand
          </li>
        </ul>
      </div>
    </div>
  </section>
  <section className="bg-slate-900 rounded-[2rem] p-8 md:p-12 text-white overflow-hidden relative">
    <div className="relative z-10">
      <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-6">
        <span className="text-3xl">📈</span>
        <h2 className="text-3xl font-extrabold tracking-tight">
          Job Market Comparison
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-indigo-400 font-bold uppercase tracking-widest text-sm mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-indigo-400 rounded-full" /> Illinois
            Strengths
          </h3>
          <ul className="space-y-6">
            <li className="flex items-center justify-between">
              <span className="text-lg">Finance (Chicago)</span>
              <span className="text-slate-500 text-sm">Primary Hub</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-lg">Corporate HQs</span>
              <span className="text-slate-500 text-sm">High Volume</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-lg">Healthcare</span>
              <span className="text-slate-500 text-sm">Established</span>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-green-400 font-bold uppercase tracking-widest text-sm mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full" /> Tennessee
            Strengths
          </h3>
          <ul className="space-y-6">
            <li className="flex items-center justify-between">
              <span className="text-lg">Healthcare (Nashville Hub)</span>
              <span className="text-green-400 font-bold underline underline-offset-4 decoration-2">
                Growing
              </span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-lg">Manufacturing</span>
              <span className="text-green-400 font-bold">Strong</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-lg">Logistics</span>
              <span className="text-green-400 font-bold underline underline-offset-4 decoration-2">
                Leading
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/10 flex flex-col md:flex-row items-center gap-6">
        <p className="text-lg font-semibold text-white">
          Tennessee is growing fastest in:
        </p>
        <div className="flex flex-wrap gap-3">
          <span className="px-4 py-2 bg-indigo-600 rounded-full text-sm font-bold">
            Nashville
          </span>
          <span className="px-4 py-2 bg-indigo-600 rounded-full text-sm font-bold">
            Knoxville
          </span>
          <span className="px-4 py-2 bg-indigo-600 rounded-full text-sm font-bold">
            Chattanooga
          </span>
        </div>
      </div>
    </div>
    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl" />
  </section>
</div>



<div className=" bg-[#0f172a] text-slate-200 p-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-12">

        {/* Header Section */}
        <header className="border-l-4 border-amber-500 pl-6">
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight">
            Cost to Move: <span className="text-amber-500">IL → TN</span>
          </h1>
          <p className="mt-2 text-slate-400">Mid-range distance • Moderate cost estimation</p>
        </header>

        {/* Pricing Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { type: 'DIY Truck', cost: '$1,000 – $3,000', color: 'bg-blue-500/10' },
            { type: 'Moving Company', cost: '$3,000 – $7,500', color: 'bg-purple-500/10' },
            { type: 'Full-Service', cost: '$5,000 – $10,000', color: 'bg-emerald-500/10' }
          ].map((item, i) => (
            <div key={i} className={`p-6 rounded-2xl border border-white/10 backdrop-blur-md ${item.color}`}>
              <h3 className="text-sm uppercase tracking-widest text-slate-400 mb-2">{item.type}</h3>
              <p className="text-2xl font-bold text-white">{item.cost}</p>
            </div>
          ))}
        </section>

        {/* Pros & Cons Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white/5 p-8 rounded-3xl border border-white/10">
          <div>
            <h2 className="text-xl font-bold text-emerald-400 mb-6 flex items-center gap-2">
              <span className="p-1 bg-emerald-400/20 rounded-lg text-xs">✓</span> Pros
            </h2>
            <ul className="space-y-4">
              {['No state income tax', 'Much lower property taxes', 'Lower cost of living', 'Better investment potential', 'Warmer climate'].map((pro, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <div className="h-1.5 w-1.5 bg-emerald-500 rounded-full" /> {pro}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-rose-400 mb-6 flex items-center gap-2">
              <span className="p-1 bg-rose-400/20 rounded-lg text-xs">✕</span> Cons
            </h2>
            <ul className="space-y-4">
              {['Smaller metro areas', 'Less public transportation', 'Fewer corporate hubs'].map((con, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <div className="h-1.5 w-1.5 bg-rose-500 rounded-full" /> {con}
                </li>
              ))}
            </ul>
          </div>
        </section>

      </div>
    </div>


    <div className="container mx-auto my-12 p-8 bg-white rounded-2xl border border-gray-100">
  <div className="mb-12 border-b border-gray-100 pb-8">
    <div className="flex items-center gap-3 mb-4">
      <span className="text-4xl">📊</span>
      <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
        Why People Are Moving from Illinois to Tennessee
      </h1>
    </div>
    <p className="text-lg font-medium text-gray-600 mb-6">Top reasons:</p>
    <ol className="space-y-3">
      <li className="flex items-start">
        <span className="font-bold text-blue-600 mr-3">1.</span>
        <span>
          <strong className="text-gray-900">High property taxes</strong>{" "}
          <span className="text-gray-500 italic">(biggest driver)</span>
        </span>
      </li>
      <li className="flex items-start">
        <span className="font-bold text-blue-600 mr-3">2.</span>
        <span className="font-semibold">High overall tax burden</span>
      </li>
      <li className="flex items-start">
        <span className="font-bold text-blue-600 mr-3">3.</span>
        <span className="font-semibold">Cost of living rising</span>
      </li>
      <li className="flex items-start">
        <span className="font-bold text-blue-600 mr-3">4.</span>
        <span className="font-semibold">Better affordability in Tennessee</span>
      </li>
      <li className="flex items-start">
        <span className="font-bold text-blue-600 mr-3">5.</span>
        <span className="font-semibold">Better quality of life</span>
      </li>
    </ol>
  </div>

  <section className="mb-12">
    <div className="flex items-center gap-3 mb-6">
      <span className="text-4xl">🤔</span>
      <h2 className="text-2xl font-bold text-gray-900">
        Is Moving from Illinois to Tennessee Worth It?
      </h2>
    </div>
    <p className="text-lg mb-8">
      For most people —{" "}
      <span className="bg-yellow-100 px-2 py-1 rounded font-black uppercase tracking-wider">
        absolutely yes.
      </span>
    </p>
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-green-50 p-6 rounded-xl border border-green-100">
        <p className="flex items-center gap-2 font-bold text-green-800 mb-4">
          👉 Tennessee is ideal if you want:
        </p>
        <ul className="list-disc list-inside space-y-2 text-green-900 opacity-90">
          <li>Lower taxes</li>
          <li>Lower monthly expenses</li>
          <li>Better long-term financial outlook</li>
        </ul>
      </div>
      <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
        <p className="flex items-center gap-2 font-bold text-orange-800 mb-4">
          👉 Illinois may still be better if:
        </p>
        <ul className="list-disc list-inside space-y-2 text-orange-900 opacity-90">
          <li>You need a large metro job market like Chicago</li>
          <li>You rely on public transit</li>
        </ul>
      </div>
    </div>
  </section>

  <section className="mb-12 bg-gray-900 text-white p-8 rounded-2xl">
    <div className="flex items-center gap-3 mb-4">
      <span className="text-4xl">🔥</span>
      <h2 className="text-2xl font-bold text-white uppercase tracking-tight">
        Final Verdict
      </h2>
    </div>
    <p className="text-xl mb-6 font-light">
      Moving from Illinois to Tennessee is one of the{" "}
      <strong className="text-yellow-400 font-bold underline underline-offset-4">
        biggest financial upgrades you can make.
      </strong>
    </p>
    <p className="mb-4 font-semibold text-gray-300">You'll typically:</p>
    <ul className="grid grid-cols-1 gap-3">
      <li className="flex items-center gap-3">
        <span className="text-green-400">✓</span> Save thousands per year
      </li>
      <li className="flex items-center gap-3">
        <span className="text-green-400">✓</span> Pay drastically less in
        property taxes
      </li>
      <li className="flex items-center gap-3">
        <span className="text-green-400">✓</span> Get more value for your money
      </li>
    </ul>
  </section>

  <section className="bg-blue-50 border-2 border-blue-200 p-8 rounded-2xl text-center">
    <div className="flex justify-center mb-4">
      <span className="text-5xl">📦</span>
    </div>
    <h2 className="text-2xl font-extrabold text-blue-900 mb-2">
      Start Your Move to Tennessee
    </h2>
    <p className="text-blue-700 mb-6 font-medium">
      Looking for homes, relocation help, or the best areas?
    </p>
    <div className="bg-white p-6 rounded-lg shadow-sm inline-block w-full max-w-sm">
      <p className="font-bold text-gray-900 mb-4">
        👉 Visit <span className="text-blue-600">WhyTennessee.com</span> for:
      </p>
      <ul className="text-left space-y-2 max-w-max mx-auto">
        <li className="flex items-center gap-2">🏠 Homes for sale</li>
        <li className="flex items-center gap-2">📋 Relocation guides</li>
        <li className="flex items-center gap-2">📍 Area breakdowns</li>
      </ul>
    </div>
  </section>

</div>



        </FrontendLayout>
    );
}
