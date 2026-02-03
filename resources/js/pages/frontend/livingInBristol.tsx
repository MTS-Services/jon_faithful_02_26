import BristolPage from '@/components/sections/frontend/livingIn-bristol/BristolPage'
import Living from '@/components/sections/frontend/livingIn-bristol/living'
import FrontendLayout from '@/layouts/frontend-layout'

export default function LivingInBristol() {
    return (
        <FrontendLayout>
            <Living />
            <BristolPage />
        </FrontendLayout>
    )
}