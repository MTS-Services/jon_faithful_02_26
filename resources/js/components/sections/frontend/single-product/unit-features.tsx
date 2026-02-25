interface Feature {
    id: number;
    name: string;
    feature_category?: {
        id: number;
        name: string;
    } | null;
}

interface UnitFeaturesProps {
    features: Feature[];
}

export default function UnitFeatures({ features }: UnitFeaturesProps) {
    if (!features || features.length === 0) {
        return (
            <div className="px-4">
                <h3 className="mb-4 text-xl font-bold text-text-muted md:text-2xl">Unit Features</h3>
                <p className="font-montserrat text-sm font-semibold text-secondary-foreground md:text-base">
                    No features available
                </p>
            </div>
        );
    }

    // Group features by category name
    const grouped = features.reduce(
        (acc, feature) => {
            const cat = feature.feature_category?.name ?? 'Other';
            if (!acc[cat]) acc[cat] = [];
            acc[cat].push(feature);
            return acc;
        },
        {} as Record<string, Feature[]>,
    );

    const categories = Object.keys(grouped);

    // Split categories into left and right columns
    const half = Math.ceil(categories.length / 2);
    const leftCategories = categories.slice(0, half);
    const rightCategories = categories.slice(half);

    return (
        <div className="px-4">
            <h3 className="mb-6 text-xl font-bold md:text-2xl">
                Unit Features:
            </h3>

            <div className="grid grid-cols-1 gap-x-12 gap-y-6 sm:grid-cols-2">
                {/* Left Column */}
                <div className="space-y-6">
                    {leftCategories.map((cat) => (
                        <CategoryBlock key={cat} name={cat} features={grouped[cat]} />
                    ))}
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                    {rightCategories.map((cat) => (
                        <CategoryBlock key={cat} name={cat} features={grouped[cat]} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function CategoryBlock({ name, features }: { name: string; features: Feature[] }) {
    return (
        <div>
            {/* Category heading - bold like the screenshot */}
            <h4 className="mb-2 font-montserrat text-base font-bold text-secondary-foreground md:text-lg">
                {name}
            </h4>

            {/* Feature list with bullet points */}
            <ul className="space-y-1.5 pl-1">
                {features.map((feature) => (
                    <li key={feature.id} className="flex items-start gap-2">
                        {/* Bullet dot */}
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary-foreground/60" />
                        <span className="font-montserrat text-sm text-secondary-foreground md:text-base">
                            {feature.name}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}