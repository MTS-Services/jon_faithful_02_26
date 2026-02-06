import { Link } from '@inertiajs/react';

interface UserTypeOption {
    value: string;
    label: string;
    color: string;
}

export default function Index({ user_type }: { user_type: UserTypeOption[] }) {
    console.log('user_type', user_type);
    return (
        <div>
            <div className="container mx-auto py-20">
                <div className="flex flex-col items-center justify-center gap-6 md:flex-row">

                    {user_type.map((type: any) => (
                        <Link
                            key={type.value}
                            href={route('login', { type: type.value })}
                            className="flex h-[220px] w-full max-w-sm items-center justify-center rounded-xl bg-primary px-6 text-center shadow-lg transition-all duration-300 hover:bg-secondary group"
                        >
                            <div>
                                <p className="text-lg font-semibold text-white group-hover:scale-105 transition-transform">
                                    {type.label}
                                    {type.value === 'property_owner' && (
                                        <span className="text-lg text-white/90"> (Rentals)</span>
                                    )}
                                    {type.value === 'realtor' && (
                                        <span className="text-lg text-white/90"> (Homes & Rentals)</span>
                                    )}
                                    {type.value === 'both' && (
                                        <span className="text-lg text-white/90"> (Realtor & Rentals)</span>
                                    )}</p>
                            </div>
                        </Link>
                    ))}

                </div>
            </div>
        </div>
    );
}