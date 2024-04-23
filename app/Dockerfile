FROM node:20-alpine

RUN npm install -g typescript tsx nodemon

USER node
RUN mkdir -p /home/node/app && chown -R node:node /home/node/app
WORKDIR /home/node/app

COPY --chown=node:node package.json ./
COPY --chown=node:node package-lock.json ./
COPY --chown=node:node tsconfig.json ./
COPY --chown=node:node nodemon.json ./

RUN npm ci --omit=dev

COPY --chown=node:node src ./src

ENV NODE_ENV production

RUN npm run build

COPY --chown=node:node dbos-config.yaml ./

EXPOSE 3000

CMD [ "npm", "run", "dev" ]

