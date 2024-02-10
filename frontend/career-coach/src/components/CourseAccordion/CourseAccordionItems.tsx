import React, { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
    <div>
        <div>
            <span>{month}: {title}</span>
            <p>{courseInfo.description}</p>
            <button onClick={() => setOpen(!open)}><ExpandMoreIcon /></button>
        </div>
        {open && (
            <div>
                <p>Course Name: {courseInfo.coursename}</p>
                <p>Link: {courseInfo.link}</p>
                <p>Price: {courseInfo.price}</p>
            </div>
        )}
    </div>
  )
}
