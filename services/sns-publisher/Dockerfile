FROM risingstack/alpine:3.3-v6.9.4-4.2.1

ENV PATH /usr/src/app/node_modules/.bin:$PATH
ENV NODE_ENV development

WORKDIR /usr/src/app

# Bundle app source
COPY . /usr/src/app

EXPOSE 3000
EXPOSE 8080

ENTRYPOINT ["/bin/sh", "-c"]

CMD ["npm install && WEBPACK_CONFIG_TYPE=local node-debug --save-live-edit --web-host 0.0.0.0 serverless offline start"]