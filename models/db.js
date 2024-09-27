const mongoose = require('mongoose');

async function connect() {
    try {
        let res = await mongoose.connect('mongodb+srv://anukool:fmdb1@learningmdb.cqck4.mongodb.net/revisionDB?retryWrites=true&w=majority&appName=LearningMDB');
        console.log('DB Connected!')
    } catch (err) {
        console.log('error occured', err)
    }

}

module.exports = connect