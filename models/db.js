const mongoose = require('mongoose');

async function connect() {
    try{
        await mongoose.connect('mongodb+srv://anukool:fmdb1@learningmdb.cqck4.mongodb.net/revisionDB?retryWrites=true&w=majority&appName=LearningMDB')
        console.log("DB Conneted!")
    }
    catch(error){
        console.log('Error occured')
        console.log(error)
    }
}

module.exports = connect