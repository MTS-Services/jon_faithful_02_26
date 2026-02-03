import React from 'react'
import Tab from '../tabs'

export default function Tabs() {
    const list = [
        {
            text: "Schools & Education", 
            className: 'bg-[#c9a249]'
        }, 
        {
            text: "Jobs & Employment",
        },
        {
            text: "Transportation & Commuting",
        },
        {
            text: "Weather & Climate",
        }
    ]

    const cardDataList = [
        {
            title: "Public schools serving the city",
        },
        {
            title: "Private school options nearby",
        },
        {
            title: "Access to Northeast State Community College and ETSU",
        }
    ]
  return (
    <div>
        <Tab list={list} cardDataList={cardDataList} cardTitle={'Schools & Education'} imageUrl={'/assets/images/Be_focus_and_patient_while_teaching_new_things1-2048x1330.jpeg'} subtitle={'Bristol offers:'} description={'Education options support families relocating to the area.'} />
    </div>
  )
}
