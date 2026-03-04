import { Hero } from '@/components/sections/frontend/hero'
import FrontendLayout from '@/layouts/frontend-layout'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle2, Home, Key, MapPin, Calculator, School, Briefcase, ClipboardList, Move, ShieldCheck, Zap } from 'lucide-react'

const CostOfBuyingTennessee = () => {
    return (
        <FrontendLayout
            activePage="moving-to-tennessee"
            subPage="Cost of Buying in Tennessee"
        >
            {/* 1. Hero Section (Design follow image_006e03.jpg) */}
            <Hero
                height="h-[calc(100vh-80px)] md:h-[600px]"
                slides={['assets/images/cost-of-buying/pexels-chaitaastic-3722911-scaled.jpg']}
                title={<>Cost of Buying a Home in Tennessee <br /> (2026 Guide)</>}
                description={
                    <>
                        Compared to many states, Tennessee remains one of the most affordable places to buy a home.
                        This guide breaks down home prices, taxes, closing costs, and monthly payments so you know exactly what to expect.
                    </>
                }
            />

            <div className="bg-[#fdfbf7]"> {/* Image er moto Cream Background */}

                {/* 2. Why People Are Moving (Image layout follow) */}
                <section className="py-20 px-4 max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1a2b4b] mb-4">Why So Many People Are Moving to Tennessee</h2>
                        <div className="w-20 h-1 bg-[#b89548] mx-auto"></div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-4 text-lg">
                            {[
                                'No state income tax',
                                'Lower cost of living',
                                'Affordable housing',
                                'Beautiful mountains and outdoor recreation',
                                'Strong job growth',
                                'Friendly communities'
                            ].map((item) => (
                                <div key={item} className="flex gap-3 items-center py-3 border-b border-gray-200">
                                    <CheckCircle2 className="text-[#b89548] w-6 h-6" />
                                    <span className="text-slate-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                        <div className="relative h-[400px]">
                            <img src="/assets/images/tn-landscape.jpg" alt="Tennessee Landscape" className="rounded-2xl shadow-xl absolute top-0 right-0 w-4/5 h-4/5 object-cover z-10" />
                            <img src="/assets/images/tn-cityline.jpg" alt="Tennessee City" className="rounded-2xl shadow-xl absolute bottom-0 left-0 w-4/5 h-4/5 object-cover z-0 border-4 border-white" />
                        </div>
                    </div>
                </section>

                {/* 3. Average Home Prices by Region (Navy Blue Section) */}
                <section className="bg-[#1a2b4b] py-20 px-4 text-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Average Home Prices in Tennessee</h2>
                            <p className="text-slate-300">Median home price: $320,000 – $350,000</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {[
                                { city: 'Nashville', price: '$450,000 – $520,000' },
                                { city: 'Franklin', price: '$750,000+' },
                                { city: 'Knoxville', price: '$310,000 – $360,000' },
                                { city: 'Chattanooga', price: '$300,000 – $340,000' },
                                { city: 'Johnson City', price: '$340,000 – $360,000' },
                                { city: 'Kingsport', price: '$250,000 – $270,000' },
                                { city: 'Clarksville', price: '$300,000 – $320,000' },
                            ].map((item) => (
                                <div key={item.city} className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:bg-[#b89548] transition-all duration-300 group">
                                    <MapPin className="mb-4 text-[#b89548] group-hover:text-white" />
                                    <h3 className="text-xl font-bold mb-2">{item.city}</h3>
                                    <p className="text-slate-300 group-hover:text-white/90">{item.price}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. Down Payment & Monthly Example (Comparison Layout) */}
                <section className="py-20 px-4 max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16">
                        <div className="space-y-8">
                            <h2 className="text-3xl font-bold text-[#1a2b4b]">Down Payment & Loans</h2>
                            <p className="text-slate-600">The down payment depends on the loan type you choose.</p>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { label: 'Conventional', val: '5% – 20%' },
                                    { label: 'FHA Loan', val: '3.5%' },
                                    { label: 'VA Loan', val: '0%' },
                                    { label: 'USDA Loan', val: '0%' }
                                ].map(loan => (
                                    <div key={loan.label} className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-[#b89548]">
                                        <p className="text-xs text-slate-500 uppercase font-bold">{loan.label}</p>
                                        <p className="text-xl font-bold text-[#1a2b4b]">{loan.val}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Monthly Mortgage Card (Dark Design) */}
                        <div className="bg-[#1a2b4b] text-white rounded-3xl shadow-2xl p-8 border-b-8 border-[#b89548]">
                            <h3 className="text-2xl font-bold mb-2 text-center">Monthly Mortgage Example</h3>
                            <p className="text-center text-slate-400 mb-8 text-sm">Based on $350k home with 10% down</p>
                            <div className="space-y-4">
                                <div className="flex justify-between py-2 border-b border-white/10">
                                    <span>Mortgage</span> <span className="font-bold">~$1,850</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-white/10">
                                    <span>Property Taxes</span> <span className="font-bold">~$175</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-white/10">
                                    <span>Insurance</span> <span className="font-bold">~$125</span>
                                </div>
                                <div className="flex justify-between pt-6">
                                    <span className="text-xl font-bold">Total Payment</span>
                                    <span className="text-3xl font-extrabold text-[#b89548]">~$2,150</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. Additional Costs Grid (Icon based design) */}
                <section className="bg-slate-100 py-20 px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-[#1a2b4b]">Additional Buying Costs</h2>
                        </div>
                        <div className="grid md:grid-cols-4 gap-6">
                            <Card className="text-center border-none shadow-md">
                                <CardContent className="pt-8">
                                    <Move className="mx-auto text-[#b89548] mb-4" />
                                    <h4 className="font-bold">Moving</h4>
                                    <p className="text-sm text-slate-500">$1,500 – $5,000</p>
                                </CardContent>
                            </Card>
                            <Card className="text-center border-none shadow-md">
                                <CardContent className="pt-8">
                                    <ShieldCheck className="mx-auto text-[#b89548] mb-4" />
                                    <h4 className="font-bold">Inspection</h4>
                                    <p className="text-sm text-slate-500">$350 – $600</p>
                                </CardContent>
                            </Card>
                            <Card className="text-center border-none shadow-md">
                                <CardContent className="pt-8">
                                    <Zap className="mx-auto text-[#b89548] mb-4" />
                                    <h4 className="font-bold">Utility Setup</h4>
                                    <p className="text-sm text-slate-500">$200 – $500</p>
                                </CardContent>
                            </Card>
                            <Card className="text-center border-none shadow-md">
                                <CardContent className="pt-8">
                                    <Calculator className="mx-auto text-[#b89548] mb-4" />
                                    <h4 className="font-bold">Property Taxes</h4>
                                    <p className="text-sm text-slate-500">Avg. 0.60%</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* 6. Footer-like Checklist Section */}
                <section className="py-20 px-4 max-w-7xl mx-auto border-t">
                    <div className="bg-[#f2eada] p-10 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-[#1a2b4b]">Ready to Move to Tennessee?</h2>
                            <p className="text-slate-600">Explore our guides on property taxes, best cities, and moving checklists.</p>
                        </div>
                        <button className="bg-[#1a2b4b] text-white px-8 py-4 rounded-full font-bold hover:bg-[#b89548] transition-all">
                            View Moving Checklist
                        </button>
                    </div>
                </section>
            </div>
        </FrontendLayout>
    )
}

export default CostOfBuyingTennessee