'use strict';
const { DataTypes } = require('sequelize')


module.exports = {
  up: async ({ context: queryInterface }) => {
    await queryInterface.createTable('stud', {
      Resultid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      StudentId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Company: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Package: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      PassoutYear: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      PlacementDate: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      jobRole: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'departments',
          key: 'id',
        },
       OfferAcceptance: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
    },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    });
  },

  down: async ({ context: queryInterface }) => {
    await queryInterface.dropTable('stud');
  },
};
