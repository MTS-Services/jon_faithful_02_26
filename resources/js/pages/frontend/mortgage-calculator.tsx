import { useState, useEffect, useCallback } from "react";
import { Link, usePage } from "@inertiajs/react";
import FrontendLayout from "@/layouts/frontend-layout";

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
    const totalMonthly =
        principalInterest + monthlyTaxes + monthlyInsurance + form.hoa + form.pmi;

    return {
        loanAmount,
        principalInterest,
        monthlyTaxes,
        monthlyInsurance,
        hoa: form.hoa,
        pmi: form.pmi,
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
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={id} className="text-[0.95rem] font-bold text-text-secondary">
                {label}
            </label>
            <input
                id={id}
                type="number"
                value={value}
                min={0}
                step={step}
                onChange={(e) => onChange(id, parseFloat(e.target.value) || 0)}
                className="w-full px-[15px] py-[15px] border border-border rounded-[14px] text-base outline-none bg-white text-foreground transition-[border-color,box-shadow] duration-200 focus:border-primary focus:shadow-[0_0_0_4px_rgba(27,42,74,0.12)]"
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
            className={`flex justify-between gap-4 py-[11px] ${last ? "" : "border-b border-border"
                }`}
        >
            <span className="text-text-muted font-semibold">{label}</span>
            <span className="font-extrabold text-right text-text-primary">
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
        }
        | undefined;

    const resolvedDefaults: FormState = {
        ...FALLBACK_DEFAULTS,
        ...(calculatorConfig?.defaults ?? {}),
    };

    const resolvedCityPresets: CityPreset[] =
        calculatorConfig?.cityPresets && calculatorConfig.cityPresets.length > 0
            ? calculatorConfig.cityPresets
            : FALLBACK_CITY_PRESETS;

    const [form, setForm] = useState<FormState>(resolvedDefaults);
    const [results, setResults] = useState<Results>(computeResults(resolvedDefaults));

    useEffect(() => {
        setResults(computeResults(form));
    }, [form]);

    useEffect(() => {
        // If admin updates defaults in the backend, keep the UI in sync
        setForm(resolvedDefaults);
        setResults(computeResults(resolvedDefaults));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [JSON.stringify(resolvedDefaults)]);

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
    }, []);

    const handleReset = useCallback(() => setForm(resolvedDefaults), [resolvedDefaults]);

    return (
        <FrontendLayout activePage="buying" subPage="mortgage-calculator">
            <div
                className="min-h-screen p-6 font-[Arial,Helvetica,sans-serif] text-foreground leading-relaxed"
                style={{ background: "linear-gradient(180deg,var(--background) 0%,var(--primary-background) 100%)" }}
            >
                <div className="container px-4 mx-auto">

                    {/* Brand pill */}
                    <div
                        className="inline-flex items-center gap-[10px] rounded-full px-[14px] py-2 text-[0.95rem] font-bold mb-4 border border-border text-primary bg-primary/10"
                    >
                        WhyTennessee.com • Relocation Home Cost Tool
                    </div>

                    {/* Hero strip */}
                    <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-[18px] mb-[18px] items-stretch">

                        {/* Hero copy */}
                        <div
                            className="rounded-[24px] p-[26px_28px] border border-border overflow-hidden relative bg-card"
                            style={{
                                boxShadow: "var(--shadow-card)",
                            }}
                        >
                            <h1 className="m-0 mb-[10px] text-[2.25rem] leading-[1.05] text-text-primary">
                                Estimate Your Tennessee Monthly Mortgage Payment
                            </h1>
                            <p className="m-0 text-text-muted text-[1.02rem]">
                                Compare the cost of buying a home across Tennessee with a calculator designed for
                                relocation buyers, families, and anyone planning a move to the Volunteer State.
                            </p>
                        </div>

                        {/* Hero badges (can be driven by admin presets) */}
                        <div
                            className="rounded-[24px] p-[26px_28px] border border-border flex flex-wrap gap-[10px] content-center bg-card"
                            style={{
                                boxShadow: "var(--shadow-card)",
                            }}
                        >
                            {resolvedCityPresets.map((c) => (
                                <span
                                    key={c.label}
                                    className="inline-flex items-center px-[14px] py-[11px] rounded-full text-[0.95rem] font-extrabold text-primary border border-border bg-primary/10"
                                >
                                    {c.label}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Calculator card */}
                    <div
                        className="rounded-[24px] border border-border overflow-hidden bg-card"
                        style={{
                            boxShadow: "var(--shadow-card)",
                        }}
                    >
                        {/* Card header */}
                        <div
                            className="px-[34px] pt-[34px] pb-[22px] border-b border-border bg-primary/5"
                        >
                            <div className="inline-flex items-center gap-[10px] mb-[10px] font-black text-primary">
                                <div className="logo-mark"><span className="logo-mountains"></span><span>WhyTennessee.com</span></div>
                            </div>
                            <h2 className="m-0 mb-[10px] text-[2.2rem] leading-[1.1] text-text-primary">
                                WhyTennessee.com Mortgage Payment Calculator
                            </h2>
                            <p className="m-0 text-text-muted text-[1.02rem] max-w-[760px]">
                                Estimate your monthly Tennessee mortgage payment, including principal, interest,
                                property taxes, homeowners insurance, HOA dues, and PMI. Built for families and
                                buyers relocating to Tennessee.
                            </p>
                        </div>

                        {/* Two-column body */}
                        <div className="grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr]">

                            {/* ── Form side ── */}
                            <div className="p-8">
                                {/* City preset buttons */}
                                <span className="block mb-[10px] text-[0.92rem] font-extrabold text-text-secondary">
                                    Quick city examples
                                </span>
                                <div className="flex flex-wrap gap-[10px] mb-[22px]">
                                    {resolvedCityPresets.map((preset) => (
                                        <button
                                            key={preset.label}
                                            type="button"
                                            onClick={() => handlePreset(preset)}
                                            className="border border-border bg-white text-foreground px-[14px] py-[10px] rounded-full text-[0.92rem] font-extrabold cursor-pointer hover:bg-muted hover:border-primary transition-colors duration-150"
                                        >
                                            {preset.label}
                                        </button>
                                    ))}
                                </div>

                                <h3 className="m-0 mb-[18px] text-[1.1rem] font-extrabold text-text-primary">
                                    Enter your home buying details
                                </h3>

                                <div className="grid grid-cols-2 gap-[18px]">
                                    <Field id="homePrice" label="Home Price ($)" value={form.homePrice} step={1000} onChange={handleChange} />
                                    <Field id="downPayment" label="Down Payment ($)" value={form.downPayment} step={1000} onChange={handleChange} />
                                    <Field id="interestRate" label="Interest Rate (%)" value={form.interestRate} step={0.01} onChange={handleChange} />
                                    <Field id="loanTerm" label="Loan Term (Years)" value={form.loanTerm} step={1} onChange={handleChange} />
                                    <Field id="propertyTax" label="Annual Property Taxes ($)" value={form.propertyTax} step={100} onChange={handleChange} />
                                    <Field id="insurance" label="Annual Home Insurance ($)" value={form.insurance} step={100} onChange={handleChange} />
                                    <Field id="hoa" label="Monthly HOA ($)" value={form.hoa} step={25} onChange={handleChange} />
                                    <Field id="pmi" label="Monthly PMI ($)" value={form.pmi} step={25} onChange={handleChange} />
                                </div>

                                <div className="flex gap-3 mt-6 flex-wrap">
                                    {/* <button
                                        type="button"
                                        onClick={() => setResults(computeResults(form))}
                                        className="rounded-[14px] px-5 py-[14px] text-base font-extrabold text-primary-foreground cursor-pointer border-0 active:translate-y-px transition-transform duration-75 bg-primary hover:bg-text-secondary shadow-[0_10px_20px_rgba(27,42,74,0.08)]"
                                    >
                                        Calculate Payment
                                    </button> */}
                                    <button
                                        type="button"
                                        onClick={handleReset}
                                        className="rounded-[14px] px-5 py-[14px] text-base font-extrabold text-white cursor-pointer bg-primary border border-border hover:bg-secondary transition-colors duration-200"
                                    >
                                        Reset
                                    </button>
                                </div>
                            </div>

                            {/* ── Result side ── */}
                            <div
                                className="p-8 border-t md:border-t-0 md:border-l border-border"
                                style={{
                                    background: "linear-gradient(180deg,var(--background) 0%,var(--primary-background) 100%)",
                                }}
                            >
                                <div className="text-[0.9rem] font-extrabold tracking-[0.08em] uppercase text-primary mb-2">
                                    Estimated Monthly Payment
                                </div>

                                <div
                                    className="rounded-[16px] p-[14px_16px] text-[0.95rem] text-text-secondary mb-4 border border-border bg-secondary/10"
                                >
                                    Planning a move to Tennessee? Use this calculator to compare the cost of buying in
                                    places like Knoxville, Nashville, Clarksville, Chattanooga, Johnson City, and Kingsport.
                                </div>

                                <div className="text-[2.8rem] font-black mb-[18px] text-text-primary leading-none">
                                    {currency.format(results.totalMonthly)}
                                </div>

                                <div
                                    className="bg-white border border-border rounded-[20px] p-[18px] mb-4"
                                    style={{ boxShadow: "var(--shadow-card)" }}
                                >
                                    <ResultRow label="Loan Amount" value={results.loanAmount} />
                                    <ResultRow label="Principal & Interest" value={results.principalInterest} />
                                    <ResultRow label="Property Taxes" value={results.monthlyTaxes} />
                                    <ResultRow label="Home Insurance" value={results.monthlyInsurance} />
                                    <ResultRow label="HOA" value={results.hoa} />
                                    <ResultRow label="PMI" value={results.pmi} last />
                                </div>

                                <p className="text-[0.9rem] text-text-muted mt-[10px]">
                                    This calculator provides an estimate only and does not include every possible fee.
                                    Actual mortgage payments may vary based on lender, credit score, taxes, insurance,
                                    and loan program.
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* SEO copy */}
                    <div
                        className="bg-white mt-5 border border-border rounded-[24px] p-[30px]"
                        style={{ boxShadow: "var(--shadow-card)" }}
                    >
                        <h3 className="mt-0 mb-[14px] text-[1.5rem] text-text-primary">
                            WhyTennessee.com Tennessee Mortgage Calculator
                        </h3>
                        <p>
                            Use the WhyTennessee.com mortgage payment calculator to estimate your monthly home payment
                            based on home price, down payment, interest rate, property taxes, home insurance, HOA fees,
                            and PMI. This calculator is built for people moving to Tennessee and comparing the cost of
                            buying a home in Knoxville, Nashville, Chattanooga, Clarksville, Franklin, Johnson City,
                            and Kingsport.
                        </p>
                        <p className="mb-0">
                            If you are relocating to Tennessee, understanding your estimated monthly mortgage payment
                            is one of the most important parts of planning your budget. A full house payment usually
                            includes principal, interest, Tennessee property taxes, homeowners insurance, and sometimes
                            HOA dues or private mortgage insurance. This calculator helps buyers get a realistic estimate
                            before they start house hunting and makes it easier to compare affordable cities in Tennessee.
                        </p>
                    </div>

                </div>
            </div>
        </FrontendLayout>
    );
}