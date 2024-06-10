# What is it about
This a template to get you started on developing
a [DBOS](https://docs.dbos.dev/) backed application on your local machine
with docker-compose or microk8s

A Helm configuration (tested with microk8s) is also provided.

## Getting Started
### with docker compose
#### run the following commands to get up and running

```bash
cd app
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

### with microk8s
with your microk8s running run

```bash
    microk8s status
```
and the output should look like
```
high-availability: no
  datastore master nodes: 127.0.0.1:19001
  datastore standby nodes: none
addons:
  enabled:
    dashboard            # (core) The Kubernetes dashboard
    dns                  # (core) CoreDNS
    ha-cluster           # (core) Configure high availability on the current node
    helm                 # (core) Helm - the package manager for Kubernetes
    helm3                # (core) Helm 3 - the package manager for Kubernetes
    hostpath-storage     # (core) Storage class; allocates storage from host directory
    ingress              # (core) Ingress controller for external access
    metrics-server       # (core) K8s Metrics Server for API access to service metrics
    registry             # (core) Private image registry exposed on localhost:32
```

Edit your .env file and set REGISTRY to localhost:32000/ (sorry the trailing slash is not optional)
```bash
    cd app
    docker compose build
    docker push localhost:32000/app-backend-db
    docker push localhost:32000/app-backend
    docker push localhost:32000/dbos-app-keycloak-db
    docker push localhost:32000/dbos-app-keycloak
    docker push localhost:32000/app-broker
    docker push localhost:32000/dbos-app-oauth2-proxy
    cd ../helm
    cp values.yaml.tpl values.yaml
```
Edit helm/values.yaml.

Set the app hostPath to point to the app dir (e.g. /home/user/projects/dbos-app/app)
Set the db hostPath to point to the where you want postgres to keep its data (e.g. /tmp/dbos-app)

To install run from within the helm directory  ```helm install -f values.yaml dbos dbos-app/ -n dbos-app --create-namespace```
To uninstall run ```helm uninstall dbos --namespace dbos-app```

Add ```127.0.0.1 dbos``` to your /etc/hosts

Visit [https://dbos/db/version](https://dbos/db/version)

and you should get this message: `Connection succesfull! version: ${POSTGRES_VERSION}.`

## Next Steps
Most of the boilerplate is here so modify to your needs and write your [DBOS](https://docs.dbos.dev/) backed application.

## TODO
Elaborate the keycloak setup and create example usage case
