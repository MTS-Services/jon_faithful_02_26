import React from 'react'

export default function ChattanoogaLocated() {
  return (
   
        <div
        className="bg-[#fdf9f3] p-6 sm:p-8 md:p-16 rounded-t-[40px] flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mt-20">
        <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-md">
            <iframe className="w-full h-56 sm:h-72 md:h-[400px]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102922.38339879946!2d-82.25368305005886!3d36.591242371424645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885a9ee699478f6d%3A0x64f8d9753e8d91b9!2sBristol%2C%20TN!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                loading="lazy">
            </iframe>
        </div>

        <div className="w-full lg:w-1/2 space-y-5 lg:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-[42px] font-bold font-montserrat text-text-primary">Where Is Chattanooga Located?</h2>
            <p className="text-text-primary text-sm sm:text-base font-montserrat font-normal">
                Chattanooga is located in Southeast Tennessee, along the Tennessee River and at the foothills of the Appalachian Mountains.
            </p>

            <div className="space-y-3 lg:space-y-4 text-xl font-semibold">
                <div className="flex items-center gap-3">
                    <svg aria-hidden="true" className="e-font-icon-svg e-fas-map-marker-alt w-4 h-4 sm:w-5 sm:h-5 shrink-0"
                        viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z">
                        </path>
                    </svg>
                    <span className="text-base sm:text-lg lg:text-xl text-text-primary font-medium font-montserrat">2 hours to Nashville</span>
                </div>
                <div className="flex items-center gap-3">
                    <svg aria-hidden="true" className="e-font-icon-svg e-fas-map-marker-alt w-4 h-4 sm:w-5 sm:h-5 shrink-0"
                        viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z">
                        </path>
                    </svg>
                    <span className="text-base sm:text-lg lg:text-xl text-text-primary font-medium font-montserrat">22 hours to Knoxville</span>
                </div>
                <div className="flex items-center gap-3">
                    <svg aria-hidden="true" className="e-font-icon-svg e-fas-map-marker-alt w-4 h-4 sm:w-5 sm:h-5 shrink-0"
                        viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z">
                        </path>
                    </svg>
                    <span className="text-base sm:text-lg lg:text-xl text-text-primary font-medium font-montserrat">2 hours to Atlanta</span>
                </div>
                <div className="flex items-center gap-3">
                    <svg aria-hidden="true" className="e-font-icon-svg e-fas-map-marker-alt w-4 h-4 sm:w-5 sm:h-5 shrink-0"
                        viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z">
                        </path>
                    </svg>
                    <span className="text-base sm:text-lg lg:text-xl text-text-primary font-medium font-montserrat">Easy access to Alabama and Georgia</span>
                </div>
            </div>

            <p className="text-sm sm:text-base text-text-primary font-normal font-montserrat">
                Easy access to Alabama and Georgia
            </p>
        </div>
        </div>
  )
}
