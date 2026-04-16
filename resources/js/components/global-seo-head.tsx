import { Head, usePage } from '@inertiajs/react';
import { SharedData } from '@/types';

export default function GlobalSeoHead() {
    const { seo } = usePage<SharedData>().props;

    return (
        <Head>
            {seo?.title && <title>{seo.title}</title>}
            {seo?.description && <meta name="description" content={seo.description} />}
            {seo?.keywords && <meta name="keywords" content={seo.keywords} />}
            {seo?.canonical_url && <link rel="canonical" href={seo.canonical_url} />}
        </Head>
    );
}

