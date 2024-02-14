import React from 'react'
import { useCareerDetails } from '../../context/CareerContext';
import { CourseAccordionItems } from './CourseAccordionItems';
import { DownArrow } from '../../assets/icons/DownArrow';

export const CourseAccordion: React.FC = () => {
    const { roadmap } = useCareerDetails();

  return (
    <>
        {roadmap && roadmap.roadmap.map((item, index) => (
            <div className="flex flex-col items-center">
                <CourseAccordionItems
                    key={index}
                    month={item.month}
                    title={item.title}
                    courseInfo={item.courseInfo}
                />
                <div className="my-1">
                    <DownArrow />
                </div>
            </div>
        ))}
    </>
  )
}
