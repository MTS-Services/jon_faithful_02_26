import { ArrowRightIcon } from 'lucide-react';
import { FaHouseUser } from 'react-icons/fa';

type CallToActionProps = {
    title: string;
    description: string;
    benefits: string[];
    buttonText: string;
};

export default function CallToActionSection(props: CallToActionProps) {
    const callToActionProps: CallToActionProps = {
        title: props.title || 'Example Title',
        description: props.description || 'Example Description',
        benefits: props.benefits || [],
        buttonText: props.buttonText,

    };

    return (
        <section className="bg-primary py-24 text-center">
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
                    {callToActionProps.benefits.map((b, i) => (
                        <div key={i} className="rounded-2xl bg-white p-8">
                            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary text-white">
                                <FaHouseUser size={28} />
                            </div>
                            <h3 className="font-semibold text-black">{b}</h3>
                        </div>
                    ))}
                </div>

                <div className="mx-auto flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 font-montserrat font-normal text-primary shadow-md">
                    <button className="inline-flex items-center justify-center text-center whitespace-nowrap">
                        {callToActionProps.buttonText}
                    </button>
                    <ArrowRightIcon />
                </div>
            </div>
        </section>
    );
}
