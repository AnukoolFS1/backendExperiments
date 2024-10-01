const mongoose = require('mongoose')
const Schema = mongoose.Schema

let person1 = new Schema({
    name:{
        type:String,
        required:true
    },
    age: {
        type:Number,
        required:true
    },
    salary: {
        type:Number,
        required:true
    },
    profession: {
        type: String,
        required:true
    }
})


let model = new mongoose.model('person', person1)

module.exports = model