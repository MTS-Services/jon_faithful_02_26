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
            <label htmlFor={id} className="text-[0.95rem] font-bold text-[#21445f]">
                {label}
            </label>
            <input
                id={id}
                type="number"
                value={value}
                min={0}
                step={step}
                onChange={(e) => onChange(id, parseFloat(e.target.value) || 0)}
                className="w-full px-[15px] py-[15px] border border-[#dce7f2] rounded-[14px] text-base outline-none bg-white text-[#163047] transition-[border-color,box-shadow] duration-200 focus:border-[#1d5f95] focus:shadow-[0_0_0_4px_rgba(29,95,149,0.12)]"
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
            className={`flex justify-between gap-4 py-[11px] ${last ? "" : "border-b border-[#dce7f2]"
                }`}
        >
            <span className="text-[#5f7284] font-semibold">{label}</span>
            <span className="font-extrabold text-right text-[#153954]">
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
                className="min-h-screen p-6 font-[Arial,Helvetica,sans-serif] text-[#163047] leading-relaxed"
                style={{ background: "linear-gradient(180deg,#f5f8fc 0%,#eef4fb 100%)" }}
            >
                <div className="container px-4 mx-auto">

                    {/* Brand pill */}
                    <div
                        className="inline-flex items-center gap-[10px] rounded-full px-[14px] py-2 text-[0.95rem] font-bold mb-4 border text-[#1d5f95]"
                        style={{
                            background: "rgba(29,95,149,0.08)",
                            borderColor: "rgba(29,95,149,0.14)",
                        }}
                    >
                        WhyTennessee.com • Relocation Home Cost Tool
                    </div>

                    {/* Hero strip */}
                    <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-[18px] mb-[18px] items-stretch">

                        {/* Hero copy */}
                        <div
                            className="rounded-[24px] p-[26px_28px] border border-[#dce7f2] overflow-hidden relative"
                            style={{
                                background:
                                    "linear-gradient(135deg,rgba(29,95,149,0.10),rgba(62,139,91,0.10),rgba(255,255,255,0.92))",
                                boxShadow: "0 18px 50px rgba(17,54,86,0.12)",
                            }}
                        >
                            <h1 className="m-0 mb-[10px] text-[2.25rem] leading-[1.05] text-[#0f2d46]">
                                Estimate Your Tennessee Monthly Mortgage Payment
                            </h1>
                            <p className="m-0 text-[#5f7284] text-[1.02rem]">
                                Compare the cost of buying a home across Tennessee with a calculator designed for
                                relocation buyers, families, and anyone planning a move to the Volunteer State.
                            </p>
                        </div>

                        {/* Hero badges (can be driven by admin presets) */}
                        <div
                            className="rounded-[24px] p-[26px_28px] border border-[#dce7f2] flex flex-wrap gap-[10px] content-center"
                            style={{
                                background:
                                    "linear-gradient(180deg,rgba(255,255,255,0.95),rgba(247,251,255,0.95))",
                                boxShadow: "0 18px 50px rgba(17,54,86,0.12)",
                            }}
                        >
                            {resolvedCityPresets.map((c) => (
                                <span
                                    key={c.label}
                                    className="inline-flex items-center px-[14px] py-[11px] rounded-full text-[0.95rem] font-extrabold text-[#1a4567] border border-[rgba(29,95,149,0.14)]"
                                    style={{
                                        background:
                                            "linear-gradient(135deg,rgba(29,95,149,0.09),rgba(62,139,91,0.11))",
                                    }}
                                >
                                    {c.label}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Calculator card */}
                    <div
                        className="rounded-[24px] border border-[#dce7f2] overflow-hidden"
                        style={{
                            background: "rgba(255,255,255,0.96)",
                            boxShadow: "0 18px 50px rgba(17,54,86,0.12)",
                        }}
                    >
                        {/* Card header */}
                        <div
                            className="px-[34px] pt-[34px] pb-[22px] border-b border-[#dce7f2]"
                            style={{
                                background:
                                    "linear-gradient(135deg,rgba(29,95,149,0.06),rgba(62,139,91,0.08))",
                            }}
                        >
                            <div className="inline-flex items-center gap-[10px] mb-[10px] font-black text-[#17466a]">
                                <div className="logo-mark"><span className="logo-mountains"></span><span>WhyTennessee.com</span></div>
                            </div>
                            <h2 className="m-0 mb-[10px] text-[2.2rem] leading-[1.1] text-[#0f2d46]">
                                WhyTennessee.com Mortgage Payment Calculator
                            </h2>
                            <p className="m-0 text-[#5f7284] text-[1.02rem] max-w-[760px]">
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
                                <span className="block mb-[10px] text-[0.92rem] font-extrabold text-[#21445f]">
                                    Quick city examples
                                </span>
                                <div className="flex flex-wrap gap-[10px] mb-[22px]">
                                    {resolvedCityPresets.map((preset) => (
                                        <button
                                            key={preset.label}
                                            type="button"
                                            onClick={() => handlePreset(preset)}
                                            className="border border-[#dce7f2] bg-white text-[#163047] px-[14px] py-[10px] rounded-full text-[0.92rem] font-extrabold cursor-pointer hover:bg-[#f7fbff] hover:border-primary transition-colors duration-150"
                                        >
                                            {preset.label}
                                        </button>
                                    ))}
                                </div>

                                <h3 className="m-0 mb-[18px] text-[1.1rem] font-extrabold text-[#12314a]">
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
                                    <button
                                        type="button"
                                        onClick={() => setResults(computeResults(form))}
                                        className="rounded-[14px] px-5 py-[14px] text-base font-extrabold text-white cursor-pointer border-0 active:translate-y-px transition-transform duration-75"
                                        style={{
                                            background: "linear-gradient(135deg,#1d5f95,#2e79b1)",
                                            boxShadow: "0 10px 20px rgba(17,54,86,0.08)",
                                        }}
                                        onMouseOver={(e) =>
                                        ((e.currentTarget as HTMLButtonElement).style.background =
                                            "linear-gradient(135deg,#14476f,#1d5f95)")
                                        }
                                        onMouseOut={(e) =>
                                        ((e.currentTarget as HTMLButtonElement).style.background =
                                            "linear-gradient(135deg,#1d5f95,#2e79b1)")
                                        }
                                    >
                                        Calculate Payment
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleReset}
                                        className="rounded-[14px] px-5 py-[14px] text-base font-extrabold text-[#163047] cursor-pointer bg-white border border-[#dce7f2] hover:bg-[#f7fafc] transition-colors duration-200"
                                    >
                                        Reset
                                    </button>
                                </div>
                            </div>

                            {/* ── Result side ── */}
                            <div
                                className="p-8 border-t md:border-t-0 md:border-l border-[#dce7f2]"
                                style={{
                                    background: "linear-gradient(180deg,#f7fbff 0%,#f2f8f3 100%)",
                                }}
                            >
                                <div className="text-[0.9rem] font-extrabold tracking-[0.08em] uppercase text-[#1d5f95] mb-2">
                                    Estimated Monthly Payment
                                </div>

                                <div
                                    className="rounded-[16px] p-[14px_16px] text-[0.95rem] text-[#234b34] mb-4 border"
                                    style={{
                                        background: "rgba(62,139,91,0.08)",
                                        borderColor: "rgba(62,139,91,0.16)",
                                    }}
                                >
                                    Planning a move to Tennessee? Use this calculator to compare the cost of buying in
                                    places like Knoxville, Nashville, Clarksville, Chattanooga, Johnson City, and Kingsport.
                                </div>

                                <div className="text-[2.8rem] font-black mb-[18px] text-[#102c45] leading-none">
                                    {currency.format(results.totalMonthly)}
                                </div>

                                <div
                                    className="bg-white border border-[#dce7f2] rounded-[20px] p-[18px] mb-4"
                                    style={{ boxShadow: "0 12px 28px rgba(17,54,86,0.05)" }}
                                >
                                    <ResultRow label="Loan Amount" value={results.loanAmount} />
                                    <ResultRow label="Principal & Interest" value={results.principalInterest} />
                                    <ResultRow label="Property Taxes" value={results.monthlyTaxes} />
                                    <ResultRow label="Home Insurance" value={results.monthlyInsurance} />
                                    <ResultRow label="HOA" value={results.hoa} />
                                    <ResultRow label="PMI" value={results.pmi} last />
                                </div>

                                <p className="text-[0.9rem] text-[#5f7284] mt-[10px]">
                                    This calculator provides an estimate only and does not include every possible fee.
                                    Actual mortgage payments may vary based on lender, credit score, taxes, insurance,
                                    and loan program.
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* SEO copy */}
                    <div
                        className="bg-white mt-5 border border-[#dce7f2] rounded-[24px] p-[30px]"
                        style={{ boxShadow: "0 18px 50px rgba(17,54,86,0.12)" }}
                    >
                        <h3 className="mt-0 mb-[14px] text-[1.5rem] text-[#12314a]">
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