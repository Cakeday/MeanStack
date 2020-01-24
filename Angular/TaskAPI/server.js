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

// POST DATA SETTINGS
// app.use(express.urlencoded({extended: true}));
app.use(express.json())


// PORT SETTINGS
app.listen(8000, () => console.log("listening on port 8000"));


// MONGOOSE SETTINGS (be sure to change the db youre referencing)
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/TaskAPI', {useNewUrlParser: true, useUnifiedTopology: true});





// MODELS
const TaskSchema = new mongoose.Schema({
    title: {type: String, required: true, minlength: 1},
    description: {type: String, minlength: 1, default: ""},
    completed: {type: Boolean, default: false},
}, {timestamps: true});

const Task = mongoose.model('Task', TaskSchema);






// SESSION SETTINGS
// const session = require('express-session');
// app.use(session({
//     secret: 'keyboardkitteh',
//     resave: false,
//     saveUninitialized: true,
//     cookie: { maxAge: 60000 }
//   }))


// FLASH SETTINGS
// const flash = require('express-flash');
// app.use(flash());


// VIEWS AND STATIC SETTINGS
// app.use(express.static(__dirname + "/static"));
app.use(express.static(__dirname + "/public/dist/public"));
// app.set('view engine', 'ejs');
// app.set('views', __dirname + '/views');







// ROUTES
app.get('/tasks', (req, res) => {
    Task.find()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            err = "Idk it just didnt work ahaha";
            res.json(err);
        })
})

app.get("/tasks/:id", (req, res) => { 
    Task.findOne({_id: req.params.id})
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            err = "I couldn't find what you were looking for :(";
            res.json(err);
        })
})

app.post("/tasks", (req, res) => { 
    console.log(req.body);
    Task.create(req.body)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        })
})

app.put("/tasks/:id", (req, res) => {
    Task.updateOne({_id: req.params.id}, req.body, {new:true})
        .then(data => {
            console.log("got here")
            res.json(data)
        })
        .catch(err => {
            res.json(err);
        })
})

app.delete("/tasks/:id", (req, res) => { 
    Task.remove({_id: req.params.id})
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            err = "Couldn't find it hahahaha";
            res.json(err);
        })
})