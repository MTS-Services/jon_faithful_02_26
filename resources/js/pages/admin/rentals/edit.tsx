import FileUpload from '@/components/file-upload';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import AdminLayout from '@/layouts/admin-layout';
import { Head, useForm } from '@inertiajs/react';
import React, { useEffect, useState } from 'react';

interface FormData {
    user_id?: string | number;
    sort_order: string;
    city_id: string;
    listing_title: string;
    description: string;
    purchase_price: string;
    property_type: string;
    security_deposit?: string;
    lease_length?: string;
    bedrooms?: string;
    bathrooms?: string;
    square_feet?: string;
    pet_friendly?: string;
    parking_garage?: string;
    primary_image_url: File | null;
    gallery_images: File | null;
    status: string;
}

export default function Edit({
    rental,
    cities,
    propertyTypes,
    users,
    status,
}: any) {
    const { data, setData, post, processing, errors } = useForm<FormData>({
        listing_title: rental.listing_title || '',
        description: rental.description || '',
        purchase_price: rental.purchase_price || '',
        property_type: rental.property_type || '',
        bedrooms: rental.bedrooms || '',
        bathrooms: rental.bathrooms || '',
        square_feet: rental.square_feet || '',
        city_id: String(rental.city_id || ''),
        user_id: String(rental.user_id || ''),
        sort_order: String(rental.sort_order || '0'),
        status: rental.status || '',
        security_deposit: rental.security_deposit || '',
        lease_length: rental.lease_length || '',
        pet_friendly:
            rental.pet_friendly === 1 || rental.pet_friendly === true
                ? 'yes'
                : 'no',
        parking_garage: rental.parking_garage || '',
        primary_image_url: null,
        gallery_images: null,
    });

    const [existingFiles, setExistingFiles] = useState<any[]>([]);
    useEffect(() => {
        if (data) {
            setData({
                ...data,
                // _method: 'PUT',
            });

            // Update existing files whenever information changes
            if (rental.primary_image_url) {
                setExistingFiles([
                    {
                        id: rental.id,
                        url: rental.image_url,
                        name: rental.primary_image_url,
                        path: rental.primary_image_url,
                        mime_type: 'image/*',
                    },
                ]);
            } else {
                setExistingFiles([]);
            }
        }
    }, [rental]);

    const handleRemoveExisting = () => {
        if (
            confirm(
                'Are you sure you want to remove this file? You must upload a new file to save the changes.',
            )
        ) {
            setExistingFiles([]);
        }
    };

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        post(route('admin.rentals.update', rental.id), {
            forceFormData: true,
            preserveScroll: true,
            // _method: 'put',
        });
    }

    return (
        <AdminLayout activeSlug="admin-listings">
            <Head title="Edit Listing" />

            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl">
                        Edit Rental Listing
                    </CardTitle>
                </CardHeader>

                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid gap-6 md:grid-cols-2">
                            {/* Title */}
                            <div>
                                <Label>Title</Label>
                                <Input
                                    value={data.listing_title}
                                    onChange={(e) =>
                                        setData('listing_title', e.target.value)
                                    }
                                />
                                <InputError message={errors.listing_title} />
                            </div>

                            {/* Image */}
                            {/* <div>
                                <Label>Primary Image</Label>
                                <FileUpload
                                    value={data.primary_image_url}
                                    onChange={(file) =>
                                        setData(
                                            'primary_image_url',
                                            file as File,
                                        )
                                    }
                                    accept="image/*"
                                />
                                {rental.primary_image_url && (
                                    <img
                                        src={rental.primary_image_url}
                                        alt="Current"
                                        className="mt-2 h-20 w-20 rounded object-cover"
                                    />
                                )}
                                <InputError
                                    message={errors.primary_image_url}
                                />
                            </div> */}

                            <div className="grid gap-2">
                                <Label htmlFor="primary_image_url">
                                    Primary Listing Image
                                </Label>
                                <FileUpload
                                    value={data.primary_image_url}
                                    onChange={(file) =>
                                        setData(
                                            'primary_image_url',
                                            file as File | null,
                                        )
                                    }
                                    existingFiles={existingFiles}
                                    onRemoveExisting={handleRemoveExisting}
                                    accept="image/*"
                                    maxSize={10}
                                />
                                <InputError
                                    message={errors.primary_image_url}
                                />
                            </div>

                            {/* City */}
                            <div>
                                <Label>City</Label>
                                <Select
                                    value={data.city_id}
                                    onValueChange={(v) => setData('city_id', v)}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select City" />
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

                            {/* user */}
                            <div>
                                <Label>User</Label>
                                <Select
                                    value={data.user_id}
                                    onValueChange={(v) => setData('user_id', v)}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select User" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {users.map((user: any) => (
                                            <SelectItem
                                                key={user.id}
                                                value={String(user.id)}
                                            >
                                                {user.name}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <InputError message={errors.user_id} />
                            </div>

                            {/* Price */}
                            <div>
                                <Label>Purchase Price</Label>
                                <Input
                                    type="number"
                                    value={data.purchase_price}
                                    onChange={(e) =>
                                        setData(
                                            'purchase_price',
                                            e.target.value,
                                        )
                                    }
                                />
                                <InputError message={errors.purchase_price} />
                            </div>

                            {/* Sort Order */}
                            <div>
                                <Label>Sort Order</Label>
                                <Input
                                    type="number"
                                    value={data.sort_order}
                                    onChange={(e) =>
                                        setData('sort_order', e.target.value)
                                    }
                                />
                                <InputError message={errors.sort_order} />
                            </div>

                            {/* Photo Gallery */}
                            <div className="grid gap-2">
                                <Label htmlFor="gallery_images">
                                    Photo Gallery (Optional - only upload to
                                    replace)
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
                                                Array.from(e.target.files),
                                            );
                                        }
                                    }}
                                    className="block w-full text-sm text-gray-700 file:mr-4 file:rounded file:border file:border-gray-300 file:bg-gray-50 file:px-4 file:py-2 file:text-sm file:font-medium file:transition hover:file:bg-gray-100"
                                />
                                <p className="text-xs text-gray-500">
                                    Maximum file size: 200 MB total
                                </p>
                                <InputError message={errors.gallery_images} />
                            </div>

                            {/* Security Deposit */}
                            <div>
                                <Label>Security Deposit</Label>
                                <Input
                                    type="number"
                                    value={data.security_deposit}
                                    onChange={(e) =>
                                        setData(
                                            'security_deposit',
                                            e.target.value,
                                        )
                                    }
                                />
                                <InputError message={errors.security_deposit} />
                            </div>

                            {/* Bedrooms */}
                            <div>
                                <Label>Bedrooms</Label>
                                <Input
                                    type="number"
                                    value={data.bedrooms}
                                    onChange={(e) =>
                                        setData('bedrooms', e.target.value)
                                    }
                                />
                                <InputError message={errors.bedrooms} />
                            </div>

                            {/* Bathrooms */}
                            <div>
                                <Label>Bathrooms</Label>
                                <Input
                                    type="number"
                                    value={data.bathrooms}
                                    onChange={(e) =>
                                        setData('bathrooms', e.target.value)
                                    }
                                />
                                <InputError message={errors.bathrooms} />
                            </div>

                            {/* Square Feet */}
                            <div>
                                <Label>Square Feet</Label>
                                <Input
                                    type="number"
                                    value={data.square_feet}
                                    onChange={(e) =>
                                        setData('square_feet', e.target.value)
                                    }
                                />
                                <InputError message={errors.square_feet} />
                            </div>

                            <div>
                                <Label>Lease Length</Label>
                                <Input
                                    type="number"
                                    value={data.lease_length}
                                    onChange={(e) =>
                                        setData('lease_length', e.target.value)
                                    }
                                />
                                <InputError message={errors.lease_length} />
                            </div>

                            {/* Property Type */}
                            <div>
                                <Label>Property Type</Label>
                                <Select
                                    value={data.property_type}
                                    onValueChange={(v) =>
                                        setData('property_type', v)
                                    }
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select Type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {Object.entries(propertyTypes).map(
                                            ([value, label]) => (
                                                <SelectItem
                                                    key={value}
                                                    value={value}
                                                >
                                                    {label}
                                                </SelectItem>
                                            ),
                                        )}
                                    </SelectContent>
                                </Select>
                                <InputError message={errors.property_type} />
                            </div>

                            {/* Status */}
                            {/* Status */}
                            <div>
                                <Label>Status</Label>
                                <Select
                                    value={data.status}
                                    onValueChange={(v) => setData('status', v)}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select Status" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {Object.entries(status).map(
                                            ([value, label]) => (
                                                <SelectItem
                                                    key={value}
                                                    value={value}
                                                >
                                                    {label}
                                                </SelectItem>
                                            ),
                                        )}
                                    </SelectContent>
                                </Select>
                                <InputError message={errors.status} />
                            </div>
                        </div>

                        {/* Pet Friendly */}
                        <div className="grid gap-2">
                            <Label>Pet Friendly*</Label>
                            <div className="space-y-2">
                                <label className="flex cursor-pointer items-center gap-2 font-normal">
                                    <input
                                        type="radio"
                                        name="pet_friendly"
                                        value="yes"
                                        checked={
                                            data.pet_friendly === 'yes' ||
                                            data.pet_friendly === 1 ||
                                            data.pet_friendly === true
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
                                            data.pet_friendly === 'no' ||
                                            data.pet_friendly === 0 ||
                                            data.pet_friendly === false
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
                            <InputError message={errors.pet_friendly} />
                        </div>

                        {/* Parking / Garage */}
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
                                    setData('parking_garage', e.target.value)
                                }
                                placeholder="Enter number of parking spaces"
                            />
                            <InputError message={errors.parking_garage} />
                        </div>

                        {/* Description */}
                        <div>
                            <Label>Description</Label>
                            <textarea
                                className="w-full rounded-lg border p-3"
                                rows={5}
                                value={data.description}
                                onChange={(e) =>
                                    setData('description', e.target.value)
                                }
                            />
                        </div>

                        <Button disabled={processing}>
                            {processing ? 'Updating...' : 'Update Listing'}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </AdminLayout>
    );
}
