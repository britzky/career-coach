def test_health(client):
    response = client.get('/')
    assert response.status_code == 200
    data = response.json()
    assert data == {"message": "Server is awake!"}
    print(data)