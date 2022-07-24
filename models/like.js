'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    
    static associate(models) {
      Like.belongsTo(models.User, { foreignKey: 'userId' })
      Like.belongsTo(models.Tweet, { foreignKey: 'TweetId' })
    }
  };
  Like.init({
    name: DataTypes.STRING,
    use_id: DataTypes.INTEGER,
    tweet_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Like',
    tableName: 'Likes', // 別忘了這行
    underscored: true
  })
  return Like;
};