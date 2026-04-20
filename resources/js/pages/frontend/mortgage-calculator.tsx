import { useState, useEffect, useCallback } from "react";
import { Link, usePage } from "@inertiajs/react";
import FrontendLayout from "@/layouts/frontend-layout";
import MortgageCalculatorLeadInline from "@/components/ui/mortgage-calculator-lead-inline";

// Set your LendingTree (or lendertree.com) partner URL when ready. Leave as '#' until then.
const LENDER_RATES_URL = "#";

const currency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
});

function formatAffordabilityRange(homePrice: number): string {
    const low = Math.round(Math.max(homePrice * 0.9, 0));
    const high = Math.round(homePrice * 1.1);
    return `${currency.format(low)} – ${currency.format(high)}`;
}

interface CityPreset {
    label: string;
    price: number;
    tax: number;
    insurance: number;
}

const FALLBACK_CITY_PRESETS: CityPreset[] = [
    { label: "Knoxville", price: 360000, tax: 2200, insurance: 1900 },
    { label: "Murfreesboro", price: 395000, tax: 2400, insurance: 1950 },
    { label: "Johnson City", price: 285000, tax: 1700, insurance: 1750 },
    { label: "Kingsport", price: 255000, tax: 1500, insurance: 1700 },
    { label: "Clarksville", price: 325000, tax: 1950, insurance: 1800 },
    { label: "Chattanooga", price: 340000, tax: 2100, insurance: 1850 },
    { label: "Nashville", price: 470000, tax: 2800, insurance: 2100 },
];

interface FormState {
    homePrice: number;
    downPayment: number;
    interestRate: number;
    loanTerm: number;
    propertyTax: number;
    insurance: number;
    hoa: number;
    pmi: number;
}

interface Results {
    loanAmount: number;
    principalInterest: number;
    monthlyTaxes: number;
    monthlyInsurance: number;
    hoa: number;
    pmi: number;
    totalMonthly: number;
}

const FALLBACK_DEFAULTS: FormState = {
    homePrice: 350000,
    downPayment: 35000,
    interestRate: 6.75,
    loanTerm: 30,
    propertyTax: 2100,
    insurance: 1800,
    hoa: 0,
    pmi: 0,
};

function computeResults(form: FormState): Results {
    const loanAmount = Math.max(form.homePrice - form.downPayment, 0);
    const monthlyRate = form.interestRate / 100 / 12;
    const n = form.loanTerm * 12;

    let principalInterest = 0;
    if (loanAmount > 0 && n > 0) {
        if (monthlyRate === 0) {
            principalInterest = loanAmount / n;
        } else {
            const factor = Math.pow(1 + monthlyRate, n);
            principalInterest = (loanAmount * (monthlyRate * factor)) / (factor - 1);
        }
    }

    const monthlyTaxes = form.propertyTax / 12;
    const monthlyInsurance = form.insurance / 12;
    const monthlyPmi =
        form.pmi > 0 && loanAmount > 0 ? loanAmount * (form.pmi / 100) : 0;
    const totalMonthly =
        principalInterest + monthlyTaxes + monthlyInsurance + form.hoa + monthlyPmi;

    return {
        loanAmount,
        principalInterest,
        monthlyTaxes,
        monthlyInsurance,
        hoa: form.hoa,
        pmi: monthlyPmi,
        totalMonthly,
    };
}

interface FieldProps {
    id: keyof FormState;
    label: string;
    value: number;
    step?: number;
    onChange: (id: keyof FormState, value: number) => void;
}

