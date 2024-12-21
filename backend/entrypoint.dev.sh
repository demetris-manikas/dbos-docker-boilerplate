#!/bin/bash

if [ ! -d "dist" ]
then
    echo "Building... "
    npm run build
fi

echo 'Waiting until pg is ready'
until pg_isready -h $EMPOWER_POSTGRES_HOST -p $EMPOWER_POSTGRES_PORT -d $EMPOWER_POSTGRES_DB -U $EMPOWER_POSTGRES_USER; do sleep 2; done

if [ "$EMPOWER_RUN_MIGRATIONS_ON_BOOT" = true ]; then
   echo 'Executing DB migrations'
   npm run migration:run
else
   echo 'NOT Executing DB migrations'
   echo 'Set EMPOWER_BACKEND_RUN_MIGRATIONS_ON_BOOT to true if you wish to'
fi

if [ "$EMPOWER_DEV_ENABLE_DEBUG_MODE" = "true" ]; then
   echo 'Starting in debug mode'
   npm run start:debug
else
   echo 'Starting in dev mode'
   npm run start:dev
fi


