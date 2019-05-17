const Sequelize = require('sequelize');

const dbName = JSON.stringify(process.env.NODE_ENV) === JSON.stringify('dev')
    ? 'tree-data-dev' :
    JSON.stringify(process.env.NODE_ENV) === JSON.stringify('test') ?
        'tree-data-test' : 'tree-data';

const sequelize = new Sequelize(dbName, 'postgres', '', {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = sequelize;