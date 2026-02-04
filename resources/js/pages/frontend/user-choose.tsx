import { Hero } from '@/components/sections/frontend/hero';
import Index from '@/components/sections/frontend/user-choose';
import FrontendLayout from '@/layouts/frontend-layout';

export default function UserChoose() {
    return (
        <div>
            <FrontendLayout>
                <Hero
                    
                    slides={[
                        '/assets/images/pexels-mineiamartins-32775636-scaled.jpg',
                    ]}
                    height="h-[400px]"
                    title={
                        <div className="flex items-center justify-center text-center">
                            Select Your Role
                        </div>
                    }
                />
                <Index/>
            </FrontendLayout>
        </div>
    );
}
