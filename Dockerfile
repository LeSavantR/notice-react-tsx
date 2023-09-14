FROM node:lts-alpine3.17 AS builder

WORKDIR /app

COPY ["./package*.json", "./"]

RUN npm install


FROM builder as development

WORKDIR /app

COPY [".", "."]

CMD [ "npm", "run", "dev" ]


FROM development as build-stage

WORKDIR /app

RUN npm run build


FROM nginx:stable-alpine as production

COPY --from=build-stage /app/dist /usr/share/nginx/html

COPY ["conf/nginx.conf", "/etc/nginx/conf.d/default.conf"]