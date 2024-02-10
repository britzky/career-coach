import React from 'react'
// import { useCareerDetails } from '../../context/CareerContext';
import { CourseAccordionItems } from './CourseAccordionItems';
import { DownArrow } from '../../assets/icons/DownArrow';

export const CourseAccordion: React.FC = () => {
    // const { roadmap } = useCareerDetails();
    const roadmap = {
        "summary": "This comprehensive 12-month roadmap is meticulously crafted for individuals aspiring to start a career in software engineering. With a notable commitment of 40 hours per week and an extensive budget of $100 weekly, this roadmap is designed to facilitate learners from a beginner level to acquiring job-ready skills in software engineering. The curriculum progresses through various fundamental and advanced topics, emphasizing practical programming skills, software development methodologies, web development, databases, and modern frameworks. The overarching goals include mastering key programming languages, understanding software development life cycles, and being proficient in both front-end and back-end web technologies. By the end of this roadmap, learners will possess the robust technical foundation and practical experience necessary for a successful career in software engineering.",
        "roadmap": [
            {
                "month": "Month 1",
                "title": "Introduction to Programming Concepts",
                "courseInfo": {
                    "coursename": "Introduction to Computer Science and Programming",
                    "link": "https://www.edx.org/course/introduction-computer-science-mitx-6-00-1x-7",
                    "skilllevel": "Beginner",
                    "price": "$99 (Audit for free)",
                    "description": "Provides an introduction to the fundamental concepts of programming using Python, covering basics such as variables, loops, and how to solve problems programmatically."
                }
            },
            {
                "month": "Month 2",
                "title": "Web Development Fundamentals",
                "courseInfo": {
                    "coursename": "HTML, CSS, and Javascript for Web Developers",
                    "link": "https://www.coursera.org/learn/html-css-javascript-for-web-developers",
                    "skilllevel": "Beginner",
                    "price": "$49 (Financial aid available)",
                    "description": "A course dedicated to learning the basics of web development, focusing on how to build interactive and responsive websites using HTML, CSS, and JavaScript."
                }
            },
            {
                "month": "Month 3",
                "title": "Introduction to Databases",
                "courseInfo": {
                    "coursename": "Introduction to Databases",
                    "link": "https://www.edx.org/course/databases-5-sql",
                    "skilllevel": "Beginner",
                    "price": "$99 (Audit for free)",
                    "description": "This course covers the basics of database design, focusing on SQL and the design of relational databases."
                }
            },
            {
                "month": "Month 4",
                "title": "Java Programming",
                "courseInfo": {
                    "coursename": "Java Programming and Software Engineering Fundamentals",
                    "link": "https://www.coursera.org/specializations/java-programming",
                    "skilllevel": "Beginner",
                    "price": "$49 per month (Financial aid available)",
                    "description": "Aimed at beginners, this course provides a comprehensive introduction to Java programming and the key concepts of software engineering."
                }
            },
            {
                "month": "Month 5",
                "title": "Data Structures and Algorithms",
                "courseInfo": {
                    "coursename": "Data Structures and Algorithms Specialization",
                    "link": "https://www.coursera.org/specializations/data-structures-algorithms",
                    "skilllevel": "Intermediate",
                    "price": "$49 per month (Financial aid available)",
                    "description": "This specialization covers algorithmic thinking, techniques for designing efficient algorithms, and essential data structures for problem-solving."
                }
            },
            {
                "month": "Month 6",
                "title": "Full Stack Web Development",
                "courseInfo": {
                    "coursename": "Full Stack Web Development with React",
                    "link": "https://www.coursera.org/specializations/full-stack-react",
                    "skilllevel": "Intermediate",
                    "price": "$49 per month (Financial aid available)",
                    "description": "Teaches the development of complete web applications using MongoDB, Express, React, Node.js (MERN stack), focusing on both front-end and back-end development skills."
                }
            },
            {
                "month": "Month 7",
                "title": "Git and GitHub",
                "courseInfo": {
                    "coursename": "Version Control with Git",
                    "link": "https://www.udacity.com/course/version-control-with-git--ud123",
                    "skilllevel": "Beginner",
                    "price": "Free",
                    "description": "Understand the basics of version control with Git, and learn how to use GitHub to collaborate with other developers on projects."
                }
            },
            {
                "month": "Month 8",
                "title": "Agile Development and Scrum",
                "courseInfo": {
                    "coursename": "Agile Development Using Ruby on Rails - The Basics",
                    "link": "https://www.edx.org/course/agile-development-using-ruby-on-rails-the-basic",
                    "skilllevel": "Intermediate",
                    "price": "$99 (Audit for free)",
                    "description": "Focuses on Agile development methodologies and the Scrum framework, using Ruby on Rails as the programming language."
                }
            },
            {
                "month": "Month 9-10",
                "title": "Advanced Full Stack Development",
                "courseInfo": {
                    "coursename": "Full Stack Web and Multiplatform Mobile App Development",
                    "link": "https://www.coursera.org/specializations/full-stack-mobile-app-development",
                    "skilllevel": "Advanced",
                    "price": "$49 per month (Financial aid available)",
                    "description": "Expands on full-stack development knowledge, with a focus on building cross-platform mobile applications using React Native."
                }
            },
            {
                "month": "Month 11",
                "title": "Cloud Computing",
                "courseInfo": {
                    "coursename": "Cloud Computing Specialization",
                    "link": "https://www.coursera.org/specializations/cloud-computing",
                    "skilllevel": "Intermediate",
                    "price": "$49 per month (Financial aid available)",
                    "description": "This specialization provides an in-depth understanding of cloud computing concepts, technologies, and services, including Infrastructure-as-a-Service (IaaS), Platform-as-a-Service (PaaS), and Software-as-a-Service (SaaS)."
                }
            },
            {
                "month": "Month 12",
                "title": "Capstone Project",
                "courseInfo": {
                    "coursename": "Capstone: Building a Scalable Microservices Application",
                    "link": "https://www.coursera.org/learn/building-scalable-java-microservices-gcp",
                    "skilllevel": "Advanced",
                    "price": "$49 (Financial aid available)",
                    "description": "Apply all the skills and knowledge acquired throughout the year to build a scalable, real-world application using microservices architecture on Google Cloud Platform."
                }
            }
        ]
    }
  return (
    <div>
        {roadmap && roadmap.roadmap.map((item, index) => (
            <div className="my-1 flex flex-col justify-center items-center">
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
    </div>
  )
}
