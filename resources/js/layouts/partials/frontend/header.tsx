import React, { useState } from 'react';
import { FaChevronDown, FaArrowRight, FaChevronRight } from 'react-icons/fa';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { MdDoubleArrow } from 'react-icons/md';


const FrontendHeader: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(null);

  const toggleMobileSubmenu = (id: string) => {
    setActiveMobileSubmenu(activeMobileSubmenu === id ? null : id);
  };

  const cities = [
    { name: "Bristol", route: "bristol" },
    { name: "Chattanooga", route: "chattanooga" },
    { name: "Cookeville", route: "living-in-cookeville" },
    { name: "Nashville", route: "living-in-nashville" },
    { name: "Knoxville", route: "living-in-knoxville" },
    { name: "Johnson City", route: "living-in-johnson-city" },
    { name: "Franklin", route: "living-in-franklin" },
    { name: "Memphis", route: "living-in-memphis" },
    { name: "Clarksville", route: "living-in-clarksville" },
    { name: "Murfreesboro", route: "living-in-murfreesboro" },
    { name: "Kingsport", route: "living-in-kingsport" },
    { name: "Jackson", route: "living-in-jackson" },
  ];
  const movingTopics1 = [
    { name: 'About Why Tennessee', route: 'why-tennessee' },
    { name: 'Tennessee Relocation Guide', route: 'tennessee-relocation' },
    { name: 'Cost of Living in Tennessee', route: 'cost-of-living-in-tennessee' },
    { name: 'Pros & Cons of Living in Tennessee', route: 'pros-cons-living-in-tennessee' },
    { name: 'Best Places to Live in Tennessee', route: 'live-tennessee' },
  ]
  const movingTopics2 = [
    { name: 'Renting in Tennessee', route: 'renting-tennessee' },
    { name: 'Cost of Renting in Tennessee', route: 'cost-of-renting-tennessee' },
    { name: 'Renting vs Buying in Tennessee', route: 'renting-buy' },
    { name: 'Moving to Tennessee & Renting First', route: 'moving-tennessee-renting' },
  ]
  const movingTopics3 = [
    { name: 'Moving Checklist', route: 'moving-checklist' },
    { name: 'City Comparison', route: 'city-comparison' },
    { name: 'Download Guide (PDF)', route: '#' },
    { name: 'Real Estate Agents', route: 'real-estate-agents' },
  ]

  return (
    <>
      <div className="hidden lg:block bg-primary  border-b border-gray-200">
        <div className="container mx-auto px-6 py-2 flex justify-between items-center text-sm">

          <a href="mailto:info@whytennessee.com" className="flex items-center gap-2">
            <span>
              <svg aria-hidden="true" className="w-5 h-5 fill-white" viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z">
                </path>
              </svg> </span>
            <span className="text-white text-xl">info@whytennessee.com</span>
          </a>
          <div className="flex space-x-3">
            <a href="#"
              className="w-8 h-8 flex items-center justify-center bg-white rounded-full text-muted-foreground shadow-sm hover:bg-secondary group transition-all duration-300">
              <svg aria-hidden="true"
                className="w-5 h-5 fill-primary group-hover:fill-white transition-all duration-300"
                viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z">
                </path>
              </svg></a>
            <a href="#"
              className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-sm hover:bg-secondary group transition-all duration-300">
              <svg aria-hidden="true"
                className="w-5 h-5 fill-primary group-hover:fill-white transition-all duration-300"
                viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z">
                </path>
              </svg>
            </a>
            <a href="#"
              className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-sm hover:bg-secondary group transition-all duration-300">
              <svg aria-hidden="true"
                className="w-5 h-5 fill-primary group-hover:fill-white transition-all duration-300"
                viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
                </path>
              </svg></a>
          </div>
        </div>
      </div>

      <header className="bg-white shadow-md relative z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">

            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <a href="/">
                <img
                  className="h-16 w-auto"
                  src="https://whytennessee.com/wp-content/uploads/2025/12/DFD32E71-47C0-41C6-86DE-4B5126B4E53A-1-e1765605360205.png"
                  alt="Why Tennessee Logo"
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8 items-center h-full">
              <a href="/" className="text-muted-foreground hover:text-secondary font-medium transition-colors">Home</a>
              <a href="homes-for-sale" className="text-muted-foreground hover:text-secondary font-medium transition-colors">Homes for Sale</a>
              <a href="rentals" className="text-muted-foreground hover:text-secondary font-medium transition-colors">Rentals</a>

              {/* Cities Dropdown */}
              <div className="relative group h-full flex items-center">
                <button className="text-muted-foreground group-hover:text-secondary font-medium flex items-center focus:outline-none transition-colors">
                  Cities <FaChevronDown className="ml-1 text-[10px]" />
                </button>
                <div className="absolute top-full left-0 w-56 bg-white shadow-lg rounded-b-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  {cities.map((city) => (
                    <a href={`/${city.route}`} className="block px-4 py-2 text-sm text-muted-foreground hover:text-white hover:bg-secondary transition-colors">
                      {city.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Mega Menu: Moving to Tennessee */}
              <div className="relative group h-full flex items-center">
                <button className="text-muted-foreground group-hover:text-secondary font-medium flex items-center focus:outline-none transition-colors">
                  Moving to Tennessee <FaChevronDown className="ml-1 text-[10px]" />
                </button>

                <div className="absolute top-full -right-80 w-[950px] bg-white shadow-2xl rounded-b-lg p-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 grid grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-4 border-b pb-2">What You Need to Know:</h3>
                    <ul className="space-y-3">
                      {movingTopics1.map((item) => (
                        <li key={item.name}>
                          <a href={`/${item.route}`} className="flex items-center text-sm text-muted-foreground hover:text-secondary transition-colors">
                            <span className="text-primary mr-2 font-bold">
                              <MdDoubleArrow size={14} />
                            </span> {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-primary mb-4 border-b pb-2">Renting:</h3>
                    <ul className="space-y-3">
                      {movingTopics2.map((item) => (
                        <li key={`/${item.name}`} id={item.name}>
                          <a href={item.route} className="flex items-center text-sm text-muted-foreground hover:text-secondary transition-colors">
                            <span className="text-primary mr-2 font-bold">
                              <MdDoubleArrow size={14} />
                            </span> {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-primary mb-4 border-b pb-2">Helpful Tools:</h3>
                    <ul className="space-y-3">
                      {movingTopics3.map((item) => (
                        <li key={item.name}>
                          <a href={`/${item.route}`} className="flex items-center text-sm text-muted-foreground hover:text-secondary transition-colors">
                            <span className="text-primary mr-2 font-bold">
                              <MdDoubleArrow size={14} />
                            </span> {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <a href="/partner-program" className="text-muted-foreground hover:text-secondary font-medium transition-colors">Partner Program</a>
            </nav>

            {/* Desktop Right CTA / Mobile Toggle */}
            <div className="flex items-center gap-4">
              <a href="user-choose" className="hidden sm:flex bg-primary text-white px-6 py-4 rounded-full hover:bg-secondary transition-all items-center text-md font-medium shadow-md hover:shadow-lg">
                Login/Registration
                <span className="inline-flex items-center bg-white p-1 ml-2 rounded-full text-black">
                  <FaChevronRight size={12} />
                </span>
              </a>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden text-muted-foreground hover:text-secondary focus:outline-none p-2"
              >
                {isMobileMenuOpen ? <HiX size={32} /> : <HiMenuAlt3 size={32} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:hidden bg-white border-t border-gray-200 absolute w-full shadow-xl`}>
          <div className="px-4 py-6 space-y-2 max-h-[80vh] overflow-y-auto">
            <a href="/" className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:bg-gray-50">Home</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:bg-gray-50">Homes for Sale</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:bg-gray-50">Rentals</a>

            {/* Mobile Cities Submenu */}
            <div className="border-b border-gray-100 pb-2">
              <button
                onClick={() => toggleMobileSubmenu('cities')}
                className="w-full text-left flex justify-between items-center px-3 py-2 text-base font-medium text-muted-foreground"
              >
                Cities <FaChevronDown className={`transition-transform ${activeMobileSubmenu === 'cities' ? 'rotate-180' : ''}`} />
              </button>
              {activeMobileSubmenu === 'cities' && (
                <div className="pl-6 space-y-1 bg-gray-50 rounded-lg py-2">
                  {cities.map(city => (
                    <a key={city.name} href={`/${city.route}`} className="block px-3 py-2 text-sm text-muted-foreground">{city.name}</a>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Moving Submenu */}
            <div className="border-b border-gray-100 pb-2">
              <button
                onClick={() => toggleMobileSubmenu('moving')}
                className="w-full text-left flex justify-between items-center px-3 py-2 text-base font-medium text-muted-foreground"
              >
                Moving to Tennessee <FaChevronDown className={`transition-transform ${activeMobileSubmenu === 'moving' ? 'rotate-180' : ''}`} />
              </button>
              {activeMobileSubmenu === 'moving' && (
                <div className="pl-6 space-y-2 bg-gray-50 rounded-lg py-3">
                  <p className="px-3 text-xs font-bold text-secondary uppercase">What You Need to Know:</p>
                  {movingTopics1.map((item) => (
                    <a key={item.name} href={`/${item.route}`} className="block px-3 py-1 text-sm text-muted-foreground">{item.name}</a>
                  ))}

                  <p className="px-3 text-xs font-bold text-secondary uppercase">Renting:</p>
                  {movingTopics2.map((item) => (
                    <a key={item.name} href={`/${item.route}`} className="block px-3 py-1 text-sm text-muted-foreground">{item.name}</a>
                  ))}

                  <p className="px-3 text-xs font-bold text-secondary uppercase">Helpful Tools:</p>
                  {movingTopics3.map((item) => (
                    <a key={item.name} href={`/${item.route}`} className="block px-3 py-1 text-sm text-muted-foreground">{item.name}</a>
                  ))}
                </div>
              )}
            </div>

            <a href="/partner-program" className="block px-3 py-2 text-base font-medium text-muted-foreground hover:bg-gray-50">Partner Program</a>

            <a href={route('login')} className="block w-full text-center mt-6 bg-primary text-white px-5 py-4 rounded-xl font-bold">
              Login / Registration
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default FrontendHeader;