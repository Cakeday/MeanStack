// Things to require/download:
//      express
//      express-session
//      mongoose
//      ejs
//      express-flash
//      socket-io (not here yet, but you would create a sockets configuration)



// EXPRESS SETTINGS
const express = require("express");
const app = express();

// POST DATA SETTINGS
app.use(express.urlencoded({extended: true}));


// PORT SETTINGS
app.listen(8000, () => console.log("listening on port 8000"));


// MONGOOSE SETTINGS (be sure to change the db youre referencing)
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/quotes', {useNewUrlParser: true, useUnifiedTopology: true});


// MODELS
// const QuoteSchema = new mongoose.Schema({
//     name: {type: String, required: true, maxlength: 15},
//     quote: {type: String, required: true, minlength: 1},
// }, {timestamps: true});
// const Quote = mongoose.model('Quote', QuoteSchema);


// SESSION SETTINGS (Keep them in server.js)
const session = require('express-session');
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))


// FLASH SETTINGS (Keep them here too)
const flash = require('express-flash');
app.use(flash());


// VIEWS AND STATIC SETTINGS
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');






// ROUTES
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);