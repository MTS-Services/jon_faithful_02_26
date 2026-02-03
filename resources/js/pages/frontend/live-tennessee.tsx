import { Hero } from '@/components/sections/frontend/hero'
import AgentCard from '@/components/ui/agent-card'
import FrontendLayout from '@/layouts/frontend-layout'
import React from 'react'

 

export default function LiveTennessee() {
  return (
    <FrontendLayout>
      <Hero
        slides={[
          'https://whytennessee.com/wp-content/uploads/2025/12/pexels-chaitaastic-3722911-scaled.jpg',
        ]}
        title={<>Best Places to Live in Tennessee</>}
        description={<>Best Places to Live in Tennessee
                    Top Cities, Cost of Living, Jobs & Lifestyle Breakdown Tennessee continues to be one of the most popular states to move to in the U.S. Thanks to its no state income tax, affordable housing, strong job markets, and diverse lifestyles, people from across the country are relocating to Tennessee every year. This guide breaks down the best places to live in Tennessee, based on affordability, quality of life, job opportunities, schools, and lifestyle.</>}
                          />

        
          <section>
            <div className=" py-28  flex items-center justify-center p-6 font-sans">
          <div className="container mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative"> 
                <div className="relative z-10  overflow-hidden aspect-video bg-black flex items-center justify-center">
  
             <video 
                  className="w-full h-full object-cover" 
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  poster="https://whytennessee.com/wp-content/uploads/2025/12/pexels-chaitaastic-3722911-scaled.jpg"
                >
                  <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

          </div>               
             
              <div className="absolute -bottom-24 right-0 w-1/2 h-50 z-20 border-8 border-white shadow-xl hidden sm:block rounded-br-lg">
                <img
                  src="https://whytennessee.com/wp-content/uploads/2025/12/pexels-kelly-2833713-2048x1150.jpg"
                  alt="City daytime stadium"
                  className="w-full h-full object-cover rounded-br-lg" 
                />
              </div>
            </div>
            <div className=" pl-12">
              <h1 className="text-4xl font-semibold text-slate-800 leading-tight">
                What Makes a City One of the Best in Tennessee?
              </h1>
              <p className="text-lg text-slate-600 italic mt-2">
                We considered the following factors:
              </p>
              <ul className=" text-slate-700 mt-2">
                <li className="flex items-start">
                  <span className="mr-2 text-2xl text-black">•</span>
                  <span>Cost of living &amp; housing affordability</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-2xl text-black">•</span>
                  <span>Job market &amp; economic growth</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-2xl text-black">•</span>
                  <span>Schools &amp; education</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-2xl text-black">•</span>
                  <span>Lifestyle (urban, suburban, outdoor, family-friendly)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-2xl text-black">•</span>
                  <span>Long-term real estate value</span>
                </li>
              </ul>
            </div>
          </div>
         </div>
          </section>

          <section>
            <div className="bg-primary-background py-28 flex items-center justify-center p-8 font-sans">
          <div className="container mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="order-2 lg:order-1 space-y-6">
              <h2 className="text-4xl font-bold text-slate-800 leading-tight">
                Best Overall Cities to Live in Tennessee
              </h2>
              
              <p className="text-orange-600 font-semibold uppercase tracking-wide text-sm">
                Nashville
              </p>

              <p className="text-slate-700 leading-relaxed">
                <span className="font-bold text-slate-800">Best for: Jobs, culture, and long-term growth.</span> 
                Nashville is Tennessee's economic engine and cultural hub. It offers a booming job market, 
                diverse neighborhoods, and strong appreciation potential. Why people choose Nashville:
              </p>

              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start italic">
                  <span className="mr-2">•</span>
                  <span>Strong employment in healthcare, tech, and entertainment</span>
                </li>
                <li className="flex items-start italic">
                  <span className="mr-2">•</span>
                  <span>Vibrant music and food scene</span>
                </li>
                <li className="flex items-start italic">
                  <span className="mr-2">•</span>
                  <span>Big-city amenities without coastal prices</span>
                </li>
              </ul>

              <div className="pt-4">
                <a href="#" className="inline-block bg-[#243c64] text-white px-8 py-3 rounded-full font-medium hover:bg-slate-700 transition-colors shadow-lg">
                  Explore Living in Nashville
                </a>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative p-2 border-2 rounded-sm">
                <img 
                  src="https://whytennessee.com/wp-content/uploads/2026/01/Nashville-Skyline-with-stadium-2048x981.jpeg" 
                  alt="Nashville Skyline at Sunset" 
                  className="w-[600px] h-[500px] object-cover rounded-sm"
                />
              </div>
            </div>
            
          </div>
          </div>
          </section>

        <section className="bg-background py-28 flex items-center justify-center px-8 font-sans">
  <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
    
    {/* Left Column: Image */}
    <div className="order-1 flex justify-center lg:justify-start">
      <div className="relative p-2 rounded-sm">
        <img 
          src="assets/images/moving-checklist/General-view.jpeg" 
          alt="Nashville Skyline at Sunset" 
          className="w-full max-w-[600px] h-[350px] md:h-[500px] object-cover rounded-sm shadow-md"
        />
      </div>
    </div>

    {/* Right Column: Content */}
    <div className="order-2 space-y-6">
      <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 leading-tight">
        Best Overall Cities to Live in Tennessee
      </h2>
      
      <p className="text-orange-600 font-semibold uppercase tracking-widest text-sm">
        Nashville
      </p>

      <p className="text-slate-700 leading-relaxed text-lg">
        <span className="font-bold text-slate-800">Best for: Jobs, culture, and long-term growth.</span> 
        Nashville is Tennessee's economic engine and cultural hub. It offers a booming job market, 
        diverse neighborhoods, and strong appreciation potential. Why people choose Nashville:
      </p>

      <ul className="space-y-3 text-slate-700">
        <li className="flex items-start italic">
          <span className="mr-3 text-xl leading-none text-[#243c64]">•</span>
          <span>Strong employment in healthcare, tech, and entertainment</span>
        </li>
        <li className="flex items-start italic">
          <span className="mr-3 text-xl leading-none text-[#243c64]">•</span>
          <span>Vibrant music and food scene</span>
        </li>
        <li className="flex items-start italic">
          <span className="mr-3 text-xl leading-none text-[#243c64]">•</span>
          <span>Big-city amenities without coastal prices</span>
        </li>
      </ul>

      <div className="pt-6">
        <a 
          href="#" 
          className="inline-block bg-[#243c64] text-white px-10 py-4 rounded-full font-semibold hover:bg-slate-700 transition-all duration-300 shadow-xl hover:shadow-2xl"
        >
          Explore Living in Nashville
        </a>
      </div>
    </div>

  </div>
</section>

<section className="bg-chart-2 py-20 rounded-t-[3rem]  my-10 font-sans">
  <div className="container mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-white text-3xl md:text-5xl font-bold leading-tight">
        Best Places to Live in <br />
        East Tennessee & Middle Tennessee
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      <div className="bg-white rounded-xl p-8 shadow-lg flex flex-col items-center text-center">
        <h3 className="text-2xl font-bold text-slate-800 mb-4">Knoxville</h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">
          <span className="font-semibold text-slate-700">Best for: Balanced city life & outdoor access</span>
          Knoxville offers a mix of affordability, jobs, and proximity to the Smoky Mountains.
        </p>
        <a href="#" className="bg-[#243c64] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-slate-700 transition-colors">
          Explore Living in Knoxville
        </a>
      </div>

      <div className="bg-white rounded-xl p-8 shadow-lg flex flex-col items-center text-center">
        <h3 className="text-2xl font-bold text-slate-800 mb-4">Johnson City</h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">
          <span className="font-semibold text-slate-700">Best for: Affordability & quality of life</span>
          Johnson City is one of the most underrated cities in Tennessee, especially for families and healthcare professionals.
        </p>
        <a href="#" className="bg-[#243c64] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-slate-700 transition-colors">
          Explore Living in Johnson City
        </a>
      </div>

      <div className="bg-white rounded-xl p-8 shadow-lg flex flex-col items-center text-center">
        <h3 className="text-2xl font-bold text-slate-800 mb-4">Chattanooga</h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">
          <span className="font-semibold text-slate-700">Best for: Outdoor lifestyle & scenic beauty</span>
          Chattanooga blends mountains, riverfront living, and a growing tech scene.
        </p>
        <a href="#" className="bg-[#243c64] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-slate-700 transition-colors">
          Explore Living in Chattanooga
        </a>
      </div>

      <div className="bg-white rounded-xl p-8 shadow-lg flex flex-col items-center text-center">
        <h3 className="text-2xl font-bold text-slate-800 mb-4">Murfreesboro</h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">
          <span className="font-semibold text-slate-700">Best for: Families & Nashville commuters</span>
          Murfreesboro is one of the fastest-growing cities in the state.
        </p>
        <a href="#" className="bg-[#243c64] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-slate-700 transition-colors">
          Explore Living in Murfreesboro
        </a>
      </div>

      <div className="bg-white rounded-xl p-8 shadow-lg flex flex-col items-center text-center">
        <h3 className="text-2xl font-bold text-slate-800 mb-4">Clarksville</h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">
          <span className="font-semibold text-slate-700">Best for: Military families & affordability</span>
          Clarksville offers strong job stability and affordable housing near Fort Campbell.
        </p>
        <a href="#" className="bg-[#243c64] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-slate-700 transition-colors">
          Explore Living in Clarksville
        </a>
      </div>

      <div className="bg-white rounded-xl p-8 shadow-lg flex flex-col items-center text-center">
        <h3 className="text-2xl font-bold text-slate-800 mb-4">Cookeville</h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">
          <span className="font-semibold text-slate-700">Best for: Small-city living & outdoor access</span>
          Cookeville is perfect for buyers wanting peace, affordability, and nature.
        </p>
        <a href="#" className="bg-[#243c64] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-slate-700 transition-colors">
          Explore Living in Cookeville
        </a>
      </div>

    </div>
  </div>
</section>

<section className="bg-white py-16 px-4">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 text-center mb-12 tracking-tight">   
      BEST AFFORDABLE PLACES <br className="hidden md:block" /> TO LIVE IN TENNESSEE
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      
      <div className="bg-[#243c64] text-white rounded-lg p-8 flex flex-col items-center text-center shadow-lg">
        <h3 className="text-2xl font-semibold mb-6">Kingsport</h3>
        <p className="text-sm leading-relaxed mb-8 grow">
          <span className="font-bold">Best for:</span> Families & low housing costs
          Kingsport offers safe neighborhoods, strong schools, and some of the most affordable homes in the state.
        </p>
        <a href="#" className="bg-white text-[#243c64] font-medium py-3 px-6 rounded-full hover:bg-gray-100 transition duration-300 w-full md:w-auto">
          Explore Living in Kingsport
        </a>
      </div>

      <div className="bg-[#243c64] text-white rounded-lg p-8 flex flex-col items-center text-center shadow-lg">
        <h3 className="text-2xl font-semibold mb-6">Bristol</h3>
        <p className="text-sm leading-relaxed mb-8 grow">
          <span className="font-bold">Best for:</span> Small-town charm & affordability
          Known for its music history and community feel, Bristol is ideal for buyers on a budget.
        </p>
        <a href="#" className="bg-white text-[#243c64] font-medium py-3 px-6 rounded-full hover:bg-gray-100 transition duration-300 w-full md:w-auto">
          Explore Living in Bristol
        </a>
      </div>

      <div className="bg-[#243c64] text-white rounded-lg p-8 flex flex-col items-center text-center shadow-lg">
        <h3 className="text-2xl font-semibold mb-6">Jackson</h3>
        <p className="text-sm leading-relaxed mb-8 grow">
          <span className="font-bold">Best for:</span> Central location & value
          Jackson provides affordable living between Memphis and Nashville.
        </p>
        <a href="#" className="bg-white text-[#243c64] font-medium py-3 px-6 rounded-full hover:bg-gray-100 transition duration-300 w-full md:w-auto">
          Explore Living in Jackson
        </a>
      </div>

    </div>
  </div>
</section>

  
<section className="relative py-24 bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('https://whytennessee.com/wp-content/uploads/2026/01/Memphis-scaled.jpeg')" }}>
                <div className="absolute inset-0 bg-black/50"></div>
                  <div className="relative z-10 mx-auto text-white text-center flex flex-col items-center justify-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                      Best Places to Live in <br /> West Tennessee Memphis
                    </h1>
                    
                    <p className="text-sm md:text-base mb-8 leading-relaxed font-light">
                      <span className="font-semibold">Best for:</span> Culture, affordability & investment potential Memphis offers big-city amenities at some of the lowest home prices in Tennessee.
                    </p>

                    <a 
                      href="#" 
                      className="inline-block bg-[#243c64] hover:bg-[#1a2d4b] text-white text-sm font-medium py-3 px-8 rounded-full transition duration-300 shadow-lg border border-white/10"
                    >
                      Explore Living In Memphis
                    </a>
                  </div>
            </section>
    </FrontendLayout>
  )
}
