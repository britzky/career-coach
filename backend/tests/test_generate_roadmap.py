from app.schemas import CareerInfo

def test_generate_roadmap_response_structure(client):
    # create a sample CareerInfo object
    career_info = CareerInfo(
        career="Software Developer",
        experience="1 year",
        hours_dedicated_to_learning=10,
        budget=100,
        preferred_learning_style="Visual",
        current_knowledge="Beginner"
    )

    # Make a POST request to the endpoint
    response = client.post("/generate-roadmap/", json=career_info.model_dump())

    # Check if the request was successful
    assert response.status_code == 200

    # Get the JSON response as a string
    data = response.json()


    # Check the top-level structure
    assert "summary" in data
    assert "roadmap" in data

    # Check the structure of each month in the roadmap
    for month in data["roadmap"]:
        assert "month" in month
        assert "overview" in month
        assert "courses" in month
        # Check the structure of the course details
        for course in month["courses"]:
            assert "coursename" in course
            assert "link" in course
            assert "skilllevel" in course
            assert "price" in course
            assert "duration" in course
            assert "description" in course
