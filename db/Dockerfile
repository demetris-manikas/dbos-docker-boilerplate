FROM postgres:14.6

USER postgres

COPY --chown=postgres:postgres ./ca/server.crt /var/lib/postgresql/server.crt
COPY --chown=postgres:postgres ./ca/server.key /var/lib/postgresql/server.key
COPY --chown=postgres:postgres ./initdb.d /docker-entrypoint-initdb.d

EXPOSE 5432

# CMD [ "postgres", "-c", "ssl=on", "-c",  "ssl_cert_file=/var/lib/postgresql/server.crt", "-c", "ssl_key_file=/var/lib/postgresql/server.key"]
CMD [ "postgres" ]

