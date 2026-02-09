import UserDashboardLayout from '@/layouts/user-dashboard-layout';
import { useState } from 'react';

export default function EditListing() {
    const [activeTab, setActiveTab] = useState('manual');

    return (
        <UserDashboardLayout>
             <div className="bg-gray-50 min-h-scree ">
                <div className="contact mx-auto">
                                      

                    {/* Form Container */}
                    <div className="bg-white rounded-lg p-8 shadow-lg">
                        
                            <form>
                                {/* Listing Title */}
                                <div className="mb-6">
                                    <label className="block text-secondary-foreground font-bold mb-2">
                                        Listing Title*
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-slate-500 focus:border-transparent outline-none transition"
                                        placeholder="Enter listing title"
                                    />
                                </div>

                                {/* Primary Listing Image */}
                                <div className="mb-6"> 
                                    <label className="block text-secondary-foreground font-bold mb-2">
                                        Primary Listing Image*
                                    </label>
                                    <button
                                        type="button"
                                        className="px-4 py-2 border border-gray-300 rounded bg-gray-50 hover:bg-gray-100 text-sm text-gray-700 transition"
                                    >
                                        Choose File
                                    </button>
                                    <p className="text-xs text-gray-500 mt-1">Maximum file size: 10 MB</p>
                                </div>

                                {/* Listing Description */}
                                <div className="mb-6">
                                    <label className="block text-secondary-foreground font-bold mb-2">
                                        Listing Description*
                                    </label>
                                    <textarea
                                        rows={4}
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-slate-500 focus:border-transparent outline-none transition resize-none"
                                        placeholder="Enter Listing Description"
                                    ></textarea>
                                </div>

                                {/* Purchase Price */}
                                <div className="mb-6">
                                    <label className="block text-secondary-foreground font-bold mb-2">
                                        Purchase Price*
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-slate-500 focus:border-transparent outline-none transition"
                                        placeholder="Enter Purchase Price"
                                    />
                                </div>

                                {/* Photo Gallery */}
                                <div className="mb-6">
                                    <label className="block text-secondary-foreground font-bold mb-2">
                                        Photo Gallery*
                                    </label>
                                    <button
                                        type="button"
                                        className="px-4 py-2 border border-gray-300 rounded bg-gray-50 hover:bg-gray-100 text-sm text-gray-700 transition"
                                    >
                                        Choose Files
                                    </button>
                                    <p className="text-xs text-gray-500 mt-1">Maximum file size: 25 MB</p>
                                </div>

                                {/* City */}
                                <div className="mb-6">
                                    <label className="block text-secondary-foreground font-bold mb-2">
                                        City*
                                    </label>
                                    <select className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-slate-500 focus:border-transparent outline-none transition bg-white">
                                        <option>Bristol</option>
                                        <option>London</option>
                                        <option>Manchester</option>
                                        <option>Birmingham</option>
                                    </select>
                                </div>

                                {/* Listing Status */}
                                <div className="mb-6">
                                    <label className="block text-secondary-foreground font-bold mb-2">
                                        Listing Status*
                                    </label>
                                    <select className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-slate-500 focus:border-transparent outline-none transition bg-white">
                                        <option>Basic Property Listing</option>
                                        <option>Featured Listing</option>
                                        <option>Premium Listing</option>
                                    </select>
                                </div>

                                {/* Property Type */}
                                <div className="mb-6">
                                    <label className="block text-secondary-foreground font-bold mb-2">
                                        Property Type*
                                    </label>
                                    <select className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-slate-500 focus:border-transparent outline-none transition bg-white">
                                        <option>New construction communities</option>
                                        <option>Single Family Home</option>
                                        <option>Apartment</option>
                                        <option>Condo</option>
                                    </select>
                                </div>

                                {/* Bedrooms */}
                                <div className="mb-6">
                                    <label className="block text-secondary-foreground font-bold mb-2">
                                        Bedrooms*
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-slate-500 focus:border-transparent outline-none transition"
                                        placeholder="Type Number of Bedrooms"
                                    />
                                </div>

                                {/* Bathrooms */}
                                <div className="mb-6">
                                    <label className="block text-secondary-foreground font-bold mb-2">
                                        Bathrooms*
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-slate-500 focus:border-transparent outline-none transition"
                                        placeholder="Type Number of Bathrooms"
                                    />
                                </div>

                                {/* Square Feet */}
                                <div className="mb-8">
                                    <label className="block text-secondary-foreground font-bold mb-2">
                                        Square Feet*
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-slate-500 focus:border-transparent outline-none transition"
                                        placeholder="Type Square Footage"
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-md font-medium transition-colors"
                                >
                                    Submit Listing for Review
                                </button>
                            </form>
                        
                    </div>
                </div>
            </div>
        
        </UserDashboardLayout>
    );
}
