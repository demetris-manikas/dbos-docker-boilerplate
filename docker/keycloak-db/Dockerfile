FROM postgres:16-alpine

USER postgres

COPY --chown=postgres:postgres ./initdb.d /docker-entrypoint-initdb.d

EXPOSE 5432

CMD [ "postgres" ]
