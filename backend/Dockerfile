# Official runtime image
FROM python:3.11-slim

# Set the working directory
WORKDIR /usr/src/app

# Copy the requirements file into the container
COPY requirements.txt /usr/src/app/requirements.txt

# install packages from requirements.txt
RUN pip install --no-cache-dir -r /usr/src/app/requirements.txt

# Copy the entire directory to /app
COPY . /usr/src/app

# Expose port 8080 for the application
EXPOSE 8080

# Command to run the app
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8080"]





