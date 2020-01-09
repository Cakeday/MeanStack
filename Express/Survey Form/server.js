const express = require("express");
const app = express();
const session = require('express-session');
app.use(express.static(__dirname + "/static"));
app.use(express.urlencoded({extended: true}));
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');



app.get('/', (req, res) => {
    res.render("index");
});

app.post('/result', (req, res) => {
    var info = req.body;
    req.session.info = info;
    res.redirect('/result');
});

app.get('/result', (req, res) => {
    var info = req.session.info;
    res.render("result", {info: info});
});


app.listen(8000, () => console.log("listening on port 8000"));