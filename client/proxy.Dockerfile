FROM node:9.11.1-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# etapa de producción
FROM nginx:1.13.12-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY prod_nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]