const express = require('express');
const app = express();
const path = require('path');

app.use(express.json())
app.use(express.static(path.join(__dirname, './public/dist/public')))

require('./server/config/mongoose');
require('./server/config/routes')(app);

app.listen(8000, () => {console.log("Listening on port 8000... daddy ;)")});