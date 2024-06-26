registry: localhost:32000

backend:
  volume:
    hostPath: "/path-to-backend-dir"

backend_db:
  volume:
    hostPath: "/tmp/dbos-app/db"

keycloak:
  volume:
    hostPath: "/tmp/dbos-app/keycloak"

keycloak_db:
  volume:
    hostPath: "/tmp/dbos-app/keycloak-db"

kafka:
  volume:
    hostPath: "/tmp/dbos-app/kafka"