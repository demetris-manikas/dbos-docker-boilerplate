# DBOS Hello

This is a [DBOS app](https://docs.dbos.dev/) bootstrap for local development

## Getting Started

### Enable docker ipv6
Follow steps 1 to 3 of [how to docker ipv6](https://docs.docker.com/config/daemon/ipv6/).

```bash
npm run install
npm run build
cp .env.tpl .env
docker compose up
```
To see that it's working, visit this URL in your browser: [`http://localhost:3000/db/version`](http://localhost:3000/db/version).
You should get this message: `Connection succesfull! version: blah blah.`
Congratulations! You just launched a DBOS application.

## Next Steps

- To add more functionality to this application, modify `src/operations.ts`, then re-build and re-start it. For a detailed tutorial, check out our [programming quickstart](https://docs.dbos.dev/getting-started/quickstart-programming).
- To learn how to deploy your application to DBOS Cloud, visit our [cloud quickstart](https://docs.dbos.dev/getting-started/quickstart-cloud/)
- To learn more about DBOS, take a look at [our documentation](https://docs.dbos.dev/) or our [source code](https://github.com/dbos-inc/dbos-sdk).


microk8s kubectl create token default
