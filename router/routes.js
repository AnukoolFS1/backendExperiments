const router = require('express').Router()
const data = require('../models/model-schema')

router.get('/',async (req, res)=>{
    let result = await data.find()
    res.status(200)
    res.json(result)
})

router.post('/', async (req,res) => {
    const {name, age, salary, profession} = req.body;
    let newData = new data({
        name, age, salary, profession
    })
    await newData.save()
    console.log('data saved')
    res.end()
})


router.delete('/delete/:name',async (req, res) => {
    const delName = req.params.name;

    data.deleteOne({name:delName}).then((res)=>{
        console.log(`${delName} has deleted`)
    }).catch((err)=>{
        console.log('error occured =>', err)
    })

    res.end()
} )


router.put('/update/:id', (req, res) => {
    const _id = req.params.id;

    data.findOneAndUpdate({_id}, req.body).then(result => {
        console.log('data updated')
        res.end()
    }).catch(err => {console.log('error occured', err)
        res.end()
    })
})
module.exports = router