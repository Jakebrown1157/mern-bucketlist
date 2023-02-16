'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('buckets', [
      {
        name: 'climb Mount Everest',
        difficulty: 3,
        author: 'jake',
        discription: 'One of the hardest challenges on the planet'

      },
      {
        name: 'go cliff diving',
        difficulty: 2,
        author: 'jake',
        discription: 'sounds like a fun activity with friends!'

      },
      {
        name: 'Complete a Halo jump',
        difficulty: 3, 
        author: 'jake',
        discription: 'Halo = high altitude low orbit'

      },
      {
        name: 'visit a new Country',
        difficulty: 1,
        author: 'jake',
        discription: 'visit anywhere in the world youve never been'

      },
      {
        name: 'walk inside an actual palace',
        difficulty: 2,
        author: 'jake',
        discription: 'wouldnt it be nice to own this place?'

      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('buckets',null,{})
  }
};
