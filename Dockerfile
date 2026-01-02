# Build
FROM node:25.2.1-alpine3.22 as build

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run generate

# Serve
FROM nginx:1.19.4-alpine

COPY --from=build /app/.output/public /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
