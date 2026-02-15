import { Link } from '@inertiajs/react';
import React from 'react';

type ExploreCity = {
    icon?: React.ComponentType<{ size?: number | string; className?: string }>;
    city?: string;
    desc: string;
    button: string;
};

interface Props {
    exploreCities: ExploreCity[];
}

export default function ExploreRentalCities({ exploreCities }: Props) {
    return (
        <>
            {exploreCities.map((item, i) => {
                const Icon = item.icon;

                return (
                    <div
                        key={i}
                        className="rounded-lg border p-6 text-center transition hover:shadow-lg"
                    >
                        {Icon && (
                            <Icon
                                size={40}
                                className="mx-auto mb-4 text-blue-900"
                            />
                        )}

                        <h3 className="mb-2 text-lg font-bold">{item.city}</h3>

                        <p className="text-md mx-auto mb-4 w-52 text-gray-600">
                            {item.desc}
                        </p>

                        <Link href={item.href}>
                            <button className="w-full rounded bg-primary py-2 font-semibold text-white cursor-pointer">
                                {item.button}
                            </button>
                        </Link>
                    </div>
                );
            })}
        </>
    );
}
