import '../css/app.css';
import '../css/datatable.css';

import { createInertiaApp } from '@inertiajs/react';
import { router } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { StrictMode, type ComponentType } from 'react';
import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import { Toaster } from 'sonner';

import ErrorFallback from './components/error-fallback';
import { ErrorBadge, ErrorOverlay } from './components/error-overlay';
import GlobalSeoHead from './components/global-seo-head';
import { initializeTheme } from './hooks/use-appearance';
import { GA_MEASUREMENT_ID } from './lib/analytics/gtag';
import { useTracking } from './lib/analytics/useTracking';
import { ErrorObservabilityProvider } from './lib/errors/error-context';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

function GlobalTrackingBootstrap() {
    useTracking();

    return null;
}

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: (name) =>
        Promise.resolve(
            resolvePageComponent(
                `./pages/${name}.tsx`,
                import.meta.glob('./pages/**/*.tsx'),
            ),
        ).then((module: { default: ComponentType<any> }) => {
            const Page = module.default;

            return {
                ...module,
                default: (props: any) => (
                    <>
                        <GlobalTrackingBootstrap />
                        <GlobalSeoHead />
                        <Page {...props} />
                    </>
                ),
            };
        }),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <StrictMode>
                <ErrorObservabilityProvider>
                    <ErrorBoundary
                        FallbackComponent={ErrorFallback}
                        onReset={() => {
                            // This logic resets the state of your app so the error doesn't loop
                            window.location.href = '/';
                        }}
                    >
                        <App {...props} />
                        <Toaster
                            position="top-right"
                            richColors
                            closeButton
                            expand={true}
                        />
                        <ErrorOverlay />
                        <ErrorBadge />
                    </ErrorBoundary>
                </ErrorObservabilityProvider>
            </StrictMode>,
        );
    },
    progress: {
        color: '#4B5563',
    },
    defaults: {
        future: {
            useDialogForErrorModal: true,
        },
    },
});

// This will set light / dark mode on load...
initializeTheme();

router.on('navigate', (event) => {
    if (typeof window.gtag === 'undefined' || !GA_MEASUREMENT_ID) {
        return;
    }

    window.gtag('event', 'page_view', {
        page_location: event.detail.page.url,
        page_title: document.title,
        send_to: GA_MEASUREMENT_ID,
    });
});
