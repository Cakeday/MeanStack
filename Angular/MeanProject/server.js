const express = require('express');
const app = express();
const path = require('path');

// let http = require('http');
// let server = http.Server(app);


app.use(express.json());
app.use(express.static(path.join(__dirname, './public/dist/public')));

require('./server/config/mongoose');
require('./server/config/routes')(app);

let server = app.listen(8000);

let socketIO = require('socket.io');
let io = socketIO(server);

require('./server/controllers/socketController')(io);