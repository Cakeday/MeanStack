const mongoose = require('mongoose');

const DogSchema = new mongoose.Schema({
    name: {type: String, required: true, maxlength: 15},
    breed: {type: String, required: true, minlength: 1},
    speed: {type: Number, required: true, minlength: 1, maxlength: 10},
    intelligence: {type: Number, required: true, minlength: 1, maxlength: 10},
}, {timestamps: true});


const Dog = mongoose.model('Dog', DogSchema);