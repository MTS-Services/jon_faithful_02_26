import React from 'react';

const Living: React.FC = () => {
  return (
    <div className="font-sans text-gray-900">
      {/* HERO SECTION */}
      <section className="relative h-[70vh] flex items-center">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          alt="Living in Bristol"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative w-full h-full flex items-center">
          <div className="w-full container mx-auto px-4 lg:px-16 text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Living in Bristol, Tennessee
            </h1>
            <p className="max-w-3xl text-lg text-gray-200">
              Homes, Cost of Living, Neighborhoods & Small-Town Charm. Bristol, Tennessee is a unique and affordable
              city in the Tri-Cities region of Northeast Tennessee, known for its rich music history, low cost of
              living, and strong community feel. Famous for being the “Birthplace of Country Music,” Bristol offers
              small-town charm with access to modern amenities.
            </p>
          </div>
        </div>
      </section>

      {/* WHY MOVE SECTION */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Why People Are Moving to Bristol</h2>
            <p className="mb-6 text-gray-600">
              Bristol appeals to buyers looking for affordability, character, and a slower pace of life.
            </p>
            <ul className="space-y-3">
              {[
                "Low home prices compared to national averages",
                "No state income tax in Tennessee",
                "Historic downtown and cultural events",
                "Easy access to Johnson City and Kingsport",
                "Strong sense of community",
                "Short commute times"
              ].map((text, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="flex-shrink-0">
                    <svg aria-hidden="true" className="w-3 h-3 fill-current text-black" viewBox="0 0 512 512">
                      <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                    </svg>
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6">
              Many people moving to the Tri-Cities choose Bristol for its affordable housing and distinctive personality.
            </p>
          </div>

          <div className="w-full grid grid-cols-2 gap-6">
            <img 
              src="https://whytennessee.com/wp-content/uploads/2025/12/Bristol-Virginia-Tennessee-Slogan-Sign-at-night.jpeg"
              alt="Bristol State Line Sign"
              className="rounded-xl h-[500px] mb-16 object-cover"
            />
            <video className="rounded h-full object-cover" controls>
              <source
                src="https://whytennessee.com/wp-content/uploads/2025/12/Bristol-Tennesse_-Virginia-aerial-fast-push-over-state-street.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* LOCATION SECTION */}
      <section className="bg-[#f8f5ef] py-16 rounded-[40px] lg:rounded-t-[80px]">
        <div className="container mx-auto px-4 lg:px-16 grid md:grid-cols-2 gap-16 items-center">
          <div className="rounded-md overflow-hidden shadow-lg h-[400px]">
            <iframe 
              title="Bristol Map"
              className="w-full h-full border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51457.1062024796!2d-82.22271618683415!3d36.588667533816285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8850702df2f8f8b3%3A0x64e8e04e9c71c4c9!2sBristol%2C%20TN!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            />
          </div>

          <div>
            <h2 className="text-3xl text-black font-bold mb-4">Where Is Bristol Located?</h2>
            <p className="text-gray-600 mb-6">
              Bristol sits directly on the Tennessee–Virginia state line, making it unique among U.S. cities. Approximate distances:
            </p>
            <ul className="space-y-3">
              {[
                "20 minutes to Johnson City",
                "20 minutes to Kingsport",
                "1 hour to Asheville, NC",
                "2 hours to Knoxville"
              ].map((location, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="flex-shrink-0">
                    <svg aria-hidden="true" className="w-5 h-5 fill-black" viewBox="0 0 384 512">
                      <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
                    </svg>
                  </span>
                  {location}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-gray-600">
              Its location provides easy access to both states while benefiting from Tennessee’s tax advantages.
            </p>
          </div>
        </div>
      </section>

      {/* COST OF LIVING SECTION */}
      <section className="py-16 container mx-auto px-4 lg:px-16">
        <h2 className="text-center text-3xl font-bold mb-6">Cost of Living in Bristol</h2>
        <p className="text-center text-gray-600 mb-10">Bristol is one of the most affordable cities in Tennessee.</p>

        <div className="grid md:grid-cols-4 gap-6">
          <CostCard title="Median Home Price" value="$220,000" />
          <CostCard title="2 Bedroom Rent" value="$900–$1,200" />
          <CostCard title="Utilities" value="Below national avg" />
          <CostCard title="Property Tax" value="Very Low" />
        </div>
      </section>
    </div>
  );
};

const CostCard: React.FC<{ title: string; value: string }> = ({ title, value }) => (
  <div className="bg-gray-100/50 border rounded-xl text-center overflow-hidden shadow-sm hover:shadow-md transition-shadow">
    <div className="bg-[#1F3A68] py-4">
      <p className="text-xl font-semibold text-white">{title}</p>
    </div>
    <div className="py-5 lg:py-10">
      <p className="text-2xl font-bold">{value}</p>
    </div>
  </div>
);

export default Living;






