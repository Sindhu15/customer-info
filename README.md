# Customer App 

This application lists the customers available in the database. On click of any customer, it displays the list of all the addresses available for that customer.

(This application demonstrates the endt-to-end full stack app development to deployment.)
## Installation
- `Note:` Docker and docker compose must be installed in your pc.

1. Git clone the repository https://github.com/Sindhu15/customer-info.git
2. From the project root folder run `sh start-app.sh`
2. To view the app, open the following url in the browser - http://localhost:3000/

# Tech Stack

### Fronend
- React.js (source taken from create-react-app)
- Redux.js
- Redux-Thunk (Middleware)
- Material-ui

### Backend

- Koa.js
- Sequelize

### Database
- Postgres

### Deployment

- Docker
- Docker compose

## API Design

- `GET /api/customers` \
    Fetches the list of all the customers \
    Response Example:
    ```
        [
            {
            "id": 1,
            "name": "Jon Snow",
            "age": 30,
            "sex": "male"
            }
        ]
    ```
- `GET /api/customer/{customerId}/addresses` \
Fetches the list of addresses available for given customerId\
Response Example:
    ```
        [
            {
            "customerId": 1,
            "flat": "1",
            "city": "Night's Watch",
            "state": "North",
            "country": "Iceland",
            "pincode": "096541"
            }
        ]
    ```
## Database Design
There are two tables customers and customer_addresses linked by customerId as foreign key referrence.

Schema for the tables are as follows:

- customers
```
    id   : DataTypes.INTEGER, primaryKey: true,
    name : DataTypes.STRING,
    age  : DataTypes.INTEGER,
    sex  : DataTypes.STRING
```
- customer_addresses
```
    customerId : type: DataTypes.INTEGER, foreignKey  
    flat       : DataTypes.STRING,
    city       : DataTypes.STRING,
    state      : DataTypes.STRING,
    country    : DataTypes.STRING,
    pincode    : DataTypes.STRING
```


## Migrations and Seeders
sequqlize_cli is used to run the migrations to create the tables in the database and run seeders to fill the data.

## Working Example

![Customer Info App](https://www.loom.com/share/f3c3e709a4bd46099cf63910593a09bc)
