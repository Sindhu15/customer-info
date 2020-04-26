# FROM postgres 
# ENV POSTGRES_PASSWORD postgres 
# ENV POSTGRES_DB customer_info 


FROM node:10
# USER root:node

RUN npm install -g nodemon
WORKDIR /usr/src/app
# 

COPY . .

RUN yarn --cwd ./api

# EXPOSE 3000
EXPOSE 3000

CMD [ "nodemon" , "./api/app.js" ]


