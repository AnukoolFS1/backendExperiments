const express = require('express');
const app = express();
const main = require('./db.js')

main().then(data => console.log(data)).catch(err => console.error(err))

app.get('/', (req,res) => {
    res.send('testing here')
})

app.listen(3000, () => console.log('server has initiated'));