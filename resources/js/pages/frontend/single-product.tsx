import Gallery from "@/components/sections/frontend/single-product/gallery";
import Hero from "@/components/sections/frontend/single-product/hero";
import RealatedRentalListing from "@/components/sections/frontend/single-product/realated-rental-listing";
import StartYourMove from "@/components/sections/frontend/single-product/start-your-move";
import FrontendLayout from "@/layouts/frontend-layout";

export default function SingleProduct({listing}: any) {
    console.log(listing);
    return (
        <FrontendLayout>
            {/* <Hero /> */}
            <Gallery listing={listing} />
            <RealatedRentalListing listings={[listing]} />
            <StartYourMove />
        </FrontendLayout>
    );
}
