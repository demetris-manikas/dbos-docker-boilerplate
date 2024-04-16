#!/bin/sh

contents_changed () {
    while read foo; do
        npm --prefix ../app run build
    done
}

inotifywait -mr --format '%:e %f' -e 'create,delete,close_write' ../app/src | contents_changed
