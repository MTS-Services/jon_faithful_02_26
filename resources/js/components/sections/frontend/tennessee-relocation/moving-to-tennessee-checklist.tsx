import React from 'react'


export default function MovingToTennesseeChecklist() {
  return (
    

    <div className="container mx-auto mt-20 mb-20 px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-12">

           
            <div className="w-full lg:w-1/2 shrink-0">
                <img src="/assets/images/473404-Nashville-2048x1152.jpg" alt="Nashville Skyline"
                    className="w-full h-72 lg:h-full object-cover rounded-xl" />
            </div>

           
            <div className="w-full lg:w-1/2 flex flex-col justify-center py-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-primary leading-tight mb-4">
                    Moving to Tennessee<br />Checklist
                </h2>

                <p className="text-sm text-uted-foreground mb-5">Before you move:</p>

                <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-primary shrink-0"></span>
                        <span className="text-sm text-uted-foreground">Research cities</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-primary shrink-0"></span>
                        <span className="text-sm text-uted-foreground">Decide rent vs buy</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-primary shrink-0"></span>
                        <span className="text-sm text-uted-foreground">Set a budget</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-primary shrink-0"></span>
                        <span className="text-sm text-uted-foreground">Arrange utilities</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-primary shrink-0"></span>
                        <span className="text-sm text-uted-foreground">Update licenses and registrations</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-primary shrink-0"></span>
                        <span className="text-sm text-uted-foreground">Understand state taxes</span>
                    </li>
                </ul>

                <p className="text-sm text-uted-foreground mb-7">Pro tip: Renting first simplifies relocation.</p>

          
                <div>
                    <a href={route('frontend.movingChecklist')}
                        className="inline-block bg-primary text-background text-sm font-semibold tracking-wide px-8 py-3.5 rounded-full hover:bg-primary/80 transition-colors duration-200">
                        Read MORE &nbsp;→
                    </a>
                </div>
            </div>

        </div>
    </div>
  )
}
