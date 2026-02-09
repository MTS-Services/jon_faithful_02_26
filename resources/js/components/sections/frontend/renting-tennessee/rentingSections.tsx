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
                  <svg aria-hidden="true" className="w-2 h-2 fill-current text-white" viewBox="0 0 512 512">
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
        <h2 className="text-5xl text-center mb-12">Average Rent in Tennessee</h2>
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
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

            <div className="flex flex-col sm:flex-row gap-6">
            <img
                src="https://whytennessee.com/wp-content/uploads/2025/12/300-S.Montclair.jpg"
                alt="Garden apartment in Tennessee"
                className="w-full sm:w-72 h-96 object-cover rounded-lg shadow-md"
            />
            <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Types of Rentals Available in Tennessee</h3>
                <p className="text-gray-600 mb-6">Renters can choose from a wide variety of properties:</p>

                <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-700">
                    <span className="h-2 w-2 rounded-full bg-gray-600"></span>
                    <span>Apartments</span>
                </li>

                <li className="flex items-center gap-3 text-gray-700">
                    <span className="h-2 w-2 rounded-full bg-gray-600"></span>
                    <span>Condos</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                    <span className="h-2 w-2 rounded-full bg-gray-600"></span>
                    <span>Townhomes</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                    <span className="h-2 w-2 rounded-full bg-gray-600"></span>
                    <span>Single-family homes</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                    <span className="h-2 w-2 rounded-full bg-gray-600"></span>
                    <span>Short-term and corporate rentals</span>
                </li>
                </ul>

                <p className="text-gray-500 text-sm mt-8 italic border-l-4 border-blue-100 pl-4">
                Single-family home rentals are especially popular with families relocating to Tennessee.
                </p>
            </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
            <img
                src="https://whytennessee.com/wp-content/uploads/2026/01/Interracial-couple-having-consultation-with-a-realtor-scaled.jpeg"
                alt="Couple reviewing lease agreement"
                className="w-full sm:w-72 h-96 object-cover rounded-lg shadow-md"
            />
            <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Lease Terms & Deposits</h3>
                <p className="text-gray-600 mb-6">Understand Tennessee's lease agreements and security deposit requirements.</p>

                <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-700">
                    <span className="mt-2 h-2 w-2 rounded-full bg-gray-600 flex-shrink-0"></span>
                    <span><strong>Lease length:</strong> 12 months (some offer 6-month or month-to-month)</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                    <span className="mt-2 h-2 w-2 rounded-full bg-gray-600 flex-shrink-0"></span>
                    <span><strong>Security deposit:</strong> Typically 1 month’s rent</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                    <span className="mt-2 h-2 w-2 rounded-full bg-gray-600 flex-shrink-0"></span>
                    <span><strong>Pet deposit:</strong> Varies by property</span>
                </li>
                </ul>

                <div className="mt-8 p-4 bg-amber-50 rounded-lg border border-amber-100">
                <p className="text-amber-800 text-sm">
                    <strong>Note:</strong> Tennessee landlord-tenant laws are generally landlord-friendly, so renters should carefully review lease terms.
                </p>
                </div>
            </div>
            </div>

        </div>
    </section>

      {/* Utilities Section */}
      <section className="bg-primary text-white py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-5xl text-center mb-6">Utilities & Monthly Costs</h2>
          <p className="text-lg text-center mb-6">Some apartments include utilities, but for most homes, renters need to pay them separately.</p>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { label: 'Electricity', price: '$120-$180' },
              { label: 'Water/Gas', price: '$40-$70' },
              { label: 'Internet', price: '$60-$90' },
              { label: 'Total', desc: 'Sometimes included' }
            ].map((util, i) => (
              <div key={i} className="bg-white text-center font-bold rounded-lg overflow-hidden">
                <p className="text-xl mb-2 bg-secondary py-4 text-white">{util.label}</p>
                <p className={`text-black py-8 ${util.price ? 'text-2xl font-bold' : 'text-lg'}`}>{util.price ? util.price : util.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pet Friendly Section */}
      <section className="py-16 px-4 container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className='bg-primary-background w-full h-full p-8 flex flex-col justify-center'>
            <h3 className="text-2xl lg:text-4xl font-semibold mb-6">Pet Friendly Rentals in Tennessee</h3>
            <p className="text-gray-600 text-md">Pet-friendly rentals are common, but policies vary.</p>
            <br />
            <p>Typical requirements:</p>
            <ul className="space-y-1 text-sm">
              <li className="flex items-center gap-2 text-md">
                <span className="flex-shrink-0">
                  <svg
                    aria-hidden="true"
                    className="w-2 h-2 fill-current text-black"
                    viewBox="0 0 512 512"
                  >
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                  </svg>
                </span>
                <span>Monthly pet rent</span>
              </li>
              <li className="flex items-center gap-2 text-md">
                <span className="flex-shrink-0">
                  <svg
                    aria-hidden="true"
                    className="w-2 h-2 fill-current text-black"
                    viewBox="0 0 512 512"
                  >
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                  </svg>
                </span>
                <span>Non-refundable pet fees</span>
              </li>
              <li className="flex items-center gap-2 text-md">
                <span className="flex-shrink-0">
                  <svg
                    aria-hidden="true"
                    className="w-2 h-2 fill-current text-black"
                    viewBox="0 0 512 512"
                  >
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                  </svg>
                </span>
                <span>Breed or size restrictions</span>
              </li>
            </ul>
            <p className="text-gray-600 text-sm mt-6">Homes for rent are often more pet-friendly than apartments.</p>
          </div>
          <img src="https://whytennessee.com/wp-content/uploads/2026/01/Four-young-friends-playing-with-a-dog_-spending-time-together-on-a-porch-of-a-country-house-on-the-evening-scaled.jpeg" alt="Pet friendly" className="rounded-tl-4xl rounded-br-4xl w-full h-full min-h-[400px] object-cover" />
          <video className="rounded-tl-4xl rounded-br-4xl w-full h-full min-h-[400px] object-cover" controls>
            <source src="https://whytennessee.com/wp-content/uploads/2026/01/Aerial-close-following-behind-grey-Sports-Car-nearby-a-river-at-sunset_-US-National-Park.mp4" type="video/mp4" />
          </video>
          <div className="bg-blue-900 text-white w-full h-full p-8 flex flex-col justify-center">
            <h3 className="text-2xl lg:text-4xl font-semibold mb-6">Transportation & Commuting</h3>
            <p className="text-white text-md mb-6">Tennessee is a car-dependent state.</p>
            <ul className="space-y-1 text-sm">
              <li className="flex items-center gap-2 text-md">
                <span className="flex-shrink-0">
                  <svg
                    aria-hidden="true"
                    className="w-2 h-2 fill-current text-white"
                    viewBox="0 0 512 512"
                  >
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                  </svg>
                </span>
                <span>Public transportation is limited outside major cities</span>
              </li>
              <li className="flex items-center gap-2 text-md">
                <span className="flex-shrink-0">
                  <svg
                    aria-hidden="true"
                    className="w-2 h-2 fill-current text-white"
                    viewBox="0 0 512 512"
                  >
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                  </svg>
                </span>
                <span>Gas prices are below national averages</span>
              </li>
              <li className="flex items-center gap-2 text-md">
                <span className="flex-shrink-0">
                  <svg
                    aria-hidden="true"
                    className="w-2 h-2 fill-current text-white"
                    viewBox="0 0 512 512"
                  >
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                  </svg>
                </span>
                <span>Commute times are shorter than many metro areas</span>
              </li>
            </ul>
            <p className="text-white text-sm mt-6">Single-family home rentals are especially popular with families relocating to Tennessee.</p>

          </div>
        </div>
      </section>

      {/* Renting vs Buying Section */}
      <section className="py-16 bg-primary-background">
        <div className="px-4 container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-semibold">Renting vs Buying in</h2>
            <h2 className='text-4xl font-semibold mb-6'>Tennessee</h2>
            <button className="bg-primary text-white py-3 px-5 rounded font-semibold hover:bg-secondary transition">
              Renting vs Buying in Tennessee →
            </button>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Renting in Tennessee', desc: 'You should rent if you:', list: ['You’re new to Tennesse', 'Need flexibility', 'Aren’t ready for a long-term commitment'] },
              { title: 'Buying in Tennessee', desc: 'You should buy if you:', list: ['You plan to stay long-term', 'Want to build equity', 'Have stable income and down payment'] },
            ].map((item, i) => (
              <div key={i} className="p-6 shadow-xl border rounded-lg bg-white">
                <h3 className="font-semibold text-xl mb-4">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.desc}</p>
                <ul className="mb-4 space-y-1 text-sm text-gray-600">
                  {item.list.map((item, idx) => (
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
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How To Find Section */}
      <section className="bg-blue-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">How to Find Rentals in Tennessee</h2>
          <p className="text-blue-100 mb-6">The best rental opportunities often come from local realtors, property managers, and private landlords who know the market well. Working with these sources can help you find better options, fair pricing, and rentals that may not be widely advertised.</p>
          <p className='text-blue-100 mb-6'>WhyTennessee.com brings rentals, homes for sale, and relocation resources into one place.</p>
          <button className="bg-secondary hover:bg-secondary px-8 py-3 rounded font-semibold transition flex items-center gap-2 mx-auto">
            Renting vs Buying in Tennessee →
          </button>
        </div>
      </section>

      {/* Explore Cities Section */}
      <section className="py-16 px-4 container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Explore Rentals & Cities</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: BsBuildings, city: 'Browse Rentals', desc: "Find your perfect rental in Tennessee's top cities", button: 'View Rentals →' },
            { icon: Home, city: 'Homes for Sale', desc: "Discover properties across Tennessee", button: 'View Homes →' },
            { icon: MapPin, city: 'Explore Cities', desc: "Learn about Tennessee's neighborhoods", button: 'Explore Cities →' }
          ].map((item, i) => (
            <div key={i} className="text-center p-6 border rounded-lg hover:shadow-lg transition">
              <item.icon size={40} className=" text-blue-900 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">{item.city}</h3>
              <p className="text-gray-600 text-md mb-4 w-52 mx-auto">{item.desc}</p>
              <button className="w-full bg-blue-900 text-white py-2 rounded font-semibold hover:bg-blue-800 transition">
                {item.button}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Final Thoughts Section */}
      <section className="bg-primary-background py-24 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Final Thoughts</h2>
          <p className="text-gray-600">Tennessee offers an excellent rental market with affordable prices, great communities, and quality of life. Start your Tennessee rental journey today.</p>
        </div>
      </section>
      {/* Final Thoughts Section */}
      <section className="bg-primary py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white">Disclaimer</h2>
          <p className="text-gray-100">The information provided is for general informational purposes only and should not be considered financial, legal, or real estate advice. Costs, prices, and conditions may vary by location and over time.</p>
        </div>
      </section>
    </div>
  );
}