function Field({ id, label, value, step = 1, onChange }: FieldProps) {
    const [focused, setFocused] = useState(false);
    const [localStr, setLocalStr] = useState(() =>
        value === 0 ? "" : String(value),
    );

    useEffect(() => {
        if (!focused) setLocalStr(value === 0 ? "" : String(value));
    }, [value, focused]);

    const displayValue = focused ? localStr : value === 0 ? "" : String(value);

    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={id} className="text-[0.95rem] font-bold text-[#374151]">
                {label}
            </label>
            <input
                id={id}
                type="number"
                value={displayValue}
                min={0}
                step={step}
                onFocus={() => {
                    setFocused(true);
                    setLocalStr(value === 0 ? "" : String(value));
                }}
                onBlur={() => {
                    setFocused(false);
                    const num = parseFloat(localStr);
                    if (!Number.isNaN(num) && num >= 0) {
                        const normalized = num === 0 ? "" : String(num);
                        setLocalStr(normalized);
                        onChange(id, num);
                    } else {
                        setLocalStr("");
                        onChange(id, 0);
                    }
                }}
                onChange={(e) => {
                    const raw = e.target.value;

                    if (raw === "") {
                        setLocalStr("");
                        onChange(id, 0);
                        return;
                    }

                    let normalized = raw;

                    if (raw.includes(".")) {
                        const [intPart, fracPart] = raw.split(".");
                        const trimmedInt = intPart.replace(/^0+(?=\d)/, "");
                        const safeInt = trimmedInt === "" ? "0" : trimmedInt;
                        normalized =
                            fracPart !== undefined ? `${safeInt}.${fracPart}` : safeInt;
                    } else {
                        const trimmed = raw.replace(/^0+(?=\d)/, "");
                        normalized = trimmed === "" ? "0" : trimmed;
                    }

                    setLocalStr(normalized);
                    const num = parseFloat(normalized);
                    onChange(id, Number.isNaN(num) || num < 0 ? 0 : num);
                }}
                className="w-full px-3.5 py-3.5 border border-[#e5e7eb] rounded-xl text-[15px] outline-none bg-white text-[#1f2937] focus:ring-2 focus:ring-[#163a63] focus:border-[#163a63]"
            />
        </div>
    );
}

interface ResultRowProps {
    label: string;
    value: number;
    last?: boolean;
}

function ResultRow({ label, value, last = false }: ResultRowProps) {
    return (
        <div
            className={`flex justify-between gap-4 py-2.5 ${last ? "" : "border-b border-[#e5e7eb]"}`}
        >
            <span className="text-[#6b7280] font-semibold text-sm">{label}</span>
            <span className="font-bold text-right text-primary">
                {currency.format(value)}
            </span>
        </div>
    );
}

