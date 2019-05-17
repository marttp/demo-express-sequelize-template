const Sequelize = require('sequelize');

const sequelize = require('../db/database');

const Comment = sequelize.define('comments', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: Sequelize.STRING,
    content: Sequelize.STRING
});

Comment.belongsTo(Comment, { as: 'parent' });

module.exports = Comment;