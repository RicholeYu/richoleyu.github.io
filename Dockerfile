FROM node AS builder
COPY ./ /blog
WORKDIR /blog
RUN npm i npm -g
RUN npm i
RUN npm run build

FROM nginx
RUN rm -rf /usr/share/nginx/html
COPY --from=builder /blog/public /usr/share/nginx/html
RUN rm -rf /etc/nginx/conf.d/*
COPY ./conf.d /etc/nginx/conf.d
RUN mkdir /certs
COPY ./certs /certs
EXPOSE 80 443