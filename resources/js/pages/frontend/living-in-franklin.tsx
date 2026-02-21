import { Hero } from '@/components/sections/frontend/hero';
import FranklinPage from '@/components/sections/frontend/living-in-franklin/franklin-page';
import FrontendLayout from '@/layouts/frontend-layout';
import { City } from '@/types';

export default function LivingInFranklin({ city }: { city: City }) {
    return (
        <div>
            <FrontendLayout activePage="city" subPage="Franklin">
                <Hero
                    slides={[
                        '/assets/images/Aerial_View_of_Franklin__Tennessee_during_Spring1-scaled.jpeg',
                    ]}
                    title={<>Living in Franklin, Tennessee</>}
                    description={
                        <>
                            Franklin, Tennessee is one of the most desirable
                            places to live in the state. Located just south of
                            Nashville, Franklin is known for its top-rated
                            schools, historic charm, upscale neighborhoods, and
                            high quality of life. It’s especially popular with
                            families, professionals, and executives relocating
                            to Middle Tennessee.
                        </>
                    }
                    width="max-w-2xl"
                />
                <FranklinPage city={city} />
            </FrontendLayout>
        </div>
    );
}
