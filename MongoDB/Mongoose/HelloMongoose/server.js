const express = require("express");
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true});

const UserSchema = new mongoose.Schema({
    name: String,
    age: Number
});
const User = mongoose.model('User', UserSchema);






app.use(express.urlencoded({extended: true}));

app.use(express.static(__dirname + "/static"));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.listen(8000, () => console.log("listening on port 8000"));






app.get('/', (req, res) => {
    User.find()
        .then(data => res.render("index", {users: data}))
        .catch(err => res.json(err));
});

app.post('/users', (req, res) => {
    console.log(req.body);
    const user = new User();
    user.name = req.body.name;
    user.age = req.body.age;
    user.save()
        .then(newUserData => console.log('user created: ', newUserData))
        .catch(err => console.log(err));
  res.redirect('/');
});