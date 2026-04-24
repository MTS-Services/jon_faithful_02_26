import InputError from '@/components/input-error';
import AuthLayout from '@/layouts/auth-layout';
import { login } from '@/routes/admin';
import { useForm, usePage } from '@inertiajs/react';
import React, { useMemo } from 'react';

interface AdminLoginProps {
    defaultEmail?: string;
}

function mergeFormErrors(
    pageErrors: unknown,
    slotErrors: Record<string, string | undefined>,
): Record<string, string | string[] | undefined> {
    const fromPage =
        pageErrors && typeof pageErrors === 'object' && !Array.isArray(pageErrors)
            ? { ...(pageErrors as Record<string, string | string[] | undefined>) }
            : {};
    return { ...fromPage, ...slotErrors };
}

export default function Login({ defaultEmail = '' }: AdminLoginProps) {
    const page = usePage<{ errors?: Record<string, string | string[] | undefined> }>();
    const { data, setData, post, processing, errors: formErrors } = useForm({
        email: defaultEmail,
        password: '',
        remember: false,
    });

    const errors = useMemo(
        () => mergeFormErrors(page.props.errors, formErrors),
        [page.props.errors, formErrors],
    );

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(login.url());
    };

    return (
        <AuthLayout
            title="Log in to your account"
            description="Enter your credentials to access your account"
        >
            <form className="space-y-4" onSubmit={handleSubmit}>
                <InputError message={errors['error']} className="text-center" />
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
                        onChange={(e) => setData('email', e.target.value)}
                        className="w-full rounded-md border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-secondary focus:outline-none"
                        placeholder="you@example.com"
                        required
                    />
                    <InputError message={errors.email} className="mt-1" />
                </div>

                <div>
                    <label
                        htmlFor="password"
                        className="mb-1 block text-sm font-medium text-gray-700"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        className="w-full rounded-md border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-secondary focus:outline-none"
                        placeholder="••••••••"
                        required
                    />
                    <InputError message={errors.password} className="mt-1" />
                </div>

                <div className="flex items-center">
                    <input
                        type="checkbox"
                        id="rememberMe"
                        checked={data.remember}
                        onChange={(e) => setData('remember', e.target.checked)}
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
                    disabled={processing}
                    className="w-full rounded-md bg-secondary px-4 py-3 text-white transition-colors hover:bg-primary focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:outline-none"
                >
                    {processing ? 'Logging in...' : 'Login'}
                </button>
            </form>

            <div className="mt-6 text-center">
                <a
                    href="register"
                    className="text-sm text-gray-600 hover:text-gray-800"
                >
                    Singn Up
                </a>
            </div>
        </AuthLayout>
    );
}
