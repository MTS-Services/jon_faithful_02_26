import FileUpload from '@/components/file-upload';
import InputError from '@/components/input-error';
import AddFeatureModal from '@/components/add-feature-modal';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import UserDashboardLayout from '@/layouts/user-dashboard-layout';
import { useForm } from '@inertiajs/react';
import { FormEvent, useState } from 'react';
import { toast } from 'sonner';
import axios from 'axios';
import { Button } from '@/components/ui/button';

interface City {
    id: number;
    name: string;
}

interface PropertyOption {
    value: string;
    label: string;
}

interface Feature {
    id: number;
    name: string;
    feature_category_id?: number | null;
}

interface FeatureCategory {
    id: number;
    name: string;
}

interface Props {
    cities: City[];
    propertyTypes: PropertyOption[];
    features: Feature[];
    featureCategories: FeatureCategory[];
}

export default function AddListingRental({
    cities,
    propertyTypes,
    features: initialFeatures,
    featureCategories,
}: Props) {
    const [activeTab, setActiveTab] = useState('manual');
    const [features, setFeatures] = useState(initialFeatures);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalLoading, setModalLoading] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        title: '',
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
        primary_image_url: null as File | null,
        gallery_images: [] as File[],
        features: [] as number[],
        youtube_video_url: '',
    });

    const {
        data: linkData,
        setData: setLinkData,
        post: postLink,
        processing: linkProcessing,
        errors: linkErrors,
    } = useForm({
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
        postLink(route('user.add-rental-link-store'), {
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

    const handleAddFeature = async (name: string, categoryId: number) => {
        setModalLoading(true);
        try {
            const res = await axios.post(route('admin.feature.store'), {
                name,
                feature_category_id: categoryId,
            });
            setFeatures([...features, res.data]);
            toast.success('Feature added successfully.');
            setModalOpen(false);
        } catch (err: any) {
            toast.error(err.response?.data?.message || 'Failed to add feature');
        } finally {
            setModalLoading(false);
        }
    };

    const handleFeatureToggle = (id: number) => {
        const current = [...data.features];
        const index = current.indexOf(id);
        if (index > -1) {
            current.splice(index, 1);
        } else {
            current.push(id);
        }
        setData('features', current);
    };

    return (
        <UserDashboardLayout>
            <div className="min-h-screen bg-gray-50 p-2">
                <AddFeatureModal
                    open={modalOpen}
                    onClose={() => setModalOpen(false)}
                    onSubmit={handleAddFeature}
                    featureCategories={featureCategories}
                    loading={modalLoading}
                />
                <div className="container mx-auto">
                    {/* Header Buttons */}
                    <div className="mb-4 flex justify-center gap-3">
                        <button
                            onClick={() => setActiveTab('manual')}
                            className={`rounded-md px-6 py-2.5 font-medium transition-colors ${
                                activeTab === 'manual'
                                    ? 'bg-slate-800 text-white hover:bg-slate-700'
                                    : 'border border-slate-300 bg-white text-slate-800'
                            }`}
                        >
                            Add Listing Manually
                        </button>
                        <button
                            onClick={() => setActiveTab('link')}
                            className={`rounded-md px-6 py-2.5 font-medium transition-colors ${
                                activeTab === 'link'
                                    ? 'bg-slate-800 text-white hover:bg-slate-700'
                                    : 'border border-slate-300 bg-white text-slate-800'
                            }`}
                        >
                            Submit Listing via Link
                        </button>
                    </div>

                    {/* Form Container */}
                    <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
                        {activeTab === 'manual' && (
                            <form onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                                    {/* Primary Image */}
                                    <div className="col-span-2 w-80">
                                        <div className="grid gap-2">
                                            <Label htmlFor="primary_image_url">
                                                Image
                                            </Label>
                                            <FileUpload
                                                value={data.primary_image_url}
                                                onChange={(file) =>
                                                    setData(
                                                        'primary_image_url',
                                                        file as File | null,
                                                    )
                                                }
                                                accept="image/*"
                                                maxSize={10}
                                            />
                                            <InputError
                                                message={
                                                    errors.primary_image_url
                                                }
                                            />
                                        </div>
                                    </div>

                                    {/* Photo Gallery */}
                                    <div className="col-span-2 grid gap-2">
                                        <Label htmlFor="gallery_images">
                                            Photo Gallery*
                                        </Label>
                                        <input
                                            id="gallery_images"
                                            type="file"
                                            accept="image/*"
                                            multiple
                                            onChange={(e) => {
                                                if (e.target.files) {
                                                    setData(
                                                        'gallery_images',
                                                        Array.from(
                                                            e.target.files,
                                                        ),
                                                    );
                                                }
                                            }}
                                            className="block w-full text-sm text-gray-700 file:mr-4 file:rounded file:border file:border-gray-300 file:bg-gray-50 file:px-4 file:py-2 file:text-sm file:font-medium file:transition hover:file:bg-gray-100"
                                        />
                                        <p className="mt-1 text-xs text-gray-500">
                                            Maximum file size: 200 MB total
                                        </p>
                                        <InputError
                                            message={errors.gallery_images}
                                        />
                                    </div>

                                    {/* Listing Title */}
                                    <div className="grid gap-2">
                                        <Label htmlFor="title">
                                            Listing Title*
                                        </Label>
                                        <Input
                                            id="title"
                                            type="text"
                                            value={data.title}
                                            onChange={(e) =>
                                                setData(
                                                    'title',
                                                    e.target.value,
                                                )
                                            }
                                            placeholder="Enter listing title"
                                        />
                                        <InputError
                                            message={errors.title}
                                        />
                                    </div>

                                    {/* Purchase Price */}
                                    <div className="grid gap-2">
                                        <Label htmlFor="purchase_price">
                                            Purchase Price*
                                        </Label>
                                        <Input
                                            id="purchase_price"
                                            type="text"
                                            value={data.purchase_price}
                                            onChange={(e) =>
                                                setData(
                                                    'purchase_price',
                                                    e.target.value,
                                                )
                                            }
                                            placeholder="Enter purchase price"
                                        />
                                        <InputError
                                            message={errors.purchase_price}
                                        />
                                    </div>

                                    {/* City */}
                                    <div className="grid gap-2">
                                        <Label htmlFor="city_id">City*</Label>
                                        <Select
                                            value={data.city_id}
                                            onValueChange={(value) =>
                                                setData('city_id', value)
                                            }
                                        >
                                            <SelectTrigger className="datatable-select">
                                                <SelectValue placeholder="Select city" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {cities.map((city: any) => (
                                                    <SelectItem
                                                        key={city.id}
                                                        value={String(city.id)}
                                                    >
                                                        {city.name}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <InputError message={errors.city_id} />
                                    </div>

                                    {/* Property Type */}
                                    {/* <div className="grid gap-2">
                                        <Label htmlFor="property_type">
                                            Property Type*
                                        </Label>
                                        <Select
                                            value={data.property_type}
                                            onValueChange={(value) =>
                                                setData('property_type', value)
                                            }
                                        >
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select property type" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {Object.entries(
                                                    propertyTypes,
                                                ).map(([value, label]) => (
                                                    <SelectItem
                                                        key={value}
                                                        value={value}
                                                    >
                                                        {label}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <InputError
                                            message={errors.property_type}
                                        />
                                    </div> */}

                                    {/* Property Type */}
                                        <div className="grid gap-2">
                                            <Label htmlFor="property_type">
                                                Property Type*
                                            </Label>
                                            <Select
                                                value={data.property_type}
                                                onValueChange={(value) =>
                                                    setData('property_type', value)
                                                }
                                            >
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select property type" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {propertyTypes.map((type) => (
                                                        <SelectItem
                                                            key={type.value}
                                                            value={type.value}
                                                        >
                                                            {type.label}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                            <InputError
                                                message={errors.property_type}
                                            />
                                        </div>

                                    {/* Bedrooms */}
                                    <div className="grid gap-2">
                                        <Label htmlFor="bedrooms">
                                            Bedrooms*
                                        </Label>
                                        <Input
                                            id="bedrooms"
                                            type="number"
                                            min="0"
                                            value={data.bedrooms}
                                            onChange={(e) =>
                                                setData(
                                                    'bedrooms',
                                                    e.target.value,
                                                )
                                            }
                                            placeholder="Type number of bedrooms"
                                        />
                                        <InputError message={errors.bedrooms} />
                                    </div>

                                    {/* Bathrooms */}
                                    <div className="grid gap-2">
                                        <Label htmlFor="bathrooms">
                                            Bathrooms*
                                        </Label>
                                        <Input
                                            id="bathrooms"
                                            type="number"
                                            min="0"
                                            value={data.bathrooms}
                                            onChange={(e) =>
                                                setData(
                                                    'bathrooms',
                                                    e.target.value,
                                                )
                                            }
                                            placeholder="Type number of bathrooms"
                                        />
                                        <InputError
                                            message={errors.bathrooms}
                                        />
                                    </div>

                                    {/* Square Feet */}
                                    <div className="grid gap-2">
                                        <Label htmlFor="square_feet">
                                            Square Feet*
                                        </Label>
                                        <Input
                                            id="square_feet"
                                            type="number"
                                            min="0"
                                            value={data.square_feet}
                                            onChange={(e) =>
                                                setData(
                                                    'square_feet',
                                                    e.target.value,
                                                )
                                            }
                                            placeholder="Type square footage"
                                        />
                                        <InputError
                                            message={errors.square_feet}
                                        />
                                    </div>

                                    {/* Security Deposit */}
                                    <div className="grid gap-2">
                                        <Label htmlFor="security_deposit">
                                            Security Deposit
                                        </Label>
                                        <Input
                                            id="security_deposit"
                                            type="number"
                                            value={data.security_deposit}
                                            onChange={(e) =>
                                                setData(
                                                    'security_deposit',
                                                    e.target.value,
                                                )
                                            }
                                            placeholder="Enter security deposit"
                                        />
                                        <InputError
                                            message={errors.security_deposit}
                                        />
                                    </div>

                                    {/* Lease Length */}
                                    <div className="grid gap-2">
                                        <Label htmlFor="lease_length">
                                            Lease Length
                                        </Label>
                                        <Input
                                            id="lease_length"
                                            type="number"
                                            value={data.lease_length}
                                            onChange={(e) =>
                                                setData(
                                                    'lease_length',
                                                    e.target.value,
                                                )
                                            }
                                            placeholder="Enter lease length"
                                        />
                                        <InputError
                                            message={errors.lease_length}
                                        />
                                    </div>

                                    {/* Parking / Garage Spaces */}
                                    <div className="grid gap-2">
                                        <Label htmlFor="parking_garage">
                                            Parking / Garage Spaces*
                                        </Label>
                                        <Input
                                            id="parking_garage"
                                            type="number"
                                            min="0"
                                            value={data.parking_garage}
                                            onChange={(e) =>
                                                setData(
                                                    'parking_garage',
                                                    e.target.value,
                                                )
                                            }
                                            placeholder="Enter number of parking spaces"
                                        />
                                        <InputError
                                            message={errors.parking_garage}
                                        />
                                    </div>

                                    {/* YouTube Video URL */}
                                    <div className="col-span-2 grid gap-2">
                                        <Label htmlFor="youtube_video_url">
                                            YouTube Video URL
                                        </Label>
                                        <Input
                                            id="youtube_video_url"
                                            type="text"
                                            value={data.youtube_video_url}
                                            onChange={(e) =>
                                                setData(
                                                    'youtube_video_url',
                                                    e.target.value,
                                                )
                                            }
                                            placeholder="Type YouTube Video URL"
                                        />
                                        <InputError
                                            message={errors.youtube_video_url}
                                        />
                                    </div>

                                    {/* Pet Friendly */}
                                    <div className="col-span-2 grid gap-2">
                                        <Label>Pet Friendly*</Label>
                                        <div className="space-y-2">
                                            <label className="flex cursor-pointer items-center gap-2 font-normal">
                                                <input
                                                    type="radio"
                                                    name="pet_friendly"
                                                    value="yes"
                                                    checked={
                                                        data.pet_friendly ===
                                                        'yes'
                                                    }
                                                    onChange={(e) =>
                                                        setData(
                                                            'pet_friendly',
                                                            e.target.value,
                                                        )
                                                    }
                                                    className="text-blue-600 focus:ring-blue-500"
                                                />
                                                Yes
                                            </label>
                                            <label className="flex cursor-pointer items-center gap-2 font-normal">
                                                <input
                                                    type="radio"
                                                    name="pet_friendly"
                                                    value="no"
                                                    checked={
                                                        data.pet_friendly ===
                                                        'no'
                                                    }
                                                    onChange={(e) =>
                                                        setData(
                                                            'pet_friendly',
                                                            e.target.value,
                                                        )
                                                    }
                                                    className="text-blue-600 focus:ring-blue-500"
                                                />
                                                No
                                            </label>
                                        </div>
                                        <InputError
                                            message={errors.pet_friendly}
                                        />
                                    </div>

                                    {/* Listing Description */}
                                    <div className="col-span-2 grid gap-2">
                                        <Label htmlFor="description">
                                            Listing Description
                                        </Label>
                                        <textarea
                                            id="description"
                                            rows={4}
                                            value={data.description}
                                            onChange={(e) =>
                                                setData(
                                                    'description',
                                                    e.target.value,
                                                )
                                            }
                                            className="w-full resize-none rounded-md border border-gray-300 px-4 py-2.5 transition outline-none focus:border-transparent focus:ring-2 focus:ring-slate-500"
                                            placeholder="Enter listing description"
                                        />
                                        <InputError
                                            message={errors.description}
                                        />
                                    </div>

                                    {/* Facilities Section */}
                                    <div className="col-span-2 mb-8 grid gap-2">
                                        <div className="flex items-center justify-between">
                                            <Label className="text-base font-semibold">
                                                Unit Features
                                            </Label>
                                            <Button
                                                type="button"
                                                size="sm"
                                                onClick={() => setModalOpen(true)}
                                            >
                                                + Add New
                                            </Button>
                                        </div>

                                        <div className="space-y-4 rounded-md border bg-slate-50 p-4">
                                            {featureCategories.map((category) => {
                                                const categoryFeatures = features.filter(
                                                    (feature) => feature.feature_category_id === category.id,
                                                );
                                                if (categoryFeatures.length === 0) {
                                                    return null;
                                                }

                                                return (
                                                    <div key={category.id}>
                                                        <p className="mb-2 border-b pb-1 text-sm font-semibold text-slate-700">
                                                            {category.name}
                                                        </p>
                                                        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
                                                            {categoryFeatures.map((feature) => (
                                                                <div key={feature.id} className="flex items-center space-x-2">
                                                                    <input
                                                                        type="checkbox"
                                                                        id={`feature-${feature.id}`}
                                                                        className="h-4 w-4 rounded border-gray-300 text-slate-800 focus:ring-slate-500"
                                                                        checked={data.features.includes(feature.id)}
                                                                        onChange={() => handleFeatureToggle(feature.id)}
                                                                    />
                                                                    <label
                                                                        htmlFor={`feature-${feature.id}`}
                                                                        className="cursor-pointer text-sm font-medium leading-none"
                                                                    >
                                                                        {feature.name}
                                                                    </label>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                            {(() => {
                                                const categoryIds = featureCategories.map((c) => c.id);
                                                const uncategorized = features.filter(
                                                    (feature) => !categoryIds.includes(feature.feature_category_id ?? -1),
                                                );

                                                if (!uncategorized.length) {
                                                    return null;
                                                }

                                                return (
                                                    <div>
                                                        <p className="mb-2 border-b pb-1 text-sm font-semibold text-slate-700">
                                                            Other
                                                        </p>
                                                        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
                                                            {uncategorized.map((feature) => (
                                                                <div key={feature.id} className="flex items-center space-x-2">
                                                                    <input
                                                                        type="checkbox"
                                                                        id={`feature-${feature.id}`}
                                                                        className="h-4 w-4 rounded border-gray-300 text-slate-800 focus:ring-slate-500"
                                                                        checked={data.features.includes(feature.id)}
                                                                        onChange={() => handleFeatureToggle(feature.id)}
                                                                    />
                                                                    <label
                                                                        htmlFor={`feature-${feature.id}`}
                                                                        className="cursor-pointer text-sm font-medium leading-none"
                                                                    >
                                                                        {feature.name}
                                                                    </label>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                );
                                            })()}
                                        </div>
                                        <InputError message={errors.features} />
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="rounded-md bg-secondary px-8 py-3 font-medium text-white transition-colors hover:bg-primary disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                    {processing
                                        ? 'Creating...'
                                        : 'Create Rental Listing'}
                                </button>
                            </form>
                        )}

                        {activeTab === 'link' && (
                            <form
                                onSubmit={handleLinkSubmit}
                                className="max-w-2xl space-y-6"
                            >
                                <div className="grid gap-2">
                                    <Label htmlFor="external_link">
                                        External Link (Zillow, Realtor, Redfin
                                        or Broker)
                                    </Label>
                                    <Input
                                        id="external_link"
                                        type="url"
                                        value={linkData.external_link}
                                        onChange={(e) =>
                                            setLinkData(
                                                'external_link',
                                                e.target.value,
                                            )
                                        }
                                        placeholder="Enter external link"
                                    />
                                    <InputError
                                        message={linkErrors.external_link}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={linkProcessing}
                                    className="rounded-md bg-slate-800 px-8 py-3 font-medium text-white transition-colors hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                    {linkProcessing
                                        ? 'Submitting...'
                                        : 'Submit'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </UserDashboardLayout>
    );
}
