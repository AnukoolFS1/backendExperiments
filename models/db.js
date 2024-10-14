require('dotenv').config()
const mongoose = require('mongoose');

const MongoURI = process.env.MongoDB_URI;

async function connect() {
    try{
        await mongoose.connect(MongoURI)
        console.log("DB Conneted!")
    }
    catch(error){
        console.log('Error occured')
        console.log(error)
    }
}

module.exports = connect