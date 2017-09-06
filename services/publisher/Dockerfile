FROM risingstack/alpine:3.3-v6.9.4-4.2.1

ENV PATH /usr/src/app/node_modules/.bin:$PATH
ENV NODE_ENV development

WORKDIR /server

# Bundle app source
COPY . /server

EXPOSE 3000

ENTRYPOINT ["/bin/sh", "-c"]

CMD ["npm install && npm run debug"]