import React, { useState } from 'react'
import { DownChevron } from '../../assets/icons/DownChevron';

interface CourseInfo {
    coursename: string;
    link: string;
    skilllevel: string;
    price: string;
    duration: string;
    description: string;
  }

  interface AccordionItemProps {
    month: string;
    courses: CourseInfo[];
    overview: string
  }

export const CourseAccordionItems: React.FC<AccordionItemProps> = ({ month, courses, overview }) => {
    const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="flex justify-center items-center w-full">
        <div className="border-4 rounded-md border-purpleText p-5 w-full">
            <div className="flex flex-col">
                <div className="flex justify-between">
                    <span className="font-bold text-xxs lg:text-sm text-purpleText leading-[20px] lg:leading-[40px]">{month}: {courses[0].coursename} </span>
                    <div className="flex flex-col  items-center">
                        <button
                            onClick={() => setOpen(!open)}
                            aria-expanded={open}
                            className="flex justify-center items-center border-4 rounded-lg border-purpleText p-1 h-[25px] lg:h-auto w-[25px] lg:w-auto"
                        >
                            <DownChevron height="20px" width="20px" />
                        </button>
                    </div>
                </div>
                <p className="text-xxxs lg:text-xs font-medium text-purpleText leading-[15px] lg:leading-[25px]">{overview}</p>
            </div>
            {open && courses.map((course, index) => (
                <div key={index} className="bg-buttonWhite border-2 border-purpleText rounded-md p-3 text-purpleText leading-[15.6px] lg:leading-[25px]">
                    <p className="font-bold">Course Name: {course.coursename}</p>
                    <p>Duration: {course.duration}</p>
                    <p>
                        <a
                            href={course.link}
                            className="underline cursor-pointer"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Course Link
                        </a>
                    </p>
                    <p>Skill Level: {course.skilllevel}</p>
                    <p>Price: {course.price}</p>
                    <p>Description: {course.description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}
