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
import React from 'react';

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
    status: string;
}

export default function Create({ cities, propertyTypes }: any) {
    const { data, setData, post, processing, errors } = useForm<FormData>({
        listing_title: '',
        description: '',
        purchase_price: '',
        property_type: '',
        bedrooms: '',
        bathrooms: '',
        square_feet: '',
        city_id: '',
        sort_order: '0',
        status: '1',
        primary_image_url: null,
    });

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        post(route('admin.rentals.store'));
    }

    return (
        <AdminLayout activeSlug="admin-listings">
            <Head title="Create Listing" />

            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl">Create Listing</CardTitle>
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

                            {/* City */}
                            <div>
                                <Label>City</Label>
                                <Select
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
                            </div>

                            {/* Listing Status */}
                            {/* <div>
                                <Label>Listing Status</Label>
                                <Select
                                    onValueChange={(v) =>
                                        setData('listing_status', v)
                                    }
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="For Sale / Rent" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="sale">
                                            For Sale
                                        </SelectItem>
                                        <SelectItem value="rent">
                                            For Rent
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div> */}

                            {/* Property Type */}
                            <div>
                                <Label>Property Type</Label>
                                <Select
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
                            </div>

                            {/* Status */}
                            <div>
                                <Label>Status</Label>
                                <Select
                                    value={data.status}
                                    onValueChange={(v) => setData('status', v)}
                                >
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="1">
                                            Active
                                        </SelectItem>
                                        <SelectItem value="0">
                                            Inactive
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* Image */}
                            <div>
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
                                <InputError
                                    message={errors.primary_image_url}
                                />
                            </div>
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
                            {processing ? 'Creating...' : 'Create Listing'}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </AdminLayout>
    );
}
