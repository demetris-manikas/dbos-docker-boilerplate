all: template secrets

template:
	@rm -fr ./dist/dbos-app
	@make -C dbos-app helm-options=" -f ../values.yaml " output-dir="../dist" template

secrets:
	@mkdir -p ./dist/secrets-dev
	@rm -f ./dist/secrets-dev/*.yaml
	@make -C dbos-app helm-options=" -f ../values.yaml " output-dir="../dist/secrets-dev" secrets
