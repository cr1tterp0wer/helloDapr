#!/bin/bash
# Hello Dapr

#Run the nodeJS app:
dapr run --app-id myDapr --app-port 3000 -- yarn --cwd helloDapr/nodeServer start helloDapr/nodeServer/server.js

#Run the Python app:
dapr run --app-id pythonServer python3 helloDapr/app.py
