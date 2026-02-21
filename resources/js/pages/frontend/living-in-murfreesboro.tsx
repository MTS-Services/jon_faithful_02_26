import { Hero } from '@/components/sections/frontend/hero';
import MurfreesboroPage from '@/components/sections/frontend/murfreesboro/murfreesboro-page';
import FrontendLayout from '@/layouts/frontend-layout';
import { City } from '@/types';

export default function LivingInMurfreesboro({ city }: { city: City }) {
    return (
        <div>
            <FrontendLayout activePage="city" subPage="Murfreesboro">
                <Hero
                    slides={[
                        '/assets/images/Aerial-View-of-Murfreesboro_-Tennessee-at-Sunrise-scaled.jpeg',
                    ]}
                    title={<>Living in Murfreesboro, Tennessee</>}
                    description={
                        <>
                            Homes, Cost of Living, Neighborhoods &
                            Family-Friendly Living Murfreesboro, Tennessee is
                            one of the fastest-growing cities in the state,
                            offering affordable housing, strong schools, and
                            easy access to Nashville. Located in Rutherford
                            County, Murfreesboro is especially popular with
                            families, professionals, and first-time homebuyers
                            looking for space and value.
                        </>
                    }
                    width="max-w-3xl"
                />
                <MurfreesboroPage city={city} />
            </FrontendLayout>
        </div>
    );
}
