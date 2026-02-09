import React from 'react';
import UserDashboardLayout from '@/layouts/user-dashboard-layout';

export default function Listings() {
    return (
        <UserDashboardLayout>
           <div className="flex flex-wrap sm:flex-nowrap items-start gap-3 py-2">
                <div className="w-full max-w-86 flex-shrink-0 bg-white rounded-2xl shadow-xl overflow-hidden">

                <div className="relative aspect-video w-full overflow-hidden">
                <img
                    src="https://whytennessee.com/wp-content/uploads/jet-engine-forms/27/2026/01/forbes.jpg"
                    alt="Historic Bungalow"
                    className="w-full h-full object-cover"
                />

                <div className="absolute top-4 left-4 bg-secondary text-white px-2 py-2 rounded-full font-medium text-lg shadow-sm">
                    Basic
                </div>

                <div className="absolute top-4 right-4 bg-primary text-white px-2 py-2 rounded-full font-medium text-lg shadow-md">
                    $25
                </div>
                </div>

                <div className="p-2">
                <h2 className="text-1xl font-semibold text-gray-700 mb-2">
                    test2
                </h2>

                <div className="grid grid-cols-2 gap-y-5 text-gray-800">
                    <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                    <span className="font-medium truncate">Johnson City, TN</span>
                    </div>

                    <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
                    <span className="font-medium">3100 /sqft</span>
                    </div>

                    <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"/></svg>
                    <span className="font-medium ">Bedroom: 4</span>
                    </div>

                    <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M7 7c0-1.1.9-2 2-2s2 .9 2 2H7zm10 5v-1c0-2.21-1.79-4-4-4h-1V5c0-1.66-1.34-3-3-3S6 3.34 6 5v2H5c-2.21 0-4 1.79-4 4v1h16zm-2 4H3v1c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-1z"/></svg>
                    <span className="font-medium">Bathroom 3100</span>
                    </div>
                </div>
                </div>

                <div className="flex">
                <button className="flex-1 bg-[#ccaa54] text-white py-3 px-4 flex items-center justify-left space-x-2 font-medium text-sm hover:bg-[#b89644] transition-colors">
                    <span>Edit Post</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
                </button>
                <button className="flex-1 bg-[#233d6b] text-white py-3 px-4 flex items-center justify-left space-x-2 font-medium text-sm hover:bg-[#1a2e52] transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                    <span>Delete Post</span>
                </button>
                </div>
                </div>

                <div className="w-full max-w-86 flex-shrink-0 bg-white rounded-2xl shadow-xl overflow-hidden">

                <div className="relative aspect-video w-full overflow-hidden">
                <img
                    src="https://whytennessee.com/wp-content/uploads/2025/12/pexels-kelly-2350459-2048x1150.jpg"
                    alt="Historic Bungalow"
                    className="w-full h-full object-cover"
                />

                <div className="absolute top-4 left-4 bg-secondary text-white px-2 py-2 rounded-full font-medium text-lg shadow-sm">
                    Basic
                </div>

                <div className="absolute top-4 right-4 bg-primary text-white px-2 py-2 rounded-full font-medium text-lg shadow-md">
                    $25
                </div>
                </div>

                <div className="p-2">
                <h2 className="text-1xl font-semibold text-gray-700 mb-2">
                    Maple Ridge Townhouse
                </h2>

                <div className="grid grid-cols-2 gap-y-5 text-gray-800">
                    <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                    <span className="font-medium truncate">Johnson City, TN</span>
                    </div>

                    <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
                    <span className="font-medium">3100 /sqft</span>
                    </div>

                    <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"/></svg>
                    <span className="font-medium ">Bedroom: 4</span>
                    </div>

                    <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M7 7c0-1.1.9-2 2-2s2 .9 2 2H7zm10 5v-1c0-2.21-1.79-4-4-4h-1V5c0-1.66-1.34-3-3-3S6 3.34 6 5v2H5c-2.21 0-4 1.79-4 4v1h16zm-2 4H3v1c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-1z"/></svg>
                    <span className="font-medium">Bathroom 3100</span>
                    </div>
                </div>
                </div>

                <div className="flex">
                <button className="flex-1 bg-[#ccaa54] text-white py-3 px-4 flex items-center justify-left space-x-2 font-medium text-sm hover:bg-[#b89644] transition-colors">
                    <span>Edit Post</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
                </button>
                <button className="flex-1 bg-[#233d6b] text-white py-3 px-4 flex items-center justify-left space-x-2 font-medium text-sm hover:bg-[#1a2e52] transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                    <span>Delete Post</span>
                </button>
                </div>
                </div>

                <div className="w-full max-w-86 flex-shrink-0 bg-white rounded-2xl shadow-xl overflow-hidden">

                <div className="relative aspect-video w-full overflow-hidden">
                <img
                    src="https://whytennessee.com/wp-content/uploads/jet-engine-forms/27/2026/01/forbes.jpg"
                    alt="Historic Bungalow"
                    className="w-full h-full object-cover"
                />

                <div className="absolute top-4 left-4 bg-secondary text-white px-2 py-2 rounded-full font-medium text-lg shadow-sm">
                    Basic
                </div>

                <div className="absolute top-4 right-4 bg-primary text-white px-2 py-2 rounded-full font-medium text-lg shadow-md">
                    $25
                </div>
                </div>

                <div className="p-2">
                <h2 className="text-1xl font-semibold text-gray-700 mb-2">
                    Historic Bungalow
                </h2>

                <div className="grid grid-cols-2 gap-y-5 text-gray-800">
                    <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                    <span className="font-medium truncate">Johnson City, TN</span>
                    </div>

                    <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
                    <span className="font-medium">3100 /sqft</span>
                    </div>

                    <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"/></svg>
                    <span className="font-medium ">Bedroom: 4</span>
                    </div>

                    <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M7 7c0-1.1.9-2 2-2s2 .9 2 2H7zm10 5v-1c0-2.21-1.79-4-4-4h-1V5c0-1.66-1.34-3-3-3S6 3.34 6 5v2H5c-2.21 0-4 1.79-4 4v1h16zm-2 4H3v1c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-1z"/></svg>
                    <span className="font-medium">Bathroom 3100</span>
                    </div>
                </div>
                </div>

                <div className="flex">
                <button className="flex-1 bg-[#ccaa54] text-white py-3 px-4 flex items-center justify-left space-x-2 font-medium text-sm hover:bg-[#b89644] transition-colors">
                    <span>Edit Post</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
                </button>
                <button className="flex-1 bg-[#233d6b] text-white py-3 px-4 flex items-center justify-left space-x-2 font-medium text-sm hover:bg-[#1a2e52] transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                    <span>Delete Post</span>
                </button>
                </div>
                </div>
           </div>

           <div className="flex flex-wrap sm:flex-nowrap items-start gap-3 py-2">
                <div className="w-full max-w-86 flex-shrink-0 bg-white rounded-2xl shadow-xl overflow-hidden">

                <div className="relative aspect-video w-full overflow-hidden">
                <img
                    src="https://whytennessee.com/wp-content/uploads/jet-engine-forms/27/2026/01/forbes.jpg"
                    alt="Historic Bungalow"
                    className="w-full h-full object-cover"
                />

                <div className="absolute top-4 left-4 bg-secondary text-white px-2 py-2 rounded-full font-medium text-lg shadow-sm">
                    Basic
                </div>

                <div className="absolute top-4 right-4 bg-primary text-white px-2 py-2 rounded-full font-medium text-lg shadow-md">
                    $25
                </div>
                </div>

                <div className="p-2">
                <h2 className="text-1xl font-semibold text-gray-700 mb-2">
                    Historic Bungalow
                </h2>

                <div className="grid grid-cols-2 gap-y-5 text-gray-800">
                    <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                    <span className="font-medium truncate">Johnson City, TN</span>
                    </div>

                    <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
                    <span className="font-medium">3100 /sqft</span>
                    </div>

                    <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"/></svg>
                    <span className="font-medium ">Bedroom: 4</span>
                    </div>

                    <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M7 7c0-1.1.9-2 2-2s2 .9 2 2H7zm10 5v-1c0-2.21-1.79-4-4-4h-1V5c0-1.66-1.34-3-3-3S6 3.34 6 5v2H5c-2.21 0-4 1.79-4 4v1h16zm-2 4H3v1c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-1z"/></svg>
                    <span className="font-medium">Bathroom 3100</span>
                    </div>
                </div>
                </div>

                <div className="flex">
                <button className="flex-1 bg-[#ccaa54] text-white py-3 px-4 flex items-center justify-left space-x-2 font-medium text-sm hover:bg-[#b89644] transition-colors">
                    <span>Edit Post</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
                </button>
                <button className="flex-1 bg-[#233d6b] text-white py-3 px-4 flex items-center justify-left space-x-2 font-medium text-sm hover:bg-[#1a2e52] transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                    <span>Delete Post</span>
                </button>
                </div>
                </div>

                <div className="w-full max-w-86 flex-shrink-0 bg-white rounded-2xl shadow-xl overflow-hidden">

                <div className="relative aspect-video w-full overflow-hidden">
                <img
                    src="https://whytennessee.com/wp-content/uploads/jet-engine-forms/27/2026/01/forbes.jpg"
                    alt="Historic Bungalow"
                    className="w-full h-full object-cover"
                />

                <div className="absolute top-4 left-4 bg-secondary text-white px-2 py-2 rounded-full font-medium text-lg shadow-sm">
                    Basic
                </div>

                <div className="absolute top-4 right-4 bg-primary text-white px-2 py-2 rounded-full font-medium text-lg shadow-md">
                    $25
                </div>
                </div>

                <div className="p-2">
                <h2 className="text-1xl font-semibold text-gray-700 mb-2">
                    Historic Bungalow
                </h2>

                <div className="grid grid-cols-2 gap-y-5 text-gray-800">
                    <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                    <span className="font-medium truncate">Johnson City, TN</span>
                    </div>

                    <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
                    <span className="font-medium">3100 /sqft</span>
                    </div>

                    <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"/></svg>
                    <span className="font-medium ">Bedroom: 4</span>
                    </div>

                    <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M7 7c0-1.1.9-2 2-2s2 .9 2 2H7zm10 5v-1c0-2.21-1.79-4-4-4h-1V5c0-1.66-1.34-3-3-3S6 3.34 6 5v2H5c-2.21 0-4 1.79-4 4v1h16zm-2 4H3v1c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-1z"/></svg>
                    <span className="font-medium">Bathroom 3100</span>
                    </div>
                </div>
                </div>

                <div className="flex">
                <button className="flex-1 bg-[#ccaa54] text-white py-3 px-4 flex items-center justify-left space-x-2 font-medium text-sm hover:bg-[#b89644] transition-colors">
                    <span>Edit Post</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
                </button>
                <button className="flex-1 bg-[#233d6b] text-white py-3 px-4 flex items-center justify-left space-x-2 font-medium text-sm hover:bg-[#1a2e52] transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                    <span>Delete Post</span>
                </button>
                </div>
                </div>

                <div className="w-full max-w-86 flex-shrink-0 bg-white rounded-2xl shadow-xl overflow-hidden">

                <div className="relative aspect-video w-full overflow-hidden">
                <img
                    src="https://whytennessee.com/wp-content/uploads/2025/12/pexels-kelly-2350459-2048x1150.jpg"
                    alt="Historic Bungalow"
                    className="w-full h-full object-cover"
                />

                <div className="absolute top-4 left-4 bg-secondary text-white px-2 py-2 rounded-full font-medium text-lg shadow-sm">
                    Basic
                </div>

                <div className="absolute top-4 right-4 bg-primary text-white px-2 py-2 rounded-full font-medium text-lg shadow-md">
                    $25
                </div>
                </div>

                <div className="p-2">
                <h2 className="text-1xl font-semibold text-gray-700 mb-2">
                    Historic Bungalow
                </h2>

                <div className="grid grid-cols-2 gap-y-5 text-gray-800">
                    <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                    <span className="font-medium truncate">Johnson City, TN</span>
                    </div>

                    <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
                    <span className="font-medium">3100 /sqft</span>
                    </div>

                    <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"/></svg>
                    <span className="font-medium ">Bedroom: 4</span>
                    </div>

                    <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M7 7c0-1.1.9-2 2-2s2 .9 2 2H7zm10 5v-1c0-2.21-1.79-4-4-4h-1V5c0-1.66-1.34-3-3-3S6 3.34 6 5v2H5c-2.21 0-4 1.79-4 4v1h16zm-2 4H3v1c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-1z"/></svg>
                    <span className="font-medium">Bathroom 3100</span>
                    </div>
                </div>
                </div>

                <div className="flex">
                <button className="flex-1 bg-[#ccaa54] text-white py-3 px-4 flex items-center justify-left space-x-2 font-medium text-sm hover:bg-[#b89644] transition-colors">
                    <span>Edit Post</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
                </button>
                <button className="flex-1 bg-[#233d6b] text-white py-3 px-4 flex items-center justify-left space-x-2 font-medium text-sm hover:bg-[#1a2e52] transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                    <span>Delete Post</span>
                </button>
                </div>
                </div>
           </div>
           
        </UserDashboardLayout>
    );
}
