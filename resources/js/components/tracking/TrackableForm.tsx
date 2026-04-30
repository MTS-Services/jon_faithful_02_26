import React, { type FormEvent, type ReactNode, useEffect } from 'react';
import { useFormTracking } from '@/lib/analytics/useTracking';

interface TrackableFormProps {
    formId: string;
    formName: string;
    onSubmit: (e: FormEvent<HTMLFormElement>) => void;
    errors?: Record<string, string>;
    children: ReactNode;
    className?: string;
}

export default function TrackableForm({
    formId,
    formName,
    onSubmit,
    errors = {},
    children,
    className,
}: TrackableFormProps) {
    const { onFieldFocus, onSubmit: trackSubmit, onError } = useFormTracking(
        formId,
        formName,
    );

    useEffect(() => {
        Object.entries(errors).forEach(([field, message]) => {
            onError(field, message);
        });
    }, [errors, onError]);

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        trackSubmit();
        onSubmit(e);
    };

    return (
        <form
            id={formId}
            onSubmit={handleSubmit}
            onFocusCapture={onFieldFocus}
            className={className}
        >
            {children}
        </form>
    );
}
