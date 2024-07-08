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

# Expose port 8080 for the application
EXPOSE 8080

# Command to run the app
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

# Expose port 8080 for the application
EXPOSE 8080

# Command to run the app
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

# Expose port 8080 for the application
EXPOSE 8080

# Add a startup script
COPY startup.sh /usr/src/app/startup.sh
RUN chmod +x /usr/src/app/startup.sh

# Command to run the app
CMD ["/usr/src/app/startup.sh"]

# Command to run the app
# CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8080"]





