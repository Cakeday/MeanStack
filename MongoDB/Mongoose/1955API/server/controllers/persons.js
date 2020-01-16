let mongoose = require('mongoose');
let Person = mongoose.model('Person');

module.exports = {

    index: (req, res) => {
        Person.find()
            .then(data => {
                console.log(data);
                res.json(data);
            })
    },

    new: (req, res) => {
        console.log(req.params)
        Person.create(req.params)
            .then(data => {
                res.redirect('/')
            })
            .catch(err => {
                res.json(err);
            })
    },

    remove: (req, res) => {
        Person.remove({name: req.params.name})
            .then(data => {
                res.redirect('/')
            })
            .catch(err => {
                err = "It doesnt match anything yo";
                res.json(err);
            })
    },

    info: (req, res) => {
        Person.find({name: req.params.name})
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            err = "It doesnt match anything yo";
            res.json(err);
        })
    }
}