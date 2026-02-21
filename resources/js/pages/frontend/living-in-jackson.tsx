import { Hero } from '@/components/sections/frontend/hero';
import JacksonPage from '@/components/sections/frontend/jackson/jackson-page';
import FrontendLayout from '@/layouts/frontend-layout';
import { City } from '@/types';

export default function LivingInJackson({ city }: { city: City }) {
    return (
        <div>
            <FrontendLayout activePage="city" subPage="Jackson">
                <Hero
                    slides={[
                        '/assets/images/Johnson_City-scaled.jpg',
                    ]}
                    title={<>Living in Jackson, Tennessee</>}
                    description={
                        <>
                            Jackson, Tennessee is a welcoming West Tennessee
                            city known for its affordable housing, central
                            location, and relaxed pace of life. Situated between
                            Memphis and Nashville, Jackson offers small-city
                            comfort with easy access to larger metropolitan
                            areas, making it an appealing option for families,
                            professionals, and retirees relocating to Tennessee.
                        </>
                    }
                    width="max-w-2xl"
                />
                <JacksonPage city={city} />
            </FrontendLayout>
        </div>
    );
}
