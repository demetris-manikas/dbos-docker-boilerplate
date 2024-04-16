#!/bin/sh

cwd=$(pwd)

inotifywait -mr \
  --timefmt '%d/%m/%y %H:%M' --format '%T %w %f' \
  -e close_write ../app/dist | microk8s.kubectl set env deployment/dbos-app DATE=$() -n dbos-app
