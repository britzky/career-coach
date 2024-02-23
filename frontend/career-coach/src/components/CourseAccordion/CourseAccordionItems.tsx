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
    title: string;
    courseInfo: CourseInfo;
  }

export const CourseAccordionItems: React.FC<AccordionItemProps> = ({ month, title, courseInfo }) => {
    const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="flex justify-center items-center">
        <div className="border-4 rounded-md border-purpleText p-5">
            <div className="flex flex-col">
                <div className="flex justify-between">
                    <span className="font-bold text-base text-purpleText">{month}: {title}</span>
                    <div>
                        <button
                            onClick={() => setOpen(!open)}
                            aria-expanded={open}
                            className="border-4 rounded-lg border-purpleText p-1"
                        >
                            <DownChevron />
                        </button>
                    </div>
                </div>
                <p className="text-xs font-medium text-purpleText">{courseInfo.description}</p>
            </div>
            {open && (
            <div className="bg-buttonWhite border-2 border-purpleText rounded-md p-3 text-purpleText">
                <p className="font-bold">Course Name: {courseInfo.coursename}</p>
                <p>Duration: {courseInfo.duration}</p>
                <p>
                    <a
                        href={courseInfo.link}
                        className="underline cursor-pointer"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Course Link
                    </a>
                </p>
                <p>Skill Level: {courseInfo.skilllevel}</p>
                <p>Price: {courseInfo.price}</p>
            </div>
            )}
        </div>
    </div>
  )
}
