FROM node:20-slim AS base

# node dependecies
FROM base AS deps
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install -production=true --frozen-lockfile && \
    yarn cache clean --force && \
    rm -rf /tmp/*

# build source code
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN yarn build

# create production image
FROM php:8.3.1-apache AS runner
WORKDIR /app

COPY --from=builder /app/dist /var/www/html/
COPY .htaccess /var/www/html/

RUN a2enmod rewrite
