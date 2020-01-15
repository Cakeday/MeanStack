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
mongoose.connect('mongodb://localhost/messageboard', {useNewUrlParser: true, useUnifiedTopology: true});





// MODELS
const CommentSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 1},
    comment: {type: String, required: true, minlength: 1},
    _messages: [{type: mongoose.Types.ObjectId, ref: 'Message'}]
}, {timestamps: true});

const MessageSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 1},
    message: {type: String, required: true, minlength: 1},
    _comments: [{type: mongoose.Types.ObjectId, ref: 'Comment'}],
}, {timestamps: true});

const Comment = mongoose.model('Comment', CommentSchema);
const Message = mongoose.model('Message', MessageSchema);







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
    Message.find().populate('_comments').exec()
        .then(data => {
            res.render("index", {messages: data})
        })
        .catch(err => res.json(err));
    
});


app.post('/createmessage', (req, res) => {
    let newMessage = req.body;
    Message.create(newMessage)
        .then(data => {
            console.log('message created: ', data);
            res.redirect('/')
        })
        .catch(err => {
            res.json(err);
        })
})

app.post('/createcomment/:id', (req, res) => {
    console.log(req.body);
    let newComment = new Comment(req.body);
    newComment._messages = req.params.id;

    newComment.save()
        .then(savedComment => {
            console.log('comment created: ', savedComment);
            Message.findOne({_id: req.params.id})
                .then(message => {
                    message._comments.push(savedComment);
                    message.save()
                        .then(soManyFriknPromises => {
                            res.redirect('/')
                        })
                        .catch(err3 => {
                            res.json(err3);
                        })
                })
                .catch(err2 => {
                    console.log(err2);
                    res.json(err2);
                })
        })
        .catch(err => {
            res.json(err);
        })
})


// app.get('/dogs/:id', (req, res) => {
//     const { id } = req.params;
//     Dog.findOne({_id: id})
//         .then(dog => {
//             res.render('dog_display', {dog: dog});
//         })
//         .catch(err => {
//             res.json(err);
//         })
// })


// app.get('/dogs/edit/:id', (req, res) => {
//     // const { id } = req.params;
//     Dog.findOne({_id: req.params.id})
//         .then(dog => {
//             res.render('dog_edit', {dog: dog});
//         })
//         .catch(err => {
//             res.json(err);
//         })
// })

// app.post('/dogs/:id', (req, res) => {
//     Dog.updateOne({_id: req.params.id}, {
//         name: req.body.name,
//         breed: req.body.breed,
//         speed: req.body.speed,
//         intelligence: req.body.intelligence,
//     })
//         .then(dog => {
//             console.log(dog);
//             res.redirect('/dogs/' + req.params.id);
//         })
//         .catch(err => {
//             res.json(err);
//         })
// })

// app.get('/dogs/destroy/:id', (req, res) => {
//     const { id } = req.params;
//     Dog.remove({_id: id})
//         .then(data => {res.redirect('/')})
//         .catch(err => res.json(err))
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
