'use strict';
module.exports = (sequelize, DataTypes) => {
  const customer_addresses = sequelize.define('customer_addresses', {
    customerId: {
      type: DataTypes.INTEGER,
      field: 'customer_id'
    },
    flat: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    pincode: DataTypes.STRING
  }, 
  {
    timestamps: true,
    underscored: true
  });
  customer_addresses.associate = function(models) {
    // associations can be defined here
  };
  customer_addresses.removeAttribute('id');
  return customer_addresses;
};

