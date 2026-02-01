import React from 'react';

const WhyMove: React.FC = () => {
  const benefits = [
    "No state income tax",
    "Lower cost of living than the national average",
    "Affordable housing in many cities",
    "Strong job growth and diverse industries",
    "Mild winters and four seasons"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image Grid */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <img 
              src="https://whytennessee.com/wp-content/uploads/2025/12/Nashville_-Tennessee_-USA-scaled.jpeg"
              className="w-full h-48 lg:h-72 object-cover rounded-xl shadow-lg" 
              alt="Nashville City" 
            />
            <img 
              src="https://whytennessee.com/wp-content/uploads/2025/12/Landscape-with-large-country-house.-Large-mowed-lawn-and-blue-sky-scaled.jpeg"
              className="w-full h-48 lg:h-72 object-cover rounded-xl shadow-lg" 
              alt="TN Countryside" 
            />
            <img 
              src="https://whytennessee.com/wp-content/uploads/2025/12/Autumn-Appalachian-farm-at-the-end-of-the-day-cows-on-back-roads-near-scaled.jpeg"
              className="w-full h-48 lg:h-72 object-cover rounded-xl shadow-lg col-span-2" 
              alt="Appalachian Farm" 
            />
          </div>

          {/* Text Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1F3A68] mb-6">
              Why People Are Moving to Tennessee
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Tennessee is one of the fastest-growing states in the U.S., attracting thousands of new
              residents each year from California, Florida, New York, Texas, and beyond.
            </p>
            <p className="font-semibold text-[#1F3A68] mb-4">People move to Tennessee for:</p>
            <ul className="space-y-3 mb-8">
              {benefits.map((item, index) => (
                <li key={index} className="flex items-start text-gray-700">
                  <span className="text-[#1F3A68] mt-1 mr-3">➔</span> {item}
                </li>
              ))}
            </ul>
            <a href="#" className="inline-flex items-center bg-[#1F3A68] text-white px-8 py-4 rounded-full hover:bg-[#C9A249] transition text-md font-medium">
              Learn More About Us 
              <svg className="w-5 h-5 fill-white ml-2" viewBox="0 0 512 512"><path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm-28.9 143.6l75.5 72.4H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h182.6l-75.5 72.4c-9.7 9.3-9.9 24.8-.4 34.3l11 10.9c9.4 9.4 24.6 9.4 33.9 0L404.3 273c9.4-9.4 9.4-24.6 0-33.9L271.6 106.3c-9.4-9.4-24.6-9.4-33.9 0l-11 10.9c-9.5 9.6-9.3 25.1.4 34.4z"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMove;