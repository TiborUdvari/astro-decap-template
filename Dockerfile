FROM node:20-alpine

RUN apk add --no-cache git webhook supervisor
RUN git config --global url."https://TiborUdvari:${GITHUB_TOKEN}@github.com/".insteadOf "https://github.com/"
RUN git config --global --add safe.directory /app

WORKDIR /app

COPY ./package.json ./package.json
COPY ./deploy/supervisord.conf /etc/supervisord.conf
COPY ./deploy/hooks.json ./hooks.json 

RUN npm install

EXPOSE 4321
EXPOSE 9000

CMD ["/usr/bin/supervisord", "-c", "/etc/supervisord.conf"]
