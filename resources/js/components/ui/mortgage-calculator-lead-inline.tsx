import { useEffect, useState } from "react";

type LeadFormData = {
    firstName: string;
    email: string;
    phone: string;
    timeline: string;
    purchasePrice: string;
    downPayment: string;
    location: string;
    creditScore: string;
    firstTimeBuyer: string;
    consent: boolean;
};

type MortgageCalculatorLeadInlineProps = {
    homePrice: number;
    downPayment: number;
    region: string;
    leadSubmitUrl: string;
};

function getPurchasePriceRange(price: number): string {
    if (price < 200000) return "under-200k";
    if (price < 300000) return "200k-300k";
    if (price < 400000) return "300k-400k";
    return "400k-plus";
}

function getDownPaymentRange(homePrice: number, downPayment: number): string {
    if (!homePrice || !downPayment) return "";
    const pct = (downPayment / homePrice) * 100;
    if (pct < 3) return "0-3-percent";
    if (pct < 5) return "3-5-percent";
    if (pct < 10) return "5-10-percent";
    if (pct < 20) return "10-20-percent";
    return "20-plus-percent";
}

function isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function formatPhone(value: string): string {
    const digits = value.replace(/\D/g, "").slice(0, 10);
    if (digits.length < 4) return digits;
    if (digits.length < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
}

function getLocationLabel(region: string): string {
    switch (region) {
        case "east-tennessee":
            return "East Tennessee";
        case "middle-tennessee":
            return "Middle Tennessee";
        case "west-tennessee":
            return "West Tennessee";
        default:
            return region || "Tennessee";
    }
}

function InlineLeadCaptureForm({
    primarySubmitUrl,
    initialValues,
}: {
    primarySubmitUrl: string;
    initialValues: Pick<LeadFormData, "purchasePrice" | "downPayment" | "location">;
}) {
    const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState("");
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [formData, setFormData] = useState<LeadFormData>({
        firstName: "",
        email: "",
        phone: "",
        timeline: "",
        purchasePrice: initialValues.purchasePrice,
        downPayment: initialValues.downPayment,
        location: initialValues.location,
        creditScore: "",
        firstTimeBuyer: "",
        consent: false,
    });

    useEffect(() => {
        setFormData((prev) => ({
            ...prev,
            purchasePrice: initialValues.purchasePrice,
            downPayment: initialValues.downPayment,
            location: initialValues.location,
        }));
    }, [initialValues.purchasePrice, initialValues.downPayment, initialValues.location]);

    const resetForm = () => {
        setStep(1);
        setSubmitMessage("");
        setErrors({});
        setFormData({
            firstName: "",
            email: "",
            phone: "",
            timeline: "",
            purchasePrice: initialValues.purchasePrice,
            downPayment: initialValues.downPayment,
            location: initialValues.location,
            creditScore: "",
            firstTimeBuyer: "",
            consent: false,
        });
    };

    const updateField = (field: keyof LeadFormData, value: string | boolean) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
        setErrors((prev) => ({ ...prev, [field]: "" }));
    };

    const validateCurrentStep = (): boolean => {
        const nextErrors: Record<string, string> = {};

        if (step === 1) {
            if (!formData.firstName.trim()) nextErrors.firstName = "First name is required.";
            if (!formData.email.trim()) nextErrors.email = "Email is required.";
            else if (!isValidEmail(formData.email)) nextErrors.email = "Enter a valid email address.";
        }

        if (step === 2) {
            if (formData.phone.replace(/\D/g, "").length < 10) nextErrors.phone = "Phone number is required.";
            if (!formData.timeline) nextErrors.timeline = "Select a buying timeline.";
        }

        if (step === 3 && !formData.consent) {
            nextErrors.consent = "Consent is required before submitting.";
        }

        setErrors(nextErrors);
        return Object.keys(nextErrors).length === 0;
    };

    const goNext = () => {
        if (!validateCurrentStep()) return;
        setStep((prev) => (prev === 1 ? 2 : prev === 2 ? 3 : prev));
    };

    const goBack = () => {
        setErrors({});
        setStep((prev) => (prev === 3 ? 2 : prev === 2 ? 1 : prev));
    };

    const submitLead = async () => {
        if (!validateCurrentStep()) return;

        setIsSubmitting(true);
        setSubmitMessage("");

        try {
            const csrfToken = document
                .querySelector<HTMLMetaElement>('meta[name="csrf-token"]')
                ?.getAttribute("content");

            const response = await fetch(primarySubmitUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "X-Requested-With": "XMLHttpRequest",
                    ...(csrfToken ? { "X-CSRF-TOKEN": csrfToken } : {}),
                },
                body: JSON.stringify({
                    first_name: formData.firstName,
                    email: formData.email,
                    phone_number: formData.phone,
                    timeline: formData.timeline,
                    purchase_price_range: formData.purchasePrice,
                    down_payment_range: formData.downPayment,
                    location: getLocationLabel(formData.location),
                    credit_score: formData.creditScore || null,
                    first_time_buyer: formData.firstTimeBuyer || null,
                    consent: formData.consent,
                }),
            });

            if (!response.ok) {
                const errorPayload = (await response.json().catch(() => null)) as
                    | { message?: string; errors?: Record<string, string[]> }
                    | null;

                if (response.status === 422 && errorPayload?.errors) {
                    const validationErrors = errorPayload.errors;
                    setErrors((prev) => ({
                        ...prev,
                        firstName: validationErrors.first_name?.[0] || "",
                        email: validationErrors.email?.[0] || "",
                        phone: validationErrors.phone_number?.[0] || "",
                        timeline: validationErrors.timeline?.[0] || "",
                        consent: validationErrors.consent?.[0] || "",
                    }));
                    setSubmitMessage(errorPayload.message || "Please fix the highlighted fields and try again.");
                    return;
                }

                if (response.status === 419) {
                    setSubmitMessage("Your session expired. Please refresh the page and submit again.");
                    return;
                }

                setSubmitMessage(errorPayload?.message || "We could not submit right now. Please try again in a moment.");
                return;
            }

            await response.json().catch(() => null);
            setStep(4);
        } catch {
            setSubmitMessage("We could not submit right now. Please try again in a moment.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            {step !== 4 && (
                <div className="mb-6">
                    <div className="mb-2 flex items-center justify-between text-sm text-slate-500">
                        <span>Step {step} of 3</span>
                        <span>{step === 1 ? "Basics" : step === 2 ? "Buyer details" : "Consent"}</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                        <div
                            className={`h-full rounded-full bg-slate-900 transition-all ${step === 1 ? "w-1/3" : step === 2 ? "w-2/3" : "w-full"
                                }`}
                        />
                    </div>
                </div>
            )}

            {/* ── Step 1: Name + Email ── */}
            {step === 1 && (
                <div className="space-y-5">
                    <div>
                        <h3 className="text-2xl font-bold text-slate-900">Where should we send your results?</h3>
                        <p className="mt-2 text-slate-600">Start with basic contact details so a lender can follow up.</p>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-700">First Name *</label>
                            <input
                                type="text"
                                className="w-full rounded-2xl border border-slate-300 px-4 py-3"
                                value={formData.firstName}
                                onChange={(e) => updateField("firstName", e.target.value)}
                            />
                            {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>}
                        </div>
                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-700">Email *</label>
                            <input
                                type="email"
                                className="w-full rounded-2xl border border-slate-300 px-4 py-3"
                                value={formData.email}
                                onChange={(e) => updateField("email", e.target.value)}
                            />
                            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <button type="button" onClick={goNext} className="rounded-2xl bg-slate-900 px-6 py-3 font-semibold text-white">
                            Continue
                        </button>
                    </div>
                </div>
            )}

            {/* ── Step 2: Phone, Timeline, prefilled fields, Credit Score ── */}
            {step === 2 && (
                <div className="space-y-5">
                    <div>
                        <h3 className="text-2xl font-bold text-slate-900">Tell us about your home search</h3>
                        <p className="mt-2 text-slate-600">Your calculator values are already prefilled below.</p>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-700">Phone *</label>
                            <input
                                type="tel"
                                className="w-full rounded-2xl border border-slate-300 px-4 py-3"
                                value={formData.phone}
                                onChange={(e) => updateField("phone", formatPhone(e.target.value))}
                            />
                            {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                        </div>
                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-700">Buying Timeline *</label>
                            <select
                                className="w-full rounded-2xl border border-slate-300 px-4 py-3"
                                value={formData.timeline}
                                onChange={(e) => updateField("timeline", e.target.value)}
                            >
                                <option value="">Select timeline</option>
                                <option value="asap">ASAP</option>
                                <option value="0-3-months">0–3 months</option>
                                <option value="3-6-months">3–6 months</option>
                                <option value="6-plus-months">6+ months</option>
                            </select>
                            {errors.timeline && <p className="mt-1 text-sm text-red-600">{errors.timeline}</p>}
                        </div>
                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-700">Purchase Price</label>
                            <input
                                type="text"
                                readOnly
                                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-600"
                                value={formData.purchasePrice}
                            />
                        </div>
                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-700">Down Payment</label>
                            <input
                                type="text"
                                readOnly
                                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-600"
                                value={formData.downPayment}
                            />
                        </div>
                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-700">Location</label>
                            <input
                                type="text"
                                readOnly
                                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-600"
                                value={getLocationLabel(formData.location)}
                            />
                        </div>
                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-700">Credit Score</label>
                            <select
                                className="w-full rounded-2xl border border-slate-300 px-4 py-3"
                                value={formData.creditScore}
                                onChange={(e) => updateField("creditScore", e.target.value)}
                            >
                                <option value="">Optional</option>
                                <option value="720-plus">720+</option>
                                <option value="680-719">680–719</option>
                                <option value="620-679">620–679</option>
                                <option value="below-620">Below 620</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <button type="button" onClick={goBack} className="rounded-2xl border px-6 py-3 font-semibold">
                            Back
                        </button>
                        <button type="button" onClick={goNext} className="rounded-2xl bg-slate-900 px-6 py-3 font-semibold text-white">
                            Continue
                        </button>
                    </div>
                </div>
            )}

            {/* ── Step 3: First-Time Buyer, Consent, Submit ── */}
            {step === 3 && (
                <div className="space-y-5">
                    <div>
                        <h3 className="text-2xl font-bold text-slate-900">Consent and submit</h3>
                        <p className="mt-2 text-slate-600">This final step makes the lead compliant for lender follow-up.</p>
                    </div>
                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700">First-Time Homebuyer?</label>
                        <select
                            className="w-full rounded-2xl border border-slate-300 px-4 py-3"
                            value={formData.firstTimeBuyer}
                            onChange={(e) => updateField("firstTimeBuyer", e.target.value)}
                        >
                            <option value="">Optional</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <label className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                        <input
                            type="checkbox"
                            checked={formData.consent}
                            onChange={(e) => updateField("consent", e.target.checked)}
                            className="mt-1 h-4 w-4"
                        />
                        <span className="text-sm leading-6 text-slate-600">
                            I agree to be contacted by lending partners via call, text, or email. We are not a lender.
                        </span>
                    </label>
                    {errors.consent && <p className="mt-1 text-sm text-red-600">{errors.consent}</p>}
                    {submitMessage && (
                        <div className="rounded-2xl bg-red-50 p-4 text-sm text-red-700">{submitMessage}</div>
                    )}
                    <div className="flex items-center justify-between">
                        <button type="button" onClick={goBack} className="rounded-2xl border px-6 py-3 font-semibold">
                            Back
                        </button>
                        <button
                            type="button"
                            onClick={submitLead}
                            disabled={isSubmitting}
                            className="rounded-2xl bg-slate-900 px-6 py-3 font-semibold text-white disabled:opacity-60"
                        >
                            {isSubmitting ? "Submitting..." : "Get My Loan Options"}
                        </button>
                    </div>
                </div>
            )}

            {/* ── Step 4: Success ── */}
            {step === 4 && (
                <div className="text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-2xl">✓</div>
                    <h3 className="mt-5 text-3xl font-bold text-slate-900">You're matched 🎉</h3>
                    <p className="mx-auto mt-3 max-w-xl text-slate-600">
                        A local Tennessee lender will review the inquiry and reach out with available mortgage options.
                    </p>
                    {submitMessage && (
                        <div className="mx-auto mt-4 max-w-xl rounded-2xl bg-slate-100 p-4 text-sm text-slate-700">
                            {submitMessage}
                        </div>
                    )}
                    <button
                        type="button"
                        onClick={resetForm}
                        className="mt-6 rounded-2xl border px-6 py-3 font-semibold"
                    >
                        Submit Another Inquiry
                    </button>
                </div>
            )}
        </div>
    );
}

export default function MortgageCalculatorLeadInline({
    homePrice,
    downPayment,
    region,
    leadSubmitUrl,
}: MortgageCalculatorLeadInlineProps) {
    const purchasePrice = getPurchasePriceRange(homePrice);
    const downPaymentRange = getDownPaymentRange(homePrice, downPayment);

    return (
        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-6 text-center">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                    Want to See What You Qualify For?
                </h2>
                <p className="mx-auto mt-3 max-w-2xl text-slate-600">
                    Get matched with a local Tennessee lender and see your real loan options.
                </p>
            </div>
            <div className="mb-6 grid gap-3 rounded-2xl bg-slate-50 p-4 text-sm text-slate-700 sm:grid-cols-2 lg:grid-cols-4">
                <div>✅ 100% Free to Use</div>
                <div>✅ No Obligation</div>
                <div>✅ No Impact on Your Credit Score</div>
                <div>✅ Matched with Tennessee Lenders</div>
            </div>
            <InlineLeadCaptureForm
                primarySubmitUrl={leadSubmitUrl}
                initialValues={{
                    purchasePrice,
                    downPayment: downPaymentRange,
                    location: region || "",
                }}
            />
        </section>
    );
}