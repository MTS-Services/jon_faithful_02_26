import { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";

type CityPreset = {
    label: string;
    price: number;
    tax: number;
    insurance: number;
};

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

type CalculatorSnapshot = {
    home_price: number;
    down_payment: number;
    interest_rate: number;
    loan_term: number;
    monthly_payment: number;
};

type MortgageCalculatorLeadInlineProps = {
    homePrice: number;
    downPayment: number;
    region: string;
    leadSubmitUrl: string;
    cityPresets: CityPreset[];
    calculatorSnapshot: CalculatorSnapshot;
    fallbackRedirectUrl?: string;
};

const CITY_EXPLORE_ROUTE: Record<string, string> = {
    Nashville: "frontend.livingInNashville",
    Knoxville: "frontend.livingInKnoxville",
    Murfreesboro: "frontend.livingInMurfreesboro",
    Chattanooga: "frontend.livingInChattanooga",
    Clarksville: "frontend.livingInClarksville",
    "Johnson City": "frontend.livingInJohnsonCity",
    Kingsport: "frontend.livingInKingsport",
    Franklin: "frontend.livingInFranklin",
    Memphis: "frontend.living-in-memphis",
    Cookeville: "frontend.livingInCookeville",
    Jackson: "frontend.livingInJackson",
    Bristol: "frontend.livingInBristol",
};

const CITY_CARD_CONTENT: Record<
    string,
    {
        features: string[];
        images: [string, string];
    }
> = {
    Nashville: {
        features: ["Higher price range", "Strong job market"],
        images: [
            "/assets/images/nashville/nashville-skyline-tennessee-aerial-view.jpg",
            "/assets/images/homes-for-sale/modern-luxury-home-for-sale-nashville-tennessee.png",
        ],
    },
    Murfreesboro: {
        features: ["More affordable", "Fast-growing"],
        images: [
            "/assets/images/texas-to-tennessee/House.jpg",
            "/assets/images/texas-to-tennessee/PLACES_Cities.jpg",
        ],
    },
    Knoxville: {
        features: ["Balanced lifestyle", "Outdoor access"],
        images: [
            "/assets/images/north-carolina-tennessee/Cades-Cove-Tennessee-bike-ride.jpg",
            "/assets/images/texas-to-tennessee/pigeon-forge-tennessee-Kevin-Ruck.jpg",
        ],
    },
    Chattanooga: {
        features: ["Mid-size city amenities", "Scenic river and mountains"],
        images: [
            "/assets/images/north-carolina-tennessee/Point-Park-Chattanooga-view-horseshoe-bend.jpg",
            "/assets/images/illinois-tennessee/housing-market-tennessee.jpg",
        ],
    },
    Clarksville: {
        features: ["Military community", "Value relative to Nashville"],
        images: [
            "/assets/images/illinois-tennessee/twin_rivers_aerials_4.jpg",
            "/assets/images/illinois-tennessee/moving-to-tennessee.jpg",
        ],
    },
    "Johnson City": {
        features: ["Lower cost of living", "Mountain views"],
        images: [
            "/assets/images/illinois-tennessee/pexels-kelly.jpg",
            "/assets/images/north-carolina-tennessee/stock_blue_ridge_parkway.jpg",
        ],
    },
    Kingsport: {
        features: ["Quiet suburbs", "Strong sense of community"],
        images: [
            "/assets/images/texas-to-tennessee/iStock-1559191177.jpg",
            "/assets/images/illinois-tennessee/northerly-island-TK-Photography-3-1.jpg",
        ],
    },
    Franklin: {
        features: ["Top schools", "Upscale suburban living"],
        images: [
            "/assets/images/homes-for-sale/modern-luxury-home-for-sale-nashville-tennessee.png",
            "/assets/images/nashville/nashville-skyline-tennessee-aerial-view.jpg",
        ],
    },
    Memphis: {
        features: ["Urban culture", "Lower median home prices"],
        images: [
            "/assets/images/texas-to-tennessee/GettyImages-1681066662.jpg",
            "/assets/images/texas-to-tennessee/texas.jpg",
        ],
    },
    Cookeville: {
        features: ["College town energy", "Central location"],
        images: [
            "/assets/images/illinois-tennessee/housing-market-tennessee.jpg",
            "/assets/images/texas-to-tennessee/House.jpg",
        ],
    },
};

function getCityExploreHref(label: string): string {
    const routeName = CITY_EXPLORE_ROUTE[label];
    if (routeName) {
        return route(routeName);
    }
    return route("frontend.home-for-sale");
}

function selectPersonalizedCities(presets: CityPreset[], homePrice: number, max: number): CityPreset[] {
    const valid = presets.filter((p) => p.price > 0);
    if (valid.length === 0) {
        return [];
    }
    const sorted = [...valid].sort(
        (a, b) => Math.abs(a.price - homePrice) - Math.abs(b.price - homePrice),
    );
    const out: CityPreset[] = [];
    for (const p of sorted) {
        if (out.length >= max) {
            break;
        }
        if (!out.some((o) => o.label === p.label)) {
            out.push(p);
        }
    }
    return out;
}

function PersonalizedCityResults({ cities, budgetHomePrice }: { cities: CityPreset[]; budgetHomePrice: number }) {
    if (cities.length === 0) {
        return null;
    }

    return (
        <div className="mt-10 border-t border-[#e5e7eb] pt-10 text-left">
            <p className="text-sm font-bold uppercase tracking-wide text-[#085952]">Personalized results</p>
            <h3 className="mt-2 text-2xl font-bold text-primary sm:text-3xl">Based on Your Budget, You Should Explore:</h3>
            <p className="mt-2 text-[#6b7280]">
                Here are Tennessee markets that line up with a home price around{" "}
                <span className="font-bold text-[#1f2937]">
                    {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                        maximumFractionDigits: 0,
                    }).format(budgetHomePrice)}
                </span>
                .
            </p>
            <div className="mt-8 flex flex-col gap-12">
                {cities.map((city) => {
                    const content = CITY_CARD_CONTENT[city.label] ?? {
                        features: ["Curated Tennessee market", "Explore homes and local insights"],
                        images: [
                            "/assets/images/illinois-tennessee/moving-to-tennessee.jpg",
                            "/assets/images/homes-for-sale/modern-luxury-home-for-sale-nashville-tennessee.png",
                        ] as [string, string],
                    };
                    const exploreHref = getCityExploreHref(city.label);
                    return (
                        <div key={city.label}>
                            <h4 className="text-xl font-bold text-[#1f2937] sm:text-2xl">{city.label}</h4>
                            <div className="mt-4 grid grid-cols-2 gap-4">
                                {content.images.map((src) => (
                                    <div
                                        key={src}
                                        className="aspect-[4/3] overflow-hidden rounded-2xl border border-[#e5e7eb] bg-[#f3f4f6]"
                                    >
                                        <img
                                            src={src}
                                            alt=""
                                            className="h-full w-full object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                ))}
                            </div>
                            <ul className="mt-4 list-disc space-y-1.5 pl-5 text-[#6b7280]">
                                {content.features.map((f) => (
                                    <li key={f} className="text-[0.95rem]">
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-5">
                                <Link
                                    href={exploreHref}
                                    className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-white transition hover:bg-secondary"
                                >
                                    View {city.label} homes
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

function getPurchasePriceRange(price: number): string {
    if (price < 200000) return "under-200k";
    if (price < 300000) return "200k-300k";
    if (price < 400000) return "300k-400k";
    return "400k-plus";
}

function purchasePriceBucketLabel(slug: string): string {
    const labels: Record<string, string> = {
        "under-200k": "Under $200,000",
        "200k-300k": "$200,000 – $299,999",
        "300k-400k": "$300,000 – $399,999",
        "400k-plus": "$400,000+",
    };
    return labels[slug] || slug;
}

function downPaymentBucketLabel(slug: string): string {
    const labels: Record<string, string> = {
        "0-3-percent": "0–3% down",
        "3-5-percent": "3–5% down",
        "5-10-percent": "5–10% down",
        "10-20-percent": "10–20% down",
        "20-plus-percent": "20%+ down",
    };
    return labels[slug] || slug || "—";
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
    calculatorSnapshot,
    cityPresets,
    homePriceForCities,
}: {
    primarySubmitUrl: string;
    initialValues: Pick<LeadFormData, "purchasePrice" | "downPayment" | "location">;
    calculatorSnapshot: CalculatorSnapshot;
    cityPresets: CityPreset[];
    homePriceForCities: number;
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

    const personalizedCities = selectPersonalizedCities(cityPresets, homePriceForCities, 4);

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
            if (!formData.firstName.trim()) nextErrors.firstName = "Name is required.";
            if (!formData.email.trim()) nextErrors.email = "Email is required.";
            else if (!isValidEmail(formData.email)) nextErrors.email = "Enter a valid email address.";
        }

        if (step === 2) {
            if (formData.phone.replace(/\D/g, "").length < 10) {
                nextErrors.phone = "Phone number is required so a lender can reach you.";
            }
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
                    first_name: formData.firstName.trim(),
                    email: formData.email.trim(),
                    phone_number: formData.phone,
                    timeline: formData.timeline,
                    purchase_price_range: formData.purchasePrice,
                    down_payment_range: formData.downPayment,
                    location: getLocationLabel(formData.location),
                    credit_score: formData.creditScore || null,
                    first_time_buyer: formData.firstTimeBuyer || null,
                    consent: formData.consent,
                    calculator_snapshot: calculatorSnapshot,
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
        <div className="rounded-[18px] border border-[#e5e7eb] bg-white p-6 shadow-[0_12px_30px_rgba(0,0,0,.08)] sm:p-8">
            {step !== 4 && (
                <div className="mb-6">
                    <div className="mb-2 flex items-center justify-between text-sm text-[#6b7280]">
                        <span>Step {step} of 3</span>
                        <span>
                            {step === 1 ? "Basic" : step === 2 ? "Buyer details" : "Confirm"}
                        </span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-[#e5e7eb]">
                        <div
                            className={`h-full rounded-full bg-primary transition-all ${step === 1 ? "w-1/3" : step === 2 ? "w-2/3" : "w-full"
                                }`}
                        />
                    </div>
                </div>
            )}

            {step === 1 && (
                <div className="space-y-5">
                    <div>
                        <h3 className="text-xl font-bold text-primary sm:text-2xl">Where should we send your results?</h3>
                        <p className="mt-2 text-[#6b7280]">
                            Start with basic contact details so a lender can follow up.
                        </p>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                        <div className="">
                            <label className="mb-2 block text-sm font-bold text-[#374151]">Name *</label>
                            <input
                                type="text"
                                className="w-full rounded-xl border border-[#e5e7eb] px-4 py-3 text-[15px] outline-none focus:border-[#163a63] focus:ring-2 focus:ring-[#163a63]"
                                value={formData.firstName}
                                onChange={(e) => updateField("firstName", e.target.value)}
                                autoComplete="name"
                            />
                            {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>}
                        </div>
                        <div className="">
                            <label className="mb-2 block text-sm font-bold text-[#374151]">Email *</label>
                            <input
                                type="email"
                                className="w-full rounded-xl border border-[#e5e7eb] px-4 py-3 text-[15px] outline-none focus:border-[#163a63] focus:ring-2 focus:ring-[#163a63]"
                                value={formData.email}
                                onChange={(e) => updateField("email", e.target.value)}
                                autoComplete="email"
                            />
                            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={goNext}
                            className="rounded-xl bg-secondary px-6 py-3 text-base font-bold text-white transition hover:bg-primary"
                        >
                            Continue
                        </button>
                    </div>
                </div>
            )}

            {step === 2 && (
                <div className="space-y-5">
                    <div>
                        <h3 className="text-2xl font-bold text-primary">Tell us about your home search</h3>
                        <p className="mt-2 text-[#6b7280]">
                            Your calculator values are already prefilled below.
                        </p>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                            <label className="mb-2 block text-sm font-bold text-[#374151]">Phone *</label>
                            <input
                                type="tel"
                                className="w-full rounded-xl border border-[#e5e7eb] px-4 py-3 text-[15px] outline-none focus:border-[#163a63] focus:ring-2 focus:ring-[#163a63]"
                                value={formData.phone}
                                onChange={(e) => updateField("phone", formatPhone(e.target.value))}
                                autoComplete="tel"
                            />
                            {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                        </div>
                        <div>
                            <label className="mb-2 block text-sm font-bold text-[#374151]">Timeline *</label>
                            <select
                                className="w-full rounded-xl border border-[#e5e7eb] bg-white px-4 py-3 text-[15px] outline-none focus:border-[#163a63] focus:ring-2 focus:ring-[#163a63]"
                                value={formData.timeline}
                                onChange={(e) => updateField("timeline", e.target.value)}
                            >
                                <option value="">Select timeline</option>
                                <option value="asap">ASAP</option>
                                <option value="3-6-months">3–6 months</option>
                                <option value="6-plus-months">6+ months</option>
                            </select>
                            {errors.timeline && <p className="mt-1 text-sm text-red-600">{errors.timeline}</p>}
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-bold text-[#374151]">Purchase price (bucket)</label>
                            <input
                                type="text"
                                readOnly
                                className="w-full rounded-xl border border-[#e5e7eb] bg-[#f7f8fb] px-4 py-3 text-[#6b7280]"
                                value={purchasePriceBucketLabel(formData.purchasePrice)}
                            />
                        </div>
                        <div>
                            <label className="mb-2 block text-sm font-bold text-[#374151]">Down payment (bucket)</label>
                            <input
                                type="text"
                                readOnly
                                className="w-full rounded-xl border border-[#e5e7eb] bg-[#f7f8fb] px-4 py-3 text-[#6b7280]"
                                value={downPaymentBucketLabel(formData.downPayment)}
                            />
                        </div>
                        <div>
                            <label className="mb-2 block text-sm font-bold text-[#374151]">Region</label>
                            <input
                                type="text"
                                readOnly
                                className="w-full rounded-xl border border-[#e5e7eb] bg-[#f7f8fb] px-4 py-3 text-[#6b7280]"
                                value={getLocationLabel(formData.location)}
                            />
                        </div>
                        <div>
                            <label className="mb-2 block text-sm font-bold text-[#374151]">Credit score (optional)</label>
                            <select
                                className="w-full rounded-xl border border-[#e5e7eb] bg-white px-4 py-3 text-[15px] outline-none focus:border-[#163a63] focus:ring-2 focus:ring-[#163a63]"
                                value={formData.creditScore}
                                onChange={(e) => updateField("creditScore", e.target.value)}
                            >
                                <option value="">Prefer not to say</option>
                                <option value="720-plus">720+</option>
                                <option value="680-719">680–719</option>
                                <option value="620-679">620–679</option>
                                <option value="below-620">Below 620</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                        <button
                            type="button"
                            onClick={goBack}
                            className="rounded-xl border border-[#e5e7eb] px-6 py-3 text-base font-bold text-[#1f2937] hover:bg-[#f3f4f6]"
                        >
                            Back
                        </button>
                        <button
                            type="button"
                            onClick={goNext}
                            className="rounded-xl bg-secondary px-6 py-3 text-base font-bold text-white hover:bg-primary"
                        >
                            Continue
                        </button>
                    </div>
                </div>
            )}

            {step === 3 && (
                <div className="space-y-5">
                    <div>
                        <h3 className="text-2xl font-bold text-primary">Almost there</h3>
                        <p className="mt-2 text-[#6b7280]">
                            Confirm consent so a licensed lender can follow up about Tennessee loan options.
                        </p>
                    </div>
                    <div>
                        <label className="mb-2 block text-sm font-bold text-[#374151]">First-time homebuyer? (optional)</label>
                        <select
                            className="w-full rounded-xl border border-[#e5e7eb] bg-white px-4 py-3 text-[15px] outline-none focus:border-[#163a63] focus:ring-2 focus:ring-[#163a63]"
                            value={formData.firstTimeBuyer}
                            onChange={(e) => updateField("firstTimeBuyer", e.target.value)}
                        >
                            <option value="">Prefer not to say</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <label className="flex items-start gap-3 rounded-xl border border-[#e5e7eb] bg-[#f7f8fb] p-4">
                        <input
                            type="checkbox"
                            checked={formData.consent}
                            onChange={(e) => updateField("consent", e.target.checked)}
                            className="mt-1 h-4 w-4"
                        />
                        <span className="text-sm leading-6 text-[#6b7280]">
                            I agree to be contacted by lending partners via call, text, or email. WhyTennessee is not a
                            lender.
                        </span>
                    </label>
                    {errors.consent && <p className="mt-1 text-sm text-red-600">{errors.consent}</p>}
                    {submitMessage && (
                        <div className="rounded-xl bg-red-50 p-4 text-sm text-red-700">{submitMessage}</div>
                    )}
                    <div className="flex items-center justify-between gap-3">
                        <button
                            type="button"
                            onClick={goBack}
                            className="rounded-xl border border-[#e5e7eb] px-6 py-3 text-base font-bold text-[#1f2937] hover:bg-[#f3f4f6]"
                        >
                            Back
                        </button>
                        <button
                            type="button"
                            onClick={submitLead}
                            disabled={isSubmitting}
                            className="rounded-xl bg-secondary px-6 py-3 text-base font-bold text-white hover:bg-primary disabled:opacity-60"
                        >
                            {isSubmitting ? "Submitting…" : "Show Me Homes in My Budget"}
                        </button>
                    </div>
                </div>
            )}

            {step === 4 && (
                <div>
                    <div className="text-center">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-2xl">
                            ✓
                        </div>
                        <h3 className="mt-5 text-2xl font-bold text-primary sm:text-3xl">You&apos;re all set</h3>
                        <p className="mx-auto mt-3 max-w-xl text-[#6b7280]">
                            A local Tennessee lender will review your inquiry and reach out with next steps. Below are
                            markets that fit the budget you modeled.
                        </p>
                        {submitMessage && (
                            <div className="mx-auto mt-4 max-w-xl rounded-xl bg-amber-50 p-4 text-sm text-amber-900">
                                {submitMessage}
                            </div>
                        )}
                        <button
                            type="button"
                            onClick={resetForm}
                            className="mt-6 rounded-xl border border-[#e5e7eb] px-6 py-3 text-base font-bold text-[#1f2937] hover:bg-[#f3f4f6]"
                        >
                            Submit another inquiry
                        </button>
                    </div>
                    <PersonalizedCityResults cities={personalizedCities} budgetHomePrice={homePriceForCities} />
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
    cityPresets,
    calculatorSnapshot,
}: MortgageCalculatorLeadInlineProps) {
    const purchasePrice = getPurchasePriceRange(homePrice);
    const downPaymentRange = getDownPaymentRange(homePrice, downPayment);

    return (
        <section className="mt-10 rounded-[18px] border border-[#e5e7eb] bg-white p-6 shadow-[0_12px_30px_rgba(0,0,0,.08)] sm:p-8">
            <p className="text-center text-sm font-bold uppercase tracking-wide text-[#085952]">Lead capture</p>
            <div className="mb-6 mt-2 text-center">
                <h2 className="text-2xl font-bold text-primary sm:text-3xl">Want to See What You Qualify For?</h2>
                <p className="mx-auto mt-3 max-w-2xl text-[#6b7280]">
                    Get matched with a local Tennessee lender and see loan options based on your estimated budget.
                </p>
            </div>
            <div className="mb-6 grid gap-3 rounded-2xl bg-slate-50 p-4 text-sm text-slate-700 sm:grid-cols-2 lg:grid-cols-4">
                <div className="flex items-center gap-2">✅ 100% Free to Use</div>
                <div className="flex items-center gap-2">✅ No Obligation</div>
                <div className="flex items-center gap-2">✅ Secure Inquiry</div>
                <div className="flex items-center gap-2">✅ Tennessee Buyer Focused</div>
            </div>
            <InlineLeadCaptureForm
                primarySubmitUrl={leadSubmitUrl}
                initialValues={{
                    purchasePrice,
                    downPayment: downPaymentRange,
                    location: region || "",
                }}
                calculatorSnapshot={calculatorSnapshot}
                cityPresets={cityPresets}
                homePriceForCities={homePrice}
            />
        </section>
    );
}
