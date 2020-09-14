#!/usr/bin/env bash
NAME=grocerybot
TAG=latest

if [ $# -eq 0 ]; then
    echo "USAGE: ./dev.sh {build,exec,run}"
    exit 1
fi

if [[ "$@" =~ "build" ]]; then
    echo -e "\nBuilding image...\n"
    docker build . -t "$NAME:$TAG"
fi

if [[ "$@" =~ "exec" ]]; then
    echo -e "\nSpawning shell...\n"
    docker run -it --entrypoint=/bin/bash "$NAME:$TAG"
fi

if [[ "$@" =~ "run" ]]; then
    echo -e "\nStarting container...\n"
    docker run -it -p 8080:80 "$NAME:$TAG"
fi
