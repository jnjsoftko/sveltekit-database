#!/bin/bash

# Load the .env file
if [ -f ../.env ]; then
    export $(cat ../.env | xargs)
fi

pocketbase serve --dir="$VITE_POCKETBASE_SERVE_DIR" --http="$VITE_POCKETBASE_SERVE_HTTP"
# pocketbase serve --dir="/Users/youchan/Dev/Jnj-soft/_Templates/pocketbase/auth/sqlite" --http="127.0.0.1:8090"
