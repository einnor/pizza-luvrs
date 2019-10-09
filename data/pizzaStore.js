const Sequelize = require('sequelize')
const Config = require('../lib/config')

const database = Config.get('DATABASE_NAME')
const host = Config.get('DATABASE_HOST')
const username = Config.get('DATABASE_USERNAME')
const password = Config.get('DATABASE_PASSWORD')

const pgClient = new Sequelize(
  database,
  username,
  password,
  {
    host,
    dialect: 'postgres'
  }
)

const Pizza = pgClient.define('pizza', {
  id: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  },
  toppings: {
    type: Sequelize.STRING
  },
  img: {
    type: Sequelize.STRING
  },
  username: {
    type: Sequelize.STRING
  },
  created: {
    type: Sequelize.BIGINT
  }
})

Pizza.sync().then(() => console.log('postgres connection ready'))

module.exports = Pizza
