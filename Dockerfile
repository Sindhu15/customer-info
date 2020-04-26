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
RUN yarn --cwd ./ui
# RUN yarn --cwd ./ui start

# EXPOSE 3000
EXPOSE 3000
EXPOSE 3010
# ENTRYPOINT ["/bin/sh","-c"]

CMD [ "nodemon" , "./api/app.js"]

# CMD ["yarn" , "./ui" , "start" ]


