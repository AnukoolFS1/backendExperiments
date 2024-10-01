const mongoose = require('mongoose');


async function connect() {
    await mongoose.connect('mongodb+srv://anukool:fmdb1@learningmdb.cqck4.mongodb.net/revisionDB?retryWrites=true&w=majority&appName=LearningMDB')
    console.log("DB Conneted!")

}

module.exports = connect