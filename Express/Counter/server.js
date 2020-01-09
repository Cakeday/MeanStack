const express = require("express");
const app = express();
const session = require('express-session');
app.use(express.static(__dirname + "/static"));
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');



app.get('/', (req, res) => {
    if(req.session['counter'] == null){
        req.session.counter = 0;
    } else {
        req.session.counter++;
    }
    let counter = req.session.counter;
    res.render("index", {counter: counter});
});

app.get('/two', (req, res) => {
    if(req.session['counter'] == null){
        req.session.counter = 0;
    } else {
        req.session.counter++;
    }
    let counter = req.session.counter;
    res.redirect("/");
});

app.get('/reset', (req, res) => {
    if(req.session['counter'] == null){
        req.session.counter = 0;
    } else {
        req.session.counter = 0;
    }
    res.redirect("/");
});



app.listen(8000, () => console.log("listening on port 8000"));