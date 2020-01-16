let mongoose = require('mongoose');

let PersonSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength:1}
}, {timestamps: true})

let Person = mongoose.model('Person', PersonSchema)