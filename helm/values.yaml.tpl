registry: localhost:32000

app:
  volume:
    hostPath: "path-to-app-dir"

db:
  volume:
    hostPath: "path-for postgres data"
