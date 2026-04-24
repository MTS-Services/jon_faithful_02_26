import FileUpload from '@/components/file-upload';
import UserDashboardLayout from '@/layouts/user-dashboard-layout';
import { Link, useForm, usePage } from '@inertiajs/react';
import { Label } from '@/components/ui/label';
import React, { useEffect, useState } from 'react';
import { City, User } from '@/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CardContent } from '@/components/ui/card';
import InputError from '@/components/input-error';
import { PasswordInput } from '@/components/ui/password-input';
import { Textarea } from '@/components/ui/textarea';


interface Props {
    user: User;
    cities: City[];
}


export default function Index({ user, cities }: Props) {
    // const { data, setData, post, processing, errors } = useForm({
    //     id: item.id,
    //     name: item.name ?? '',
    //     username: item.username ?? '',
    //     email: item.email ?? '',
    //     password: '',
    //     password_confirmation: '',
    //     phone: item.phone ?? '',
    //     license_number: item.license_number ?? '',
    //     brokerage_name: item.brokerage_name ?? '',
    //     image: item.image ?? '',
    //     your_self: item.your_self ?? '',
    // });

    const page = usePage<{ errors?: Record<string, string | string[] | undefined> }>();
    const { data, setData, post, processing, errors: formErrors, reset } = useForm({
        name: '',
        id: '',
        username: '',
        email: '',
        phone: '',
        city_id: '',
        brokerage_name: '',
        license_number: '',
        image: null as File | null,
        current_password: '',
        password: '',
        password_confirmation: '',
        your_self: '',
        _method: 'POST',
    });
    const errors: Record<string, string | string[] | undefined> = {
        ...(page.props.errors ?? {}),
        ...formErrors,
    };
    const [existingFiles, setExistingFiles] = useState<any[]>([]);

    useEffect(() => {
        if (user) {
            setData('name', user.name);
            setData('id', String(user.id));
            setData('username', user.username || '');
            setData('email', user.email);
            setData('phone', user.phone || '');
            setData('city_id', user.city_id ? String(user.city_id) : '');
            setData('brokerage_name', user.brokerage_name || '');
            setData('license_number', user.license_number || '');
            setData('image', null);
            setData('_method', 'POST');
            setData('your_self', (user.your_self as string) || '');
            setData('current_password', '');
            setData('password', '');
            setData('password_confirmation', '');

            // Update existing files whenever information changes
            if (user.image) {
                setExistingFiles([{
                    id: user.id,
                    url: `${user.image_url}`,
                    name: user.image.split('/').pop(),
                    mime_type: 'image/*',
                    path: user.image,
                }]);
            } else {
                setExistingFiles([]);
            }
        }
    }, [user]);

    const handleRemoveExisting = () => {
        if (confirm('Are you sure you want to remove this file? You must upload a new file to save the changes.')) {
            setExistingFiles([]);
        }
    };

    function handleSubmit(e: React.FormEvent) {
        console.log(data);
        e.preventDefault();
        post(route('user.account-settings.update'));
    }
    return (
        <UserDashboardLayout>
            <div className="flex items-center justify-center">
                <div className="w-full rounded-lg bg-white p-8 shadow-md">
                    <h2 className="mb-6 text-2xl font-bold text-slate-800">
                        Your Account Setting
                    </h2>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-4 grid md:grid-cols-2 gap-6">
                                <div className="grid gap-2">
                                    <Label htmlFor="image">Image</Label>
                                    <FileUpload
                                        value={data.image}
                                        onChange={(file) => setData('image', file as File | null)}
                                        existingFiles={existingFiles}
                                        onRemoveExisting={handleRemoveExisting}
                                        accept="image/*"
                                        maxSize={10}
                                    />
                                    <InputError message={errors.image} />
                                </div>
                                <div></div>
                                <div className="grid gap-2 col-span-2">
                                    <Label htmlFor="your_self">About Me</Label>
                                    <Textarea
                                        id="your_self"
                                        value={data.your_self}
                                        onChange={(e) => setData('your_self', e.target.value)}
                                        
                                    />
                                    <InputError message={errors.your_self} />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="username">Username</Label>
                                    <Input
                                        id="username"
                                        type="text"
                                        value={data.username}
                                        onChange={(e) => setData('username', e.target.value)}
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
                                    <Label htmlFor="city_id">City</Label>
                                    <select
                                        id="city_id"
                                        value={data.city_id}
                                        onChange={(e) => setData('city_id', e.target.value)}
                                        className="w-full rounded-md border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-secondary focus:outline-none"
                                        required
                                    >
                                        <option value="" disabled>
                                            Select City
                                        </option>
                                        {cities.map((city) => (
                                            <option key={city.id} value={city.id}>
                                                {city.name}
                                            </option>
                                        ))}
                                    </select>
                                    <InputError message={errors.city_id} />
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
                                    <Label htmlFor="current_password">Current Password</Label>
                                    <PasswordInput
                                        id="current_password"
                                        name="current_password"
                                        value={data.current_password}
                                        onChange={(e) => setData('current_password', e.target.value)}
                                        placeholder="Enter current password"
                                        className="h-11 border-gray-200 bg-white/50 px-4! py-3! transition-all focus:border-secondary! focus:ring-secondary!"
                                    />
                                    <InputError message={errors.current_password} />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="password">Password</Label>
                                    <PasswordInput
                                        id="password"
                                        name="password"
                                        value={data.password}
                                        onChange={(e) => setData('password', e.target.value)}
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
                                        placeholder="********"
                                        className="h-11 border-gray-200 bg-white/50 px-4! py-3! transition-all focus:border-secondary! focus:ring-secondary!"
                                    />
                                    <InputError message={errors.password_confirmation} />
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <Button type="submit" disabled={processing}>
                                    {processing ? 'Updating...' : 'Update User'}
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </div>
            </div>
        </UserDashboardLayout>
    );
}

