import { Hero } from "@/components/sections/frontend/hero";
import FrontendLayout from "@/layouts/frontend-layout";
import { Link } from "@inertiajs/react";
import { CheckCircle2, Home, Key, MapPin, Calculator, School, Briefcase, ClipboardList, Move, ShieldCheck, Zap } from 'lucide-react'

const SectionDivider = () => (
    <div className="flex items-center gap-4 my-2">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />
        <div className="w-2 h-2 rotate-45 bg-amber-400/60" />
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />
    </div>
);

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

const TableHeader = ({ cols }) => (
    <thead>
        <tr className="bg-slate-800 text-white">
            {cols.map((col, i) => (
                <th key={i} className="px-5 py-3.5 text-left text-sm font-semibold tracking-wide font-['Lato',sans-serif]">
                    {col}
                </th>
            ))}
        </tr>
    </thead>
);

const TableRow = ({ cells, highlight }) => (
    <tr className={`border-b border-slate-100 transition-colors hover:bg-amber-50/60 ${highlight ? "bg-amber-50" : ""}`}>
        {cells.map((cell, i) => (
            <td key={i} className="px-5 py-3.5 text-sm text-slate-700 font-['Lato',sans-serif]">
                {cell}
            </td>
        ))}
    </tr>
);

const StatBox = ({ label, value, sub }) => (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex flex-col gap-1">
        <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold font-['Lato',sans-serif]">{label}</span>
        <span className="text-2xl md:text-3xl font-bold text-slate-800 font-['Playfair_Display',serif]">{value}</span>
        {sub && <span className="text-xs text-slate-500 font-['Lato',sans-serif]">{sub}</span>}
    </div>
);

