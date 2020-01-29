const mongoose = require('mongoose')
const PlayerCard = mongoose.model('PlayerCard')

module.exports = {
    find: (req, res) => {
        PlayerCard.find()
            .then(data => res.json(data))
            .catch(error =>res.json(error))
    },
    findOne: (req, res) => {
        PlayerCard.findOne({_id: req.params.id})
            .then(data => res.json(data))
            .catch(error =>res.json(error))
    },
    create: (req, res) => {
        PlayerCard.create(req.body)
            .then(data => res.json(data))
            .catch(error =>res.json(error))
    },
    updateOne: (req, res) => {
        PlayerCard.updateOne({_id: req.body._id},req.body,{new:true, runValidators:true})
            .then(data => res.json(data))
            .catch(error =>res.json(error))
    },
    deleteOne: (req, res) => {
        PlayerCard.deleteOne({_id: req.params.id})
            .then(data => res.json(data))
            .catch(error =>res.json(error))
    },

}