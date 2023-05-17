'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('class', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      xid: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true
      },
      name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    const value = [
      {
      "xid": "bf259c3f8dc204775304",
      "name": "Book",
      "updated_at": "2023-04-24T05:13:53.459Z",
      "created_at": "2023-04-24T05:13:53.459Z"
    }];

    await queryInterface.bulkInsert("class", value);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('class');
  }
};