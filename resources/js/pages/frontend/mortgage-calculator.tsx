import { useState, useEffect, useCallback } from "react";
import { usePage } from "@inertiajs/react";
import FrontendLayout from "@/layouts/frontend-layout";

// Set your LendingTree (or lendertree.com) partner URL when ready. Leave as '#' until then.
const LENDER_RATES_URL = "#";

const currency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
});

interface CityPreset {
    label: string;
    price: number;
    tax: number;
    insurance: number;
}

const FALLBACK_CITY_PRESETS: CityPreset[] = [
    { label: "Knoxville", price: 360000, tax: 2200, insurance: 1900 },
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

    // Treat PMI as a monthly percentage of the loan amount.
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

    // When not focused, keep local string in sync with parent value (e.g. preset or reset).
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
                        // Normalize value so leading zeros like 0252 become 252
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

                    // Allow empty while typing
                    if (raw === "") {
                        setLocalStr("");
                        onChange(id, 0);
                        return;
                    }

                    let normalized = raw;

                    // Handle decimals and strip leading zeros from integer part
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
            <span className="font-bold text-right text-[#0f2743]">
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
        }
        | undefined;

    const lenderRatesUrl = calculatorConfig?.lenderRatesUrl ?? LENDER_RATES_URL;

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
        // If admin updates defaults in the backend, keep the UI in sync
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

    // Lead form state (for "Get Matched" hero card — can be sent to LendingTree or internal lead form)
    const [leadHomePrice, setLeadHomePrice] = useState("");
    const [leadCredit, setLeadCredit] = useState("");
    const [leadDownPayment, setLeadDownPayment] = useState("");

    const handleLeadSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // When LendingTree/lendertree.com is ready: open their URL (with optional query params from form).
        window.open(lenderRatesUrl, "_blank", "noopener,noreferrer");
    };

    const scrollToCalculator = () => {
        document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth" });
    };

    const scrollToTodayRates = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        document.getElementById("rates")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <FrontendLayout activePage="buying" subPage="mortgage-calculator">
            <div className="min-h-screen font-[Arial,Helvetica,sans-serif] text-[#1f2937] leading-relaxed bg-[#f7f8fb]">
                {/* ── Hero (Tennessee design) ── */}
                <header
                    className="text-white pt-[72px] pb-14 px-4"
                    style={{ background: "linear-gradient(135deg, rgba(22,58,99,.96), rgba(15,39,67,.94))" }}
                >
                    <div className="max-w-[1180px] mx-auto grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-7 items-center">
                        <div>
                            <span className="inline-block mb-3.5 px-3 py-1.5 rounded-full bg-white/10 text-[13px] tracking-wider uppercase">
                                WhyTennessee.com Mortgage Tools
                            </span>
                            <h1 className="m-0 mb-4 text-[clamp(2rem,5vw,3.6rem)] leading-tight">
                                See What Home You Can Afford in Tennessee
                            </h1>
                            <p className="m-0 mb-5 text-white/90 text-[1.06rem] max-w-[58ch]">
                                Use our Tennessee mortgage calculator to estimate your payment, then compare real offers from trusted
                                lenders and get pre-approved with confidence.
                            </p>
                            <div className="flex flex-wrap gap-3 mb-4">
                                <button
                                    type="button"
                                    onClick={scrollToCalculator}
                                    className="inline-block px-5 py-3.5 rounded-xl font-bold transition-transform hover:-translate-y-px bg-[#c58b2b] text-[#111827]"
                                >
                                    Use the Mortgage Calculator
                                </button>
                                <a
                                    href="#rates"
                                    onClick={scrollToTodayRates}
                                    className="inline-block px-5 py-3.5 rounded-xl font-bold border border-white/35 text-white hover:bg-white/10 transition-colors"
                                >
                                    Check Today&apos;s Rates
                                </a>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mt-5">
                                <div className="bg-white/5 border border-white/10 rounded-[14px] p-3.5 text-[.95rem]">
                                    <strong>Estimate monthly payments</strong><br />Principal, interest, taxes, and insurance.
                                </div>
                                <div className="bg-white/5 border border-white/10 rounded-[14px] p-3.5 text-[.95rem]">
                                    <strong>Compare lender offers</strong><br />See what financing may fit your move.
                                </div>
                                <div className="bg-white/5 border border-white/10 rounded-[14px] p-3.5 text-[.95rem]">
                                    <strong>Built for relocation buyers</strong><br />Helpful for out-of-state buyers moving to Tennessee.
                                </div>
                            </div>
                        </div>
                        {/* Lead capture card (LendingTree / lendertree.com style) */}
                        <aside className="bg-white text-[#1f2937] rounded-[18px] p-6 shadow-[0_12px_30px_rgba(0,0,0,.08)]" id="rates">
                            <h3 className="m-0 mb-2 text-[1.35rem] text-[#0f2743]">Get Matched With Tennessee Mortgage Options</h3>
                            <p className="text-[#6b7280] m-0 mb-4 text-[.95rem]">
                                Compare rates from multiple lenders. When your LendingTree (or lendertree.com) account is linked, this can send high-intent visitors to your partner flow.
                            </p>
                            <form onSubmit={handleLeadSubmit} className="grid gap-3">
                                <input
                                    type="text"
                                    placeholder="Target home price"
                                    value={leadHomePrice}
                                    onChange={(e) => setLeadHomePrice(e.target.value)}
                                    className="w-full px-3.5 py-3.5 rounded-xl border border-[#e5e7eb] text-[15px] outline-none focus:ring-2 focus:ring-[#163a63] focus:border-[#163a63]"
                                />
                                <select
                                    value={leadCredit}
                                    onChange={(e) => setLeadCredit(e.target.value)}
                                    className="w-full px-3.5 py-3.5 rounded-xl border border-[#e5e7eb] text-[15px] outline-none focus:ring-2 focus:ring-[#163a63] focus:border-[#163a63] bg-white"
                                >
                                    <option value="">Estimated credit range</option>
                                    <option value="760+">760+</option>
                                    <option value="700-759">700-759</option>
                                    <option value="640-699">640-699</option>
                                    <option value="below-640">Below 640</option>
                                </select>
                                <select
                                    value={leadDownPayment}
                                    onChange={(e) => setLeadDownPayment(e.target.value)}
                                    className="w-full px-3.5 py-3.5 rounded-xl border border-[#e5e7eb] text-[15px] outline-none focus:ring-2 focus:ring-[#163a63] focus:border-[#163a63] bg-white"
                                >
                                    <option value="">Down payment</option>
                                    <option value="3-5">3%-5%</option>
                                    <option value="10">10%</option>
                                    <option value="20">20%+</option>
                                </select>
                                <button
                                    type="submit"
                                    className="w-full py-3.5 px-5 rounded-xl font-bold bg-[#c58b2b] text-[#111827] text-center hover:-translate-y-px transition-transform"
                                >
                                    Check Today&apos;s Mortgage Rates
                                </button>
                                <small className="block mt-1.5 text-[#6b7280]">
                                    No obligation. This button routes to your LendingTree (or lendertree.com) link when configured.
                                </small>
                            </form>
                        </aside>
                    </div>
                </header>

                <main>
                    {/* ── Calculator section ── */}
                    <section id="calculator" className="py-16 px-4">
                        <div className="max-w-[1180px] mx-auto">
                            <div className="text-center max-w-[760px] mx-auto mb-7">
                                <h2 className="m-0 mb-2.5 text-[clamp(1.8rem,4vw,2.6rem)] leading-tight text-[#0f2743]">
                                    Tennessee Mortgage Calculator
                                </h2>
                                <p className="m-0 text-[#6b7280]">
                                    Estimate your monthly payment, then take the next step with a trusted lending partner.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6 items-start">
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
                                                    className={`px-3.5 py-2.5 rounded-full text-[.92rem] font-bold cursor-pointer border transition-colors ${
                                                        isActive
                                                            ? "border-[#163a63] bg-[#163a63] text-white"
                                                            : "border-[#e5e7eb] bg-white text-[#1f2937] hover:bg-[#f7f8fb] hover:border-[#163a63]"
                                                    }`}
                                                >
                                                    {preset.label}
                                                </button>
                                            );
                                        })}
                                    </div>
                                    <h3 className="m-0 mb-4 text-[1.1rem] font-bold text-[#1f2937]">Enter your home buying details</h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        <Field id="homePrice" label="Home Price ($)" value={form.homePrice} step={1000} onChange={handleChange} />
                                        <Field id="downPayment" label="Down Payment ($)" value={form.downPayment} step={1000} onChange={handleChange} />
                                        <Field id="interestRate" label="Interest Rate (%)" value={form.interestRate} step={0.01} onChange={handleChange} />
                                        <Field id="loanTerm" label="Loan Term (Years)" value={form.loanTerm} step={1} onChange={handleChange} />
                                        <Field id="propertyTax" label="Annual Property Taxes ($)" value={form.propertyTax} step={100} onChange={handleChange} />
                                        <Field id="insurance" label="Annual Home Insurance ($)" value={form.insurance} step={100} onChange={handleChange} />
                                        <Field id="hoa" label="Monthly HOA ($)" value={form.hoa} step={25} onChange={handleChange} />
                                        <Field id="pmi" label="Monthly PMI (%)" value={form.pmi} step={0.01} onChange={handleChange} />
                                    </div>
                                    <button
                                        type="button"
                                        onClick={handleReset}
                                        className="mt-5 rounded-[14px] px-5 py-3.5 text-base font-bold text-[#1f2937] bg-[#f3f4f6] border border-[#e5e7eb] hover:bg-[#e5e7eb] transition-colors"
                                    >
                                        Reset
                                    </button>
                                </div>

                                {/* Results + CTA sidebar */}
                                <aside className="bg-white border border-[#e5e7eb] rounded-[18px] p-6 shadow-[0_12px_30px_rgba(0,0,0,.08)] lg:sticky lg:top-6">
                                    <h3 className="mt-0 mb-4 text-[1.1rem] font-bold text-[#0f2743]">After They Calculate, Give Them the Next Step</h3>
                                    <div className="border-b border-[#e5e7eb] py-3.5">
                                        <span className="text-[#6b7280] text-sm">Estimated Payment</span>
                                        <strong className="block text-[1.5rem] text-[#0f2743] mt-0.5">{currency.format(results.totalMonthly)}/mo</strong>
                                    </div>
                                    <div className="border-b border-[#e5e7eb] py-3.5">
                                        <span className="text-[#6b7280] text-sm">Loan Amount</span>
                                        <strong className="block text-[1.5rem] text-[#0f2743] mt-0.5">{currency.format(results.loanAmount)}</strong>
                                    </div>
                                    <div className="border-b border-[#e5e7eb] py-3.5">
                                        <span className="text-[#6b7280] text-sm">Next Best Action</span>
                                        <strong className="block text-[1.1rem] text-[#0f2743] mt-0.5">Compare Real Lender Offers</strong>
                                    </div>
                                    <div className="my-4 space-y-2">
                                        <div className="flex gap-2.5 items-start text-[#6b7280] text-sm">✔ See options from multiple lenders</div>
                                        <div className="flex gap-2.5 items-start text-[#6b7280] text-sm">✔ Great for Tennessee homebuyers and relocators</div>
                                        <div className="flex gap-2.5 items-start text-[#6b7280] text-sm">✔ Fast next step after using the calculator</div>
                                    </div>
                                    <a
                                        href={lenderRatesUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full py-3.5 px-5 rounded-xl font-bold bg-[#c58b2b] text-[#111827] text-center hover:-translate-y-px transition-transform"
                                    >
                                        Get Pre-Approved in Minutes
                                    </a>
                                    <p className="mt-3.5 text-[#6b7280] text-[.95rem] mb-0">
                                        Tip: make this button sticky on mobile and visible right after the user sees their payment result.
                                    </p>
                                    <div className="mt-4 pt-4 border-t border-[#e5e7eb]">
                                        <ResultRow label="Principal & Interest" value={results.principalInterest} />
                                        <ResultRow label="Property Taxes" value={results.monthlyTaxes} />
                                        <ResultRow label="Home Insurance" value={results.monthlyInsurance} />
                                        <ResultRow label="HOA" value={results.hoa} />
                                        <ResultRow label="PMI" value={results.pmi} last />
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </section>

                    {/* ── Why Buyers Use This Page ── */}
                    <section className="py-16 px-4 bg-white">
                        <div className="max-w-[1180px] mx-auto">
                            <div className="text-center max-w-[760px] mx-auto mb-7">
                                <h2 className="m-0 mb-2.5 text-[clamp(1.8rem,4vw,2.6rem)] leading-tight text-[#0f2743]">Why Buyers Use This Page</h2>
                                <p className="m-0 text-[#6b7280]">Your page should do more than calculate numbers. It should move a visitor from curiosity to action.</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="bg-white border border-[#e5e7eb] rounded-[18px] p-6 shadow-[0_12px_30px_rgba(0,0,0,.08)]">
                                    <h3 className="mt-0 mb-2 text-[1.1rem] font-bold text-[#0f2743]">Know Your Budget</h3>
                                    <p className="text-[#6b7280] m-0 text-sm">Help buyers understand what monthly payment fits their move to Tennessee before they start house hunting.</p>
                                </div>
                                <div className="bg-white border border-[#e5e7eb] rounded-[18px] p-6 shadow-[0_12px_30px_rgba(0,0,0,.08)]">
                                    <h3 className="mt-0 mb-2 text-[1.1rem] font-bold text-[#0f2743]">Compare Lending Options</h3>
                                    <p className="text-[#6b7280] m-0 text-sm">After calculating, give them a direct path to compare rates, check eligibility, or start pre-approval.</p>
                                </div>
                                <div className="bg-white border border-[#e5e7eb] rounded-[18px] p-6 shadow-[0_12px_30px_rgba(0,0,0,.08)]">
                                    <h3 className="mt-0 mb-2 text-[1.1rem] font-bold text-[#0f2743]">Reduce Friction</h3>
                                    <p className="text-[#6b7280] m-0 text-sm">Keep the path simple: calculator first, lender CTA second, optional lead capture third.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ── How It Works ── */}
                    <section className="py-16 px-4">
                        <div className="max-w-[1180px] mx-auto">
                            <div className="text-center max-w-[760px] mx-auto mb-7">
                                <h2 className="m-0 mb-2.5 text-[clamp(1.8rem,4vw,2.6rem)] leading-tight text-[#0f2743]">How It Works</h2>
                                <p className="m-0 text-[#6b7280]">Use this simple 3-step flow to turn calculator traffic into mortgage leads.</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="bg-white border border-[#e5e7eb] rounded-[18px] p-6 shadow-[0_12px_30px_rgba(0,0,0,.08)]">
                                    <div className="w-10 h-10 rounded-full bg-[#c58b2b]/20 text-[#0f2743] flex items-center justify-center font-bold mb-3.5">1</div>
                                    <h3 className="mt-0 mb-2 text-[1.1rem] font-bold text-[#0f2743]">Enter Loan Details</h3>
                                    <p className="text-[#6b7280] m-0 text-sm">Visitors plug in home price, down payment, term, taxes, insurance, and interest rate assumptions.</p>
                                </div>
                                <div className="bg-white border border-[#e5e7eb] rounded-[18px] p-6 shadow-[0_12px_30px_rgba(0,0,0,.08)]">
                                    <div className="w-10 h-10 rounded-full bg-[#c58b2b]/20 text-[#0f2743] flex items-center justify-center font-bold mb-3.5">2</div>
                                    <h3 className="mt-0 mb-2 text-[1.1rem] font-bold text-[#0f2743]">Review Estimated Payment</h3>
                                    <p className="text-[#6b7280] m-0 text-sm">Show principal and interest clearly, plus taxes and insurance so the result feels realistic.</p>
                                </div>
                                <div className="bg-white border border-[#e5e7eb] rounded-[18px] p-6 shadow-[0_12px_30px_rgba(0,0,0,.08)]">
                                    <div className="w-10 h-10 rounded-full bg-[#c58b2b]/20 text-[#0f2743] flex items-center justify-center font-bold mb-3.5">3</div>
                                    <h3 className="mt-0 mb-2 text-[1.1rem] font-bold text-[#0f2743]">Compare Real Offers</h3>
                                    <p className="text-[#6b7280] m-0 text-sm">Present a strong CTA to view lender options, begin pre-approval, or get matched with a mortgage partner.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ── Quote ── */}
                    <section className="py-16 px-4">
                        <div className="max-w-[1180px] mx-auto">
                            <div className="bg-gradient-to-b from-white to-[#f8fafc] border-l-4 border-[#c58b2b] rounded-[18px] p-6 border border-[#e5e7eb]">
                                <h2 className="mt-0 mb-2 text-[1.35rem] font-bold text-[#0f2743]">For maximum lead generation, do this next</h2>
                                <p className="m-0 text-[#6b7280]">Place one primary CTA above the calculator, one beside or below the results, and one final CTA near the bottom of the page. That gives visitors a clear next step whether they are ready immediately or need more trust first.</p>
                            </div>
                        </div>
                    </section>

                    {/* ── FAQ ── */}
                    <section className="py-16 px-4 bg-white">
                        <div className="max-w-[1180px] mx-auto">
                            <div className="text-center max-w-[760px] mx-auto mb-7">
                                <h2 className="m-0 mb-2.5 text-[clamp(1.8rem,4vw,2.6rem)] leading-tight text-[#0f2743]">Frequently Asked Questions</h2>
                                <p className="m-0 text-[#6b7280]">These FAQs help with trust, SEO, and conversion.</p>
                            </div>
                            <div className="max-w-[900px] mx-auto space-y-3">
                                <details className="bg-white border border-[#e5e7eb] rounded-[14px] px-4 py-4 [&>summary]:cursor-pointer [&>summary]:font-bold [&>summary]:text-[#0f2743] [&>summary]:mb-2" open>
                                    <summary>How accurate is this mortgage calculator?</summary>
                                    <p className="text-[#6b7280] m-0 text-sm">This calculator gives an estimate based on the numbers you enter. Your actual rate, monthly payment, taxes, insurance, and loan terms may vary based on lender guidelines and your credit profile.</p>
                                </details>
                                <details className="bg-white border border-[#e5e7eb] rounded-[14px] px-4 py-4 [&>summary]:cursor-pointer [&>summary]:font-bold [&>summary]:text-[#0f2743] [&>summary]:mb-2">
                                    <summary>Does checking mortgage options hurt my credit?</summary>
                                    <p className="text-[#6b7280] m-0 text-sm">You can phrase this carefully based on your lender partner&apos;s approved language. Keep your wording aligned with the lender&apos;s compliance requirements.</p>
                                </details>
                                <details className="bg-white border border-[#e5e7eb] rounded-[14px] px-4 py-4 [&>summary]:cursor-pointer [&>summary]:font-bold [&>summary]:text-[#0f2743] [&>summary]:mb-2">
                                    <summary>Can I use this calculator if I am moving to Tennessee from another state?</summary>
                                    <p className="text-[#6b7280] m-0 text-sm">Yes. This page is designed to help relocation buyers estimate affordability before speaking with a lender or local real estate professional.</p>
                                </details>
                                <details className="bg-white border border-[#e5e7eb] rounded-[14px] px-4 py-4 [&>summary]:cursor-pointer [&>summary]:font-bold [&>summary]:text-[#0f2743] [&>summary]:mb-2">
                                    <summary>What should I do after I calculate my payment?</summary>
                                    <p className="text-[#6b7280] m-0 text-sm">The best next step is to compare real mortgage offers, check current rates, or begin the pre-approval process with a trusted lending partner.</p>
                                </details>
                            </div>
                        </div>
                    </section>

                    {/* ── Final CTA ── */}
                    <section className="py-16 px-4">
                        <div className="max-w-[1180px] mx-auto">
                            <div className="bg-[#0f2743] text-white text-center rounded-[26px] py-10 px-6">
                                <h2 className="text-white mt-0 mb-4 text-[clamp(1.5rem,3vw,2rem)]">Ready to See Real Tennessee Mortgage Options?</h2>
                                <p className="text-white/90 max-w-[720px] mx-auto mb-5">
                                    Use the calculator, review your estimated payment, and then take the next step with a trusted lending partner. This is where you place your main LendingTree link, embedded widget, or lead form handoff.
                                </p>
                                <a
                                    href="#rates"
                                    onClick={scrollToTodayRates}
                                    className="inline-block py-3.5 px-5 rounded-xl font-bold bg-[#c58b2b] text-[#111827] hover:-translate-y-px transition-transform"
                                >
                                    Check Today&apos;s Rates
                                </a>
                                <p className="text-[#9ca3af] text-[.9rem] mt-4 mb-0">
                                    WhyTennessee.com may be compensated by lending partners when visitors click or submit information through certain links or forms.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* SEO copy ── */}
                    <section className="py-10 px-4 bg-[#f7f8fb]">
                        <div className="max-w-[1180px] mx-auto">
                            <div className="bg-white border border-[#e5e7eb] rounded-[18px] p-6 shadow-[0_12px_30px_rgba(0,0,0,.08)]">
                                <h3 className="mt-0 mb-3 text-[1.35rem] font-bold text-[#0f2743]">WhyTennessee.com Tennessee Mortgage Calculator</h3>
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