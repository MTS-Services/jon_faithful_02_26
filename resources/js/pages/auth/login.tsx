import { Form, Head, Link, usePage } from '@inertiajs/react';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PasswordInput } from '@/components/ui/password-input';
import { Spinner } from '@/components/ui/spinner';
import AuthLayout from '@/layouts/auth-layout';
// import { request } from '@/routes/password';
import { SharedData } from '@/types';
import { store } from '@/actions/App/Http/Controllers/Auth/LoginController';

interface LoginProps {
    userType?: string | null;
    defaultEmail?: string;
    status?: string;
    canResetPassword?: boolean;
    canRegister?: boolean;
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

export default function Login({
    status,
    userType: userTypeProp,
    defaultEmail = '',
    canResetPassword: canResetPasswordProp,
    canRegister: canRegisterProp,
}: LoginProps) {
    const page = usePage<SharedData>();
    const { features } = page.props;
    const searchParams =
        typeof window !== 'undefined'
            ? new URLSearchParams(window.location.search)
            : null;
    const userType =
        userTypeProp ?? searchParams?.get('type') ?? '';

    const canResetPassword =
        canResetPasswordProp ?? features?.canResetPassword ?? false;
    const canRegister = canRegisterProp ?? features?.canRegister ?? false;

    return (
        <AuthLayout
            title="Log in to your account"
            description="Enter your credentials to access your account"
        >
            <Head title="Log in" />

            <div className="w-full">
                <Form
                    {...store.form()}
                    resetOnSuccess={['password']}
                    className="space-y-5"
                >
                    {({ processing, errors: slotErrors }) => {
                        const errors = mergeFormErrors(
                            page.props.errors,
                            slotErrors,
                        );
                        return (
                        <>
                            <InputError
                                message={errors['error']}
                                className="text-center"
                            />
                            <div className="space-y-4">
                                <div className="grid gap-1.5">
                                    <Input type="hidden" name="user_type" value={userType} />
                                    <Label
                                        htmlFor="email"
                                        className="ml-1 text-sm font-medium text-gray-700 dark:text-gray-300"
                                    >
                                        Email address
                                    </Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        name="email"
                                        required
                                        autoFocus
                                        defaultValue={defaultEmail}
                                        placeholder="name@company.com"
                                        className="h-11 border-gray-200 px-4! py-3! bg-white/50 transition-all focus:border-secondary! focus:ring-secondary!"
                                    />
                                    <InputError message={errors.email} />
                                </div>

                                <div className="grid gap-1.5">
                                    <div className="ml-1 flex items-center justify-between">
                                        <Label
                                            htmlFor="password"
                                            className="text-sm font-medium text-gray-700 dark:text-gray-300"
                                        >
                                            Password
                                        </Label>
                                        {canResetPassword && (
                                            <TextLink
                                                href="#"
                                                className="text-xs font-semibold text-violet-600 transition-colors hover:text-violet-500"
                                            >
                                                Forgot password?
                                            </TextLink>
                                        )}
                                    </div>
                                    <PasswordInput
                                        id="password"
                                        name="password"
                                        required
                                        placeholder="********"
                                        className="h-11 border-gray-200 bg-white/50 px-4! py-3! transition-all focus:border-secondary! focus:ring-secondary!"
                                    />
                                    <InputError message={errors.password} />
                                </div>
                            </div>
                            <div className="mt-2 text-right">
                                <Link
                                    href={route('forgot-password')}
                                    className="text-sm text-gray-600 hover:text-gray-800 underline underline-[#b8912a]"
                                >
                                    Forgot your password?
                                </Link>
                            </div>

                            <Button
                                type="submit"
                                className={`w-full bg-secondary! py-6 text-lg hover:bg-primary! ${processing ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                                disabled={processing}
                            >
                                {processing ? (
                                    <Spinner className="h-4 w-4" />
                                ) : (
                                    'Login'
                                )}
                            </Button>
                        </>
                    );
                    }}
                </Form>

                {canRegister && (
                    <p className="mt-4 text-center text-sm text-muted-foreground">
                        New here?{' '}
                        <TextLink
                            href={route('register', { type: userType })}
                            className="font-semibold text-violet-600 underline-offset-4 hover:text-violet-500 hover:underline"
                        >
                            Create an account
                        </TextLink>
                    </p>
                )}

                {status && (
                    <div className="mt-4 animate-in rounded-xl border border-emerald-100 bg-emerald-50 p-3 text-center text-sm font-medium text-emerald-600 fade-in slide-in-from-top-2">
                        {status}
                    </div>
                )}
                <div className="mt-6 text-center">
                    <Link
                        href={route('register', { type: userType })}
                        className="text-sm text-gray-600 hover:text-gray-800 hover:underline"
                    >
                        Sign Up
                    </Link>
                </div>
            </div>
        </AuthLayout>
    );
}
