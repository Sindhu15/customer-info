FROM node:10
WORKDIR /usr/src/app

COPY . .

RUN yarn --cwd ./api
RUN yarn --cwd ./ui

EXPOSE 3000
EXPOSE 3010


CMD [ "node" , "./api/app.js"]


