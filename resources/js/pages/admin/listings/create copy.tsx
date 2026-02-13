import { index, store } from '@/actions/App/Http/Controllers/Admin/ListingController';
import FileUpload from '@/components/file-upload';
import InputError from '@/components/input-error';
import { ActionButton } from '@/components/ui/action-button';
import { Button } from '@/components/ui/button';
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import AdminLayout from '@/layouts/admin-layout';
import { Head, Link, router, useForm } from '@inertiajs/react';
import { ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';
import { FormEvent, useState } from 'react'; // Added useState
import axios from 'axios'; // Ensure axios is imported for adding new facilities

interface City {
    id: number;
    name: string;
}

interface Facility {
    id: number;
    name: string;
}

interface PropertyOption {
    value: string;
    label: string;
}

interface Props {
    cities: City[];
    facilities: Facility[]; // Added facilities to props
    propertyTypes: PropertyOption[];
    propertyStatuses: PropertyOption[];
}

export default function Create({ cities, facilities: initialFacilities, propertyTypes, propertyStatuses }: Props) {

    // Maintain a local state for facilities to allow "Add New" without refresh
    const [facilities, setFacilities] = useState(initialFacilities);

    const { data, setData, post, processing, errors, reset } = useForm({
        title: '',
        description: '',
        purchase_price: '',
        city_id: '',
        listing_status: propertyStatuses[0]?.value || '',
        property_type: propertyTypes[0]?.value || '',
        bedrooms: '',
        bathrooms: '',
        square_feet: '',
        primary_image_url: null as File | null,
        gallery_images: [] as File[],
        facilities: [] as number[], // Added facilities array to form data
    });

    const handlePrimaryImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setData('primary_image_url', e.target.files[0]);
        }
    };

    const handleGalleryImagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setData('gallery_images', Array.from(e.target.files));
        }
    };

    const addNewFacility = async () => {
        const name = prompt('Enter new facility name:');
        if (!name) return;

        try {
            const res = await axios.post(route('admin.facilities.store'), { name });
            setFacilities([...facilities, res.data]);
            toast.success('Facility added successfully.');
        } catch (err: any) {
            toast.error(err.response?.data?.message || 'Failed to add facility');
        }
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(data);
        post(route('admin.listing.store'), {
            onSuccess: () => {
                console.log(data);
                reset();
                toast.success('Listing created successfully.');
            },
            onError: () => {
                console.log(data);
                toast.error('Failed to create listing.');
            },
        });
    };

    const handleFacilityToggle = (id: number) => {
        const current = [...data.facilities];
        const index = current.indexOf(id);
        if (index > -1) {
            current.splice(index, 1);
        } else {
            current.push(id);
        }
        setData('facilities', current);
    };

    return (
        <AdminLayout activeSlug="admin-users">
            <Head title="Create User" />

            <CardContent>
                <CardHeader className="flex flex-row justify-between">
                    <CardTitle className='text-2xl'>Create New User</CardTitle>
                    <ActionButton href={index.url()} IconNode={ArrowLeft}>Back to Listings</ActionButton>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        {/* Listing Title */}
                        <div className="grid gap-2 mb-6">
                            <Label htmlFor="title">Listing Title*</Label>
                            <Input
                                id="title"
                                type="text"
                                value={data.title}
                                onChange={(e) => setData('title', e.target.value)}
                                placeholder="Enter listing title"
                            />
                            <InputError message={errors.title} />
                        </div>
                        <div className="mb-6 w-80">
                            <div className="grid gap-2">
                                <Label htmlFor="primary_image_url">Image</Label>
                                <FileUpload
                                    value={data.primary_image_url}
                                    onChange={(file) => setData('primary_image_url', file as File | null)}
                                    accept="image/*"
                                    maxSize={10}
                                />
                                <InputError message={errors.primary_image_url} />
                            </div>
                        </div>

                        {/* Listing Description */}
                        <div className="grid gap-2 mb-6">
                            <Label htmlFor="description">Listing Description*</Label>
                            <textarea
                                id="description"
                                rows={4}
                                value={data.description}
                                onChange={(e) => setData('description', e.target.value)}
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-slate-500 focus:border-transparent outline-none transition resize-none"
                                placeholder="Enter listing description"
                            />
                            <InputError message={errors.description} />
                        </div>

                        {/* Purchase Price */}
                        <div className="grid gap-2 mb-6">
                            <Label htmlFor="purchase_price">Purchase Price*</Label>
                            <Input
                                id="purchase_price"
                                type="text"
                                value={data.purchase_price}
                                onChange={(e) => setData('purchase_price', e.target.value)}
                                placeholder="Enter purchase price"
                            />
                            <InputError message={errors.purchase_price} />
                        </div>

                        {/* Photo Gallery */}
                        <div className="mb-6">
                            <Label htmlFor="gallery_images">Photo Gallery*</Label>
                            <input
                                id="gallery_images"
                                type="file"
                                accept="image/*"
                                multiple
                                onChange={handleGalleryImagesChange}
                                className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded file:border file:border-gray-300 file:text-sm file:font-medium file:bg-gray-50 hover:file:bg-gray-100 file:transition"
                            />
                            <p className="text-xs text-gray-500 mt-1">Maximum file size: 25 MB</p>
                            <InputError message={errors.gallery_images} />
                        </div>

                        {/* City */}
                        <div className="grid gap-2 mb-6">
                            <Label htmlFor="city_id">City*</Label>
                            <Select
                                value={data.city_id}
                                onValueChange={(value) => setData('city_id', value)}
                            >
                                <SelectTrigger className="datatable-select">
                                    <SelectValue placeholder="Select city" />
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

                        {/* Listing Status */}
                        <div className="grid gap-2 mb-6">
                            <Label htmlFor="listing_status">Listing Status*</Label>
                            <Select
                                value={data.listing_status}
                                onValueChange={(value) => setData('listing_status', value)}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select listing status" />
                                </SelectTrigger>
                                <SelectContent>
                                    {propertyStatuses.map((status) => (
                                        <SelectItem key={status.value} value={status.value}>
                                            {status.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <InputError message={errors.listing_status} />
                        </div>

                        {/* Property Type */}
                        <div className="grid gap-2 mb-6">
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

                        {/* Bedrooms */}
                        <div className="grid gap-2 mb-6">
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
                        <div className="grid gap-2 mb-6">
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

                        {/* Square Feet */}
                        <div className="grid gap-2 mb-8">
                            <Label htmlFor="square_feet">Square Feet*</Label>
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

                        {/* --- Added Facilities Section --- */}
                        <div className="grid gap-2 mb-8">
                            <div className="flex items-center justify-between">
                                <Label className="text-base font-semibold">Facilities</Label>
                                <Button
                                    type="button"
                                    variant="outline"
                                    size="sm"
                                    onClick={addNewFacility}
                                >
                                    + Add New
                                </Button>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 border rounded-md bg-slate-50">
                                {facilities.map((facility) => (
                                    <div key={facility.id} className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            id={`facility-${facility.id}`}
                                            className="h-4 w-4 rounded border-gray-300 text-slate-800 focus:ring-slate-500"
                                            checked={data.facilities.includes(facility.id)}
                                            onChange={() => handleFacilityToggle(facility.id)}
                                        />
                                        <label
                                            htmlFor={`facility-${facility.id}`}
                                            className="text-sm font-medium leading-none cursor-pointer"
                                        >
                                            {facility.name}
                                        </label>
                                    </div>
                                ))}
                            </div>
                            <InputError message={errors.facilities} />
                        </div>
                        {/* --- End Facilities Section --- */}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={processing}
                            className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-md font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {processing ? 'Submitting...' : 'Submit Listing for Review'}
                        </button>
                    </form>
                </CardContent>
            </CardContent>
        </AdminLayout>
    );
}