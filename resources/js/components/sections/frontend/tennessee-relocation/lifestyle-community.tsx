import React from 'react'

export default function LifestyleCommunity() {
  return (
<div className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
    <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10">

            <div className="bg-background rounded-xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-md">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-montserrat mb-4 sm:mb-5 md:mb-6 text-primary">
                    Lifestyle & Community
                </h2>
                <p className="text-sm sm:text-base font-normal font-montserrat mb-4 sm:mb-5 text-primary">
                    Tennessee is known for:
                </p>
                <ul className="mb-4 sm:mb-5 md:mb-6 space-y-2 sm:space-y-2.5">
                    <li className="flex items-start sm:items-center gap-2 sm:gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-1.5 sm:mt-0"></span>
                        <span className="text-sm sm:text-base text-muted-foreground">Friendly communities</span>
                    </li>
                    <li className="flex items-start sm:items-center gap-2 sm:gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-1.5 sm:mt-0"></span>
                        <span className="text-sm sm:text-base text-muted-foreground">Outdoor recreation</span>
                    </li>
                    <li className="flex items-start sm:items-center gap-2 sm:gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-1.5 sm:mt-0"></span>
                        <span className="text-sm sm:text-base text-muted-foreground">Music and culture</span>
                    </li>
                    <li className="flex items-start sm:items-center gap-2 sm:gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-1.5 sm:mt-0"></span>
                        <span className="text-sm sm:text-base text-muted-foreground">Strong sense of local pride</span>
                    </li>
                </ul>
                <p className="text-sm sm:text-base font-normal font-montserrat text-primary leading-relaxed">
                    From mountain towns to growing cities, Tennessee offers something for every lifestyle.
                </p>
            </div>

            <div className="bg-background rounded-xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-md">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-montserrat mb-4 sm:mb-5 md:mb-6 text-primary">
                    Working With Local Professionals
                </h2>
                <p className="text-sm sm:text-base font-normal font-montserrat mb-4 sm:mb-5 text-primary">
                    Relocating is easier when you work with:
                </p>
                <ul className="mb-4 sm:mb-5 md:mb-6 space-y-2 sm:space-y-2.5">
                    <li className="flex items-start sm:items-center gap-2 sm:gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-1.5 sm:mt-0"></span>
                        <span className="text-sm sm:text-base text-muted-foreground">Local realtors</span>
                    </li>
                    <li className="flex items-start sm:items-center gap-2 sm:gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-1.5 sm:mt-0"></span>
                        <span className="text-sm sm:text-base text-muted-foreground">Property managers</span>
                    </li>
                    <li className="flex items-start sm:items-center gap-2 sm:gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-1.5 sm:mt-0"></span>
                        <span className="text-sm sm:text-base text-muted-foreground">Lenders familiar with Tennessee laws</span>
                    </li>
                </ul>
                <p className="text-sm sm:text-base font-normal font-montserrat text-primary leading-relaxed">
                    Many professionals help with both rentals and home purchases.
                </p>
            </div>

        </div>
    </div>
</div>
  )
}
