FROM node:lts-buster-slim

WORKDIR /home/node
RUN apt update \
    && apt install -y \
        mariadb-client \
        sudo \
        supervisor \
        whois \
    && rm -rf /var/lib/apt/lists/* \
    && yarn global add \
        typeorm \
    && typeorm init --name app --database mysql \
    && chown -R node:node /home/node

USER node
WORKDIR /home/node/app
RUN yarn add \
         @types/bcrypt \
         @types/cookie-parser \
         @types/express \
         @types/express-session \
         @types/jest \
         @types/keycloak-connect \
         @types/node \
         @types/passport \
         @types/supertest \
         @typescript-eslint/eslint-plugin \
         @typescript-eslint/parser \
         apollo-cache-inmemory \
         apollo-client \
         apollo-link-error \
         apollo-link-http \
         apollo-server-express \
         apollo-server-testing \
         bcrypt \
         cookie-parser \
         cors \
         eslint \
         eslint-config-prettier \
         eslint-plugin-prettier \
         express \
         express-graphql \
         express-session \
         graphql-tools \
         graphql \
         jest \
         keycloak-connect \
         mysql2 \
         nodemon \
         openid-client \
         passport \
         prettier \
         reflect-metadata \
         supertest \
         ts-jest \
         ts-node \
         tsconfig-paths \
         type-graphql \
         typescript \
    && rm /home/node/app/ormconfig.json

ENV APP_HOME /home/node/app
USER root
CMD /usr/bin/supervisord -nc /etc/supervisor/supervisord.conf

