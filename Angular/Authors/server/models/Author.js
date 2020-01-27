const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({

    name: {type: String, required: [true, "Bro, just put the name in"], minlength: [3, "and make it at least 3 characters"]},
    _quotes: [{
        phrase: {type: String, minlength: [3, "gotta be at least 3 characters"]}
    }]
    
})

mongoose.model('Author', AuthorSchema);