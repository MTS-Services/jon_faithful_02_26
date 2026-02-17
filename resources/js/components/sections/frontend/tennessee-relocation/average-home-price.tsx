import React from 'react'

export default function AverageHomePrice() {
  return (

        <div className="py-16 px-6 bg-primary-background">
                {/* <Tab  item={'Tennessee'} className={'bg-blue-500'}/> */}
        <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center font-montserrat mb-12">Average Home Price Ranges in Tennessee</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-background p-8 rounded-2xl shadow-sm border border-muted">
                    <h3 className="text-2xl font-semibold font-montserrat mb-2">Entry-Level Homes</h3>
                    <p className="text-base font-medium font-montserrat mb-4 text-primary">Price Range: $180,000 – $300,000
                    </p>
                    <p className="text-base font-normal font-montserrat text-primary mb-3">Typically includes:</p>
                    <div className="space-y-2 text-sm text-primary mb-6">
                        <div className="flex gap-2 text-base font-normal font-montserrat text-foreground"><span>»</span> Smaller
                            single-family homes</div>
                        <div className="flex gap-2 text-base font-normal font-montserrat text-foreground"><span>»</span> Older
                            homes or starter homes</div>
                        <div className="flex gap-2 text-base font-normal font-montserrat text-foreground"><span>»</span> Rural
                            and small-city locations</div>
                    </div>
                    <p className="text-base font-normal font-montserrat text-primary">Most common in East and West Tennessee.
                    </p>
                </div>
                <div className="bg-background p-8 rounded-2xl shadow-sm border border-muted">
                    <h3 className="text-2xl font-semibold font-montserrat mb-2">Mid-Range Homes</h3>
                    <p className="text-base font-medium font-montserrat mb-4 text-primary">Price Range: $300,000 – $500,000
                    </p>
                    <p className="text-base font-normal font-montserrat text-primary mb-3">Typically includes:</p>
                    <div className="space-y-2 text-sm text-primary mb-6">
                        <div className="flex gap-2 text-base font-normal font-montserrat text-foreground"><span>»</span>
                            Suburban homes</div>
                        <div className="flex gap-2 text-base font-normal font-montserrat text-foreground"><span>»</span> Newer
                            construction</div>
                        <div className="flex gap-2 text-base font-normal font-montserrat text-foreground"><span>»</span>
                            Family-friendly neighborhoods</div>
                    </div>
                    <p className="text-base font-normal font-montserrat text-primary">This is the most common price range
                        statewide.</p>
                </div>
                <div className="bg-background p-8 rounded-2xl shadow-sm border border-muted">
                    <h3 className="text-2xl font-semibold font-montserrat mb-2">Luxury & High-End Homes</h3>
                    <p className="text-base font-medium font-montserrat mb-4 text-primary">Price Range: $500,000 –
                        $1,000,000+</p>
                    <p className="text-base font-normal font-montserrat text-primary mb-3">Typically includes:</p>
                    <div className="space-y-2 text-sm text-primary mb-6">
                        <div className="flex gap-2 text-base font-normal font-montserrat text-foreground"><span>»</span> Custom
                            homes</div>
                        <div className="flex gap-2 text-base font-normal font-montserrat text-foreground"><span>»</span> Larger
                            lots</div>
                        <div className="flex gap-2 text-base font-normal font-montserrat text-foreground"><span>»</span>
                            Desirable neighborhoods</div>
                        <div className="flex gap-2 text-base font-normal font-montserrat text-foreground"><span>»</span> Newer
                            or upscale finishes</div>
                    </div>
                    <p className="text-base font-normal font-montserrat text-primary">Most common in Middle Tennessee and
                        select metro suburbs.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
