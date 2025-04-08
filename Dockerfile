FROM docker.1ms.run/node:23 AS builder
COPY ./ /blog
WORKDIR /blog
RUN npm config set strict-ssl false
RUN npm i npm -g
RUN npm i
RUN npm run build

FROM docker.1ms.run/nginx:1.27.4
COPY --from=builder /blog/conf.d/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /blog/public /usr/share/nginx/html
EXPOSE 80