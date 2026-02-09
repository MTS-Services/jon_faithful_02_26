import UserDashboardLayout from '@/layouts/user-dashboard-layout';
import { useState } from 'react';

export default function EditHome() {
    const [activeTab, setActiveTab] = useState('manual');

    return (
        <UserDashboardLayout> 

        <div className="bg-gray-50 p-2">
        <div className="container mx-auto bg-white rounded-lg shadow-md p-6">
            <form>
            {/* Listing Title */}
            <div className="mb-4">
                <label className="block text-sm font-bold text-secondary-foreground mb-2">
                Listing Title<span className="text-secondary-foreground">*</span>
                </label>
                <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                />
            </div>
            {/* Featured Image */}
            <div className="mb-4">
                <label className="block text-sm font-bold text-secondary-foreground mb-2">
                Featured Image<span className="text-secondary-foreground">*</span>
                </label>
                <button
                type="button"
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                >
                Choose File
                </button>
                <p className="text-xs text-gray-500 mt-1">Maximum file size: 10 MB</p>
            </div>
            {/* Listing Description */}
            <div className="mb-4">
                <label className="block text-sm font-bold text-secondary-foreground mb-2">
                Listing Description<span className="text-secondary-foreground">*</span>
                </label>
                <textarea
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                defaultValue={""}
                />
            </div>
            {/* Purchase Price */}
            <div className="mb-4">
                <label className="block text-sm font-bold text-secondary-foreground mb-2">
                Purchase Price<span className="text-secondary-foreground">*</span>
                </label>
                <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                />
            </div>
            {/* Deposit */}
            <div className="mb-4">
                <label className="block text-sm font-bold text-secondary-foreground mb-2">
                Deposit<span className="text-secondary-foreground">*</span>
                </label>
                <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                />
            </div>
            {/* Lease Length */}
            <div className="mb-4">
                <label className="block text-sm font-bold text-secondary-foreground mb-2">
                Lease length<span className="text-secondary-foreground">*</span>
                </label>
                <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                />
            </div>
            {/* Bedrooms */}
            <div className="mb-4">
                <label className="block text-sm font-bold text-secondary-foreground mb-2">
                Bedrooms<span className="text-secondary-foreground">*</span>
                </label>
                <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                />
            </div>
            {/* Bathroom */}
            <div className="mb-4">
                <label className="block text-sm font-bold text-secondary-foreground mb-2">
                Bathroom<span className="text-secondary-foreground">*</span>
                </label>
                <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                />
            </div>
            {/* Square Footage */}
            <div className="mb-4">
                <label className="block text-sm font-bold text-secondary-foreground mb-2">
                Square footage<span className="text-secondary-foreground">*</span>
                </label>
                <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                />
            </div>
            {/* Photo Gallery */}
            <div className="mb-4">
                <label className="block text-sm font-bold text-secondary-foreground mb-2">
                Photo Gallery<span className="text-secondary-foreground">*</span>
                </label>
                <button
                type="button"
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                >
                Choose Files
                </button>
                <p className="text-xs text-gray-500 mt-1">Maximum file size: 246 MB</p>
            </div>
            {/* Pet Friendly */}
            <div className="mb-4">
                <label className="block text-sm font-bold text-secondary-foreground mb-2">
                Pet Friendly<span className="text-secondary-foreground">*</span>
                </label>
                <div className="space-y-2">
                <div className="flex items-center">
                    <input
                    type="radio"
                    id="pet-yes"
                    name="pet-friendly"
                    defaultValue="yes"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <label htmlFor="pet-yes" className="ml-2 text-sm text-gray-700">
                    Yes
                    </label>
                </div>
                <div className="flex items-center">
                    <input
                    type="radio"
                    id="pet-no"
                    name="pet-friendly"
                    defaultValue="no"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <label htmlFor="pet-no" className="ml-2 text-sm text-gray-700">
                    No
                    </label>
                </div>
                </div>
            </div>
            {/* Parking / Garage */}
            <div className="mb-4">
                <label className="block text-sm font-bold text-secondary-foreground mb-2">
                parking / garage<span className="text-secondary-foreground">*</span>
                </label>
                <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                />
            </div>
            {/* Rent City */}
            <div className="mb-4">
                <label className="block text-sm font-bold text-secondary-foreground mb-2">
                Rent City<span className="text-secondary-foreground">*</span>
                </label>
                <input
                type="text"
                defaultValue="Chattanooga"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                />
            </div>
            {/* Property Type */}
            <div className="mb-6">
                <label className="block text-sm font-bold text-secondary-foreground mb-2">
                Property Type<span className="text-secondary-foreground">*</span>
                </label>
                <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                >
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="condo">Condo</option>
                <option value="townhouse">Townhouse</option>
                </select>
            </div>
            {/* Submit Button */}
            <div>
                <button
                type="submit"
                className="w-full sm:w-auto px-6 py-2.5 bg-blue-900 text-white font-medium rounded hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                >
                Update Listing
                </button>
            </div>
            </form>
        </div>
        </div>


        </UserDashboardLayout>
    );
}
