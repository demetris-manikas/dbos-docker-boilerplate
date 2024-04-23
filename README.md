# What is it about
This a template to get you started on developing
a [DBOS](https://docs.dbos.dev/) backed application on your local machine
with docker-compose or microk8s

A basic Helm configuration (tested with microk8s) is also provided but needs polishing...

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
To see that it's working, visit this URL in your browser: [`http://localhost:3000/db/version`](http://localhost:3000/db/version).

and you should get this message: `Connection succesfull! version: ${POSTGRES_VERSION}.`

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
    minio                # (core) MinIO object storage
    rbac                 # (core) Role-Based Access Control for authorisation
    registry             # (core) Private image registry exposed on localhost:32000
    storage              # (core) Alias to hostpath-storage add-on, deprecated
  disabled:
    cert-manager         # (core) Cloud native certificate management
    cis-hardening        # (core) Apply CIS K8s hardening
    community            # (core) The community addons repository
    gpu                  # (core) Alias to nvidia add-on
    host-access          # (core) Allow Pods connecting to Host services smoothly
    kube-ovn             # (core) An advanced network fabric for Kubernetes
    mayastor             # (core) OpenEBS MayaStor
    metallb              # (core) Loadbalancer for your Kubernetes cluster
    nvidia               # (core) NVIDIA hardware (GPU and network) support
    observability        # (core) A lightweight observability stack for logs, traces and metrics
    prometheus           # (core) Prometheus operator for monitoring and logging
    rook-ceph            # (core) Distributed Ceph storage using Rook
```

Edit your .env file and set REGISTRY to localhost:32000/ (sorry the trailing slash is not optional)
```bash
    cd app
    docker compose build
    docker push localhost:32000/dbos-app
    docker push localhost:32000/dbos-db
    cd ../helm
    helm install dbos ./dbos-app --namespace dbos-app --create-namespace
```
To uninstall run ```helm uninstall dbos --namespace dbos-app```

Add ```127.0.0.1 dbos``` to your /etc/hosts

Visit [https://dbos/db/version](https://dbos/db/version)

and you should get this message: `Connection succesfull! version: ${POSTGRES_VERSION}.`

## Next Steps
Most of the boilerplate is here so modify to your needs and write your [DBOS](https://docs.dbos.dev/) backed application.

## TODO
1. Follow best practices for the helm installation