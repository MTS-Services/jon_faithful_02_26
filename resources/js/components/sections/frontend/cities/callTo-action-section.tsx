import React from 'react';
import { FaHouseUser } from 'react-icons/fa';

type CallToActionProps = {
    title: string,
    description: string,
    benefits: string[]
};

export default function CallToActionSection(props: CallToActionProps) {

    const callToActionProps: CallToActionProps = {
        title: props.title || 'Example Title',
        description: props.description || 'Example Description',
        benefits: props.benefits || [],
    };

    return (
        <section className="py-24 bg-primary text-center">
            <div className="container mx-auto px-4">
                {/* CALL TO ACTION */}
                {callToActionProps.title && (
                    <h2 className="text-4xl font-bold mb-4 text-white">{callToActionProps.title}</h2>
                )}
                {callToActionProps.description && (
                    <p className="text-xl text-slate-300 mb-16">{callToActionProps.description}</p>
                )}

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 px-6">
                    {callToActionProps.benefits.map((b, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl">
                            <div className="bg-secondary w-16 h-16 mx-auto mb-6 rounded-2xl text-white flex items-center justify-center">
                                <FaHouseUser size={28} />
                            </div>
                            <h3 className="font-semibold text-black">{b}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}