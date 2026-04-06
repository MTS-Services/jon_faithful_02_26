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
  Scale,
  Wallet,
} from 'lucide-react';
import { Head, Link } from '@inertiajs/react';

const quickAnswerRows = [
  { category: 'Housing', detail: 'Slight edge to Tennessee' },
  { category: 'Property Taxes', detail: 'MUCH cheaper in Tennessee' },
  { category: 'Income Tax', detail: 'Tie (both 0%)' },
  { category: 'Monthly Cost', detail: 'Tennessee is usually lower' },
];

const heroSlides = [
  '/assets/images/texas-to-tennessee/TXHeader2.jpg',
  '/assets/images/live-in-tennessee/tennessee-state-capitol-building-nashville-aerial.jpeg',
  '/assets/images/texas-to-tennessee/pigeon-forge-tennessee-Kevin-Ruck.jpg',
];

export default function IsTennesseeCheaperThanTexas() {
  return (
    <FrontendLayout activePage="moving-to-tennessee" subPage="Is Tennessee cheaper than Texas? (2026)">
      <Head title="Is Tennessee Cheaper Than Texas? Full 2026 Cost Comparison">
        <meta
          name="description"
          content="Is Tennessee cheaper than Texas? Compare housing, taxes, utilities, and overall cost of living to see which state saves you more money in 2026."
        />
      </Head>
      <Hero
        slides={heroSlides}
        title={<>Full 2026 Cost Comparison</>}
        description={
          <>
            <p className="mb-2 text-lg font-medium text-white/95">Is Tennessee Cheaper Than Texas?</p>
            <p className="mb-2">
              Yes — Tennessee is generally cheaper than Texas, especially when you factor in property taxes, long-term
              housing costs, and overall monthly expenses.
            </p>
            <p className="mb-2">But the difference isn’t always obvious at first glance.</p>
            <p>Let’s break it down clearly below.</p>
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
                  Quick Answer (60-Second Breakdown)
                </h2>
                <p className="mt-4 text-slate-400">If you just want the quick answer:</p>
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
                <p className="text-lg font-medium text-emerald-200">Overall Winner: Tennessee (especially long-term)</p>
              </div>
            </div>
            <div className="relative lg:sticky lg:top-28">
              <div className="absolute inset-0 -z-10 translate-x-2 translate-y-2 rotate-1 rounded-2xl bg-indigo-500/20" />
              <img
                src="/assets/images/texas-to-tennessee/PLACES_Cities.jpg"
                alt="Tennessee cities and neighborhoods"
                className="aspect-[4/3] w-full rounded-2xl border border-slate-600/50 object-cover shadow-2xl"
                loading="lazy"
              />
              <p className="mt-3 text-center text-xs text-slate-500 lg:text-left">Tennessee offers strong value in mid-size and smaller markets.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-100 bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div className="order-2 lg:order-1">
              <h2 className="mb-6 text-3xl font-semibold tracking-tight text-primary md:text-4xl">
                Housing Costs: Closer Than You Think
              </h2>
              <p className="mb-6 text-lg text-slate-600">At first glance, Texas and Tennessee can look similar.</p>
              <ul className="mb-6 space-y-3 text-slate-600">
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" aria-hidden />
                  <span>
                    <strong>Texas median home:</strong> ~$300K–$420K
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" aria-hidden />
                  <span>
                    <strong>Tennessee median home:</strong> ~$300K–$350K
                  </span>
                </li>
              </ul>
              <div className="rounded-xl border border-amber-100 bg-amber-50 p-5">
                <p className="mb-3 font-semibold text-amber-900">But here’s the key:</p>
                <ul className="space-y-2 text-sm text-amber-900">
                  <li>Tennessee has more affordable smaller markets</li>
                  <li>Texas prices spike in major metros (Austin, Dallas, Houston)</li>
                </ul>
              </div>
            </div>
            <div className="order-1 space-y-6 lg:order-2">
              <div className="relative">
                <div className="absolute inset-0 -z-10 translate-x-2 translate-y-2 rotate-2 rounded-2xl bg-slate-100" />
                <img
                  src="/assets/images/texas-to-tennessee/House.jpg"
                  alt="Tennessee home and residential street"
                  className="aspect-[4/3] w-full rounded-2xl object-cover shadow-xl"
                  loading="lazy"
                />
              </div>
              <div className="rounded-2xl border border-indigo-100 bg-indigo-50 p-6 md:p-8">
                <Lightbulb className="mb-3 h-9 w-9 text-indigo-600" aria-hidden />
                <p className="text-base tracking-tight text-indigo-950">
                  In places like Johnson City, Kingsport, and Bristol, Tennessee is significantly cheaper than most Texas
                  cities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="mb-6 text-3xl font-semibold tracking-tight text-primary md:text-4xl">
                Property Taxes: Tennessee Wins BIG
              </h2>
              <p className="mb-8 text-lg text-slate-600">
                This is the biggest difference — and most people overlook it.
              </p>
              <div className="mb-8 grid gap-6 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="mb-2 font-semibold text-primary">Texas</h3>
                  <p className="text-2xl font-bold text-slate-900">~1.3% – 2.0%</p>
                </div>
                <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-6">
                  <h3 className="mb-2 font-semibold text-indigo-900">Tennessee</h3>
                  <p className="text-2xl font-bold text-indigo-950">~0.4% – 0.6%</p>
                </div>
              </div>
              <div className="rounded-2xl bg-primary p-8 text-white shadow-md">
                <p className="mb-4 flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-slate-400">
                  <Wallet className="h-4 w-4 text-amber-400" aria-hidden />
                  Example: On a $400,000 home
                </p>
                <ul className="mb-4 space-y-2 text-slate-200">
                  <li className="flex justify-between border-b border-slate-700/60 pb-2">
                    <span>Texas:</span> <span className="font-semibold">$5,000–$8,000/year</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Tennessee:</span> <span className="font-semibold text-emerald-400">$1,600–$2,400/year</span>
                  </li>
                </ul>
                <p className="text-lg font-medium text-amber-300">That’s $3,000–$5,000 saved every year</p>
              </div>
            </div>
            <div className="relative hidden h-[min(520px,70vw)] lg:block">
              <img
                src="/assets/images/texas-to-tennessee/pigeon-forge-tennessee-Kevin-Ruck.jpg"
                alt="Smoky Mountains region — Tennessee lifestyle and value"
                className="absolute top-0 right-0 z-10 h-3/5 w-3/5 rounded-2xl object-cover shadow-xl"
                loading="lazy"
              />
              <img
                src="/assets/images/texas-to-tennessee/texas.jpg"
                alt="Texas landscape — comparison context"
                className="absolute bottom-0 left-0 z-20 h-3/5 w-3/5 rounded-2xl border-4 border-white object-cover shadow-lg"
                loading="lazy"
              />
            </div>
            <div className="relative aspect-[4/3] lg:hidden">
              <img
                src="/assets/images/texas-to-tennessee/pigeon-forge-tennessee-Kevin-Ruck.jpg"
                alt="Tennessee mountains"
                className="h-full w-full rounded-2xl object-cover shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-100 bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative order-2 lg:order-1">
              <div className="absolute inset-0 -z-10 -translate-x-2 translate-y-2 -rotate-1 rounded-2xl bg-slate-100" />
              <img
                src="/assets/images/live-in-tennessee/tennessee-state-capitol-building-nashville-aerial.jpeg"
                alt="Nashville and Middle Tennessee skyline"
                className="aspect-[4/3] w-full rounded-2xl object-cover shadow-xl"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="mb-6 text-3xl font-semibold tracking-tight text-primary">Income Taxes: Both Are Great</h2>
              <p className="mb-8 text-slate-600">
                No state income tax in either state — your paycheck stays with you.
              </p>
              <div className="mb-8 flex flex-wrap gap-8">
                <div className="rounded-xl border border-slate-200 bg-slate-50 px-8 py-6">
                  <p className="text-sm text-slate-500">Tennessee</p>
                  <p className="text-3xl font-bold text-primary">0%</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 px-8 py-6">
                  <p className="text-sm text-slate-500">Texas</p>
                  <p className="text-3xl font-bold text-primary">0%</p>
                </div>
              </div>
              <p className="text-slate-600">No difference here — both states are tax-friendly on income.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-10 text-center text-3xl font-semibold tracking-tight text-primary md:text-4xl">
            Monthly Cost of Living
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-slate-600">
            Tennessee is usually <strong>$300–$500 cheaper per month</strong> depending on lifestyle.
          </p>
          <div className="mb-12 grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-emerald-100 bg-white p-8 shadow-sm">
              <h3 className="mb-4 flex items-center gap-2 font-semibold text-emerald-900">
                <CheckCircle2 className="h-5 w-5" aria-hidden />
                Where you save
              </h3>
              <ul className="space-y-2 text-slate-600">
                {['Transportation', 'Insurance', 'Housing costs', 'Smaller city living'].map((t) => (
                  <li key={t} className="flex gap-2">
                    <span className="text-emerald-500">•</span> {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="mb-4 flex items-center gap-2 font-semibold text-slate-800">
                <Scale className="h-5 w-5" aria-hidden />
                Where Texas can compete
              </h3>
              <ul className="space-y-2 text-slate-600">
                {['Gas prices (sometimes cheaper)', 'Bigger job markets'].map((t) => (
                  <li key={t} className="flex gap-2">
                    <span className="text-slate-400">•</span> {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl shadow-lg">
            <img
              src="/assets/images/texas-to-tennessee/GettyImages-1681066662.jpg"
              alt="Urban skyline — cost of living comparison context"
              className="h-56 w-full object-cover md:h-72"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
            <p className="absolute bottom-4 left-4 right-4 text-center text-sm font-medium text-white md:text-base">
              Overall: Tennessee has the edge for affordability
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-100 bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-8 text-3xl font-semibold tracking-tight text-primary">Everyday Expenses</h2>
              <ul className="space-y-4 text-lg text-slate-600">
                <li>
                  <strong>Groceries</strong> → Similar (sometimes slightly higher in TN)
                </li>
                <li>
                  <strong>Utilities</strong> → Similar
                </li>
                <li>
                  <strong>Insurance</strong> → Usually cheaper in Tennessee
                </li>
              </ul>
              <p className="mt-8 text-slate-700">
                No major difference day to day, but Tennessee still slightly ahead overall.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 -z-10 translate-x-2 translate-y-2 rounded-2xl bg-amber-50" />
              <img
                src="/assets/images/moving-checklist/pexels-chaitaastic-3722911-scaled.jpg"
                alt="Family planning a move — everyday budget and lifestyle"
                className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative border-b border-slate-800 bg-slate-900 py-24 bg-cover bg-fixed bg-center"
        style={{ backgroundImage: "url('/assets/images/texas-to-tennessee/iStock-1559191177.jpg')" }}
      >
        <div className="absolute inset-0 bg-slate-900/88" />
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-center text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Where Tennessee Is MUCH Cheaper
          </h2>
          <div className="grid gap-10 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <h3 className="mb-4 font-semibold text-indigo-200">You’ll notice the biggest savings in:</h3>
              <ul className="space-y-2 text-slate-200">
                {['Johnson City', 'Kingsport', 'Bristol', 'Chattanooga'].map((c) => (
                  <li key={c} className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-secondary" aria-hidden /> {c}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <h3 className="mb-4 font-semibold text-slate-300">Compared to:</h3>
              <ul className="space-y-2 text-slate-200">
                {['Austin', 'Dallas', 'Houston suburbs'].map((c) => (
                  <li key={c} className="flex items-center gap-2">
                    <CircleMinus className="h-4 w-4 text-slate-400" aria-hidden /> {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-10 text-center text-lg font-medium text-amber-200">This is where Tennessee really wins</p>
        </div>
      </section>

      <section className="border-b border-slate-100 bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 flex items-center gap-3 text-3xl font-semibold tracking-tight text-primary">
                <AlertCircle className="h-9 w-9 text-secondary" aria-hidden />
                When Texas Might Be Better
              </h2>
              <p className="mb-4 text-slate-600">Texas could still be the better choice if you:</p>
              <ul className="mb-6 space-y-3 text-slate-600">
                {['Need a large metro job market', 'Want big-city infrastructure', 'Work in industries like tech or energy'].map(
                  (t) => (
                    <li key={t} className="flex gap-3">
                      <span className="text-secondary">•</span> {t}
                    </li>
                  ),
                )}
              </ul>
              <p className="rounded-lg bg-slate-100 px-4 py-3 text-sm text-slate-700">
                But you’ll likely pay more to live there.
              </p>
            </div>
            <div className="relative">
              <img
                src="/assets/images/texas-to-tennessee/GettyImages-1681066662.jpg"
                alt="Major Texas metro — jobs and infrastructure"
                className="aspect-[4/3] w-full rounded-2xl object-cover shadow-xl"
                loading="lazy"
              />
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
            Tennessee is cheaper than Texas for most people — especially long-term homeowners.
          </p>
          <p className="mb-4 font-medium text-white">You’ll typically:</p>
          <div className="mx-auto mb-10 inline-block text-left text-slate-200">
            {[
              'Pay significantly less in property taxes',
              'Have lower monthly expenses',
              'Get more value for your money',
            ].map((line) => (
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
                src="/assets/images/texas-to-tennessee/TXHeader2.jpg"
                alt="Relocating from Texas to Tennessee"
                className="aspect-[4/3] h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="text-center lg:text-left">
              <h2 className="mb-4 text-2xl font-semibold text-primary">Want a Full Breakdown of Moving?</h2>
              <p className="mb-6 text-slate-600">
                If you&apos;re seriously considering relocating, check out our full guide — it goes deeper into jobs,
                cities, lifestyle, and what to expect.
              </p>
              <Link
                href={route('frontend.moving-from-texas')}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-800"
              >
                Moving from Texas to Tennessee
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
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
                alt="Find your home in Tennessee"
                className="aspect-[4/3] w-full rounded-2xl object-cover shadow-xl"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="mb-6 text-3xl font-semibold tracking-tight text-primary">Thinking About Moving to Tennessee?</h2>
              <p className="mb-6 text-slate-600">We help people relocate to Tennessee every day.</p>
              <ul className="mb-8 space-y-2 text-slate-600">
                {['Find homes in your budget', 'Discover the best areas', 'Get local insight (especially in East Tennessee)'].map(
                  (t) => (
                    <li key={t} className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden /> {t}
                    </li>
                  ),
                )}
              </ul>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
                <h3 className="mb-8 flex items-center gap-3 text-xl font-semibold text-primary">
                  <Package className="h-8 w-8 text-secondary" aria-hidden />
                  Get Started
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
