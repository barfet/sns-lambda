FROM risingstack/alpine:3.3-v6.9.4-4.2.1

ENV PATH /usr/src/app/node_modules/.bin:$PATH
ENV NODE_ENV development

RUN npm install -g yarn

WORKDIR /usr/src/app

# Bundle app source
COPY . /usr/src/app

EXPOSE 3000
EXPOSE 8080

ENTRYPOINT ["/bin/sh", "-c"]

CMD ["yarn install && WEBPACK_CONFIG_TYPE=local node-debug --web-host 0.0.0.0 node_modules/.bin/serverless offline start"]