import { FaMapMarkerAlt } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';


type CityItem = {
    name: string;
    route: string;
};
type property = {
    title?: string;
    description?: string;
    cities?: CityItem[];
    rightTitle?: string;
    points?: string[]; // UL list
    footer?: string;
};

export default function FinalInfoSection({ property }: { property: property }) {
    const { title, description, cities, rightTitle, points, footer } = property;
    // const citiesList = cities || [
    //    { name: 'Johnson City, TN', route: route('frontend.city', { city: 'johnson-city' }) },
    //     { name: 'Kingsport, TN',    route: route('frontend.city', { city: 'kingsport' }) },
    //     { name: 'Memphis, TN',      route: route('frontend.city', { city: 'memphis' }) },
    //     { name: 'Nashville, TN',    route: route('frontend.city', { city: 'nashville' }) },
    //     { name: 'Chattanooga, TN',  route: route('frontend.city', { city: 'chattanooga' }) },
    // ];

    return (
        <section className="bg-slate-50 py-20">
            <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
                <div className="rounded-3xl bg-white p-5 md:p-10">
                    <h2 className="mb-6 text-3xl font-medium md:text-[40px]">
                        {title}
                    </h2>
                    <p className="text-[#000]">{description}</p>

                    {/* dynamic list */}
                    {points && points.length > 0 && (
                        <ul className="mt-4 list-disc space-y-1 pl-6">
                            {points.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    )}

                    {/* dynamic paragraph */}
                    {footer && (
                        <p className="mt-4 text-[#000]">{footer}</p>
                    )}
                </div>

                <div className="rounded-3xl bg-white p-5 md:p-10">
                    <h2 className="mb-6 text-3xl font-medium md:text-[40px]">
                        {rightTitle}
                    </h2>

                    <div className="mb-8 grid grid-cols-2 gap-4">
                        {cities?.map((city) => (
                            <a
                                key={city.name}
                                href={city.route}
                                className="flex gap-3 rounded-xl bg-slate-50 p-3 hover:bg-slate-100 transition-colors"
                            >
                                <FaMapMarkerAlt className="text-secondary" />
                                {city.name}
                            </a>
                        ))}
                    </div>

                    {/* <div className="mb-8 grid grid-cols-2 gap-4">
                        {citiesList.map((city) => (
                            <div
                                key={city}
                                className="flex gap-3 rounded-xl bg-slate-50 p-3"
                            >
                                <FaMapMarkerAlt className="text-secondary" />
                                {city}
                            </div>
                        ))}
                    </div> */}

                    <a
                        href={route('frontend.livetennessee')}
                        className="sm:p-auto flex items-center justify-center gap-2 rounded-xl bg-slate-900 p-3 py-4 text-white"
                    >
                        See Best Places in Tennessee <HiArrowRight />
                    </a>
                </div>
            </div>
        </section>
    );
}
