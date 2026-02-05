import UserDashboardLayout from '@/layouts/user-dashboard-layout';
import { useForm } from '@inertiajs/react';

export default function Index({ item }: any[]) {
    const { data, setData, post, processing, errors } = useForm({
        id: item.id,
        name: item.name ?? '',
        username: item.username?? '',
        email: item.email ?? '',
        password: '',
        password_confirmation: '',
        phone: item.phone ?? '',
        license_number: item.license_number ?? '',
        brokerage_name: item.brokerage_name ?? '',
        image: item.image ?? '',
        your_self: item.your_self ?? '',
    });
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

                    <form className="space-y-4"  onSubmit={handleSubmit}>
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
                                Profile Picture*
                            </label>
                            <div className="mt-2">
                                <input
                                    type="file"
                                    className="block w-full text-sm text-gray-500 file:mr-4 file:rounded file:border file:border-gray-400 file:bg-gray-50 file:px-4 file:py-1 file:text-sm file:font-semibold file:text-gray-700 hover:file:bg-gray-100"
                                />
                                <p className="mt-1 text-xs text-gray-500">
                                    Maximum file size: 10 MB
                                </p>
                            </div>
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
                                    setData(
                                        'brokerage_name',
                                        e.target.value,
                                    )
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
                                    setData(
                                        'license_number',
                                        e.target.value,
                                    )
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
                                About You*
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
                                Password*
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
                                Confirm Password*
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
