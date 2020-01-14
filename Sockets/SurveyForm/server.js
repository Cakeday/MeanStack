const express = require("express");
const app = express();
const session = require('express-session');
var server = app.listen(8000, () => console.log("listening on port 8000"));
const io = require('socket.io')(server);
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


io.on('connection', function (socket) {
    socket.emit('greeting', { msg: 'Greetings, from server Node, brought to you by Sockets! -Server' });
    socket.on('thankyou', function (data) { //7
        console.log(data.msg);
    });

    socket.on('posting_form', function(data){
        console.log(data);
        let num = Math.floor(Math.random()*1000);
        socket.emit('final_form', data, num);
    })




    var counter = 0;
    socket.on('push_epic', function(data){
        counter += 1;
        console.log(counter);
        io.emit('update', counter);
    });

    socket.on('reset', function(data){
        counter = 0;
        console.log(counter);
        io.emit('update', counter);
    })







    
});




app.get('/', (req, res) => {
    res.render("index");
});

app.get('/game', (req, res) => {
    res.render("game");
});



