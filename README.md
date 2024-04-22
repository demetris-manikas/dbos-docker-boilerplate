# What is it about
This a template to get you started on developing
a [DBOS backed apps](https://docs.dbos.dev/) application on your local machine
with docker-compose

A basic Helm configuration (tested with microk8s) is also provided but needs polishing...

## Getting Started
### with docker-compose
Enable docker ipv6

Follow steps 1 to 3 of [how to docker ipv6](https://docs.docker.com/config/daemon/ipv6/).

#### run the following commands to get up and running

```bash
cd app
npm run install
npm run build
cd ..
cp .env.tpl .env
docker compose up
```
To see that it's working, visit this URL in your browser: [`http://localhost:3000/db/version`](http://localhost:3000/db/version).
You should get this message: `Connection succesfull! version: ${POSTGRES_VERSION}.`

Congratulations! You just launched a DBOS application.

## Next Steps
Modify to your needs

Write your dbos backed application.

