const {MongoClient} = require('mongodb')

const url = 'mongodb://localhost:27017';

const client = new MongoClient(url);

const dbName = "Project";

async function main () {
    await client.connect();
    console.log('successfully connected with the database');
    const db = client.db(dbName);
    const collection = db.collection('documents');
    collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }])

    return 'done.'
}


module.exports = main