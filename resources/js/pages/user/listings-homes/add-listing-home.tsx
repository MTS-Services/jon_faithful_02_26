import { useForm, usePage } from '@inertiajs/react';
import { FormEvent, useState } from 'react';
import { toast } from 'sonner';

import FileUpload from '@/components/file-upload';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import UserDashboardLayout from '@/layouts/user-dashboard-layout';

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
    propertyStatuses: PropertyOption[];
}

export default function AddListingHome({ cities, propertyTypes, propertyStatuses }: Props) {
    const [activeTab, setActiveTab] = useState('manual');
    const page = usePage<{ errors?: Record<string, string | string[] | undefined> }>();

    const { data, setData, post, processing, errors: formErrors, reset } = useForm({
        title: '',
        description: '',
        purchase_price: '',
        city_id: '',
        address: '',
        listing_status: propertyStatuses[0]?.value || '',
        property_type: propertyTypes[0]?.value || '',
        bedrooms: '',
        bathrooms: '',
        square_feet: '',
        primary_image_url: null as File | null,
        youtube_video_url: '',
        gallery_images: [] as File[],
    });

    const { data: linkData, setData: setLinkData, post: postLink, processing: linkProcessing, errors: linkFormErrors } = useForm({
        name: '',
        email: '',
        external_link: '',
    });
    const errors: Record<string, string | string[] | undefined> = {
        ...(page.props.errors ?? {}),
        ...formErrors,
    };
    const linkErrors: Record<string, string | string[] | undefined> = {
        ...(page.props.errors ?? {}),
        ...linkFormErrors,
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(data);
        post(route('user.store-listing-home'), {
            onSuccess: () => {
                reset();
                toast.success('Listing created successfully.');
            },
            onError: () => {
                console.log(data);
                toast.error('Failed to create listing.');
            },
        });
    };

    const handleLinkSubmit = (e: FormEvent) => {
        e.preventDefault();
        postLink(route('user.add-listing-link-store'), {
            onSuccess: () => {
                setLinkData({
                    name: '',
                    email: '',
                    external_link: '',
                });
                toast.success('Listing created successfully.');
            },
            onError: () => {
                toast.error('Failed to create listing.');
            },
        });
    };

    const handleGalleryImagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setData('gallery_images', Array.from(e.target.files));
        }
    };


    return (
        <UserDashboardLayout>
            <div className="min-h-screen bg-gray-50">
                <div className="mx-auto w-full max-w-4xl px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
                    {/* Header Buttons */}
                    <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:justify-center">
                        <button
                            type="button"
                            onClick={() => setActiveTab('manual')}
                            className={`rounded-md px-4 py-2.5 text-sm font-medium transition-colors sm:px-6 sm:text-base ${activeTab === 'manual'
                                ? 'bg-slate-800 text-white hover:bg-slate-700'
                                : 'border border-slate-300 bg-white text-slate-800'
                                }`}
                        >
                            Add Listing Manually
                        </button>
                        <button
                            type="button"
                            onClick={() => setActiveTab('link')}
                            className={`rounded-md px-4 py-2.5 text-sm font-medium transition-colors sm:px-6 sm:text-base ${activeTab === 'link'
                                ? 'bg-slate-800 text-white hover:bg-slate-700'
                                : 'border border-slate-300 bg-white text-slate-800'
                                }`}
                        >
                            Submit Listing via Link
                        </button>
                    </div>

                    {/* Form Container */}
                    <div className="rounded-lg bg-white p-4 shadow-lg sm:p-6 lg:p-8">
                        {activeTab === 'manual' && (
                            <form onSubmit={handleSubmit} className="min-w-0">
                                <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-2">
                                    <div className="col-span-1 lg:col-span-2 w-full min-w-0 max-w-md lg:max-w-none">
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
                                    {/* Photo Gallery */}
                                    <div className="col-span-1 lg:col-span-2 grid min-w-0 gap-2">
                                        <Label htmlFor="gallery_images">Photo Gallery*</Label>
                                        <input
                                            id="gallery_images"
                                            type="file"
                                            accept="image/*"
                                            multiple
                                            onChange={handleGalleryImagesChange}
                                            className="block w-full min-w-0 text-sm text-gray-700 file:mr-2 file:rounded file:border file:border-gray-300 file:bg-gray-50 file:px-3 file:py-2 file:text-xs file:font-medium file:transition hover:file:bg-gray-100 sm:file:mr-4 sm:file:px-4 sm:file:text-sm"
                                        />
                                        <p className="text-xs text-gray-500 mt-1">Maximum file size: 25 MB</p>
                                        <InputError message={errors.gallery_images} />
                                    </div>
                                        {/* Listing Title */}
                                        <div className="grid gap-2">
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
                                        {/* Purchase Price */}
                                        <div className="grid gap-2">
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
                                        {/* City */}
                                        <div className="grid gap-2">
                                            <Label htmlFor="city_id">City and Region*</Label>
                                            <Select
                                                value={data.city_id}
                                                onValueChange={(value) => setData('city_id', value)}
                                            >
                                                <SelectTrigger className="datatable-select w-full min-w-0">
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
                                        <div className="grid gap-2">
                                            <Label htmlFor="address">Address</Label>
                                            <Input
                                                id="address"
                                                type="text"
                                                value={data.address}
                                                onChange={(e) => setData('address', e.target.value)}
                                                placeholder="Enter property address"
                                            />
                                            <InputError message={errors.address} />
                                        </div>
                                        {/* Listing Status */}
                                        <div className="grid gap-2">
                                            <Label htmlFor="listing_status">Listing Status*</Label>
                                            <Select
                                                value={data.listing_status}
                                                onValueChange={(value) => setData('listing_status', value)}
                                            >
                                                <SelectTrigger className="w-full min-w-0">
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
                                        <div className="grid gap-2">
                                            <Label htmlFor="property_type">Home Type*</Label>
                                            <Select
                                                value={data.property_type}
                                                onValueChange={(value) => setData('property_type', value)}
                                            >
                                                <SelectTrigger className="w-full min-w-0">
                                                    <SelectValue placeholder="Select home type" />
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

                                        {/* Square Feet */}
                                        <div className="grid gap-2">
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
                                        {/* Square Youtube Video */}
                                        <div className="col-span-1 lg:col-span-2 grid min-w-0 gap-2">
                                            <Label htmlFor="youtube_video_url">YouTube Video URL</Label>
                                            <Input
                                                id="youtube_video_url"
                                                type="text"
                                                value={data.youtube_video_url}
                                                onChange={(e) => setData('youtube_video_url', e.target.value)}
                                                placeholder="Type YouTube Video URL"
                                            />
                                            <InputError message={errors.youtube_video_url} />
                                        </div>


                                    {/* Listing Description */}
                                    <div className="col-span-1 lg:col-span-2 grid min-w-0 gap-2">
                                        <Label htmlFor="description">Listing Description</Label>
                                        <textarea
                                            id="description"
                                            rows={4}
                                            value={data.description}
                                            onChange={(e) => setData('description', e.target.value)}
                                            className="w-full min-w-0 resize-y rounded-md border border-gray-300 px-3 py-2.5 text-base outline-none transition focus:border-transparent focus:ring-2 focus:ring-slate-500 sm:px-4"
                                            placeholder="Enter listing description"
                                        />
                                        <InputError message={errors.description} />
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <Button
                                    type="submit"
                                    disabled={processing}
                                    className="mt-6 w-full bg-secondary text-white hover:bg-primary sm:w-auto sm:px-8"
                                >
                                    {processing ? 'Submitting...' : 'Submit Listing for Review'}
                                </Button>
                            </form>
                        )}

                        {activeTab === 'link' && (
                            <form onSubmit={handleLinkSubmit} className="mx-auto w-full max-w-2xl space-y-6 min-w-0">
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

                                <Button
                                    type="submit"
                                    disabled={linkProcessing}
                                    className="w-full bg-slate-800 text-white hover:bg-slate-700 sm:w-auto sm:px-8"
                                >
                                    {linkProcessing ? 'Submitting...' : 'Submit'}
                                </Button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </UserDashboardLayout>
    );
}
