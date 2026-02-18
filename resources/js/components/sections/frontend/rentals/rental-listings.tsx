import { PlatinumCard } from '@/components/ui/PlatinumCard';
import { Link, router } from '@inertiajs/react';
import { useCallback, useEffect, useMemo, useState } from 'react';

interface City {
    id: number;
    name: string;
}

interface RentalFilters {
    search?: string;
    city?: string;
    price_min?: string;
    price_max?: string;
    bedrooms?: string;
    bathrooms?: string;
    square_feet?: string;
    property_type?: string;
}

interface Props {
    rentals: any;
    cities: City[];
    filters?: RentalFilters;
}

const PRICE_MIN_DEFAULT = 0;
const PRICE_MAX_DEFAULT = 1000000;

export default function RentalListings({ rentals, cities, filters = {} }: Props) {
    const initialCities = useMemo(() => {
        return filters.city ? filters.city.split(',').map(Number) : [];
    }, [filters.city]);

    const initialPropertyTypes = useMemo(() => {
        return filters.property_type ? filters.property_type.split(',') : [];
    }, [filters.property_type]);

    const [searchTerm, setSearchTerm] = useState(filters.search || '');
    const [selectedCities, setSelectedCities] = useState<number[]>(initialCities);
    const [bedrooms, setBedrooms] = useState(filters.bedrooms || '');
    const [bathrooms, setBathrooms] = useState(filters.bathrooms || '');
    const [square_feet, setSquareFeet] = useState(filters.square_feet || '');
    const [property_type, setPropertyType] = useState<string[]>(initialPropertyTypes);
    const [priceMin, setPriceMin] = useState(filters.price_min || '');
    const [priceMax, setPriceMax] = useState(filters.price_max || '');
    const [isReady, setIsReady] = useState(false);

    // Property type options
    const propertyTypes = [
        { value: 'apartment', label: 'Apartments' },
        { value: 'condo', label: 'Condos' },
        { value: 'single_family_home', label: 'Single-family homes' },
        { value: 'townhome', label: 'Townhomes' },
    ];

    useEffect(() => {
        setIsReady(true);
    }, []);

    useEffect(() => {
        setSearchTerm(filters.search || '');
        setSelectedCities(initialCities);
        setBedrooms(filters.bedrooms || '');
        setBathrooms(filters.bathrooms || '');
        setSquareFeet(filters.square_feet || '');
        setPropertyType(initialPropertyTypes);
        setPriceMin(filters.price_min || '');
        setPriceMax(filters.price_max || '');
    }, [filters, initialCities, initialPropertyTypes]);

    // Debounce search & price
    useEffect(() => {
        if (!isReady) return;

        const timer = setTimeout(() => {
            handleFilter();
        }, 500);

        return () => clearTimeout(timer);
    }, [searchTerm, priceMin, priceMax, isReady]);

    const normalizedPriceMin = priceMin ? Number(priceMin) : PRICE_MIN_DEFAULT;
    const normalizedPriceMax = priceMax ? Number(priceMax) : PRICE_MAX_DEFAULT;

    const formatCurrency = (value: number) =>
        `$${value.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;

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
        if (priceMin) filterData.price_min = priceMin;
        if (priceMax) filterData.price_max = priceMax;

        router.get(route('frontend.rentals'), filterData, {
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
        if (priceMin) filterData.price_min = priceMin;
        if (priceMax) filterData.price_max = priceMax;

        router.get(route('frontend.rentals'), filterData, {
            preserveState: true,
            preserveScroll: true,
        });
    };

    const handlePropertyTypeChange = (type: string) => {
        const newSelectedTypes = property_type.includes(type)
            ? property_type.filter((t) => t !== type)
            : [...property_type, type];

        setPropertyType(newSelectedTypes);

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
        if (priceMin) filterData.price_min = priceMin;
        if (priceMax) filterData.price_max = priceMax;

        router.get(route('frontend.rentals'), filterData, {
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
        if (priceMin) filterData.price_min = priceMin;
        if (priceMax) filterData.price_max = priceMax;

        router.get(route('frontend.rentals'), filterData, {
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
        if (priceMin) filterData.price_min = priceMin;
        if (priceMax) filterData.price_max = priceMax;

        router.get(route('frontend.rentals'), filterData, {
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
        if (priceMin) filterData.price_min = priceMin;
        if (priceMax) filterData.price_max = priceMax;

        router.get(route('frontend.rentals'), filterData, {
            preserveState: true,
            preserveScroll: true,
        });
    };

    const handlePriceMinChange = useCallback((value: string) => {
        if (value === '') {
            setPriceMin('');
            return;
        }

        const sanitized = Math.max(PRICE_MIN_DEFAULT, Number(value));
        const bounded = Math.min(sanitized, PRICE_MAX_DEFAULT);
        setPriceMin(String(bounded));

        if (priceMax && Number(priceMax) < bounded) {
            setPriceMax(String(bounded));
        }
    }, [priceMax]);

    const handlePriceMaxChange = useCallback((value: string) => {
        if (value === '') {
            setPriceMax('');
            return;
        }

        const sanitized = Math.min(PRICE_MAX_DEFAULT, Number(value));
        const bounded = Math.max(sanitized, PRICE_MIN_DEFAULT);
        setPriceMax(String(bounded));

        if (priceMin && Number(priceMin) > bounded) {
            setPriceMin(String(bounded));
        }
    }, [priceMin]);

    const handlePriceClear = useCallback(() => {
        setPriceMin('');
        setPriceMax('');
    }, []);

    const getCityName = (cityId: number) => {
        return cities?.find((city: any) => city.id === cityId)?.name || '';
    };

    const getPropertyTypeLabel = (type: string) => {
        return propertyTypes.find((pt) => pt.value === type)?.label || '';
    };

    return (
        <section className="mt-20 rounded-t-[100px] bg-primary-background px-4 py-12 sm:py-16 md:px-16 md:py-20 lg:py-28">
            <div className="container mx-auto">
                <h2 className="text-center font-montserrat text-2xl font-semibold text-primary sm:text-3xl md:text-4xl lg:text-[42px]">
                    Rental Listings
                </h2>
                <div className="mt- mx-auto mt-6 max-w-[20%] border border-text-primary"></div>

                <div className="mt-12 grid grid-cols-12 gap-6">
                    <div className="col-span-12 lg:col-span-4">
                        <div className="space-y-6">
                            <div className="rounded-xl bg-background p-4 shadow">
                                <h4 className="mb-3 font-montserrat font-semibold text-primary">
                                    Search
                                </h4>
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    value={searchTerm}
                                    onChange={(e) =>
                                        setSearchTerm(e.target.value)
                                    }
                                    className="w-full rounded-md border border-primary px-4 py-3 focus:ring-1 focus:outline-none"
                                />
                            </div>

                            <div className="mb-3 rounded-xl bg-background p-4 font-montserrat font-semibold text-primary shadow">
                                <h4 className="mb-3 font-semibold">
                                    Rental City
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
                                <h4 className="mb-3 font-montserrat font-semibold text-primary">
                                    Bedrooms
                                </h4>
                                <select
                                    className="w-full rounded-md border border-primary px-4 py-3"
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
                                <h4 className="mb-3 font-montserrat font-semibold text-primary">
                                    Bathrooms
                                </h4>
                                <select
                                    className="w-full rounded-md border border-primary px-4 py-3"
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
                                <h4 className="mb-3 font-montserrat font-semibold text-primary">
                                    Square Feet
                                </h4>
                                <select
                                    className="w-full rounded-md border border-primary px-4 py-3"
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
                                <h3 className="mb-3 font-montserrat font-semibold text-primary">
                                    Property Price
                                </h3>
                                <div className="space-y-4">
                                    <input
                                        type="range"
                                        min={PRICE_MIN_DEFAULT}
                                        max={PRICE_MAX_DEFAULT}
                                        step={10000}
                                        value={normalizedPriceMax}
                                        onChange={(e) => handlePriceMaxChange(e.target.value)}
                                        className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-muted-foreground accent-[#858585]"
                                    />

                                    <div className="flex justify-between text-sm font-semibold text-muted">
                                        <span>{formatCurrency(normalizedPriceMin)}</span>
                                        <span>{formatCurrency(normalizedPriceMax)}</span>
                                    </div>

                                    <div className="flex flex-col gap-3 md:flex-row">
                                        <label className="flex w-full flex-col text-sm font-semibold text-muted">
                                            Min
                                            <input
                                                type="number"
                                                min={PRICE_MIN_DEFAULT}
                                                max={PRICE_MAX_DEFAULT}
                                                step={5000}
                                                value={priceMin}
                                                onChange={(e) => handlePriceMinChange(e.target.value)}
                                                className="mt-1 rounded-md border border-primary px-3 py-2"
                                            />
                                        </label>
                                        <label className="flex w-full flex-col text-sm font-semibold text-muted">
                                            Max
                                            <input
                                                type="number"
                                                min={PRICE_MIN_DEFAULT}
                                                max={PRICE_MAX_DEFAULT}
                                                step={5000}
                                                value={priceMax}
                                                onChange={(e) => handlePriceMaxChange(e.target.value)}
                                                className="mt-1 rounded-md border border-primary px-3 py-2"
                                            />
                                        </label>
                                    </div>

                                    {(priceMin || priceMax) && (
                                        <button
                                            type="button"
                                            onClick={handlePriceClear}
                                            className="text-sm font-semibold text-primary underline"
                                        >
                                            Clear price filter
                                        </button>
                                    )}
                                </div>
                            </div>

                            <div className="mb-3 rounded-xl bg-background p-4 font-montserrat font-semibold text-primary shadow">
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
                                                checked={property_type.includes(
                                                    type.value,
                                                )}
                                                onChange={() =>
                                                    handlePropertyTypeChange(
                                                        type.value,
                                                    )
                                                }
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
                                        onClick={() =>
                                            handlePropertyTypeChange(type)
                                        }
                                        className="hover:text-secondary"
                                    >
                                        ×
                                    </button>
                                </span>
                            ))}
                            {(priceMin || priceMax) && (
                                <span className="inline-flex items-center gap-2 rounded-full border border-primary px-4 py-2 font-montserrat font-semibold text-primary">
                                    Price: {formatCurrency(Number(priceMin || PRICE_MIN_DEFAULT))} - {formatCurrency(Number(priceMax || PRICE_MAX_DEFAULT))}
                                    <button onClick={handlePriceClear} className="hover:text-secondary">
                                        ×
                                    </button>
                                </span>
                            )}
                        </div>

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                            {rentals?.data?.map((rental: any) => (
                                <PlatinumCard
                                    key={rental.id}
                                    property={rental}
                                />
                            ))}
                        </div>

                        {rentals?.links && rentals.links.length > 0 && (
                            <div className="mt-10 flex items-center justify-center space-x-1">
                                {rentals.links.map(
                                    (link: any, index: number) => {
                                        const isPrevious =
                                            link.label.includes('Previous') ||
                                            link.label.includes('&laquo;');
                                        const isNext =
                                            link.label.includes('Next') ||
                                            link.label.includes('&raquo;');

                                        let displayLabel = link.label;
                                        if (isPrevious)
                                            displayLabel = 'Previous';
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
                                    },
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
