const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send('testing here')
})

app.listen(3000, () => console.log('server has initiated'));