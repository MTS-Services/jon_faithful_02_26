import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import FrontendLayout from '@/layouts/frontend-layout';
import { Hero } from '@/components/sections/frontend/hero';
import MovingTennesseeRentingPage from '@/components/sections/frontend/moving-tennessee-renting/moving-tennessee-renting-page';

const MovingTennesseeRenting = () => {
    return (
        <FrontendLayout>
            <Hero
                slides={[
                    'assets/images/moving-tennessee-renting/moving-tennessee-renting-banner.jpeg',
                ]}
                title={<>Moving to Tennessee and Renting First:
                    A Smart Relocation Strategy</>}
                description={<>
                    Relocating to a new state is a major life decision, and for many people moving to Tennessee, renting first is the smartest way to start. Whether you’re moving for work, lifestyle, affordability, or a fresh start, renting allows you to explore Tennessee before committing to a long-term home purchase.
                    <br /> <br />
                    This guide explains why renting first makes sense, where to rent, what it costs, and how to transition from renter to homeowner once you’re ready.</>}
            />
            <MovingTennesseeRentingPage />

        </FrontendLayout>
    );
};

export default MovingTennesseeRenting;