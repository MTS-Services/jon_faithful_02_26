import type { GA4EventName, GA4EventParams } from './events';

declare global {
    interface Window {
        gtag?: (...args: unknown[]) => void;
        dataLayer?: unknown[];
    }
}

export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

export function trackEvent<T extends GA4EventName>(
    eventName: T,
    params: GA4EventParams[T],
): void {
    sendToBackend(eventName, params);

    if (typeof window === 'undefined' || !window.gtag || !GA_MEASUREMENT_ID) {
        return;
    }

    window.gtag('event', eventName, {
        ...params,
        send_to: GA_MEASUREMENT_ID,
    });
}

async function sendToBackend(
    eventName: string,
    params: Record<string, unknown>,
): Promise<void> {
    if (typeof window === 'undefined') {
        return;
    }

    try {
        await fetch('/api/analytics/event', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN':
                    document.querySelector<HTMLMetaElement>(
                        'meta[name="csrf-token"]',
                    )?.content ?? '',
            },
            body: JSON.stringify({ event_name: eventName, params }),
        });
    } catch {
        // Analytics should never block user interactions.
    }
}
