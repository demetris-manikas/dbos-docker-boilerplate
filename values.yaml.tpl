registry: localhost:32000

backend_db:
  volume:
    hostPath: "/tmp/dbos-app/db"

keycloak_db:
  volume:
    hostPath: "/tmp/dbos-app/keycloak-db"

kafka:
  volume:
    hostPath: "/tmp/dbos-app/kafka"