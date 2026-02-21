import { Hero } from '@/components/sections/frontend/hero';
import NashvillePage from '@/components/sections/frontend/nashville/nashville-page';
import FrontendLayout from '@/layouts/frontend-layout';
import { City } from '@/types';

export default function LivingInNashville({ city }: { city: City }) {
    return (
        <FrontendLayout activePage="city" subPage="Nashville" >
            {/* <Hero />
            <MovingToChattanooga />
            <ChattanoogaLocated />
            <CostOfLiving /> */}

            <Hero
                slides={[
                    '/assets/images/hero_Nashville_Skyline_with_stadium1-scaled.jpeg',
                ]}
                title={<>Living in Nashville, Tennessee</>}
                description={
                    <>
                        Homes, Cost of Living, Neighborhoods & Career
                        Opportunities Nashville, Tennessee—often called Music
                        City—is one of the fastest-growing metros in the U.S.
                        Known for its booming job market, vibrant culture, and
                        diverse neighborhoods, Nashville attracts professionals,
                        families, entrepreneurs, and creatives from across the
                        country.
                    </>
                }
                width="max-w-3xl"
            />
            <NashvillePage city={city} />
        </FrontendLayout>
    );
}
