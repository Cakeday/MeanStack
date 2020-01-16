// These are settings for connecting to your database
let mongoose = require('mongoose');


// Be sure to change the DB youre referencing
mongoose.connect('mongodb://localhost/quotes', {useNewUrlParser: true, useUnifiedTopology: true});


// Brings your models in
require('../models/Quote')