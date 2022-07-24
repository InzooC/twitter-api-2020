'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Tweet extends Model {
    static associate(models) {
      Tweet.hasMany(models.User, { foreignKey: 'likeId' })
      Tweet.hasMany(models.User, { foreignKey: 'replyId' })
      Tweet.belongsTo(models.User, { foreignKey: 'userId' })
    }
  }
  Tweet.init({
    description: DataTypes.TEXT,
    user_Id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Tweet',
    tableName: 'Tweets', // 別忘了這行
    underscored: true
  })
  return Tweet;
}
