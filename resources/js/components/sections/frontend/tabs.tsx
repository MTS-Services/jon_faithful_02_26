import React from 'react'
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Subtitles } from 'lucide-react';

interface ButtonProps {
    text?: string,
    className?: string
}
interface CardDataList {
    title: string,
}
interface Props{
    list?: ButtonProps[] ,
    cardDataList?: CardDataList[],
    cardTitle?: string, 
    imageUrl?: string,
    subtitle?: string,
    description?: string
    
}
export default function Tab({list, cardTitle, imageUrl, subtitle, cardDataList, description}:Props ) {
  return (
    // <div className={cn('bg-red-500', className)}>
    //    { item}
    // </div>


    <div className="container mx-auto px-4 py-20 mt-20">
        <div className="flex flex-wrap justify-center gap-4 mb-10">

            {/* <button
                className="bg-[#c9a249] text-background px-10 py-5 rounded-full font-semibold font-montserrat shadow-md">{text}</button>
            <button
                className="bg-[#1e3a5f] text-background px-10 py-5 rounded-full font-semibold font-montserrat shadow-md opacity-90 hover:opacity-100">{text}</button>
            <button
                className="bg-[#1e3a5f] text-background px-10 py-5 rounded-full font-semibold font-montserrat shadow-md opacity-90 hover:opacity-100">Things
                to Do</button>
            <button
                className="bg-[#1e3a5f] text-background px-10 py-5 rounded-full font-semibold font-montserrat shadow-md">Homes
                for Sale</button> */}

            {
                list?.map((item,i)=>{
                    return(
                        <button
                        className={cn('bg-primary text-background px-10 py-5 rounded-full font-semibold font-montserrat shadow-md opacity-90 hover:opacity-100',item?.className) }>{item.text}</button>
                    )
                })
            }
        </div>

        <div
            className="bg-background border border-muted rounded-[40px] shadow-2xl overflow-hidden flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2">
                <img src={imageUrl} alt="Bristol Homes"
                    className="w-full h-full object-cover min-h-[400px]  rounded-[35px]" />
            </div>
            <div className="w-full lg:w-1/2 p-10 md:p-16 space-y-6">
                <h2 className="text-4xl font-semibold font-montserrat text-secondary-foreground leading-tight">{cardTitle}</h2>
                <p className="text-secondary-foreground font-normal text-base font-montserrat">{subtitle}</p>
                <div className="space-y-4 text-muted-foreground font-medium text-lg">
                    {
                        cardDataList?.map((item,i)=>{
                            return(
                                <div className="flex items-center gap-3">
                                    <span className="bg-foreground/95 text-background rounded-full p-1"><svg className="w-4 h-4" fill="none"
                                            stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                                                d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                        </svg></span>
                                    <p className="text-secondary-foreground font-normal font-montserrat text-base">{item.title}</p>
                                </div>
                            )
                        })
                    }
                    {/* <div className="flex items-center gap-3">
                        <span className="bg-foreground/95 text-background rounded-full p-1"><svg className="w-4 h-4" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg></span>
                        <p className="text-secondary-foreground font-normal font-montserrat text-base">Affordable single-family homes</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="bg-foreground/95 text-background rounded-full p-1"><svg className="w-4 h-4" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg></span>
                        <p className="text-secondary-foreground font-normal font-montserrat text-base">Historic properties</p>

                    </div>
                    <div className="flex items-center gap-3">
                        <span className="bg-foreground/95 text-background rounded-full p-1"><svg className="w-4 h-4" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg></span>
                        <p className="text-secondary-foreground font-normal font-montserrat text-base">Newer subdivisions</p>

                    </div> */}
                </div>
                <div className="pt-6">
                    <p className="text-secondary-foreground font-normal font-montserrat text-base">{description}</p>
                </div>
            </div>
        </div>
    </div>
  )
}
