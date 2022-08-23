FROM node AS builder
COPY ./ /blog
WORKDIR /blog
RUN npm i npm -g
RUN npm i
RUN npm run build

FROM nginx
COPY --from=builder /blog/conf.d/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /blog/public /usr/share/nginx/html
COPY --from=builder /blog/certs /certs
EXPOSE 80 443