const mainController = require('../controllers/mainController')
const playercards = require('../controllers/playercards')
const subjectcards = require('../controllers/subjectcards')
const players = require('../controllers/players')
const path = require('path')

module.exports = (app) => {
    app.get('/api/findAll', mainController.find)
    app.get('/api/findOne/:id', mainController.findOne)
    app.post('/api/create', mainController.create)
    app.put('/api/updateOne', mainController.updateOne)
    app.delete('/api/deleteOne/:id', mainController.deleteOne)

    app.get('/api/playercard/findAll', playercards.find)
    app.get('/api/playercard/findOne/:id', playercards.findOne)
    app.post('/api/playercard/create', playercards.create)
    app.put('/api//playercard/updateOne', playercards.updateOne)
    app.delete('/api/playercard/deleteOne/:id', playercards.deleteOne)


    app.get('/api/subjectcard/findAll', subjectcards.find)
    app.get('/api/subjectcard/findOne/:id', subjectcards.findOne)
    app.post('/api/subjectcard/create', subjectcards.create)
    app.put('/api//subjectcard/updateOne', subjectcards.updateOne)
    app.delete('/api/subjectcard/deleteOne/:id', subjectcards.deleteOne)
    
    app.get('/api/player/findAll', players.find)
    app.get('/api/player/findOne/:id', players.findOne)
    app.post('/api/player/create', players.create)
    app.put('/api//player/updateOne', players.updateOne)
    app.delete('/api/player/deleteOne/:id', players.deleteOne)
    
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}