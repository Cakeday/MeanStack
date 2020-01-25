let mongoose = require('mongoose');

const CakeSchema = new mongoose.Schema({
        baker: {type: String, required: true, maxlength: 25},
        cake: {type: String, required: true, minlength: 1},
        _ratings: [{
            rating: {type: Number, required: true},
            comment: {type: String, required: true, minlength: 1},
        }],
    }, {timestamps: true});

    
mongoose.model('Cake', CakeSchema);

