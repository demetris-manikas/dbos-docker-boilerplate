#!/bin/bash

if [ ! -d "dist" ]
then
    echo "Building... "
    npm run build
fi
echo 'Starting in dev mode'
exec npm run dev
