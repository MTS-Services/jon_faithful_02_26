import React from 'react'
import { ActionButton } from '@/components/ui/action-button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import AdminLayout from '@/layouts/admin-layout'
import { Rental } from '@/types'
import { Head } from '@inertiajs/react'
import { ArrowLeft, SquarePen } from 'lucide-react'
import { index } from '@/actions/App/Http/Controllers/Admin/RentalController'
import { Badge } from '@/components/ui/badge'

interface Props {
    rental: Rental
}

export default function View({ rental }: Props) {

    return (
        <AdminLayout activeSlug={'rentals'}>
            <Head title="Rental Details" />

            <div className="container mx-auto py-6">
                <div className="mb-6 flex items-center justify-between">
                    <h1 className="text-2xl font-bold">Rental Detail</h1>
                    <div className="flex gap-2">
                        <ActionButton IconNode={ArrowLeft} href={index.url()}>
                            Back to Rentals
                        </ActionButton>
                        {/* <ActionButton IconNode={SquarePen} href={edit.url(rental.id)}>
                            Edit
                        </ActionButton> */}
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

                    {/* LEFT SIDE */}
                    <div className="space-y-6 lg:col-span-2">
                        {/* Title */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Title</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg text-muted-foreground">
                                    {rental.listing_title ?? 'N/A'}
                                </p>
                            </CardContent>
                        </Card>

                        {/* Description */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Description</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground whitespace-pre-line">
                                    {rental.description ?? 'N/A'}
                                </p>
                            </CardContent>
                        </Card>

                        {/* Property Info Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            <Card>
                                <CardHeader>
                                    <CardTitle>Rent Price</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">
                                        ${rental.purchase_price ?? 'N/A'}
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Security Deposit</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">
                                        ${rental.security_deposit ?? 'N/A'}
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Lease Length</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">
                                        {rental.lease_length} Months
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Property Type</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">
                                        {rental.property_type}
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Bedrooms</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">
                                        {rental.bedrooms}
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardTitle>Bathrooms</CardTitle>
                                <CardContent>
                                    <p className="text-muted-foreground">
                                        {rental.bathrooms}
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Square Feet</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">
                                        {rental.square_feet}
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Parking Garage</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">
                                        {rental.parking_garage ?? 'N/A'}
                                    </p>
                                </CardContent>
                            </Card>

                        </div>

                    </div>

                    {/* RIGHT SIDE */}
                    <div className="space-y-6">

                        <Card>
                            <CardHeader>
                                <CardTitle>Status & Insights</CardTitle>
                            </CardHeader>

                            <CardContent className="space-y-4">

                                <div>
                                    <p className="text-sm text-muted-foreground">Status</p>
                                    <Badge variant={rental.status === 'active' ? 'default' : 'destructive'}>
                                        {rental.status}
                                    </Badge>
                                </div>

                                <div>
                                    <p className="text-sm text-muted-foreground">Pet Friendly</p>
                                    <Badge variant={rental.pet_friendly ? 'default' : 'destructive'}>
                                        {rental.pet_friendly ? 'Yes' : 'No'}
                                    </Badge>
                                </div>

                                <div>
                                    <p className="text-sm text-muted-foreground">Created At</p>
                                    <p className="font-medium">
                                        {rental.created_at ? new Date(rental.created_at).toLocaleString() : 'N/A'}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-sm text-muted-foreground">Updated At</p>
                                    <p className="font-medium">
                                        {rental.updated_at ? new Date(rental.updated_at).toLocaleString() : 'N/A'}
                                    </p>
                                </div>

                            </CardContent>
                        </Card>

                    </div>
                </div>

                {/* Images Section */}
                <Card className="mt-6">
                    <CardHeader>
                        <CardTitle>Listing Images</CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-4">

                        {/* Primary Image */}
                        {rental.primary_image_url && (
                            <div>
                                <p className="text-sm text-muted-foreground mb-2">
                                    Primary Image
                                </p>
                                <img
                                    src={rental.image_url}
                                    alt="primary-image"
                                    className="w-full max-w-md rounded object-cover"
                                />
                            </div>
                        )}

                        {/* Gallery Images */}
                        {rental.galleries && rental.galleries.length > 0 ? (
                            <div>
                                <p className="text-sm text-muted-foreground mb-3">
                                    Gallery Images
                                </p>

                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                    {rental.galleries.map((image: any) => (
                                        <img
                                            key={image.id}
                                            src={image.image_url}
                                            alt="gallery-image"
                                            className="w-full h-40 object-cover rounded shadow"
                                        />
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <p className="text-muted-foreground">
                                No gallery images available
                            </p>
                        )}

                    </CardContent>
                </Card>
            </div>
        </AdminLayout>
    )
}
