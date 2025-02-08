# What is it about
This a template to get you started on developing
a [DBOS](https://docs.dbos.dev/) backed application on your local machine
with docker-compose or on a local k3d cluster

## Getting Started
### with docker compose
#### run the following commands to get up and running

```bash
cd backend
npm run install
npm run build
cd ..
cp .env.tpl .env
docker compose up
```
To see that it's working, visit: [`http://localhost:3000/db/version`](http://localhost:3000/db/version).

and you should get this message: `Connection succesfull! version: {POSTGRES_VERSION}.`

To check the Kafka integration visit [`http://localhost:3000/kafka/producer`](http://localhost:3000/kafka/producer)
and you should see a message in the console.

### with local k3d cluster
Install k3d ()
Install kubeseal
Install devspace
Run
```bash
    devspace run cluster-create
    devspace run install
    devspace build
    devspace deploy
```
Edit helm/values.yaml.



Add ```127.0.0.1	app.dbos-app.localhost auth.dbos-app.localhost api.dbos-app.localhost oauth2.dbos-app.localhost``` to your /etc/hosts

Visit [https://api.dbos-app.localhost/db/version](https://api.dbos-app.localhost/db/version)

and you should get this message: `Connection succesfull! version: ${POSTGRES_VERSION}.`

## Next Steps
Most of the boilerplate is here so modify to your needs and write your [DBOS](https://docs.dbos.dev/) backed application.
