import CookevillePage from "@/components/sections/frontend/cookeville/cookeville-page";
import { Hero } from "@/components/sections/frontend/hero";
import FrontendLayout from "@/layouts/frontend-layout";
import { City } from "@/types";

export default function LivingInCookeville({city}: {city: City}) {
    return (
        <div>
            <FrontendLayout>
                {/* <Hero />
            <MovingToChattanooga />
            <ChattanoogaLocated />
            <CostOfLiving /> */}

                <Hero
                    slides={[
                        '/assets/images/Introduction_to_Cookevilles_Family_Appeal.jpg',
                    ]}
                    
                    title={<>Living in Cookeville, Tennessee</>}
                    description={
                        <>
                            Cookeville, Tennessee is a charming Middle Tennessee city known for its affordable housing, relaxed pace of life, and proximity to outdoor recreation. Home to Tennessee Tech University, Cookeville blends small-town friendliness with modern conveniences, making it attractive to families, retirees, students, and remote workers
                        </>
                    }
                    width="max-w-3xl"
                />
                <CookevillePage city={city}/>
            </FrontendLayout>
        </div>
    );
}
