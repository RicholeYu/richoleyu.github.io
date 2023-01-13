FROM node AS builder
COPY ./ /blog
WORKDIR /blog
RUN cd /blog && npm i npm -g && npm i && npm run build

FROM nginx
COPY --from=builder /blog/conf.d/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /blog/public /usr/share/nginx/html
EXPOSE 80