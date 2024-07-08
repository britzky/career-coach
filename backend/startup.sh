#!/bin/bash
echo "Current directory: $(pwd)"
echo "Contents of current directory:"
ls -la
echo "Contents of app directory:"
ls -la app
echo "Python version:"
python --version
echo "Starting application..."
uvicorn app.main:app --host 0.0.0.0 --port 8080