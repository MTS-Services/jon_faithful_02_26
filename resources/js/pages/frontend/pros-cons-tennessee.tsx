import { Hero } from "@/components/sections/frontend/hero";
import ProsConsTennesseePage from "@/components/sections/frontend/pros-cons-tennessee/pros-cons-tenenssee-page";
import FrontendLayout from "@/layouts/frontend-layout";

const ProsConsTennessee = () => {
    return (
        <FrontendLayout>
            <Hero
                slides={[
                    '/assets/images/pros-cons-tennessee/pros-cons-banner.webp',
                ]}
                title={<>Pros and Cons of Living in Tennessee</>}
                description={
                    <>
                        What to Know Before Moving to Tennessee Tennessee continues to attract thousands of new residents every year thanks to its affordable living, no state income tax, and strong job markets. However, like any state, Tennessee has both advantages and drawbacks. This guide covers the real pros and cons of living in Tennessee so you can decide if it’s the right place for you.
                    </>
                }
            />
            <ProsConsTennesseePage />
        </FrontendLayout>
    );
};

export default ProsConsTennessee;
