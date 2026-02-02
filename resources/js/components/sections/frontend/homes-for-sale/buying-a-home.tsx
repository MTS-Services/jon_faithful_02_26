import React from 'react'

export default function BuyingAHome() {
  return (
        <div className="bg-background py-20 px-6 font-montserrat">
        <div className="container mx-auto">
            <h2 className="text-4xl md:text-5xl text-text-secondary-foreground font-medium text-center mb-16 leading-tight">
                Buying a Home in <br className="hidden md:block" /> Tennessee – Quick Tips  
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                <div
                    className="bg-background p-8 rounded-xl border border-muted-foreground shadow-[0_10px_30px_rgba(0,0,0,0.05)] border-b-4 border-b-primary text-center flex flex-col items-center">
                    <div
                        className="w-16 h-16 mb-6 flex items-center justify-center rounded-full border-2 border-primary text-primary">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                    </div>
                    <h3 className="text-xl font-medium text-text-secondary-foreground mb-4">Get pre-approved early</h3>
                    <p className="text-text-secondary-foreground font-medium font-montserrat text-base leading-relaxed">This helps you move
                        quickly in competitive markets
                        like Nashville and Knoxville.</p>
                </div>

                <div
                    className="bg-background p-8 rounded-xl border border-muted-foreground shadow-[0_10px_30px_rgba(0,0,0,0.05)] border-b-4 border-b-primary text-center flex flex-col items-center">
                    <div
                        className="w-16 h-16 mb-6 flex items-center justify-center rounded-full border-2 border-primary text-primary">

                        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"
                            className="text-primary">

                            <circle cx="32" cy="32" r="18" fill="currentColor" />

                            <path d="M32 23V32H39" stroke="white" stroke-width="3" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-medium text-text-secondary-foreground mb-4">Work with a trusted local realtor</h3>
                    <p className="text-text-secondary-foreground font-medium font-montserrat text-base leading-relaxed">Local experts
                        understand neighborhood dynamics,
                        pricing trends, and negotiation strategies.</p>
                </div>

                <div
                    className="bg-background p-8 rounded-xl border border-muted-foreground shadow-[0_10px_30px_rgba(0,0,0,0.05)] border-b-4 border-b-primary text-center flex flex-col items-center">
                    <div
                        className="w-16 h-16 mb-6 flex items-center justify-center rounded-full border-2 border-primary text-primary">

                        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"
                            className="text-primary">
                            <circle cx="32" cy="32" r="18" fill="currentColor" />
                            <path
                                d="M28 24H33L36 27V39C36 39.5523 35.5523 40 35 40H28C27.4477 40 27 39.5523 27 39V25C27 24.4477 27.4477 24 28 24Z"
                                fill="white" />
                            <path d="M29 27H31M29 29H31" stroke="currentColor" stroke-width="1.2"
                                stroke-linecap="round" />
                            <text x="32" y="36" fill="currentColor"
                                // style="font-family: Arial; font-weight: bold; font-size: 8px;"
                                text-anchor="middle">$</text>
                        </svg>
                    </div>
                    <h3 className="text-xl font-medium text-text-secondary-foreground mb-4">Consider property taxes and utilities</h3>
                    <p className="text-text-secondary-foreground font-medium font-montserrat text-base leading-relaxed">Even though
                        Tennessee is generally affordable,
                        these can vary by county.</p>
                </div>

                <div
                    className="bg-background p-8 rounded-xl border border-muted-foreground shadow-[0_10px_30px_rgba(0,0,0,0.05)] border-b-4 border-b-primary text-center flex flex-col items-center">
                    <div
                        className="w-16 h-16 mb-6 flex items-center justify-center rounded-full border-2 border-primary text-primary">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z">
                            </path>
                        </svg>
                    </div>
                    <h3 className="text-xl font-medium text-text-secondary-foreground mb-4">Plan for growth</h3>
                    <p className="text-text-secondary-foreground font-medium font-montserrat text-base leading-relaxed">Many Tennessee
                        cities are expanding fast — buying
                        in a growing area can help your home appreciate over time.</p>
                </div>

            </div>
        </div>
    </div>

  )
}
