// Things to require:
//      express
//      express-session
//      mongoose
//      ejs
//      express-flash
//      socket-io (not here yet)



// EXPRESS SETTINGS
const express = require("express");
const app = express();

// POST DATA SETTINGS
app.use(express.urlencoded({extended: true}));


// PORT SETTINGS
app.listen(8000, () => console.log("listening on port 8000"));


// MONGOOSE SETTINGS (be sure to change the db youre referencing)
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quotes', {useNewUrlParser: true, useUnifiedTopology: true});


// MODELS
const QuoteSchema = new mongoose.Schema({
    name: {type: String, required: true, maxlength: 15},
    quote: {type: String, required: true, minlength: 1},
}, {timestamps: true});
const Quote = mongoose.model('Quote', QuoteSchema);


// SESSION SETTINGS
const session = require('express-session');
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))


// FLASH SETTINGS
const flash = require('express-flash');
app.use(flash());


// VIEWS AND STATIC SETTINGS
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');






// ROUTES
app.get('/', (req, res) => {
    // User.find()
    // .then(data => res.render("index", {users: data}))
    // .catch(err => res.json(err));

    res.render('index');
});

app.post('/quotes', (req, res) => {
    console.log(req.body);
    let newQuote = req.body;
    Quote.create(newQuote)
        .then(newQuote => {
            console.log('quote created: ', newQuote);
            res.redirect('/quotes');
        })
        .catch(err => {
            console.log(err);
            for (var key in err.errors) {
                req.flash('submit', err.errors[key].message);
            }
            res.redirect('/');
        });
});

app.get('/quotes', (req, res) => {
    Quote.find().sort({createdAt: -1})
        .then(quotes => {
            console.log(quotes);
            res.render('quotes', {quotes: quotes});
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        })
})


// EXAMPLE USAGE OF FLASH
// app.post('/users', (req, res) => {
//     const user = new User(req.body);
//     user.save()
//         .then(() => res.redirect('/'))
//         .catch(err => {
//             console.log("We have an error!", err);
//             // adjust the code below as needed to create a flash message with the tag and content you would like
//             for (var key in err.errors) {
//                 req.flash('registration', err.errors[key].message);
//             }
//             res.redirect('/');
//         });
// });
