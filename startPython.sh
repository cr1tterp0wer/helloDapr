#!/bin/bash
# Hello Dapr

#Run the Python app:
PYTHONUNBUFFERED=1 dapr run --app-id pythonServer python3 helloDapr/app.py
