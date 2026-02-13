import { index } from '@/actions/App/Http/Controllers/Admin/RentalController';
import { ActionButton } from '@/components/ui/action-button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AdminLayout from '@/layouts/admin-layout';
import { Rental } from '@/types';
import { Head } from '@inertiajs/react';
import { ArrowLeft, CheckCircle2, Youtube } from 'lucide-react';

interface Props {
    rental: Rental & {
        facilities?: { id: number; name: string }[];
        youtube_video_url?: string;
    };
}

export default function View({ rental }: Props) {
    const getEmbedUrl = (url: string | undefined) => {
        if (!url) return null;
        const regExp =
            /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        const match = url.match(regExp);
        return match && match[2].length === 11
            ? `https://www.youtube.com/embed/${match[2]}`
            : null;
    };

    const embedUrl = getEmbedUrl(rental.youtube_video_url);

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
                                <p className="whitespace-pre-line text-muted-foreground">
                                    {rental.description ?? 'N/A'}
                                </p>
                            </CardContent>
                        </Card>

                        {/* Facilities */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-lg">
                                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                                    Facilities & Amenities
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {rental.facilities &&
                                    rental.facilities.length > 0 ? (
                                        rental.facilities.map((facility) => {
                                            console.log(rental.facilities);
                                            return (
                                                <Badge
                                                    key={facility.id}
                                                    variant="secondary"
                                                    className="px-3 py-1"
                                                >
                                                    {facility.name}
                                                </Badge>
                                            );
                                        })
                                    ) : (
                                        <p className="text-sm text-muted-foreground">
                                            No facilities listed.
                                        </p>
                                    )}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Property Info Grid */}
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
                        {/* YouTube Video Section */}
                        {rental.youtube_video_url && (
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2 text-lg">
                                        <Youtube className="h-5 w-5 text-red-600" />
                                        Video Walkthrough
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    {embedUrl ? (
                                        <div className="aspect-video w-full">
                                            <iframe
                                                className="h-full w-full rounded-md shadow-sm"
                                                src={embedUrl}
                                                title="YouTube video player"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            ></iframe>
                                        </div>
                                    ) : (
                                        <a
                                            href={rental.youtube_video_url}
                                            target="_blank"
                                            className="text-blue-600 underline"
                                        >
                                            Watch Video on YouTube
                                        </a>
                                    )}
                                </CardContent>
                            </Card>
                        )}
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Status & Insights</CardTitle>
                            </CardHeader>

                            <CardContent className="space-y-4">
                                <div className="flex items-center justify-between border-b pb-2">
                                    <span className="text-sm text-muted-foreground">
                                        Status
                                    </span>
                                    <Badge
                                        variant={
                                            rental.status === 'active'
                                                ? 'default'
                                                : 'destructive'
                                        }
                                    >
                                        {rental.status}
                                    </Badge>
                                </div>
                                <div className="flex items-center justify-between border-b pb-2">
                                    <span className="text-sm text-muted-foreground">
                                        Market Status
                                    </span>
                                    <Badge
                                        variant="outline"
                                        className="capitalize"
                                    >
                                        {rental.property_type}
                                    </Badge>
                                </div>

                                <div>
                                    <p className="text-sm text-muted-foreground">
                                        Created At
                                    </p>
                                    <p className="font-medium">
                                        {rental.created_at
                                            ? new Date(
                                                  rental.created_at,
                                              ).toLocaleString()
                                            : 'N/A'}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-sm text-muted-foreground">
                                        Updated At
                                    </p>
                                    <p className="font-medium">
                                        {rental.updated_at
                                            ? new Date(
                                                  rental.updated_at,
                                              ).toLocaleString()
                                            : 'N/A'}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Primary Image */}
                        {rental.primary_image_url && (
                            <div>
                                <p className="mb-2 text-sm text-muted-foreground">
                                    Primary Image
                                </p>
                                <img
                                    src={rental.image_url}
                                    alt="primary-image"
                                    className="w-full max-w-md rounded object-cover"
                                />
                            </div>
                        )}
                    </div> 
                </div>

                {/* Images Section */}
                <Card className="mt-6">
                    <CardHeader>
                        <CardTitle>Listing Images</CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-4">
                        {/* Gallery Images */}
                        {rental.galleries && rental.galleries.length > 0 ? (
                            <div>
                                <p className="mb-3 text-sm text-muted-foreground">
                                    Gallery Images
                                </p>

                                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                                    {rental.galleries.map(
                                        (image: any) => (
                                            console.log(image),
                                            (
                                                <img
                                                    key={image.id}
                                                    src={image.image_url}
                                                    alt="gallery-image"
                                                    className="h-40 w-full rounded object-cover shadow"
                                                />
                                            )
                                        ),
                                    )}
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
    );
}
