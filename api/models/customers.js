'use strict';
module.exports = (sequelize, DataTypes) => {
  const customers = sequelize.define('customers', {
    id: {
      type:DataTypes.INTEGER,
      primaryKey: true
    },
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    sex: DataTypes.STRING
  }, 
  {
    timestamps: true,
    underscored: true
  });
  customers.associate = function(models) {
    // associations can be defined here
  };
  return customers;
};