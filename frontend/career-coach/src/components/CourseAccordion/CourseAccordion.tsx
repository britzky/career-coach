import React from 'react'
import { useCareerDetails } from '../../context/CareerContext';

export interface RoadmapItem {
    month: string;
    title: string;
    courseInfo: {
        coursename: string;
        link: string;
        skilllevel: string;
        price: string;
        description: string;
    }
}

export interface AccordionProps {
    roadmap: RoadmapItem[]
}

export const CourseAccordion: React.FC<AccordionProps> = () => {
    const { roadmap } = useCareerDetails();
  return (
    <div>
        {roadmap && roadmap.roadmap.map((item, index) => (
            <div key={index}>
                <div>{item.month}: {item.title}</div>
                <div>{item.courseInfo.description}</div>
            </div>
        ))}
    </div>
  )
}
