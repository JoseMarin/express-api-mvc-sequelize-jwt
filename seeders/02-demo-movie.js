'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('movies', [{
        title : "Train to Busan",
        categoryId : 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "Shaun of the dead",
        categoryId : 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "ZombieLand",
        categoryId : 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "Evil Dead",
        categoryId : 25,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "Evil Dead 2",
        categoryId : 25,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "Evil Dead 3",
        categoryId : 25,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "28 Days Later",
        categoryId : 25,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "Zombiever",
        categoryId : 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "Overlord",
        categoryId : 25,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : "Black Sheep",
        categoryId : 15,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkDelete('movies', null, {});
     
  }
};
