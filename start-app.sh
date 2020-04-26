docker-compose down
docker-compose build
docker-compose up -d
docker exec -it customer_info_app bash -c "cd api; sleep 5; sh run-migrations-seeders.sh; cd ../ui; yarn start;"