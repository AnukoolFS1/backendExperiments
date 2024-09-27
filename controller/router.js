const express = require('express');
const router = express.Router();
const {person1, person2} = require('../models/Person')

router.post('/', (req, res) => {
    const { name, age, salary, profession } = req.body;

    const person = person1({
        name, age, salary, profession
    })

    person.save()
        .then(resspons => {
            console.log('data saved');
            res.status(200).send('<h1>data saved</h1>')
        })
        .catch(err => console.log('error occured', err))
})

router.post('/test', (req, res) => {
    const { name, email } = req.body;

    const persona = person2({
        name, email
    })

    persona.save()
        .then(resspons => {
            console.log('data saved');
            res.status(200).send('<h1>data saved</h1>')
        })
        .catch(err => console.log('error occured', err))
})

// router.get('/', (req, res) => {

// })


module.exports = router