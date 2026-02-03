import { Hero } from '@/components/sections/frontend/hero';
import KnoxvillePage from '@/components/sections/frontend/knoxville/knoxville-page';
import FrontendLayout from '@/layouts/frontend-layout';

export default function LivingInKnoxville() {
    return (
        <div>
            <FrontendLayout>
                {/* <Hero />
            <MovingToChattanooga />
            <ChattanoogaLocated />
            <CostOfLiving /> */}

                <Hero
                    slides={[
                        '/assets/images/Hero-Aerial-panorama.jpeg',
                    ]}
                    title={<>Living in Knoxville, Tennessee</>}
                    description={
                        <>
                            Knoxville, Tennessee is one of the most desirable
                            places to live in the Southeast — offering
                            affordable housing, a strong job market, and
                            immediate access to the Great Smoky Mountains.
                            Whether you’re relocating for work, family,
                            retirement, or lifestyle, Knoxville delivers a
                            balance of opportunity and quality of life that’s
                            hard to beat.
                        </>
                    }
                />
                <KnoxvillePage />
            </FrontendLayout>
        </div>
    );
}
