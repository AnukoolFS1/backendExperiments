const express = require('express');
const app = express();
const db = require('./models/db')

app.use(express.json());

db()

app.use('/', require('./router/routes'))

app.listen(5000, ()=> console.log('Server initiated'))