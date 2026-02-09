import FileUpload from '@/components/file-upload';
import InputError from '@/components/input-error';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import UserDashboardLayout from '@/layouts/user-dashboard-layout';
import { useForm } from '@inertiajs/react';
import { FormEvent, useState } from 'react';
import { toast } from 'sonner';

interface City {
    id: number;
    name: string;
}

interface PropertyOption {
    value: string;
    label: string;
}

interface Props {
    cities: City[];
    propertyTypes: PropertyOption[];
}

export default function AddListingRental({ cities, propertyTypes }: Props) {
    const [activeTab, setActiveTab] = useState('manual');

    const { data, setData, post, processing, errors, reset } = useForm({
        listing_title: '',
        description: '',
        purchase_price: '',
        city_id: '',
        property_type: propertyTypes[0]?.value || '',
        security_deposit: '',
        lease_length: '',
        bedrooms: '',
        bathrooms: '',
        square_feet: '',
        pet_friendly: 'no',
        parking_garage: '',
        primary_image: null as File | null,
        gallery_images: [] as File[],
    });

    const { data: linkData, setData: setLinkData, post: postLink, processing: linkProcessing, errors: linkErrors } = useForm({
        name: '',
        email: '',
        external_link: '',
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        post(route('user.store-listing-rental'), {
            onSuccess: () => {
                reset();
                toast.success('Rental listing created successfully.');
            },
            onError: () => {
                toast.error('Failed to create rental listing.');
            },
        });
    };

    const handleLinkSubmit = (e: FormEvent) => {
        e.preventDefault();
        postLink(route('user.rental-link.store'), {
            onSuccess: () => {
                setLinkData({
                    name: '',
                    email: '',
                    external_link: '',
                });
                toast.success('Rental listing link submitted successfully.');
            },
            onError: () => {
                toast.error('Failed to submit rental listing link.');
            },
        });
    };

    return (
        <UserDashboardLayout>
            <div className="bg-gray-50 min-h-screen p-2">
                <div className="container mx-auto">
                    {/* Header Buttons */}
                    <div className="flex gap-3 mb-4 justify-center">
                        <button
                            onClick={() => setActiveTab('manual')}
                            className={`px-6 py-2.5 rounded-md font-medium transition-colors ${
                                activeTab === 'manual'
                                    ? 'bg-slate-800 hover:bg-slate-700 text-white'
                                    : 'bg-white text-slate-800 border border-slate-300'
                            }`}
                        >
                            Add Listing Manually
                        </button>
                        <button
                            onClick={() => setActiveTab('link')}
                            className={`px-6 py-2.5 rounded-md font-medium transition-colors ${
                                activeTab === 'link'
                                    ? 'bg-slate-800 hover:bg-slate-700 text-white'
                                    : 'bg-white text-slate-800 border border-slate-300'
                            }`}
                        >
                            Submit Listing via Link
                        </button>
                    </div>

                    {/* Form Container */}
                    <div className="bg-white p-8 border border-gray-200 rounded-lg shadow-sm">
                        {activeTab === 'manual' && (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                {/* Listing Title */}
                                <div className="grid gap-2">
                                    <Label htmlFor="listing_title">Listing Title*</Label>
                                    <Input
                                        id="listing_title"
                                        type="text"
                                        value={data.listing_title}
                                        onChange={(e) => setData('listing_title', e.target.value)}
                                        placeholder="Enter listing title"
                                    />
                                    <InputError message={errors.listing_title} />
                                </div>

                                {/* Primary Listing Image */}
                                <div className="w-80">
                                    <div className="grid gap-2">
                                        <Label htmlFor="primary_image">Primary Listing Image*</Label>
                                        <FileUpload
                                            value={data.primary_image}
                                            onChange={(file) => setData('primary_image', file as File | null)}
                                            accept="image/*"
                                            maxSize={10}
                                        />
                                        <p className="text-xs text-gray-500">Maximum file size: 10 MB</p>
                                        <InputError message={errors.primary_image} />
                                    </div>
                                </div>

                                {/* Listing Description */}
                                <div className="grid gap-2">
                                    <Label htmlFor="description">Listing Description*</Label>
                                    <textarea
                                        id="description"
                                        rows={3}
                                        value={data.description}
                                        onChange={(e) => setData('description', e.target.value)}
                                        placeholder="Enter listing description"
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-slate-500 focus:border-transparent outline-none transition resize-none"
                                    />
                                    <InputError message={errors.description} />
                                </div>

                                {/* Purchase Price and Deposit */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="purchase_price">Monthly Rent*</Label>
                                        <Input
                                            id="purchase_price"
                                            type="text"
                                            value={data.purchase_price}
                                            onChange={(e) => setData('purchase_price', e.target.value)}
                                            placeholder="Enter monthly rent"
                                        />
                                        <InputError message={errors.purchase_price} />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="security_deposit">Security Deposit*</Label>
                                        <Input
                                            id="security_deposit"
                                            type="number"
                                            value={data.security_deposit}
                                            onChange={(e) => setData('security_deposit', e.target.value)}
                                            placeholder="Enter security deposit"
                                        />
                                        <InputError message={errors.security_deposit} />
                                    </div>
                                </div>

                                {/* Lease Length */}
                                <div className="grid gap-2">
                                    <Label htmlFor="lease_length">Lease Length (months)*</Label>
                                    <Input
                                        id="lease_length"
                                        type="number"
                                        min="1"
                                        value={data.lease_length}
                                        onChange={(e) => setData('lease_length', e.target.value)}
                                        placeholder="Enter lease length in months"
                                    />
                                    <InputError message={errors.lease_length} />
                                </div>

                                {/* Bedrooms */}
                                <div className="grid gap-2">
                                    <Label htmlFor="bedrooms">Bedrooms*</Label>
                                    <Input
                                        id="bedrooms"
                                        type="number"
                                        min="0"
                                        value={data.bedrooms}
                                        onChange={(e) => setData('bedrooms', e.target.value)}
                                        placeholder="Type number of bedrooms"
                                    />
                                    <InputError message={errors.bedrooms} />
                                </div>

                                {/* Bathrooms */}
                                <div className="grid gap-2">
                                    <Label htmlFor="bathrooms">Bathrooms*</Label>
                                    <Input
                                        id="bathrooms"
                                        type="number"
                                        min="0"
                                        value={data.bathrooms}
                                        onChange={(e) => setData('bathrooms', e.target.value)}
                                        placeholder="Type number of bathrooms"
                                    />
                                    <InputError message={errors.bathrooms} />
                                </div>

                                {/* Square Footage */}
                                <div className="grid gap-2">
                                    <Label htmlFor="square_feet">Square Footage*</Label>
                                    <Input
                                        id="square_feet"
                                        type="number"
                                        min="0"
                                        value={data.square_feet}
                                        onChange={(e) => setData('square_feet', e.target.value)}
                                        placeholder="Type square footage"
                                    />
                                    <InputError message={errors.square_feet} />
                                </div>

                                {/* Photo Gallery */}
                                <div className="grid gap-2">
                                    <Label htmlFor="gallery_images">Photo Gallery*</Label>
                                    <input
                                        id="gallery_images"
                                        type="file"
                                        accept="image/*"
                                        multiple
                                        onChange={(e) => {
                                            if (e.target.files) {
                                                setData('gallery_images', Array.from(e.target.files));
                                            }
                                        }}
                                        className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded file:border file:border-gray-300 file:text-sm file:font-medium file:bg-gray-50 hover:file:bg-gray-100 file:transition"
                                    />
                                    <p className="text-xs text-gray-500">Maximum file size: 200 MB total</p>
                                    <InputError message={errors.gallery_images} />
                                </div>

                                {/* Pet Friendly */}
                                <div className="grid gap-2">
                                    <Label>Pet Friendly*</Label>
                                    <div className="space-y-2">
                                        <label className="flex items-center gap-2 font-normal cursor-pointer">
                                            <input
                                                type="radio"
                                                name="pet_friendly"
                                                value="yes"
                                                checked={data.pet_friendly === 'yes'}
                                                onChange={(e) => setData('pet_friendly', e.target.value)}
                                                className="text-blue-600 focus:ring-blue-500"
                                            />
                                            Yes
                                        </label>
                                        <label className="flex items-center gap-2 font-normal cursor-pointer">
                                            <input
                                                type="radio"
                                                name="pet_friendly"
                                                value="no"
                                                checked={data.pet_friendly === 'no'}
                                                onChange={(e) => setData('pet_friendly', e.target.value)}
                                                className="text-blue-600 focus:ring-blue-500"
                                            />
                                            No
                                        </label>
                                    </div>
                                    <InputError message={errors.pet_friendly} />
                                </div>

                                {/* Parking / Garage */}
                                <div className="grid gap-2">
                                    <Label htmlFor="parking_garage">Parking / Garage Spaces*</Label>
                                    <Input
                                        id="parking_garage"
                                        type="number"
                                        min="0"
                                        value={data.parking_garage}
                                        onChange={(e) => setData('parking_garage', e.target.value)}
                                        placeholder="Enter number of parking spaces"
                                    />
                                    <InputError message={errors.parking_garage} />
                                </div>

                                {/* Rent City */}
                                <div className="grid gap-2">
                                    <Label htmlFor="city_id">Rent City*</Label>
                                    <Select
                                        value={data.city_id}
                                        onValueChange={(value) => setData('city_id', value)}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select rent city" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {cities.map((city) => (
                                                <SelectItem key={city.id} value={String(city.id)}>
                                                    {city.name}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <InputError message={errors.city_id} />
                                </div>

                                {/* Property Type */}
                                <div className="grid gap-2">
                                    <Label htmlFor="property_type">Property Type*</Label>
                                    <Select
                                        value={data.property_type}
                                        onValueChange={(value) => setData('property_type', value)}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select property type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {propertyTypes.map((type) => (
                                                <SelectItem key={type.value} value={type.value}>
                                                    {type.label}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <InputError message={errors.property_type} />
                                </div>

                                {/* Submit Button */}
                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="bg-slate-800 hover:bg-slate-700 text-white py-3 px-6 rounded font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {processing ? 'Submitting...' : 'Submit Listing for Review'}
                                    </button>
                                </div>
                            </form>
                        )}

                        {activeTab === 'link' && (
                            <form onSubmit={handleLinkSubmit} className="space-y-6 max-w-2xl">
                                <div className="grid gap-2">
                                    <Label htmlFor="name">Name (Based on Registration form)</Label>
                                    <Input
                                        id="name"
                                        type="text"
                                        value={linkData.name}
                                        onChange={(e) => setLinkData('name', e.target.value)}
                                        placeholder="Enter your name"
                                    />
                                    <InputError message={linkErrors.name} />
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email (Based on Registration form)</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        value={linkData.email}
                                        onChange={(e) => setLinkData('email', e.target.value)}
                                        placeholder="Enter your email"
                                    />
                                    <InputError message={linkErrors.email} />
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="external_link">External Link (Zillow, Realtor, Redfin or Broker)</Label>
                                    <Input
                                        id="external_link"
                                        type="url"
                                        value={linkData.external_link}
                                        onChange={(e) => setLinkData('external_link', e.target.value)}
                                        placeholder="Enter external link"
                                    />
                                    <InputError message={linkErrors.external_link} />
                                </div>

                                <button
                                    type="submit"
                                    disabled={linkProcessing}
                                    className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-md font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {linkProcessing ? 'Submitting...' : 'Submit'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </UserDashboardLayout>
    );
}
