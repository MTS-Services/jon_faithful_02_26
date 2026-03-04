import { Hero } from "@/components/sections/frontend/hero";
import FrontendLayout from "@/layouts/frontend-layout";
import { Link } from "@inertiajs/react";
import { CheckCircle2, MapPin, ClipboardList } from 'lucide-react'

const SectionTitle = ({ children, className = "" }) => (
    <div className="mb-8">
        <h2
            className={`text-3xl md:text-4xl text-center font-bold text-slate-800 leading-tight font-['Playfair_Display',serif] ${className}`}
        >
            {children}
        </h2>
    </div>
);

const InfoCard = ({ children, className = "" }) => (
    <div className={`bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden ${className}`}>
        {children}
    </div>
);

const CheckItem = ({ text }) => (
    <li className="flex items-start gap-3">
        <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-secondary flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
        </span>
        <span className="text-slate-700 font-['Lato',sans-serif] text-base">{text}</span>
    </li>
);

const CostItem = ({ label, value }) => (
    <div className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0">
        <span className="text-slate-600 font-['Lato',sans-serif] text-sm">{label}</span>
        <span className="font-bold text-slate-800 font-['Lato',sans-serif] text-sm">{value}</span>
    </div>
);

const CostCard = ({ title, value }) => (
    <div className="overflow-hidden rounded-xl border bg-gray-100/50 text-center shadow-sm transition-shadow hover:shadow-md">
        <div className="bg-[#1a2b4b] py-4">
            <p className="text-lg font-semibold text-white px-2">{title}</p>
        </div>
        <div className="py-6 lg:py-8">
            <p className="text-2xl font-bold text-slate-800">{value}</p>
        </div>
    </div>
);

