import { ArrowRight, Car, CheckCircle, DollarSign, Heart, Home, MapPin } from 'lucide-react';
import React from 'react';
import { BsBuildings, BsHouses } from 'react-icons/bs';

export default function RentingSections() {
  return (
    <div className="w-full bg-white">

      {/* Good Idea Section */}
      <section className="py-20 px-4 container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-4">Is Renting in Tennessee a Good Idea?</h2>
            <p className="text-gray-600 mb-4">Yes — for many people, renting in Tennessee is the smartest first step. Renting makes sense if you:</p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <span className="flex-shrink-0">
                  <svg aria-hidden="true" className="w-2 h-2 fill-current text-black" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                  </svg>
                </span>
                <span>Are moving from another state</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex-shrink-0">
                  <svg aria-hidden="true" className="w-2 h-2 fill-current text-black" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                  </svg>
                </span>
                <span>Want to explore different cities before buying</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex-shrink-0">
                  <svg aria-hidden="true" className="w-2 h-2 fill-current text-black" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                  </svg>
                </span>
                <span>Are waiting for interest rates or prices to stabilize</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex-shrink-0">
                  <svg aria-hidden="true" className="w-2 h-2 fill-current text-black" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                  </svg>
                </span>
                <span>Need flexibility for work or family reasons</span>
              </li>
            </ul>
            <p className="text-gray-600 mt-4">Many people who eventually buy in Tennessee rent first, then purchase once they know the area.</p>
          </div>

          <video className="rounded-lg" controls>
            <source src="https://whytennessee.com/wp-content/uploads/2026/01/Slider-Shot-of-Luxury-Apartments-in-the-Suburbs.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* Average Rent Section */}
      <section className="bg-primary text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img src="https://whytennessee.com/wp-content/uploads/2026/01/Apartments-in-scaled.jpeg" alt="Modern apartment" className="rounded-tr-4xl rounded-bl-4xl" />
            <div>
              <h2 className="text-3xl font-bold mb-4">Average Rent in Tennessee</h2>
              <p className="text-blue-100 max-w-2xl">Rental prices vary by city and region, but Tennessee remains more affordable than most U.S. states.</p>
              <p className="text-blue-100 mb-6">Typical Monthly Rent Ranges :</p>
              <div className="space-y-3 mb-6">
                <p className="flex items-center gap-2">
                  <span className="flex-shrink-0">
                    <svg aria-hidden="true" className="w-2 h-2 fill-current text-white" viewBox="0 0 512 512">
                      <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                    </svg>
                  </span><strong>1-bedroom apartment:</strong> $900–$1,400</p>
                <p className="flex items-center gap-2">
                  <span className="flex-shrink-0">
                    <svg aria-hidden="true" className="w-2 h-2 fill-current text-white" viewBox="0 0 512 512">
                      <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                    </svg>
                  </span><strong>2-bedroom apartment:</strong> $1,100–$1,700</p>
                <p className="flex items-center gap-2">
                  <span className="flex-shrink-0">
                    <svg aria-hidden="true" className="w-2 h-2 fill-current text-white" viewBox="0 0 512 512">
                      <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                    </svg>
                  </span><strong>Single-family home:</strong> $1,400–$2,200</p>
              </div>
              <p className='text-white mb-6'>East and West Tennessee tend to be more affordable than areas near Nashville.</p>
              <button className="bg-secondary hover:bg-secondary text-white px-6 py-2 rounded font-semibold transition">
                See Cost of Renting in Tennessee →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods Section */}
      <section className="py-16 px-4 container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Average Rent in Tennessee</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Best for Affordability', list: ['Kingsport', 'Bristol', 'Jackson', 'Memphis'], img: 'https://whytennessee.com/wp-content/uploads/2025/12/Best_Memphis_Neighborhoods_Harbor_Town.jpg' },
            { title: 'Best for Kids & City Life', list: ['Nashville', 'Chattanooga', 'Knoxville'], img: 'https://whytennessee.com/wp-content/uploads/2025/12/pexels-kelly-3061230-scaled.jpg' },
            { title: 'Best for Families', list: ['Johnson City', 'Clarksville', 'Murfreesboro'], img: 'https://whytennessee.com/wp-content/uploads/2025/12/pexels-curtis-adams-1694007-3935344-scaled.jpg' }
          ].map((item, i) => (
            <div
              key={i}
              className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition
             flex flex-col h-full"
            >
              {/* Image */}
              <div className="p-4">
                <img src={item.img} alt={item.title} className="w-full h-60 rounded-md object-cover" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  {item.list && (
                    <ul className="mb-4 space-y-1 text-sm text-gray-600">
                      {item.list.map((city, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-md font-medium">
                          <span className="flex-shrink-0">
                            <svg
                              aria-hidden="true"
                              className="w-2 h-2 fill-current text-black"
                              viewBox="0 0 512 512"
                            >
                              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                            </svg>
                          </span>
                          {city}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Button always at bottom */}
                <div className="mt-auto">
                  <button className="bg-primary text-white py-3 px-5 rounded font-semibold hover:bg-secondary transition">
                    Browse Rentals by City →
                  </button>
                </div>
              </div>
            </div>

          ))}
        </div>
      </section>

      {/* Types & Lease Section */}
      <section className="bg-primary-background py-16 px-4">
        <div className="container mx-auto grid md:grid-cols-2 gap-8">
          <div className="flex gap-4">
            <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop" alt="Garden apartment" className="w-80 h-96 object-cover" />
            <div>
              <h3 className="text-xl lg:text-2xl mb-2">Types of Rentals Available in Tennessee</h3>
              <p className="text-gray-600 text-md mb-3">Renters can choose from a wide variety of properties:</p>
              <ul className="space-y-1 text-sm">
                <li className="flex items-center gap-2 text-md font-medium">
                  <span className="flex-shrink-0">
                    <svg
                      aria-hidden="true"
                      className="w-2 h-2 fill-current text-black"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                    </svg>
                  </span>
                  <span>Apartments</span>
                </li>
                <li className="flex items-center gap-2 text-md font-medium">
                  <span className="flex-shrink-0">
                    <svg
                      aria-hidden="true"
                      className="w-2 h-2 fill-current text-black"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                    </svg>
                  </span>
                  <span>Condos</span>
                </li>
                <li className="flex items-center gap-2 text-md font-medium">
                  <span className="flex-shrink-0">
                    <svg
                      aria-hidden="true"
                      className="w-2 h-2 fill-current text-black"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                    </svg>
                  </span>
                  <span>Townhomes</span>
                </li>
                <li className="flex items-center gap-2 text-md font-medium">
                  <span className="flex-shrink-0">
                    <svg
                      aria-hidden="true"
                      className="w-2 h-2 fill-current text-black"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                    </svg>
                  </span>
                  <span>Single-family homes</span>
                </li>
                <li className="flex items-center gap-2 text-md font-medium">
                  <span className="flex-shrink-0">
                    <svg
                      aria-hidden="true"
                      className="w-2 h-2 fill-current text-black"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                    </svg>
                  </span>
                  <span>Short-term and corporate rentals</span>
                </li>
              </ul>
              <p className="text-gray-600 text-sm mt-4">Single-family home rentals are especially popular with families relocating to Tennessee.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <img src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=300&fit=crop" alt="Lease agreement" className="w-80 h-96 object-cover" />
            <div>
              <h3 className="font-bold text-xl mb-2">Lease Terms & Deposits</h3>
              <p className="text-gray-600 text-sm mb-3">Understand Tennessee's lease agreements and security deposit requirements.</p>
              <ul className="space-y-1 text-sm">
                <li className="flex items-center gap-2 text-md font-medium">
                  <span className="flex-shrink-0">
                    <svg
                      aria-hidden="true"
                      className="w-2 h-2 fill-current text-black"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                    </svg>
                  </span>
                  <span>Lease length: 12 months (some offer 6-month or month-to-month)</span>
                </li>
                <li className="flex items-center gap-2 text-md font-medium">
                  <span className="flex-shrink-0">
                    <svg
                      aria-hidden="true"
                      className="w-2 h-2 fill-current text-black"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                    </svg>
                  </span>
                  <span>Security deposit: Typically 1 month’s rent</span>
                </li>
                <li className="flex items-center gap-2 text-md font-medium">
                  <span className="flex-shrink-0">
                    <svg
                      aria-hidden="true"
                      className="w-2 h-2 fill-current text-black"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                    </svg>
                  </span>
                  <span>Pet deposit: Varies by property</span>
                </li>
              </ul>
              <p className="text-gray-600 text-sm mt-4">Tennessee landlord-tenant laws are generally landlord-friendly, so renters should carefully review lease terms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Utilities Section */}
      <section className="bg-blue-900 text-white py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Utilities & Monthly Costs</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { label: 'Electricity', price: '$100-$150' },
              { label: 'Water/Gas', price: '$40-$70' },
              { label: 'Internet', price: '$50-$80' },
              { label: 'Total', price: '$190-$300' }
            ].map((util, i) => (
              <div key={i} className={`p-4 rounded text-center ${i === 3 ? 'bg-secondary' : 'bg-blue-800'}`}>
                <p className="text-sm mb-2">{util.label}</p>
                <p className="text-2xl font-bold">{util.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pet Friendly Section */}
      <section className="py-16 px-4 container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img src="https://images.unsplash.com/photo-1552053831-71594a27c62d?w=500&h=400&fit=crop" alt="Pet friendly" className="rounded-lg" />
          <div>
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
              <Heart className="text-red-500" /> Pet Friendly Rentals
            </h2>
            <p className="text-gray-600 mb-4">Many Tennessee landlords welcome pets. Find rentals that embrace your furry friends.</p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">✓ Dog-friendly apartments</li>
              <li className="flex items-center gap-2">✓ Cat-friendly studios</li>
              <li className="flex items-center gap-2">✓ Low pet deposit options</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Transportation Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto grid md:grid-cols-2 gap-8">
          <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&h=400&fit=crop" alt="Road" className="rounded-lg h-64 object-cover" />
          <div className="bg-blue-900 text-white p-8 rounded-lg flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
              <Car /> Transportation & Commuting
            </h2>
            <p className="mb-4">Tennessee offers convenient commuting options with growing public transportation networks.</p>
            <ul className="space-y-2">
              <li>✓ I-24, I-75, I-81 interstate access</li>
              <li>✓ Public transit in major cities</li>
              <li>✓ Affordable vehicle costs</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Renting vs Buying Section */}
      <section className="py-16 px-4 container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Renting vs Buying in Tennessee</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'Flexibility', desc: 'Easy to move when renting' },
            { title: 'Lower Costs', desc: 'Rent typically lower than mortgage' },
            { title: 'Build Equity', desc: 'Buying builds home ownership' }
          ].map((item, i) => (
            <div key={i} className="p-6 border rounded-lg">
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How To Find Section */}
      <section className="bg-blue-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">How to Find Rentals in Tennessee</h2>
          <p className="text-blue-100 mb-8">Follow these steps to find the perfect rental property in Tennessee.</p>
          <button className="bg-secondary hover:bg-secondary px-8 py-3 rounded font-semibold transition flex items-center gap-2 mx-auto">
            Get Started <ArrowRight />
          </button>
        </div>
      </section>

      {/* Explore Cities Section */}
      <section className="py-16 px-4 container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Explore Rentals & Cities</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: BsBuildings, city: 'Nashville Rentals' },
            { icon: Home, city: 'Memphis Rentals' },
            { icon: MapPin, city: 'Knoxville Rentals' }
          ].map((item, i) => (
            <div key={i} className="text-center p-6 border rounded-lg hover:shadow-lg transition">
              <item.icon className="text-4xl text-blue-900 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">{item.city}</h3>
              <button className="w-full bg-blue-900 text-white py-2 rounded font-semibold hover:bg-blue-800 transition">
                View Rentals
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Final Thoughts Section */}
      <section className="bg-gray-50 py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Final Thoughts</h2>
          <p className="text-gray-600">Tennessee offers an excellent rental market with affordable prices, great communities, and quality of life. Start your Tennessee rental journey today.</p>
        </div>
      </section>
    </div>
  );
}