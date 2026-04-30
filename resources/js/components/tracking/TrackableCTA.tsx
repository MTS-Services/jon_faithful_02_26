import {
    type ButtonHTMLAttributes,
    type MouseEvent,
    type ReactNode,
} from 'react';
import { useTracking } from '@/lib/analytics/useTracking';

interface TrackableCTAProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    destination?: string;
    variant?: 'primary' | 'secondary' | 'ghost';
    children?: ReactNode;
}

export default function TrackableCTA({
    label,
    destination,
    variant = 'primary',
    onClick,
    children,
    className,
    ...props
}: TrackableCTAProps) {
    const { trackCTA } = useTracking();

    const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
        trackCTA(label, destination);
        onClick?.(event);
    };

    return (
        <button
            data-tracking-cta={label}
            data-tracking-variant={variant}
            onClick={handleClick}
            className={className}
            {...props}
        >
            {children ?? label}
        </button>
    );
}
