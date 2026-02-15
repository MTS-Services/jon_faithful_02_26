import { PlatinumCard } from '@/components/ui/PlatinumCard';
import { Link, router } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export default function QuickSearch({ listings, cities }: any) {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCities, setSelectedCities] = useState<number[]>([]);
    const [bedrooms, setBedrooms] = useState('');
    const [bathrooms, setBathrooms] = useState('');
    const [square_feet, setSquareFeet] = useState('');
    const [property_type, setproperty_type] = useState<string[]>([]);

    // Property type options
    const propertyTypes = [
        { value: 'rural_properties_and_mini_farms', label: 'Rural properties & mini-farms' },
        { value: 'single_properties_homes', label: 'Single properties & homes' },
        { value: 'towndhomes_and_condos', label: 'Townhomes & condos' },
    ];

    // Debounce search
    useEffect(() => {
        const timer = setTimeout(() => {
            handleFilter();
        }, 500);

        return () => clearTimeout(timer);
    }, [searchTerm]);

    const handleFilter = () => {
        const filterData: any = {};

        if (searchTerm) filterData.search = searchTerm;
        if (selectedCities.length > 0)
            filterData.city = selectedCities.join(',');
        if (bedrooms) filterData.bedrooms = bedrooms;
        if (bathrooms) filterData.bathrooms = bathrooms;
        if (square_feet) filterData.square_feet = square_feet;
        if (property_type.length > 0)
            filterData.property_type = property_type.join(',');

        router.get(route('frontend.homesForSale'), filterData, {
            preserveState: true,
            preserveScroll: true,
        });
    };

    const handleCityChange = (cityId: number) => {
        const newSelectedCities = selectedCities.includes(cityId)
            ? selectedCities.filter((id) => id !== cityId)
            : [...selectedCities, cityId];

        setSelectedCities(newSelectedCities);

        // Immediate filter on city change
        const filterData: any = {};
        if (searchTerm) filterData.search = searchTerm;
        if (newSelectedCities.length > 0)
            filterData.city = newSelectedCities.join(',');
        if (bedrooms) filterData.bedrooms = bedrooms;
        if (bathrooms) filterData.bathrooms = bathrooms;
        if (square_feet) filterData.square_feet = square_feet;
        if (property_type.length > 0)
            filterData.property_type = property_type.join(',');

        router.get(route('frontend.homesForSale'), filterData, {
            preserveState: true,
            preserveScroll: true,
        });
    };

    const handlePropertyTypeChange = (type: string) => {
        const newSelectedTypes = property_type.includes(type)
            ? property_type.filter((t) => t !== type)
            : [...property_type, type];

        setproperty_type(newSelectedTypes);

        // Immediate filter on property type change
        const filterData: any = {};
        if (searchTerm) filterData.search = searchTerm;
        if (selectedCities.length > 0)
            filterData.city = selectedCities.join(',');
        if (bedrooms) filterData.bedrooms = bedrooms;
        if (bathrooms) filterData.bathrooms = bathrooms;
        if (square_feet) filterData.square_feet = square_feet;
        if (newSelectedTypes.length > 0)
            filterData.property_type = newSelectedTypes.join(',');

        router.get(route('frontend.homesForSale'), filterData, {
            preserveState: true,
            preserveScroll: true,
        });
    };

    const handleBedroomChange = (value: string) => {
        setBedrooms(value);

        const filterData: any = {};
        if (searchTerm) filterData.search = searchTerm;
        if (selectedCities.length > 0)
            filterData.city = selectedCities.join(',');
        if (value) filterData.bedrooms = value;
        if (bathrooms) filterData.bathrooms = bathrooms;
        if (square_feet) filterData.square_feet = square_feet;
        if (property_type.length > 0)
            filterData.property_type = property_type.join(',');

        router.get(route('frontend.homesForSale'), filterData, {
            preserveState: true,
            preserveScroll: true,
        });
    };

    const handleBathroomChange = (value: string) => {
        setBathrooms(value);

        const filterData: any = {};
        if (searchTerm) filterData.search = searchTerm;
        if (selectedCities.length > 0)
            filterData.city = selectedCities.join(',');
        if (bedrooms) filterData.bedrooms = bedrooms;
        if (value) filterData.bathrooms = value;
        if (square_feet) filterData.square_feet = square_feet;
        if (property_type.length > 0)
            filterData.property_type = property_type.join(',');

        router.get(route('frontend.homesForSale'), filterData, {
            preserveState: true,
            preserveScroll: true,
        });
    };

    const handleSquareFeetChange = (value: string) => {
        setSquareFeet(value);

        const filterData: any = {};
        if (searchTerm) filterData.search = searchTerm;
        if (selectedCities.length > 0)
            filterData.city = selectedCities.join(',');
        if (bedrooms) filterData.bedrooms = bedrooms;
        if (bathrooms) filterData.bathrooms = bathrooms;
        if (value) filterData.square_feet = value;
        if (property_type.length > 0)
            filterData.property_type = property_type.join(',');

        router.get(route('frontend.homesForSale'), filterData, {
            preserveState: true,
            preserveScroll: true,
        });
    };

    const getCityName = (cityId: number) => {
        return cities?.find((city: any) => city.id === cityId)?.name || '';
    };

    const getPropertyTypeLabel = (type: string) => {
        return propertyTypes.find((pt) => pt.value === type)?.label || '';
    };

    return (
        <div className="container mx-auto mt-20 px-4 py-12 sm:py-16 md:px-16 md:py-20 lg:py-28">
            <h2 className="text-center font-montserrat text-2xl font-semibold text-text-secondary-foreground sm:text-3xl md:text-4xl lg:text-[42px]">
                Quick Search
            </h2>
            <div className="mx-auto mt-6 w-full sm:w-4/5 md:mt-8 md:w-2/3 lg:max-w-[40%]">
                <p className="text-center font-montserrat text-sm leading-relaxed font-normal text-text-secondary-foreground sm:text-base md:text-base lg:text-base">
                    Use the filters below to explore Tennessee homes for sale.
                    Narrow your search by city, price range, bedrooms,
                    bathrooms, and property type. New listings are added
                    regularly from trusted local realtors.
                </p>
            </div>

            <div className="mt- mx-auto mt-6 max-w-[20%] border border-text-secondary-foreground"></div>

            <div className="mt-12 grid grid-cols-12 gap-6">
                <div className="col-span-12 lg:col-span-4">
                    <div className="space-y-6">
                        <div className="rounded-xl bg-background p-4 shadow">
                            <h4 className="mb-3 font-montserrat font-semibold text-text-secondary-foreground">
                                Search
                            </h4>
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full rounded-md border border-text-secondary-foreground px-4 py-3 focus:ring-1 focus:outline-none"
                            />
                        </div>
                        <div className="mb-3 rounded-xl bg-background p-4 font-montserrat font-semibold text-text-secondary-foreground shadow">
                            <h4 className="mb-3 font-semibold">
                                Property City
                            </h4>
                            <div className="space-y-2">
                                {cities?.map((city: any) => (
                                    <label
                                        key={city.id}
                                        className="flex cursor-pointer items-center gap-2 font-medium"
                                    >
                                        <input
                                            type="checkbox"
                                            checked={selectedCities.includes(
                                                city.id,
                                            )}
                                            onChange={() =>
                                                handleCityChange(city.id)
                                            }
                                        />
                                        {city.name}
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl bg-background p-4 shadow">
                            <h4 className="mb-3 font-montserrat font-semibold text-text-secondary-foreground">
                                Bedrooms
                            </h4>
                            <select
                                className="w-full rounded-md border border-text-secondary-foreground px-4 py-3"
                                value={bedrooms}
                                onChange={(e) =>
                                    handleBedroomChange(e.target.value)
                                }
                            >
                                <option value="">Select...</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                        <div className="rounded-xl bg-background p-4 shadow">
                            <h4 className="mb-3 font-montserrat font-semibold text-text-secondary-foreground">
                                Bathrooms
                            </h4>
                            <select
                                className="w-full rounded-md border border-text-secondary-foreground px-4 py-3"
                                value={bathrooms}
                                onChange={(e) =>
                                    handleBathroomChange(e.target.value)
                                }
                            >
                                <option value="">Select...</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                        <div className="rounded-xl bg-background p-4 shadow">
                            <h4 className="mb-3 font-montserrat font-semibold text-text-secondary-foreground">
                                Square Feet
                            </h4>
                            <select
                                className="w-full rounded-md border border-text-secondary-foreground px-4 py-3"
                                value={square_feet}
                                onChange={(e) =>
                                    handleSquareFeetChange(e.target.value)
                                }
                            >
                                <option value="">Select...</option>
                                <option value="500">500</option>
                                <option value="750">750</option>
                                <option value="1000">1000</option>
                                <option value="1500">1500</option>
                                <option value="2000">2000</option>
                            </select>
                        </div>
                        <div className="rounded-xl bg-background p-4 shadow">
                            <h3 className="mb-3 font-montserrat font-semibold text-text-secondary-foreground">
                                Property Price
                            </h3>
                            <div className="space-y-4">
                                <input
                                    type="range"
                                    min="0"
                                    max="1000000"
                                    step="10000"
                                    className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-background accent-muted-foreground"
                                />

                                <div className="flex justify-between text-sm text-muted-foreground">
                                    <span>$0</span>
                                    <span>$1,000,000</span>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3 rounded-xl bg-background p-4 font-montserrat font-semibold text-text-secondary-foreground shadow">
                            <h4 className="mb-3 font-semibold">
                                Property Type
                            </h4>
                            <div className="space-y-2">
                                {propertyTypes.map((type) => (
                                    <label
                                        key={type.value}
                                        className="flex cursor-pointer items-center gap-2 font-medium"
                                    >
                                        <input
                                            type="checkbox"
                                            checked={property_type.includes(type.value)}
                                            onChange={() => handlePropertyTypeChange(type.value)}
                                        />
                                        {type.label}
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-12 mt-6 lg:col-span-8">
                    <div className="mb-4 flex flex-wrap gap-2">
                        {searchTerm && (
                            <span className="inline-flex items-center gap-2 rounded-full border border-primary px-4 py-2 font-montserrat font-semibold text-primary">
                                Search: {searchTerm}
                                <button
                                    onClick={() => setSearchTerm('')}
                                    className="hover:text-secondary"
                                >
                                    ×
                                </button>
                            </span>
                        )}
                        {selectedCities.map((cityId) => (
                            <span
                                key={cityId}
                                className="inline-flex items-center gap-2 rounded-full border border-primary px-4 py-2 font-montserrat font-semibold text-primary"
                            >
                                City: {getCityName(cityId)}
                                <button
                                    onClick={() => handleCityChange(cityId)}
                                    className="hover:text-secondary"
                                >
                                    ×
                                </button>
                            </span>
                        ))}
                        {property_type.map((type) => (
                            <span
                                key={type}
                                className="inline-flex items-center gap-2 rounded-full border border-primary px-4 py-2 font-montserrat font-semibold text-primary"
                            >
                                {getPropertyTypeLabel(type)}
                                <button
                                    onClick={() => handlePropertyTypeChange(type)}
                                    className="hover:text-secondary"
                                >
                                    ×
                                </button>
                            </span>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-2">
                        {listings?.data?.map((listing: any) => (
                            <PlatinumCard key={listing.id} property={listing} />
                        ))}
                    </div>
                    {listings?.links && listings.links.length > 0 && (
                        <div className="mt-10 flex items-center justify-center space-x-1">
                            {listings.links.map((link: any, index: number) => {
                                const isPrevious =
                                    link.label.includes('Previous') ||
                                    link.label.includes('&laquo;');
                                const isNext =
                                    link.label.includes('Next') ||
                                    link.label.includes('&raquo;');

                                let displayLabel = link.label;
                                if (isPrevious) displayLabel = 'Previous';
                                if (isNext) displayLabel = 'Next';

                                return (
                                    <Link
                                        key={index}
                                        href={link.url || '#'}
                                        preserveScroll
                                        disabled={!link.url}
                                        className={`rounded px-4 py-2 transition-colors ${
                                            link.active
                                                ? 'bg-secondary text-primary-foreground'
                                                : 'bg-primary text-primary-foreground hover:bg-secondary'
                                        } ${!link.url ? 'cursor-not-allowed opacity-50' : ''}`}
                                    >
                                        {isPrevious || isNext
                                            ? displayLabel
                                            : link.label.replace(
                                                  /&laquo;|&raquo;/g,
                                                  '',
                                              )}
                                    </Link>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}