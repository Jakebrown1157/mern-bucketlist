'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bucket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  bucket.init({
    bucket_id: DataTypes.INTEGER,
    item: DataTypes.STRING,
    difficulty: DataTypes.INTEGER,
    author: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'bucket',
  });
  return bucket;
};