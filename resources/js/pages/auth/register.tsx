import InputError from '@/components/input-error';
import { Label } from '@/components/ui/label';
import { PasswordInput } from '@/components/ui/password-input';
import { Link, useForm, usePage } from '@inertiajs/react';
import React, { useMemo } from 'react';

type CityOption = {
    id: number;
    name: string;
};

export type RegisterFormDefaults = {
    username: string;
    name: string;
    email: string;
    phone: string;
    city_id: string;
    license_number: string;
    brokerage_name: string;
    your_self: string;
    type: string | null;
};

interface RegisterProps {
    cities?: CityOption[];
    formDefaults?: RegisterFormDefaults;
}

function emptyFormDefaults(): RegisterFormDefaults {
    return {
        username: '',
        name: '',
        email: '',
        phone: '',
        city_id: '',
        license_number: '',
        brokerage_name: '',
        your_self: '',
        type: null,
    };
}

export default function Register({
    cities = [],
    formDefaults: formDefaultsProp,
}: RegisterProps) {
    const page = usePage<{ errors?: Record<string, string | string[] | undefined> }>();
    const formDefaults = formDefaultsProp ?? emptyFormDefaults();
    const userType = new URLSearchParams(window.location.search).get('type');

    const { data, setData, post, processing, errors: formErrors } = useForm({
        username: formDefaults.username,
        name: formDefaults.name,
        email: formDefaults.email,
        password: '',
        password_confirmation: '',
        phone: formDefaults.phone,
        city_id: formDefaults.city_id,
        license_number: formDefaults.license_number,
        brokerage_name: formDefaults.brokerage_name,
        image: null as File | null,
        your_self: formDefaults.your_self,
        type: formDefaults.type ?? userType,
    });

    const errors = useMemo((): Record<string, string | string[] | undefined> => {
        const shared = page.props.errors;
        const fromPage =
            shared && typeof shared === 'object' && !Array.isArray(shared)
                ? { ...(shared as Record<string, string | string[] | undefined>) }
                : {};
        return { ...fromPage, ...formErrors };
    }, [page.props.errors, formErrors]);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        post(route('register.post'), { forceFormData: true });
    }
    return (
        <div>
            <div className="flex min-h-screen items-center justify-center bg-gray-100">
                <div className="w-full max-w-4xl rounded-lg bg-white p-8 shadow-md  my-20">
                    <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
                        Register
                    </h2>

                    <InputError message={errors['error']} className="mb-4 text-center" />

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-1">
                                <label
                                    htmlFor="file"
                                    className="mb-1 block text-sm font-medium text-gray-700"
                                >
                                    Image
                                </label>
                                <input
                                    type="file"
                                    id="file"
                                    accept="image/jpeg,image/png,image/jpg,image/gif,image/svg+xml,image/webp"
                                    className="w-full rounded-md border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-secondary focus:outline-none"
                                    onChange={(e) =>
                                        setData('image', e.target.files?.[0] ?? null)
                                    }
                                />
                                <InputError message={errors.image} />

                                {/* hint text */}
                                <p className="mt-1 text-xs text-gray-500">
                                    Maximum file size: 256 MB
                                </p>
                            </div>
                            <div>
                                <label
                                    htmlFor="username"
                                    className="mb-1 block text-sm font-medium text-gray-700"
                                >
                                    User Name
                                </label>
                                <input
                                    type="text"
                                    id="username"
                                    value={data.username}
                                    className="w-full rounded-md border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-secondary focus:outline-none"
                                    placeholder="Enter Your Username"
                                    onChange={(e) =>
                                        setData('username', e.target.value.trim())
                                    }
                                />
                                <InputError message={errors.username} />
                            </div>
                            <div>
                                <label
                                    htmlFor="name"
                                    className="mb-1 block text-sm font-medium text-gray-700"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={data.name}
                                    className="w-full rounded-md border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-secondary focus:outline-none"
                                    placeholder="Enter Your Name"
                                    onChange={(e) =>
                                        setData('name', e.target.value.trim())
                                    }
                                />
                                <InputError message={errors.name} />
                            </div>
                            <div>
                                <label
                                    htmlFor="city_id"
                                    className="mb-1 block text-sm font-medium text-gray-700"
                                >
                                    City
                                </label>
                                <select
                                    id="city_id"
                                    className="w-full rounded-md border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-secondary focus:outline-none"
                                    value={data.city_id}
                                    onChange={(e) => setData('city_id', e.target.value)}
                                >
                                    <option value="" disabled>
                                        Select City
                                    </option>
                                    {cities.map((city) => (
                                        <option key={city.id} value={String(city.id)}>
                                            {city.name}
                                        </option>
                                    ))}
                                </select>
                                <InputError message={errors.city_id} />
                            </div>
                            <div>
                                <label
                                    htmlFor="license_number"
                                    className="mb-1 block text-sm font-medium text-gray-700"
                                >
                                    License number
                                </label>
                                <input
                                    type="text"
                                    id="license_number"
                                    value={data.license_number}
                                    className="w-full rounded-md border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-secondary focus:outline-none"
                                    placeholder="Enter Your License number"
                                    onChange={(e) =>
                                        setData(
                                            'license_number',
                                            e.target.value.trim(),
                                        )
                                    }
                                />
                                <InputError message={errors.license_number} />
                            </div>
                            <div>
                                <label
                                    htmlFor="brokerage_name"
                                    className="mb-1 block text-sm font-medium text-gray-700"
                                >
                                    Brokerage name
                                </label>
                                <input
                                    type="text"
                                    id="brokerage_name"
                                    value={data.brokerage_name}
                                    className="w-full rounded-md border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-secondary focus:outline-none"
                                    placeholder="Enter Your brokerage_name"
                                    onChange={(e) =>
                                        setData('brokerage_name', e.target.value.trim())
                                    }
                                />
                                <InputError message={errors.brokerage_name} />
                            </div>
                            <div>
                                <label
                                    htmlFor="phone"
                                    className="mb-1 block text-sm font-medium text-gray-700"
                                >
                                    Phone number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    value={data.phone}
                                    className="w-full rounded-md border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-secondary focus:outline-none"
                                    placeholder="Enter Your Phone number"
                                    onChange={(e) =>
                                        setData('phone', e.target.value.trim())
                                    }
                                />
                                <InputError message={errors.phone} />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-1 block text-sm font-medium text-gray-700"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={data.email}
                                    className="w-full rounded-md border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-secondary focus:outline-none"
                                    placeholder="Enter Your Email"
                                    onChange={(e) =>
                                        setData('email', e.target.value.trim())
                                    }
                                />
                                <InputError message={errors.email} />
                            </div>
                            
                            <div className="col-span-2">
                                <label
                                    htmlFor="your_self"
                                    className="mb-1 block text-sm font-medium text-gray-700"
                                >
                                    About Me
                                </label>
                                <textarea
                                    name="your_self"
                                    id="your_self"
                                    value={data.your_self}
                                    className="w-full rounded-md border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-secondary focus:outline-none"
                                    onChange={(e) =>
                                        setData('your_self', e.target.value.trim())
                                    }
                                ></textarea>

                                <InputError message={errors.your_self} />
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

                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="rememberMe"
                                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-secondary"
                            />
                            <label
                                htmlFor="rememberMe"
                                className="ml-2 block text-sm text-gray-700"
                            >
                                Remember me
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full rounded-md bg-secondary px-4 py-3 text-white transition-colors hover:bg-primary focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:outline-none"
                        >
                            Register
                        </button>
                    </form>

                    <div className="mt-6 text-center flex gap-2 justify-center items-center">
                        <p className="text-sm text-gray-600">
                            Already have an account?
                        </p>
                        <Link
                            href={route('login')}
                            className="text-sm text-secondary hover:text-primary hover:underline"
                        >
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
