const router = require('express').Router()
const data = require('../models/model-schema')

router.get('/render', (req, res) => {
    res.render('error', { title: "oops!", user: "dear" })
})

router.get('/', async (req, res) => {
    let result = await data.find()
    res.status(200)
    res.json(result)
})

router.post('/', async (req, res) => {
    const { name, age, salary, profession } = req.body;
    let newData = new data({
        name, age, salary, profession
    })
    try {
        await newData.save()
        res.status(201).json({ msg: "data has been saved successfully" })
    } catch (err) {
        res.status(400).json({ msg: 'some error occured try again after some time' })
        console.log(err)
    }
})

router.put('/update/:id', (req, res) => {
    const _id = req.params.id;

    data.findOneAndUpdate({ _id }, req.body).then(result => {
        console.log('data updated')
        res.end()
    }).catch(err => {
        console.log('error occured', err)
        res.end()
    })
})

router.delete('/delete/:name', (req, res) => {
    const delName = req.params.name;

    data.deleteOne({ name: delName }).then((res) => {
        console.log(`${delName} has deleted`)
    }).catch((err) => {
        console.log('error occured =>', err)
    })

    res.end()
})


module.exports = router