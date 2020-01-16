let mongoose = require('mongoose')

const QuoteSchema = new mongoose.Schema({
        name: {type: String, required: true, maxlength: 15},
        quote: {type: String, required: true, minlength: 1},
    }, {timestamps: true});

    
mongoose.model('Quote', QuoteSchema);