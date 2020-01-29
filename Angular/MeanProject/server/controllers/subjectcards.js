const mongoose = require('mongoose')
const SubjectCard = mongoose.model('SubjectCard')

module.exports = {
    find: (req, res) => {
        SubjectCard.find()
            .then(data => res.json(data))
            .catch(error =>res.json(error))
    },
    findOne: (req, res) => {
        SubjectCard.findOne({_id: req.params.id})
            .then(data => res.json(data))
            .catch(error =>res.json(error))
    },
    create: (req, res) => {
        SubjectCard.create(req.body)
            .then(data => res.json(data))
            .catch(error =>res.json(error))
    },
    updateOne: (req, res) => {
        SubjectCard.updateOne({_id: req.body._id},req.body,{new:true, runValidators:true})
            .then(data => res.json(data))
            .catch(error =>res.json(error))
    },
    deleteOne: (req, res) => {
        SubjectCard.deleteOne({_id: req.params.id})
            .then(data => res.json(data))
            .catch(error =>res.json(error))
    },

}