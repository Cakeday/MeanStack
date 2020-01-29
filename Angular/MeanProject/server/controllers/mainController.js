const mongoose = require('mongoose')
const Game = mongoose.model('Game')

module.exports = {
    find: (req, res) => {
        Game.find()
            .then(data => res.json(data))
            .catch(error =>res.json(error))
    },
    findOne: (req, res) => {
        Game.findOne({_id: req.params.id})
            .then(data => res.json(data))
            .catch(error =>res.json(error))
    },
    create: (req, res) => {
        Game.create(req.body)
            .then(data => res.json(data))
            .catch(error =>res.json(error))
    },
    updateOne: (req, res) => {
        Game.updateOne({_id: req.body._id},req.body,{new:true, runValidators:true})
            .then(data => res.json(data))
            .catch(error =>res.json(error))
    },
    deleteOne: (req, res) => {
        Game.deleteOne({_id: req.params.id})
            .then(data => res.json(data))
            .catch(error =>res.json(error))
    },

}