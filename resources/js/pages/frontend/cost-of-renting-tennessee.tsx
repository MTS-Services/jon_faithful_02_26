import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

const TennesseeRelocationContent = () => {
  return (
    <div className="font-sans text-slate-800">
      
      {/* ================= SECTION 1: Why Rent First ================= */}
      <section className="py-20 container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Text Content */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-[#1e3a6e] mb-6">
              Why Rent First When Moving to Tennessee?
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Many newcomers choose to rent before buying because Tennessee offers diverse cities, neighborhoods, and housing markets that can feel very different once you arrive.
            </p>
            <p className="text-slate-600 mb-4 font-medium">Renting first allows you to:</p>
            <ul className="space-y-3 text-slate-700 mb-6 text-sm">
              <li className="flex gap-2"><span className="text-[#d4af37] font-bold">•</span> Learn the layout of your new city</li>
              <li className="flex gap-2"><span className="text-[#d4af37] font-bold">•</span> Experience daily commutes and traffic patterns</li>
              <li className="flex gap-2"><span className="text-[#d4af37] font-bold">•</span> Explore neighborhoods and school districts</li>
              <li className="flex gap-2"><span className="text-[#d4af37] font-bold">•</span> Avoid rushing into a home purchase</li>
              <li className="flex gap-2"><span className="text-[#d4af37] font-bold">•</span> Adjust to Tennessee's climate and lifestyle</li>
            </ul>
            <p className="text-slate-600 text-sm">
              For relocation buyers, renting removes pressure and gives you time to make informed decisions.
            </p>
          </div>

          {/* Image Grid */}
          <div className="md:w-1/2 flex gap-4 relative">
            <div className="w-1/2 pt-8">
              <img 
                src="https://images.unsplash.com/photo-1581337227621-c116d97c35f9?q=80&w=1000&auto=format&fit=crop" 
                alt="Tennessee Street" 
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
            </div>
            <div className="w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1630351334691-37d363768f54?q=80&w=1000&auto=format&fit=crop" 
                alt="Smoky Mountains" 
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: Is Renting Affordable (Dark Blue) ================= */}
      <section className="py-20 bg-[#1e3a6e] text-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Is Renting in Tennessee Affordable?</h2>
          <p className="mb-12 text-blue-100 max-w-3xl mx-auto text-sm">
            Compared to many other states, renting in Tennessee remains relatively affordable, though prices vary by region and city.
          </p>
          
          <h3 className="text-xl font-bold mb-8">General Rental Cost Ranges</h3>

          <div className="grid md:grid-cols-3 gap-6 text-left text-slate-800">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-lg mb-2 text-[#1e3a6e]">East Tennessee</h4>
              <p className="text-sm text-slate-600">Lower average rents, especially outside major metros</p>
            </div>
            {/* Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-lg mb-2 text-[#1e3a6e]">Middle Tennessee:</h4>
              <p className="text-sm text-slate-600">Higher rents near Nashville and surrounding suburbs</p>
            </div>
            {/* Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-lg mb-2 text-[#1e3a6e]">West Tennessee:</h4>
              <p className="text-sm text-slate-600">Affordable options in many areas outside downtown Memphis</p>
            </div>
          </div>

          <p className="mt-8 text-xs text-blue-200">
            While demand has increased, Tennessee still offers better value than many coastal and high-tax states.
          </p>
        </div>
      </section>

      {/* ================= SECTION 3: Average Home Prices (Beige) ================= */}
      <section className="py-20 bg-[#F9F7F2]">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#1e3a6e]">Average Home Price Ranges in Tennessee</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Entry Level */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold mb-1 text-slate-900">Entry-Level Homes</h3>
              <p className="text-xs text-slate-500 font-bold mb-4">Price Range: $180,000 – $300,000</p>
              <p className="text-xs text-slate-600 mb-3">Typically includes:</p>
              <ul className="text-sm space-y-2 text-slate-700 mb-4">
                <li className="flex gap-2"><span className="text-[#1e3a6e] font-bold">»</span> Smaller single-family homes</li>
                <li className="flex gap-2"><span className="text-[#1e3a6e] font-bold">»</span> Older homes or starter homes</li>
                <li className="flex gap-2"><span className="text-[#1e3a6e] font-bold">»</span> Rural and small-city locations</li>
              </ul>
              <p className="text-xs text-slate-500 italic">Most common in East and West Tennessee.</p>
            </div>

            {/* Mid Range */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold mb-1 text-slate-900">Mid-Range Homes</h3>
              <p className="text-xs text-slate-500 font-bold mb-4">Price Range: $300,000 – $500,000</p>
              <p className="text-xs text-slate-600 mb-3">Typically includes:</p>
              <ul className="text-sm space-y-2 text-slate-700 mb-4">
                <li className="flex gap-2"><span className="text-[#1e3a6e] font-bold">»</span> Suburban homes</li>
                <li className="flex gap-2"><span className="text-[#1e3a6e] font-bold">»</span> Newer construction</li>
                <li className="flex gap-2"><span className="text-[#1e3a6e] font-bold">»</span> Family-friendly neighborhoods</li>
              </ul>
              <p className="text-xs text-slate-500 italic">This is the most common price range statewide.</p>
            </div>

            {/* Luxury */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold mb-1 text-slate-900">Luxury & High-End Homes</h3>
              <p className="text-xs text-slate-500 font-bold mb-4">Price Range: $500,000 – $1,000,000+</p>
              <p className="text-xs text-slate-600 mb-3">Typically includes:</p>
              <ul className="text-sm space-y-2 text-slate-700 mb-4">
                <li className="flex gap-2"><span className="text-[#1e3a6e] font-bold">»</span> Custom homes</li>
                <li className="flex gap-2"><span className="text-[#1e3a6e] font-bold">»</span> Larger lots</li>
                <li className="flex gap-2"><span className="text-[#1e3a6e] font-bold">»</span> Desirable neighborhoods</li>
                <li className="flex gap-2"><span className="text-[#1e3a6e] font-bold">»</span> Newer or upscale finishes</li>
              </ul>
              <p className="text-xs text-slate-500 italic">Most common in Middle Tennessee and select metro suburbs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: Best Cities to Rent (Dark Blue) ================= */}
      <section className="py-20 bg-[#1e3a6e] text-white text-center">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold mb-2">Best Cities in Tennessee to Rent First</h2>
          <p className="mb-12 text-blue-100 text-sm">Renting is especially helpful if you're unfamiliar with Tennessee's regional differences.</p>

          <div className="grid md:grid-cols-5 gap-4">
            {['Nashville', 'Knoxville', 'Chattanooga', 'Johnson City & Tri-Cities', 'Memphis'].map((city, idx) => (
              <div key={idx} className="bg-white text-slate-800 p-6 rounded-lg flex flex-col items-center justify-center min-h-[160px]">
                <h4 className="font-bold text-sm mb-2">{city}</h4>
                <p className="text-[11px] leading-tight text-slate-600">
                  {idx === 0 && "Strong job market, higher rents, fast-growing population"}
                  {idx === 1 && "Balanced affordability, outdoor lifestyle, university influence"}
                  {idx === 2 && "Scenic, tech-friendly, walkable neighborhoods"}
                  {idx === 3 && "Lower rents, slower pace, growing popularity"}
                  {idx === 4 && "Diverse housing options, strong rental inventory"}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-xs text-blue-200">Each city offers a different experience, making renting a valuable trial period.</p>
        </div>
      </section>

      {/* ================= SECTION 5: Types of Rentals ================= */}
      <section className="py-20 container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1570535384218-18ee3143922e?q=80&w=2070&auto=format&fit=crop" 
              alt="City Skyline" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-[#1e3a6e] mb-6">Types of Rentals Available in Tennessee</h2>
            <p className="text-slate-600 mb-4 text-sm">When renting in Tennessee, you'll find a wide variety of housing options:</p>
            <ul className="space-y-2 text-sm text-slate-700 mb-6 pl-2">
              <li className="flex gap-2 items-center"><span className="w-1.5 h-1.5 bg-[#1e3a6e] rounded-full"></span> Apartments and condos</li>
              <li className="flex gap-2 items-center"><span className="w-1.5 h-1.5 bg-[#1e3a6e] rounded-full"></span> Single-family rental homes</li>
              <li className="flex gap-2 items-center"><span className="w-1.5 h-1.5 bg-[#1e3a6e] rounded-full"></span> Townhomes and duplexes</li>
              <li className="flex gap-2 items-center"><span className="w-1.5 h-1.5 bg-[#1e3a6e] rounded-full"></span> Short-term rentals for relocation transitions</li>
              <li className="flex gap-2 items-center"><span className="w-1.5 h-1.5 bg-[#1e3a6e] rounded-full"></span> New construction rentals in growing suburbs</li>
            </ul>
            <p className="text-slate-600 text-sm mb-6">Many renters choose single-family homes to experience neighborhoods before buying.</p>
            
            <button className="bg-[#1e3a6e] text-white px-8 py-3 rounded-full text-xs font-bold flex items-center gap-2 hover:bg-[#152a50]">
              Read MORE <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* ================= SECTION 6: Renting vs Buying (Background Image) ================= */}
      <section className="relative py-24 bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=2067&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-white/80"></div>
        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-center text-[#1e3a6e] mb-12">Renting vs Buying When Moving To Tennessee</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Renting First Card */}
            <div className="bg-white/90 p-8 border-l-4 border-[#1e3a6e] shadow-lg">
              <h3 className="font-bold text-lg mb-4 text-[#1e3a6e]">Renting First Makes Sense If You:</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex gap-2"><span className="text-black">•</span> Are relocating from out of state</li>
                <li className="flex gap-2"><span className="text-black">•</span> Need time to learn the market</li>
                <li className="flex gap-2"><span className="text-black">•</span> Are unsure which city fits your lifestyle</li>
                <li className="flex gap-2"><span className="text-black">•</span> Want flexibility in your first year</li>
                <li className="flex gap-2"><span className="text-black">•</span> Plan to buy later but want confidence</li>
              </ul>
            </div>

            {/* Buying Right Away Card */}
            <div className="bg-white/90 p-8 border-l-4 border-[#1e3a6e] shadow-lg">
              <h3 className="font-bold text-lg mb-4 text-[#1e3a6e]">Buying Right Away May Make Sense If You:</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex gap-2"><span className="text-black">•</span> Already know the area well</li>
                <li className="flex gap-2"><span className="text-black">•</span> Have job stability and local knowledge</li>
                <li className="flex gap-2"><span className="text-black">•</span> Are moving within Tennessee</li>
                <li className="flex gap-2"><span className="text-black">•</span> Have guidance from a trusted local realtor</li>
              </ul>
            </div>
          </div>
          <p className="text-center mt-8 text-xs text-slate-600">For most out-of-state movers, renting first reduces risk.</p>
        </div>
      </section>

      {/* ================= SECTION 7: How Long Should You Rent ================= */}
      <section className="py-20 container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-[#1e3a6e] mb-6">How Long Should You Rent Before Buying?</h2>
            <p className="text-slate-600 text-sm mb-4">Most relocation renters in Tennessee choose to rent for:</p>
            <ul className="space-y-2 text-sm text-slate-700 mb-6 pl-2">
              <li className="flex gap-2 items-center"><span className="w-1.5 h-1.5 bg-[#1e3a6e] rounded-full"></span> 6–12 months to explore neighborhoods</li>
              <li className="flex gap-2 items-start"><span className="w-1.5 h-1.5 bg-[#1e3a6e] rounded-full mt-1.5"></span> One full year to experience seasons and local routines</li>
            </ul>
            <p className="text-slate-600 text-sm mb-4">This timeline allows you to:</p>
            <ul className="space-y-2 text-sm text-slate-700 pl-2">
              <li className="flex gap-2 items-center"><span className="w-1.5 h-1.5 bg-[#1e3a6e] rounded-full"></span> Monitor housing prices</li>
              <li className="flex gap-2 items-center"><span className="w-1.5 h-1.5 bg-[#1e3a6e] rounded-full"></span> Build relationships with local realtors</li>
              <li className="flex gap-2 items-center"><span className="w-1.5 h-1.5 bg-[#1e3a6e] rounded-full"></span> Understand taxes, utilities, and cost of living</li>
              <li className="flex gap-2 items-center"><span className="w-1.5 h-1.5 bg-[#1e3a6e] rounded-full"></span> Buy with confidence when ready</li>
            </ul>
          </div>
          <div className="md:w-1/2 rounded-lg overflow-hidden">
             <img 
              src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2070&auto=format&fit=crop" 
              alt="Suburban House" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ================= SECTION 8: Finding Rentals (Light Gray) ================= */}
      <section className="py-20 bg-[#f3f4f6]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row gap-12 items-center">
             <div className="md:w-1/2 rounded-lg overflow-hidden shadow-lg">
                <img 
                src="https://images.unsplash.com/photo-1508669232496-136bca5905dd?q=80&w=2069&auto=format&fit=crop" 
                alt="Autumn Landscape" 
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-[#1e3a6e] mb-4">Finding Rentals When Moving to Tennessee</h2>
              <p className="text-sm text-slate-600 mb-6">When searching for rentals, it's important to work with local experts and verified listings.</p>
              
              <h3 className="font-bold text-sm mb-2">Smart Rental Search Tips</h3>
              <ul className="space-y-2 text-sm text-slate-700 mb-6 pl-2">
                <li className="flex gap-2 items-center"><span className="w-1.5 h-1.5 bg-[#1e3a6e] rounded-full"></span> Focus on city-specific rental pages</li>
                <li className="flex gap-2 items-center"><span className="w-1.5 h-1.5 bg-[#1e3a6e] rounded-full"></span> Compare commute times, not just rent prices</li>
                <li className="flex gap-2 items-center"><span className="w-1.5 h-1.5 bg-[#1e3a6e] rounded-full"></span> Ask about lease flexibility</li>
                <li className="flex gap-2 items-center"><span className="w-1.5 h-1.5 bg-[#1e3a6e] rounded-full"></span> Verify utilities and HOA rules</li>
                <li className="flex gap-2 items-center"><span className="w-1.5 h-1.5 bg-[#1e3a6e] rounded-full"></span> Avoid rushing into long leases sight unseen</li>
              </ul>
              <p className="text-xs text-slate-500">WhyTennessee.com helps connect renters with local professionals and verified rental listings across the state.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 9: Transitioning (Image BG) ================= */}
      <section className="relative py-24 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop')" }}>
         <div className="absolute inset-0 bg-white/80"></div>
         <div className="relative z-10 container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-8">
            <div className="bg-white/80 p-8 rounded shadow-sm border border-slate-200">
              <h3 className="font-bold text-lg mb-4 text-[#1e3a6e]">Transitioning From Renting to Buying in Tennessee</h3>
              <p className="text-xs text-slate-600 mb-4">One of the biggest advantages of renting first is that it positions you for a stronger home purchase later.</p>
              <p className="text-xs text-slate-600 mb-4">While renting, you can:</p>
              <ul className="space-y-1 text-xs text-slate-700 mb-6">
                <li className="flex gap-2"><span>•</span> Identify preferred neighborhoods</li>
                <li className="flex gap-2"><span>•</span> Track home prices and inventory</li>
                <li className="flex gap-2"><span>•</span> Build relationships with realtors</li>
                <li className="flex gap-2"><span>•</span> Prepare financially for a purchase</li>
              </ul>
              <p className="text-xs text-slate-500 italic">Many renters successfully transition into homeownership within their first year in Tennessee.</p>
            </div>

            <div className="bg-white/80 p-8 rounded shadow-sm border border-slate-200 flex flex-col justify-center">
               <h3 className="font-bold text-lg mb-4 text-[#1e3a6e]">Should You Rent First When Moving to Tennessee?</h3>
               <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                 For most people relocating to Tennessee, renting first is the safest and smartest choice. It gives you flexibility, confidence, and local knowledge — all critical when choosing where to live long-term.
               </p>
               <p className="text-xs text-slate-600 leading-relaxed">
                 Whether you plan to buy soon or simply want time to explore, renting allows you to experience Tennessee before making one of life's biggest investments.
               </p>
            </div>
         </div>
      </section>

      {/* ================= SECTION 10: Explore CTA (White) ================= */}
      <section className="py-20 container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl font-bold text-[#1e3a6e] mb-2">Explore Tennessee Rentals & Cities</h2>
        <p className="text-slate-600 text-sm mb-8">Ready to start your move?</p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-[#1e3a6e] text-white px-6 py-3 rounded-full text-xs font-bold flex items-center gap-2 hover:bg-[#152a50]">
            Browse Tennessee rental listings <ArrowRight size={14} />
          </button>
          <button className="bg-[#1e3a6e] text-white px-6 py-3 rounded-full text-xs font-bold flex items-center gap-2 hover:bg-[#152a50]">
            Explore city and neighborhood guides <ArrowRight size={14} />
          </button>
        </div>
        <div className="mt-4 flex justify-center">
           <button className="bg-[#1e3a6e] text-white px-6 py-3 rounded-full text-xs font-bold flex items-center gap-2 hover:bg-[#152a50]">
            Connect with trusted local real estate professionals <ArrowRight size={14} />
          </button>
        </div>
        
        <p className="mt-8 text-[10px] text-slate-400">WhyTennessee.com is built to help you relocate smarter — whether you rent first or buy right away.</p>
      </section>

    </div>
  );
};

export default TennesseeRelocationContent;