export default function CostOfBuyingTennessee() {
    return (
        <div className="bg-white" style={{ fontFamily: "'Lato', sans-serif" }}>
            <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Lato:wght@300;400;600;700&display=swap" rel="stylesheet" />

            <FrontendLayout activePage="moving-to-tennessee">
                {/* Hero */}
                <Hero
                    height={"h-[calc(100vh-80px)] md:h-[500px]"}
                    slides={[
                        // 'assets/images/moving-tennessee-renting/moving-tennessee-renting-banner.jpeg',
                    ]}
                    title={<>Cost of Buying a Home in Tennessee (2026 Guide)</>}
                    description={<>If you're thinking about moving to Tennessee, one of the biggest questions is:<br></br>

                        How much does it cost to buy a home in Tennessee?<br></br>

                        Compared to many states, Tennessee remains one of the most affordable places to buy a home in the United States, which is why thousands of people relocate here every year.

                        This guide breaks down the true cost of buying a house in Tennessee, including home prices, property taxes, closing costs, and monthly payments so you know exactly what to expect before relocating. </>}
                />

                {/* Why Tennessee */}
                <section className="bg-[#f8f7f4]">
                    <div className="container mx-auto px-4 md:px-8 py-14">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <SectionTitle className="text-left">Why So Many People Are Moving to Tennessee</SectionTitle>
                                <p className="text-slate-600 mb-6 text-base leading-relaxed">
                                    Tennessee has become one of the fastest growing states for relocation. Cities like Knoxville, Chattanooga, Nashville, and the Tri-Cities continue to attract new residents from across the country.
                                </p>
                                <ul className="space-y-3">
                                    <CheckItem text="No state income tax" />
                                    <CheckItem text="Lower cost of living compared to most major U.S. cities" />
                                    <CheckItem text="Affordable housing market" />
                                    <CheckItem text="Beautiful mountains and outdoor recreation" />
                                    <CheckItem text="Strong job growth across multiple industries" />
                                    <CheckItem text="Friendly, welcoming communities" />
                                </ul>
                            </div>
                            {/* <div className="bg-slate-800 rounded-2xl p-8 text-white">
                            <p className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-4">Is Tennessee Right for You?</p>
                            <h3 className="text-2xl font-bold font-['Playfair_Display',serif] mb-4">An Excellent Balance of Lifestyle & Value</h3>
                            <p className="text-slate-300 text-base leading-relaxed mb-6">
                                Whether you're looking for a starter home, investment property, or retirement destination, Tennessee remains one of the most attractive housing markets in the country — offering affordability, lifestyle, and economic growth in equal measure.
                            </p>
                            <div className="grid grid-cols-3 gap-3 text-center">
                                {["Affordability", "Lifestyle", "Growth"].map((tag) => (
                                    <div key={tag} className="bg-white/10 rounded-xl py-3 px-2">
                                        <span className="text-sm text-white font-semibold font-['Lato',sans-serif]">{tag}</span>
                                    </div>
                                ))}
                            </div>
                        </div> */}
                        </div>
                    </div>
                </section>

                {/* 3. Average Home Prices (Navy Section) */}
                <section className="bg-[#1a2b4b] py-20 px-4 text-white">
                    <div className="container mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-['Playfair_Display']">Average Home Prices by City</h2>
                            <p className="text-slate-300">Median State Price: $320,000 – $350,000</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {[
                                { city: 'Nashville', price: '$450,000 – $520,000', route:'frontend.livingInNashville' },
                                { city: 'Franklin', price: '$750,000+', route:'frontend.livingInFranklin' },
                                { city: 'Knoxville', price: '$310,000 – $360,000', route:'frontend.livingInKnoxville' },
                                { city: 'Chattanooga', price: '$300,000 – $340,000', route:'frontend.livingInChattanooga' },
                                { city: 'Johnson City', price: '$340,000 – $360,000', route:'frontend.livingInJohnsonCity' },
                                { city: 'Kingsport', price: '$250,000 – $270,000', route:'frontend.livingInKingsport' },
                                { city: 'Clarksville', price: '$300,000 – $320,000', route:'frontend.livingInClarksville' },
                            ].map((item) => (
                                <Link key={item.city} href={route(`${item.route}`)}>
                                    <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:bg-secondary/20 transition-all group">
                                        <MapPin className="mb-4 text-secondary" />
                                        <h3 className="text-xl font-bold mb-2">{item.city}</h3>
                                        <p className="text-slate-300">{item.price}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. Is Tennessee a Good Place? (Simplified Layout) */}
                <section className="py-16">
                    <div className="container mx-auto px-4 md:px-8 max-w-4xl">
                        <SectionTitle className="text-center">Is Tennessee a Good Place to Buy a Home?</SectionTitle>
                        <p className="text-slate-600 mb-8 text-center text-lg leading-relaxed">
                            For many buyers, Tennessee offers an excellent balance of affordability, lifestyle, and economic growth.
                        </p>
                        <div className="bg-slate-50 border-l-4 border-secondary p-8 rounded-r-2xl shadow-sm italic">
                            <p className="text-slate-700 text-xl leading-relaxed">
                                "Whether you're looking for a starter home, investment property, or retirement destination,
                                Tennessee remains one of the most attractive housing markets in the country."
                            </p>
                        </div>
                    </div>
                </section>

                {/* 5. Down Payment Calculations */}
                <section className="bg-[#f8f7f4] py-16">
                    <div className="container mx-auto px-4 md:px-8">
                        <SectionTitle className="text-center">Down Payment Options</SectionTitle>
                        <div className="grid lg:grid-cols-2 gap-12 mt-12">
                            <div className="grid grid-cols-2 gap-4">
                                <CostCard title="Conventional" value="5% – 20%" />
                                <CostCard title="FHA Loan" value="3.5%" />
                                <CostCard title="VA Loan" value="0%" />
                                <CostCard title="USDA Loan" value="0%" />
                            </div>
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                                <h4 className="text-lg font-bold mb-6 text-slate-800 uppercase tracking-wider">Example: $350,000 Home</h4>
                                <div className="space-y-4">
                                    <CostItem label="5% Down Payment" value="$17,500" />
                                    <CostItem label="10% Down Payment" value="$35,000" />
                                    <CostItem label="20% Down Payment" value="$70,000" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. Property Taxes */}
                <section className="py-16 bg-[#1a2b4b] text-white">
                    <div className="container mx-auto px-4 md:px-8">
                        <SectionTitle className="text-center text-white!">Closing Costs When Buying a Home in Tennessee </SectionTitle>
                        <p className="text-center text-slate-300 mb-12 max-w-2xl mx-auto">
                            Tennessee average rate: <strong>0.60%</strong>. Much lower than the national average.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { price: "$250,000", tax: "~$1,500" },
                                { price: "$350,000", tax: "~$2,100" },
                                { price: "$500,000", tax: "~$3,000" },
                            ].map((item, i) => (
                                <div key={i} className="bg-white p-8 rounded-2xl text-center">
                                    <p className="text-slate-400 text-xs font-bold uppercase mb-2">Home Price {item.price}</p>
                                    <p className="text-3xl font-bold text-slate-800 font-['Playfair_Display']">{item.tax}</p>
                                    <p className="text-secondary text-sm font-semibold mt-2">Annual Property Tax</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 7. Closing & Monthly Payments */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4 md:px-8">
                        <div className="grid md:grid-cols-2 gap-12">
                            <InfoCard className="p-8">
                                <h3 className="text-2xl font-bold mb-6 font-['Playfair_Display']">Estimated Closing Costs</h3>
                                <p className="text-slate-600 mb-6 text-sm">Typical costs range from 2% to 4% of purchase price.</p>
                                <div className="space-y-1">
                                    <CostItem label="Loan origination & Lender fees" value="Varies" />
                                    <CostItem label="Appraisal & Home Inspection" value="~$800 – $1,200" />
                                    <CostItem label="Title Insurance" value="Varies" />
                                    <div className="mt-6 p-4 bg-amber-50 rounded-xl border border-secondary">
                                        <p className="text-secondary font-bold text-lg text-center">Est. Total: $7,000 – $14,000</p>
                                        <p className="text-secondary text-xs text-center mt-1">Based on $350k Home</p>
                                    </div>
                                </div>
                            </InfoCard>

                            <InfoCard className="p-8 bg-slate-900 text-white">
                                <h3 className="text-2xl font-bold mb-6 font-['Playfair_Display'] text-secondary">Monthly Mortgage Example</h3>
                                <div className="space-y-4">
                                    <CostItem label="Mortgage (P&I)" value="~$1,850" />
                                    <CostItem label="Property Taxes" value="~$175" />
                                    <CostItem label="Homeowners Insurance" value="~$125" />
                                    <div className="pt-6 border-t border-slate-700 flex justify-between items-center">
                                        <span className="text-xl font-bold">Total Payment</span>
                                        <span className="text-3xl font-bold text-secondary">~$2,150/mo</span>
                                    </div>
                                </div>
                            </InfoCard>
                        </div>
                    </div>
                </section>

                {/* 8. Final Resource Links */}
                <section className="bg-[#f8f7f4] py-16 px-4 md:px-8">
                    <div className="container mx-auto max-w-5xl text-center">
                        <SectionTitle className="mb-6">Thinking About Moving to Tennessee?</SectionTitle>
                        <p className="text-slate-600 mb-10 text-lg max-w-3xl mx-auto">
                            Explore our comprehensive guides to make your move easier and more informed.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { title: "Best Cities in Tennessee", link: "city-comparison" },
                                { title: "Cost of Living in Tennessee", link: "cost-of-living-in-tennessee" },
                                { title: "Tennessee Property Taxes", link: "tennessee-relocation" },
                                { title: "Moving Checklist", link: "moving-checklist" }
                            ].map((resource, index) => (
                                <Link
                                    key={index}
                                    href={resource.link}
                                    className="group p-6 bg-white rounded-2xl shadow-sm border border-slate-200 hover:border-secondary transition-all"
                                >
                                    <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary transition-colors">
                                        <ClipboardList className="text-secondary group-hover:text-white w-6 h-6" />
                                    </div>
                                    <h4 className="text-[#1a2b4b] font-bold text-xs uppercase tracking-wider mb-2">{resource.title}</h4>
                                    <span className="text-xs text-secondary font-semibold group-hover:underline">Read Guide →</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </FrontendLayout>
        </div>
    );
}