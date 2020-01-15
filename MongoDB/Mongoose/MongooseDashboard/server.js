// Things to require:
//      express
//      express-session
//      mongoose
//      ejs
//      express-flash
//      socket-io (not here yet)
//      marx-css



// EXPRESS SETTINGS
const express = require("express");
const app = express();

// POST DATA SETTINGS
app.use(express.urlencoded({extended: true}));


// PORT SETTINGS
app.listen(8000, () => console.log("listening on port 8000"));


// MONGOOSE SETTINGS (be sure to change the db youre referencing)
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dogs', {useNewUrlParser: true, useUnifiedTopology: true});


// MODELS
const DogSchema = new mongoose.Schema({
    name: {type: String, required: true, maxlength: 15},
    breed: {type: String, required: true, minlength: 1},
    speed: {type: Number, required: true, minlength: 1, maxlength: 10},
    intelligence: {type: Number, required: true, minlength: 1, maxlength: 10},
}, {timestamps: true});
const Dog = mongoose.model('Dog', DogSchema);


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
    Dog.find()
        .then(data => {
            console.log(data); 
            res.render("index", {dogs: data})})
        .catch(err => res.json(err));
});


app.get('/dogs/new', (req, res) => {
    res.render('new_dog');
})

app.post('/create', (req, res) => {
    let newDog = req.body;
    Dog.create(newDog)
        .then(data => {
            console.log('dog created: ', data);
            res.redirect('/')
        })
        .catch(err => {
            res.json(err);
        })
})


app.get('/dogs/:id', (req, res) => {
    const { id } = req.params;
    Dog.findOne({_id: id})
        .then(dog => {
            res.render('dog_display', {dog: dog});
        })
        .catch(err => {
            res.json(err);
        })
})


app.get('/dogs/edit/:id', (req, res) => {
    // const { id } = req.params;
    Dog.findOne({_id: req.params.id})
        .then(dog => {
            res.render('dog_edit', {dog: dog});
        })
        .catch(err => {
            res.json(err);
        })
})

app.post('/dogs/:id', (req, res) => {
    Dog.updateOne({_id: req.params.id}, {
        name: req.body.name,
        breed: req.body.breed,
        speed: req.body.speed,
        intelligence: req.body.intelligence,
    })
        .then(dog => {
            console.log(dog);
            res.redirect('/dogs/' + req.params.id);
        })
        .catch(err => {
            res.json(err);
        })
})

app.get('/dogs/destroy/:id', (req, res) => {
    const { id } = req.params;
    Dog.remove({_id: id})
        .then(data => {res.redirect('/')})
        .catch(err => res.json(err))
})

// app.post('/quotes', (req, res) => {
//     console.log(req.body);
//     let newQuote = req.body;
//     Quote.create(newQuote)
//         .then(newQuote => {
//             console.log('quote created: ', newQuote);
//             res.redirect('/quotes');
//         })
//         .catch(err => {
//             console.log(err);
//             for (var key in err.errors) {
//                 req.flash('submit', err.errors[key].message);
//             }
//             res.redirect('/');
//         });
// });

// app.get('/quotes', (req, res) => {
//     Quote.find().sort({createdAt: -1})
//         .then(quotes => {
//             console.log(quotes);
//             res.render('quotes', {quotes: quotes});
//         })
//         .catch(err => {
//             console.log(err);
//             res.json(err);
//         })
// })


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
