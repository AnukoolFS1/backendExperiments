const express = require('express');
const app = express();
const { connectDB, getDB } = require('./db.js')

//connect Database
let DB

connectDB((err) => {
    if(!err) {
        console.log('reach till here')
        app.listen(3000, () => console.log('server has initiated'));
        DB = getDB()
    }else{
        console.error(err)
    }
})

// route
app.get('/', (req, res) => {
    const books = []
    DB.collection('bookr')
    .find().sort({author:1})
    .forEach((book) => books.push(book))
    .then(() => {
        res.status(200).json(books)
    })
    // res.send('testing here')
})
