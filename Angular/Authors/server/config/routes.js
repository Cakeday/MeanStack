const mainController = require('../controller/MainController');
const path = require('path');

module.exports = (app) => {
    app.get('/api/findAll', mainController.find)
    app.get('/api/findOne/:id', mainController.findOne)
    app.post('/api/create', mainController.create)
    app.put('/api/updateOne', mainController.updateOne)
    app.delete('/api/deleteOne/:id', mainController.deleteOne)
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}