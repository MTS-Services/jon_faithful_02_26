import { Form, Head } from '@inertiajs/react';

import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import AuthLayout from '@/layouts/auth-layout';

export default function ForgotPassword({ status }: { status?: string }) {
    return (
        <AuthLayout
            title="Forgot password"
            description="We'll send you a link to reset your password."
        >
            <Head title="Forgot password" />

            <div className="mx-auto w-full max-w-md rounded-2xl">
                {status && (
                    <div className="mb-6 rounded-lg bg-emerald-500/10 p-3 text-center text-sm font-medium text-emerald-600 dark:text-emerald-400">
                        {status}
                    </div>
                )}

                <Form
                    method="post"
                    action={route('forgot-password.post')}
                    className="space-y-6"
                >
                    {({ processing, errors }) => (
                        <>
                            <div className="grid gap-2">
                                <Label
                                    htmlFor="email"
                                    className="font-aktiv-grotesk text-text-title text-sm font-normal"
                                >
                                    Email Address
                                </Label>
                                <Input
                                    id="email"
                                    type="email"
                                    name="email"
                                    autoFocus
                                    placeholder="name@company.com"
                                    className="border-text-gray-300 block w-full appearance-none rounded-md border px-3 py-2 placeholder-gray-400 shadow-sm"
                                />
                                <InputError message={errors.email} />
                            </div>

                            <Button
                                type="submit"
                                className={`w-full bg-secondary! py-6 text-lg hover:bg-primary! ${processing ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                                disabled={processing}
                            >
                                {processing ? (
                                    <Spinner className="h-4 w-4" />
                                ) : (
                                    'Send Code'
                                )}
                            </Button>
                        </>
                    )}
                </Form>
            </div>
        </AuthLayout>
    );
}
