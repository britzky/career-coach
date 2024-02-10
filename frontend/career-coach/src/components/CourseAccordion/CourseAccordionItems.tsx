import React, { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { DownChevron } from '../../assets/icons/DownChevron';

interface CourseInfo {
    coursename: string;
    link: string;
    skilllevel: string;
    price: string;
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
        <div className="border-4 rounded-md border-purpleText p-5 w-[1100px]">
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
                <p>{courseInfo.description}</p>
            </div>
        </div>
        {open && (
            <div>
                <p>Course Name: {courseInfo.coursename}</p>
                <p>Link: {courseInfo.link}</p>
                <p>Skill Level: {courseInfo.skilllevel}</p>
                <p>Price: {courseInfo.price}</p>
            </div>
        )}
    </div>
  )
}
