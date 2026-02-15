import React from 'react';

const cities = [
  { name: 'Nashville', desc: 'Music City, job growth, entertainment, and culture.', img: 'assets/images/home/Nashville_-Tennessee_-USA-scaled.jpeg', span: 'col-span-1' },
  { name: 'Knoxville', desc: 'Affordable living, outdoor lifestyle, strong community.', img: 'assets/images/home/433f6d07f4eddc16bb67cef36ed22504-p_e.jpg', span: 'md:col-span-2' },
  { name: 'Chattanooga', desc: 'Scenic beauty, technology growth, walkable downtown.', img: 'assets/images/home/dream-homes-hero.jpg', span: 'md:col-span-2' },
  { name: 'Johnson City', desc: 'Mountain living, healthcare hub, quality of life.', img: 'assets/images/home/29941-1.jpeg', span: 'col-span-1' },
  { name: 'Franklin', desc: 'Top-rated schools, historic charm, upscale homes.', img: 'assets/images/home/Custom-Built-Homes.webp', isSidebar: true },
  { name: 'Memphis', desc: 'Culture, food scene, affordability, and opportunity.', img: 'assets/images/home/LymanEstate-scaled-2.jpg', isSidebar: true },
];

const CityCard = ({ city }: { city: typeof cities[0] }) => (
  <div className={`bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 group cursor-pointer ${city.span || ''}`}>
    <div className="h-80 overflow-hidden relative">
      <img src={city.img} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-300" alt={city.name} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/0 to-transparent group-hover:from-black/60 transition-all duration-700 flex flex-col items-center justify-center translate-y-4 group-hover:translate-y-0 transition-all duration-500">
        <h3 className="text-2xl font-bold text-white">{city.name}</h3>
        <p className="text-white/80 text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity">{city.desc}</p>
      </div>
    </div>
  </div>
);

const BestCities: React.FC = () => {
  return (
    <section id="cities" className="py-20 bg-[#f3efe7] rounded-t-[70px]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Best Cities to Live in Tennessee</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Every city in Tennessee offers something unique. Whether you want urban energy or mountain views, there’s a place for you.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cities.filter(c => !c.isSidebar).map((city, i) => <CityCard key={i} city={city} />)}
          </div>
          <div className="w-full md:w-1/3 flex flex-col gap-8">
            {cities.filter(c => c.isSidebar).map((city, i) => <CityCard key={i} city={city} />)}
          </div>
        </div>

        <div className="mt-12 text-center">
          <a href={route('frontend.city-comparison')} className="bg-primary hover:bg-secondary text-white px-8 py-5 rounded-full font-medium transition inline-flex items-center">
            View all Tennessee city guides
          </a>
        </div>
      </div>
    </section>
  );
};

export default BestCities;