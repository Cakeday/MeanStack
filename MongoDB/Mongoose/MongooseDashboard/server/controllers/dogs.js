const mongoose = require('mongoose');
let Dog = mongoose.model('Dog');

module.exports = {

    index: (req, res) => {
        Dog.find()
            .then(data => {
                console.log(data); 
                res.render("index", {dogs: data})})
            .catch(err => res.json(err));
    },

    newDog: (req, res) => {
        res.render('new_dog');
    },

    createNewDog: (req, res) => {
        let newDog = req.body;
        Dog.create(newDog)
            .then(data => {
                console.log('dog created: ', data);
                res.redirect('/')
            })
            .catch(err => {
                res.json(err);
            })
    },

    getSingleDog: (req, res) => {
        const { id } = req.params;
        Dog.findOne({_id: id})
            .then(dog => {
                res.render('dog_display', {dog: dog});
            })
            .catch(err => {
                res.json(err);
            })
    },

    editSingleDog: (req, res) => {
        Dog.findOne({_id: req.params.id})
            .then(dog => {
                res.render('dog_edit', {dog: dog});
            })
            .catch(err => {
                res.json(err);
            })
    },

    updateSingleDog: (req, res) => {
        Dog.updateOne({_id: req.params.id}, {
            name: req.body.name,
            breed: req.body.breed,
            speed: req.body.speed,
            intelligence: req.body.intelligence,
        })
            .then(dog => {
                console.log(dog);
                res.redirect('/dogs/' + req.params.id);
            })
            .catch(err => {
                res.json(err);
            })
    },

    deleteSingleDog: (req, res) => {
        const { id } = req.params;
        Dog.remove({_id: id})
            .then(data => {res.redirect('/')})
            .catch(err => res.json(err))
    },



}