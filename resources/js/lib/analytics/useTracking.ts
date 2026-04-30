import { useCallback, useEffect, useRef } from 'react';
import { usePage } from '@inertiajs/react';
import { trackEvent } from '@/lib/analytics/gtag';

export function useTracking() {
    const { url } = usePage();

    useEffect(() => {
        const depths = new Set<number>();
        const thresholds = [25, 50, 75, 90, 100] as const;

        const onScroll = (): void => {
            const maxScrollableHeight =
                document.body.scrollHeight - window.innerHeight;

            if (maxScrollableHeight <= 0) {
                return;
            }

            const scrolled = (window.scrollY / maxScrollableHeight) * 100;

            for (const threshold of thresholds) {
                if (scrolled >= threshold && !depths.has(threshold)) {
                    depths.add(threshold);
                    trackEvent('scroll_depth', {
                        depth_percentage: threshold,
                        page_location: url,
                    });
                }
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, [url]);

    useEffect(() => {
        const start = Date.now();

        return () => {
            const seconds = Math.round((Date.now() - start) / 1000);

            if (seconds > 5) {
                trackEvent('page_engagement', {
                    engaged_seconds: seconds,
                    page_location: url,
                });
            }
        };
    }, [url]);

    const trackCTA = useCallback(
        (text: string, destination?: string) => {
            trackEvent('cta_click', {
                cta_text: text,
                cta_location: url,
                destination_url: destination,
            });
        },
        [url],
    );

    const trackOutboundClick = useCallback((linkUrl: string, linkText: string) => {
        trackEvent('outbound_click', {
            link_url: linkUrl,
            link_text: linkText,
        });
    }, []);

    return { trackCTA, trackOutboundClick };
}

export function useFormTracking(formId: string, formName: string) {
    const startTimeRef = useRef<number | null>(null);
    const hasStartedRef = useRef(false);

    const onFieldFocus = useCallback(() => {
        if (hasStartedRef.current) {
            return;
        }

        hasStartedRef.current = true;
        startTimeRef.current = Date.now();

        trackEvent('form_start', {
            form_id: formId,
            form_name: formName,
            page_location: window.location.pathname,
        });
    }, [formId, formName]);

    const onSubmit = useCallback(() => {
        const seconds = startTimeRef.current
            ? Math.round((Date.now() - startTimeRef.current) / 1000)
            : 0;

        trackEvent('form_submit', {
            form_id: formId,
            form_name: formName,
            submission_time_seconds: seconds,
        });
    }, [formId, formName]);

    const onError = useCallback(
        (field: string, message: string) => {
            trackEvent('form_error', {
                form_id: formId,
                error_field: field,
                error_message: message,
            });
        },
        [formId],
    );

    return { onFieldFocus, onSubmit, onError };
}
