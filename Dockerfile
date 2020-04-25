FROM node:10

WORKDIR /usr/src/app

COPY . .

RUN cd api/

COPY package*.json ./

RUN yarn

# EXPOSE 3000
EXPOSE 3000

CMD [ "node", "./api/app.js" ]
