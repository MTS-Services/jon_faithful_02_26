import React from 'react';

const cities = [
  {
    name: 'Nashville',
    desc: 'Music City, job growth, entertainment, and culture.',
    img: 'assets/images/home/best_cities/nashville-TN.jpg',
    span: 'col-span-1',
    route: '/living-in-nashville'
  },
  {
    name: 'Knoxville',
    desc: 'Affordable living, outdoor lifestyle, strong community.',
    img: 'assets/images/home/best_cities/knoxmille-TN.jpeg',
    span: 'md:col-span-2',
    route: '/living-in-knoxville'
  },
  {
    name: 'Chattanooga',
    desc: 'Scenic beauty, technology growth, walkable downtown.',
    img: 'assets/images/home/best_cities/chattanooga-TN.jpg',
    span: 'md:col-span-2',
    route: '/chattanooga'
  },
  {
    name: 'Johnson City',
    desc: 'Mountain living, healthcare hub, quality of life.',
    img: 'assets/images/home/best_cities/johnson-city-TN.jpg',
    span: 'col-span-1',
    route: '/living-in-johnson-city'
  },
  {
    name: 'Franklin',
    desc: 'Top-rated schools, historic charm, upscale homes.',
    img: 'assets/images/home/best_cities/franklin-TN.jpg',
    isSidebar: true,
    route: '/living-in-franklin'
  },
  {
    name: 'Memphis',
    desc: 'Culture, food scene, affordability, and opportunity.',
    img: 'assets/images/home/best_cities/memphis,TN.jpg',
    isSidebar: true,
    route: '/living-in-memphis'
  },
];

const CityCard = ({ city }: { city: typeof cities[0] }) => (
  <a
    href={city.route}
    className={`bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 group cursor-pointer block ${city.span || ''}`}
  >
    <div className="h-80 overflow-hidden relative">
      <img src={city.img} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-300" alt={city.name} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/0 to-transparent group-hover:from-black/60 transition-all duration-700 flex flex-col items-center justify-center translate-y-4 group-hover:translate-y-0 transition-all duration-500">
        <h3 className="text-2xl font-bold text-white">{city.name}</h3>
        <p className="text-white/80 text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity">{city.desc}</p>
      </div>
    </div>
  </a>
);

const BestCities: React.FC = () => {
  return (
    <section id="cities" className="py-20 bg-[#f3efe7] rounded-t-[70px]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Best Cities to Live in Tennessee</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Every city in Tennessee offers something unique. Whether you want urban energy, suburban comfort, or mountain views, there’s a place that fits your goals.</p>
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
          <a href={route('frontend.city-comparison')} className="inline-flex items-center bg-primary text-white px-8 py-5 rounded-full hover:bg-secondary transition text-md font-medium">
            View all Tennessee city guides
            <svg className="w-5 h-5 fill-white ml-2" viewBox="0 0 512 512"><path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm-28.9 143.6l75.5 72.4H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h182.6l-75.5 72.4c-9.7 9.3-9.9 24.8-.4 34.3l11 10.9c9.4 9.4 24.6 9.4 33.9 0L404.3 273c9.4-9.4 9.4-24.6 0-33.9L271.6 106.3c-9.4-9.4-24.6-9.4-33.9 0l-11 10.9c-9.5 9.6-9.3 25.1.4 34.4z"></path></svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BestCities;