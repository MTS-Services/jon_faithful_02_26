import ClarksvillePage from '@/components/sections/frontend/clarksville/clarksville-page';
import { Hero } from '@/components/sections/frontend/hero';
import FrontendLayout from '@/layouts/frontend-layout';
import { City } from '@/types';

export default function LivingInClarksville({ city }: { city: City }) {
    return (
        <div>
            <FrontendLayout>
                <Hero
                    slides={['/assets/images/Aerial-View-over-the-Buildings-and-Infrastructure-in-Clarksville-Tennessee-scaled.jpeg']}
                    title={<>Living in Clarksville, Tennessee</>}
                    description={
                        <>
                            Living in Clarksville, Tennessee Clarksville,
                            Tennessee is one of the fastest-growing cities in
                            the state, known for its affordable housing, strong
                            job base, and military-friendly community. Located
                            near Fort Campbell and within commuting distance of
                            Nashville, Clarksville attracts families, service
                            members, veterans, and professionals relocating to
                            Middle Tennessee. Shape
                        </>
                    }
                />
                <ClarksvillePage city={city} />
            </FrontendLayout>
        </div>
    );
}
