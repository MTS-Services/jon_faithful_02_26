import { Hero } from '@/components/sections/frontend/hero';
import KingsportPage from '@/components/sections/frontend/kingsport/kingsport-page';
import FrontendLayout from '@/layouts/frontend-layout';
import { City } from '@/types';

export default function LivingInKingsport({ city }: { city: City }) {
    return (
        <div>
            <FrontendLayout>
                <Hero
                    slides={[
                        '/assets/images/KINGSPORT_-TN_-USA-8-APRIL-2021-The-Citizens-Bank-building_-originally-the-Kingsport-train-station_--scaled.jpg',
                    ]}
                    title={<>Living in Kingsport, Tennessee</>}
                    description={
                        <>
                            Homes, Cost of Living, Neighborhoods &
                            Family-Friendly Living Kingsport, Tennessee is a
                            quiet, affordable city in the Tri-Cities region of
                            Northeast Tennessee, known for its strong schools,
                            safe neighborhoods, and low cost of living. It’s a
                            popular choice for families, retirees, and buyers
                            seeking value without sacrificing quality of life.
                        </>
                    }
                    width="max-w-2xl"
                />
                <KingsportPage city={city} />
            </FrontendLayout>
        </div>
    );
}
