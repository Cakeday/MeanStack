// These are settings for connecting to your database
let mongoose = require('mongoose');
const path = require('path')
const fs = require('fs')


// Be sure to change the DB youre referencing
mongoose.connect('mongodb://localhost/quotes', {useNewUrlParser: true, useUnifiedTopology: true});


// Brings all your models in
var models_path = path.join(__dirname, './../models');
// read all of the files in the models_path and require (run) each of the javascript files
fs.readdirSync(models_path).forEach(function(file) {
  if(file.indexOf('.js') >= 0) {
    // require the file (this runs the model file which registers the schema)
    require(models_path + '/' + file);
   }
})

