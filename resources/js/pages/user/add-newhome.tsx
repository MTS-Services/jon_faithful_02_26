import UserDashboardLayout from '@/layouts/user-dashboard-layout';
import { useState } from 'react';

export default function AddNewHome() { // Capitalized component name (React requirement)
    const [, setActiveTab] = useState('manual');

   return (
        <UserDashboardLayout> 
           <div className="flex gap-3 mb-4 justify-center">
            <button className="px-6 py-2.5 rounded-md font-medium transition-colors bg-slate-800 hover:bg-slate-700 text-white">Add Listing Manually</button><button className="px-6 py-2.5 rounded-md font-medium transition-colors bg-white text-slate-800 border border-slate-300">Submit Listing via Link</button>
            </div>
            <div className="container mx-auto my-10 p-8 border border-gray-200 rounded-lg shadow-sm font-sans">
                
                {/* content */}
                <div className="#">
                
                <form className="space-y-5 text-sm">
                    <div>
                    <label className="block font-bold mb-1">Listing Title*</label>
                    <input
                        type="text"
                        placeholder="Enter Listing Title"
                        className="w-full border border-gray-300 p-2 rounded bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    </div>
                    <div>
                    <label className="block font-bold mb-1">Primary Listing Image*</label>
                    <div className="flex flex-col gap-1">
                        <input
                        type="file"
                        className="block w-full text-xs text-gray-500 file:mr-4 file:py-1 file:px-4 file:rounded file:border file:border-gray-300 file:text-sm file:font-semibold file:bg-gray-100 hover:file:bg-gray-200"
                        />
                        <p className="text-[10px] text-gray-500">Maximum file size: 10 MB</p>
                    </div>
                    </div>
                    <div>
                    <label className="block font-bold mb-1">Listing Description*</label>
                    <textarea
                        rows={3}
                        placeholder="Enter Listing Description"
                        className="w-full border border-gray-300 p-2 rounded bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        defaultValue={""}
                    />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block font-bold mb-1">Purchase Price*</label>
                        <input
                        type="text"
                        placeholder="Enter Purchase Price"
                        className="w-full border border-gray-300 p-2 rounded bg-gray-50"
                        />
                    </div>
                    <div>
                        <label className="block font-bold mb-1">Deposit*</label>
                        <input
                        type="text"
                        placeholder=""
                        className="w-full border border-gray-300 p-2 rounded bg-gray-50 h-10"
                        />
                    </div>
                    </div>
                    <div>
                    <label className="block font-bold mb-1">Lease length*</label>
                    <input
                        type="text"
                        placeholder="Type Lease length"
                        className="w-full border border-gray-300 p-2 rounded bg-gray-50"
                    />
                    </div>
                    <div>
                    <label className="block font-bold mb-1">Bedrooms*</label>
                    <input
                        type="text"
                        placeholder="Type Number of Bedrooms"
                        className="w-full border border-gray-300 p-2 rounded bg-gray-50"
                    />
                    </div>
                    <div>
                    <label className="block font-bold mb-1">Bathrooms*</label>
                    <input
                        type="text"
                        placeholder="Type Number of Bathrooms"
                        className="w-full border border-gray-300 p-2 rounded bg-gray-50"
                    />
                    </div>
                    <div>
                    <label className="block font-bold mb-1">Square footage*</label>
                    <input
                        type="text"
                        placeholder="Type Square footage"
                        className="w-full border border-gray-300 p-2 rounded bg-gray-50"
                    />
                    </div>
                    <div>
                    <label className="block font-bold mb-1">Photo Gallery*</label>
                    <div className="flex flex-col gap-1">
                        <input
                        type="file"
                        multiple
                        className="block w-full text-xs text-gray-500 file:mr-4 file:py-1 file:px-4 file:rounded file:border file:border-gray-300 file:text-sm file:font-semibold file:bg-gray-100 hover:file:bg-gray-200"
                        />
                        <p className="text-[10px] text-gray-500">Maximum file size: 200 MB</p>
                    </div>
                    </div>
                    <div>
                    <label className="block font-bold mb-1">Pet friendly*</label>
                    <div className="space-y-1">
                        <label className="flex items-center gap-2 font-normal">
                        <input type="radio" name="pet" className="text-blue-600" /> Yes
                        </label>
                        <label className="flex items-center gap-2 font-normal">
                        <input type="radio" name="pet" className="text-blue-600" /> No
                        </label>
                    </div>
                    </div>
                    <div>
                    <label className="block font-bold mb-1">parking / garage*</label>
                    <input
                        type="text"
                        placeholder="Type parking / garage"
                        className="w-full border border-gray-300 p-2 rounded bg-gray-50"
                    />
                    </div>
                    <div>
                    <label className="block font-bold mb-1">Rent City*</label>
                    <select className="w-full border border-gray-300 p-2 rounded bg-gray-50">
                        <option>Select Rent City</option>
                    </select>
                    </div>
                    <div>
                    <label className="block font-bold mb-1">Property Type*</label>
                    <select className="w-full border border-gray-300 p-2 rounded bg-gray-50">
                        <option>Select Property Type</option>
                    </select>
                    </div>
                    <div className="pt-4">
                    <button
                        type="submit"
                        className="bg-[#233d6b] text-white py-3 px-6 rounded font-bold hover:bg-opacity-90 transition-all"
                    >
                        Submit Listing for Review
                    </button>
                    </div>
                </form>
                </div>

            </div>
        </UserDashboardLayout>
    );
}