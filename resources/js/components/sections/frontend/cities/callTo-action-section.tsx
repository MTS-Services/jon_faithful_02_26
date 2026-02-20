import { Link } from '@inertiajs/react';
import { ArrowRightIcon } from 'lucide-react';
import { ReactNode } from 'react';

type BenefitItem = {
    text: string;
    icon: ReactNode;
};
type CallToActionProps = {
    title: string;
    description: string;
    // benefits: string[];
    benefits: BenefitItem[];
    cityName: string;
    cityId: number;
};

export default function CallToActionSection(props: CallToActionProps) {
    const callToActionProps: CallToActionProps = {
        title: props.title || 'Example Title',
        description: props.description || 'Example Description',
        benefits: props.benefits || [],
        cityName: props.cityName,
        cityId: props.cityId,
    };
    const isRoute = route('frontend.rentals', { city: callToActionProps.cityId });

    return (
        <section className="bg-primary py-16 text-center">
            <div className="container mx-auto px-4">
                {/* CALL TO ACTION */}
                {callToActionProps.title && (
                    <h2 className="mb-4 text-4xl font-bold text-white">
                        {callToActionProps.title}
                    </h2>
                )}
                {callToActionProps.description && (
                    <p className="mb-16 text-xl text-slate-300">
                        {callToActionProps.description}
                    </p>
                )}

                <div className="mb-16 grid gap-8 px-6 sm:grid-cols-2 lg:grid-cols-4">
                    {/* {callToActionProps.benefits.map((b, i) => (
                        <div key={i} className="rounded-2xl bg-white p-8">
                            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary text-white">
                                <FaHouseUser size={28} />
                            </div>
                            <h3 className="font-medium text-xl text-black">{b}</h3>
                        </div>
                    ))} */}
                    {callToActionProps.benefits.map((b, i) => (
                        <div key={i} className="rounded-2xl bg-white p-8">
                            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#1f3a68] text-white">
                                {b.icon}
                            </div>

                            <h3 className="text-xl font-medium text-black">
                                {b.text}
                            </h3>
                        </div>
                    ))}
                </div>

                {/* <div className="mx-auto flex w-fit items-center gap-1 rounded-full bg-white px-4 py-2 font-montserrat font-normal text-primary shadow-md sm:gap-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3">
                    <button className="inline-flex items-center justify-center text-center text-sm whitespace-nowrap sm:text-base">
                        {callToActionProps.buttonText}
                    </button>
                    <ArrowRightIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                </div> */}
                <Link
                    href={isRoute}
                    className="mx-auto flex w-fit items-center gap-1 rounded-full bg-white px-4 py-2 font-montserrat font-normal text-primary shadow-md transition hover:scale-105 sm:gap-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3"
                >
                    <span className="inline-flex items-center justify-center text-center text-sm whitespace-nowrap sm:text-base">
                        Connect With a {callToActionProps.cityName} Realtor
                    </span>
                    <ArrowRightIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
            </div>
        </section>
    );
}
