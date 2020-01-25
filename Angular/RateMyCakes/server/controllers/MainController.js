const mongoose = require('mongoose');
let Cake = mongoose.model('Cake')

module.exports = {

    getAllCakes: (req, res) => {
        Cake.find()
            .then(data => {
                console.log("Here are all the Cakes and their ratings: " + data);
                res.json(data)
            })
            .catch(err => {
                err = "it didnt work";
                res.json(err);
            })
    },

    getOneCake: (req, res) => {
        Cake.findOne({_id: req.params.id})
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                err = "I couldn't find what you were looking for :(";
                res.json(err);
            })
    },

    createCake: (req, res) => {
        Cake.create(req.body)
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                err = "Didnt make the new cake";
                res.json(err);
            })
    },

    updateCake: (req, res) => {
        Cake.updateOne({_id: req.params.id}, req.body, {new:true})
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                err = "Didnt update the cake";
                res.json(err);
            })
    },

    deleteCake: (req, res) => {
        Cake.remove({_id: req.params.id})
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                err = "Didnt make the new cake";
                res.json(err);
            })
    },

    



}