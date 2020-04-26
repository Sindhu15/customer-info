'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('customer_addresses', [
      {
      customer_id: 1,
        flat: 1,
        city: "Winterfell",
        state: "North",
        country: "London",
        pincode: "096541"
      },
    
      {
        customer_id: 1,
          flat: 1,
          city: "Night's Watch",
          state: "North",
          country: "Iceland",
          pincode: "096541"
        },
    
      {
        customer_id: 2,
          flat: 21,
          city: "Winterfell",
          state: "North",
          country: "London",
          pincode: "096765"
        },
    
      {
        customer_id: 2,
        flat: 21,
        city: "King Landing",
        state: "Westeros",
        country: "Ireland",
        pincode: "096877",
      },
    
      {
        customer_id:4,
        flat: 31,
        city: "King Landing",
        state: "Westeros",
        country: "Ireland",
        pincode: "096575"
      },
      {
        customer_id:4,
        flat: 11,
        city: "Casterly Rock",
        state: "Westeros",
        country: "Spain",
        pincode: "096541"
      }
    
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('customer_addresses', null, {});
  }
};


