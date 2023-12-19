FROM node:18-alpine3.17 as build

WORKDIR /app
COPY . /app

RUN npm install
RUN npm run build

FROM php:8.3.0-apache
COPY --from=build /app/dist /var/www/html/
