FROM node:lts-buster-slim

ARG NG_VER=9.1.3
ARG PRIMENG_VER=9.1.3
WORKDIR /home/node

RUN apt update \
    && apt install -y \
        git \
        nginx \
        sudo \
        supervisor \
        whois \
    && rm -rf /var/lib/apt/lists/* \
    && gpasswd -a node sudo \
    && yarn global add \
        @angular/cli@${NG_VER} \
    && ng new frontapp --style=styl --routing=true \
    && chown -R node:node /home/node

USER node
WORKDIR /home/node/frontapp

RUN yarn add \
        @angular/animations@${NG_VER} \
        @angular/cdk@${NG_VER} \
        @angular/common@${NG_VER} \
        @angular/core@${NG_VER} \
        @angular/forms@${NG_VER} \
        @angular/platform-browser@${NG_VER} \
        @apollo/client \
        apollo-angular \
        apollo-angular-link-http \
        apollo-cache-inmemory \
        apollo-client \
        apollo-link \
        apollo-link-error \
        apollo-link-http \
        apollo-link-ws \
        graphql \
        graphql-tag \
        primeicons \
        primeng@${PRIMENG_VER}
