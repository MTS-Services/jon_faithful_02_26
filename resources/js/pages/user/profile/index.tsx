import FileUpload from '@/components/file-upload';
import UserDashboardLayout from '@/layouts/user-dashboard-layout';
import { useForm } from '@inertiajs/react';
import { Label } from '@/components/ui/label';
import React, { useEffect, useState } from 'react';
import { User } from '@/types';


interface Props {
    user: User;
}


export default function Index({ user }: Props) {
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

    const { data, setData, post, processing, errors, reset } = useForm({
            name: '',
            id: '',
            username: '',
            email: '',
            phone: '',
            brokerage_name: '',
            license_number: '',
            image: null as File | null,
            password: '',
            password_confirmation: '',
            _method: 'POST',
        });
        const [existingFiles, setExistingFiles] = useState<any[]>([]);
    
        useEffect(() => {
            if (user) {
                setData({
                    name: user.name,
                    id: user.id,
                    username: user.username || '',
                    email: user.email,
                    phone: user.phone || '',
                    brokerage_name: user.brokerage_name || '',
                    license_number: user.license_number || '',
                    image: null,
                    _method: 'POST',
                });
    
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
            <div className="flex min-h-screen items-center justify-center">
                <div className="w-full rounded-lg bg-white p-8 shadow-md">
                    <h2 className="mb-6 text-2xl font-bold text-slate-800">
                        Your Account Setting
                    </h2>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="h-[300px] w-[300px]">
                            <Label htmlFor="image" className="mb-1 font-bold">Image</Label>
                            <FileUpload
                                value={data.image}
                                onChange={(file) =>
                                    setData('image', file as File | null)
                                }
                                existingFiles={existingFiles}
                                onRemoveExisting={handleRemoveExisting}
                                accept="image/*"
                                maxSize={10}
                            />
                        </div>

                        

                        <div>
                            <label className="block text-sm font-bold text-gray-700">
                                User Name*
                            </label>
                            <input
                                type="text"
                                value={data?.username ?? ''}
                                onChange={(e) =>
                                    setData('username', e.target.value)
                                }
                                className="mt-1 block w-full rounded-md border border-gray-400 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700">
                                Name*
                            </label>
                            <input
                                type="text"
                                value={data?.name ?? ''}
                                className="mt-1 block w-full rounded-md border border-gray-400 px-3 py-2 text-sm"
                                onChange={(e) =>
                                    setData('name', e.target.value)
                                }
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700">
                                Phone Number*
                            </label>
                            <input
                                type="text"
                                value={data?.phone ?? ''}
                                className="mt-1 block w-full rounded-md border border-gray-400 px-3 py-2 text-sm"
                                onChange={(e) =>
                                    setData('phone', e.target.value)
                                }
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700">
                                Brokerage name*
                            </label>
                            <input
                                type="text"
                                value={data?.brokerage_name ?? ''}
                                className="mt-1 block w-full rounded-md border border-gray-400 px-3 py-2 text-sm"
                                onChange={(e) =>
                                    setData('brokerage_name', e.target.value)
                                }
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700">
                                License number*
                            </label>
                            <input
                                type="text"
                                value={data?.license_number ?? ''}
                                className="mt-1 block w-full rounded-md border border-gray-400 px-3 py-2 text-sm"
                                onChange={(e) =>
                                    setData('license_number', e.target.value)
                                }
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700">
                                Email*
                            </label>
                            <input
                                type="email"
                                value={data?.email ?? ''}
                                className="mt-1 block w-full rounded-md border border-gray-400 px-3 py-2 text-sm"
                                onChange={(e) =>
                                    setData('email', e.target.value)
                                }
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700">
                                About You
                            </label>
                            <textarea
                                rows="3"
                                className="mt-1 block w-full rounded-md border border-gray-400 px-3 py-2 text-sm"
                                onChange={(e) =>
                                    setData('your_self', e.target.value)
                                }
                            >
                                {data?.your_self}
                            </textarea>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700">
                                Password
                            </label>
                            <input
                                type="password"
                                value={data.password}
                                className="mt-1 block w-full rounded-md border border-gray-400 px-3 py-2 text-sm"
                                onChange={(e) =>
                                    setData('password', e.target.value)
                                }
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                value={data.password_confirmation}
                                className="mt-1 block w-full rounded-md border border-gray-400 px-3 py-2 text-sm"
                                onChange={(e) =>
                                    setData(
                                        'password_confirmation',
                                        e.target.value,
                                    )
                                }
                            />
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="rounded bg-[#1e3a63] px-8 py-2 font-bold text-white shadow-lg transition duration-200 hover:bg-blue-900"
                            >
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </UserDashboardLayout>
    );
}