const CheckItem = ({ text }) => (
    <li className="flex items-start gap-3">
        <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-amber-400 flex items-center justify-center">
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

export default function CostOfBuyingTennessee() {
    return (
        <div className="" style={{ fontFamily: "'Lato', sans-serif" }}>
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


                {/* 3. Average Home Prices by Region (Navy Blue Section) */}
                <section className="bg-[#1a2b4b] py-20 px-4 text-white">
                    <div className="container mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-['Playfair_Display']">Average Home Prices by City</h2>
                            <p className="text-slate-300">Median State Price: $320,000 – $350,000</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {[
                                { city: 'Nashville', price: '$450,000 – $520,000', route: 'frontend.livingInNashville' },
                                { city: 'Franklin', price: '$750,000+', route: 'frontend.livingInFranklin' },
                                { city: 'Knoxville', price: '$310,000 – $360,000', route: 'frontend.livingInKnoxville' },
                                { city: 'Chattanooga', price: '$300,000 – $340,000', route: 'frontend.livingInChattanooga' },
                                { city: 'Johnson City', price: '$340,000 – $360,000', route: 'frontend.livingInJohnsonCity' },
                                { city: 'Kingsport', price: '$250,000 – $270,000', route: 'frontend.livingInKingsport' },
                                { city: 'Clarksville', price: '$300,000 – $320,000', route: 'frontend.livingInClarksville' },
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

                {/* Down Payment */}
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

                {/* Property Taxes */}
                <section className="bg-primary text-white">
                    <div className="container mx-auto px-4 md:px-8 py-14">
                        <SectionTitle className="text-white">Tennessee Property Taxes</SectionTitle>
                        <p className="text-muted mb-8 text-base leading-relaxed max-w-2xl mx-auto text-center">
                            One major advantage of living in Tennessee is low property taxes. The average rate is about <strong className="text-slate-800">0.60% of the home value</strong> — much lower than the national average. Tennessee consistently ranks among the lowest property tax states in America.
                        </p>
                        <div className="grid md:grid-cols-3 gap-4">
                            {[
                                { price: "$250,000", tax: "~$1,500/year" },
                                { price: "$350,000", tax: "~$2,100/year" },
                                { price: "$500,000", tax: "~$3,000/year" },
                            ].map((item, i) => (
                                <InfoCard key={i} className="p-6 text-center">
                                    <p className="text-slate-400 text-xs uppercase tracking-widest font-semibold mb-2">Home Price</p>
                                    <p className="text-2xl font-bold text-slate-800 mb-3">{item.price}</p>
                                    <div className="w-10 h-px bg-amber-400 mx-auto mb-3" />
                                    <p className="text-slate-400 text-xs uppercase tracking-widest font-semibold mb-1">Annual Tax</p>
                                    <p className="text-xl font-bold text-amber-500">{item.tax}</p>
                                </InfoCard>
                            ))}
                        </div>
                        <p className="text-muted mt-8 text-base leading-relaxed max-w-2xl mx-auto text-center">Property taxes vary by county, but Tennessee consistently ranks among the lowest property tax states in America. </p>
                    </div>
                </section>

                <section className="bg-[#f8f7f4]">
                    <div className="container mx-auto px-4 md:px-8 py-14">
                        <div className="max-w-4xl">
                            {/* Left Aligned Content with Right Side Removed */}
                            <SectionTitle className="text-left">Is Tennessee a Good Place to Buy a Home?</SectionTitle>

                            <p className="text-slate-600 mb-6 text-base leading-relaxed">
                                For many buyers, Tennessee offers an excellent balance of:
                            </p>

                            <ul className="grid grid-cols-1 gap-2 mb-8">
                                <CheckItem text="Affordability" />
                                <CheckItem text="Lifestyle" />
                                <CheckItem text="Economic Growth" />
                            </ul>

                            <div className="bg-slate-50 border-l-4 border-amber-400 p-6 rounded-r-2xl">
                                <p className="text-slate-700 text-lg leading-relaxed italic">
                                    "Whether you're looking for a starter home, investment property, or retirement destination,
                                    Tennessee remains one of the most attractive housing markets in the country."
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Additional Costs */}
                <section className="container mx-auto px-4 md:px-8 py-14">
                    <SectionTitle>Additional Costs When Buying a Home</SectionTitle>
                    <p className="text-slate-600 mb-8 text-base leading-relaxed max-w-2xl mx-auto text-center">
                        Besides the purchase price, buyers should budget for:
                    </p>
                    <div className="grid md:grid-cols-4 gap-4">
                        {[
                            { label: "Moving Expenses", value: "$1,500 – $5,000 depending on distance.", },
                            { label: "Home Inspection", value: "$350 – $600" },
                            { label: "Utility Setup", value: "$200 – $500 " },
                            { label: "Furniture & Setup", value: "Varies depending on the home size. " },
                        ].map((item, i) => (
                            <CostCard key={i} title={item.label} value={item.value} />
                        ))}
                    </div>
                </section>


                {/* Closing Costs */}
                <section className="bg-[#f8f7f4]">
                    <div className="container mx-auto px-4 md:px-8 py-14">
                        <SectionTitle className="text-left">Closing Costs in Tennessee</SectionTitle>
                        <p className="text-slate-600 mb-8 text-base leading-relaxed max-w-2xl">
                            Buyers typically pay <strong className="text-slate-800">2% – 4%</strong> of the purchase price in closing costs. On a $350,000 home, that's approximately <strong className="text-slate-800">$7,000 – $14,000</strong>. Sometimes sellers may help cover part of these costs during negotiations.
                        </p>
                        <div className="grid md:grid-cols-2 gap-8">
                            <InfoCard className="p-6">
                                <p className="text-xs uppercase tracking-widest text-amber-500 font-semibold mb-4">What's Included</p>
                                <div className="space-y-1">
                                    <CostItem label="Loan origination fees" value="Varies" />
                                    <CostItem label="Appraisal" value="~$400–$600" />
                                    <CostItem label="Title insurance" value="~$1,000–$2,000" />
                                    <CostItem label="Home inspection" value="$350–$600" />
                                    <CostItem label="Lender fees" value="Varies" />
                                    <CostItem label="Prepaid taxes & insurance" value="Varies" />
                                </div>
                            </InfoCard>
                            <div className="bg-amber-400 rounded-2xl p-8 flex flex-col justify-center">
                                <p className="text-amber-900 text-xs uppercase tracking-widest font-semibold mb-3">Quick Estimate</p>
                                <p className="text-4xl font-bold text-slate-800 font-['Playfair_Display',serif] mb-2">$7K – $14K</p>
                                <p className="text-amber-800 text-base">Estimated closing costs on a <span className="font-bold">$350,000</span> home in Tennessee</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Monthly Payment */}
                <section className="container mx-auto px-4 md:px-8 py-14">
                    <SectionTitle>Monthly Mortgage Example</SectionTitle>
                    <p className="text-slate-600 mb-8 text-base leading-relaxed max-w-2xl">
                        Here's a realistic payment breakdown for a typical Tennessee home purchase. This is still cheaper than renting in many major U.S. cities.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8 items-start">
                        <InfoCard className="p-6">
                            <p className="text-xs uppercase tracking-widest text-amber-500 font-semibold mb-4">Loan Details</p>
                            <CostItem label="Home Price" value="$350,000" />
                            <CostItem label="Down Payment (10%)" value="$35,000" />
                            <CostItem label="Loan Amount" value="$315,000" />
                        </InfoCard>
                        <InfoCard className="p-6">
                            <p className="text-xs uppercase tracking-widest text-amber-500 font-semibold mb-4">Monthly Breakdown</p>
                            <CostItem label="Mortgage (P&I)" value="~$1,850" />
                            <CostItem label="Property Taxes" value="~$175" />
                            <CostItem label="Homeowners Insurance" value="~$125" />
                            <div className="flex items-center justify-between pt-4 mt-2 border-t-2 border-slate-800">
                                <span className="font-bold text-slate-800 font-['Lato',sans-serif]">Estimated Total</span>
                                <span className="text-2xl font-bold text-amber-500 font-['Playfair_Display',serif]">~$2,150/mo</span>
                            </div>
                        </InfoCard>
                    </div>
                </section>


                <section className="bg-[#f8f7f4] py-16 px-4 md:px-8">
                    <div className="container mx-auto max-w-5xl text-center">
                        <SectionTitle className="mb-6">Thinking About Moving to Tennessee?</SectionTitle>
                        <p className="text-slate-600 mb-10 text-lg max-w-3xl mx-auto leading-relaxed">
                            If you’re considering relocating to Tennessee, explore our guides to learn more about
                            the state's top areas and financial benefits. These resources can help make your
                            move easier and more informed.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { title: "Best Cities in Tennessee", link: "city-comparison" },
                                { title: "Cost of Living in Tennessee", link: "cost-of-living-in-tennessee" },
                                { title: "Tennessee Property Taxes", link: "tennessee-relocation" },
                                { title: "Moving Checklist for Tennessee", link: "moving-checklist" }
                            ].map((resource, index) => (
                                <Link
                                    key={index}
                                    href={resource.link}
                                    className="group p-6 bg-white rounded-2xl shadow-sm border border-slate-200 hover:border-[#b89548] hover:shadow-md transition-all duration-300"
                                >
                                    <div className="bg-[#b89548]/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#b89548] transition-colors">
                                        <ClipboardList className="text-[#b89548] group-hover:text-white w-6 h-6" />
                                    </div>
                                    <h4 className="text-[#1a2b4b] font-bold text-sm uppercase tracking-wider mb-2">
                                        {resource.title}
                                    </h4>
                                    <span className="text-xs text-[#b89548] font-semibold group-hover:underline">
                                        Read Guide →
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </FrontendLayout>
        </div>
    );
}
const CostCard: React.FC<{ title: string; value: string }> = ({
    title,
    value,
}) => (
    <div className="overflow-hidden rounded-xl border bg-gray-100/50 text-center shadow-sm transition-shadow hover:shadow-md">
        <div className="bg-primary py-4">
            <p className="text-xl font-semibold text-white">{title}</p>
        </div>
        <div className="py-5 lg:py-10">
            <p className="text-2xl font-bold">{value}</p>
        </div>
    </div>
);