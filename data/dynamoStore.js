const AWS = require('aws-sdk')

AWS.config.update({ reqion: 'us-east-1' })

const dynamoDb = new AWS.DynamoDB.DocumentClient()

async function putItem (table, item) {
  return new Promise((resolve, reject) => {
    const params = {
      TableName: table,
      Item: item
    }

    dynamoDb.put(params, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

async function getAllItems (table) {
  return new Promise((resolve, reject) => {
    const params = {
      TableName: table
    }

    dynamoDb.scan(params, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data.Items)
      }
    })
  })
}
