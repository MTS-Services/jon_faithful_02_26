import { Hero } from '@/components/sections/frontend/hero'
import MovingChecklistPage from '@/components/sections/frontend/moving-checklist/moving-checklist-page'
import FrontendLayout from '@/layouts/frontend-layout'

export default function MovingChecklist() {
    return (
        <FrontendLayout>
            <Hero
                slides={[
                    "assets/images/moving-checklist/moving-banner.jpeg",
                ]}
                title={
                    <>
                        Moving to Tennessee Checklist
                    </>
                }
                description={
                    <>
                        Moving to Tennessee is an exciting decision, but a successful relocation starts with the right plan. Whether you’re moving from another state or relocating within Tennessee, this complete moving checklist will help you stay organized, reduce stress, and avoid costly mistakes. Use this Tennessee moving checklist to prepare before, during, and after your move.
                    </>
                }
            />
            <MovingChecklistPage />
        </FrontendLayout>
    )
}
