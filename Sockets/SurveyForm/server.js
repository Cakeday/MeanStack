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

    
});




app.get('/', (req, res) => {
    res.render("index");
});

