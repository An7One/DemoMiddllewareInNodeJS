import mongo from 'mongodb'
import { ConfigCosmosMongoDB } from '../config'

const mongoClient = mong.MongoClient

function ReadOne (dbName, collectionName, identity) {
  mongoClient.connect(
    ConfigCosmosMongoDB.PRIMARY_CONNECTION_STRING,
    { useNewUrlParser: true },
    (err, client) => {
      if (err) {
        throw new Error(err)
      }

      const db = client.db(dbName)
      const collection = db.collection(collectionName)

      console.log(`Successfully connecting to collection ${collectionName}`)

      collection.find({}).toArray((err, docs) => {
        docs.forEach(doc => {
          console.log(`doc: ${doc}`)
        })
      })

      client.close()
    }
  )
}
