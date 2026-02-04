export default function RentalListings() {
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
                                    className="w-full rounded-md border border-primary px-4 py-3 focus:ring-1 focus:outline-none"
                                />
                            </div>

                            <div className="mb-3 rounded-xl bg-background p-4 font-montserrat font-semibold text-primary shadow">
                                <h4 className="mb-3 font-semibold">
                                    Rental City
                                </h4>
                                <div className="space-y-2">
                                    <label className="flex cursor-pointer items-center gap-2 font-medium">
                                        <input
                                            type="checkbox"
                                            value=""
                                            checked
                                        />{' '}
                                        Bristol
                                    </label>
                                    <label className="flex cursor-pointer items-center gap-2 font-medium">
                                        <input type="checkbox" /> Chattanooga
                                    </label>
                                    <label className="flex cursor-pointer items-center gap-2 font-medium">
                                        <input type="checkbox" /> Cookeville
                                    </label>
                                    <label className="flex cursor-pointer items-center gap-2 font-medium">
                                        <input type="checkbox" /> Franklin
                                    </label>
                                    <label className="flex cursor-pointer items-center gap-2 font-medium">
                                        <input type="checkbox" /> Johnson City
                                    </label>
                                    <label className="flex cursor-pointer items-center gap-2 font-medium">
                                        <input type="checkbox" /> Kingsport
                                    </label>
                                    <label className="flex cursor-pointer items-center gap-2 font-medium">
                                        <input type="checkbox" /> Knoxville
                                    </label>
                                    <label className="flex cursor-pointer items-center gap-2 font-medium">
                                        <input type="checkbox" /> Memphis
                                    </label>
                                    <label className="flex cursor-pointer items-center gap-2 font-medium">
                                        <input type="checkbox" /> Murfreesboro
                                    </label>
                                    <label className="flex cursor-pointer items-center gap-2 font-medium">
                                        <input type="checkbox" /> Nashville
                                    </label>
                                </div>
                            </div>

                            <div className="rounded-xl bg-background p-4 shadow">
                                <h4 className="mb-3 font-montserrat font-semibold text-primary">
                                    Bedrooms
                                </h4>
                                <select className="w-full rounded-md border border-primary px-4 py-3">
                                    <option>Select...</option>
                                    <option>1+</option>
                                    <option>2+</option>
                                    <option>3+</option>
                                </select>
                            </div>
                            <div className="rounded-xl bg-background p-4 shadow">
                                <h4 className="mb-3 font-montserrat font-semibold text-primary">
                                    Square Feet
                                </h4>
                                <select className="w-full rounded-md border border-primary px-4 py-3">
                                    <option>Select...</option>
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
                                        min="0"
                                        max="1000000"
                                        step="10000"
                                        className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-muted-foreground accent-[#858585]"
                                    />

                                    <div className="flex justify-between text-sm text-muted">
                                        <span>$0</span>
                                        <span>$1,000,000</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3 rounded-xl bg-background p-4 font-montserrat font-semibold text-primary shadow">
                                <h4 className="mb-3 font-semibold">
                                    Property Type
                                </h4>
                                <div className="space-y-2">
                                    <label className="flex cursor-pointer items-center gap-2 font-medium">
                                        <input type="checkbox" /> New
                                        construction communities
                                    </label>
                                    <label className="flex cursor-pointer items-center gap-2 font-medium">
                                        <input type="checkbox" /> Rural
                                        properties & mini-farms
                                    </label>
                                    <label className="flex cursor-pointer items-center gap-2 font-medium">
                                        <input type="checkbox" /> Single-family
                                        homes
                                    </label>
                                    <label className="flex cursor-pointer items-center gap-2 font-medium">
                                        <input type="checkbox" /> Townhomes &
                                        condos
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 mt-6 lg:col-span-8">
                        <div className="">
                            <p className="mb-3 inline-block cursor-pointer rounded-full border border-primary p-4 font-montserrat font-semibold text-primary hover:border-transparent hover:bg-secondary hover:text-primary-foreground">
                                Property City:Nashville
                            </p>
                        </div>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                            <a href="single-product">
                                <div className="overflow-hidden rounded-xl bg-background shadow">
                                    <div className="relative">
                                        <img
                                            src="/assets/images/Modern-Farmhouse.jpg"
                                            className="h-[250px] w-full object-cover"
                                        />
                                        <span className="absolute top-3 left-3 rounded-full bg-secondary p-3 font-montserrat font-semibold text-primary-foreground">
                                            Platinum
                                        </span>
                                        <span className="absolute top-3 right-3 rounded-full bg-primary p-3 font-montserrat font-semibold text-primary-foreground">
                                            $999
                                        </span>
                                    </div>

                                    <div className="space-y-2 p-4">
                                        <h3 className="text-lg font-medium text-primary">
                                            Modern Home in West Knoxville
                                        </h3>
                                        <div className="grid grid-cols-2 gap-2">
                                            <div className="flex gap-2">
                                                <svg
                                                    aria-hidden="true"
                                                    className="e-font-icon-svg e-fas-map-marker-alt h-4 w-4"
                                                    viewBox="0 0 384 512"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                                                </svg>
                                                <p className="font-montserrat text-sm font-medium text-primary">
                                                    {' '}
                                                    Knoxville, TN
                                                </p>
                                            </div>

                                            <div className="flex gap-2">
                                                <svg
                                                    aria-hidden="true"
                                                    className="e-font-icon-svg e-far-clone h-4 w-4"
                                                    viewBox="0 0 512 512"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M464 0H144c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h320c26.51 0 48-21.49 48-48v-48h48c26.51 0 48-21.49 48-48V48c0-26.51-21.49-48-48-48zM362 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h42v224c0 26.51 21.49 48 48 48h224v42a6 6 0 0 1-6 6zm90-96H150a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h308a6 6 0 0 1 6 6v308a6 6 0 0 1-6 6z"></path>
                                                </svg>
                                                <p className="font-montserrat text-sm font-medium text-primary">
                                                    {' '}
                                                    Knoxville, TN
                                                </p>
                                            </div>
                                            <div className="flex gap-2">
                                                <svg
                                                    aria-hidden="true"
                                                    className="e-font-icon-svg e-fas-bed h-4 w-4"
                                                    viewBox="0 0 640 512"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M176 256c44.11 0 80-35.89 80-80s-35.89-80-80-80-80 35.89-80 80 35.89 80 80 80zm352-128H304c-8.84 0-16 7.16-16 16v144H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v352c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-48h512v48c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V240c0-61.86-50.14-112-112-112z"></path>
                                                </svg>
                                                <p className="font-montserrat text-sm font-medium text-primary">
                                                    {' '}
                                                    Knoxville, TN
                                                </p>
                                            </div>
                                            <div className="flex gap-2">
                                                <svg
                                                    aria-hidden="true"
                                                    className="e-font-icon-svg e-fas-bath h-4 w-4"
                                                    viewBox="0 0 512 512"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M32,384a95.4,95.4,0,0,0,32,71.09V496a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V480H384v16a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V455.09A95.4,95.4,0,0,0,480,384V336H32ZM496,256H80V69.25a21.26,21.26,0,0,1,36.28-15l19.27,19.26c-13.13,29.88-7.61,59.11,8.62,79.73l-.17.17A16,16,0,0,0,144,176l11.31,11.31a16,16,0,0,0,22.63,0L283.31,81.94a16,16,0,0,0,0-22.63L272,48a16,16,0,0,0-22.62,0l-.17.17c-20.62-16.23-49.83-21.75-79.73-8.62L150.22,20.28A69.25,69.25,0,0,0,32,69.25V256H16A16,16,0,0,0,0,272v16a16,16,0,0,0,16,16H496a16,16,0,0,0,16-16V272A16,16,0,0,0,496,256Z"></path>
                                                </svg>
                                                <p className="font-montserrat text-sm font-medium text-primary">
                                                    {' '}
                                                    Knoxville, TN
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <a href="single-product">
                                <div className="overflow-hidden rounded-xl bg-background shadow">
                                    <div className="relative">
                                        <img
                                            src="/assets/images/card.jpg"
                                            className="h-[250px] w-full object-cover"
                                        />
                                        <span className="absolute top-3 left-3 rounded-full bg-secondary p-3 font-montserrat font-semibold text-primary-foreground">
                                            Platinum
                                        </span>
                                        <span className="absolute top-3 right-3 rounded-full bg-primary p-3 font-montserrat font-semibold text-primary-foreground">
                                            $999
                                        </span>
                                    </div>

                                    <div className="space-y-2 p-4">
                                        <h3 className="text-lg font-medium text-primary">
                                            Modern Home in West Knoxville
                                        </h3>
                                        <div className="grid grid-cols-2 gap-2">
                                            <div className="flex gap-2">
                                                <svg
                                                    aria-hidden="true"
                                                    className="e-font-icon-svg e-fas-map-marker-alt h-4 w-4"
                                                    viewBox="0 0 384 512"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                                                </svg>
                                                <p className="font-montserrat text-sm font-medium text-primary">
                                                    {' '}
                                                    Knoxville, TN
                                                </p>
                                            </div>

                                            <div className="flex gap-2">
                                                <svg
                                                    aria-hidden="true"
                                                    className="e-font-icon-svg e-far-clone h-4 w-4"
                                                    viewBox="0 0 512 512"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M464 0H144c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h320c26.51 0 48-21.49 48-48v-48h48c26.51 0 48-21.49 48-48V48c0-26.51-21.49-48-48-48zM362 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h42v224c0 26.51 21.49 48 48 48h224v42a6 6 0 0 1-6 6zm90-96H150a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h308a6 6 0 0 1 6 6v308a6 6 0 0 1-6 6z"></path>
                                                </svg>
                                                <p className="font-montserrat text-sm font-medium text-primary">
                                                    {' '}
                                                    Knoxville, TN
                                                </p>
                                            </div>
                                            <div className="flex gap-2">
                                                <svg
                                                    aria-hidden="true"
                                                    className="e-font-icon-svg e-fas-bed h-4 w-4"
                                                    viewBox="0 0 640 512"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M176 256c44.11 0 80-35.89 80-80s-35.89-80-80-80-80 35.89-80 80 35.89 80 80 80zm352-128H304c-8.84 0-16 7.16-16 16v144H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v352c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-48h512v48c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V240c0-61.86-50.14-112-112-112z"></path>
                                                </svg>
                                                <p className="font-montserrat text-sm font-medium text-primary">
                                                    {' '}
                                                    Knoxville, TN
                                                </p>
                                            </div>
                                            <div className="flex gap-2">
                                                <svg
                                                    aria-hidden="true"
                                                    className="e-font-icon-svg e-fas-bath h-4 w-4"
                                                    viewBox="0 0 512 512"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M32,384a95.4,95.4,0,0,0,32,71.09V496a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V480H384v16a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V455.09A95.4,95.4,0,0,0,480,384V336H32ZM496,256H80V69.25a21.26,21.26,0,0,1,36.28-15l19.27,19.26c-13.13,29.88-7.61,59.11,8.62,79.73l-.17.17A16,16,0,0,0,144,176l11.31,11.31a16,16,0,0,0,22.63,0L283.31,81.94a16,16,0,0,0,0-22.63L272,48a16,16,0,0,0-22.62,0l-.17.17c-20.62-16.23-49.83-21.75-79.73-8.62L150.22,20.28A69.25,69.25,0,0,0,32,69.25V256H16A16,16,0,0,0,0,272v16a16,16,0,0,0,16,16H496a16,16,0,0,0,16-16V272A16,16,0,0,0,496,256Z"></path>
                                                </svg>
                                                <p className="font-montserrat text-sm font-medium text-primary">
                                                    {' '}
                                                    Knoxville, TN
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <a href="single-product">
                                <div className="overflow-hidden rounded-xl bg-background shadow">
                                    <div className="relative">
                                        <img
                                            src="/assets/images/pexels-denil-35250067-2048x1365.jpg"
                                            className="h-[250px] w-full object-cover"
                                        />
                                        <span className="absolute top-3 left-3 rounded-full bg-secondary p-3 font-montserrat font-semibold text-primary-foreground">
                                            Platinum
                                        </span>
                                        <span className="absolute top-3 right-3 rounded-full bg-primary p-3 font-montserrat font-semibold text-primary-foreground">
                                            $999
                                        </span>
                                    </div>

                                    <div className="space-y-2 p-4">
                                        <h3 className="text-lg font-medium text-primary">
                                            Modern Home in West Knoxville
                                        </h3>
                                        <div className="grid grid-cols-2 gap-2">
                                            <div className="flex gap-2">
                                                <svg
                                                    aria-hidden="true"
                                                    className="e-font-icon-svg e-fas-map-marker-alt h-4 w-4"
                                                    viewBox="0 0 384 512"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                                                </svg>
                                                <p className="font-montserrat text-sm font-medium text-primary">
                                                    {' '}
                                                    Knoxville, TN
                                                </p>
                                            </div>

                                            <div className="flex gap-2">
                                                <svg
                                                    aria-hidden="true"
                                                    className="e-font-icon-svg e-far-clone h-4 w-4"
                                                    viewBox="0 0 512 512"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M464 0H144c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h320c26.51 0 48-21.49 48-48v-48h48c26.51 0 48-21.49 48-48V48c0-26.51-21.49-48-48-48zM362 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h42v224c0 26.51 21.49 48 48 48h224v42a6 6 0 0 1-6 6zm90-96H150a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h308a6 6 0 0 1 6 6v308a6 6 0 0 1-6 6z"></path>
                                                </svg>
                                                <p className="font-montserrat text-sm font-medium text-primary">
                                                    {' '}
                                                    Knoxville, TN
                                                </p>
                                            </div>
                                            <div className="flex gap-2">
                                                <svg
                                                    aria-hidden="true"
                                                    className="e-font-icon-svg e-fas-bed h-4 w-4"
                                                    viewBox="0 0 640 512"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M176 256c44.11 0 80-35.89 80-80s-35.89-80-80-80-80 35.89-80 80 35.89 80 80 80zm352-128H304c-8.84 0-16 7.16-16 16v144H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v352c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-48h512v48c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V240c0-61.86-50.14-112-112-112z"></path>
                                                </svg>
                                                <p className="font-montserrat text-sm font-medium text-primary">
                                                    {' '}
                                                    Knoxville, TN
                                                </p>
                                            </div>
                                            <div className="flex gap-2">
                                                <svg
                                                    aria-hidden="true"
                                                    className="e-font-icon-svg e-fas-bath h-4 w-4"
                                                    viewBox="0 0 512 512"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M32,384a95.4,95.4,0,0,0,32,71.09V496a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V480H384v16a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V455.09A95.4,95.4,0,0,0,480,384V336H32ZM496,256H80V69.25a21.26,21.26,0,0,1,36.28-15l19.27,19.26c-13.13,29.88-7.61,59.11,8.62,79.73l-.17.17A16,16,0,0,0,144,176l11.31,11.31a16,16,0,0,0,22.63,0L283.31,81.94a16,16,0,0,0,0-22.63L272,48a16,16,0,0,0-22.62,0l-.17.17c-20.62-16.23-49.83-21.75-79.73-8.62L150.22,20.28A69.25,69.25,0,0,0,32,69.25V256H16A16,16,0,0,0,0,272v16a16,16,0,0,0,16,16H496a16,16,0,0,0,16-16V272A16,16,0,0,0,496,256Z"></path>
                                                </svg>
                                                <p className="font-montserrat text-sm font-medium text-primary">
                                                    {' '}
                                                    Knoxville, TN
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <a href="single-product">
                                <div className="overflow-hidden rounded-xl bg-background shadow">
                                    <div className="relative">
                                        <img
                                            src="/assets/images/pexels-kelly-2350459-2048x1150.jpg"
                                            className="h-[250px] w-full object-cover"
                                        />
                                        <span className="absolute top-3 left-3 rounded-full bg-secondary p-3 font-montserrat font-semibold text-primary-foreground">
                                            Platinum
                                        </span>
                                        <span className="absolute top-3 right-3 rounded-full bg-primary p-3 font-montserrat font-semibold text-primary-foreground">
                                            $999
                                        </span>
                                    </div>

                                    <div className="space-y-2 p-4">
                                        <h3 className="text-lg font-medium text-primary">
                                            Modern Home in West Knoxville
                                        </h3>
                                        <div className="grid grid-cols-2 gap-2">
                                            <div className="flex gap-2">
                                                <svg
                                                    aria-hidden="true"
                                                    className="e-font-icon-svg e-fas-map-marker-alt h-4 w-4"
                                                    viewBox="0 0 384 512"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                                                </svg>
                                                <p className="font-montserrat text-sm font-medium text-primary">
                                                    {' '}
                                                    Knoxville, TN
                                                </p>
                                            </div>

                                            <div className="flex gap-2">
                                                <svg
                                                    aria-hidden="true"
                                                    className="e-font-icon-svg e-far-clone h-4 w-4"
                                                    viewBox="0 0 512 512"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M464 0H144c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h320c26.51 0 48-21.49 48-48v-48h48c26.51 0 48-21.49 48-48V48c0-26.51-21.49-48-48-48zM362 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h42v224c0 26.51 21.49 48 48 48h224v42a6 6 0 0 1-6 6zm90-96H150a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h308a6 6 0 0 1 6 6v308a6 6 0 0 1-6 6z"></path>
                                                </svg>
                                                <p className="font-montserrat text-sm font-medium text-primary">
                                                    {' '}
                                                    Knoxville, TN
                                                </p>
                                            </div>
                                            <div className="flex gap-2">
                                                <svg
                                                    aria-hidden="true"
                                                    className="e-font-icon-svg e-fas-bed h-4 w-4"
                                                    viewBox="0 0 640 512"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M176 256c44.11 0 80-35.89 80-80s-35.89-80-80-80-80 35.89-80 80 35.89 80 80 80zm352-128H304c-8.84 0-16 7.16-16 16v144H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v352c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-48h512v48c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V240c0-61.86-50.14-112-112-112z"></path>
                                                </svg>
                                                <p className="font-montserrat text-sm font-medium text-primary">
                                                    {' '}
                                                    Knoxville, TN
                                                </p>
                                            </div>
                                            <div className="flex gap-2">
                                                <svg
                                                    aria-hidden="true"
                                                    className="e-font-icon-svg e-fas-bath h-4 w-4"
                                                    viewBox="0 0 512 512"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M32,384a95.4,95.4,0,0,0,32,71.09V496a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V480H384v16a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V455.09A95.4,95.4,0,0,0,480,384V336H32ZM496,256H80V69.25a21.26,21.26,0,0,1,36.28-15l19.27,19.26c-13.13,29.88-7.61,59.11,8.62,79.73l-.17.17A16,16,0,0,0,144,176l11.31,11.31a16,16,0,0,0,22.63,0L283.31,81.94a16,16,0,0,0,0-22.63L272,48a16,16,0,0,0-22.62,0l-.17.17c-20.62-16.23-49.83-21.75-79.73-8.62L150.22,20.28A69.25,69.25,0,0,0,32,69.25V256H16A16,16,0,0,0,0,272v16a16,16,0,0,0,16,16H496a16,16,0,0,0,16-16V272A16,16,0,0,0,496,256Z"></path>
                                                </svg>
                                                <p className="font-montserrat text-sm font-medium text-primary">
                                                    {' '}
                                                    Knoxville, TN
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a href="single-product">
                                <div className="overflow-hidden rounded-xl bg-background shadow">
                                    <div className="relative">
                                        <img
                                            src="/assets/images/LymanEstate-scaled-1-2048x1433.jpg"
                                            className="h-[250px] w-full object-cover"
                                        />
                                        <span className="absolute top-3 left-3 rounded-full bg-secondary p-3 font-montserrat font-semibold text-primary-foreground">
                                            Platinum
                                        </span>
                                        <span className="absolute top-3 right-3 rounded-full bg-primary p-3 font-montserrat font-semibold text-primary-foreground">
                                            $999
                                        </span>
                                    </div>

                                    <div className="space-y-2 p-4">
                                        <h3 className="text-lg font-medium text-primary">
                                            Modern Home in West Knoxville
                                        </h3>
                                        <div className="grid grid-cols-2 gap-2">
                                            <div className="flex gap-2">
                                                <svg
                                                    aria-hidden="true"
                                                    className="e-font-icon-svg e-fas-map-marker-alt h-4 w-4"
                                                    viewBox="0 0 384 512"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                                                </svg>
                                                <p className="font-montserrat text-sm font-medium text-primary">
                                                    {' '}
                                                    Knoxville, TN
                                                </p>
                                            </div>

                                            <div className="flex gap-2">
                                                <svg
                                                    aria-hidden="true"
                                                    className="e-font-icon-svg e-far-clone h-4 w-4"
                                                    viewBox="0 0 512 512"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M464 0H144c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h320c26.51 0 48-21.49 48-48v-48h48c26.51 0 48-21.49 48-48V48c0-26.51-21.49-48-48-48zM362 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h42v224c0 26.51 21.49 48 48 48h224v42a6 6 0 0 1-6 6zm90-96H150a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h308a6 6 0 0 1 6 6v308a6 6 0 0 1-6 6z"></path>
                                                </svg>
                                                <p className="font-montserrat text-sm font-medium text-primary">
                                                    {' '}
                                                    Knoxville, TN
                                                </p>
                                            </div>
                                            <div className="flex gap-2">
                                                <svg
                                                    aria-hidden="true"
                                                    className="e-font-icon-svg e-fas-bed h-4 w-4"
                                                    viewBox="0 0 640 512"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M176 256c44.11 0 80-35.89 80-80s-35.89-80-80-80-80 35.89-80 80 35.89 80 80 80zm352-128H304c-8.84 0-16 7.16-16 16v144H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v352c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-48h512v48c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V240c0-61.86-50.14-112-112-112z"></path>
                                                </svg>
                                                <p className="font-montserrat text-sm font-medium text-primary">
                                                    {' '}
                                                    Knoxville, TN
                                                </p>
                                            </div>
                                            <div className="flex gap-2">
                                                <svg
                                                    aria-hidden="true"
                                                    className="e-font-icon-svg e-fas-bath h-4 w-4"
                                                    viewBox="0 0 512 512"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M32,384a95.4,95.4,0,0,0,32,71.09V496a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V480H384v16a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V455.09A95.4,95.4,0,0,0,480,384V336H32ZM496,256H80V69.25a21.26,21.26,0,0,1,36.28-15l19.27,19.26c-13.13,29.88-7.61,59.11,8.62,79.73l-.17.17A16,16,0,0,0,144,176l11.31,11.31a16,16,0,0,0,22.63,0L283.31,81.94a16,16,0,0,0,0-22.63L272,48a16,16,0,0,0-22.62,0l-.17.17c-20.62-16.23-49.83-21.75-79.73-8.62L150.22,20.28A69.25,69.25,0,0,0,32,69.25V256H16A16,16,0,0,0,0,272v16a16,16,0,0,0,16,16H496a16,16,0,0,0,16-16V272A16,16,0,0,0,496,256Z"></path>
                                                </svg>
                                                <p className="font-montserrat text-sm font-medium text-primary">
                                                    {' '}
                                                    Knoxville, TN
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <a href="single-product">
                                <div className="overflow-hidden rounded-xl bg-background shadow">
                                    <div className="relative">
                                        <img
                                            src="/assets/images/Your-Guide-to-Building-a-Home-in-a-Luxury-Gated-Community.jpg"
                                            className="h-[250px] w-full object-cover"
                                        />
                                        <span className="absolute top-3 left-3 rounded-full bg-secondary p-3 font-montserrat font-semibold text-primary-foreground">
                                            Platinum
                                        </span>
                                        <span className="absolute top-3 right-3 rounded-full bg-primary p-3 font-montserrat font-semibold text-primary-foreground">
                                            $999
                                        </span>
                                    </div>

                                    <div className="space-y-2 p-4">
                                        <h3 className="text-lg font-medium text-primary">
                                            Modern Home in West Knoxville
                                        </h3>
                                        <div className="grid grid-cols-2 gap-2">
                                            <div className="flex gap-2">
                                                <svg
                                                    aria-hidden="true"
                                                    className="e-font-icon-svg e-fas-map-marker-alt h-4 w-4"
                                                    viewBox="0 0 384 512"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                                                </svg>
                                                <p className="font-montserrat text-sm font-medium text-primary">
                                                    {' '}
                                                    Knoxville, TN
                                                </p>
                                            </div>

                                            <div className="flex gap-2">
                                                <svg
                                                    aria-hidden="true"
                                                    className="e-font-icon-svg e-far-clone h-4 w-4"
                                                    viewBox="0 0 512 512"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M464 0H144c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h320c26.51 0 48-21.49 48-48v-48h48c26.51 0 48-21.49 48-48V48c0-26.51-21.49-48-48-48zM362 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h42v224c0 26.51 21.49 48 48 48h224v42a6 6 0 0 1-6 6zm90-96H150a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h308a6 6 0 0 1 6 6v308a6 6 0 0 1-6 6z"></path>
                                                </svg>
                                                <p className="font-montserrat text-sm font-medium text-primary">
                                                    {' '}
                                                    Knoxville, TN
                                                </p>
                                            </div>
                                            <div className="flex gap-2">
                                                <svg
                                                    aria-hidden="true"
                                                    className="e-font-icon-svg e-fas-bed h-4 w-4"
                                                    viewBox="0 0 640 512"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M176 256c44.11 0 80-35.89 80-80s-35.89-80-80-80-80 35.89-80 80 35.89 80 80 80zm352-128H304c-8.84 0-16 7.16-16 16v144H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v352c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-48h512v48c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V240c0-61.86-50.14-112-112-112z"></path>
                                                </svg>
                                                <p className="font-montserrat text-sm font-medium text-primary">
                                                    {' '}
                                                    Knoxville, TN
                                                </p>
                                            </div>
                                            <div className="flex gap-2">
                                                <svg
                                                    aria-hidden="true"
                                                    className="e-font-icon-svg e-fas-bath h-4 w-4"
                                                    viewBox="0 0 512 512"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M32,384a95.4,95.4,0,0,0,32,71.09V496a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V480H384v16a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V455.09A95.4,95.4,0,0,0,480,384V336H32ZM496,256H80V69.25a21.26,21.26,0,0,1,36.28-15l19.27,19.26c-13.13,29.88-7.61,59.11,8.62,79.73l-.17.17A16,16,0,0,0,144,176l11.31,11.31a16,16,0,0,0,22.63,0L283.31,81.94a16,16,0,0,0,0-22.63L272,48a16,16,0,0,0-22.62,0l-.17.17c-20.62-16.23-49.83-21.75-79.73-8.62L150.22,20.28A69.25,69.25,0,0,0,32,69.25V256H16A16,16,0,0,0,0,272v16a16,16,0,0,0,16,16H496a16,16,0,0,0,16-16V272A16,16,0,0,0,496,256Z"></path>
                                                </svg>
                                                <p className="font-montserrat text-sm font-medium text-primary">
                                                    {' '}
                                                    Knoxville, TN
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="mt-5 flex items-center space-x-1">
                            <button className="rounded bg-secondary px-4 py-2 text-primary-foreground">
                                1
                            </button>

                            <button className="rounded bg-primary px-4 py-2 text-primary-foreground hover:bg-secondary">
                                2
                            </button>
                            <button className="rounded bg-primary px-4 py-2 text-primary-foreground hover:bg-secondary">
                                3
                            </button>
                            <button className="rounded bg-primary px-4 py-2 text-primary-foreground hover:bg-secondary">
                                4
                            </button>
                            <button className="rounded bg-primary px-4 py-2 text-primary-foreground hover:bg-secondary">
                                5
                            </button>

                            <button className="rounded bg-primary px-4 py-2 text-primary-foreground hover:bg-secondary">
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
