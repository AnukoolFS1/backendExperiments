const express = require('express');
const app = express();
const connect = require('./models/db');
const router = require('./controller/router')

const PORT = 9090

app.use(express.json());

connect()

app.use('/', router)

app.listen(PORT, ()=>console.log(`server initiated at ${PORT}`))