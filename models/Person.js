const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const person = new Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    salary: {
        type:Number,
        required: true
    },
    profession: {
        type:String,
        required: false
    }
})

const persona = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        isUnique:true
    }
})

let person2 = new mongoose.model('person2', persona)

let person1 = new mongoose.model('person', person)

module.exports = {person2, person1}