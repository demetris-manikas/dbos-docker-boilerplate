registry: localhost:32000

backend:
  volume:
    hostPath: "path-to-app-dir"

backend_db:
  volume:
    hostPath: "path-for postgres data"
