const mongoose = require('mongoose');
const Author = mongoose.model('Author');

module.exports = {
    find: (req, res) => {
        Author.find()
            .then(data => res.json(data))
            .catch(error =>res.json(error))
    },
    findOne: (req, res) => {
        Author.findOne({_id: req.params.id})
            .then(data => res.json(data))
            .catch(error =>res.json(error))
    },
    create: (req, res) => {
        Author.create(req.body)
            .then(data => res.json(data))
            .catch(error =>res.json(error))
    },
    updateOne: (req, res) => {
        Author.updateOne({_id: req.body._id},req.body,{new:true, runValidators:true})
            .then(data => res.json(data))
            .catch(error =>res.json(error))
    },
    deleteOne: (req, res) => {
        Author.deleteOne({_id: req.params.id})
            .then(data => res.json(data))
            .catch(error =>res.json(error))
    },
}