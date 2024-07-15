from fastapi import APIRouter, HTTPException
import logging
import asyncio
from ..config import assistant_id, client
from app.schemas import CareerInfo
import json

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
            f"My total budget for the courses is {career_info.budget} dollars a month. "
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
            instructions = (
                "It is CRITICAL that you provide the roadmap ONLY as a structured JSON object. "
                "Do not include any text before or after the JSON. "
                "The JSON MUST strictly follow this format, with no deviations:"
                "{"
                "  \"summary\": \"Overall summary of the roadmap\","
                "  \"roadmap\": ["
                "    {"
                "      \"month\": \"Month 1\","
                "      \"overview\": \"Monthly overview\","
                "      \"courses\": ["
                "        {"
                "          \"coursename\": \"Course Title\","
                "          \"link\": \"https://example.com/course\","
                "          \"skilllevel\": \"Beginner\","
                "          \"price\": \"$XX.XX\","
                "          \"duration\": \"X weeks\","
                "          \"description\": \"Course description\""
                "        }"
                "      ]"
                "    }"
                "  ]"
                "}"
            )
        )

        response = await wait_for_run_completion(client, thread.id, run.id)

        if response:
            response = json.loads(response)
            print(response)
            return response
        else:
            raise HTTPException(status_code=500, detail="Failed to get response from the assistant")
    except Exception as e:
            raise HTTPException(status_code=500, detail=str(e))