const router = require('express').Router()
const { Item } = require('../models')  //Bringing models

router.get('/items', (req, res) => {
  Item.find({})
    .then(items => res.json(items))
    .catch(err => console.log(err))
})

router.post('/items', (req, res) => {
  Item.create(req.body)
    .then(item => res.json(item))
    .catch(err => console.log(err))
})

router.put('/items/:id', (req, res) => {
  Item.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

router.delete('/items/:id', (req, res) => {
  Item.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

module.exports = router