import React from 'react';
import { MapPin, Home, TrendingUp, DollarSign, Key, PawPrint } from 'lucide-react';
import FrontendLayout from '@/layouts/frontend-layout';
import { Hero } from '@/components/sections/frontend/hero';

const TennesseeRentPage = () => {
  return (
    <FrontendLayout>
      <Hero
        height={'h-[calc(100vh-80px)] md:h-[500px]'}
        slides={[
          '	https://whytennessee.com/wp-content/uploads/2025/12/pexels-chaitaastic-3722911-scaled.jpg',
        ]}
        title={<>Cost of Renting in Tennessee</>}
        description={<>
          Average Rent, Utilities, Deposits & What Renters Should Expect The cost of renting in Tennessee remains more affordable than much of the U.S., which is why the state continues to attract renters relocating from higher-cost areas like California, New York, Illinois, Florida, and the Northeast. This guide breaks down the real cost of renting in Tennessee, including average rent prices, utilities, deposits, regional differences, and what renters should budget for each month.</>}
      />
      <div className="bg-white font-sans text-gray-800">

        {/* 1. Is Renting in Tennessee Affordable? */}
        <section className="container mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-xl md:text-2xl lg:text-4xl font-bold mb-6 text-slate-900">Is Renting in Tennessee Affordable?</h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">
              The Tennessee rental market offers a variety of price ranges, making it accessible to many budgets.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Variety of housing options</li>
              <li>Cost of living below national average</li>
            </ul>
          </div>
          <div className="relative h-64 md:h-80">
            <img
              src="https://whytennessee.com/wp-content/uploads/2025/12/Aerial-View-over-the-Buildings-and-Infrastructure-in-Clarksville-Tennessee-2048x1151.jpeg"
              alt="Tennessee Cityscape"
              className="rounded-lg shadow-xl object-cover w-full h-full"
            />
            <div className="absolute -bottom-6 -right-6 w-1/2 h-1/2 hidden md:block">
              <img src="https://whytennessee.com/wp-content/uploads/2025/12/pexels-kelly-2833713-2048x1150.jpg" alt="Suburban TN" className="rounded-lg border-4 border-white shadow-lg object-cover" />
            </div>
          </div>
        </section>

        {/* 2. Average Rent (Blue Banner) */}
        <section className="bg-primary text-white py-20 px-6">
          <div className="max-w-4xl mx-auto bg-white text-primary p-10 rounded-sm shadow-2xl">
            <h2 className="text-xl md:text-2xl lg:text-4xl font-bold mb-6">Average Rent in Tennessee (Statewide)</h2>
            <p className="mb-4 text-muted-foreground">Rental prices vary widely by location, but these are typical statewide ranges:</p>
            <p className="text-sm uppercase text-muted-foreground/90 font-semibold mb-4">Apartments</p>
            <ul className="space-y-2 text-black mb-6 text-sm">
              <li className="flex items-center gap-2"><span className="font-bold"><span className="flex-shrink-0">
                <svg
                  aria-hidden="true"
                  className="w-2 h-2 fill-current text-black"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                </svg>
              </span></span>1-bedroom: $900 – $1,400</li>
              <li className="flex items-center gap-2"><span className="font-bold"><span className="flex-shrink-0">
                <svg
                  aria-hidden="true"
                  className="w-2 h-2 fill-current text-black"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                </svg>
              </span></span>2-bedroom: $1,100 – $1,700</li>
              <li className="flex items-center gap-2"><span className="font-bold"><span className="flex-shrink-0">
                <svg
                  aria-hidden="true"
                  className="w-2 h-2 fill-current text-black"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                </svg>
              </span></span>3-bedroom: $1,400 – $2,000</li>
            </ul>
            <p className="text-sm uppercase text-muted-foreground/90 font-semibold mb-4">Homes for Rent</p>
            <ul className="space-y-2 text-black mb-6 text-sm">
              <li className="flex items-center gap-2"><span className="font-bold"><span className="flex-shrink-0">
                <svg
                  aria-hidden="true"
                  className="w-2 h-2 fill-current text-black"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                </svg>
              </span></span>Single-family homes: $1,400 – $2,400+</li>
              <li className="flex items-center gap-2"><span className="font-bold"><span className="flex-shrink-0">
                <svg
                  aria-hidden="true"
                  className="w-2 h-2 fill-current text-black"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                </svg>
              </span></span>Larger homes and newer construction can exceed this range in high-demand areas</li>
              <li className="flex items-center gap-2"><span className="font-bold"><span className="flex-shrink-0">
                <svg
                  aria-hidden="true"
                  className="w-2 h-2 fill-current text-black"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                </svg>
              </span></span>3-bedroom: $1,400 – $2,000</li>
            </ul>
            <div className="flex flex-col md:flex-row gap-4">
              <a href={route('frontend.homesForSale')} className="bg-primary text-white px-6 py-3 rounded font-medium hover:bg-secondary transition">Browse Homes for Sale in Tennessee→</a>
              <a href= {route('frontend.rentals')}className="border-2 border-primary text-primary px-6 py-3 rounded font-medium hover:bg-secondary hover:text-white hover:border-secondary transition">Browse Rentals in Tennessee →</a>
            </div>
          </div>
        </section>

        {/* 3. Cost of Renting by Region */}
        <section className="bg-muted">
          <div className="container mx-auto px-4 py-20">
            <h2 className="text-center text-xl md:text-2xl lg:text-4xl font-bold uppercase tracking-widest">Cost of Renting by Region</h2>
            <p className="text-center text-muted-foreground text-md my-6">Average Rent Across East, Middle, and West Tennessee</p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 border border-secondary/50 shadow-md rounded-lg">
                <h3 className="text-xl font-semibold">East Tennessee</h3>
                <p className="text-muted-foreground text-md my-4">Cities: Knoxville, Johnson City, Kingsport, Bristol, Chattanooga</p>
                <ul className="text-muted-foreground mb-4 text-sm">
                  <li className="flex items-center gap-2"><span className="font-bold"><span className="flex-shrink-0">
                    <svg
                      aria-hidden="true"
                      className="w-2 h-2 fill-current text-black"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                    </svg>
                  </span></span>Lower rent compared to national average</li>
                  <li className="flex items-center gap-2"><span className="font-bold"><span className="flex-shrink-0">
                    <svg
                      aria-hidden="true"
                      className="w-2 h-2 fill-current text-black"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                    </svg>
                  </span></span>Strong value for families and retirees</li>
                  <li className="flex items-center gap-2"><span className="font-bold"><span className="flex-shrink-0">
                    <svg
                      aria-hidden="true"
                      className="w-2 h-2 fill-current text-black"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                    </svg>
                  </span></span>Popular for outdoor lifestyle renters</li>
                </ul>
                <p className="text-black text-lg font-medium">Typical 2-bedroom rent: $1,100 – $1,500</p>
              </div>
              <div className="bg-white p-8 border border-secondary/50 shadow-md rounded-lg">
                <h3 className="text-xl font-semibold">Middle Tennessee</h3>
                <p className="text-muted-foreground text-md my-4">Cities: Nashville, Franklin, Murfreesboro, Clarksville, Cookeville</p>
                <ul className="text-muted-foreground mb-4 text-sm">
                  <li className="flex items-center gap-2"><span className="font-bold"><span className="flex-shrink-0">
                    <svg
                      aria-hidden="true"
                      className="w-2 h-2 fill-current text-black"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                    </svg>
                  </span></span>Highest rental prices near Nashville</li>
                  <li className="flex items-center gap-2"><span className="font-bold"><span className="flex-shrink-0">
                    <svg
                      aria-hidden="true"
                      className="w-2 h-2 fill-current text-black"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                    </svg>
                  </span></span>Strong job-driven demand</li>
                  <li className="flex items-center gap-2"><span className="font-bold"><span className="flex-shrink-0">
                    <svg
                      aria-hidden="true"
                      className="w-2 h-2 fill-current text-black"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                    </svg>
                  </span></span>Wide range of housing types</li>
                </ul>
                <p className="text-black text-lg font-medium">Typical 2-bedroom rent: $1,400 – $2,100+</p>
              </div>
              <div className="bg-white p-8 border border-secondary/50 shadow-md rounded-lg">
                <h3 className="text-xl font-semibold">West Tennessee</h3>
                <p className="text-muted-foreground text-md my-4">Cities: Memphis, Jackson</p>
                <ul className="text-muted-foreground mb-4 text-sm">
                  <li className="flex items-center gap-2"><span className="font-bold"><span className="flex-shrink-0">
                    <svg
                      aria-hidden="true"
                      className="w-2 h-2 fill-current text-black"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                    </svg>
                  </span></span>Some of the lowest rents in the state</li>
                  <li className="flex items-center gap-2"><span className="font-bold"><span className="flex-shrink-0">
                    <svg
                      aria-hidden="true"
                      className="w-2 h-2 fill-current text-black"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                    </svg>
                  </span></span>Excellent value for first-time renters</li>
                  <li className="flex items-center gap-2"><span className="font-bold"><span className="flex-shrink-0">
                    <svg
                      aria-hidden="true"
                      className="w-2 h-2 fill-current text-black"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                    </svg>
                  </span></span>Strong rental inventory</li>
                </ul>
                <p className="text-black text-lg font-medium">Typical 2-bedroom rent: $1,000 – $1,400</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Security Deposits & Upfront Costs */}
        <section className="container mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center border-t border-gray-100">
          <div>
            <h2 className="text-xl md:text-2xl lg:text-4xl font-bold mb-6 text-slate-900">Security Deposits & Upfront Costs</h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-4">When renting in Tennessee, expect the following upfront expenses:</p>
            <ul className="text-muted-foreground text-lg">
              <li className="flex items-center gap-2"><span className="font-bold"><span className="flex-shrink-0">
                <svg
                  aria-hidden="true"
                  className="w-2 h-2 fill-current text-black"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                </svg>
              </span></span>Application fee: $30–$75 per adult</li>
              <li className="flex items-center gap-2"><span className="font-bold"><span className="flex-shrink-0">
                <svg
                  aria-hidden="true"
                  className="w-2 h-2 fill-current text-black"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                </svg>
              </span></span>Application fee: $30–$75 per adult</li>
              <li className="flex items-center gap-2"><span className="font-bold"><span className="flex-shrink-0">
                <svg
                  aria-hidden="true"
                  className="w-2 h-2 fill-current text-black"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                </svg>
              </span></span>Pet deposit or fee: Varies by property</li>
              <li className="flex items-center gap-2"><span className="font-bold"><span className="flex-shrink-0">
                <svg
                  aria-hidden="true"
                  className="w-2 h-2 fill-current text-black"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                </svg>
              </span></span>First month’s rent: Due before move-in</li>
            </ul>
            <p className="text-lg leading-relaxed text-muted-foreground my-4">Some properties may also require:</p>
            <ul className="text-muted-foreground text-lg">
              <li className="flex items-center gap-2"><span className="font-bold"><span className="flex-shrink-0">
                <svg
                  aria-hidden="true"
                  className="w-2 h-2 fill-current text-black"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                </svg>
              </span></span>Last month’s rent</li>
              <li className="flex items-center gap-2"><span className="font-bold"><span className="flex-shrink-0">
                <svg
                  aria-hidden="true"
                  className="w-2 h-2 fill-current text-black"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                </svg>
              </span></span>Admin or processing fees</li>
            </ul>
          </div>
          <img src="https://whytennessee.com/wp-content/uploads/2025/12/pexels-mineiamartins-32775636-2048x1365.jpg" alt="Apartment Building" className="rounded shadow-lg" />
        </section>
        {/* Renting Costs & Pet Fees */}
        <section className="relative bg-cover bg-center py-20" style={{ backgroundImage: "url('https://whytennessee.com/wp-content/uploads/2025/12/pexels-mineiamartins-32775636-2048x1365.jpg')" }}>
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative max-w-7xl mx-auto px-4 text-white">
            <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold text-center mb-12">
              Renting Costs & Pet Fees
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                <h3 className="font-semibold mb-3">Pet Fees & Pet Rent</h3>
                <p className="text-sm mb-4">
                  Pet-friendly rentals are common in Tennessee, but most charge
                  additional fees.
                </p>
                <p className="text-sm font-medium mb-2">Typical pet costs:</p>
                <ul className="text-sm space-y-1">
                  <li className='flex items-center gap-2'>
                    <span className="flex-shrink-0">
                      <svg
                        aria-hidden="true"
                        className="w-2 h-2 fill-current text-white"
                        viewBox="0 0 512 512"
                      >
                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                      </svg>
                    </span>Non-refundable pet fee: $200–$500</li>
                  <li className='flex items-center gap-2'>
                    <span className="flex-shrink-0">
                      <svg
                        aria-hidden="true"
                        className="w-2 h-2 fill-current text-white"
                        viewBox="0 0 512 512"
                      >
                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                      </svg>
                    </span>Monthly pet rent: $20–$50 per pet</li>
                  <li className='flex items-center gap-2'>
                    <span className="flex-shrink-0">
                      <svg
                        aria-hidden="true"
                        className="w-2 h-2 fill-current text-white"
                        viewBox="0 0 512 512"
                      >
                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                      </svg>
                    </span>Breed or size restrictions may apply</li>
                </ul>
                <p className="text-sm mt-4">
                  Single-family home rentals are often more flexible with pets
                  than apartments.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                <h3 className="font-semibold mb-3">
                  Utilities & Monthly Living Costs
                </h3>
                <p className="text-sm mb-4">
                  Rent is only part of the monthly budget. Most renters should
                  also plan for:
                </p>
                <ul className="text-sm space-y-1">
                  <li className='flex items-center gap-2'>
                    <span className="flex-shrink-0">
                      <svg
                        aria-hidden="true"
                        className="w-2 h-2 fill-current text-white"
                        viewBox="0 0 512 512"
                      >
                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                      </svg>
                    </span>Electricity: $120–$180</li>
                  <li className='flex items-center gap-2'>
                    <span className="flex-shrink-0">
                      <svg
                        aria-hidden="true"
                        className="w-2 h-2 fill-current text-white"
                        viewBox="0 0 512 512"
                      >
                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                      </svg>
                    </span>Water & sewer: $40–$70</li>
                  <li className='flex items-center gap-2'>
                    <span className="flex-shrink-0">
                      <svg
                        aria-hidden="true"
                        className="w-2 h-2 fill-current text-white"
                        viewBox="0 0 512 512"
                      >
                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                      </svg>
                    </span>Internet: $60–$90</li>
                  <li className='flex items-center gap-2'>
                    <span className="flex-shrink-0">
                      <svg
                        aria-hidden="true"
                        className="w-2 h-2 fill-current text-white"
                        viewBox="0 0 512 512"
                      >
                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                      </svg>
                    </span>Trash: Sometimes included</li>
                </ul>
                <p className="text-sm mt-4">
                  Apartments may include some utilities, while homes for rent
                  usually do not.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                <h3 className="font-semibold mb-3">Transportation Costs</h3>
                <p className="text-sm mb-4">
                  Transportation in Tennessee is relatively affordable.
                </p>
                <ul className="text-sm space-y-1">
                  <li className='flex items-center gap-2'>
                    <span className="flex-shrink-0">
                      <svg
                        aria-hidden="true"
                        className="w-2 h-2 fill-current text-white"
                        viewBox="0 0 512 512"
                      >
                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                      </svg>
                    </span>Gas prices below national average</li>
                  <li className='flex items-center gap-2'>
                    <span className="flex-shrink-0">
                      <svg
                        aria-hidden="true"
                        className="w-2 h-2 fill-current text-white"
                        viewBox="0 0 512 512"
                      >
                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                      </svg>
                    </span>Minimal toll roads</li>
                  <li className='flex items-center gap-2'>
                    <span className="flex-shrink-0">
                      <svg
                        aria-hidden="true"
                        className="w-2 h-2 fill-current text-white"
                        viewBox="0 0 512 512"
                      >
                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                      </svg>
                    </span>Shorter commutes outside major metros</li>
                </ul>
                <p className="text-sm mt-4">
                  Most renters will need a personal vehicle, especially outside
                  city centers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Apartments vs Homes */}
        <section className="bg-muted py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold mb-10">
              Apartments vs Homes for Rent (Cost Comparison)
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6 border-b-4 border-primary">
                <h3 className="text-2xl font-semibold mb-4">
                  Apartments
                </h3>
                <ul className="text-lg text-muted-foreground space-y-1">
                  <li className='flex items-center justify-center gap-2'>
                    <span className="flex-shrink-0">
                      <svg
                        aria-hidden="true"
                        className="w-2 h-2 fill-current text-black"
                        viewBox="0 0 512 512"
                      >
                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                      </svg>
                    </span>Lower rent and utilities</li>
                  <li className='flex items-center justify-center gap-2'>
                    <span className="flex-shrink-0">
                      <svg
                        aria-hidden="true"
                        className="w-2 h-2 fill-current text-black"
                        viewBox="0 0 512 512"
                      >
                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                      </svg>
                    </span>Fewer maintenance responsibilities</li>
                  <li className='flex items-center justify-center gap-2'>
                    <span className="flex-shrink-0">
                      <svg
                        aria-hidden="true"
                        className="w-2 h-2 fill-current text-black"
                        viewBox="0 0 512 512"
                      >
                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                      </svg>
                    </span>Amenities included (gym, pool, etc.) Homes for Rent</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 border-b-4 border-primary">
                <h3 className="text-2xl font-semibold text-center mb-4">
                  Homes for Rent
                </h3>
                <ul className="text-lg text-muted-foreground space-y-1">
                  <li className='flex items-center justify-center gap-2'>
                    <span className="flex-shrink-0">
                      <svg
                        aria-hidden="true"
                        className="w-2 h-2 fill-current text-black"
                        viewBox="0 0 512 512"
                      >
                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                      </svg>
                    </span>Higher monthly rent</li>
                  <li className='flex items-center justify-center gap-2'>
                    <span className="flex-shrink-0">
                      <svg
                        aria-hidden="true"
                        className="w-2 h-2 fill-current text-black"
                        viewBox="0 0 512 512"
                      >
                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                      </svg>
                    </span>More space and privacy</li>
                  <li className='flex items-center justify-center gap-2'>
                    <span className="flex-shrink-0">
                      <svg
                        aria-hidden="true"
                        className="w-2 h-2 fill-current text-black"
                        viewBox="0 0 512 512"
                      >
                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                      </svg>
                    </span>Better for families and pets</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <img src="https://whytennessee.com/wp-content/uploads/2025/12/pexels-caleb-clark-6462955-32767698-scaled.jpg" alt="Neighborhood Street" className="rounded shadow-lg order-2 md:order-1" />
            <div className="order-1 md:order-2">
              <h2 className="text-xl md:text-2xl lg:text-4xl font-bold mb-6 text-slate-900">Is Rent Increasing in Tennessee?</h2>
              <p className="text-lg leading-relaxed text-muted-foreground mb-4">Rental prices have risen in recent years due to:</p>
              <ul className="text-sm space-y-1 mb-4">
                <li className='flex items-center gap-2'>
                  <span className="flex-shrink-0">
                    <svg
                      aria-hidden="true"
                      className="w-2 h-2 fill-current text-black"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                    </svg>
                  </span>Population growth</li>
                <li className='flex items-center gap-2'>
                  <span className="flex-shrink-0">
                    <svg
                      aria-hidden="true"
                      className="w-2 h-2 fill-current text-black"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                    </svg>
                  </span>Job expansion</li>
                <li className='flex items-center gap-2'>
                  <span className="flex-shrink-0">
                    <svg
                      aria-hidden="true"
                      className="w-2 h-2 fill-current text-black"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                    </svg>
                  </span>Higher homeownership barriers</li>
              </ul>
              <p className="text-lg leading-relaxed text-muted-foreground">However, Tennessee remains more affordable than many comparable states, and rent growth is stabilizing in many markets.</p>
            </div>
          </div>
        </section>

        <section className="bg-muted py-20">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className='order-2 md:order-1'>
              <h2 className="text-xl md:text-2xl lg:text-4xl font-bold mb-6 text-slate-900">Is Renting or Buying Cheaper in Tennessee?</h2>
              <p className="text-lg leading-relaxed text-muted-foreground mb-4">This depends on location, timing, and personal finances</p>
              <ul className="text-md space-y-1 mb-4">
                <li className='flex items-center gap-2'>
                  <span className="flex-shrink-0">
                    <svg
                      aria-hidden="true"
                      className="w-2 h-2 fill-current text-black"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                    </svg>
                  </span>Renting offers flexibility</li>
                <li className='flex items-center gap-2'>
                  <span className="flex-shrink-0">
                    <svg
                      aria-hidden="true"
                      className="w-2 h-2 fill-current text-black"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                    </svg>
                  </span>Buying builds equity but requires upfront costs</li>
              </ul>
              <p className="text-lg leading-relaxed text-muted-foreground">Many people choose to rent first, then buy once they’re settled.</p>
            </div>
            <img src="https://whytennessee.com/wp-content/uploads/2025/12/pexels-kelly-4109661-2048x1151.jpg" alt="Neighborhood Street" className="rounded shadow-lg order-1 md:order-2" />
          </div>
        </section>

        <section className="bg-white">
          <div className="container mx-auto px-4 py-20 pb-32 grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-64 md:h-80">
              <img
                src="https://whytennessee.com/wp-content/uploads/2025/12/Aerial-View-over-the-Buildings-and-Infrastructure-in-Clarksville-Tennessee-2048x1151.jpeg"
                alt="Tennessee Cityscape"
                className="rounded-lg shadow-xl object-cover w-full h-full"
              />
              <div className="absolute -bottom-6 -right-6 w-1/2 h-1/2 hidden md:block">
                <img src="https://whytennessee.com/wp-content/uploads/2025/12/pexels-kelly-2833713-2048x1150.jpg" alt="Suburban TN" className="rounded-lg border-4 border-white shadow-lg object-cover" />
              </div>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl lg:text-4xl font-bold mb-6 text-slate-900">Find Rentals Across Tennessee</h2>
              <p className="text-lg leading-relaxed text-muted-foreground mb-4">WhyTennessee.com helps renters:</p>
              <ul className="text-md space-y-1 mb-4">
                <li className='flex items-center gap-2'>
                  <span className="flex-shrink-0">
                    <svg
                      aria-hidden="true"
                      className="w-2 h-2 fill-current text-black"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                    </svg>
                  </span>Compare rental costs by city</li>
                <li className='flex items-center gap-2'>
                  <span className="flex-shrink-0">
                    <svg
                      aria-hidden="true"
                      className="w-2 h-2 fill-current text-black"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                    </svg>
                  </span>Browse homes, condos, and apartments for rent</li>
                <li className='flex items-center gap-2'>
                  <span className="flex-shrink-0">
                    <svg
                      aria-hidden="true"
                      className="w-2 h-2 fill-current text-black"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                    </svg>
                  </span>Connect with local realtors and property managers</li>
              </ul>
              <a href={route('frontend.rentals')} className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition">Browse Rentals in Tennessee →</a>
            </div>
          </div>
        </section>

        <section
          className="relative w-full bg-cover bg-center py-24 px-4 text-center"
          style={{
            backgroundImage:
              "url('https://whytennessee.com/wp-content/uploads/2025/12/pexels-denil-33476066-scaled.jpg')",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content */}
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Final Thoughts
            </h2>
            <p className="text-white">
              Tennessee offers an excellent rental market with affordable prices, great
              communities, and quality of life. Start your Tennessee rental journey
              today.
            </p>
          </div>
        </section>

        <section className="bg-primary py-20 px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white">Disclaimer</h2>
            <p className="text-gray-100">The information provided is for general informational purposes only and should not be considered financial, legal, or real estate advice. Costs, prices, and conditions may vary by location and over time.</p>
          </div>
        </section>

      </div>
    </FrontendLayout>
  );
};

export default TennesseeRentPage;