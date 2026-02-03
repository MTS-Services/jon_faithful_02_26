import ChattanoogaPage from '@/components/sections/frontend/chattanooga/chattanooga-page';
import { Hero } from '@/components/sections/frontend/hero';
import FrontendLayout from '@/layouts/frontend-layout';

export default function LivingInChattanooga() {
    return (
        <FrontendLayout>
            {/* <Hero />
            <MovingToChattanooga />
            <ChattanoogaLocated />
            <CostOfLiving /> */}

            <Hero
                slides={[
                    '/assets/images/Aerial-View-of-Chattanooga-Tennessee-TN (1).jpeg',
                ]}
                title={<>Living in Chattanooga, Tennessee</>}
                description={
                    <>
                        Homes, Cost of Living, Neighborhoods & Outdoor Lifestyle
                        Chattanooga, Tennessee is one of the most scenic and
                        fast-growing cities in the Southeast. Known for its
                        mountains, riverfront living, and outdoor lifestyle,
                        Chattanooga blends natural beauty with a revitalized
                        downtown and growing job market. It’s a top choice for
                        professionals, families, and outdoor enthusiasts
                        relocating to Tennessee. .
                    </>
                }
            />
            <ChattanoogaPage />
        </FrontendLayout>
    );
}


