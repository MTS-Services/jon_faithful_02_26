import { Hero } from '@/components/sections/frontend/hero';
import MemphisPage from '@/components/sections/frontend/memphis/memphis-page';
import FrontendLayout from '@/layouts/frontend-layout';

export default function LivingInMemphis() {
    return (
        <div>
            <FrontendLayout>
                <Hero
                    slides={['/assets/images/Hero-Aerial-panorama.jpeg']}
                    title={<>Living in Memphis, Tennessee</>}
                    description={
                        <>
                            Memphis, Tennessee is one of the most culturally
                            rich and affordable major cities in the state. Known
                            worldwide for its music history, food scene, and
                            riverfront setting, Memphis offers some of the
                            lowest home prices in Tennessee while still
                            providing big-city amenities and opportunity.
                        </>
                    }
                    width="max-w-2xl"
                />
                <MemphisPage />
            </FrontendLayout>
        </div>
    );
}
