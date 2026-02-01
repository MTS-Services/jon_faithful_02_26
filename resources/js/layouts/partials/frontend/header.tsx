import React, { useState } from 'react';
import { FaChevronDown, FaArrowRight } from 'react-icons/fa';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const FrontendHeader: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(null);

  const toggleMobileSubmenu = (id: string) => {
    setActiveMobileSubmenu(activeMobileSubmenu === id ? null : id);
  };

  return (
    <header className="bg-white shadow-md relative z-50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
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
            <a href="#" className="text-gray-700 hover:text-[#C9A249] font-medium transition-colors">Home</a>
            <a href="#" className="text-gray-700 hover:text-[#C9A249] font-medium transition-colors">Homes for Sale</a>
            <a href="#" className="text-gray-700 hover:text-[#C9A249] font-medium transition-colors">Rentals</a>

            {/* Cities Dropdown */}
            <div className="relative group h-full flex items-center">
              <button className="text-gray-700 group-hover:text-[#C9A249] font-medium flex items-center focus:outline-none transition-colors">
                Cities <FaChevronDown className="ml-1 text-[10px]" />
              </button>
              <div className="absolute top-full left-0 w-56 bg-white shadow-lg rounded-b-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                {['Bristol', 'Chattanooga', 'Cookeville', 'Nashville', 'Knoxville', 'Memphis'].map((city) => (
                  <a key={city} href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-white hover:bg-[#C9A249] transition-colors">
                    {city}
                  </a>
                ))}
              </div>
            </div>

            {/* Mega Menu: Moving to Tennessee */}
            <div className="relative group h-full flex items-center">
              <button className="text-gray-700 group-hover:text-[#C9A249] font-medium flex items-center focus:outline-none transition-colors">
                Moving to Tennessee <FaChevronDown className="ml-1 text-[10px]" />
              </button>

              <div className="absolute top-full -right-40 w-[850px] bg-white shadow-2xl rounded-b-lg p-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 grid grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">What You Need to Know:</h3>
                  <ul className="space-y-3">
                    {['About Why Tennessee', 'Tennessee Relocation Guide', 'Cost of Living in Tennessee', 'Pros & Cons of Living', 'Best Places to Live'].map((item) => (
                      <li key={item}>
                        <a href="#" className="flex items-center text-sm text-gray-600 hover:text-[#C9A249] transition-colors">
                          <span className="text-[#1F3A68] mr-2 font-bold">»</span> {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">Renting:</h3>
                  <ul className="space-y-3">
                    {['Renting in Tennessee', 'Cost of Renting', 'Renting vs Buying', 'Moving & Renting First'].map((item) => (
                      <li key={item}>
                        <a href="#" className="flex items-center text-sm text-gray-600 hover:text-[#C9A249] transition-colors">
                          <span className="text-[#1F3A68] mr-2 font-bold">»</span> {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">Helpful Tools:</h3>
                  <ul className="space-y-3">
                    {['Moving Checklist', 'City Comparison', 'Download Guide (PDF)', 'Real Estate Agents'].map((item) => (
                      <li key={item}>
                        <a href="#" className="flex items-center text-sm text-gray-600 hover:text-[#C9A249] transition-colors">
                          <span className="text-[#1F3A68] mr-2 font-bold">»</span> {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <a href="#" className="text-gray-700 hover:text-[#C9A249] font-medium transition-colors">Partner Program</a>
          </nav>

          {/* Desktop Right CTA / Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a href="#" className="hidden sm:flex bg-[#1F3A68] text-white px-6 py-3 rounded-full hover:bg-[#C9A249] transition-all items-center text-md font-medium shadow-md hover:shadow-lg">
              Login/Registration 
              <FaArrowRight className="ml-2 text-sm" />
            </a>

            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-gray-700 hover:text-[#C9A249] focus:outline-none p-2"
            >
              {isMobileMenuOpen ? <HiX size={32} /> : <HiMenuAlt3 size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:hidden bg-white border-t border-gray-200 absolute w-full shadow-xl`}>
        <div className="px-4 py-6 space-y-2 max-h-[80vh] overflow-y-auto">
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">Home</a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">Homes for Sale</a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">Rentals</a>

          {/* Mobile Cities Submenu */}
          <div className="border-b border-gray-100 pb-2">
            <button 
              onClick={() => toggleMobileSubmenu('cities')}
              className="w-full text-left flex justify-between items-center px-3 py-2 text-base font-medium text-gray-700"
            >
              Cities <FaChevronDown className={`transition-transform ${activeMobileSubmenu === 'cities' ? 'rotate-180' : ''}`} />
            </button>
            {activeMobileSubmenu === 'cities' && (
              <div className="pl-6 space-y-1 bg-gray-50 rounded-lg py-2">
                {['Nashville', 'Knoxville', 'Chattanooga', 'Bristol'].map(city => (
                  <a key={city} href="#" className="block px-3 py-2 text-sm text-gray-600">{city}</a>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Moving Submenu */}
          <div className="border-b border-gray-100 pb-2">
            <button 
              onClick={() => toggleMobileSubmenu('moving')}
              className="w-full text-left flex justify-between items-center px-3 py-2 text-base font-medium text-gray-700"
            >
              Moving to Tennessee <FaChevronDown className={`transition-transform ${activeMobileSubmenu === 'moving' ? 'rotate-180' : ''}`} />
            </button>
            {activeMobileSubmenu === 'moving' && (
              <div className="pl-6 space-y-2 bg-gray-50 rounded-lg py-3">
                <p className="px-3 text-xs font-bold text-[#C9A249] uppercase">Essentials</p>
                <a href="#" className="block px-3 py-1 text-sm text-gray-600">Relocation Guide</a>
                <a href="#" className="block px-3 py-1 text-sm text-gray-600">Cost of Living</a>
                <p className="px-3 text-xs font-bold text-[#C9A249] uppercase pt-2">Tools</p>
                <a href="#" className="block px-3 py-1 text-sm text-gray-600">Moving Checklist</a>
              </div>
            )}
          </div>

          <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">Partner Program</a>
          
          <a href="#" className="block w-full text-center mt-6 bg-[#1F3A68] text-white px-5 py-4 rounded-xl font-bold">
            Login / Registration
          </a>
        </div>
      </div>
    </header>
  );
};

export default FrontendHeader;