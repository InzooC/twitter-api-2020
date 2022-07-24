'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Reply extends Model {
    static associate(models) {
      Reply.belongsTo(models.User, { foreignKey: 'userId' })
      Reply.belongsTo(models.Tweet, { foreignKey: 'TweetId' })
    }
  }
  Reply.init({
    comment: DataTypes.TEXT,
    user_id: DataTypes.INTEGER,
    tweet_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Reply',
    tableName: 'Replies', // 別忘了這行
    underscored: true
  })
  return Reply
}