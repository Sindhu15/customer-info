module.exports = {
    username: "postgres",
    password: "postgres",
    database: "customer_info",
    host: "localhost",
    port:"5441"
    dialect: "postgres",
    logging: false,
    //seederStorage: "sequelize",
    define: {
      underscored: true,
      timestamps: true
    }  
  };