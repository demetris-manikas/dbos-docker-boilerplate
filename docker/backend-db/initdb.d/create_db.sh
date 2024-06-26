#!/bin/bash
set -e
echo $APP_DB_NAME
echo $APP_DB_USER
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
	CREATE USER $APP_DB_USER PASSWORD '$APP_DB_PASSWORD' NOSUPERUSER CREATEDB;
	CREATE DATABASE $APP_DB_NAME;
	GRANT ALL PRIVILEGES ON DATABASE $APP_DB_NAME TO $APP_DB_USER;
EOSQL

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$APP_DB_NAME" <<-EOSQL
	GRANT ALL PRIVILEGES ON SCHEMA public TO $APP_DB_USER;
EOSQL

