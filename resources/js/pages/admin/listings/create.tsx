import FileUpload from '@/components/file-upload';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import AdminLayout from '@/layouts/admin-layout';
import UserDashboardLayout from '@/layouts/user-dashboard-layout';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEvent } from 'react';
import { useState } from 'react';
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
    propertyStatuses: PropertyOption[];
}

export default function Create({ cities, propertyTypes, propertyStatuses }: Props) {
    const [activeTab, setActiveTab] = useState('manual');

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
    });

    const { data: linkData, setData: setLinkData, post: postLink, processing: linkProcessing, errors: linkErrors } = useForm({
        name: '',
        email: '',
        external_link: '',
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(data);
        post(route('user.add-listing-home'), {
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

    return (
        <AdminLayout activeSlug="admin-users">
            <Head title="Create User" />

            <Card>
                <CardHeader className="flex flex-row justify-between">
                    <CardTitle className='text-2xl'>Create New User</CardTitle>
                    <Link href={index.url()} className="ml-auto">
                        <Button>Back to Users</Button>
                    </Link>
                </CardHeader>
                <CardContent>
                    <AdminLayout activeSlug="admin-users">
                        <Head title="Create User" />

                        <Card>
                            <CardHeader className="flex flex-row justify-between">
                                <CardTitle className='text-2xl'>Create New User</CardTitle>
                                <Link href={index.url()} className="ml-auto">
                                    <Button>Back to Users</Button>
                                </Link>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="space-y-4 grid md:grid-cols-2 gap-6">
                                        {/* Image */}
                                        <div className="grid gap-2">
                                            <Label htmlFor="image">Image</Label>
                                            <FileUpload
                                                value={data.image}
                                                onChange={(file) => setData('image', file as File | null)}
                                                accept="image/*"
                                                maxSize={10}
                                            />
                                            <InputError message={errors.image} />
                                        </div>
                                        <div></div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="username">Username</Label>
                                            <Input
                                                id="username"
                                                type="text"
                                                value={data.username}
                                                onChange={(e) => setData('username', e.target.value)}
                                                required
                                            />
                                            <InputError message={errors.username} />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="name">Name</Label>
                                            <Input
                                                id="name"
                                                type="text"
                                                value={data.name}
                                                onChange={(e) => setData('name', e.target.value)}
                                                required
                                            />
                                            <InputError message={errors.name} />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="user_type">User Type</Label>
                                            <Select
                                                value={data.user_type || ''}
                                                onValueChange={(value) => setData('user_type', value)}
                                            >
                                                <SelectTrigger className="datatable-select">
                                                    <SelectValue placeholder="Select user type" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {(user_types || []).map((option: any) => (
                                                        <SelectItem key={(option.value ?? option.id ?? option)} value={String(option.value ?? option.id ?? option)}>
                                                            {option.label ?? option.name ?? option}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                            <InputError message={errors.user_type} />
                                        </div>

                                        <div className="grid gap-2">
                                            <Label htmlFor="email">Email</Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                value={data.email}
                                                onChange={(e) => setData('email', e.target.value)}
                                                required
                                            />
                                            <InputError message={errors.email} />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="phone">Phone</Label>
                                            <Input
                                                id="phone"
                                                type="text"
                                                value={data.phone}
                                                onChange={(e) => setData('phone', e.target.value)}

                                            />
                                            <InputError message={errors.phone} />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="brokerage_name">Brokerage Name</Label>
                                            <Input
                                                id="brokerage_name"
                                                type="text"
                                                value={data.brokerage_name}
                                                onChange={(e) => setData('brokerage_name', e.target.value)}

                                            />
                                            <InputError message={errors.brokerage_name} />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="your_self">Your Self</Label>
                                            <Input
                                                id="your_self"
                                                type="text"
                                                value={data.your_self}
                                                onChange={(e) => setData('your_self', e.target.value)}
                                            />
                                            <InputError message={errors.your_self} />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="license_number">License Number</Label>
                                            <Input
                                                id="license_number"
                                                type="text"
                                                value={data.license_number}
                                                onChange={(e) => setData('license_number', e.target.value)}
                                            />
                                            <InputError message={errors.license_number} />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="password">Password</Label>
                                            <PasswordInput
                                                id="password"
                                                name="password"
                                                value={data.password}
                                                onChange={(e) => setData('password', e.target.value)}
                                                required
                                                placeholder="********"
                                                className="h-11 border-gray-200 bg-white/50 px-4! py-3! transition-all focus:border-secondary! focus:ring-secondary!"
                                            />
                                            <InputError message={errors.password} />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="password_confirmation">Confirm Password</Label>
                                            <PasswordInput
                                                id="password_confirmation"
                                                name="password_confirmation"
                                                value={data.password_confirmation}
                                                onChange={(e) => setData('password_confirmation', e.target.value)}
                                                required
                                                placeholder="********"
                                                className="h-11 border-gray-200 bg-white/50 px-4! py-3! transition-all focus:border-secondary! focus:ring-secondary!"
                                            />
                                            <InputError message={errors.password_confirmation} />
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <Button type="submit" disabled={processing}>
                                            {processing ? 'Creating...' : 'Create User'}
                                        </Button>
                                        <Link href={index.url()}>
                                            <Button type="button" variant="outline">
                                                Cancel
                                            </Button>
                                        </Link>
                                    </div>
                                </form>
                            </CardContent>
                        </Card>
                    </AdminLayout>
                </CardContent>
            </Card>
        </AdminLayout>
    );
}
