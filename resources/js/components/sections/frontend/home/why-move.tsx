import { ArrowRightIcon } from 'lucide-react';
import React from 'react';

const WhyMove: React.FC = () => {
  const benefits = [
    "No state income tax",
    "Lower cost of living than the national average",
    "Affordable housing in many cities",
    "Strong job growth and diverse industries",
    "Mild winters and four seasons",
    "From vibrant cities to peaceful small towns, Tennessee offers a lifestyle that balances opportunity,",
    "Family-friendly communities and quality schools",
    "Mountains, lakes, rivers, and outdoor recreation",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image Grid */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <img 
              src="assets/images/home/Nashville_-Tennessee_-USA-scaled.jpeg"
              className="w-full h-48 lg:h-72 object-cover rounded-xl shadow-lg" 
              alt="Nashville City" 
            />
            <img 
              src="assets/images/home/Landscape-with.jpeg"
              className="w-full h-48 lg:h-72 object-cover rounded-xl shadow-lg" 
              alt="TN Countryside" 
            />
            <img 
              src="assets/images/home/Autumn-Appalachian.jpeg"
              className="w-full h-48 lg:h-72 object-cover rounded-xl shadow-lg col-span-2" 
              alt="Appalachian Farm" 
            />
          </div>

          {/* Text Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              Why People Are Moving to Tennessee
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Tennessee is one of the fastest-growing states in the U.S., attracting thousands of new residents each year from California, Florida, New York, Texas, and beyond.
            </p>
            <p className="font-semibold text-primary mb-4">People move to Tennessee for:</p>
            <ul className="mb-6">
              {benefits.map((item, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <span className="text-white bg-primary p-0.5 rounded-full mr-3"><ArrowRightIcon size={16} /></span> {item}
                </li>
              ))}
            </ul>
            <p className="text-gray-600 mb-6 leading-relaxed">From vibrant cities to peaceful small towns, Tennessee offers a lifestyle that balances opportunity, affordability, and quality of life.</p>
            <a href="why-tennessee" className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-full hover:bg-secondary transition text-md font-medium">
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