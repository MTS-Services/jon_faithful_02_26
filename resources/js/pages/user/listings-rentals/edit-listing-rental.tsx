import FileUpload from '@/components/file-upload';
import InputError from '@/components/input-error';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import UserDashboardLayout from '@/layouts/user-dashboard-layout';
import { useForm } from '@inertiajs/react';
import { FormEvent, useEffect, useState } from 'react';
import { toast } from 'sonner';

interface City {
    id: number;
    name: string;
}

interface PropertyOption {
    value: string;
    label: string;
}

interface Rental {
    id: number;
    listing_title: string;
    description: string;
    purchase_price: string;
    city_id: number;
    property_type: string;
    security_deposit: string;
    lease_length: number;
    bedrooms: number;
    bathrooms: number;
    square_feet: number;
    pet_friendly: boolean;
    parking_garage: number;
    primary_image_url: string | null;
    image_url: string[];
}

interface Props {
    rental: Rental;
    cities: City[];
    propertyTypes: PropertyOption[];
}

export default function EditListingRental({ rental, cities, propertyTypes }: Props) {
    const { data, setData, post, processing, errors } = useForm({
        listing_title: rental.listing_title || '',
        description: rental.description || '',
        purchase_price: rental.purchase_price || '',
        city_id: String(rental.city_id) || '',
        property_type: rental.property_type || propertyTypes[0]?.value || '',
        security_deposit: rental.security_deposit || '',
        lease_length: String(rental.lease_length) || '',
        bedrooms: String(rental.bedrooms) || '',
        bathrooms: String(rental.bathrooms) || '',
        square_feet: String(rental.square_feet) || '',
        pet_friendly: rental.pet_friendly ? 'yes' : 'no',
        parking_garage: String(rental.parking_garage) || '',
        primary_image_url: null as File | null,
        gallery_images: [] as File[],
        _method: 'PUT',
    });

    const [existingFiles, setExistingFiles] = useState<any[]>([]);
    useEffect(() => {
        if (data) {
            setData({
                ...data,
                _method: 'PUT',
            });

            // Update existing files whenever information changes
            if (rental.primary_image_url) {
                setExistingFiles([{
                    id: rental.id,
                    url: rental.image_url,
                    name: rental.primary_image_url,
                    path: rental.primary_image_url,
                    mime_type: 'image/*'
                }]);
            } else {
                setExistingFiles([]);
            }
        }
    }, [rental]);

    const handleRemoveExisting = () => {
        if (confirm('Are you sure you want to remove this file? You must upload a new file to save the changes.')) {
            setExistingFiles([]);
        }
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        post(route('user.update-listing-rental', rental.id), {
            onSuccess: () => {
                toast.success('Rental listing updated successfully.');
            },
            onError: () => {
                toast.error('Failed to update rental listing.');
            },
        });
    };

    return (
        <UserDashboardLayout>
            <div className="bg-gray-50 min-h-screen p-2">
                <div className="container mx-auto bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Edit Rental Listing</h2>

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
                                <Label htmlFor="primary_image_url">Primary Listing Image</Label>
                                <FileUpload
                                    value={data.primary_image_url}
                                    onChange={(file) => setData('primary_image_url', file as File | null)}
                                    existingFiles={existingFiles}
                                    onRemoveExisting={handleRemoveExisting}
                                    accept="image/*"
                                    maxSize={10}
                                />
                                <InputError message={errors.primary_image_url} />
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

                        {/* Monthly Rent and Security Deposit */}
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
                                    type="text"
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
                            <Label htmlFor="gallery_images">Photo Gallery</Label>
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

                        {/* Submit Buttons */}
                        <div className="flex gap-3 pt-4">
                            <button
                                type="submit"
                                disabled={processing}
                                className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-md font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {processing ? 'Updating...' : 'Update Listing'}
                            </button>
                            <button
                                type="button"
                                onClick={() => window.history.back()}
                                className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-8 py-3 rounded-md font-medium transition-colors"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </UserDashboardLayout>
    );
}
