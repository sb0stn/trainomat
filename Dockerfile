FROM node:20-slim AS base

# node dependecies
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci && \
    rm -rf /tmp/*

# build source code
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# create production image
FROM php:8.3.2-apache AS runner
WORKDIR /app

COPY --from=builder /app/dist /var/www/html/
COPY .htaccess /var/www/html/

RUN a2enmod rewrite
