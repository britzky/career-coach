# Official runtime image
FROM python:3.11-slim

# Set the working directory
WORKDIR /usr/src/app

ENV PORT 8080
ENV HOST 0.0.0.0

# Copy the requirements file into the container
COPY requirements.txt /usr/src/app/requirements.txt

# install packages from requirements.txt
RUN pip install --no-cache-dir -r /usr/src/app/requirements.txt

# Copy the entire directory to /app
COPY . /usr/src/app

#Copy the .env file to the working directory
COPY app/.env /usr/src/app/.env

# Expose port 8080 for the application
EXPOSE 8080

# Command to run the app
CMD sh -c "uvicorn app.main:app --host $HOST --port $PORT"

