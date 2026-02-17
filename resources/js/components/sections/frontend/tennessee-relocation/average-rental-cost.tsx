import React from 'react'

export default function AverageRentalCost() {
  return (
        <div className="bg-primary  px-4 py-12 text-center mt-20">
        <div className="container mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-[42px] font-bold font-montserrat text-background mb-5">Average Rental
                Cost in Tennessee</h2>
            <p className="text-sm sm:text-base text-background font-normal font-montserrat mb-6 sm:mb-10">Compared to the
                national average, Tennessee is 8–15% more affordable, depending on location.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
                <div className="rorounded-xl overflow-hidden shadow-md flex flex-col rounded-xl">
                    <div className="bg-secondary text-background py-3 sm:py-4 font-semibold text-lg sm:text-xl lg:text-2xl px-4">
                        Rent</div>
                    <div
                        className="bg-muted flex-1 flex items-center justify-center py-6 sm:py-10 text-sm sm:text-[25px] font-extrabold font-montserrat text-muted-foreground">
                        $220,000</div>
                </div>
                <div className="rorounded-xl overflow-hidden shadow-md flex flex-col rounded-xl">
                    <div className="bg-secondary text-background py-3 sm:py-4 font-semibold text-lg sm:text-xl lg:text-2xl px-4">
                        Utilities</div>
                    <div
                        className="bg-muted flex-1 flex items-center justify-center py-6 sm:py-10 text-sm sm:text-[25px] font-extrabold font-montserrat text-muted-foreground">
                        $900–$1,200</div>
                </div>
                <div className="rorounded-xl overflow-hidden shadow-md flex flex-col rounded-xl">
                    <div className="bg-secondary text-background py-3 sm:py-4 font-semibold text-lg sm:text-xl lg:text-2xl px-4">
                        Gas</div>
                    <div
                        className="bg-muted flex-1 flex items-center justify-center py-6 sm:py-10 text-sm sm:text-base font-normal font-montserrat text-muted-foreground">
                        Below national average</div>
                </div>
                <div className="rorounded-xl overflow-hidden shadow-md flex flex-col rounded-xl">
                    <div className="bg-secondary text-background py-3 sm:py-4 font-semibold text-lg sm:text-xl lg:text-2xl px-4">
                        Groceries</div>
                    <div
                        className="bg-muted flex-1 flex items-center justify-center py-6 sm:py-10 text-sm sm:text-base font-normal font-montserrat text-muted-foreground">
                        Moderate</div>
                </div>
                <div className="rorounded-xl overflow-hidden shadow-md flex flex-col rounded-xl">
                    <div className="bg-secondary text-background py-3 sm:py-4 font-semibold text-lg sm:text-xl lg:text-2xl px-4">
                        Property taxes</div>
                    <div
                        className="bg-muted flex-1 flex items-center justify-center py-6 sm:py-10 text-sm sm:text-base font-normal font-montserrat text-muted-foreground">
                        Very low</div>
                </div>
            </div>
        </div>
    </div>
  )
}
