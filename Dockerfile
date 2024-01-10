FROM node:20.10.0-alpine3.19 as build

WORKDIR /app
COPY . /app

RUN npm install
RUN npm run build

FROM php:8.3.0-apache
COPY --from=build /app/dist /var/www/html/
