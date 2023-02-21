'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('buckets', [
      {
        id: 1,
        name: 'climb mount everest',
        difficulty: 2,
        author: 'jake',
        description: 'the tallest mountian'
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('buckets', null, {})
  }
};
