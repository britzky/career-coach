from fastapi import APIRouter, HTTPException
import logging
import asyncio
import re
from ..config import assistant_id, client
from app.schemas import CareerInfo

# Initalize the router
router = APIRouter()

# Basic configuration for logging
logging.basicConfig(level=logging.INFO)

async def wait_for_run_completion(client, thread_id, run_id):
    while True:
        try:
            run = client.beta.threads.runs.retrieve(thread_id=thread_id, run_id=run_id)
            if run.completed_at:
                messages = client.beta.threads.messages.list(thread_id=thread_id)
                last_message = messages.data[0]
                return last_message.content[0].text.value
        except Exception as e:
            logging.error(f"An error occured while retrieving the response", {e})
            return None
        await asyncio.sleep(1)

@router.post("/generate-roadmap/")
async def generate_roadmap(career_info: CareerInfo):
    try:
        # skills = ', '.join(career_info.skills)
        message = (
            f"I want to be a {career_info.career}, "
            f"My experience in {career_info.career} is {career_info.experience} "
            f"I can dedicate {career_info.hours_dedicated_to_learning} hours per week to learn. "
            f"My total budget for the courses is {career_info.budget} dollars a week. "
            f"My preferred learning style is {career_info.preferred_learning_style}. "
            f"My expected timeframe is three months. "
            f"I am a {career_info.current_knowledge} in this field."
        )

        ### Thread ###
        thread = client.beta.threads.create(
            messages=[
                {
                    "role": "user",
                    "content": message,
                }
            ]
        )

        ### Run the assistant ###
        run = client.beta.threads.runs.create(
            thread_id=thread.id,
            assistant_id=assistant_id,
            instructions=(
                "Start the response with a summary that highlights the key learning outcomes, total time commitment, and skill development progression. Mention the overarching goals and how this roadmap prepares the learner for their career. After the summary, use the following strict template for each month section of the career roadmap: " +
                "\n- Begin each section with the month and a brief overview of what the user will learn during that month. This overview should highlight the main themes and skills covered." +
                "\n- Follow with the course title." +
                "\n- Then provide details for each course: Course Name, Link, Skill level, Price, Duration, and Description, each on a new line, in this order." +
                "\n- Include the estimated duration for completing each course. Specify whether the duration is in hours, days, or weeks." +
                "\n- Avoid markdown formatting." +
                "\nExample format:" +
                "\nSummary: This roadmap covers the essential skills and knowledge for a career in Java development, requiring a total of 6 months with an average weekly study time of 10 hours. It aims to equip learners with foundational to advanced Java skills, preparing them for job-ready competencies." +
                "\n\nMonth 1: Getting Started with Java" +
                "\nOverview: This month focuses on introducing you to Java programming, covering basic concepts and setting the foundation for more advanced topics." +
                "\nCourse Name: Java Programming Basics" +
                "\nLink: https://www.udacity.com/course/java-programming-basics--ud282" +
                "\nSkill level: Beginner" +
                "\nPrice: $12.99" +
                "\nDuration: 3 weeks" +
                "\nDescription: Introduction to Java programming basics, including variables, loops, and lists." +
                "\n\nContinue with this format for each month, ensuring the courses align with the learner's timeframe and weekly study hours."
            )
        )

        response = await wait_for_run_completion(client, thread.id, run.id)

        if response:
            # Regex patterns
            patterns = {
                "month": r"^(Month \d+(?:-\d+)?):",
                "overview": r"^\s*Overview: (.+)$",
                "title": r"^\s*Title: (.+)$",
                "course_name": r"^\s*Course Name: (.+)",
                "link": r"^\s*Link: (.+)",
                "skill_level": r"^\s*Skill level: (.+)",
                "price": r"^\s*Price: (.+)",
                "duration": r"^\s*Duration: (.+)",
                "description": r"^\s*Description: (.+)"
            }

            # Extract the summary using regex
            summary_pattern = r"^Summary: (.*?)\n\nMonth 1:"
            summary_match = re.search(summary_pattern, response, re.DOTALL)
            summary = summary_match.group(1).strip() if summary_match else ""

            # Split the text by "Month" followed by a number and a colon
            months = re.split(r'(?=(Month \d+(?:-\d+)?):)', response)
            months = [month for month in months if month.strip()]

            roadmap = []
            for section in months:
                month_data = {}
                # Extract month
                month_match = re.search(patterns["month"], section, re.MULTILINE)
                if month_match:
                    month_data["month"] = month_match.group(1).strip()
                    month_data["courses"] = []

                # Extract overview
                overview_match = re.search(patterns["overview"], section, re.MULTILINE)
                if overview_match:
                    month_data["overview"] = overview_match.group(1).strip()

                # Split the section by "Title" to get individual courses
                courses = re.split(r'(?=^\s*Title: )', section, flags=re.MULTILINE)
                courses = [course for course in courses if course.strip()]

                for course in courses:
                    course_info = {}
                    for key, pattern in patterns.items():
                        if key not in ["month", "overview"]:  # Skip month and overview
                            match = re.search(pattern, course, re.MULTILINE)
                            if match:
                                course_info_key = key.replace("_", "")  # Remove underscore for JSON key
                                course_info[course_info_key] = match.group(1).strip()
                    if course_info:
                        month_data["courses"].append(course_info)

                if month_data:
                    roadmap.append(month_data)

                completedRoadmap = {
                    "summary": summary,
                    "roadmap": roadmap
                }
                print(response)

            return completedRoadmap
        else:
            raise HTTPException(status_code=500, detail="Failed to get response from the assistant")
    except Exception as e:
            raise HTTPException(status_code=500, detail=str(e))