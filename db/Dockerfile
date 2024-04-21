FROM postgres:14.6

USER postgres

COPY --chown=postgres:postgres ./ca/server.crt /tmp/postgresql/server.crt
COPY --chown=postgres:postgres ./ca/server.key /tmp/postgresql/server.key
COPY --chown=postgres:postgres ./initdb.d /docker-entrypoint-initdb.d

EXPOSE 5432

CMD [ "postgres", "-c", "ssl=on", "-c",  "ssl_cert_file=/tmp/postgresql/server.crt", "-c", "ssl_key_file=/tmp/postgresql/server.key"]
