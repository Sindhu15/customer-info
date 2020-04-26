# docker ps -a | awk '{ print $1,$2 }' | grep sindhu/customer_info_local | awk '{print $1 }' | xargs -I {} docker rm --force {}
# docker ps -a | awk '{ print $1,$2 }' | grep customer-postgres-docker | awk '{print $1 }' | xargs -I {} docker rm --force {}

# docker rmi sindhu/customer_info_local
# docker rm customer-postgres-docker --force

# docker build -t sindhu/customer_info_local .
# docker run -p 3001:3000 -d sindhu/customer_info_local

# docker run --name customer-postgres-docker -e POSTGRES_PASSWORD=postgres -p 5440:5432 -d postgres

# docker exec -it customer-postgres-docker psql -U postgres -c "CREATE DATABASE customer;"

# . start-app.sh

docker-compose down
docker-compose build
docker-compose up -d
docker exec -it customer_info_app bash

# exec api/node_modules/.bin/sequelize db:migrate
# node_modules/.bin/sequelize db:migrate


# node_modules/.bin/sequelize init
# cd api/sequelize init
# sequelize init:config                       
# sequelize init:migrations                   
# sequelize init:models                       
# sequelize init:seeders 