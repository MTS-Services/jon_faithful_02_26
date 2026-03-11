import { Head, useForm } from '@inertiajs/react';

import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { PasswordInput } from '@/components/ui/password-input';
import { Spinner } from '@/components/ui/spinner';
import AuthLayout from '@/layouts/auth-layout';

interface ResetPasswordProps {
    token: string;
    email: string;
}

export default function ResetPassword({ token, email }: ResetPasswordProps) {
    const { data, setData, post, processing, errors } = useForm({
        password: '',
        password_confirmation: '',
        token,
        email,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/reset-password');
    };

    return (
        <AuthLayout
            title="Reset password"
            description="Please enter your new password below"
        >
            <Head title="Reset password" />

            <div className="mx-auto w-full max-w-md">
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    <div className="space-y-4">
                        <div>
                            <Label
                                htmlFor="password"
                                className="font-aktiv-grotesk text-text-title mb-2 text-sm font-normal"
                            >
                                New Password
                            </Label>
                            <PasswordInput
                                id="password"
                                name="password"
                                required
                                value={data.password}
                                onChange={(e) =>
                                    setData('password', e.target.value)
                                }
                                placeholder="8+ characters"
                                className="border-text-gray-300 block w-full appearance-none rounded-md border px-3 py-2 placeholder-gray-400 shadow-sm"
                            />
                            <InputError message={errors.password} />
                        </div>

                        <div>
                            <Label
                                htmlFor="password_confirmation"
                                className="font-aktiv-grotesk text-text-title mb-2 text-sm font-normal"
                            >
                                Confirm Password
                            </Label>
                            <PasswordInput
                                id="password_confirmation"
                                name="password_confirmation"
                                required
                                value={data.password_confirmation}
                                onChange={(e) =>
                                    setData(
                                        'password_confirmation',
                                        e.target.value,
                                    )
                                }
                                placeholder="Confirm your new password"
                                className="border-text-gray-300 block w-full appearance-none rounded-md border px-3 py-2 placeholder-gray-400 shadow-sm"
                            />
                            <InputError
                                message={errors.password_confirmation}
                            />
                        </div>
                    </div>

                    <Button
                        type="submit"
                        className={`w-full bg-secondary! py-6 text-lg hover:bg-primary! ${processing ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                        disabled={processing}
                    >
                        {processing ? (
                            <Spinner className="h-4 w-4" />
                        ) : (
                            'Reset Password'
                        )}
                    </Button>
                </form>
            </div>
        </AuthLayout>
    );
}
