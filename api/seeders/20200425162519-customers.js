'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('customers', [
      {
      id: 1,
      name: "Jon Snow",
      age: "30",
      sex: "male"
      },
      {
        id: 2,
        name: "Sansa",
        age: "20",
        sex: "female"
          },
      {
        id: 3,
        name: "Arya",
        age: "18",
        sex: "female"
          },
      {
        id: 4,
        name: "Tyrion",
        age: "45",
        sex: "male"
          }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('customers', null, {});
  }
};


