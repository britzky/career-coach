from fastapi import APIRouter, HTTPException
import httpx

router = APIRouter()

@router.get('/quote/')
async def get_quote():
    url = 'https://zenquotes.io/api/random'
    async with httpx.AsyncClient() as client:
        response = await client.get(url)
        if response.status_code != 200:
            raise HTTPException(status_code=400, detail="Error fetching quote")
        data = response.json()
        quote_and_author = data[0]
        return {"quote": quote_and_author["q"], "author": quote_and_author["a"]}
