import React from 'react'

export default function QuickSearch() {
  return (
        <div className="container mx-auto py-28 px-4 md:px-16 mt-20">

        <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-semibold font-montserrat text-text-secondary-foreground text-center">
            Quick Search
        </h2>
        <div className="w-full sm:w-4/5 md:w-2/3 lg:max-w-[40%] mx-auto mt-6 md:mt-8">
            <p
                className="text-center text-sm sm:text-base md:text-base lg:text-base font-normal text-text-secondary-foreground font-montserrat leading-relaxed">
                Use the filters below to explore Tennessee homes for sale. Narrow your search by city, price range,
                bedrooms, bathrooms, and property type. New listings are added regularly from trusted local realtors.
            </p>
        </div>


        <div className="max-w-[20%] mt-6 mx-auto border border-text-secondary-foreground mt-"></div>

        <div className="grid grid-cols-12 gap-6 mt-12">
            <div className="col-span-12 lg:col-span-4">
                <div className="space-y-6">
                    <div className="bg-background p-4 rounded-xl shadow">
                        <h4 className="font-semibold font-montserrat text-text-secondary-foreground mb-3">Search</h4>
                        <input type="text" placeholder="Search..."
                            className="w-full border border-text-secondary-foreground rounded-md px-4 py-3 focus:outline-none focus:ring-1" />
                    </div>

                    <div className="bg-background p-4 rounded-xl shadow font-semibold font-montserrat text-text-secondary-foreground mb-3">
                        <h4 className="font-semibold mb-3">Property City</h4>
                        <div className="space-y-2">
                            <label className="flex items-center gap-2 font-medium cursor-pointer">
                                <input type="checkbox" value="" checked /> Bristol
                            </label>
                            <label className="flex items-center gap-2 font-medium cursor-pointer">
                                <input type="checkbox" /> Chattanooga
                            </label>
                            <label className="flex items-center gap-2 font-medium cursor-pointer">
                                <input type="checkbox" /> Cookeville
                            </label>
                            <label className="flex items-center gap-2 font-medium cursor-pointer">
                                <input type="checkbox" /> Franklin
                            </label>
                            <label className="flex items-center gap-2 font-medium cursor-pointer">
                                <input type="checkbox" /> Johnson City
                            </label>
                            <label className="flex items-center gap-2 font-medium cursor-pointer">
                                <input type="checkbox" /> Kingsport
                            </label>
                            <label className="flex items-center gap-2 font-medium cursor-pointer">
                                <input type="checkbox" /> Knoxville
                            </label>
                            <label className="flex items-center gap-2 font-medium cursor-pointer">
                                <input type="checkbox" /> Memphis
                            </label>
                            <label className="flex items-center gap-2 font-medium cursor-pointer">
                                <input type="checkbox" /> Murfreesboro
                            </label>
                            <label className="flex items-center gap-2 font-medium cursor-pointer">
                                <input type="checkbox" /> Nashville
                            </label>
                        </div>
                    </div>

                    <div className="bg-background p-4 rounded-xl shadow">
                        <h4 className="font-semibold mb-3 font-montserrat text-text-secondary-foreground">Bedrooms</h4>
                        <select className="w-full border border-text-secondary-foreground rounded-md px-4 py-3">
                            <option>Select...</option>
                            <option>1+</option>
                            <option>2+</option>
                            <option>3+</option>
                        </select>
                    </div>
                    <div className="bg-background p-4 rounded-xl shadow">
                        <h4 className="font-semibold mb-3 font-montserrat text-text-secondary-foreground">Square Feet</h4>
                        <select className="w-full border border-text-secondary-foreground rounded-md px-4 py-3">
                            <option>Select...</option>
                            <option value="500">500</option>
                            <option value="750">750</option>
                            <option value="1000">1000</option>
                            <option value="1500">1500</option>
                            <option value="2000">2000</option>
                        </select>
                    </div>
                    <div className="bg-background p-4 rounded-xl shadow">
                        <h3 className="font-semibold mb-3 font-montserrat text-text-secondary-foreground">
                            Property Price
                        </h3>
                        <div className="space-y-4">
                            <input type="range" min="0" max="1000000" step="10000"
                                className="w-full h-2 bg-background rounded-lg appearance-none cursor-pointer accent-muted-foreground" />


                            <div className="flex justify-between text-sm text-muted-foreground">
                                <span>$0</span>
                                <span>$1,000,000</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-background p-4 rounded-xl shadow font-semibold font-montserrat text-text-secondary-foreground mb-3">
                        <h4 className="font-semibold mb-3">Property Type</h4>
                        <div className="space-y-2">
                            <label className="flex items-center gap-2 font-medium cursor-pointer">
                                <input type="checkbox" /> New construction communities
                            </label>
                            <label className="flex items-center gap-2 font-medium cursor-pointer">
                                <input type="checkbox" /> Rural properties & mini-farms
                            </label>
                            <label className="flex items-center gap-2 font-medium cursor-pointer">
                                <input type="checkbox" /> Single-family homes
                            </label>
                            <label className="flex items-center gap-2 font-medium cursor-pointer">
                                <input type="checkbox" /> Townhomes & condos
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-12 lg:col-span-8 mt-6">
                <div className="">
                    <p
                        className="font-semibold font-montserrat text-primary p-5 border border-primary rounded-full mb-3 inline-block cursor-pointer hover:bg-secondary hover:text-primary-foreground hover:border-transparent">
                        Property City:Nashville</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">


                    <a href="singleRental.html">
                        <div className="bg-background rounded-xl overflow-hidden shadow">
                            <div className="relative">
                                <img src="/assets/images/card.jpg" className="w-full h-[250px] object-cover" />
                                <span
                                    className="absolute top-3 left-3 bg-secondary font-semibold font-montserrat text-primary-foreground p-3 rounded-full">
                                    Platinum
                                </span>
                                <span
                                    className="absolute top-3 right-3 bg-primary font-semibold font-montserrat text-primary-foreground p-3 rounded-full">
                                    $999
                                </span>
                            </div>

                            <div className="p-4 space-y-2">
                                <h3 className="font-medium text-text-secondary-foreground text-lg">Modern Home in West Knoxville</h3>
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="flex gap-2">
                                        <svg aria-hidden="true" className="e-font-icon-svg e-fas-map-marker-alt w-4 h-4"
                                            viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z">
                                            </path>
                                        </svg>
                                        <p className="text-sm text-primary font-medium font-montserrat"> Knoxville, TN</p>
                                    </div>

                                    <div className="flex gap-2">
                                        <svg aria-hidden="true" className="e-font-icon-svg e-far-clone w-4 h-4"
                                            viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M464 0H144c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h320c26.51 0 48-21.49 48-48v-48h48c26.51 0 48-21.49 48-48V48c0-26.51-21.49-48-48-48zM362 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h42v224c0 26.51 21.49 48 48 48h224v42a6 6 0 0 1-6 6zm90-96H150a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h308a6 6 0 0 1 6 6v308a6 6 0 0 1-6 6z">
                                            </path>
                                        </svg>
                                        <p className="text-sm text-primary font-medium font-montserrat"> Knoxville, TN</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <svg aria-hidden="true" className="e-font-icon-svg e-fas-bed w-4 h-4"
                                            viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M176 256c44.11 0 80-35.89 80-80s-35.89-80-80-80-80 35.89-80 80 35.89 80 80 80zm352-128H304c-8.84 0-16 7.16-16 16v144H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v352c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-48h512v48c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V240c0-61.86-50.14-112-112-112z">
                                            </path>
                                        </svg>
                                        <p className="text-sm text-primary font-medium font-montserrat"> Knoxville, TN</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <svg aria-hidden="true" className="e-font-icon-svg e-fas-bath w-4 h-4"
                                            viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M32,384a95.4,95.4,0,0,0,32,71.09V496a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V480H384v16a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V455.09A95.4,95.4,0,0,0,480,384V336H32ZM496,256H80V69.25a21.26,21.26,0,0,1,36.28-15l19.27,19.26c-13.13,29.88-7.61,59.11,8.62,79.73l-.17.17A16,16,0,0,0,144,176l11.31,11.31a16,16,0,0,0,22.63,0L283.31,81.94a16,16,0,0,0,0-22.63L272,48a16,16,0,0,0-22.62,0l-.17.17c-20.62-16.23-49.83-21.75-79.73-8.62L150.22,20.28A69.25,69.25,0,0,0,32,69.25V256H16A16,16,0,0,0,0,272v16a16,16,0,0,0,16,16H496a16,16,0,0,0,16-16V272A16,16,0,0,0,496,256Z">
                                            </path>
                                        </svg>
                                        <p className="text-sm text-primary font-medium font-montserrat"> Knoxville, TN</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="singleRental.html">
                        <div className="bg-primary-foreground rounded-xl overflow-hidden shadow">
                            <div className="relative">
                                <img src="/assets/images/images-1.jpg" className="w-full h-[250px] object-cover" />
                                <span
                                    className="absolute top-3 left-3 bg-secondary font-semibold font-montserrat text-primary-foreground p-3 rounded-full">
                                    Platinum
                                </span>
                                <span
                                    className="absolute top-3 right-3 bg-primary font-semibold font-montserrat text-primary-foreground p-3 rounded-full">
                                    $999
                                </span>
                            </div>

                            <div className="p-4 space-y-2">
                                <h3 className="font-medium text-text-secondary-foreground text-lg">Modern Home in West Knoxville</h3>
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="flex gap-2">
                                        <svg aria-hidden="true" className="e-font-icon-svg e-fas-map-marker-alt w-4 h-4"
                                            viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z">
                                            </path>
                                        </svg>
                                        <p className="text-sm text-primary font-medium font-montserrat"> Knoxville, TN</p>
                                    </div>

                                    <div className="flex gap-2">
                                        <svg aria-hidden="true" className="e-font-icon-svg e-far-clone w-4 h-4"
                                            viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M464 0H144c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h320c26.51 0 48-21.49 48-48v-48h48c26.51 0 48-21.49 48-48V48c0-26.51-21.49-48-48-48zM362 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h42v224c0 26.51 21.49 48 48 48h224v42a6 6 0 0 1-6 6zm90-96H150a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h308a6 6 0 0 1 6 6v308a6 6 0 0 1-6 6z">
                                            </path>
                                        </svg>
                                        <p className="text-sm text-primary font-medium font-montserrat"> Knoxville, TN</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <svg aria-hidden="true" className="e-font-icon-svg e-fas-bed w-4 h-4"
                                            viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M176 256c44.11 0 80-35.89 80-80s-35.89-80-80-80-80 35.89-80 80 35.89 80 80 80zm352-128H304c-8.84 0-16 7.16-16 16v144H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v352c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-48h512v48c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V240c0-61.86-50.14-112-112-112z">
                                            </path>
                                        </svg>
                                        <p className="text-sm text-primary font-medium font-montserrat"> Knoxville, TN</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <svg aria-hidden="true" className="e-font-icon-svg e-fas-bath w-4 h-4"
                                            viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M32,384a95.4,95.4,0,0,0,32,71.09V496a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V480H384v16a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V455.09A95.4,95.4,0,0,0,480,384V336H32ZM496,256H80V69.25a21.26,21.26,0,0,1,36.28-15l19.27,19.26c-13.13,29.88-7.61,59.11,8.62,79.73l-.17.17A16,16,0,0,0,144,176l11.31,11.31a16,16,0,0,0,22.63,0L283.31,81.94a16,16,0,0,0,0-22.63L272,48a16,16,0,0,0-22.62,0l-.17.17c-20.62-16.23-49.83-21.75-79.73-8.62L150.22,20.28A69.25,69.25,0,0,0,32,69.25V256H16A16,16,0,0,0,0,272v16a16,16,0,0,0,16,16H496a16,16,0,0,0,16-16V272A16,16,0,0,0,496,256Z">
                                            </path>
                                        </svg>
                                        <p className="text-sm text-primary font-medium font-montserrat"> Knoxville, TN</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="singleRental.html">
                        <div className="bg-primary-foreground rounded-xl overflow-hidden shadow">
                            <div className="relative">
                                <img src="/assets/images/midtown-memphis-memphis-tn-3.avif" className="w-full h-[250px] object-cover" />
                                <span
                                    className="absolute top-3 left-3 bg-secondary font-semibold font-montserrat text-primary-foreground p-3 rounded-full">
                                    Platinum
                                </span>
                                <span
                                    className="absolute top-3 right-3 bg-primary font-semibold font-montserrat text-primary-foreground p-3 rounded-full">
                                    $999
                                </span>
                            </div>

                            <div className="p-4 space-y-2">
                                <h3 className="font-medium text-text-secondary-foreground text-lg">Modern Home in West Knoxville</h3>
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="flex gap-2">
                                        <svg aria-hidden="true" className="e-font-icon-svg e-fas-map-marker-alt w-4 h-4"
                                            viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z">
                                            </path>
                                        </svg>
                                        <p className="text-sm text-primary font-medium font-montserrat"> Knoxville, TN</p>
                                    </div>

                                    <div className="flex gap-2">
                                        <svg aria-hidden="true" className="e-font-icon-svg e-far-clone w-4 h-4"
                                            viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M464 0H144c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h320c26.51 0 48-21.49 48-48v-48h48c26.51 0 48-21.49 48-48V48c0-26.51-21.49-48-48-48zM362 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h42v224c0 26.51 21.49 48 48 48h224v42a6 6 0 0 1-6 6zm90-96H150a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h308a6 6 0 0 1 6 6v308a6 6 0 0 1-6 6z">
                                            </path>
                                        </svg>
                                        <p className="text-sm text-primary font-medium font-montserrat"> Knoxville, TN</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <svg aria-hidden="true" className="e-font-icon-svg e-fas-bed w-4 h-4"
                                            viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M176 256c44.11 0 80-35.89 80-80s-35.89-80-80-80-80 35.89-80 80 35.89 80 80 80zm352-128H304c-8.84 0-16 7.16-16 16v144H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v352c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-48h512v48c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V240c0-61.86-50.14-112-112-112z">
                                            </path>
                                        </svg>
                                        <p className="text-sm text-primary font-medium font-montserrat"> Knoxville, TN</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <svg aria-hidden="true" className="e-font-icon-svg e-fas-bath w-4 h-4"
                                            viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M32,384a95.4,95.4,0,0,0,32,71.09V496a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V480H384v16a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V455.09A95.4,95.4,0,0,0,480,384V336H32ZM496,256H80V69.25a21.26,21.26,0,0,1,36.28-15l19.27,19.26c-13.13,29.88-7.61,59.11,8.62,79.73l-.17.17A16,16,0,0,0,144,176l11.31,11.31a16,16,0,0,0,22.63,0L283.31,81.94a16,16,0,0,0,0-22.63L272,48a16,16,0,0,0-22.62,0l-.17.17c-20.62-16.23-49.83-21.75-79.73-8.62L150.22,20.28A69.25,69.25,0,0,0,32,69.25V256H16A16,16,0,0,0,0,272v16a16,16,0,0,0,16,16H496a16,16,0,0,0,16-16V272A16,16,0,0,0,496,256Z">
                                            </path>
                                        </svg>
                                        <p className="text-sm text-primary font-medium font-montserrat"> Knoxville, TN</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="singleRental.html">
                        <div className="bg-primary-foreground rounded-xl overflow-hidden shadow">
                            <div className="relative">
                                <img src="/assets/images/pexels-ceesz-284432587-17883719-scaled.jpg" className="w-full h-[250px] object-cover" />
                                <span
                                    className="absolute top-3 left-3 bg-secondary font-semibold font-montserrat text-primary-foreground p-3 rounded-full">
                                    Platinum
                                </span>
                                <span
                                    className="absolute top-3 right-3 bg-primary font-semibold font-montserrat text-primary-foreground p-3 rounded-full">
                                    $999
                                </span>
                            </div>

                            <div className="p-4 space-y-2">
                                <h3 className="font-medium text-text-secondary-foreground text-lg">Modern Home in West Knoxville</h3>
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="flex gap-2">
                                        <svg aria-hidden="true" className="e-font-icon-svg e-fas-map-marker-alt w-4 h-4"
                                            viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z">
                                            </path>
                                        </svg>
                                        <p className="text-sm text-primary font-medium font-montserrat"> Knoxville, TN</p>
                                    </div>

                                    <div className="flex gap-2">
                                        <svg aria-hidden="true" className="e-font-icon-svg e-far-clone w-4 h-4"
                                            viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M464 0H144c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h320c26.51 0 48-21.49 48-48v-48h48c26.51 0 48-21.49 48-48V48c0-26.51-21.49-48-48-48zM362 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h42v224c0 26.51 21.49 48 48 48h224v42a6 6 0 0 1-6 6zm90-96H150a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h308a6 6 0 0 1 6 6v308a6 6 0 0 1-6 6z">
                                            </path>
                                        </svg>
                                        <p className="text-sm text-primary font-medium font-montserrat"> Knoxville, TN</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <svg aria-hidden="true" className="e-font-icon-svg e-fas-bed w-4 h-4"
                                            viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M176 256c44.11 0 80-35.89 80-80s-35.89-80-80-80-80 35.89-80 80 35.89 80 80 80zm352-128H304c-8.84 0-16 7.16-16 16v144H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v352c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-48h512v48c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V240c0-61.86-50.14-112-112-112z">
                                            </path>
                                        </svg>
                                        <p className="text-sm text-primary font-medium font-montserrat"> Knoxville, TN</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <svg aria-hidden="true" className="e-font-icon-svg e-fas-bath w-4 h-4"
                                            viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M32,384a95.4,95.4,0,0,0,32,71.09V496a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V480H384v16a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V455.09A95.4,95.4,0,0,0,480,384V336H32ZM496,256H80V69.25a21.26,21.26,0,0,1,36.28-15l19.27,19.26c-13.13,29.88-7.61,59.11,8.62,79.73l-.17.17A16,16,0,0,0,144,176l11.31,11.31a16,16,0,0,0,22.63,0L283.31,81.94a16,16,0,0,0,0-22.63L272,48a16,16,0,0,0-22.62,0l-.17.17c-20.62-16.23-49.83-21.75-79.73-8.62L150.22,20.28A69.25,69.25,0,0,0,32,69.25V256H16A16,16,0,0,0,0,272v16a16,16,0,0,0,16,16H496a16,16,0,0,0,16-16V272A16,16,0,0,0,496,256Z">
                                            </path>
                                        </svg>
                                        <p className="text-sm text-primary font-medium font-montserrat"> Knoxville, TN</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="singleRental.html">
                        <div className="bg-primary-foreground rounded-xl overflow-hidden shadow">
                            <div className="relative">
                                <img src="/assets/istockphoto-140781367-612x612-1.jpg" className="w-full h-[250px] object-cover" />
                                <span
                                    className="absolute top-3 left-3 bg-secondary font-semibold font-montserrat text-primary-foreground p-3 rounded-full">
                                    Platinum
                                </span>
                                <span
                                    className="absolute top-3 right-3 bg-primary font-semibold font-montserrat text-primary-foreground p-3 rounded-full">
                                    $999
                                </span>
                            </div>

                            <div className="p-4 space-y-2">
                                <h3 className="font-medium text-text-secondary-foreground text-lg">Modern Home in West Knoxville</h3>
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="flex gap-2">
                                        <svg aria-hidden="true" className="e-font-icon-svg e-fas-map-marker-alt w-4 h-4"
                                            viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z">
                                            </path>
                                        </svg>
                                        <p className="text-sm text-primary font-medium font-montserrat"> Knoxville, TN</p>
                                    </div>

                                    <div className="flex gap-2">
                                        <svg aria-hidden="true" className="e-font-icon-svg e-far-clone w-4 h-4"
                                            viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M464 0H144c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h320c26.51 0 48-21.49 48-48v-48h48c26.51 0 48-21.49 48-48V48c0-26.51-21.49-48-48-48zM362 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h42v224c0 26.51 21.49 48 48 48h224v42a6 6 0 0 1-6 6zm90-96H150a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h308a6 6 0 0 1 6 6v308a6 6 0 0 1-6 6z">
                                            </path>
                                        </svg>
                                        <p className="text-sm text-primary font-medium font-montserrat"> Knoxville, TN</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <svg aria-hidden="true" className="e-font-icon-svg e-fas-bed w-4 h-4"
                                            viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M176 256c44.11 0 80-35.89 80-80s-35.89-80-80-80-80 35.89-80 80 35.89 80 80 80zm352-128H304c-8.84 0-16 7.16-16 16v144H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v352c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-48h512v48c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V240c0-61.86-50.14-112-112-112z">
                                            </path>
                                        </svg>
                                        <p className="text-sm text-primary font-medium font-montserrat"> Knoxville, TN</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <svg aria-hidden="true" className="e-font-icon-svg e-fas-bath w-4 h-4"
                                            viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M32,384a95.4,95.4,0,0,0,32,71.09V496a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V480H384v16a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V455.09A95.4,95.4,0,0,0,480,384V336H32ZM496,256H80V69.25a21.26,21.26,0,0,1,36.28-15l19.27,19.26c-13.13,29.88-7.61,59.11,8.62,79.73l-.17.17A16,16,0,0,0,144,176l11.31,11.31a16,16,0,0,0,22.63,0L283.31,81.94a16,16,0,0,0,0-22.63L272,48a16,16,0,0,0-22.62,0l-.17.17c-20.62-16.23-49.83-21.75-79.73-8.62L150.22,20.28A69.25,69.25,0,0,0,32,69.25V256H16A16,16,0,0,0,0,272v16a16,16,0,0,0,16,16H496a16,16,0,0,0,16-16V272A16,16,0,0,0,496,256Z">
                                            </path>
                                        </svg>
                                        <p className="text-sm text-primary font-medium font-montserrat"> Knoxville, TN</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="singleRental.html">
                        <div className="bg-primary-foreground rounded-xl overflow-hidden shadow">
                            <div className="relative">
                                <img src="/assets/images/card.jpg" className="w-full h-[250px] object-cover" />
                                <span
                                    className="absolute top-3 left-3 bg-secondary font-semibold font-montserrat text-primary-foreground p-3 rounded-full">
                                    Platinum
                                </span>
                                <span
                                    className="absolute top-3 right-3 bg-primary font-semibold font-montserrat text-primary-foreground p-3 rounded-full">
                                    $999
                                </span>
                            </div>

                            <div className="p-4 space-y-2">
                                <h3 className="font-medium text-text-secondary-foreground text-lg">Modern Home in West Knoxville</h3>
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="flex gap-2">
                                        <svg aria-hidden="true" className="e-font-icon-svg e-fas-map-marker-alt w-4 h-4"
                                            viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z">
                                            </path>
                                        </svg>
                                        <p className="text-sm text-primary font-medium font-montserrat"> Knoxville, TN</p>
                                    </div>

                                    <div className="flex gap-2">
                                        <svg aria-hidden="true" className="e-font-icon-svg e-far-clone w-4 h-4"
                                            viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M464 0H144c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h320c26.51 0 48-21.49 48-48v-48h48c26.51 0 48-21.49 48-48V48c0-26.51-21.49-48-48-48zM362 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h42v224c0 26.51 21.49 48 48 48h224v42a6 6 0 0 1-6 6zm90-96H150a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h308a6 6 0 0 1 6 6v308a6 6 0 0 1-6 6z">
                                            </path>
                                        </svg>
                                        <p className="text-sm text-primary font-medium font-montserrat"> Knoxville, TN</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <svg aria-hidden="true" className="e-font-icon-svg e-fas-bed w-4 h-4"
                                            viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M176 256c44.11 0 80-35.89 80-80s-35.89-80-80-80-80 35.89-80 80 35.89 80 80 80zm352-128H304c-8.84 0-16 7.16-16 16v144H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v352c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-48h512v48c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V240c0-61.86-50.14-112-112-112z">
                                            </path>
                                        </svg>
                                        <p className="text-sm text-primary font-medium font-montserrat"> Knoxville, TN</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <svg aria-hidden="true" className="e-font-icon-svg e-fas-bath w-4 h-4"
                                            viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M32,384a95.4,95.4,0,0,0,32,71.09V496a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V480H384v16a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V455.09A95.4,95.4,0,0,0,480,384V336H32ZM496,256H80V69.25a21.26,21.26,0,0,1,36.28-15l19.27,19.26c-13.13,29.88-7.61,59.11,8.62,79.73l-.17.17A16,16,0,0,0,144,176l11.31,11.31a16,16,0,0,0,22.63,0L283.31,81.94a16,16,0,0,0,0-22.63L272,48a16,16,0,0,0-22.62,0l-.17.17c-20.62-16.23-49.83-21.75-79.73-8.62L150.22,20.28A69.25,69.25,0,0,0,32,69.25V256H16A16,16,0,0,0,0,272v16a16,16,0,0,0,16,16H496a16,16,0,0,0,16-16V272A16,16,0,0,0,496,256Z">
                                            </path>
                                        </svg>
                                        <p className="text-sm text-primary font-medium font-montserrat"> Knoxville, TN</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                
                </div>
                <div className="flex items-center space-x-1 mt-5">
                    <button className="px-4 py-2 bg-secondary text-primary-foreground rounded">1</button>

                    <button className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-secondary">2</button>
                    <button className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-secondary">3</button>
                    <button className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-secondary">4</button>
                    <button className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-secondary">5</button>

                    <button className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-secondary">Next</button>
                </div>

            </div>
        </div>

    </div>
  )
}
