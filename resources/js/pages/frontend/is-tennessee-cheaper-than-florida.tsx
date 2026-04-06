import FrontendLayout from '@/layouts/frontend-layout';
import { Hero } from '@/components/sections/frontend/hero';
import {
  AlertCircle,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  CircleMinus,
  Flame,
  Home,
  Lightbulb,
  Map,
  MapPin,
  Package,
  Shield,
  Zap,
} from 'lucide-react';
import { Head, Link } from '@inertiajs/react';

const quickAnswerRows = [
  { category: 'Housing', detail: 'Tennessee is usually cheaper' },
  { category: 'Property Taxes', detail: 'Tennessee slightly lower' },
  { category: 'Insurance', detail: 'MUCH cheaper in Tennessee' },
  { category: 'Cost of Living', detail: 'Tennessee wins overall' },
];

const heroSlides = [
  '/assets/images/florida-tennessee/gettyimages-643977867.jpg',
  '/assets/images/florida-tennessee/key-biscayne.jpg',
  '/assets/images/live-in-tennessee/tennessee-state-capitol-building-nashville-aerial.jpeg',
];

export default function IsTennesseeCheaperThanFlorida() {
  return (
    <FrontendLayout activePage="moving-to-tennessee" subPage="Is Tennessee cheaper than Florida? (2026)">
      <Head title="Is Tennessee Cheaper Than Florida? 2026 Cost of Living Comparison">
        <meta
          name="description"
          content="Is Tennessee cheaper than Florida? Compare housing, taxes, insurance, and cost of living to see which state saves you more money in 2026."
        />
      </Head>
      <Hero
        slides={heroSlides}
        title={<>2026 Cost of Living Comparison</>}
        description={
          <>
            <p className="mb-2 text-lg font-medium text-white/95">Is Tennessee Cheaper Than Florida?</p>
            <p className="mb-2">
              Yes — Tennessee is generally cheaper than Florida, especially when it comes to housing, insurance, and
              overall monthly expenses.
            </p>
            <p className="mb-2">
              At first glance, both states look similar: no state income tax, warm climates, popular relocation
              destinations. But once you break down the real costs, Tennessee often comes out ahead.
            </p>
            <p>Let’s take a closer look below.</p>
          </>
        }
        width="max-w-3xl"
        height="h-[calc(100vh-80px)] md:h-[550px]"
      />

      <section className="border-t border-slate-800 bg-primary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="mb-10 text-center lg:text-left">
                <h2 className="inline-flex flex-wrap items-center justify-center gap-3 text-3xl font-semibold tracking-tight text-white lg:justify-start md:text-4xl">
                  <BarChart3 className="h-10 w-10 shrink-0 text-indigo-400" aria-hidden />
                  Quick Answer (Fast Breakdown)
                </h2>
              </div>
              <div className="overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-800/40">
                <div className="grid grid-cols-2 border-b border-slate-700/50 bg-slate-800/80 p-5">
                  <div className="text-sm font-medium uppercase tracking-wide text-slate-400">Category</div>
                  <div className="text-sm font-medium uppercase tracking-wide text-indigo-400">Takeaway</div>
                </div>
                <div className="divide-y divide-slate-700/50">
                  {quickAnswerRows.map((row) => (
                    <div key={row.category} className="grid grid-cols-2 items-center p-5 hover:bg-slate-800/60">
                      <div className="text-base font-medium text-slate-200">{row.category}</div>
                      <div className="text-base text-white">{row.detail}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mx-auto mt-10 max-w-2xl rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center lg:mx-0 lg:text-left">
                <p className="text-lg font-medium text-emerald-200">Winner: Tennessee (especially long-term)</p>
              </div>
            </div>
            <div className="relative lg:sticky lg:top-28">
              <div className="absolute inset-0 -z-10 translate-x-2 translate-y-2 rotate-1 rounded-2xl bg-cyan-500/15" />
              <img
                src="/assets/images/florida-tennessee/key-biscayne.jpg"
                alt="Florida coastal area — cost comparison context"
                className="aspect-[4/3] w-full rounded-2xl border border-slate-600/50 object-cover shadow-2xl"
                loading="lazy"
              />
              <p className="mt-3 text-center text-xs text-slate-500 lg:text-left">
                Coastal Florida markets often carry higher housing and insurance costs than Tennessee.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-100 bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div className="order-2 space-y-8 lg:order-1">
              <div>
                <h2 className="mb-6 text-3xl font-semibold tracking-tight text-primary md:text-4xl">
                  Housing Costs: Tennessee Has the Edge
                </h2>
                <p className="mb-8 max-w-xl text-lg text-slate-600">
                  Florida home prices have increased rapidly in recent years.
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                  <h3 className="mb-2 text-sm font-medium text-slate-500">Median Home Prices (2026)</h3>
                  <p className="text-lg text-slate-800">
                    <strong>Florida:</strong> ~$400K+
                  </p>
                  <p className="text-lg text-slate-800">
                    <strong>Tennessee:</strong> ~$300K–$350K
                  </p>
                  <p className="mt-4 font-medium text-primary">That’s a significant difference upfront</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                  <h3 className="mb-2 text-sm font-medium text-slate-500">Rent Comparison</h3>
                  <p className="mb-2 text-slate-700">
                    <strong>Florida:</strong> $1,800 – $2,500+
                  </p>
                  <p className="text-slate-700">
                    <strong>Tennessee:</strong> $1,200 – $1,800
                  </p>
                </div>
              </div>
              <div className="rounded-2xl border border-indigo-100 bg-indigo-50 p-6 md:p-8">
                <Lightbulb className="mb-3 h-9 w-9 text-indigo-600" aria-hidden />
                <p className="text-indigo-950">
                  In areas like Johnson City, Kingsport, and Chattanooga, housing is far more affordable than most
                  Florida cities.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute inset-0 -z-10 translate-x-2 translate-y-2 rotate-2 rounded-2xl bg-slate-100" />
                <img
                  src="/assets/images/live-in-tennessee/tennessee-state-capitol-building-nashville-aerial.jpeg"
                  alt="Tennessee housing and Nashville skyline"
                  className="aspect-[4/3] w-full rounded-2xl object-cover shadow-xl"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative hidden h-[480px] lg:block">
              <img
                src="/assets/images/florida-tennessee/florida3.jpg"
                alt="Florida residential context"
                className="absolute top-0 right-0 z-10 h-3/5 w-3/5 rounded-2xl object-cover shadow-xl"
                loading="lazy"
              />
              <img
                src="/assets/images/live-in-tennessee/pexels-kelly-2833713-2048x1150.jpg"
                alt="Tennessee landscape and communities"
                className="absolute bottom-0 left-0 z-20 h-3/5 w-3/5 rounded-2xl border-4 border-white object-cover shadow-lg"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="mb-6 text-3xl font-semibold tracking-tight text-primary md:text-4xl">
                Property Taxes: Close, But Tennessee Still Wins
              </h2>
              <div className="mb-8 grid gap-6 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="mb-2 font-semibold">Florida</h3>
                  <p className="text-xl font-bold text-slate-900">~0.8% – 1.0%</p>
                </div>
                <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-6">
                  <h3 className="mb-2 font-semibold text-indigo-900">Tennessee</h3>
                  <p className="text-xl font-bold text-indigo-950">~0.4% – 0.6%</p>
                </div>
              </div>
              <div className="rounded-2xl bg-primary p-8 text-white">
                <p className="mb-4 text-sm font-medium uppercase tracking-wide text-slate-400">Example: On a $350,000 home</p>
                <ul className="mb-4 space-y-2">
                  <li className="flex justify-between border-b border-slate-700/60 pb-2">
                    <span>Florida:</span> <span>~$2,800 – $3,500/year</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Tennessee:</span> <span className="text-emerald-400">~$1,500 – $2,100/year</span>
                  </li>
                </ul>
                <p className="font-medium text-amber-300">Tennessee still saves you money annually</p>
              </div>
            </div>
            <div className="relative aspect-[4/3] lg:hidden">
              <img
                src="/assets/images/florida-tennessee/florida3.jpg"
                alt="Florida homes"
                className="h-full w-full rounded-2xl object-cover shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-100 bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-4 text-center text-3xl font-semibold tracking-tight text-primary md:text-4xl">
            Insurance Costs: This Is Where Tennessee CRUSHES Florida
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-slate-600">
            This is one of the biggest hidden costs in Florida.
          </p>
          <div className="mb-10 grid gap-8 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-rose-200 shadow-lg">
              <img
                src="/assets/images/florida-tennessee/south-beach-miami-florida_HERO.jpg"
                alt="Coastal Florida — higher insurance risk"
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="bg-rose-50 p-8">
                <h3 className="mb-4 flex items-center gap-2 font-semibold text-rose-900">
                  <Shield className="h-5 w-5" aria-hidden />
                  Florida
                </h3>
                <ul className="space-y-3 text-sm text-rose-950">
                  <li className="flex gap-2">
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                    High homeowners insurance (hurricanes, flooding)
                  </li>
                  <li className="flex gap-2">
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                    Rising premiums (often $3,000–$8,000/year)
                  </li>
                </ul>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-emerald-200 shadow-lg">
              <img
                src="/assets/images/live-in-tennessee/pexels-kelly-2833713-2048x1150.jpg"
                alt="Tennessee — lower insurance risk"
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="bg-emerald-50 p-8">
                <h3 className="mb-4 flex items-center gap-2 font-semibold text-emerald-900">
                  <CheckCircle2 className="h-5 w-5" aria-hidden />
                  Tennessee
                </h3>
                <ul className="space-y-3 text-sm text-emerald-950">
                  <li className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                    Much lower risk
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                    Typically $800–$1,500/year
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p className="text-center text-lg font-semibold text-primary">This alone can save you thousands every year</p>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative order-2 lg:order-1">
              <img
                src="/assets/images/florida-tennessee/UF-MH.png"
                alt="Florida lifestyle"
                className="aspect-video w-full rounded-2xl object-cover object-center shadow-lg"
                loading="lazy"
              />
            </div>
            <div className="order-1 text-center lg:order-2 lg:text-left">
              <h2 className="mb-6 text-3xl font-semibold tracking-tight text-primary">Income Tax: Tie</h2>
              <p className="mb-6 text-lg text-slate-600">
                <strong>Tennessee:</strong> 0% &nbsp;·&nbsp; <strong>Florida:</strong> 0%
              </p>
              <p className="text-slate-600">Both are great for income taxes — no state tax on wages in either state.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-100 bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-10 text-center text-3xl font-semibold tracking-tight text-primary">
            Utilities &amp; Monthly Expenses
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-slate-600">
            Florida can actually be more expensive than people expect:
          </p>
          <div className="mb-12 grid gap-8 lg:grid-cols-2">
            <div className="rounded-xl border border-slate-200 p-6 lg:p-8">
              <h3 className="mb-4 font-semibold text-slate-800">Florida Costs</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>High A/C usage year-round</li>
                <li>Insurance bundled costs higher</li>
                <li>HOA fees common in many areas</li>
              </ul>
            </div>
            <div className="rounded-xl border border-indigo-100 bg-indigo-50/50 p-6 lg:p-8">
              <h3 className="mb-4 font-semibold text-indigo-900">Tennessee Costs</h3>
              <ul className="space-y-2 text-sm text-indigo-950">
                <li>More balanced seasons</li>
                <li>Lower overall utility costs in many areas</li>
              </ul>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl shadow-lg">
            <img
              src="/assets/images/live-in-tennessee/tennessee-state-capitol-building-nashville-aerial.jpeg"
              alt="Tennessee monthly living costs"
              className="h-52 w-full object-cover md:h-64"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 to-transparent" />
            <p className="absolute bottom-4 left-4 right-4 text-center text-sm font-medium text-white md:text-base">
              Tennessee typically ends up cheaper month-to-month
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-8 text-3xl font-semibold tracking-tight text-primary">Everyday Costs</h2>
              <ul className="space-y-3 text-lg text-slate-600">
                <li>
                  <strong>Groceries</strong> → Similar
                </li>
                <li>
                  <strong>Gas</strong> → Florida sometimes higher
                </li>
                <li>
                  <strong>Insurance</strong> → Much cheaper in Tennessee
                </li>
              </ul>
              <p className="mt-8 font-medium text-primary">Overall: Tennessee has the advantage</p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 -z-10 translate-x-2 translate-y-2 rounded-2xl bg-white" />
              <img
                src="/assets/images/moving-checklist/pexels-chaitaastic-3722911-scaled.jpg"
                alt="Planning your budget — everyday expenses"
                className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative border-b border-slate-800 py-24 bg-cover bg-fixed bg-center"
        style={{ backgroundImage: "url('/assets/images/florida-tennessee/south-beach-miami-florida_HERO.jpg')" }}
      >
        <div className="absolute inset-0 bg-slate-900/88" />
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-center text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Where Tennessee Is Much Cheaper
          </h2>
          <div className="grid gap-10 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <h3 className="mb-4 font-semibold text-indigo-200">Big savings in:</h3>
              <ul className="space-y-2 text-slate-200">
                {['Johnson City', 'Kingsport', 'Bristol', 'Knoxville'].map((c) => (
                  <li key={c} className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-secondary" aria-hidden /> {c}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <h3 className="mb-4 font-semibold text-slate-300">Compared to:</h3>
              <ul className="space-y-2 text-slate-200">
                {['Miami', 'Tampa', 'Orlando', 'Fort Lauderdale'].map((c) => (
                  <li key={c} className="flex items-center gap-2">
                    <CircleMinus className="h-4 w-4 text-slate-400" aria-hidden /> {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-10 text-center text-lg font-medium text-amber-200">
            Florida metro areas are significantly more expensive
          </p>
        </div>
      </section>

      <section className="border-b border-slate-100 bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative order-2 lg:order-1">
              <img
                src="/assets/images/florida-tennessee/key-biscayne.jpg"
                alt="Florida beach lifestyle"
                className="aspect-[4/3] w-full rounded-2xl object-cover shadow-xl"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="mb-6 flex items-center gap-3 text-3xl font-semibold tracking-tight text-primary">
                <AlertCircle className="h-9 w-9 text-secondary" aria-hidden />
                When Florida Might Be Better
              </h2>
              <p className="mb-4 text-slate-600">Florida could still be a better fit if you:</p>
              <ul className="mb-6 space-y-2 text-slate-600">
                {[
                  'Want year-round warm weather',
                  'Prefer beach/coastal living',
                  'Work in tourism, hospitality, or coastal industries',
                ].map((t) => (
                  <li key={t} className="flex gap-2">
                    <span className="text-secondary">•</span> {t}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-slate-600">But you’ll usually pay more for that lifestyle.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-slate-800 bg-primary py-24 text-center">
        <img
          src="/assets/images/live-in-tennessee/pexels-kelly-2833713-2048x1150.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-20"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-primary/92" />
        <div className="relative z-10 mx-auto max-w-3xl px-6">
          <h2 className="mb-6 flex items-center justify-center gap-3 text-3xl font-semibold text-white">
            <Flame className="h-10 w-10 text-secondary" aria-hidden />
            Final Verdict
          </h2>
          <p className="mb-8 text-lg text-slate-200">
            Tennessee is cheaper than Florida in most categories — especially housing, insurance, and total monthly cost.
          </p>
          <p className="mb-4 font-medium text-white">You’ll typically:</p>
          <div className="mx-auto mb-6 inline-block text-left text-slate-200">
            {['Spend less on housing', 'Save thousands on insurance', 'Have a lower overall cost of living'].map((line) => (
              <p key={line} className="mb-2 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" aria-hidden />
                {line}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-indigo-50 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="relative hidden overflow-hidden rounded-2xl shadow-lg lg:block">
              <img
                src="/assets/images/florida-tennessee/gettyimages-643977867.jpg"
                alt="Moving from Florida to Tennessee"
                className="aspect-[4/3] h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="text-center lg:text-left">
              <h2 className="mb-4 text-2xl font-semibold text-primary">Thinking About Moving From Florida?</h2>
              <p className="mb-6 text-slate-600">
                Our full guide covers jobs, cities, lifestyle, and what to expect when you make the move.
              </p>
              <Link
                href={route('frontend.moving-from-florida')}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-800"
              >
                Moving from Florida to Tennessee
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm lg:justify-start">
                <Link
                  href={route('frontend.cost-of-living-in-tennessee')}
                  className="font-medium text-primary underline-offset-2 hover:underline"
                >
                  Cost of living in Tennessee
                </Link>
                <span className="text-slate-300">·</span>
                <Link href={route('frontend.livetennessee')} className="font-medium text-primary underline-offset-2 hover:underline">
                  Best places to live in Tennessee
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative order-2 lg:order-1">
              <div className="absolute inset-0 -z-10 translate-x-2 translate-y-2 rotate-2 rounded-2xl bg-slate-100" />
              <img
                src="/assets/images/live-in-tennessee/tennessee-state-capitol-building-nashville-aerial.jpeg"
                alt="Start your move to Tennessee"
                className="aspect-[4/3] w-full rounded-2xl object-cover shadow-xl"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="mb-6 flex items-center gap-3 text-3xl font-semibold tracking-tight text-primary">
                <Zap className="h-8 w-8 text-secondary" aria-hidden />
                Start Your Move to Tennessee
              </h2>
              <p className="mb-6 text-slate-600">We help people relocate to Tennessee every day.</p>
              <ul className="mb-8 space-y-2 text-slate-600">
                {['Find homes in your budget', 'Discover the best areas', 'Get local insights'].map((t) => (
                  <li key={t} className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden /> {t}
                  </li>
                ))}
              </ul>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
                <h3 className="mb-8 flex items-center gap-3 text-xl font-semibold text-primary">
                  <Package className="h-8 w-8 text-secondary" aria-hidden />
                  Next steps
                </h3>
                <div className="flex flex-col gap-4">
                  <Link
                    href={route('frontend.home-for-sale')}
                    className="flex items-center justify-center gap-2 rounded-xl bg-primary py-4 text-sm font-medium text-white hover:bg-slate-800"
                  >
                    <Home className="h-4 w-4" aria-hidden />
                    View Homes for Sale in Tennessee
                  </Link>
                  <Link
                    href={route('frontend.tennessee-relocated-guide-pdf')}
                    className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white py-4 text-sm font-medium text-primary hover:bg-slate-100"
                  >
                    <Map className="h-4 w-4" aria-hidden />
                    Get a Free Relocation Guide (PDF)
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </FrontendLayout>
  );
}
