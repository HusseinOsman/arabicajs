
### STAGE 1: Build ###

# We label our stage as ‘builder’
FROM node:10.13-alpine as builder

WORKDIR /docs

COPY apidoc.json apiDocFooter.md apiDocHeader.md ./
COPY src ./src

RUN npm install apidoc -g

RUN apidoc -i src/ -o apidoc/
#############################################################

### STAGE 2: Setup ###

FROM nginx:1.14.1-alpine

## Copy our default nginx config
COPY .docker/apidoc/nginx/default.conf /etc/nginx/conf.d/

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

WORKDIR /usr/share/nginx/html

## From ‘builder’ stage copy over the artifacts in apidoc folder to default nginx public folder
## COPY ./apidoc /usr/share/nginx/html
COPY --from=builder /docs/apidoc /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]