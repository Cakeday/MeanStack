// Things to require:
//      express
//      express-session
//      mongoose
//      ejs
//      express-flash
//      path
//      socket-io (not here yet)
//      marx-css



// EXPRESS SETTINGS
const express = require("express");
const app = express();

// POST/API DATA SETTINGS
// app.use(express.urlencoded({extended: true}));
app.use(express.json());


// PORT SETTINGS
app.listen(8000, () => console.log("listening on port 8000"));


// FILE PATH SETTINGS
const path = require('path')


// SESSION SETTINGS
// const session = require('express-session');
// app.use(session({
//     secret: 'keyboardkitteh',
//     resave: false,
//     saveUninitialized: true,
//     cookie: { maxAge: 60000 }
// }))


// FLASH SETTINGS
// const flash = require('express-flash');
// app.use(flash());


// VIEWS AND STATIC SETTINGS
// app.use(express.static(__dirname + "/static"));
// app.set('view engine', 'ejs');
// app.set('views', __dirname + '/views');


// CONNECT TO DB AND ROUTES
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);