export default function MortgageCalculator() {
    const page = usePage();
    const calculatorConfig = (page.props as any)?.calculatorConfig as
        | {
            defaults?: Partial<FormState>;
            cityPresets?: CityPreset[];
            lenderRatesUrl?: string;
            leadSubmitUrl?: string;
        }
        | undefined;

    const lenderRatesUrl = calculatorConfig?.lenderRatesUrl ?? LENDER_RATES_URL;
    const leadSubmitUrl = calculatorConfig?.leadSubmitUrl ?? "/mortgage-leads";

    const resolvedDefaults: FormState = {
        ...FALLBACK_DEFAULTS,
        ...(calculatorConfig?.defaults ?? {}),
    };

    const resolvedCityPresets: CityPreset[] =
        calculatorConfig?.cityPresets && calculatorConfig.cityPresets.length > 0
            ? calculatorConfig.cityPresets
            : FALLBACK_CITY_PRESETS;

    const initialCity = resolvedCityPresets[0] ?? null;

    const initialForm: FormState =
        initialCity == null
            ? resolvedDefaults
            : {
                ...resolvedDefaults,
                homePrice: initialCity.price,
                downPayment: Math.round(initialCity.price * 0.1),
                propertyTax: initialCity.tax,
                insurance: initialCity.insurance,
            };

    const [form, setForm] = useState<FormState>(initialForm);
    const [results, setResults] = useState<Results>(computeResults(initialForm));
    const [activeCity, setActiveCity] = useState<string | null>(
        initialCity ? initialCity.label : null,
    );

    useEffect(() => {
        setResults(computeResults(form));
    }, [form]);

    useEffect(() => {
        const updatedInitialCity = resolvedCityPresets[0] ?? null;
        const updatedForm =
            updatedInitialCity == null
                ? resolvedDefaults
                : {
                    ...resolvedDefaults,
                    homePrice: updatedInitialCity.price,
                    downPayment: Math.round(updatedInitialCity.price * 0.1),
                    propertyTax: updatedInitialCity.tax,
                    insurance: updatedInitialCity.insurance,
                };

        setForm(updatedForm);
        setResults(computeResults(updatedForm));
        setActiveCity(updatedInitialCity ? updatedInitialCity.label : null);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [JSON.stringify(resolvedDefaults), JSON.stringify(resolvedCityPresets)]);

    const handleChange = useCallback((id: keyof FormState, value: number) => {
        setForm((prev) => ({ ...prev, [id]: value }));
    }, []);

    const handlePreset = useCallback((preset: CityPreset) => {
        setForm((prev) => ({
            ...prev,
            homePrice: preset.price,
            downPayment: Math.round(preset.price * 0.1),
            propertyTax: preset.tax,
            insurance: preset.insurance,
        }));
        setActiveCity(preset.label);
    }, []);

    const handleReset = useCallback(() => {
        setForm(resolvedDefaults);
        setActiveCity(null);
    }, [resolvedDefaults]);

    const [leadRegion, setLeadRegion] = useState("middle-tennessee");
    const [hasCalculated, setHasCalculated] = useState(false);

    const scrollToCalculator = () => {
        document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth" });
    };

    const scrollToLenderMatch = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        document.getElementById("lender-match")?.scrollIntoView({ behavior: "smooth" });
    };

    const handleCalculatePayment = () => {
        setHasCalculated(true);
        setLeadRegion((prev) => prev || "middle-tennessee");

        setTimeout(() => {
            document.getElementById("after-calculator-results")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }, 50);
    };

    return (
        <FrontendLayout activePage="buying" subPage="mortgage-calculator">
            <div className="min-h-screen font-[Arial,Helvetica,sans-serif] text-[#1f2937] leading-relaxed bg-[#f7f8fb]">
                {/* ── Hero ── */}
                <header
                    className="text-white pt-[72px] pb-14 px-4"
                    style={{ background: "linear-gradient(135deg, rgba(22,58,99,.96), rgba(15,39,67,.94))" }}
                >
                    <div className="max-w-[1180px] mx-auto grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
                        <div>
                            <span className="inline-block mb-3.5 px-3 py-1.5 rounded-full bg-white/10 text-[13px] tracking-wider uppercase">
                                Tennessee mortgage tools
                            </span>
                            <h1 className="m-0 mb-4 text-[clamp(2rem,5vw,3.4rem)] leading-tight font-bold">
                                What Can You Afford in Tennessee?
                            </h1>
                            <p className="m-0 mb-6 text-white/90 text-[1.06rem] max-w-[56ch] leading-relaxed">
                                Calculate your monthly payment, explore home prices, and get matched with the right
                                lender—built specifically for people moving to Tennessee.
                            </p>
                            <div className="flex flex-wrap gap-3 mb-5">
                                <button
                                    type="button"
                                    onClick={scrollToCalculator}
                                    className="inline-block px-6 py-3.5 rounded-xl font-bold transition-transform hover:-translate-y-px bg-secondary text-white shadow-lg shadow-black/10"
                                >
                                    Start Your Calculation
                                </button>
                                <a
                                    href="#lender-match"
                                    onClick={scrollToLenderMatch}
                                    className="inline-flex items-center px-5 py-3.5 rounded-xl font-bold border border-white/35 text-white hover:bg-white/10 transition-colors"
                                >
                                    Get matched with a lender
                                </a>
                            </div>
                            <p className="m-0 text-sm text-white/80 sm:text-[0.95rem]">
                                ✔ Free &nbsp;•&nbsp; ✔ No obligation &nbsp;•&nbsp; ✔ Local Tennessee experts
                            </p>
                        </div>

                        <aside className="bg-white text-[#1f2937] rounded-[18px] p-6 shadow-[0_12px_30px_rgba(0,0,0,.12)] border border-white/20">
                            <h3 className="m-0 mb-3 text-[1.25rem] font-bold text-primary">How this page converts</h3>
                            <ol className="m-0 pl-5 text-[#4b5563] text-[0.95rem] space-y-3 list-decimal">
                                <li>Estimate your Tennessee payment with real-world taxes and insurance.</li>
                                <li>See what price band fits your monthly budget.</li>
                                <li>Unlock curated cities and lender follow-up when you&apos;re ready.</li>
                            </ol>
                            <p className="mt-5 mb-0 text-sm text-[#6b7280] leading-relaxed">
                                Estimates only—not financial advice. Rates and payments vary by lender and credit profile.
                            </p>
                        </aside>
                    </div>
                </header>

                <main>
                    {/* ── Calculator section ── */}
                    <section id="calculator" className="py-16 px-4">
                        <div className="max-w-[1180px] mx-auto">
                            <div className="text-center max-w-[760px] mx-auto mb-6">
                                <h2 className="m-0 mb-2.5 text-[clamp(1.8rem,4vw,2.6rem)] leading-tight text-primary font-bold">
                                    Tennessee mortgage calculator
                                </h2>
                                <p className="m-0 text-[#6b7280] text-[1.02rem]">
                                    Use this to estimate what your monthly payment would look like in Tennessee.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-6 items-start">
                                {/* Calculator form card */}
                                <div className="bg-white border border-[#e5e7eb] rounded-[18px] p-6 shadow-[0_12px_30px_rgba(0,0,0,.08)]">
                                    <span className="block mb-2.5 text-[.92rem] font-bold text-[#374151]">Quick city examples</span>
                                    <div className="flex flex-wrap gap-2.5 mb-5">
                                        {resolvedCityPresets.map((preset) => {
                                            const isActive = activeCity === preset.label;
                                            return (
                                                <button
                                                    key={preset.label}
                                                    type="button"
                                                    onClick={() => handlePreset(preset)}
                                                    className={`px-3.5 py-2.5 rounded-full text-[.92rem] font-bold cursor-pointer border transition-colors ${isActive
                                                        ? "border-[#163a63] bg-[#163a63] text-white"
                                                        : "border-[#e5e7eb] bg-white text-[#1f2937] hover:bg-[#f7f8fb] hover:border-[#163a63]"
                                                        }`}
                                                >
                                                    {preset.label}
                                                </button>
                                            );
                                        })}
                                    </div>
                                    <h3 className="m-0 mb-4 text-[1.1rem] font-bold text-[#1f2937]">Your loan details</h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        <Field id="homePrice" label="Home price ($)" value={form.homePrice} step={1000} onChange={handleChange} />
                                        <Field id="downPayment" label="Down payment ($)" value={form.downPayment} step={1000} onChange={handleChange} />
                                        <Field id="interestRate" label="Interest rate (%)" value={form.interestRate} step={0.01} onChange={handleChange} />
                                        <Field id="loanTerm" label="Loan term (years)" value={form.loanTerm} step={1} onChange={handleChange} />
                                        <Field id="propertyTax" label="Annual property tax ($, optional)" value={form.propertyTax} step={100} onChange={handleChange} />
                                        <Field id="insurance" label="Annual home insurance ($, optional)" value={form.insurance} step={100} onChange={handleChange} />
                                        <div className="col-span-2">
                                            <details className="rounded-xl border border-[#e5e7eb] bg-[#fafafa] px-4 py-3">
                                                <summary className="cursor-pointer text-sm font-bold text-[#374151]">
                                                    Advanced (HOA &amp; PMI)
                                                </summary>
                                                <div className="mt-4 grid grid-cols-2 gap-4">
                                                    <Field id="hoa" label="Monthly HOA ($)" value={form.hoa} step={25} onChange={handleChange} />
                                                    <Field id="pmi" label="Monthly PMI (% of loan)" value={form.pmi} step={0.01} onChange={handleChange} />
                                                </div>
                                            </details>
                                        </div>
                                        <select value={leadRegion} onChange={(e) => setLeadRegion(e.target.value)} className="w-full px-3.5 py-3.5 rounded-xl border border-[#e5e7eb] text-[15px] outline-none focus:ring-2 focus:ring-[#163a63] focus:border-[#163a63] bg-white col-span-2">
                                            <option value="">Region (for your lead)</option>
                                            <option value="east-tennessee">East Tennessee</option>
                                            <option value="middle-tennessee">Middle Tennessee</option>
                                            <option value="west-tennessee">West Tennessee</option>
                                        </select>
                                    </div>
                                    <div className="flex gap-2">
                                        <button
                                            type="button"
                                            onClick={handleReset}
                                            className="mt-5 rounded-[14px] px-5 py-3.5 text-base font-bold text-[#1f2937] bg-[#f3f4f6] border border-[#e5e7eb] hover:bg-[#e5e7eb] transition-colors"
                                        >
                                            Reset
                                        </button>
                                        <button
                                            type="button"
                                            onClick={handleCalculatePayment}
                                            className="mt-5 rounded-[14px] px-5 py-3.5 text-base font-bold text-white bg-primary border border-[#e5e7eb] hover:bg-secondary transition-colors"
                                        >
                                            Calculate Payment
                                        </button>
                                    </div>
                                </div>

                                {/* Results (wireframe §3) */}
                                <aside
                                    id="calculator-results"
                                    className={`bg-white border border-[#e5e7eb] rounded-[18px] p-6 shadow-[0_12px_30px_rgba(0,0,0,.08)] lg:sticky lg:top-6 ${!hasCalculated ? "relative overflow-hidden" : ""}`}
                                >
                                    {!hasCalculated && (
                                        <div
                                            className="pointer-events-none absolute inset-0 z-10 backdrop-blur-[2px] bg-white/40"
                                            aria-hidden
                                        />
                                    )}
                                    <div className={!hasCalculated ? "relative z-20 blur-[0.5px]" : ""}>
                                        <h3 className="mt-0 mb-1 text-[1.15rem] font-bold text-primary">
                                            {hasCalculated ? "Here&apos;s What You Can Afford in Tennessee" : "Your results"}
                                        </h3>
                                        {!hasCalculated && (
                                            <p className="text-sm text-[#6b7280] mb-4">
                                                Tap <strong>Calculate payment</strong> to reveal your estimate and unlock the next
                                                step.
                                            </p>
                                        )}
                                        <div className="border-b border-[#e5e7eb] py-3.5">
                                            <span className="text-[#6b7280] text-sm">Estimated monthly payment</span>
                                            <strong className="block text-[1.55rem] text-primary mt-0.5">
                                                {hasCalculated ? `${currency.format(results.totalMonthly)}/mo` : "—"}
                                            </strong>
                                        </div>
                                        {hasCalculated && (
                                            <>
                                                <div className="border-b border-[#e5e7eb] py-3.5">
                                                    <span className="text-[#6b7280] text-sm">Estimated purchase price range</span>
                                                    <strong className="block text-[1.05rem] text-primary mt-0.5 leading-snug">
                                                        {formatAffordabilityRange(form.homePrice)}
                                                    </strong>
                                                    <span className="text-xs text-[#9ca3af]">Centered on the home price you entered (±10%).</span>
                                                </div>
                                                <p className="my-3 text-sm italic text-[#4b5563]">
                                                    In Tennessee, your budget goes further than most states.
                                                </p>
                                                <p className="text-xs font-semibold uppercase tracking-wide text-[#6b7280] mb-2">
                                                    Breakdown
                                                </p>
                                                <div className="rounded-xl border border-[#e5e7eb] bg-[#fafafa] px-3">
                                                    <ResultRow label="Principal & interest" value={results.principalInterest} />
                                                    <ResultRow label="Taxes" value={results.monthlyTaxes} />
                                                    <ResultRow label="Insurance" value={results.monthlyInsurance} />
                                                    <ResultRow label="HOA" value={results.hoa} />
                                                    <ResultRow label="PMI" value={results.pmi} last />
                                                </div>
                                                {lenderRatesUrl === "#" ? (
                                                    <a
                                                        href="#lender-match"
                                                        onClick={scrollToLenderMatch}
                                                        className="mt-5 block w-full py-3.5 px-5 rounded-xl font-bold bg-secondary hover:bg-primary text-white text-center transition-transform hover:-translate-y-px"
                                                    >
                                                        Get matched with a lender
                                                    </a>
                                                ) : (
                                                    <a
                                                        href={lenderRatesUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="mt-5 block w-full py-3.5 px-5 rounded-xl font-bold bg-secondary hover:bg-primary text-white text-center transition-transform hover:-translate-y-px"
                                                    >
                                                        Get matched with a lender
                                                    </a>
                                                )}
                                            </>
                                        )}
                                    </div>
                                </aside>
                            </div>

                            <div id="after-calculator-results" className="scroll-mt-24" />

                            {hasCalculated && (
                                <div id="lead-capture-form-section">
                                    <MortgageCalculatorLeadInline
                                        homePrice={form.homePrice}
                                        downPayment={form.downPayment}
                                        region={leadRegion}
                                        leadSubmitUrl={leadSubmitUrl}
                                        cityPresets={resolvedCityPresets}
                                        calculatorSnapshot={{
                                            home_price: form.homePrice,
                                            down_payment: form.downPayment,
                                            interest_rate: form.interestRate,
                                            loan_term: form.loanTerm,
                                            monthly_payment: results.totalMonthly,
                                        }}
                                    />
                                </div>
                            )}
                        </div>
                    </section>

                    {/* ── Lender match CTA ── */}
                    <section id="lender-match" className="py-16 px-4 bg-white scroll-mt-24">
                        <div className="max-w-[760px] mx-auto text-center rounded-[22px] border border-[#e5e7eb] bg-[#f7f8fb] px-6 py-10 shadow-[0_12px_30px_rgba(0,0,0,.06)]">
                            <h2 className="m-0 text-[clamp(1.5rem,3vw,2rem)] font-bold text-primary">
                                Get pre-approved with a Tennessee lender
                            </h2>
                            <p className="mt-3 mb-6 text-[#6b7280] leading-relaxed">
                                We&apos;ll connect you with a trusted local lender who understands Tennessee markets.
                            </p>
                            {lenderRatesUrl === "#" ? (
                                <button
                                    type="button"
                                    onClick={scrollToCalculator}
                                    className="inline-block py-3.5 px-8 rounded-xl font-bold bg-secondary text-white hover:bg-primary transition-colors"
                                >
                                    Get matched with a lender
                                </button>
                            ) : (
                                <a
                                    href={lenderRatesUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block py-3.5 px-8 rounded-xl font-bold bg-secondary text-white hover:bg-primary transition-colors"
                                >
                                    Get matched with a lender
                                </a>
                            )}
                            <p className="mt-5 text-xs text-[#9ca3af] mb-0">
                                Configure your partner URL in the app to open an external lender flow from this button.
                            </p>
                        </div>
                    </section>

                    {/* ── Internal link boost (SEO) ── */}
                    <section className="py-14 px-4 bg-[#f7f8fb]">
                        <div className="max-w-[1180px] mx-auto">
                            <h2 className="m-0 mb-6 text-center text-[clamp(1.5rem,3vw,2rem)] font-bold text-primary">
                                Explore moving to Tennessee
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                                <Link
                                    href={route("frontend.tennessee-relocation")}
                                    className="rounded-xl border border-[#e5e7eb] bg-white px-4 py-4 text-center text-sm font-bold text-primary shadow-sm hover:border-[#163a63] transition-colors"
                                >
                                    Moving to Tennessee guide
                                </Link>
                                <Link
                                    href={route("frontend.cost-of-living-in-tennessee")}
                                    className="rounded-xl border border-[#e5e7eb] bg-white px-4 py-4 text-center text-sm font-bold text-primary shadow-sm hover:border-[#163a63] transition-colors"
                                >
                                    Cost of living in Tennessee
                                </Link>
                                <Link
                                    href={route("frontend.is-tennessee-cheaper-than-florida")}
                                    className="rounded-xl border border-[#e5e7eb] bg-white px-4 py-4 text-center text-sm font-bold text-primary shadow-sm hover:border-[#163a63] transition-colors"
                                >
                                    Tennessee vs Florida
                                </Link>
                                <Link
                                    href={route("frontend.city-comparison")}
                                    className="rounded-xl border border-[#e5e7eb] bg-white px-4 py-4 text-center text-sm font-bold text-primary shadow-sm hover:border-[#163a63] transition-colors"
                                >
                                    Best places to live in Tennessee
                                </Link>
                            </div>
                        </div>
                    </section>

                    {/* ── Trust + disclaimer ── */}
                    <section className="py-12 px-4 border-t border-[#e5e7eb] bg-white">
                        <div className="max-w-[800px] mx-auto text-center text-sm text-[#6b7280] space-y-3">
                            <p className="m-0">
                                <strong className="text-[#374151]">Important:</strong> These numbers are estimates only and are not
                                financial advice. Rates, taxes, insurance, and loan terms can change and will vary by lender and
                                your qualifications.
                            </p>
                            <p className="m-0">
                                WhyTennessee connects you with local experts and curated real estate opportunities so you can plan
                                your Tennessee move with more confidence.
                            </p>
                        </div>
                    </section>

                    {/* ── FAQ ── */}
                    <section className="py-16 px-4 bg-white">
                        <div className="max-w-[1180px] mx-auto">
                            <div className="text-center max-w-[760px] mx-auto mb-7">
                                <h2 className="m-0 mb-2.5 text-[clamp(1.8rem,4vw,2.6rem)] leading-tight text-primary">Frequently Asked Questions</h2>
                                <p className="m-0 text-[#6b7280]">These FAQs help with trust, SEO, and conversion.</p>
                            </div>
                            <div className="max-w-[900px] mx-auto space-y-3">
                                <details className="bg-white border border-[#e5e7eb] rounded-[14px] px-4 py-4 [&>summary]:cursor-pointer [&>summary]:font-bold [&>summary]:text-primary [&>summary]:mb-2" open>
                                    <summary>How accurate is this mortgage calculator?</summary>
                                    <p className="text-[#6b7280] m-0 text-sm">This calculator gives an estimate based on the numbers you enter. Your actual rate, monthly payment, taxes, insurance, and loan terms may vary based on lender guidelines and your credit profile.</p>
                                </details>
                                <details className="bg-white border border-[#e5e7eb] rounded-[14px] px-4 py-4 [&>summary]:cursor-pointer [&>summary]:font-bold [&>summary]:text-primary [&>summary]:mb-2">
                                    <summary>Does checking mortgage options hurt my credit?</summary>
                                    <p className="text-[#6b7280] m-0 text-sm">You can phrase this carefully based on your lender partner&apos;s approved language. Keep your wording aligned with the lender&apos;s compliance requirements.</p>
                                </details>
                                <details className="bg-white border border-[#e5e7eb] rounded-[14px] px-4 py-4 [&>summary]:cursor-pointer [&>summary]:font-bold [&>summary]:text-primary [&>summary]:mb-2">
                                    <summary>Can I use this calculator if I am moving to Tennessee from another state?</summary>
                                    <p className="text-[#6b7280] m-0 text-sm">Yes. This page is designed to help relocation buyers estimate affordability before speaking with a lender or local real estate professional.</p>
                                </details>
                                <details className="bg-white border border-[#e5e7eb] rounded-[14px] px-4 py-4 [&>summary]:cursor-pointer [&>summary]:font-bold [&>summary]:text-primary [&>summary]:mb-2">
                                    <summary>What should I do after I calculate my payment?</summary>
                                    <p className="text-[#6b7280] m-0 text-sm">The best next step is to compare real mortgage offers, check current rates, or begin the pre-approval process with a trusted lending partner.</p>
                                </details>
                            </div>
                        </div>
                    </section>

                    {/* ── SEO copy ── */}
                    <section className="py-10 px-4 bg-[#f7f8fb]">
                        <div className="max-w-[1180px] mx-auto">
                            <div className="bg-white border border-[#e5e7eb] rounded-[18px] p-6 shadow-[0_12px_30px_rgba(0,0,0,.08)]">
                                <h3 className="mt-0 mb-3 text-[1.35rem] font-bold text-primary">WhyTennessee.com Tennessee Mortgage Calculator</h3>
                                <p className="text-[#6b7280] m-0 mb-3">
                                    Use the WhyTennessee.com mortgage payment calculator to estimate your monthly home payment based on home price, down payment, interest rate, property taxes, home insurance, HOA fees, and PMI. This calculator is built for people moving to Tennessee and comparing the cost of buying a home in Knoxville, Nashville, Chattanooga, Clarksville, Franklin, Johnson City, and Kingsport.
                                </p>
                                <p className="text-[#6b7280] m-0">
                                    If you are relocating to Tennessee, understanding your estimated monthly mortgage payment is one of the most important parts of planning your budget. A full house payment usually includes principal, interest, Tennessee property taxes, homeowners insurance, and sometimes HOA dues or private mortgage insurance. This calculator helps buyers get a realistic estimate before they start house hunting and makes it easier to compare affordable cities in Tennessee.
                                </p>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </FrontendLayout>
    );
}